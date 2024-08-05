import React from 'react';
import { services } from '../services/services';
import Image from 'next/image';
const Services = () => {
    //console.log(services)
    return (
        <div className='mt-4'>
            <h2 className='text-2xl text-center text-primary'>Services</h2>
            <h2 className='text-5xl text-center '>Our Service area</h2>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
                {
                    services.map(service=><div className='border-2 p-4 rounded-2x h-80' key={service._id}>
                        <div>
                            <Image src={service.img} height={360} width={360} alt='logo'/>
                        </div>
                        <div className='flex justify-between'>
                            <h2>price : {service.price} $</h2>
                            <button className="btn btn-outline ">Details</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;