"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Code } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 ml-auto backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className=" flex h-14 items-center px-4 lg:px-10 w-full py-8">
                {/* logo */}
                <div className="flex items-center space-x-4 md:space-x-1 mx-2 mr-4 md:mr-6 lg:mr-10">
                    <a className="flex items-center space-x-2" href="#">
                        <Code className="h-6 w-6 text-primary" />
                        <span className="font-bold hidden md:block">
                            Brogram
                        </span>
                    </a>
                </div>

                <div className="flex flex-1 items-center justify-end space-x-2">
                    <div className="w-full flex-1 mx-2">
                        <form>
                            <div className="relative">
                                <Search className="absolute lg:left-3 lg:top-3 left-2.5 top-2.5 h-4 w-4 text-muted-foreground " />
                                <Input
                                    type="search"
                                    placeholder="Search Brogram"
                                    className="w-full pl-8 lg:pl-10 md:w-[300px] lg:w-[325px] "
                                />
                            </div>
                        </form>
                    </div>
                    <div className="flex gap-4">
                        <Button className="hidden sm:flex">Log In</Button>
                        <Link to={"/signup"}>
                            <Button
                                variant="secondary"
                                className="hidden sm:flex"
                            >
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <nav className="flex items-center space-x-6 px-6 lg:px-10 py-6   overflow-x-auto  sm:px-6 text-sm font-medium h-9 border-t md:hidden">
                <a
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                    href="#"
                >
                    Popular
                </a>
                <a
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                    href="#"
                >
                    Hot
                </a>
                <a
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                    href="#"
                >
                    Rising
                </a>
                <a
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                    href="#"
                >
                    Controversial
                </a>
            </nav>
        </header>
    );
}
