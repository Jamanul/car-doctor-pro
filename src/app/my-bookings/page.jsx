"use client"
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const page = () => {
    const session =useSession()
    const [myBookings,setMyBookings]=useState([])
    const getData = async()=>{
        const res = await fetch(`http://localhost:3001/my-bookings/api/${session?.data?.user?.email}`)
        const data = await res.json()
        setMyBookings(data)
    }
    useEffect(()=>{
        getData()
    },[session])
    console.log(myBookings)
    return (
        <div>
            <h2 className='text-6xl text-center'>My Bookings</h2>

        </div>
    );
};

export default page;