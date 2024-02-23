import React from "react";
import Image from "next/image";

import logo from "@/public/logo.png";
import navLinks from "@/app/constants/navLinks";
import Button from "../Button/Button";

import { RiAccountPinCircleFill } from "react-icons/ri";

const Narbar = () => {
    return (
        <nav className="px-[1rem] min-h-[10vh] flex justify-between items-center">
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

            <Button
                icon={<RiAccountPinCircleFill />}
                name="Login"
                classname="hidden sm:flex"
            />
            <Button
                icon={<RiAccountPinCircleFill />}
                classname="flex sm:hidden"
            />
        </nav>
    );
};

export default Narbar;
