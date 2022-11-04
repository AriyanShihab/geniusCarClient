import React from "react";
import aboutImage from "../../../../../assets/images/about_us/person.jpg";
import partImage from "../../../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:min-w-[50%] relative">
            <img
              src={aboutImage}
              className=" rounded-lg shadow-2xl w-4/5"
              alt=""
            />
            <img
              className="absolute top-36 left-40 rounded border-4 w-1/2"
              src={partImage}
              alt=""
            />
          </div>
          <div>
            <p className="font-bold text-2xl text-orange-500">About Us</p>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <button className="btn btn-primary bg-orange-600 border-0">
              More Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
