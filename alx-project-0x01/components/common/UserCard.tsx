import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ id, name, email, website, phone, address, company }) => {

    return (
        <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
            </div>
            <p className="text-gray-600">Email: {email}</p>
            <div className="mt-4 flex flex-col items-start justify-between text-sm text-gray-500">
                <div>website: {website}</div>
                <div>Phone {phone}</div>
                <div>Address: {address.street} {address.suite}, {address.city}, {address.zipcode}</div>
                <div className='mt-2'>Company: {company.name}</div>
                <div>
                    <em><strong>Catch phrase: {company.catchPhrase}</strong></em>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
