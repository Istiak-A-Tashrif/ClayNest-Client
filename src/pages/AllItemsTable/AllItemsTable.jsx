import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllItemsTable = () => {
  const itemsData = useLoaderData();
  return (
     <div className="mt-8 mb-4">
        <div className="text-center mb-12 space-y-3">
    <h1 className="text-3xl font-semibold">Crafted Creations Gallery</h1>
    <p className="">Explore our curated selection of artisanal treasures, each item crafted with passion and creativity. Discover your next masterpiece today.</p>
  </div>
         <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Customizable</th>
              <th>Processing Time</th>
            </tr>
          </thead>
          <tbody>
            {itemsData.map((item, idx) => (
              <tr className="hover">
                <th>{idx + 1}</th>
                <td>{item.itemName}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td className="capitalize">{item.customizable}</td>
                <td>{item.processingTime}</td>
                <td className="px-0">
                  <Link to={`/item/${item._id}`}>
                    <button className="btn btn-link w-min">View Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     </div>
  );
};

export default AllItemsTable;
