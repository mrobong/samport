import React from "react";
import "./footer.css";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  // const currentYearMonth = date.getMonth();
  // const currentYearDay = date.getDay();

  return (
    <footer className="footer">
      copyright &#169; {currentYear} Samson Obong. All right reserved.
    </footer>
  );
};

export default Footer;
