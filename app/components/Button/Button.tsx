import React from "react";

interface ButtonProps {
    name?: string;
    icon?: React.ReactNode;
    background?: string;
    color?: string;
    border?: string;
    classname?: string;
}

const Button = ({
    name,
    icon,
    background = "var(--color-bg)",
    color,
    border,
    classname,
}: ButtonProps) => {
    return (
        <button
            className={`flex items-center gap-4 py-[0.8rem] px-[2rem] rounded-[1.875rem] border-2 border-borderColor cursor-pointer nf--transition hover:bg-borderColor hover:text-colorWhite ${classname}`}
            style={{ background: background, color: color, border: border }}
        >
            {icon ?? icon} {name}
        </button>
    );
};

export default Button;
