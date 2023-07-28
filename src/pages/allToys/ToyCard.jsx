import React from 'react';
import { Link } from 'react-router-dom';

const ToyCard = ({ toy }) => {
    const { img, toyName, subCategory, price, available_quantity, _id } = toy;
    return (
        <div className="card w-96 bg-base-100 shadow-2xl">
            <figure><img className='w-72 h-72 pt-4 rounded-3xl shadow-2xl' src={img} alt="Shoes" /></figure>
            <div className="card-body space-y-6">
                <h2 className="card-title">{toyName}</h2>
                <p>Sub Category: {subCategory}</p>
                <p>Price: ${price}</p>
                <p>Available Quantity: {available_quantity}</p>
                <Link to={`/allToys/:${_id}`}><button className='btn btn-outline btn-accent'>View Details</button></Link>
            </div>
        </div>
    );
};

export default ToyCard;