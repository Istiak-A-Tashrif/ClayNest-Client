const CategoryCard = ({data}) => {

    const {image, category, des} = data;

  return (
    <div className="card card-side bg-base-100 shadow-xl my-4 flex-col md:flex-row">
      <div className="w-full md:w-1/3">
      <figure>
        <img
          src={image}
          alt="Movie"
          className="w-full"
        />
      </figure>
      </div>
      <div className="card-body  w-full md:w-2/3">
        <h2 className="card-title">{category}</h2>
        <p>{des}</p>
        <div className="card-actions mt-2">
          <button className="btn btn-primary">View Products</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
