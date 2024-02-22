import React from "react";
import mahi from "../img/img8.jpg";
import Common from "./Common";

const About = () => {
  return (
    <div>
     <Common 
      name="Welcome To About page " tit="Sucess Is Our Priority"
      imgsrc={mahi} visit="/Contact" btn="Contact Now"
      />
    </div>
  );
};

export default About;
