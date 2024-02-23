import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import SideBar from "./components/Navbar/SideBar";
import SectionLayout from "./components/sections/SectionLayout";

import cards from "@/app/utils/cards";
import TextSection from "./components/sections/TextSection";

export default function Home() {
    return (
        <>
            <header className="w-full h-full flex">
                <Header />
                <aside className="max-w-[10vh] h-screen flex justify-center items-center">
                    <SideBar />
                </aside>
            </header>

            <main className="w-full min-h-[100vh]">
                {/* ----- ABOUT ----- */}
                <SectionLayout>
                    <TextSection />
                </SectionLayout>

                {/* ----- PORTFOLIO ----- */}
                <SectionLayout>
                    <div className="flex justify-between items-center flex-nowrap gap-x-16">
                        {cards.map((card) => (
                            <Card
                                key={card.id}
                                title={card.title}
                                description={card.description}
                                image={card.image}
                            />
                        ))}
                    </div>
                </SectionLayout>

                {/* ----- VIDEO ----- */}
                <SectionLayout>
                    <div className="p-8 bg-[#161616] rounded-xl">
                        <iframe
                            width="100%"
                            src="https://www.youtube.com/embed/KiCD13jXwY8?si=ppNCUHV2UbrhDyFh"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className="border-none h-[52rem]"
                        ></iframe>
                    </div>
                </SectionLayout>

                {/* ----- TEXT ----- */}
                <SectionLayout>
                    <TextSection />
                </SectionLayout>
            </main>
        </>
    );
}
