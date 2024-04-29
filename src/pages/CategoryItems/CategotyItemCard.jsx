import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip'


const CategotyItemCard = ({ item }) => {
    
    return (
      <div className="card max-w-96 bg-base-100 shadow-xl mb-12 mx-auto">
        <figure>
          <img src={item?.photo} alt="Shoes" className="w-full h-96" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item?.itemName}</h2>
          <p className="text-lg font-medium">
            <span>Category: {item?.category}</span>
          </p>
          <p>{item?.desc}</p>
          <div className="space-y-1 mt-3 font-semibold">
            <p>Processing Time: {item?.processingTime}</p>
          </div>
          <div className="flex font-semibold">
            <p className="">Price: ${item?.price}</p>
            <p className="flex items-center">
              <span className="mr-1">Rating:</span> <CiStar /> {item?.rating}
            </p>
          </div>
          <div className="card-actions  mt-4">
          <Link to={`/item/${item?._id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
          </div>
        </div>
      </div>
    );
};

export default CategotyItemCard;