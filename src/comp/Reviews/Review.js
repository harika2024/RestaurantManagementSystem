import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfTwoToneIcon from "@mui/icons-material/StarHalfTwoTone";
import img1 from "../../assests/MenuFood/Dessert/cake.jpg";
import img4 from "../../assests/MenuFood/Dessert/cake.jpg";
import img6 from "../../assests/MenuFood/Dessert/cake.jpg";
import img8 from "../../assests/MenuFood/Dessert/cake.jpg"
// import './styleRe.css'

const Review = () => {
    return (
        <>
            {/* <div className=" bg-red-50">
                <div className=" grid justify-center items-center mx-10 my-6">
                    <div className="text-2xl font-bold capitalize my-6 text-red-700 text-center">What are People Saying?</div>
                    <div className="grid grid-cols-2 gap-x-10 mx-60">
                        <div className="justify-center items-center mx-10 my-10">
                            <div>
                                <img src={img1} alt=" " className="rounded-lg w-fit h-80" />
                            </div>
                            <div className="mt-3 justify-center items-center mx-4 ">
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfTwoToneIcon />
                            </div>
                            <div className="justify-center items-center mt-3 text-base">
                                The chicken curry was the winner of the evening
                                Everybody loved their food and the rest was
                                good as well. The yellow dal was my favourite,
                                everything tastes very good quality and my wife
                                has already placed our next order. Thanks a lot!
                            </div>
                        </div>
                        <div className="justify-center items-center mx-10 my-10">
                            <div>
                                <img src={img6} alt=" " className="rounded-lg w-fit h-80" />
                            </div>
                            <div className="mt-3 justify-center items-center mx-4 ">
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>
                            <div className="justify-center items-center mt-3 text-base">
                                The dinner event was amazing, everyone loved
                                the food so much!! They were all asking where
                                we'd ordered from. Im sure they'll be
                                reaching out for orders!! Thanks again.
                                The evening was wonderful.
                            </div>
                        </div>


                        <div className="justify-center items-center mx-10 my-10">
                            <div>
                                <img src={img4} alt=" " className="rounded-lg w-fit h-80" />
                            </div>
                            <div className="mt-3 items-center ">
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>
                            <div className="justify-center items-center mt-3 text-base">
                                Dinner was absolutely brillaint. Everyone was raving
                                about the food. Thank you so much for delivering and
                                we will definitely be filling up on your wonderful meals
                                again!! Braised pork rice was super tender with crunchy
                                fried onions and you get to choose between white
                                or multigrain rice
                            </div>
                        </div>
                        <div className="justify-center items-center mx-10 my-10">
                            <div>
                                <img src={img8} alt=" " className="rounded-lg w-fit h-80" />
                            </div>
                            <div className="mt-3 items-center ">
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfTwoToneIcon />
                            </div>
                            <div className="justify-center items-center mt-3 text-base">
                                Excellent espresso, pastries, hot chocolate, location, and
                                ambiance. This coffee is indeed a great place to kill your
                                time, do business. The coffees ,hot chocolates and
                                deserts they had was so delicious. The owner was so
                                welcoming and friendly. The place was so cozy.
                                The decorations were so cute.
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="flex flex-col py-10 bg-red-50">
                <h1 class="text-2xl font-bold capitalize text-red-700 text-center">
                    What are People Saying?
                </h1>
                <div>
                    <div
                        class="flex overflow-x-scroll p-10 no-scrollbar"
                    >
                        <div
                            class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                        >
                            <div class="inline-block px-3 ">
                                <div
                                    class="w-64 h-64 max-w-xs no-scrollbar overflow-y-auto touch-auto rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
                                >
                                    <div className="justify-center items-center mx-3 my-3">

                                        <div className=" text-xl italic font-mono font-bold text-red-700">Excellent</div>
                                        <div className="my-3 items-center ">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarHalfTwoToneIcon />
                                        </div>
                                        <div className=" text-sm text-textColor">
                                            Excellent espresso, pastries, hot chocolate, location, and
                                            ambiance. This coffee is indeed a great place to kill your
                                            time, do business. The coffees ,hot chocolates and
                                            deserts they had was so delicious. The owner was so
                                            welcoming and friendly. The place was so cozy.
                                            The decorations were so cute.
                                        </div>
                                        <div>
                                            <img src={img8} alt=" " className="rounded-lg w-52 h-52 my-5"
                                            // style={{ height: "250px", width: "250px" }} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="inline-block px-3 ">
                                <div
                                    class="w-64 h-64 max-w-xs no-scrollbar overflow-y-auto touch-auto rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
                                >
                                    <div className="justify-center items-center mx-3 my-3">

                                        <div className=" text-xl italic font-mono font-bold text-red-700">Amazing!</div>
                                        <div className="my-3 items-center ">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarHalfTwoToneIcon />
                                        </div>
                                        <div className=" text-sm text-textColor">
                                            Excellent espresso, pastries, hot chocolate, location, and
                                            ambiance. This coffee is indeed a great place to kill your
                                            time, do business. The coffees ,hot chocolates and
                                            deserts they had was so delicious. The owner was so
                                            welcoming and friendly. The place was so cozy.
                                            The decorations were so cute.
                                        </div>
                                        <div>
                                            <img src={img8} alt=" " className="rounded-lg w-52 h-52 my-5"
                                            // style={{ height: "250px", width: "250px" }} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="inline-block px-3 ">
                                <div
                                    class="w-64 h-64 max-w-xs no-scrollbar overflow-y-auto touch-auto rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
                                >
                                    <div className="justify-center items-center mx-3 my-3">

                                        <div className=" text-xl italic font-mono font-bold text-red-700">Delicious!</div>
                                        <div className="my-3 items-center ">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarHalfTwoToneIcon />
                                        </div>
                                        <div className=" text-sm text-textColor">
                                            Excellent espresso, pastries, hot chocolate, location, and
                                            ambiance. This coffee is indeed a great place to kill your
                                            time, do business. The coffees ,hot chocolates and
                                            deserts they had was so delicious. The owner was so
                                            welcoming and friendly. The place was so cozy.
                                            The decorations were so cute.
                                        </div>
                                        <div>
                                            <img src={img8} alt=" " className="rounded-lg w-52 h-52 my-5"
                                            // style={{ height: "250px", width: "250px" }} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="inline-block px-3 ">
                                <div
                                    class="w-64 h-64 max-w-xs no-scrollbar overflow-y-auto touch-auto rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
                                >
                                    <div className="justify-center items-center mx-3 my-3">

                                        <div className=" text-xl italic font-mono font-bold text-red-700">Crunchy!</div>
                                        <div className="my-3 items-center ">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarHalfTwoToneIcon />
                                        </div>
                                        <div className=" text-sm text-textColor">
                                            Excellent espresso, pastries, hot chocolate, location, and
                                            ambiance. This coffee is indeed a great place to kill your
                                            time, do business. The coffees ,hot chocolates and
                                            deserts they had was so delicious. The owner was so
                                            welcoming and friendly. The place was so cozy.
                                            The decorations were so cute.
                                        </div>
                                        <div>
                                            <img src={img8} alt=" " className="rounded-lg w-52 h-52 my-5"
                                            // style={{ height: "250px", width: "250px" }} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="inline-block px-3 ">
                                <div
                                    class="w-64 h-64 max-w-xs no-scrollbar overflow-y-auto touch-auto rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
                                >
                                    <div className="justify-center items-center mx-3 my-3">

                                        <div className=" text-xl italic font-mono font-bold text-red-700">Finger Liking</div>
                                        <div className="my-3 items-center ">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarHalfTwoToneIcon />
                                        </div>
                                        <div className=" text-sm text-textColor">
                                            Excellent espresso, pastries, hot chocolate, location, and
                                            ambiance. This coffee is indeed a great place to kill your
                                            time, do business. The coffees ,hot chocolates and
                                            deserts they had was so delicious. The owner was so
                                            welcoming and friendly. The place was so cozy.
                                            The decorations were so cute.
                                        </div>
                                        <div>
                                            <img src={img8} alt=" " className="rounded-lg w-52 h-52 my-5"
                                            // style={{ height: "250px", width: "250px" }} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="inline-block px-3 ">
                                <div
                                    class="w-64 h-64 max-w-xs no-scrollbar overflow-y-auto touch-auto rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
                                >
                                    <div className="justify-center items-center mx-3 my-3">

                                        <div className=" text-xl italic font-mono font-bold text-red-700">Yummy</div>
                                        <div className="my-3 items-center ">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarHalfTwoToneIcon />
                                        </div>
                                        <div className=" text-sm text-textColor">
                                            Excellent espresso, pastries, hot chocolate, location, and
                                            ambiance. This coffee is indeed a great place to kill your
                                            time, do business. The coffees ,hot chocolates and
                                            deserts they had was so delicious. The owner was so
                                            welcoming and friendly. The place was so cozy.
                                            The decorations were so cute.
                                        </div>
                                        <div>
                                            <img src={img8} alt=" " className="rounded-lg w-52 h-52 my-5"
                                            // style={{ height: "250px", width: "250px" }} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="inline-block px-3 ">
                                <div
                                    class="w-64 h-64 max-w-xs no-scrollbar overflow-y-auto touch-auto rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
                                >
                                    <div className="justify-center items-center mx-3 my-3">

                                        <div className=" text-xl italic font-mono font-bold text-red-700">Mouth Watering</div>
                                        <div className="my-3 items-center ">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarHalfTwoToneIcon />
                                        </div>
                                        <div className=" text-sm text-textColor">
                                            Excellent espresso, pastries, hot chocolate, location, and
                                            ambiance. This coffee is indeed a great place to kill your
                                            time, do business. The coffees ,hot chocolates and
                                            deserts they had was so delicious. The owner was so
                                            welcoming and friendly. The place was so cozy.
                                            The decorations were so cute.
                                        </div>
                                        <div>
                                            <img src={img8} alt=" " className="rounded-lg w-52 h-52 my-5"
                                            // style={{ height: "250px", width: "250px" }} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="inline-block px-3 ">
                                <div
                                    class="w-64 h-64 max-w-xs no-scrollbar overflow-y-auto touch-auto rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
                                >
                                    <div className="justify-center items-center mx-3 my-3">

                                        <div className=" text-xl italic font-mono font-bold text-red-700">Breath Taking</div>
                                        <div className="my-3 items-center ">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarHalfTwoToneIcon />
                                        </div>
                                        <div className=" text-sm text-textColor">
                                            Excellent espresso, pastries, hot chocolate, location, and
                                            ambiance. This coffee is indeed a great place to kill your
                                            time, do business. The coffees ,hot chocolates and
                                            deserts they had was so delicious. The owner was so
                                            welcoming and friendly. The place was so cozy.
                                            The decorations were so cute.
                                        </div>
                                        <div>
                                            <img src={img8} alt=" " className="rounded-lg w-52 h-52 my-5"
                                            // style={{ height: "250px", width: "250px" }} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;