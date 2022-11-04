import React, { useContext, useEffect, useState } from "react";
import bgImg from "../../assets/images/banner/1.jpg";
import { AuthContext } from "../../Context/UserContext";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const url = `http://localhost:5000/orders?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [url]);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div
        className="banner w-full rounded flex justify-center items-center min-h-[30vh] my-20 relative z-10"
        style={{ background: `url(${bgImg})`, backgroundSize: "cover" }}
      >
        <h2 className="font-bold text-4xl text-orange-500">
          Your Order's ${user?.displayName}
        </h2>
      </div>
      <div className="mt-32">
        {
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr className="capitalize">
                  <th></th>
                  <th>Service</th>
                  <th>Price</th>
                  <th>Coustomer Phone</th>
                  <th>Message</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <OrderRow key={order._id} order={order}></OrderRow>
                ))}
              </tbody>
            </table>
          </div>
        }
      </div>
    </div>
  );
};

export default Orders;
