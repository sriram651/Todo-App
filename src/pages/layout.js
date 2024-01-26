import Header from "@/components/Header/Header";
import { useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useRouter } from "next/router";

export default function Layout({ children }) {
    const { getItem, setItem } = useLocalStorage("theme");
    const router = useRouter();

    useEffect(() => {
        const theme = getItem();
        // console.log(theme);
        if (theme !== null && theme !== undefined) {
            document.body.classList.toggle('dark', theme === 'dark');
        }
        else {
            setItem(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        }
    });

    return (
        <>
            {!router?.pathname?.includes("/auth") ? <Header /> : null}
            <main>
                {children}
            </main>
        </>
    )
}