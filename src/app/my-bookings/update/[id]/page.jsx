"use client"
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const page = ({params}) => {
    const session =useSession()
    const [bookings,setBookings]=useState([])
    const getData =async()=>{
        const res = await axios.get(`http://localhost:3000/my-bookings/api/booking/${params.id}`)
        setBookings(res.data)
    }

    useEffect(()=>{
        getData()
    },[])
    //console.log(bookings)
    const {name,title,price,phone, address}=bookings
    const handleEdit =async(e)=>{
        e.preventDefault()
        const updateBooking ={
            phone: e.target.phone.value,
            address: e.target.address.value,
        }
        const res = await axios.patch(`http://localhost:3000/my-bookings/api/booking/${params.id}`,{...updateBooking})
        console.log(res)
    }

    return (
        <div>
       
        <h2 className="text-5xl mx-28">Details of {title}</h2>
        <div className="mx-28">
          <form onSubmit={handleEdit} className="card-body">
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
                  defaultValue={phone}
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
                  defaultValue={address}
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