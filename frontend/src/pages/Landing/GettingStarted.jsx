import { BackgroundLines } from "@/components/aceternity/background-lines";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import IconCloud from "@/components/ui/icon-cloud";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function GettingStarted() {
    const navigate = useNavigate();
    const slugs = [
        "typescript",
        "javascript",
        "dart",
        "java",
        "react",
        "flutter",
        "android",
        "html5",
        "css3",
        "nodedotjs",
        "express",
        "nextdotjs",
        "prisma",
        "amazonaws",
        "postgresql",
        "firebase",
        "nginx",
        "vercel",
        "testinglibrary",
        "jest",
        "cypress",
        "docker",
        "git",
        "jira",
        "github",
        "gitlab",
        "visualstudiocode",
        "androidstudio",
        "sonarqube",
        "figma",
    ];

    return (
        <main>
            {/* AcernityUI Setup Showcase */}
            <BackgroundLines className="flex mb-20 items-center justify-center w-full flex-col px-8 h-[20rem] md:h-[75vh]">
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    Brogram
                    <br />
                </h2>
                <p className="max-w-xl mx-auto lg:text-2xl md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                    A social platform built by developers, for
                    developers—connect, collaborate, share insights, and grow
                    together in an ecosystem that celebrates code and
                    creativity.
                </p>
            </BackgroundLines>

            {/* MagicUI */}
            <section className="h-screen max-w-[95rem] pt-12 mx-auto flex flex-col items-center justify-center px-8 mb-20">
                <div className="mb-12 lg:mb-24">
                    <h2 className="bg-clip-text text-transparent   bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 mb-6 dark:to-white text-2xl  md:text-4xl lg:text-5xl font-sans py-2 md:pt-10 relative z-20 font-bold tracking-tight">
                        Supporting Innovation Across Multiple Tools and
                        Languages
                        <br />
                    </h2>
                    <p className=" md:text-lg">
                        At Brogram, we believe innovation thrives through
                        diversity. That’s why we support discussions across a
                        wide range of tools, frameworks, and programming
                        languages. Whether you’re diving into the latest
                        JavaScript libraries, exploring Rust, mastering DevOps
                        with Docker, or anything in between, our community is
                        here to help you grow. Join us to share knowledge, solve
                        challenges, and stay ahead in the ever-evolving tech
                        landscape.
                    </p>
                </div>

                <div className="relative flex size-full   max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </section>

            {/* ShadCN Setup Showcase */}
            <section className="h-[25rem] lg:h-[40rem] flex px-8 flex-col items-center justify-center ">
                <Button className="mt-4 mb-8" onClick={() => navigate("/home")}>
                    Open Dummy Landing Page
                    <ArrowUpRight className="w-2 h-2" />
                </Button>
                <ModeToggle />
                <p className="text-gray-500 self-center mt-32 lg:mt-44">
                    Built with ❤️ using ShadCn and React Router
                </p>
            </section>
        </main>
    );
}

export default GettingStarted;
