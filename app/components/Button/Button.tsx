import React from "react";
import styled from "styled-components";

interface ButtonProps {
    name: string;
    icon?: React.ReactNode;
    background?: string;
    color?: string;
    border?: string;
}

const Button = ({
    name,
    icon,
    background = "var(--color-bg)",
    color,
    border,
}: ButtonProps) => {
    return (
        <ButtonStyled
            style={{ background: background, color: color, border: border }}
        >
            {icon ?? icon} {name}
        </ButtonStyled>
    );
};

const ButtonStyled = styled.button`
    padding: 0.8rem 2rem;
    border-radius: 1.875rem;
    border: 2px solid var(--color-border);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    gap: 1rem;

    &:hover {
        background: var(--color-border);
        color: var(--color-white);
    }
`;

export default Button;
