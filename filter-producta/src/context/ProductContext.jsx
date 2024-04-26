import React, { createContext, useEffect, useState } from "react";
import Rating from "react-rating";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [filterState, setFilterState] = useState({
    selectedCategory: "All categories",
    selectedBrand: "All brands",
    maxPrice: 700,
    rating: 5,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=0");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const allCategories = products.map((product) => product.category);
  const categories = ["All categories", ...new Set(allCategories)];

  const allBrands = products
    .filter((item) => {
      return (
        filterState.selectedCategory === "All categories" ||
        item.category === filterState.selectedCategory
      );
    })
    .map((item) => item.brand);

  const brands = ["All brands", ...new Set(allBrands)];

  const filteredProducts = products.filter((item) => {
    const categoryMatch =
      filterState.selectedCategory === "All categories" ||
      item.category === filterState.selectedCategory;

    const brandMatch =
      filterState.selectedBrand === "All brands" ||
      item.brand === filterState.selectedBrand;

    const priceMatch = item.price <= filterState.maxPrice;

    const ratingMatch = item.rating <= filterState.rating;

    return categoryMatch && brandMatch && priceMatch && ratingMatch;
  });

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        brands,
        filteredProducts,
        filterState,
        setFilterState,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
