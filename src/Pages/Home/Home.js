import React from "react";
import About from "./HomeComponents/Banner/About/About";
import Banner from "./HomeComponents/Banner/Banner";
import Service from "../Home/HomeComponents/service/Service";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Service />
    </div>
  );
};

export default Home;
