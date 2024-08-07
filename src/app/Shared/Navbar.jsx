"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Navbar = () => {
  const session = useSession()
  console.log(session)
    const links =[
        {
            title:"home",
            path:"/"
        },
        {
            title:"about",
            path:"/services"
        },
        {
            title:"blog",
            path:"/blog"
        },
        {
            title:"contact",
            path:"/contact"
        },
        {
            title:"services",
            path:"/"
        }
    ]
    return (
       <div className='bg-base-300'>
         <div className="navbar mx-auto max-w-7xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
          </div>
            {/* <Image src={'/assets/icons/person.svg'} height={50} width={50} alt='logo'/> */}
           <Link href={'/'}> Car Doctor</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
        <div className='flex gap-2'>
                {
                    links.map(link=><Link  href={link.path}>
                        <h2 className='hover:text-primary duration-300'>{link.title}</h2>
                    </Link>)
                }
            </div>
        </div>
        <div className="navbar-end">
          <a className="btn border border-primary btn-primary">Appointment</a>
         {
          session.data ? <button onClick={()=>signOut()} className='btn border border-primary btn-primary'>Log out</button> : <Link href={'/signin'} className="btn border border-primary btn-primary">Sign In</Link>
         }
        </div>
      </div>
       </div>
    );
};

export default Navbar;