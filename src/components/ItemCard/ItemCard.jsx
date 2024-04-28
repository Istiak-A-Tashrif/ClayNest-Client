import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({item}) => {
    return (
        <div className="card max-w-96 bg-base-100 shadow-xl mb-10">
  <figure><img src={item?.photo} alt="Shoes" className='w-full h-96'/></figure>
  <div className="card-body">
    <h2 className="card-title">{item?.itemName}</h2>
    <p className='text-lg font-medium'><span>Category: {item?.category}</span></p>
    <p>{item?.desc}</p>
    <div className="card-actions justify-between mt-4">
      <button className="btn btn-accent">Price: {item?.price}</button>
      <Link to={`/item/${item?._id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default ItemCard;