import React, { useState } from 'react'

import Image from 'next/image'
import ThemeSwitcher from '../Theme/ThemeSwitcher';

export default function Header() {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    return (
        <>
            <header>
                <div className="header-container">
                    <div className="header-content">
                        <div className="logo-name">
                            <div className="logo-container">
                                <Image
                                    src="/todo-logo.webp"
                                    alt='Todo logo'
                                    width={100}
                                    height={100}
                                    priority
                                />
                            </div>
                            <h1>Todo App</h1>
                        </div>
                        <ThemeSwitcher />
                        {/* <button onClick={() => setToggleSidebar(!toggleSidebar)} className="sidebar-toggle">
                            <Icon name={toggleSidebar ? "Cross1Icon" : "HamburgerIcon"} width={20} height={20} />
                        </button> */}
                    </div>
                </div>
            </header>
            {toggleSidebar ? <Sidebar setToggleSidebar={setToggleSidebar} /> : null}
        </>
    )
}

function Sidebar({ setToggleSidebar }) {
    return (
        <aside className='sidebar'>
            <div className="sidebar-container">
                <p onClick={() => setToggleSidebar(false)}>Profile</p>
            </div>
        </aside>
    )
}