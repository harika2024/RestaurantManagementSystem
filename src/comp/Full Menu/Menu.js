import React, { useState, useEffect } from "react";
import { categories } from "./category";
import { motion } from "framer-motion";
import Container from "./Container";
import axios from 'axios'


export default function Menu() {

    const [newItems, setNewNewItems] = useState([])
    const [items, setData] = useState([])

    useEffect(() => {
        async function getItems() {
            axios.get('http://localhost:5001/getStarterItems').then(data => setData(data.data))
            axios.get('http://localhost:5001/getFoodItems').then(data => setNewNewItems(data.data))
        }
        getItems()
    }, [])

    const [filter, setFilter] = useState("starter");

    const getFilter = (item) => {
        const updatedList = newItems.filter((ele) => {
            return (ele.Type === item)
        })
        setData(updatedList)
    }
    return (
        <>
            <section className="w-full my-6 bg-red-50" id="menu">
                <section className="w-full my-6" id="menu">
                    <div className="w-full flex flex-col items-center justify-center">
                        <p className="text-2xl font-bold capitalize my-6 text-red-700">
                            Our Hot Dishes
                        </p>
                        <p className=" text-sm italic font-mono font-semibold text-textColor">
                            "Craving something delicious? Select an option to view our menu"</p>

                        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none text-center">
                            {categories &&
                                categories.map((category) => (
                                    < motion.div
                                        whileTap={{ scale: 0.75 }}
                                        key={category.id}
                                        className={`group ${filter === category.urlParamName ? "bg-red-700" : "bg-card"
                                            } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-red-700 `}
                                        onClick={() => {
                                            setFilter(category.urlParamName);
                                            getFilter(category.urlParamName);
                                        }
                                        }
                                    >
                                        <div
                                            className={`w-11 h-11 rounded-full
                                             ${filter === category.urlParamName
                                                    ? "bg-white"
                                                    : "bg-red-200"
                                                } group-hover:bg-white flex items-center justify-center`}
                                        >

                                            <img src={category.image} alt="Food" className={`w-9 h-9 group-hover:text-textColor text-2xl
                                                    ${filter === category.urlParamName
                                                    ? "text-textColor"
                                                    : "text-white"
                                                }`} />

                                        </div>
                                        <p
                                            className={`text-sm ${filter === category.urlParamName
                                                ? "text-white"
                                                : "text-textColor"
                                                } font-semibold group-hover:text-white`}
                                        >
                                            {category.name}
                                        </p>
                                    </motion.div>
                                ))}
                        </div>
                        <Container updatedList={items} />
                    </div>
                </section>
            </section >
        </>
    )
}
