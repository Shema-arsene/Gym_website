import React from "react"
import { TestimonialsData } from "../mockData/data"
import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

const Testimonials = () => {
  const settings = {
    dots: true,
    // arrow: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    // slidesToShow: 1,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="py-14 mb-10">
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-10 max-w-[500px] space-y-2 mr-auto">
          <h1 className="capitalize text-4xl font-bold">
            What our customers say about us
          </h1>
        </div>
        {/* Testimonials Section/Cards */}
        <div>
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 p-6 shadow-lg mx-4 rounded-xl bg-primary/20">
                  {/* Upper Section */}
                  <div className="flex justify-start items-center gap-5">
                    <img
                      src={data.Image}
                      alt={data.name}
                      className="rounded-full items-center w-16 h-16"
                    />
                    <div>
                      <p className="text-xl font-bold text-black/80">
                        {data.name}
                      </p>
                      <p>{data.name}</p>
                    </div>
                  </div>
                  {/* Bottom section */}
                  <div className="py-6 space-y-4">
                    <p className="max-sm:ml-5 text-sm text-gray-500">
                      {data.testimony}
                    </p>
                    <p>{data.rating}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonials