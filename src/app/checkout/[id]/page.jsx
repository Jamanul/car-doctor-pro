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
    const res = await fetch(`http://localhost:3001/services/api/${params.id}`);
    const data = await res.json();
    setSingleData(data);
  };
  useEffect(() => {
    getDetails();
  }, [params]);
  //console.log(singleData)
  const {img,title}=singleData
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
      <div>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default page;
