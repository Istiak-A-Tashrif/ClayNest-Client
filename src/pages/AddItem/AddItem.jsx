import { useState } from "react";
import useAuth from "../../components/Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddItem = () => {
  const [customizable, setCustomizable] = useState("no");
  const [stock, setStock] = useState("in stock");
  const [rating, setRating] = useState(4);
  const [processingTime, setProcessingTime] = useState('1 week');
  const [category, setCategory] = useState('Clay-made pottery');



  const {user} = useAuth();
  console.log(user);

  const handleStock = (value) => {
    setStock(value)
  }

  const handleRadioChange = (value) => {
    setCustomizable(value);
  };
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleProcessingTimeChange = (event) => {
    setProcessingTime(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.userName.value;
    const email = form.email.value;
    const itemName = form.itemName.value;
    const photo = form.photo.value;
    const desc = form.desc.value;
    const price = form.price.value;

    const item  = { name, email, itemName, photo, desc, price, category, processingTime, customizable, rating, stock}

    fetch('http://localhost:5000/allItems', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: "Success!",
          text: "Item added successfully",
          icon: "success"
        });
      }
    })


  }
  return (
    <div className="p-4 mb-8 md:px-24 md:pb-32 md:pt-20 min-h-[55vh]">
      <Helmet>
      <title>ClayNest | Add Items</title>
    </Helmet>
<div className="text-center my-7">
    <h1  className="text-3xl font-medium">Add Craft Item</h1>
    <p>Add Craft Item: Expand Your Collection with Handcrafted Artisanal Pieces of Elegance and Charm"</p>
</div>

      <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="md:flex">
          <label htmlFor="userName" className="w-1/2 mr-4">
            <span className="mb-2 block">User Name</span>
            <input
              type="text"
              name="userName"
              defaultValue={user?.displayName || "User Name"}
              placeholder="User Name"
              className="input input-bordered w-full "
            />
          </label>
          <label htmlFor="email" className="w-1/2">
            <span className="mb-2 block">User Email</span>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="User Email"
              className="input input-bordered w-full"
              required
            />
          </label>
        </div>
        <div className="md:flex">
          <label htmlFor="itemName" className="w-1/2 mr-4">
            <span className="mb-2 block">Item Name</span>
            <input
              type="text"
              name="itemName"
              placeholder="Item Name"
              className="input input-bordered w-full "
            />
          </label>
          <label htmlFor="photo" className="w-1/2">
            <span className="mb-2 block">Craft Image</span>
            <input
              type="text"
              name="photo"
              placeholder="Image URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="md:flex">
          <label htmlFor="desc" className="w-1/2 mr-4">
            <span className="mb-2 block">Description</span>
            <input
              type="text"
              name="desc"
              placeholder="Short Description"
              className="input input-bordered w-full "
            />
          </label>
          <label htmlFor="price
          " className="w-1/2">
            <span className="mb-2 block">Price</span>
            <input
              type="text"
              name="price"
              placeholder="$1000"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="md:flex">
        <label htmlFor="category" className="w-1/2 mr-4">
      <span className="mb-2 block">Category</span>
      <select
        className="select select-bordered w-full"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="Clay-made pottery">Clay-made pottery</option>
        <option value="Stoneware">Stoneware</option>
        <option value="Porcelain">Porcelain</option>
        <option value="Terra Cotta">Terra Cotta</option>
        <option value="Ceramics & Architectural">Ceramics & Architectural</option>
        <option value="Home decor pottery">Home decor pottery</option>
      </select>
    </label>
          <label htmlFor="time" className="w-1/2">
      <span className="mb-2 block">Processing Time</span>
      <select
        className="select select-bordered w-full"
        value={processingTime}
        onChange={handleProcessingTimeChange}
      >
        <option value="1 week">1 week</option>
        <option value="2 weeks">2 weeks</option>
        <option value="3 weeks">3 weeks</option>
        <option value="4 weeks">4 weeks</option>
      </select>
    </label>
        </div>
        <div className="md:flex">
          <div className="w-1/2 mr-8">
          <div className="form-control w-min">
            <label
              htmlFor="customizable"
              className="label cursor-pointer space-x-2"
            >
              <span className="label-text">Customizable: </span>
              <span>Yes</span>
              <input
                type="radio"
                name="customizable"
                value="yes"
                className="radio"
                checked={customizable === "yes"}
                onChange={() => handleRadioChange("yes")}
              />
              <span className="pl-2">No</span>
              <input
                type="radio"
                name="customizable"
                value="no"
                className="radio"
                checked={customizable === "no"}
                onChange={() => handleRadioChange("no")}
              />
            </label>
          </div>
          </div>
          <label htmlFor="rating" className="w-1/2 mr-4 flex">
            <div className="flex items-center">
              <span className="mr-2 pl-1 md:pl-0">Rating:</span>
              <div className="rating" onChange={handleRatingChange}>
                <input
                  type="radio"
                  name="rating-1"
                  value="1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  value="2"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  value="3"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  value="4"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  value="5"
                  className="mask mask-star"
                />
              </div>
            </div>
          </label>
        </div>
        <div className="md:flex">
          <div className="form-control">
            <label
              htmlFor="stock"
              className="label cursor-pointer space-x-2"
            >
              <span className="label-text">Stock Status: </span>
              <span>In stock</span>
              <input
                type="radio"
                name="stock"
                value="in stock"
                className="radio"
                checked={stock === "in stock"}
                onChange={() => handleStock("in stock")}
              />
              <span className="pl-2">Made to order</span>
              <input
                type="radio"
                name="stock"
                value="made to order"
                className="radio"
                checked={stock === "made to order"}
                onChange={() => handleStock("made to order")}
              />
            </label>
          </div>
        </div>
        <div className="pt-8">
            <button type="submit" className="btn block w-1/2 mx-auto">Add Item</button>
          </div>
      </form>
    </div>
  );
};

export default AddItem;
