import React from "react";
import Image from "next/image";

import logo from "@/public/logo.png";
import navLinks from "@/app/constants/navLinks";
import Button from "../Button/Button";

import { RiAccountPinCircleFill } from "react-icons/ri";

const Narbar = () => {
    return (
        <nav className="px-[4rem] min-h-[10vh] flex justify-between items-center border-b-[1px] border-borderColor">
            <div className="flex items-center gap-2 cursor-pointer">
                <Image
                    src={logo}
                    alt="logo"
                    width={36}
                    height={36}
                    title="logo"
                />
                <h2>Logo</h2>
            </div>

            <ul className="flex items-center gap-6">
                {navLinks.map((item) => (
                    <li
                        key={item.id}
                        className="nf--transition hover:scale-110"
                    >
                        <a href={`#${item.name}`}>{item.name}</a>
                    </li>
                ))}

                <Button icon={<RiAccountPinCircleFill />} name="Login" />
            </ul>
        </nav>
    );
};

export default Narbar;
