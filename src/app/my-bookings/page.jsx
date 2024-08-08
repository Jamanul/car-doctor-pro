"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const page = () => {
  const session = useSession();
  const [myBookings, setMyBookings] = useState([]);
  const getData = async () => {
    const res = await fetch(
      `http://localhost:3001/my-bookings/api/${session?.data?.user?.email}`
    );
    const data = await res.json();
    setMyBookings(data);
  };
  useEffect(() => {
    getData();
  }, [session]);
  //console.log(myBookings)
  const handleDelete = async (id) => {
    console.log(id)
    const res = await fetch(
      `http://localhost:3001/my-bookings/api/delete-booking/${id}`,{
        method: "DELETE"
      }
    );
    const data = await res.json()
    if(data.deletedCount>0){
        getData()
    }
    //console.log(data)
  };
  return (
    <div>
      <h2 className="text-6xl text-center">My Bookings</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>service name</th>
              <th>service price</th>
              <th>date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myBookings.length > 0 &&
              myBookings.map((booking, idx) => (
                <tr key={booking._id} className="bg-base-200">
                  <th>{idx + 1}</th>
                  <td>{booking.serviceTitle}</td>
                  <td>{booking.servicePrice}</td>
                  <td>{booking.date}</td>
                  <td>
                    <button className="btn mr-2 btn-outline btn-primary">
                      Edit{" "}
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(booking._id);
                      }}
                      className="btn btn-outline btn-primary"
                    >
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
