import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const servicesData = async()=>{
    const res = await fetch('http://localhost:3001/services/api/get-all')
    const data = res.json()
    return data
} 

const Services = async() => {
    const services =await servicesData()
    console.log(services)
    return (
        <div className='mt-4'>
            <h2 className='text-2xl text-center text-primary'>Services</h2>
            <h2 className='text-5xl text-center '>Our Service area</h2>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
                {
                    services?.map(service=><div className='border-2 p-4 rounded-2x h-80' key={service._id}>
                        <div>
                            <Image src={service.img} height={360} width={360} alt='logo'/>
                        </div>
                        <div className='flex justify-between'>
                            <h2>price : {service.price} $</h2>
                           <Link href={`/service/${service._id}`}> <button className="btn btn-outline ">Details</button></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;