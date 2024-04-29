import { useLoaderData } from "react-router-dom";
import ListCard from "./ListCard";
import { useState } from "react";


const MyList = () => {

    const myCraftList = useLoaderData();
    const [list, setList] = useState(myCraftList);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6">
            {
                list.map((item) => <ListCard key={item._id} item={item} list={list} setList={setList}></ListCard>)
            }
        </div>
    );
};

export default MyList;