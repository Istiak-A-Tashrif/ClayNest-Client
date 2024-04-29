import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ListCard = ({ item, list, setList }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingItem = list.filter((aItem) => aItem._id != id);

              setList(remainingItem)
            }
          });
      }
    });
  };
  return (
    <div className="card max-w-96 bg-base-100 shadow-xl mb-12 mx-auto">
      <figure>
        <img src={item?.photo} alt="Shoes" className="w-full h-96" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item?.itemName}</h2>
        <div className="flex font-medium text-lg">
          <p className="">Price: ${item?.price}</p>
          <p>Stock: {item?.stock}</p>
        </div>
        <div className="space-y-1 font-semibold">
          <p>Processing Time: {item?.processingTime}</p>
          <p className="capitalize">Customizable: {item?.customizable}</p>
        </div>
        <div className="flex font-semibold">
          <p className="flex items-center">
            <span className="mr-1">Rating:</span> <CiStar /> {item?.rating}
          </p>
        </div>
        <div className="card-actions justify-between mt-4">
          <Link to={`/update/${item?._id}`}><button className="btn btn-primary">Update</button></Link>
          <button
            className="btn btn-error"
            onClick={() => handleDelete(item._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
