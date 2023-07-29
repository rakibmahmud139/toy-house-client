import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const GallerySection = () => {
    return (
        <div className='mb-16 text-center text-2xl text-accent'>
            <TypeAnimation
                sequence={[
                    'There are some of car toys\n',
                    1000,
                    'There are some of car toys Bus,\n',
                    1000,
                    "There are some of car toys Train,\n",
                    1000,
                    "There are some of car toys Motorcycle etc.",
                    1000,
                ]}
                speed={25}
                style={{ fontSize: '2em', whiteSpace: 'pre-line', }}
                repeat={Infinity}
            />

            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl mt-12">
                    <figure><img className='p-4 w-80 h-80 rounded-3xl' src="https://i.ibb.co/SRNQ7nQ/images-19.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-3xl'>Mini-Micro</p>
                        <p>This is mini jeep car. This toys are very strong to play</p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl mt-12">
                    <figure><img className='p-4 w-80 h-80 rounded-3xl' src="https://i.ibb.co/Lg9fWRS/download-11.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-3xl'>Mini-Jeep</p>
                        <p>This is mini jeep car. This toys are very strong to play</p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl mt-12">
                    <figure><img className='p-4 w-80 h-80 rounded-3xl' src="https://i.ibb.co/2nk7n83/download-9.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-3xl'>Mini-Safari</p>
                        <p>This is mini jeep car. This toys are very strong to play</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GallerySection;