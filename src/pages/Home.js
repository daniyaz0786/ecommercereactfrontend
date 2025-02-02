import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardproduct from "../components/HorizontalCardproduct";
import VerticalCardproducts from "../components/VerticalCardproducts";

const Home = () => {
  return (
    <div className="text-red-600">
      <CategoryList />
      <BannerProduct />
      <HorizontalCardproduct category={"airpodes"} heading={"Top Airpods"} />
      <HorizontalCardproduct category={"watches"} heading={"Populer's watches"} />


      <VerticalCardproducts category={"mobiles"} heading={"Mobiles"} />
      <VerticalCardproducts category={"Mouse"} heading={"Mouse"} />
      <VerticalCardproducts category={"televisions"} heading={"Televisions"} />
      <VerticalCardproducts category={"camera"} heading={"Camera & Photography"} />
      <VerticalCardproducts category={"earphones"} heading={"Populer's Earphones"} />
      <VerticalCardproducts category={"speakers"} heading={"Bluetooth Speakers"} />
      <VerticalCardproducts category={"refrigerator"} heading={"Refrigerator"} />
      <VerticalCardproducts category={"trimmers"} heading={"Trimmers"} />
    </div>
  );
};

export default Home;
