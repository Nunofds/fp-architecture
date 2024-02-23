import Image from "next/image";
import React from "react";

interface CardPropos {
    title?: string;
    description?: string;
    image?: any;
}

const Card = ({ title, description, image }: CardPropos) => {
    return (
        <div className="relative w-[400px] h-[500px] bg-bgColor p-6 rounded-lg border-[1px] border-borderColor nf--transition">
            <p className="absolute top-12 right-9 bg-[#222260] text-[#fff] px-[0.2rem] py-[0.5rem] rounded-lg text-[1rem] font-bold z-5">
                New
            </p>
            <div className="absolute bottom-12 left-10 z-5">
                <h3 className="inline-block	text-xl text-secondaryColor bg-bgColor px-4 py-1 rounded-full mb-2 border-[1px] border-borderColor">
                    {title}
                </h3>
                <p className="text-colorWhite">{description}</p>
            </div>

            <Image
                src={image || ""}
                alt="image ..."
                title={`image ${title}`}
                style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                }}
            />
            <div className="absolute bottom-[-2px] left-[-2px] w-[calc(100% + 4px)] h-[25%] bg-gradient-to-r from-[#111111] to-[rgba(17, 17, 17, 0.06)] rounded-bl-[8px] rounded-br-[8px]"></div>
        </div>
    );
};

export default Card;
