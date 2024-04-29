import React from "react";
import ItemCard from "../../components/ItemCard/ItemCard";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AllItems = () => {
  const items = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>ClayNest | All Items</title>
      </Helmet>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 my-10">
        {items.map((item) => (
          <ItemCard key={item?._id} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
