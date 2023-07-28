import React from 'react';
import { IoTrashOutline, IoPencilSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';




const MyToysCard = ({ toy, handleDelete }) => {
    const { img, toyName, price, available_quantity, rating, detail, _id } = toy;



    return (
        <tr>
            <th>
                <label>
                    <Link to={`/myToys/${_id}`}><button className="btn btn-outline btn-accent text-3xl"><IoPencilSharp /></button></Link>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{toyName}</td>
            <td>
                ${price}
            </td>
            <td>
                {available_quantity}
            </td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-accent text-3xl"><IoTrashOutline /></button>
            </th>
        </tr>

    );
};

export default MyToysCard;