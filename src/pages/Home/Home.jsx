import Banner from "./Banner";
import CategoryCard from "./CategoryCard";
import { useLoaderData } from "react-router-dom";
import FAQ from "./FAQ";
import Newsletter from "./Newsletter";

const Home = () => {

    const categoryData = useLoaderData();

  return (
  <>
  <Banner></Banner>
  <div className="text-center my-8 space-y-3">
    <h1 className="text-3xl  font-medium">Our Products</h1>
    <p className="text-lg">Handcrafted ceramics and pottery—porcelain to terra cotta. Elevate your space with our artisanal home decor and architectural pieces. Crafted from Earth, Crafted for You.</p>
  </div>
  {
    categoryData.map(data => <CategoryCard key={data._id} data={data}></CategoryCard>
    )
  }

  <FAQ></FAQ>
  <Newsletter></Newsletter>
  </>
);
};

export default Home;
