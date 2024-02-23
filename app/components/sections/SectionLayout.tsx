import React from "react";

interface SectionLayoutPropos {
    children: React.ReactNode;
    ref: React.RefObject<HTMLDivElement>;
}

export default function SectionLayout({ children, ref }: SectionLayoutPropos) {
    return <section className="relative px-20 py-[10rem]">{children}</section>;
}
