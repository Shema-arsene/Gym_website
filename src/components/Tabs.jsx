import React, { useState } from "react"
import { productsData } from "../mockData/data"
import { motion } from "framer-motion"

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("All")

  const tabs = ["All", "Yoga", "Fitness", "Muscles"]
  const filteredCards =
    activeTab === "All"
      ? productsData
      : productsData.filter((card) => card.category === activeTab)

  return (
    <>
      <section className="container my-12 md:my-16 mb-4 p-6">
        {/* Tabs buttons section */}
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 rounded ${
                activeTab === tab
                  ? "bg-primary border border-primary text-white"
                  : "border border-gray-200 bg-gray-200 text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Tabs cards section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
            {filteredCards.map((card) => (
              <motion.div
                id={card}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                key={card.id}
                className="p-4 border rounded shadow-sm space-y-2"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-[240px] w-full object-cover"
                />
                <h1 className="text-xl font-semibold">{card.title}</h1>
                <p className="text-gray-500">{card.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Tabs
