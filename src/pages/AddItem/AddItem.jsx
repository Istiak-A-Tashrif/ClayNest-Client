import { useState } from "react";
import useAuth from "../../components/Hooks/useAuth";

const AddItem = () => {
  const [customizable, setCustomizable] = useState("no");
  const [stock, setStock] = useState("in stock");

  const {user} = useAuth();

  const handleStock = (value) => {
    setStock(value)
  }

  const handleRadioChange = (value) => {
    setCustomizable(value);
  };
  return (
    <div className="p-4 mb-8 md:px-24 md:pb-32 md:pt-20 min-h-[55vh]">

<div className="text-center my-7">
    <h1  className="text-3xl font-medium">Add Craft Item</h1>
    <p>Add Craft Item: Expand Your Collection with Handcrafted Artisanal Pieces of Elegance and Charm"</p>
</div>

      <form className="space-y-4">
      <div className="md:flex">
          <label htmlFor="itemName" className="w-1/2 mr-4">
            <span className="mb-2 block">User Name</span>
            <input
              type="text"
              defaultValue={user?.displayName || "User Name"}
              placeholder="User Name"
              className="input input-bordered w-full "
            />
          </label>
          <label htmlFor="photo" className="w-1/2">
            <span className="mb-2 block">User Email</span>
            <input
              type="text"
              defaultValue={user?.email || "User Email"}
              placeholder="User Email"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="md:flex">
          <label htmlFor="itemName" className="w-1/2 mr-4">
            <span className="mb-2 block">Item Name</span>
            <input
              type="text"
              placeholder="Item Name"
              className="input input-bordered w-full "
            />
          </label>
          <label htmlFor="photo" className="w-1/2">
            <span className="mb-2 block">Craft Image</span>
            <input
              type="text"
              placeholder="Image URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="md:flex">
          <label htmlFor="itemName" className="w-1/2 mr-4">
            <span className="mb-2 block">Description</span>
            <input
              type="text"
              placeholder="Short Description"
              className="input input-bordered w-full "
            />
          </label>
          <label htmlFor="photo" className="w-1/2">
            <span className="mb-2 block">Price</span>
            <input
              type="text"
              placeholder="$1000"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="md:flex">
          <label htmlFor="itemName" className="w-1/2 mr-4">
            <span className="mb-2 block">Category</span>
            <select className="select select-bordered w-full">
              <option>Clay-made pottery</option>
              <option>Stoneware</option>
              <option>Porcelain</option>
              <option>Terra Cotta</option>
              <option>Ceramics & Architectural</option>
              <option>Home decor pottery</option>
            </select>
          </label>
          <label htmlFor="photo" className="w-1/2">
            <span className="mb-2 block">Processing Time</span>
            <select className="select select-bordered w-full">
              <option>1 week</option>
              <option>2 week</option>
              <option>3 week</option>
              <option>4 week</option>
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
          <label htmlFor="itemName" className="w-1/2 mr-4 flex">
            <div className="flex items-center">
              <span className="mr-2">Rating:</span>
              <div className="rating">
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
            <button className="btn block w-1/2 mx-auto">Add Item</button>
          </div>
      </form>
    </div>
  );
};

export default AddItem;
