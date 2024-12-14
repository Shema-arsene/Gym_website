import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Equipments from "./components/Equipments"
import Banner from "./components/Banner"
// import BgImage from "./assets/bg.png"
import BannerImg from "./assets/Banner image.png"
import Banner2Img from "./assets/3-Dy86xsud.png"
import Tabs from "./components/Tabs"
import Testimonials from "./components/Testimonials"
import Banner2 from "./components/Banner2"
import Footer from "./components/Footer"

const bannerData = {
  image: BannerImg,
  title: "The Importants To Take Care Of Yourself",
  subtitle:
    "The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.",
}
const banner2Data = {
  image: Banner2Img,
  title: "The Importants To Take Care Of Yourself",
  subtitle:
    "The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.",
}

const App = () => {
  // const bgStyle = {
  //   backgroundImage: `url(${BgImage})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundAttachment: "fixed",
  // }

  return (
    <>
      <section className="overflow-x-hidden">
        {/* <div style={bgStyle}> */}
        <Navbar />
        <Hero />
        {/* </div> */}
        <Equipments />
        <Banner {...bannerData} />
        <Tabs />
        <Banner {...banner2Data} />
        <Testimonials />
        <Banner2 />
        <Footer />
      </section>
    </>
  )
}

export default App
