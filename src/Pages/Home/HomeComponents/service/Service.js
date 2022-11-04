import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [servises, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
    console.log(servises);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-3">
      <div className="text-center pb-8">
        <p className="font-bold text-2xl text-orange-500 my-4"> Services</p>
        <h1 className="font-bold text-4xl text-gray-900 mb-4">
          Our Service Area
        </h1>
        <p className="md:w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-3 my-10">
        {servises.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
