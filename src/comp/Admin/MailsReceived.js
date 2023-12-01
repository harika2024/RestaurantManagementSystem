import { Card, Typography } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import axios from 'axios'


export default function MailsReceived() {
    const [TABLE_ROWS, setData] = useState([])

    useEffect(() => {
        async function get() {
            await axios.get('http://localhost:5000/contact').then(data => setData(data.data))
        }
        get()
    }, [])

    const TABLE_HEAD = ["Id", "Name", "Email", "Message", "options"];


    return (
        <>
            <div className=" font-semibold text-2xl text-center my-10">User Messages</div>

            <Card className="h-full mx-10 mb-10">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-gray-200 p-4 ">
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
                        {TABLE_ROWS.map(({ _id, name, email, text }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={name}>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {index}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {name}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {email}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {text}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography as="a" href="#" variant="small" color="blue" className="font-medium text-red-600">
                                            Delete
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </>
    )
}


