import React from "react"
import { FaDumbbell, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"

const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-950">
      <div className="container py-14">
        <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-white">
          {/* Branding info section */}
          <div className="py-8 px-4 space-y-4">
            <div className="text-2xl uppercase font-bold flex flex-nowrap items-center gap-2">
              <FaDumbbell />
              <p>
                Coders <span className="text-secondary">Gym</span>
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              adipisci reiciendis deleniti nihil sed officiis porro error
              commodi, nesciunt sit.
            </p>
            <div className="text-3xl flex flex-nowrap items-center justify-evenly mt-6">
              <a href="#">
                <HiLocationMarker className="hover:text-primary hover:scale-150 duration-500" />
              </a>
              <a href="#">
                <FaInstagram className="hover:text-primary hover:scale-150 duration-500" />
              </a>
              <a href="#">
                <FaFacebook className="hover:text-primary hover:scale-150 duration-500" />
              </a>
              <a href="#">
                <FaLinkedin className="hover:text-primary hover:scale-150 duration-500" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" className="hover:text-primary duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary duration-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary duration-300">
                    Login
                  </a>
                </li>
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                Company Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" className="hover:text-primary duration-300">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary duration-300">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary duration-300">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                Resources
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" className="hover:text-primary duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary duration-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary duration-300">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright section */}
        <div className="mt-8">
          <div className="text-center py-6 border-t-2 border-t-gray-300/10">
            <span className="text-sm text-gray-300 opacity-70">
              &copy; Copyright {date} The Coding Journey
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
