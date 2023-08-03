import React from "react";
import Contact from "./component/Contact";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>© {new Date().getFullYear()} AGRIBIX</p>
      </div>
      {<Contact />}
    </footer>
  );
};

export default Footer;