import {
  RiEyeLine,
  RiHeartFill,
  RiHeartLine,
  RiShoppingCartLine,
} from "@remixicon/react";

import { useState } from "react";
import Rating from "react-rating";

function SingleProduct({ productContent }) {
  const { title, brand, price, thumbnail, discountPercentage } = productContent;

  const [wishlistState, setWishlistState] = useState(false);

  function wishlistHandler() {
    setWishlistState(!wishlistState);
  }

  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:shadow-xl ">
      {productContent ? (
        <>
          <div className="relative group ">
            <img
              src={thumbnail}
              alt={title}
              className="h-80 w-72 object-center object-cover rounded-t-xl"
            />

            <div className="absolute top-3 right-3 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 ">
              <button className="hover:scale-105 active:scale-95">
                <div className="w-12 h-12 bg-white flex justify-center items-center text-black rounded-lg">
                  <RiShoppingCartLine />
                </div>
              </button>
              <button
                onClick={() => wishlistHandler()}
                className="hover:scale-105 active:scale-95"
              >
                <div className="w-12 h-12 bg-black flex justify-center items-center text-white rounded-lg">
                  {wishlistState ? <RiHeartFill /> : <RiHeartLine />}
                </div>
              </button>
              <button className="w-12 h-12 bg-black flex justify-center items-center text-white rounded-lg hover:scale-105 active:scale-95">
                <RiEyeLine />
              </button>
            </div>
          </div>

          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">
              {brand}
            </span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {title}
            </p>
            <Rating initialRating={productContent.rating} />
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                ${price}
              </p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">
                  ${price - Math.round(discountPercentage)}
                </p>
              </del>
            </div>
          </div>
        </>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}

export { SingleProduct };
