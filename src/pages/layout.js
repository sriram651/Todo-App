import Header from "@/components/Header/Header";
import { useEffect } from "react";

export default function Layout({ children }) {
    
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme !== null && theme !== undefined) {
            document.body.classList.toggle('dark', theme === 'dark');
        }
        else {
            localStorage.setItem('theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        }
    });

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}