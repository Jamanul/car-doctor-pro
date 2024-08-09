"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const serviceDetails = async (id) => {
  return data;
};

const page = ({ params }) => {
  const session = useSession();
  const [singleData, setSingleData] = useState([]);
  const getDetails = async () => {
    const res = await fetch(`http://localhost:3000/services/api/${params.id}`);
    const data = await res.json();
    setSingleData(data);
  };
  useEffect(() => {
    getDetails();
  }, [params]);
  const { img, title, price } = singleData;
  const handleCheckOut = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const address = form.phone.value;
    const checkoutData = {
      name,
      email,
      price,
      phone,
      address,
      serviceTitle: title,
      servicePrice: price
    };
    console.log(checkoutData)
    try {
        const res = await fetch('http://localhost:3000/checkout/api/checkout',{
        method: "POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(checkoutData)
    })
    console.log(res)
    } catch (error) {
        console.log(error)
    }
     
  };

  //console.log(singleData)

  return (
    <div>
      <div className="mx-28 ">
        <Image
          className="h-96 object-cover"
          src={img}
          height={1080}
          width={1920}
          alt="banner"
        />
      </div>
      <h2 className="text-5xl mx-28">Details of {title}</h2>
      <div className="mx-28">
        <form onSubmit={handleCheckOut} className="card-body">
          <div className="flex gap-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                defaultValue={session?.data?.user?.name}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                defaultValue={session?.data?.user?.email}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                defaultValue={new Date().getDate()}
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                defaultValue={price}
                name="price"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                name="address"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Checkout</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
