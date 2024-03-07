"use client";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blog } from "../data/blog";
import { logo } from "../data/logo";

const Logoscroll: React.FC = () => {
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-24 w-full overflow-hidden">
        <Slider {...settings}>
          {logo.map((elem) => (
            <>
              <div className="flex justify-center">
                <Image
                  width={150}
                  height={100}
                  alt="services"
                  src={elem.image}
                  className="mb-4"
                />
              </div>
            </>
          ))}
        </Slider>
      </section>
    </>
  );
};
export default Logoscroll;
