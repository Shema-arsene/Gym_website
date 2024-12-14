import React, { useState } from "react"
import { NavbarMenu } from "../mockData/data"
import { CiSearch } from "react-icons/ci"
import { FaDumbbell } from "react-icons/fa"
import { MdMenu } from "react-icons/md"
import { PiShoppingCartThin } from "react-icons/pi"
import ResponsiveMenu from "./ResponsiveMenu"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  // console.log(open)

  return (
    <>
      <nav>
        <div className="container flex items-center justify-between py-8">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase cursor-pointer">
            <FaDumbbell />
            <p className="whitespace-nowrap">
              Coders <span className="text-secondary">Gym</span>
            </p>
          </div>
          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.link}
                    className="inline-block py-1 px-3 hover:text-primary duration-300 font-semibold"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Icons section */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white duration-300 rounded-full p-2">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white duration-300 rounded-full p-2">
              <PiShoppingCartThin />
            </button>
            <button className="capitalize hover:bg-primary text-primary hover:text-white font-semibold py-2 px-6 rounded-md border border-primary duration-300 hidden md:block whitespace-nowrap">
              Log In
            </button>
          </div>
          {/* Mobile hamburger section Menu section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl hover:text-primary duration-300 cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  )
}

export default Navbar
