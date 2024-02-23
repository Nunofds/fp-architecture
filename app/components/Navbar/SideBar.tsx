import React from "react";

import navLinks from "@/app/constants/navLinks";

const SideBar = () => {
    return (
        <>
            <nav className="w-full h-full hidden sm:flex justify-center items-center">
                <ul className="gap-10 rotate-90 flex ">
                    {navLinks.map((item) => (
                        <li
                            className="nf--transition hover:scale-110 hover:text-secondaryColor hover:underline"
                            key={item.id}
                        >
                            <a href="" className="p-3">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default SideBar;
