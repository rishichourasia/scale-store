import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import "./productlist.css";
import { useProduct } from "../../context/product-context";
import { apiCall } from "../../utils/productlist-api-call";
import {
  priceRange,
  ratingProducts,
  sortCategory,
  sortProducts,
} from "../../utils/filters";
import { ProductCard } from "./ProductCard";
import { Toaster } from "react-hot-toast";

export const ProductList = () => {
  const { productState, productDispatch } = useProduct();
  const { productsList, rating, sortBy, price, categories } = productState;
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    await apiCall(productDispatch);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const categoryProducts = sortCategory(productsList, categories);
  const rangedProducts = priceRange(categoryProducts, price);
  const ratedProducts = ratingProducts(rangedProducts, rating);
  const sortedProducts = sortProducts(ratedProducts, sortBy);

  return (
    <div className="main">
      <Toaster position="top-center " />
      <Sidebar />
      <div className="productlist">
        {isLoading ? (
          <div className="loader-div">
            <span className="loader"></span>
          </div>
        ) : (
          sortedProducts.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))
        )}
      </div>
    </div>
  );
};
