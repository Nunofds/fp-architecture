"use client";
import Image from "next/image";
import React, { useRef } from "react";

import HeaderImage from "@/public/headerImages/header-image.jpg";
import hover3D from "@/app/utils/hover";
import Button from "../Button/Button";

import { IoMdImages } from "react-icons/io";
import { BiMailSend } from "react-icons/bi";
import { Abril_Fatface } from "next/font/google";

import Hover3d from "@/app/utils/hover";
import Narbar from "../Navbar/Narbar";

//* -----FONT "Abril_Fatface"-----
const abril = Abril_Fatface({ subsets: ["latin"], weight: ["400"] });

const Header = () => {
    const hero = useRef<HTMLDivElement>(null);

    const hoverHero = Hover3d(hero, { x: 20, y: -5, z: 15 });

    return (
        <div ref={hero}>
            {/* -----NAVBAR----- */}
            <Narbar />
            {/* -----END NAVBAR----- */}

            {/* -----HEADER CONTENT----- */}
            <div className="w-full min-h-[calc(90vh)] grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-2 sm:px-[5rem]">
                <div>
                    <h1
                        className={`${abril.className} text-secondaryColor pb-[1rem] nf--liner-transition text-[clamp(2rem,5vw,4rem)]`}
                    >
                        Conception Innovante, Créativité Architecturale
                    </h1>

                    <div className="text-paragraph">
                        <p className="text-[clamp(0.8rem,5vw,1rem)]">
                            Nous sommes passionnés par la conception
                            d&apos;espaces uniques qui transcendent
                            l&apos;esthétique pour créer des expériences
                            authentiques. Avec une expertise reconnue dans la
                            conception de bâtiments résidentiels, commerciaux et
                            institutionnels, notre équipe s&apos;engage à
                            transformer vos rêves en réalité.
                        </p>
                        <p className="text-[clamp(0.8rem,5vw,1rem)]">
                            Explorez notre portefeuille diversifié et découvrez
                            comment nous donnons vie à des concepts audacieux
                            tout en respectant les lignes directrices du design
                            durable.
                        </p>
                        <p className="text-[clamp(0.8rem,5vw,1rem)]">
                            Bienvenue dans notre univers, où chaque projet est
                            une histoire inédite à raconter.
                        </p>
                    </div>

                    <div className="w-block md:flex md:justify-start md:items-center gap-4 mt-10">
                        <Button
                            name="Voir Portfolio"
                            background="#5f3918"
                            color="#ddd"
                            border="1px solid #f2994a"
                            icon={<IoMdImages />}
                            classname="sm:min-w-[240px] w-full"
                        />

                        <Button
                            name="Nous contacter"
                            icon={<BiMailSend />}
                            classname="min-w-[240px] w-full"
                        />
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    {/* image1 */}
                    <div
                        className=""
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
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
            {/* -----END OF HEADER CONTENT----- */}
        </div>
    );
};

export default Header;
