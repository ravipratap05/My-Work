import React from "react";
import bikePng from "../../assets/bike.png";
import yellowBikePng from "../../assets/YellowBike.png";

const Hero = ({ theme }) => {
  return (
    <>
      <div className="bg-white dark:bg-dark dark:text-white  duration-200 relative py-2 ">
        <div className="container py-2 min-h-[620px]">
          <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
            <div className="justify-start space-y-4 sm:pr-45 ">
              <h2
                data-aos="fade-down"
                data-aos-duration="800"
                className="text-4xl text-amber-500 font-sans px-1 "
              >
                Effortless
              </h2>
              <h1
                data-aos="fade-down"
                data-aos-duration="800"
                className="text-7xl text-amber-300 font-serif"
              >
                Rented Bikes
              </h1>
              <p
                data-aos="fade-right"
                data-aos-duration="800"
                className="text-xl"
              >
                If you think for a bike on rent then what you think and why? You
                are on a right place. Book your favourite bike on rent at cheap
                prices and enjoy effortlessly.
              </p>
              <button
                data-aos="fade-left"
                data-aos-duration="800"
                className="btn bg-primary text-black font-medium px-3 py-2 my-3 rounded-md hover:bg-primary/80 duration-300"
              >
                Get Started
              </button>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <img
                src={theme === "dark" ? bikePng : yellowBikePng}
                alt=""
                id="heroImg"
                className={
                  theme === "dark"
                    ? "w-[300px] py-2 my-5 relative -z-10 h-[600px]"
                    : "w-[320px] py-2 my-5 relative -z-10 h-[600px]"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
