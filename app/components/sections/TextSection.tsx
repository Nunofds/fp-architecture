"use client";
import React, { useRef } from "react";

interface Props {
    children: React.ReactNode;
}

const TextWrapper = ({ children }: Props) => {
    const text = useRef<HTMLDivElement>(null);
    return (
        <div ref={text}>
            <p className="">{children}</p>
        </div>
    );
};

export default function TextSection() {
    return (
        <div className="flex flex-col justify-center gap-12 text-[3rem]">
            <TextWrapper>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt in tempora modi facere pariatur.
            </TextWrapper>

            <TextWrapper>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt in tempora modi facere pariatur.
            </TextWrapper>

            <TextWrapper>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt in tempora modi facere pariatur.
            </TextWrapper>

            <TextWrapper>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt in tempora modi facere pariatur.
            </TextWrapper>

            <TextWrapper>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt in tempora modi facere pariatur.
            </TextWrapper>
        </div>
    );
}
