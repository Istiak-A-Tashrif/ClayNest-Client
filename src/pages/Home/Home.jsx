import Banner from "./Banner";
import CategoryCard from "./CategoryCard";
import { Link, useLoaderData } from "react-router-dom";
import FAQ from "./FAQ";
import Newsletter from "./Newsletter";
import Lottie from "lottie-react";
import pottery from "../../assets/eco.json"
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import ItemCard from "../../components/ItemCard/ItemCard";

const Home = () => {
  const [crafts, setCrafts] = useState([]);

  useEffect(() => {
    fetch('https://art-store-server-nine.vercel.app/allItems')
    .then(res => res.json())
    .then(data => {
      const showItem = data.filter(item =>
        ["Clay Pot", "Classical Blackware", "Porcelain Flask", "TerraCotta Interior", "3D Ceramic Arch.", "Artistic Vase"].includes(item.itemName)
      );
      setCrafts(showItem);
    })
    .catch(error => console.error("Error fetching data:", error));
}, []);
  
  const categoryData = useLoaderData();

  return (
  <>
  <Helmet>
    <title>ClayNest | Home</title>
  </Helmet>
  <Banner></Banner>
 <div className="flex justify-around items-center my-20">
  <div className="w-1/2 space-y-2">
    <h1 className="text-3xl font-semibold">Eco-Friendly Essentials</h1>
    <p>Discover eco-friendly solutions for everyday living. Our curated collection offers sustainable alternatives for a greener lifestyle without sacrificing convenience or quality. Start making a positive impact today!</p>
  </div>
  <div className="">
  <Lottie animationData={pottery} loop={true} className="h-36"/>
  </div>
 </div>

 <div className="text-center mb-12 space-y-3">
    <h1 className="text-3xl font-semibold">Art & Craft Items</h1>
    <p className="text-lg">Handcrafted ceramics and pottery—porcelain to terra cotta. Elevate your space with our artisanal home decor and architectural pieces, meticulously crafted for timeless elegance. Crafted from Earth, Crafted for You</p>
  </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6">
  {
    crafts.map((item) => <ItemCard key={item._id} item={item}></ItemCard>)
  }
 </div>

 <div className="mb-16">
  <Link to={"/allItems"}><button className="btn btn-outline btn-info block mx-auto">View All Items </button></Link>
 </div>

 <div className="text-center mb-12 space-y-3">
  <h1 className="text-3xl font-semibold">Art & Craft Categoies</h1>
  <p className="text-lg">Discover a world of creativity and craftsmanship through our diverse art and craft categories. From elegant porcelain to rustic terra cotta, find the perfect piece to adorn your space or gift to someone special.</p>
 </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6">
  {
    categoryData.map(data => <CategoryCard key={data._id} data={data}></CategoryCard>
    )
  }
  </div>


  <FAQ></FAQ>
  <Newsletter></Newsletter>
  </>
);
};

export default Home;
