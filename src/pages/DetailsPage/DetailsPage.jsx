import React from "react";
import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
    const itemDetails = useLoaderData();
    const { name, email, itemName, photo, desc, price, category, processingTime, customizable, rating, stock} = itemDetails

    console.log(itemDetails);
  return (
    <section>
        <div className="dark:bg-gray-700">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">
              {itemName}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
              {desc}
            </p>
            <div className="flex flex-wrap justify-center">
              <span className="px-8 py-3 m-2 text-lg font-bold rounded dark:bg-gray-100 dark:text-gray-900">
                Price: ${price}
              </span>
              <span className="px-8 py-3 m-2 text-lg rounded dark:border-gray-300 dark:text-gray-50 font-semibold">
                Category: {category}
              </span>
            </div>
          </div>
        </div>
        <img
          src={photo}
          alt=""
          className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40"
        />

        <h3 className="px-4 pb- mx-auto text-center md:py-1 md:px-10 lg:px-32 font-semibold text-lg">
          Processing Time: {processingTime}
        </h3>
        <h3 className="px-4 pb- mx-auto text-center md:py-1 md:px-10 lg:px-32 font-semibold text-lg capitalize">
          Customizable: {customizable}
        </h3>
        <div className="rating w-full px-4 pb- items-center justify-center text-center md:py-1 md:px-10 lg:px-32 font-semibold text-lg"> <span className="mr-1">Rating:</span>
      {[1, 2, 3, 4, 5].map((value) => (
      <input
          key={value}
          type="radio"
          name="rating-1"
          className="mask mask-star"
          checked={value === rating}
          readOnly
        />
      ))}
    </div>
    <h3 className="px-4 pb- mx-auto text-center md:py-1 md:px-10 lg:px-32 font-semibold text-lg">
          Stock: {stock}
        </h3>
    <h3 className="px-4 pb- mx-auto text-center md:py-1 md:px-10 lg:px-32 font-bold text-lg">
          Author: {name}
        </h3>

        <div className="text-center mb-12">
          <h3 className="text-lg font-bold">
            Contact: <a href={`mailto:${email}`}>{email}</a>
          </h3>
        </div>

        <details
          open
          className="dropdown dropdown-left dropdown-end fixed right-0 bottom-3"
        >
          <summary className="m-1 btn btn-ghost">
            {" "}
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          </summary>
          <div className="chat-bubble dropdown-content z-[100] min-w-32">
            <a href="tel:+8801701137886">Feel free to contact us </a>
          </div>
        </details>
      </section>
  );
};

export default DetailsPage;
