import React from "react"
import { FaPlay } from "react-icons/fa"
import HeroImg from "../assets/dumbell-Bcy4gPfV.png"
import { motion } from "framer-motion"
import { SlideLeft, SlideRight } from "../utility/animation"

const Hero = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-n-[650px]">
          {/* Brand Info */}
          <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
            <div className="text-center md:text-left space-y-6">
              <motion.h1
                variants={SlideRight(0.5)}
                initial="hidden"
                animate="visible"
                className="text-5xl lg:text-6xl font-bold xl:leading-normal"
              >
                Gym gives you the perfect{" "}
                <span className="text-primary">Health</span>
              </motion.h1>
              <motion.p
                variants={SlideRight(1.2)}
                initial="hidden"
                animate="visible"
                className="text-gray-600 xl:max-w-[500px]"
              >
                It is a long established fact that a reader will be readable
                content of a page when are the best product.
              </motion.p>
              {/* Button section */}
              <motion.div
                variants={SlideRight(1.5)}
                initial="hidden"
                animate="visible"
                className="flex items-center justify-center md:justify-start gap-8 !mt-4"
              >
                <button className="primary-btn flex items-center justify-center">
                  Order Now
                </button>
                <button className="flex items-center justify-center gap-2">
                  <FaPlay />
                  Watch Now
                </button>
              </motion.div>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex items-center justify-center">
            <motion.img
              // initial={{ opacity: 0, x: -100 }}
              // animate="visible"
              variants={SlideLeft(0.5)}
              initial="hidden"
              animate="visible"
              src={HeroImg}
              alt="Dumbbell"
              className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
