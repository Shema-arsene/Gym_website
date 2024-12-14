import React from "react"
import { motion } from "framer-motion"
import { SlideLeft } from "../utility/animation"

const Banner2 = () => {
  return (
    <section className="container py-14">
      <div className="bg-[#f9f9f9] py-14 md:py-24 flex items-center justify-center">
        {/* Brand Info */}
        <div className="flex flex-col gap-2 justify-center text-center space-y-8 lg:px-44">
          <motion.h1
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView={"visible"}
            // viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold uppercase"
          >
            Get 20% Discount On Your First Order, Are You Ready To Buy
          </motion.h1>
          <motion.p
            variants={SlideLeft(0.8)}
            initial="hidden"
            whileInView={"visible"}
            // viewport={{ once: true }}
            className="text-xl text-gray-500"
          >
            We will make sure you get the right and the best quality products
            for your workout
          </motion.p>
          <motion.div
            variants={SlideLeft(1.1)}
            initial="hidden"
            whileInView={"visible"}
            // viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            <button className="primary-btn capitalize">Learn more</button>
            <button className="border-2 border-primary text-primary font-bold px-5 rounded-lg capitalize hover:scale-110 duration-300">
              Stay in touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner2
