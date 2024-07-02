import React from "react";
import pattern from "../../assets/banner.jpg";
import PlayStoreImg from "../../assets/PlayStoreImg.png";
import AppStoreImg from "../../assets/AppStoreImg.png";

const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  opacity: "85%",
  height: "100px",
  width: "100%",
};

const AppStore = ({ theme }) => {
  return (
    <div
      className="border-black dark:border-white   flex flex-wrap bg-white dark:bg-black/95 dark:text-white relative scroll-smooth"
      id="appstore"
    >
      <div className="container" data-aos="fade-up" data-aos-duration="700">
        <div
          className="text-black dark:text-white my-16 sm:min-h-[350px] sm:max-h-[100%]
        sm:place-items-center rounded-xl"
          // style={bannerImg}
        >
          <div>
            <div className="space-y-6 max-w-xl h-auto mx-auto">
              <h1
                className="text-2xl my-8 font-serif text-center text-primary font-bold"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Get Started with our App
              </h1>
              <p
                className="text-center font-semibold"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                You can download our application from AppStore & PlayStore.
              </p>
              <div className="flex flex-wrap justify-around place-items-center space-x-4">
                <div
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] "
                  data-aos="slide-right"
                  data-aos-duration="1000"
                >
                  <a href="/">
                    <img src={PlayStoreImg} alt="" />
                  </a>
                </div>
                <div
                  className="max-w-[147px] sm:max-w-[120px] md:max-w-[200px] "
                  data-aos="slide-left"
                  data-aos-duration="1000"
                >
                  <a href="/">
                    <img src={AppStoreImg} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
