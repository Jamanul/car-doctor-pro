import React from 'react';

const Banner = () => {
    return (
       <div className="container mx-auto">
        <div className="carousel h-screen w-full">
         {
            bannerData.map((banner,idx)=>
            <div style={{
                backgroundImage: `url('/assets/images/banner/${idx+1}.jpg')`
            }} id={`slide${idx+1}`} className={`carousel-item relative w-full`}>
                <div>
                    <h2 className='text-white text-6xl pt-96'>{banner.heading}</h2>
                <h2 className='text-white text-3xl pt-6'>{banner.description}</h2>
                <button className='btn-primary bg-primary p-4 rounded-md ml-4'>Discover More</button>
                <button className='btn-primary btn-outline border border-primary p-4 rounded-md ml-4'>Latest project</button>
                </div>
                
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href={banner.next} className="btn btn-circle">❮</a>
                <a href={banner.prev} className="btn btn-circle">❯</a>
              </div>
            </div>
          )
        }
       </div>
       </div>
    );
};

const bannerData=[
    {
        heading: "Affordable price for car servicing",
        description: "there are many variation of available services and we are the best",
        next:"#slide2",
        prev: "#slide4",
    },
    {
        heading: "Affordable price for car servicing",
        description: "there are many variation of available services and we are the best",
        next:"#slide3",
        prev: "#slide1",
    },
    {
        heading: "Affordable price for car servicing",
        description: "there are many variation of available services and we are the best",
        next:"#slide4",
        prev: "#slide2",
    },
    {
        heading: "Affordable price for car servicing",
        description: "there are many variation of available services and we are the best",
        next:"#slide1",
        prev: "#slide3",
    },
]


export default Banner;