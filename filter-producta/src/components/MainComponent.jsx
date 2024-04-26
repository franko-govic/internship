import React from "react";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { SingleProduct } from "./SingleProduct";

const MainComponent = () => {
  const {
    products,
    categories,
    brands,
    filteredProducts,
    filterState,
    setFilterState,
  } = useContext(ProductContext);

  console.log("Filltered products-->", filteredProducts);
  console.log("All products-->", products);
  console.log("Category-->", filterState.selectedCategory);
  console.log("Brand-->", filterState.selectedBrand);
  console.log("Max price-->", filterState.maxPrice);
  console.log("Rating-->", filterState.rating);

  return (
    <div>
      <h1 className="text-6xl text-center mt-5">Product Filter</h1>
      <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-5">
        <select
          value={filterState.selectedCategory}
          onChange={(e) =>
            setFilterState({ ...filterState, selectedCategory: e.target.value })
          }
        >
          {categories.map((item, index) => (
            <option keay={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          value={filterState.selectedBrand}
          onChange={(e) =>
            setFilterState({ ...filterState, selectedBrand: e.target.value })
          }
        >
          {brands.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <label className="flex gap-3 ml-1 items-center">
          Max cijena:
          <input
            type="range"
            min={50}
            max={5000}
            step={50}
            value={filterState.maxPrice}
            onChange={(e) =>
              setFilterState({ ...filterState, maxPrice: e.target.value })
            }
          />
          <p>{filterState.maxPrice}</p>
        </label>
        <label className="flex justify-between items-center gap-3 ml-1">
          Ocjena:
          <input
            type="range"
            min={1}
            max={5}
            step={1}
            value={filterState.rating}
            onChange={(e) =>
              setFilterState({ ...filterState, rating: e.target.value })
            }
          />
          <p>{filterState.rating}</p>
        </label>
      </div>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {filteredProducts.map((product) => {
          return <SingleProduct key={product.id} productContent={product} />;
        })}
      </div>
    </div>
  );
};

export { MainComponent };
