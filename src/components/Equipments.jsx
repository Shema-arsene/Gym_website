import React from "react"
import { GrYoga } from "react-icons/gr"
import { FaDumbbell } from "react-icons/fa6"
import { GiGymBag } from "react-icons/gi"
import { motion } from "framer-motion"
import { SlideLeft } from "../utility/animation"

const EquipmentsData = [
  {
    id: 1,
    title: "Yoga Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <GrYoga />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Muscle Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <FaDumbbell />,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fitness Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <GiGymBag />,
    delay: 0.9,
  },
]

const Equipments = () => {
  return (
    <div>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
          <div className="space-y-6 p-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              What we offer you
            </h1>
            <p className="text-gray-500">
              It is a long established fact that a reader readable.
            </p>
          </div>
          {EquipmentsData.map((item) => (
            <motion.div
              variants={SlideLeft(item.delay)}
              initial="hidden"
              whileInView="visible"
              key={item.id}
              className="space-y-4 p-6 bg-[#f9f9f9] cursor-pointer hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] duration-300"
            >
              <div className="text-4xl">{item.icon}</div>
              <h1 className="text-2xl font-semibold">{item.title}</h1>
              <p className="text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Equipments
