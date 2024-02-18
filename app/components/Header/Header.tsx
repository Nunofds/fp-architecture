"use client";
import Image from "next/image";
import React from "react";

import logo from "@/public/logo.png";
import navLinks from "@/app/constants/navLinks";
import Button from "../Button/Button";
import { FaRocket, FaWallet } from "react-icons/fa";
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderStyled>
            <nav>
                <div className="logo">
                    <Image src={logo} alt="logo" width={36} height={36} />
                    <h2>Logo</h2>
                </div>

                <div className="input">
                    <input
                        type="search"
                        name="search"
                        id="search"
                        placeholder="Search"
                    />
                </div>

                <ul className="nav-items">
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.name}`}>{item.name}</a>
                        </li>
                    ))}

                    <Button icon={<FaWallet />} name="Connect Wallet" />
                </ul>
            </nav>
        </HeaderStyled>
    );
};

//* styled component
const HeaderStyled = styled.header`
    nav {
        padding: 0 4rem;
        min-height: 10vh;
        border-bottom: 1px solid var(--color-border);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
            display: flex;
            align-content: center;
            gap: 1rem;
            cursor: pointer;
        }

        .input {
            flex: 2;
            display: flex;
            justify-content: center;
            input {
                width: 55%;
                padding: 0.6rem 0.8rem;
                border-radius: 8px;
                background-color: var(--color-input);
                border: 1px solid var(--color-border);

                &:placeholder {
                    color: var(--color-border);
                    font-weight: 500;
                }
            }
        }

        .nav-items {
            display: flex;
            align-items: center;
            gap: 2rem;
            li {
                transition: all 0.2s ease-in-out;

                &:hover {
                    color: white;
                    transform: scale(1.1);
                }
                a {
                    padding: 0.3rem;
                }
            }
        }
    }
`;

export default Header;
