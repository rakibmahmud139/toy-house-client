import React from 'react';
import Swal from 'sweetalert2';

const AddToy = () => {


    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const toyName = form.name.value;
        const email = form.email.value;
        const displayName = form.user.value;
        const subCategory = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const available_quantity = form.quantity.value;
        const detail = form.detail.value;
        const img = form.photo.value;

        const newToy = {
            toyName,
            email,
            displayName,
            subCategory,
            price,
            rating,
            available_quantity,
            detail,
            img
        }

        fetch('http://localhost:5000/myToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'ADDED!',
                        'Your toy has been added.',
                        'success'
                    )
                }
            })
    }


    return (
        <div className='mb-12'>
            <h3 className='text-4xl text-accent font-bold uppercase text-center mb-6'>Add Toy</h3>
            <form onSubmit={handleAddToy}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name='name' placeholder="toy name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" name='email' placeholder="seller email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name='user' placeholder="seller name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <input type="text" name='category' placeholder="sub category" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="rating" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder="available quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <input type="text" name='detail' placeholder="detail description" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />
                </div>
                <button className='btn btn-accent w-full mt-5'> <input type="submit" value="Add Toy" /></button>
            </form>
        </div>
    );
};

export default AddToy;