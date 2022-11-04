import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import "./checkout.css";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const { title, _id, price, img } = useLoaderData();
  const handelOrdersubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "don't have any email id";
    const phoneNumber = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customerName: name,
      email,
      phoneNumber,
      message,
    };

    fetch(`http://localhost:5000/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          alert("order placed Successfully");
        }
      })

      .catch((er) => {
        console.log(er);
      });
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div
        className="banner w-full rounded flex justify-center items-center min-h-[30vh] my-20 relative z-10"
        style={{ background: `url(${img})`, backgroundSize: "cover" }}
      >
        <h2 className="font-bold text-4xl text-orange-500">
          CheckOut For {title}
        </h2>
      </div>

      <div className="form-container my-24">
        <form
          onSubmit={handelOrdersubmit}
          className=" p-4 bg-white shadow-2xl border border-slate-900 border-opacity-20 rounded"
        >
          <div className="grid grid-cols-2 gap-x-4">
            <input
              type="text"
              name="firstName"
              id=""
              placeholder="First Name"
              className="input w-full shadow input-bordered"
            />
            <input
              type="text"
              name="lastName"
              id=""
              placeholder="Last Name"
              className="input w-full shadow input-bordered"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-4 mt-5">
            <div>
              <label htmlFor="email" className="m-0 p-0">
                {" "}
                Your Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder=""
                defaultValue={user?.email || "don't have any email id"}
                readOnly
                className="input w-full shadow input-bordered"
              />
            </div>
            <div>
              <label htmlFor="phone" className="m-0 p-0">
                {" "}
                Your Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="phone Number"
                className="input w-full shadow input-bordered"
              />
            </div>
          </div>

          <div className="my-4">
            <textarea
              className="textarea textarea-bordered w-full"
              name="message"
              id=""
              placeholder="Your Meassage"
            ></textarea>
          </div>

          <input
            className="btn bg-slate-800 w-full"
            type="submit"
            name=""
            id=""
            value={"Place Orrder"}
          />
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
