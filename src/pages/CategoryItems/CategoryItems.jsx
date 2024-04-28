import React from 'react';
import ItemCard from '../../components/ItemCard/ItemCard';
import { useLoaderData } from 'react-router-dom';

const CategoryItems = () => {

    const categoryBasedItems = useLoaderData();

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 my-12'>
            {
                categoryBasedItems.map(item => <ItemCard key={item?._id} item={item}></ItemCard>)
            }
        </div>
    );
};

export default CategoryItems;