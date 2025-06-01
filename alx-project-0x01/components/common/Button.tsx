import React from "react";
import { ButtonProps } from "@/interfaces";

const Button:React.FC<ButtonProps> = ({ title, styles = ''}) => {
    return (
        <button className={`text-white bg-blue-600 hover:bg-blue-700 transition ${styles}`}>
            {title}
        </button>
    );
}

export default Button;
