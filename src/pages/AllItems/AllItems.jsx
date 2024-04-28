import React from "react";
import ItemCard from "../../components/ItemCard/ItemCard";
import { useLoaderData } from "react-router-dom";

const AllItems = () => {
  const items = useLoaderData();

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 my-12">
        {items.map((item) => (
          <ItemCard key={item?._id} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
