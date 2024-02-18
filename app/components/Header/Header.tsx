"use client";
import Image from "next/image";
import React, { useRef } from "react";

import logo from "@/public/logo.png";
import navLinks from "@/app/constants/navLinks";
import Button from "../Button/Button";
import HeaderImage from "@/public/headerImages/header-image.jpg";
import hover3D from "@/app/utils/hover";

import { IoMdImages } from "react-icons/io";
import { BiMailSend } from "react-icons/bi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { Abril_Fatface } from "next/font/google";

import styled from "styled-components";
import Hover3d from "@/app/utils/hover";

//* FONT "Abril_Fatface"
const abril = Abril_Fatface({ subsets: ["latin"], weight: ["400"] });

const Header = () => {
    const hero = useRef<HTMLDivElement>(null);

    const hoverHero = Hover3d(hero, { x: 20, y: -5, z: 15 });

    return (
        <HeaderStyled ref={hero}>
            {/* -----NAVBAR----- */}
            <nav>
                <div className="logo">
                    <Image
                        src={logo}
                        alt="logo"
                        width={36}
                        height={36}
                        title="logo"
                    />
                    <h2>Logo</h2>
                </div>

                <ul className="nav-items">
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.name}`}>{item.name}</a>
                        </li>
                    ))}

                    <Button icon={<RiAccountPinCircleFill />} name="Login" />
                </ul>
            </nav>
            {/* -----END NAVBAR----- */}

            {/* -----HEADER CONTENT----- */}
            <div className="header-content">
                <div className="text-content">
                    <h1 className={abril.className}>
                        Conception Innovante, Créativité Architecturale
                    </h1>

                    <div className="text-paragraph">
                        <p>
                            Nous sommes passionnés par la conception
                            d&apos;espaces uniques qui transcendent
                            l&apos;esthétique pour créer des expériences
                            authentiques. Avec une expertise reconnue dans la
                            conception de bâtiments résidentiels, commerciaux et
                            institutionnels, notre équipe s&apos;engage à
                            transformer vos rêves en réalité.
                        </p>
                        <p>
                            Explorez notre portefeuille diversifié et découvrez
                            comment nous donnons vie à des concepts audacieux
                            tout en respectant les lignes directrices du design
                            durable.
                        </p>
                        <p>
                            Bienvenue dans notre univers, où chaque projet est
                            une histoire inédite à raconter.
                        </p>
                    </div>

                    <div className="header-buttons">
                        <Button
                            name="Voir Portfolio"
                            background="#5f3918"
                            color="#ddd"
                            border="1px solid #f2994a"
                            icon={<IoMdImages />}
                        />

                        <Button name="Nous contacter" icon={<BiMailSend />} />
                    </div>
                </div>

                <div className="image-content">
                    {/* image1 */}
                    <div
                        className="image"
                        style={{
                            transform: hoverHero.transform,
                            transition: hoverHero.transition,
                        }}
                    >
                        <Image
                            src={HeaderImage}
                            alt={"Image d'une de nous constructions"}
                            title=""
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
            {/* -----END OF HEADER CONTENT----- */}
        </HeaderStyled>
    );
};

//* ----- styled component -----
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

        .nav-items {
            display: flex;
            align-items: center;
            gap: 2rem;
            li {
                transition: all 0.2s ease-in-out;

                &:hover {
                    color: white;
                    transform: scale(1.05);
                }
                a {
                    padding: 0.3rem;
                    &:hover {
                        color: var(--secondary-color);
                    }
                }
            }
        }
    }

    .header-content {
        display: grid;
        grid-template-columns: 50% 50%;
        align-items: center;
        gap: 4rem;
        min-height: calc(100vh - 10vh);
        padding: 0 5rem;
    }

    .text-content {
        > h1 {
            font-size: clamp(1rem, 5vw, 4rem);
            color: var(--secondary-color);
            transition: all 0.01s linear;
            padding-bottom: 1.5rem;
        }

        .header-buttons {
            display: flex;
            gap: 1.5rem;
            margin-top: 2.5rem;
        }
    }

    .image-content .image {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            border-radius: 8px;
        }
    }

    /* MEDIA QUERY */
    @media screen and (max-width: 1024px) {
        .header-content {
            display: grid;
            grid-template-columns: 100%;
        }
    }
`;

export default Header;
