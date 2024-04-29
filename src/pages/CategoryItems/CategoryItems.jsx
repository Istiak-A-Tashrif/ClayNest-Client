import React from 'react';
import ItemCard from '../../components/ItemCard/ItemCard';
import { useLoaderData } from 'react-router-dom';
import CategotyItemCard from './CategotyItemCard';

const CategoryItems = () => {

    const categoryBasedItems = useLoaderData();

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 my-10'>
            {
                categoryBasedItems.map(item => <CategotyItemCard key={item?._id} item={item}></CategotyItemCard>)
            }
        </div>
    );
};

export default CategoryItems;