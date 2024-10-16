import {useState} from 'react'

export default function Sidebar () {
    return (
        <aside className="w-1/3 h-auto">
            <ul className="flex flex-col">
                <li>
                    Home
                </li>
                <li>
                    Stock
                </li>
            </ul>
        </aside>
    )
}