import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import Submit from "../Choose/Submit";

const Booking = ({ theme }) => {
  const [form, setForm] = useState({});
  const [confirm, setConfirm] = useState(false);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const renderAnotherComponent = () => {
  //   return <Submit />;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirm(true);
    // window.location.reload();
    const response = await fetch("http://localhost:8080/", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setConfirm(false);
      })
      .catch((error) => console.error(error));

    const data = await response.json();
  };

  return (
    <>
      {!confirm && (
        <div className="flex flex-wrap md:items-start sm:items-center bg-white dark:bg-dark dark:text-white relative m-0 scroll-smooth">
          <form action="/submit" onSubmit={handleSubmit}>
            <div className="flex flex-wrap space-y-12 m-5 w-[70%]">
              <div className="border-b border-black pb-12">
                <h2 className="text-4xl font-semibold pt-12  text-primary">
                  Personal Information
                  {/* <p>{JSON.stringify(form)}</p>  ---> debugging */}
                </h2>
                <p className="mt-3 text-xl  text-primary">
                  Use a permanent address where you can receive mail.
                </p>

                <div className="flex flex-wrap mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-xl font-medium  dark:text-white"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="fName"
                        id="first-name"
                        onChange={handleForm}
                        autoComplete="given-name"
                        className="block  dark:bg-gray-300 px-2 w-full rounded-md border-0 py-1.5 dark:text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-xl font-medium  dark:text-white"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="lName"
                        id="last-name"
                        onChange={handleForm}
                        autoComplete="family-name"
                        className="block dark:bg-gray-300 px-2 w-full rounded-md border-0 py-1.5 dark:text-black  ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block  text-xl font-medium  dark:text-white"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleForm}
                        autoComplete="email"
                        className="block dark:bg-gray-300 px-2 w-[74%] rounded-md border-0 py-1.5 dark:text-black  ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-start space-y-12  sm:col-span-4">
                    <div>
                      <label
                        htmlFor="category"
                        className="block  text-xl font-medium  dark:text-white"
                      >
                        Category
                      </label>
                      <div className="mt-2">
                        <select
                          id="category"
                          name="category"
                          onChange={handleForm}
                          autoComplete="category-name"
                          className="block dark:bg-gray-300 px-2 w-[280px] rounded-md border-0 py-1.5 dark:text-black  ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:"
                        >
                          <option>--None--</option>
                          <option>Sports Bike</option>
                          <option>Royal Enfield</option>
                          <option>Mountain Bikes</option>
                          <option>Street Bikes</option>
                          <option>E Bikes</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="days"
                        className="block  text-xl font-medium  dark:text-white"
                      >
                        Days
                      </label>
                      <div className="mt-2">
                        <select
                          id="days"
                          name="day"
                          onChange={handleForm}
                          autoComplete="days-count"
                          className="block dark:bg-gray-300 px-2 w-[250px] rounded-md border-0 py-1.5 dark:text-black  ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:"
                        >
                          <option>--None--</option>
                          <option>1-15 Days</option>
                          <option>15-30 Days</option>
                          <option>30-45 Days</option>
                          <option>45-60 Days</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className=" flex flex-wrap space-y-12 sm:col-span-3">
                    <div className="grid justify-start">
                      <label
                        htmlFor="country"
                        className="block text-xl font-medium  dark:text-white"
                      >
                        Country
                      </label>
                      <div className="mt-2">
                        <select
                          id="country"
                          name="country"
                          onChange={handleForm}
                          autoComplete="country-name"
                          className="block dark:bg-gray-300 px-2 w-[280px] rounded-md border-0 py-1.5 dark:text-black  ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:"
                        >
                          <option>--None--</option>
                          <option>India</option>
                          <option>USA</option>
                          <option>Japan</option>
                          <option>Germeny</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-xl font-medium  dark:text-white"
                      >
                        Contact Number
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="contact"
                          id="first-name"
                          onChange={handleForm}
                          autoComplete="given-name"
                          className="block  dark:bg-gray-300 px-2 w-[250px] rounded-md border-0 py-1.5 dark:text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block  text-xl font-medium  dark:text-white"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="streetAddress"
                        id="street-address"
                        onChange={handleForm}
                        autoComplete="street-address"
                        className="block dark:bg-gray-300 px-2 w-full rounded-md border-0 py-1.5 dark:text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block  text-xl font-medium  dark:text-white"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        onChange={handleForm}
                        autoComplete="address-level2"
                        className="block dark:bg-gray-300 px-2 w-full rounded-md border-0 py-1.5 dark:text-black  ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block  text-xl font-medium  dark:text-white"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="region"
                        id="region"
                        onChange={handleForm}
                        autoComplete="address-level1"
                        className="block dark:bg-gray-300 px-2 w-full rounded-md border-0 py-1.5 dark:text-black  ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block  text-xl font-medium  dark:text-white"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="postalCode"
                        id="postal-code"
                        onChange={handleForm}
                        autoComplete="postal-code"
                        className="block dark:bg-gray-300 px-2 w-full rounded-md border-0 py-1.5 dark:text-black  ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-start gap-x-6 mx-40 pb-12">
              <button
                type="button"
                className="rounded-md text-lg border-2 dark:bg-gray-600 px-3 py-2 font-semibold  dark:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                // onClick={handleClick}
                className="rounded-md bg-indigo-600 px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
      {confirm && (
        <div
          className="bg-white dark:bg-dark dark:text-white relative h-[100vh] scroll-smooth"
          id="submit"
        >
          <div className="py-12 text-center">
            <div className="space-y-12 m-auto w-[70%] py-12">
              <div className="">
                <h1 className="text-4xl font-semibold   text-primary">
                  Information saved successfully
                </h1>
              </div>

              <br />
              <div className="text-xl text-center border border-black dark:border-white rounded-lg">
                <div className="text-wrap text-center p-12 m-5">
                  <p>
                    Hey{" "}
                    <span className="font-semibold text-primary italic">
                      {form.fName} {form.lName}
                    </span>
                    , You have Successfully send the service request to us.
                  </p>
                  <p>
                    Our Service Providers connect with you soon {form.email}.
                  </p>
                  <div className="pt-10">
                    <button className="btn rounded-md border-2 border-primary hover:bg-primary/80 hover:text-black duration-800 py-2 px-6 text-primary tracking-wider">
                      <a href="/">Go Home</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Booking;
