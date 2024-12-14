import { motion, AnimatePresence } from "framer-motion"
import React from "react"
import { NavbarMenu } from "../mockData/data"

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white m-6 py-10 rounded-3xl">
            {/* <ul className="flex flex-col items-center justify-center gap-10"> */}
            <ul>
              {NavbarMenu.map((link) => (
                <li
                  key={link.id}
                  className="hover:text-gray-600 duration-300 w-full text-center py-4 cursor-pointer"
                >
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ResponsiveMenu
