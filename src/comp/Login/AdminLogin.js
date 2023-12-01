import axios from 'axios'
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function AdminLogin(props) {

    const [email, createMail] = useState("")
    const [password, createPass] = useState("")

    const navigate = useNavigate()

    const onSubmit = async (e) => {

        e.preventDefault()
        const post = { email, password }
        try {
            const res = await axios.post('http://localhost:5000/adminLogin', post)

            if (res.data.token) {
                localStorage.setItem("admin", JSON.stringify(res.data))
                props.func('admin')
            }
            navigate("/Restaurant-Management-System/admin")
        }
        catch (e) {
            alert("Error Login! \n Please Check your Email & Password")
        }
    }

    return (
        <>
            <div style={{ minHeight: '100vh' }}>
                <div className="bg-white">
                    {/* <div className="mx-5  mt-10 " style={{ height: "80px", width: "80px" }}>
                            <img src={gooleImg} alt=" " />
                        </div>
                        <hr /> */}
                    <div
                        className="mx-10  mt-0 "
                        style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                        }}
                    >
                        <div className=" justify-center items-center text-center">
                            <div className="mx-1 text-center my-5">
                                <div className="font-semibold text-3xl mt-20 text-red-700">
                                    Admin Login
                                </div>
                            </div>
                            <form onSubmit={onSubmit} className=' flex flex-col justify-center text-center'>
                                <div className="mt-3 mx-11">
                                    <input
                                        type="text"
                                        id="email"
                                        required
                                        style={{ border: "1px solid black", padding: "5px", width: "95%" }}
                                        placeholder="Email"
                                        className="rounded"
                                        onChange={(event) => {
                                            createMail(event.target.value)
                                        }}
                                        value={email}
                                    />
                                </div>
                                <div className="mt-3 mx-11">
                                    <input
                                        type="password"
                                        id="password"
                                        required
                                        style={{ border: "1px solid black", padding: "5px", width: '95%' }}
                                        placeholder="password"
                                        className="rounded"
                                        onChange={(event) => {
                                            createPass(event.target.value)
                                        }}
                                        value={password}
                                    />
                                </div>
                                <div
                                    className=" flex justify-center text-center mt-3 mx-12 text-xl rounded-2xl py-2 bg-red-700 text-white
                                transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 drop-shadow-xl"
                                >

                                    <button
                                        className=" p-1"
                                        id="signUp-btn"
                                        type="submit"
                                        value="sign-value"
                                        style={{
                                            color: "white",
                                            width: "100px",
                                        }}
                                    >
                                        Login
                                    </button>

                                </div>
                            </form>
                            <br />
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}
