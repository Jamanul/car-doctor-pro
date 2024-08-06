"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='flex min-h-screen items-center justify-center gap-6'>
            <Image height={500} width={300} src={'/assets/images/login/login.svg'} alt='login'/>
            <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
    <p>Dont have an account? <Link href={'/signup'} className='text-primary'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default page;