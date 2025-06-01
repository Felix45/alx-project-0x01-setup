import React, { useState } from "react"
import UserCard from "@/components/common/UserCard"
import Header from "@/components/layout/Header"
import UserModal from "@/components/common/UserModal"
import { UserProps, UserData } from "@/interfaces"

const Users: React.FC<UserProps> = ({ users }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);

    const handleAddUser = (newUser: UserData) => {
        setUser({ ...newUser, id: users.length + 1 });
    };

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div className="container mx-auto flex justify-between">
                    <h1 className=" text-2xl font-semibold">Users List</h1>
                    <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 cursor-pointer rounded-full text-white">Add User</button>
                </div>
                <div className="container mx-auto grid grid-cols-4 gap-2 ">
                    {
                        users?.map(({ id, name, email, phone, website, address, company }: UserProps, key: number) => (
                            <UserCard name={name} email={email} website={website} phone={phone} address={address} company={company} id={id} key={id} />
                        ))
                    }
                </div>
            </main>

            {isModalOpen && (
                <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
            )}

        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()

    return {
        props: {
            users
        }
    }
}

export default Users;
