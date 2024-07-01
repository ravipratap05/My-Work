import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About/About";
import BikeList from "./components/BikeList/BikeList";
import Service from "./components/Choose/Service";
import AppStore from "./components/AppStore/AppStore";
import Contact from "./components/Contact/Contact";
import Booking from "./components/Booking/Booking";
import Submit from "./components/Choose/Submit";

const App = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const element = document.documentElement;

  // Dark Mode
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // AOS
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/submit" exact element={<Submit theme={theme} />} />
          <Route path="/:booking" exact element={<Booking theme={theme} />} />
          <Route
            path="*"
            element={
              <>
                <Hero theme={theme} />
                <About theme={theme} />
                <Service theme={theme} />
                <BikeList theme={theme} />
                <AppStore theme={theme} />
                <Contact theme={theme} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
