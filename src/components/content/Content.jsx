import React from "react";
import About from "./about/About";
import Achievements from "./achievements/Achievements";
import Card from "./card/Card";
import Introduce from "./introduce/Introduce";

const Content = () => {
  return (
    <section className="">
      <Card></Card>
      <About></About>
      <Achievements></Achievements>
      <Introduce></Introduce>
    </section>
  );
};

export default Content;
