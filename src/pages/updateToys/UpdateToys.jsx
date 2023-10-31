import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToys = () => {
    const toy = useLoaderData();
    const { price, available_quantity, detail, _id } = toy;


    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;
        const price = form.price.value;
        const available_quantity = form.quantity.value;
        const detail = form.detail.value;

        const updateToy = {
            price,
            available_quantity,
            detail
        }
        fetch(`https://toy-house-assignment-server.vercel.app/myToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'UPDATED!',
                        'Your toy has been updated.',
                        'success'
                    )
                }
            })
    }

    return (
        <div className='mt-12 mb-12'>
            <h3 className='text-4xl text-accent font-bold uppercase text-center mb-6'>Update Toy</h3>
            <form onSubmit={handleUpdate}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name='price' defaultValue={price} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="text" name='quantity' defaultValue={available_quantity} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail</span>
                    </label>
                    <input type="text" name='detail' defaultValue={detail} className="input input-bordered" />
                </div>
                <button className='btn btn-outline btn-accent mt-6 w-1/3 md:ml-[440px]'> <input type="submit" value="Update" /></button>
            </form>
        </div>
    );
};

export default UpdateToys;