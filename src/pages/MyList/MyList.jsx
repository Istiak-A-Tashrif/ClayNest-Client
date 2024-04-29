import { useLoaderData } from "react-router-dom";
import ListCard from "./ListCard";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const MyList = () => {
  const myCraftList = useLoaderData();
  const [list, setList] = useState(myCraftList);

  const handleCustomizable = () => {
    const Customizableitem = myCraftList.filter((item) => item.customizable === "yes");
    setList(Customizableitem);
  };
  const handleNotCustomizable = () => {
    const Customizableitem = myCraftList.filter((item) => item.customizable === "no");
    setList(Customizableitem);
  };

  const clearFilter = () => {
    setList(myCraftList);
  };

  return (
    <div className="min-h-[69vh]">
      <Helmet>
        <title>ClayNest | My List</title>
      </Helmet>
      <div className="flex justify-center">
        <div className="dropdown mt-4">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={clearFilter}>None</button>
            </li>
            <li>
              <button onClick={handleCustomizable}>Customizable</button>
            </li>
            <li>
              <button onClick={handleNotCustomizable}>Not Customizable</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 my-10">
        {list.map((item) => (
          <ListCard
            key={item._id}
            item={item}
            list={list}
            setList={setList}
          ></ListCard>
        ))}
      </div>
    </div>
  );
};

export default MyList;
