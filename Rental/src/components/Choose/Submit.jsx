import React from "react";

const Submit = ({ theme }) => {
  return (
    <div
      className="flex flex-wrap bg-white dark:bg-dark dark:text-white relative scroll-smooth"
      id="submit"
    >
      <h1>Form Submitted</h1>
      <h3>We get your request for services</h3>
      <p>Our service providers connect with you soon.</p>
      <a href="/">Go Back</a>
    </div>
  );
};

export default Submit;
