import React from "react";
import Classic from "../../assets/Classic.png";
import R15 from "../../assets/R15.png";
import Meteor from "../../assets/Meteor.png";
import GT from "../../assets/GT.png";

const CarLists = [
  {
    id: 1,
    name: "Royal Enfield Meteor",
    price: 25,
    image: Meteor,
    aosStyle: "fade-up",
    aosDelay: "0",
  },
  {
    id: 2,
    name: "Royal Enfield Classic",
    price: 20,
    image: Classic,
    aosStyle: "fade-up",
    aosDelay: "500",
  },
  {
    id: 3,
    name: "YAMAHA R15 Super Sports",
    price: 18,
    image: R15,
    aosStyle: "fade-up",
    aosDelay: "1000",
  },
];

const BikeList = ({ theme }) => {
  return (
    <div
      className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white relative scroll-smooth"
      id="bike"
    >
      <div className="container">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Top Picks
        </h1>
        <p data-aos="fade-up" className="text-xl pb-10">
          These are our top picks bikes as service.
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 ">
            {CarLists.map((data) => {
              return (
                <div
                  key={data.id}
                  data-aos={data.aosStyle}
                  data-aos-delay={data.aosDelay}
                  className="space-y-3 border-2 border-gray-300 hover:border-primary p-4 rounded-xl relative group"
                >
                  <div className="w-full h-[120px] ">
                    <img
                      className="w-full h-[120px] object-contain 
                      group-hover:translate-x-10 sm:group-hover:translate-x-10 md:group-hover:translate-x-10 duration-1000"
                      src={data.image}
                      alt=""
                    />
                  </div>
                  <div className="space-y-3 block justify-between">
                    <h1 className="font-sans font-semibold hover:text-primary ">
                      {data.name}
                    </h1>
                    <div className="font-sans font-bold">${data.price}/Day</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeList;
