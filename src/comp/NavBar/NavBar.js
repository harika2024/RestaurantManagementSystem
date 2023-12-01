import React, { useRef, useState } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import './NavBar.css'
import icon from '../../assests/logo.webp'
import cart from '../../assests/Icons/shopping-cart.gif'
import { useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link'


export default function NavBar() {

    const cartCount = useSelector((state) => state.cart)

    // const [activeButtonIndex, setActiveButtonIndex] = useState(1);
    const user = JSON.parse(localStorage.getItem('user'))

    const searchRef = useRef();
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("cart")

        alert("Logged Out")
        navigate('/Restaurant-Management-System')
    };


    return (
        <div>
            <div>
                <div className='bg-red-50 pb-4 flex flex-row gap-4 justify-between px-10 text-center'>
                    <div style={{ height: "130px", width: "170px" }} className=' mx-5 pt-5'>
                        <img src={icon} alt='' />
                    </div>
                    <div className='flex flex-row gap-4 mx-5 my-5 text-center justify-center items-center'>
                        <div
                            className={`bg-red-50
                             text-lg rounded py-1/4 px-2 hover:bg-red-200 hover:text-black transition ease-in-out duration-300 `}
                        >
                            <Link to="/Restaurant-Management-System">HOME</Link>
                        </div>

                        <div
                            className={`text-lg rounded py-1/4 px-2 hover:bg-red-200 hover:text-black transition ease-in-out duration-300 `}
                        >
                            <HashLink to="/Restaurant-Management-System/#menu" smooth>MENU</HashLink>
                        </div>

                        <div
                            className={`bg-red-50"} text-lg rounded py-1/4 px-2 hover:bg-red-200 hover:text-black transition ease-in-out duration-300 `}

                        >
                            <Link to="/Restaurant-Management-System/reservation">TABLE RESERVATION</Link>
                        </div>
                        <div
                            className={`bg-red-50"} text-lg rounded py-1/4 px-2 hover:bg-red-200 hover:text-black transition ease-in-out duration-300 `}

                        ><Link to="/Restaurant-Management-System/contact">CONTACT US</Link>
                        </div>


                        <div>
                            {
                                user ? (
                                    <div className={`bg-red-50"} flex flex-col text-lg rounded py-1/4 px-2 hover:bg-red-200 hover:text-black transition ease-in-out duration-300 `}>
                                        <button onClick={logout}>LOGOUT</button>
                                    </div>
                                ) : (
                                    <div className='flex flex-row gap-4'>
                                        <div className={`bg-red-50"} text-lg rounded py-1/4 px-2 hover:bg-red-200 hover:text-black transition ease-in-out duration-300 `}>
                                            <Link to="/Restaurant-Management-System/signup">SIGNUP</Link>
                                        </div>
                                        <div className={`bg-red-50"} text-lg rounded py-1/4 px-2 hover:bg-red-200 hover:text-black transition ease-in-out duration-300 `}>
                                            <Link to="/Restaurant-Management-System/login">LOGIN</Link>
                                        </div>
                                    </div>

                                )
                            }

                        </div>



                        <div className='flex flex-col '>

                            {/* <li onClick={searchHandler}>
                                <motion.div whileTap={{ scale: 0.75 }}>
                                    <button>
                                        <img src={searchIcon} alt="search" style={{ width: "40px", height: "40px" }} className='rounded-full' />
                                    </button>
                                </motion.div>
                            </li> */}

                            <motion.div whileTap={{ scale: 0.75 }}>
                                <button>
                                    <Link to="/Restaurant-Management-System/cart"><img src={cart} alt="cart" style={{ width: "40px", height: "40px" }} className='rounded-full' />
                                        <div
                                            class="absolute bottom-auto left-auto inline-block -translate-y-3 -translate-x-2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-primary-500 text-center align-baseline text-xs font-bold px-2 py-1 bg-red-700 text-white">
                                            {cartCount.length}
                                        </div></Link>
                                    <div></div>

                                </button>
                            </motion.div>


                        </div>
                    </div>
                </div>

                <div className='header'>
                    <div className="search-form" ref={searchRef}>
                        <input type="search" placeholder="Search here..." id="search-box" />
                        <label htmlFor="search-box" className="search"></label>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    )
}
