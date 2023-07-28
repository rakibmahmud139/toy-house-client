import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyCard from './ToyCard';

const AllToys = () => {
    const allToys = useLoaderData();

    return (
        <div className='mb-16 mt-16'>
            <div className='text-center space-y-4 mr-64 ml-64'>
                <h3 className='text-4xl text-accent'>Here the all category car toys like</h3>
                <p>Racing Cars,  Monster Trucks, Emergency Vehicles, Off-Road Vehicles, Urban Cars,  Farm Vehicles, Sports Cars, Construction Vehicles etc..</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20'>
                {
                    allToys.map(toy => <ToyCard
                        key={toy._id}
                        toy={toy}
                    />)
                }
            </div>
        </div>
    );
};

export default AllToys;