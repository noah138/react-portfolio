import React from "react";
import "../../App.css";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";

function Page(props) {
  const renderPage = () => {
    if (props.currentPage === "About") {
      return <About />;
    } else if (props.currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (props.currentPage === "Resume") {
      return <Resume />;
    } else if (props.currentPage === "Contact") {
      return <Contact />;
    }
  };
  return <div>{renderPage()}</div>;
}

export default Page;
