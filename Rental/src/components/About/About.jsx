import React from "react";
import bikePng2 from "../../assets/Bike2.png";
import yellowBike2Png from "../../assets/YellowBike2.png";

const About = ({ theme }) => {
  return (
    <div
      className="dark:bg-neutral-900 dark:text-white bg-gray-100 duration-200 relative scroll-smooth"
      id="about"
    >
      <div className="container py-12 min-h-[520px]">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div
            data-aos="slide-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <img
              src={theme === "dark" ? bikePng2 : yellowBike2Png}
              alt=""
              className={
                theme === "dark"
                  ? "w-[500px] py-5 my-8 space-x-10 relative -z-10 h-[400px]"
                  : "w-[750px] py-5 my-8 space-x-10 relative -z-10 h-[400px]"
              }
            />
          </div>
          <div className="justify-start mx-5 space-y-5 sm:pr-26">
            <h2
              data-aos="fade-down"
              data-aos-duration="800"
              className="text-4xl text-amber-500 font-sans px-1 "
            >
              About Us
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-2xl"
            >
              We are providing the bikes on rent for enjoying your journey. We
              have so many satisfied customers.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              className="text-xl font-serif"
            >
              They are enjoying their trips and journey with their favourites
              bikes.
            </p>
            <button
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
              className="btn rounded-md border-2 border-primary hover:bg-primary/80 hover:text-black duration-800 py-2 px-6 text-primary tracking-wider"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
