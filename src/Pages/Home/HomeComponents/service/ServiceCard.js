import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, price, title, img } = service;
  return (
    <div>
      <div className="p-2 rounded-xl shadow-lg">
        <img className="rounded-xl h-[225px] object-cover" src={img} alt="" />
        <h2 className="font-bold text-2xl text-gray-900">{title}</h2>
        <div className="flex justify-between items-center px-2 my-2">
          <p className="font-bold text-xl text-orange-600">Price: ${price}</p>
          <Link to={`/checkout/${_id}`}>
            <FiArrowRight className="text-2xl text-orange-600"></FiArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
