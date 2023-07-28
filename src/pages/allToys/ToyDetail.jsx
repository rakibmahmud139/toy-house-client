import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const ToyDetail = () => {
    const { user } = useContext(AuthContext);

    const toy = useLoaderData();
    const { img, toyName, price, available_quantity, rating, detail, } = toy;

    return (
        <div className="card w-full glass mb-12">
            <figure><img className=' w-3/5 h-96 rounded-xl' src={img} alt="car!" /></figure>
            <div className="card-body pl-12 text-gray-950">
                <h2 className="card-title"><span className='text-2xl font-bold'>Toy Name:</span> {toyName}</h2>
                <p><span className='text-2xl font-bold'>Seller Name: </span>{user?.displayName}</p>
                <p><span className='text-2xl font-bold'>Seller Email:</span> {user?.email}</p>
                <p><span className='text-2xl font-bold'>Price: </span>${price}</p>
                <p><span className='text-2xl font-bold'>Rating:</span> {rating} Star</p>
                <p><span className='text-2xl font-bold'>Available Quantity: </span>{available_quantity}</p>
                <p><span className='text-2xl font-bold'>Detail:</span> {detail}</p>
            </div>
        </div>
    );
};

export default ToyDetail;