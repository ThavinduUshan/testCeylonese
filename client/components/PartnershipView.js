import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../api/axios";
import CategoriesBar from "./CategoriesBar";
import NavBar from "./NavBar";
import mask2 from "../images/mask2.jpg";
import useCart from "../hooks/useCart";

const PartnershipView = () => {
  const { cart, setCart } = useCart();

  const { id } = useParams();
  const { pid } = useParams();

  const [isPartnershipSelected, setIsPartnershipSelected] = useState(false);

  const GET_PRODUCT_DETAILS_URL = `root/getproducts/${id}`;
  const GET_PARTNERSHIP_PRODUCT_DETAILS_URL = `root/getPartnershipedProduct`;

  const [product, setProduct] = useState();
  const [partnershipProduct, setPartnershipProduct] = useState();
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [qt, setQt] = useState(1);

  useEffect(() => {
    axios
      .get(GET_PRODUCT_DETAILS_URL)
      .then((response) => {
        console.log(response.data.product);
        setProduct(response.data.product);
      })
      .then(() => {
        const data = {
          productID: id,
          partnershipID: pid,
        };

        axios
          .post(GET_PARTNERSHIP_PRODUCT_DETAILS_URL, data)
          .then((response) => {
            if (response.data.error) {
              console.log(response.data.error);
            } else {
              console.log(response.data.partnershipedProduct);
              setPartnershipProduct(response.data.partnershipedProduct);
            }
          });
      });
  }, []);

  const addToCart = () => {
    let itemCount = cart.count;
    const isItemAlreadyAdded = cart.cartItems.some(
      (item) => item.productID == product.productID
    );

    if (isItemAlreadyAdded) {
      setAlreadyAdded(true);
      setTimeout(() => {
        setAlreadyAdded(false);
      }, 3000);
    } else {
      console.log(product);
      if (isPartnershipSelected) {
        let items = cart.cartItems.push(product);
        items = cart.cartItems.push(partnershipProduct);
        setCart({ ...cart, cartItems: items });
        setCart({
          ...cart,
          count: itemCount + 2,
        });
      } else {
        let items = cart.cartItems.push(product);
        setCart({ ...cart, cartItems: items });
        setCart({
          ...cart,
          count: ++itemCount,
        });
      }
    }
  };

  return (
    <>
      <NavBar />
      <CategoriesBar />
      <div class="grid grid-cols-2 gap-6">
        <div class="p-10 col-span-1 border-r-2">
          <img
            src={`http://localhost:3500/products/${product?.image1}`}
            class="w-auto h-auto"
            alt=""
          />
          <div class="mt-5 flex justify-between">
            <img
              src={`http://localhost:3500/products/${product?.image2}`}
              class="border-gray-800 border rounded-lg w-32 h-32"
              alt=""
            />
            <img
              src={`http://localhost:3500/products/${product?.image3}`}
              class="border-gray-800 border rounded-lg  w-32 h-32"
              alt=""
            />
            <img
              src={`http://localhost:3500/products/${product?.image4}`}
              class="border-gray-800 border rounded-lg w-32 h-32"
              alt=""
            />
            <img
              src={`http://localhost:3500/products/${product?.image5}`}
              class="border-gray-800 border rounded-lg  w-32 h-32"
              alt=""
            />
          </div>
          <div class="mt-6">
            <p class="mt-8 text-lg">
              <b>Product Ratings & Reviews</b>
            </p>
            <p class="text-4xl mt-2">4.5/5</p>
            <div class="flex mt-3">
              <img
                class="w-9 h-9"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-9 h-9"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-9 h-9"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-9 h-9"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-9 h-9"
                src="https://laz-img-cdn.alicdn.com/tfs/TB13svEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
            </div>
            <p class="text-gray-500">760 ratings</p>
            <div class="flex mt-6">
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />

              <div class="bg-gray-100 h-3 w-44 ml-5 mt-1">
                <div class="h-3 w-36 bg-yellow-400"></div>
              </div>
              <p class="ml-5">604</p>
            </div>
            <div class="flex mt-3">
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <div class="bg-gray-100 h-3 w-44 ml-5 mt-1">
                <div class="h-3 w-8 bg-yellow-400"></div>
              </div>
              <p class="ml-5">57</p>
            </div>
            <div class="flex mt-3">
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <div class="bg-gray-100 h-3 w-44 ml-5 mt-1">
                <div class="h-3 w-5 bg-yellow-400"></div>
              </div>
              <p class="ml-5">38</p>
            </div>
            <div class="flex mt-3">
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <div class="bg-gray-100 h-3 w-44 ml-5 mt-1">
                <div class="h-3 w-2 bg-yellow-400"></div>
              </div>
              <p class="ml-5">14</p>
            </div>
            <div class="flex mt-3">
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <div class="bg-gray-100 h-3 w-44 ml-5 mt-1">
                <div class="h-3 w-4 bg-yellow-400"></div>
              </div>
              <p class="ml-5">47</p>
            </div>
          </div>

          <div>
            <p class="mt-8 text-lg">
              <b>Reviews</b>
            </p>
            <div class="mt-4 flex">
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <p class="ml-64">15 Mar 2022</p>
            </div>
            <p>by Ashan A.</p>
            <p class="mt-3">
              I really love it!, This is second time I bought these nice mask.
              Good quality and It had been packed very safely. Thank you so
              much. Recommend for other buyers also.good luck!
            </p>
            <img class="w-32 h-32" src={mask2} alt="" />

            <div class="mt-4 flex">
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <p class="ml-64">6 june 2022</p>
            </div>
            <p>by Priyantha G.</p>
            <p class="mt-3">
              Amazing! Thank you for the quick service and super product.fast
              delivery
              <br />
              Good quality.
            </p>
            <div class="mt-4 flex">
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <p class="ml-64">23 July 2022</p>
            </div>
            <p>by Lakshan K.H</p>
            <p class="mt-3">
              Highly recommended the product very happy with is good for the
              price 🛳️❤️
            </p>
            <button class="text-blue-600">see more...</button>
            <br />
            <br />
          </div>
        </div>

        <div class="col-span-1 p-10">
          <p class="text-2xl">{product?.title}</p>
          <div class="flex gap-1 mt-1">
            <img
              class="w-5 h-5"
              src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
              alt=""
            />
            <img
              class="w-5 h-5"
              src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
              alt=""
            />
            <img
              class="w-5 h-5"
              src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
              alt=""
            />
            <img
              class="w-5 h-5"
              src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
              alt=""
            />
            <img
              class="w-5 h-5"
              src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
              alt=""
            />
            <p class="text-gray-400">760 ratings (2567 sold)</p>
            <p class="text-green-500">in-stock</p>
          </div>
          <p class="text-gray-900 text-4xl mt-2">
            <b>USD {product?.price}.00</b>
          </p>

          <p class="text-gray-500">Deliver to worldwide</p>
          <form action="" class="mt-5">
            <br />
            <label htmlFor="qt" className="mb-5">
              Quantity *
            </label>
            <br />
            <input
              type="number"
              class="mt-5 px-5 py-3 border border-gray-600 rounded w-20 h-10"
              value={qt}
              onChange={(e) => {
                setQt(e.target.value);
                setProduct({ ...product, qt: e.target.value });
              }}
            />
            <div className="flex justify-start w-full mt-5 mb-5 px-3 py-2 bg-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000"
                class="w-5 h-5 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>

              <p className=" text-sm  text-black">
                Flash Deal! You get <span>{partnershipProduct?.discount}%</span>{" "}
                off from the below product if you buy both together
              </p>
            </div>

            <div class="flex mb-3">
              <div class="flex items-center h-5">
                <input
                  id="helper-radio"
                  aria-describedby="helper-radio-text"
                  type="radio"
                  checked={isPartnershipSelected}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-orange-500 "
                  onClick={() => setIsPartnershipSelected((prev) => !prev)}
                />
              </div>
              <div class="ml-2 text-sm">
                <label for="helper-radio" class="font-medium text-gray-900 ">
                  Click here to Buy Both Items
                </label>
                <p
                  id="helper-radio-text"
                  class="text-xs font-normal text-gray-500 "
                >
                  {partnershipProduct?.discount}% off from this product if you
                  buy both together
                </p>
              </div>
            </div>

            <div className="grid grid-cols-5 h-36 text-center my-8 mt-0 bg-gray-50 shadow-md rounded-md">
              <div className="flex justify-center font-medium items-center col-span-1">
                <img
                  src={`http://localhost:3500/products/${partnershipProduct?.image1}`}
                  class=" h-30 ml-10"
                  alt="image"
                />
              </div>
              <div className="flex justify-start ml-10 font-medium items-center col-span-2">
                <p class="block text-left ">{partnershipProduct?.title}</p>
              </div>
              <div className="flex justify-center font-medium items-center w-full  col-span-1">
                <p class="block text-left ">
                  <span className="line-through text-red-500">
                    $
                    {partnershipProduct?.priceBeforDiscount &&
                      parseFloat(partnershipProduct.priceBeforDiscount).toFixed(
                        2
                      )}
                  </span>
                  <sup className="ml-2">
                    {partnershipProduct?.discount}% off
                  </sup>
                </p>
              </div>
              <div className="flex justify-center font-medium items-center w-full col-span-1">
                <p class="block text-green-500  text-2xl">
                  $
                  {partnershipProduct?.price &&
                    partnershipProduct.price.toFixed(2)}
                </p>
              </div>
            </div>

            <div class="mt-14">
              <button
                class="rounded font-semibold shadow-lg text-white bg-orange-500 p-2.5 w-60"
                type="button"
                value="Add to Cart"
                onClick={addToCart}
              >
                Add to Cart
              </button>
              <input
                class="rounded font-semibold shadow-lg text-white bg-gray-900 ml-4 p-2.5 w-60"
                type="submit"
                value="Buy Now"
              />
            </div>
          </form>

          {alreadyAdded && (
            <>
              <div className="flex mt-5 px-3 py-2 bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#16a34a"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm text-green-500">
                  Item Already In the Cart
                </p>
              </div>
            </>
          )}

          <div class="mt-12">
            <p class="mt-8 text-lg">
              <b>Description</b>
            </p>
            <p>{product?.description}</p>
            <p class="mt-8 text-lg">
              <b>SHIPPING</b>
            </p>
            <p>
              I accept orders from all over the world, and I'm working hard to
              make sure your order shipped out as soon as possible. Depending on
              my work load, the processing time may vary from 3 to 5 business
              days. Feel free to contact me if you would like to find out the
              lead time for a specific item you are interested in.
            </p>
            <p class="mt-2 underline text-gray-500">Estimated arrival</p>
            <p class="text-xl text-gray-600">Sep 23-29</p>
            <p class="mt-2 underline text-gray-500">Cost to ship</p>
            <p class="text-xl text-gray-600">USD 4.99</p>
            <p class="mt-5">RETURN AND EXCHANGE:</p>
            <p>
              Please feel free to contact me if there are any problems after you
              got my products, Replacement is free of charge if item comes
              damaged.
            </p>

            <p class="mt-6">
              <b>
                ****************************CONTACT_ME***************************
              </b>
            </p>
            <p class="mt-4">
              * For any further information or wholesale orders contact me at
              any time.
            </p>
            <p class="mt-4">
              * Please allow me to reply you within 24hrs (Monday-Friday). I
              will do my best to answer you quickly and accurately.
            </p>
            <p class="mt-4">
              * If you do not receive my reply, please kindly re-sent your email
              and I will reply to you as soon as possible. Thanks.
            </p>

            <p class="mt-5">
              <b>Meet your sellers</b>
            </p>
            <div>
              <Link
                to={`/sellers/store/${product?.storeID}`}
                className="mt-4 flex"
              >
                <img
                  src="https://i.etsystatic.com/isla/a37ea4/42486621/isla_75x75.42486621_m57y49qe.jpg?version=0"
                  alt=""
                />
                <p class="ml-4 mt-2 text-xl">
                  <b>Kayla</b>
                  <br />
                  Owner of SunFayStudioCo
                </p>
              </Link>
            </div>
            <button class="mt-6 ml-0 rounded font-semibold shadow-lg text-white bg-gray-900 p-2.5 w-60">
              Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnershipView;
