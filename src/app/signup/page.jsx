"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userData = {
      name,
      email,
      password,
    };
    //console.log(userData);
    const resp = await fetch("http://localhost:3000/signup/api", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "content-type": "application/json"
      },
    });
    //console.log(resp);
  };
  const handleGoogle =async()=>{
    const resp = await signIn('google')
  }
  return (
    <div className="flex min-h-screen items-center justify-center gap-6">
      <Image
        height={500}
        width={300}
        src={"/assets/images/login/login.svg"}
        alt="login"
      />
      <div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p onClick={handleGoogle} className="w-full text-center py-2 bg-primary text-white">GOOGLE</p>
          <p>
            Already have an account?{" "}
            <Link href={"/signin"} className="text-primary">
              Sign In{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
