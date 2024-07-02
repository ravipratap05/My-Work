import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Best Prices",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-white duration-300" />
    ),
    link: "#",
    description:
      "We know the bike trips are most memorable moments that's why prices are pocket friendly. ",
    aosdelay: "0",
  },
  {
    name: "Fast & Safe",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-white duration-300" />
    ),
    link: "#",
    description:
      "Booking makes you safe and secure way to rent a bike. It is very fast for rented a bike as ASAP. ",
    aosdelay: "500",
  },
  {
    name: "Experience Drivers",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-white duration-300" />
    ),
    link: "#",
    description:
      "We provide the drivers also with you bookings for you convenience. Our drivers are experience and reliable.",
    aosdelay: "1000",
  },
];

const Service = ({ theme }) => {
  return (
    <div className="bg-white dark:bg-dark dark:text-white duration-200 relative py-12  sm:min-h-[600px] sm:grid sm:place-items-center scroll-smooth">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl text-amber-500 ">
            Why Choose Us
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 group">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={skill.aosdelay}
              className="card text-center group space-y-5 sm:space-y-8 p-12
               sm:py-18 bg-black hover:bg-primary
               duration-300 text-white hover:text-black
                rounded-lg"
            >
              <div className="grid place-items-center ">{skill.icon}</div>
              <h1 className="font-serif font-bold  hover:text-black">
                {skill.name}
              </h1>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
