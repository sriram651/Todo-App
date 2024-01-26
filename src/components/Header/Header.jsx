import React, { useState } from 'react'

import Image from 'next/image'
import ThemeSwitcher from '../Theme/ThemeSwitcher';
import Logo from '../Logo/Logo';

export default function Header() {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    return (
        <>
            <header>
                <div className="header-container">
                    <div className="header-content">
                        <Logo />
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