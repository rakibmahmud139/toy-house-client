import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyToysCard from './MyToysCard';

const MyToys = () => {
    const myToys = useLoaderData();

    return (
        <div className='mb-12'>
            <h3 className='text-center text-4xl font-bold uppercase text-accent mt-12 mb-8 underline'>My Toys</h3>
            <div className="overflow-x-auto">
                <table className="table">

                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Image</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toy => <MyToysCard
                                key={toy._id}
                                toy={toy}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;