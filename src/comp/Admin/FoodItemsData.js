import { Card, Typography } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function FoodItemsData() {
    const [TABLE_ROW, setData] = useState([])

    useEffect(() => {
        async function get() {
            await axios.get('http://localhost:5001/getFoodItems').then(data => setData(data.data))
        }
        get()
    }, [])

    const TABLE_HEAD = ["Id", "FoodName", "Type", "Price", "Description", "Calories", "Option"];

    return (
        <div>
            <div className=" font-semibold text-2xl text-center my-10">List Of Food Items</div>
            <Card className="h-full mx-10 mb-10">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-gray-200 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROW.map(({ _id, FoodName, Type, Price, Description, Calories }, index) => {
                            const isLast = index === TABLE_ROW.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={FoodName}>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {index}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {FoodName}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {Type}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {Price}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {Description}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {Calories}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography as="a" href="#" variant="small" color="blue" className="font-medium text-red-500">
                                            Delete
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </div>
    )
}
