import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyToysCard from './MyToysCard';
import Swal from 'sweetalert2';

const MyToys = () => {
    const toys = useLoaderData();
    const [myToys, setToys] = useState(toys);


    //Delete
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            fetch(`https://toy-house-assignment-server.vercel.app/myToys/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(toy => toy._id !== id);
                            setToys(remaining);
                        }
                    }
                })
        })
    }


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
                                handleDelete={handleDelete}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;