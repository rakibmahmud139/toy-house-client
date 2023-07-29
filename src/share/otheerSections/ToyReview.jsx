import React from 'react';

const ToyReview = () => {
    return (
        <div className='mb-16 mt-24'>
            <h3 className='text-center text-4xl uppercase lg:mb-8 text-accent'>BUY Car toys in discount</h3>
            <div className='pl-6 lg:flex lg:gap-24 lg:p-24'>
                <div className='mt-8 mb-6 lg:mt-24 space-y-4'>
                    <p className='text-accent hover:text-3xl'>Save 50% on purchase</p>
                    <h3 className='text-3xl font-bold mr-24'>Speedster Sprinters: The Ultimate Racing Toy Car Experience</h3>
                    <p>Speedster Sprinters is a thrilling and high-octane racing toy car designed to deliver an exhilarating racing experience for kids and adults alike. Inspired by real-life racing cars, these miniature marvels are built with precision engineering and cutting-edge technology to offer an unmatched level of speed, control, and excitement.</p>
                </div>
                <img className='w-96 h-96 rounded-2xl shadow-2xl' src="https://i.ibb.co/J2pC18y/images-15.jpg" alt="" />
            </div>
        </div>
    );
};

export default ToyReview;