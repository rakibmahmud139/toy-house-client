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
                    <figure><img className='p-4 w-80 h-80 rounded-3xl' src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-3xl'>Mini-Jeep</p>
                        <p>This is mini jeep car. This toys are very strong to play</p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl mt-12">
                    <figure><img className='p-4 w-80 h-80 rounded-3xl' src="https://images.unsplash.com/photo-1453053507108-9f5456eb481f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95cyUyMHRyYWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-3xl'>Mini-Train</p>
                        <p>This is mini jeep car. This toys are very strong to play</p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl mt-12">
                    <figure><img className='p-4 w-80 h-80 rounded-3xl' src="https://images.unsplash.com/photo-1517649187581-ad0f359f0092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRveXMlMjB0cmFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-3xl'>Mini-Track</p>
                        <p>This is mini jeep car. This toys are very strong to play</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GallerySection;