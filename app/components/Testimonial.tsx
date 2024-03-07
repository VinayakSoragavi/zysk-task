"use client";
import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonial } from "../data/testimonial";

const Testimonial: React.FC = () => {
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      style={{ backgroundImage: "url(/photo/testimonial.jpg)" }}
      className="flex justify-center py-24 bg-no-repeat bg-cover"
    >
      <div className="containerbox">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="h-full col-span-2"></div>
          <div className="lg:col-span-3 overflow-hidden">
            <Slider {...settings}>
              {testimonial.map((elem, index) => (
                <div key={index} className="flex justify-center py-16">
                  <div>
                    <h3 className="text-2xl w-full text-center leading-9 mb-6 text-white">
                      {elem.review}
                    </h3>
                    <div>
                      <h6 className="text-center text-2xl font-medium mb-1 text-white">
                        {elem.name}
                      </h6>
                      <h6 className="text-center text-white">
                        {elem.inforamtion}
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
