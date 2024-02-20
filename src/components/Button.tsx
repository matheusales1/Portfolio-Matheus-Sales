import React from 'react';

interface ButtonProps {
    text?: string;
    click: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, click }) => {
    return (
        <button className="bg-white border border-black text-black p-4 w-60 rounded-xl mt-14 font-bold" onClick={click}>
            {text}
        </button>
    )
}
