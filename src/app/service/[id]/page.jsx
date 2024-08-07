import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const serviceDetails = async(id)=>{
    const res = await fetch(`http://localhost:3001/services/api/${id}`)
    const data = res.json()
    return data
}

const page = async({params}) => {
    const singleData = await serviceDetails(params.id)
    //console.log(singleData)
    const {img,facility,price,_id}=singleData
    return (
        <div>
           <div className='mx-28 '>
           <Image className='h-96 object-center' src={img} height={1080} width={1920} alt='banner'/>
           </div>
           <div>
            {
                facility.map(data=><div className='border mx-28 mb-3 mt-3 border-primary rounded-2xl p-4'>
                    <h2 className='text-3xl'>title {data.name}</h2>
                    <h2 >description {data.description}</h2>
                </div>)
            }
           </div>
           <div className='border mx-28 border-primary rounded-2xl p-4'>
            price : {price} $
            <Link href={`/checkout/${_id}`}><button className='btn-primary btn-outline border ml-4 rounded-xl px-4 py2'>Checkout</button></Link>
           </div>
        </div>
    );
};

export default page;