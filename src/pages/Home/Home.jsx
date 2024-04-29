import Banner from "./Banner";
import CategoryCard from "./CategoryCard";
import { useLoaderData } from "react-router-dom";
import FAQ from "./FAQ";
import Newsletter from "./Newsletter";
import Lottie from "lottie-react";
import pottery from "../../assets/eco.json"
import { Helmet } from "react-helmet-async";

const Home = () => {

    const categoryData = useLoaderData();

  return (
  <>
  <Helmet>
    <title>ClayNest | Home</title>
  </Helmet>
  <Banner></Banner>
 <div className="flex justify-around items-center my-20">
  <div className="w-1/2 space-y-2">
    <h1 className="text-3xl font-medium">Eco-Friendly Essentials</h1>
    <p>Discover eco-friendly solutions for everyday living. Our curated collection offers sustainable alternatives for a greener lifestyle without sacrificing convenience or quality. Start making a positive impact today!</p>
  </div>
  <div className="">
  <Lottie animationData={pottery} loop={true} className="h-36"/>
  </div>
 </div>
  <div className="text-center mt-8 mb-12 space-y-3">
    <h1 className="text-3xl  font-medium">Art & Craft Items</h1>
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
