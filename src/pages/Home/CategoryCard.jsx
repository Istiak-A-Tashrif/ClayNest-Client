import { Link } from "react-router-dom";

const CategoryCard = ({data}) => {

    const {image, category, des, _id} = data;

  return (
    <div className="card max-w-96 bg-base-100 shadow-xl mb-12 mx-auto">
    <figure>
      <img src={image} alt="Shoes" className="w-full h-96" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{category}</h2>
      <p>{des}</p>
      <div className="card-actions justify-between mt-4">
        <Link to={`/items/${_id}`}>
          <button className="btn btn-primary">View Products</button>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default CategoryCard;
