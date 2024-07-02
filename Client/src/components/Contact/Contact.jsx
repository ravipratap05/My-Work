import React from "react";

const Contact = ({ theme }) => {
  return (
    <div
      className="dark:bg-blackish dark:text-white min-h-[520px] bg-gray-50 duration-200 relative scroll-smooth"
      id="contact"
    >
      <div className="container py-12 text-lg">
        <div className="place-items-center sm:grid-cols-3 mx-4">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-4xl text-amber-500 font-sans px-12 mx-8"
          >
            Reached Us
          </h2>
          <div className="flex flex-wrap justify-around my-9 px-12 italic mx-8">
            <div data-aos="slide-left" data-aos-duration="800">
              <div>
                <h4>Address :</h4>
                <p className="hover:text-primary">
                  &nbsp;&nbsp;&nbsp; &nbsp;A-140, New Ashok Nagar
                </p>
              </div>
              <br />
              <br />
              <div>
                <h4>Location :</h4>
                <p className="hover:text-primary">
                  &nbsp; &nbsp;&nbsp;&nbsp;New Delhi
                </p>
              </div>
              <br />
              <br />
              <div>
                <h4>Country :</h4>
                <p className="hover:text-primary">
                  &nbsp; &nbsp; &nbsp;&nbsp;INDIA
                </p>
              </div>
            </div>
            <br />
            <div
              data-aos="slide-left"
              data-aos-duration="600"
              data-aos-delay="500"
            >
              <div>
                <h4>Mail :</h4>
                <p className="hover:text-primary">
                  &nbsp;&nbsp;&nbsp; &nbsp;
                  <a href="mailto:ravirajput31198@gmail.com">
                    rentedbikes@official.co
                  </a>
                </p>
              </div>
              <br />
              <br />
              <div>
                <h4>LinkedIn :</h4>
                <p className="hover:text-primary">
                  &nbsp; &nbsp;&nbsp;&nbsp;
                  <a href="www.linkedin.com/in/ravipratap-software-developer"></a>
                  rentedbikes@linkedin.co
                </p>
              </div>
              <br />
              <br />
              <div>
                <h4>Contact :</h4>
                <p className="hover:text-primary">
                  &nbsp; &nbsp; &nbsp;&nbsp;+91&nbsp;9568942885
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap item-center justify-center scroll-smooth">
            <button className="btn rounded-md border-2 border-primary hover:bg-primary/80 hover:text-black duration-800 py-2 px-6 text-primary tracking-wider">
              <a href="/">Back to Top</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
