import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { CardProduct } from "./components/CardProduct";
import Footer from "../../components/Footer";
import axios from "axios";
import { URL_API } from "../../api/data";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  const bgStyles = {
    backgroundColor: "#fefeff",
    backgroundImage: "linear-gradient(45deg, #fefeff 0%, #000000 100%)",
  };

  const categoryDrinksList = ["Espresso", "Seasonal", "Non-Coffe", "Tea"];
  const categoryFoodList = ["Bread", "Cake", "Pastry", "Dessert"];
  const displayCategory = (categoryList) => {
    return categoryList.map((category) => {
      return (
        <button
          key={category}
          type="button"
          className="text-md border-2 border-white rounded-2xl p-3 hover:bg-slate-50 hover:font-medium drop-shadow-lg text-start"
        >
          {category}
        </button>
      );
    });
  };

  
  const displayCategoryDrinksList = displayCategory(categoryDrinksList);
  const displayCategoryFoodList = displayCategory(categoryFoodList);

  const displayProducts = products.map((product) => {
    const { id, name, qty, price, description, image } = product;
    const prepareImage = image.replace("public/", `${URL_API}/`);
    return (
      <CardProduct
        key={id}
        name={name}
        qty={qty}
        price={price}
        description={description}
        image={prepareImage}
      />
    );
  });

  useEffect(() => {
    axios
      .get(`${URL_API}/products`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>

      {/* Drinks Section */}
      <div className=" text-white flex flex-col gap-6 items-center">
        <div className="text-black p-5 ">
          <h1 className="text-5xl font-medium drop-shadow-lg text-center">
            Drinks
          </h1>
          <div className="flex gap-5 mt-3 items-center justify-center">
            {displayCategoryDrinksList}
          </div>
          <div className="flex flex-wrap gap-5 mt-7">
            {displayProducts}
          </div>
        </div>
      </div>
      
      {/* Food Section */}
      <div className=" text-white flex flex-col gap-6 items-center">
        <div className="text-black p-5 ">
          <h1 className="text-5xl font-medium drop-shadow-lg text-center">
            Foods
          </h1>
          <div className="flex gap-5 mt-3 items-center justify-center">
            {displayCategoryFoodList}
          </div>
          <div className="flex flex-wrap gap-5 mt-7">
            {displayProducts}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
