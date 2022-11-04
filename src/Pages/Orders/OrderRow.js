import React, { useEffect, useState } from "react";

const OrderRow = ({ order }) => {
  const { serviceName, phoneNumber, service, price, message, customerName } =
    order;

  const [serviceImage, setServiceImage] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json)
      .then((data) => setServiceImage(data));
  }, []);

  return (
    <tr>
      <th>
        <label>
          <button className="btn btn-ghost">X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" rounded-sm w-32 h-32">
              {serviceImage?.img && (
                <img
                  src={serviceImage.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">Orderd By: {customerName}</div>
          </div>
        </div>
      </td>
      <td>
        <p>$ {price}</p>
      </td>
      <td>{phoneNumber}</td>
      <th>
        <p className="">{message}</p>
      </th>
    </tr>
  );
};

export default OrderRow;
