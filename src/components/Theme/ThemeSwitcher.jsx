"use client";

import React, { useState } from 'react'

import Icon from '../Icon/Icon'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export default function ThemeSwitcher() {
    const { getItem, setItem } = useLocalStorage("theme");
    const [theme, setTheme] = useState(getItem());

    function switchTheme() {
        const newtheme = theme === "dark" ? "light" : "dark";
        document.body.classList.toggle('dark', newtheme === 'dark');
        setItem(newtheme);
        setTheme(newtheme);
    }

    return (
        <button onClick={() => switchTheme()} className="theme-switcher">
            <Icon name={theme === "dark" ? "SunIcon" : "MoonIcon"} width={20} height={20} />
            <span className="theme-text">
                {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
            </span>
        </button>
    )
}
