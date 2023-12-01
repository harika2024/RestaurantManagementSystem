import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";
import { add } from "../Store/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  Ripple,
  initTE,
} from "tw-elements";


function Container({ updatedList }) {
  initTE({ Modal, Ripple });
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart);

  const handleAdd = (product) => {
    dispatch(add(product));
  };


  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      localStorage.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  return (
    <>
      <div className="mx-48 pb-10">
        <div
          className={`w-full flex flex-wrap items-center justify-center gap-5  my-12 scroll-smooth`}
        >
          {updatedList.map((ele) => {
            const { FoodName, Calories, ImgSrc, Price, _id } = ele;
            return (
              <div
                key={_id}
                className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
              >
                <div className="w-full flex items-center justify-between">
                  {/* images */}
                  <motion.div
                    className="w-40 h-40 mt-3 drop-shadow-2xl"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="col-12 col-md-12 collg-4 img-div">
                      <img
                        src={ImgSrc}
                        alt="menupic"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </motion.div>

                  {/* menu description */}
                  <div className="w-full flex flex-col items-end justify-end mt-3">
                    <button>
                      <motion.div
                        whileTap={{ scale: 0.75 }}
                        className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer -mt-8 mb-2"
                        data-te-toggle="modal"
                        data-te-target="#rightTopModal"
                        data-te-ripple-init
                        type="button"
                        onClick={() => handleAdd(ele)}
                      >
                        <MdShoppingBasket
                          className="text-white"
                        />
                      </motion.div>
                    </button>

                    <p className="text-textColor font-semibold text-right md:text-lg break-normal">
                      {FoodName}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {Calories} Calories
                    </p>
                    <div className="flex items-center gap-8">
                      <p className="text-lg text-headingColor font-semibold">
                        <span className="text-sm text-red-500">$</span> {Price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      {/* <!--Top right modal--> */}
      <div
        data-te-modal-init
        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="rightTopModal"
        tabindex="1"
        aria-labelledby="rightTopModalLabel"
        aria-hidden="true">




        <div
          data-te-modal-dialog-ref
          class="pointer-events-none absolute right-7 h-auto w-full translate-x-[0%] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
          <div
            class="min-[576px] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current outline-none dark:bg-neutral-600">
            <div
              class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              {/* <!--Modal title--> */}
              <h5
                class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalLabel">
                Added Sucessfully
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container;
