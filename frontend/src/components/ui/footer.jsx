export default function Footer() {
    return (
        <footer className="flex flex-col gap-2  px-4 lg:px-10 sm:flex-row py-6 w-full shrink-0 items-center  md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">
                © 2024 DevDialogue, Inc. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <a
                    className="text-xs hover:underline underline-offset-4"
                    href="#"
                >
                    Terms of Service
                </a>
                <a
                    className="text-xs hover:underline underline-offset-4"
                    href="#"
                >
                    Privacy
                </a>
                <a
                    className="text-xs hover:underline underline-offset-4"
                    href="#"
                >
                    Content Policy
                </a>
            </nav>
        </footer>
    );
}
