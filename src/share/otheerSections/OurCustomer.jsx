import React from 'react';

const OurCustomer = () => {
    return (
        <div className='mb-12'>
            <h3 className='text-4xl text-accent font-bold text-center uppercase mb-8'>Our Customers</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div className='bg-purple-50 rounded-2xl shadow-2xl'>
                    <img className='w-82 h-82 rounded-full pl-16 pt-4 shadow-xl' src="https://i.ibb.co/jhCZ6kx/download-8.jpg" alt="" />
                    <h3 className='text-xl text-gray-950 pl-6 mt-4'>Name: Fahim Hasan</h3>
                    <p className='pl-6 text-xl text-gray-950'>Bought toys: 342</p>
                    <p className='text-xl text-gray-950 pl-6'>Give us rating : 4.5 star</p>
                    <button className='btn btn-outline btn-accent mt-4 ml-6 mb-4'>View Details</button>
                </div>
                <div className='bg-cyan-50 rounded-2xl shadow-2xl'>
                    <img className='w-82 h-82 rounded-full pl-16 pt-4 shadow-xl' src="https://i.ibb.co/Tby4jWF/images-18.jpg" alt="" />
                    <h3 className='text-xl text-gray-950 pl-6 mt-4'>Name: Shahin Alam</h3>
                    <p className='pl-6 text-xl text-gray-950'>Bought toys: 183</p>
                    <p className='text-xl text-gray-950 pl-6'>Give us rating : 4.1 star</p>
                    <button className='btn btn-outline btn-accent mt-4 ml-6 mb-4'>View Details</button>
                </div>
                <div className='bg-yellow-50 rounded-2xl shadow-2xl'>
                    <img className='w-82 h-82 rounded-full pl-16 pt-4 shadow-xl' src="https://i.ibb.co/KNnkvpm/images-17.jpg" alt="" />
                    <h3 className='text-xl text-gray-950 pl-6 mt-4'>Name: Tonmoy Mahbub</h3>
                    <p className='pl-6 text-xl text-gray-950'>Bought toys: 175</p>
                    <p className='text-xl text-gray-950 pl-6'>Give us rating : 4.0 star</p>
                    <button className='btn btn-outline btn-accent mt-4 ml-6 mb-4'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default OurCustomer;