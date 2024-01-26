import Image from 'next/image'
import React from 'react'

export default function Logo() {
    return (
        <>
            <div id="logo-name">
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
        </>
    )
}
