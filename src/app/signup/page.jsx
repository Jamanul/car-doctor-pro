"use client"
import Image from 'next/image';
import React from 'react';

const page = () => {
    const handleSignUp =(e)=>{
        e.preventDefault()
        const form = e.form
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const userData ={
            name,
            email,
            password
        }
     }
    return (
        <div className='flex min-h-screen items-center justify-center gap-6'>
            <Image height={500} width={300} src={'/assets/images/login/login.svg'} alt='login'/>
            <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form  onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
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
        </div>
    );
};

export default page;