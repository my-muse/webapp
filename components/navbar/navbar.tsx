"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Search } from "lucide-react"

export default function Navbar() {
  const [state, setState] = React.useState(false)

  const menus = [
    { title: "Home", path: "/home" },
    { title: "About Us", path: "/aboutus" },
  ]

  return (
    <nav className="w-full border-b md:border-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 pb-[2rem] md:py-5 md:block">
          <Link href="/">
            <h1 className="fixed flex items-end text-3xl font-bold text-white gap-4">MyMuse
            </h1>
            
          </Link>
          <div className="md:hidden">
            <button
              className="text-white outline-none pt-[2rem] rounded-md "
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center md:pt-[2rem] space-y-8  md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-white">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
            
          </ul>
        </div>
      </div>
    </nav>
  )
}