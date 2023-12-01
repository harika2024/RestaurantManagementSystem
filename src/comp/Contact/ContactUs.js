import React, { useState } from "react";
import './TermsStyle.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ContactUs = () => {

    const [email, createMail] = useState("")
    const [name, createName] = useState("")
    const [text, createText] = useState("")

    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()

        const post = { name, email, text }
        try {
            await axios.post('http://localhost:5000/contact', post)
                .then(() => {
                    navigate('/Restaurant-Management-System')
                    alert("Message Sent Sucessfully!")
                })
        }
        catch (e) {
            alert("Error Sending Message! \n Please try again")
        }
    }

    return (
        <>
            <div style={{ minHeight: '100vh' }}>
                <div className="policyContainer bg-white">
                    <div className="policyHeader">Contact Us</div>

                    <div className="policyBody">
                        <div className="subDivBody">
                            <div className="justify-center items-center ml-5">
                                For all other inquiries fill in your details below and we will get
                                back to you as soon as possible
                            </div>
                        </div>
                        <form onSubmit={onSubmit}>
                            <div className="flex flex-col justify-center items-center">
                                <div className="mt-10 mx-10 flex flex-row ">
                                    <div className="mx-1">
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            style={{ border: "1px solid black", padding: "8px" }}
                                            placeholder="Your Name"
                                            className="w-80  rounded"
                                            onChange={(event) => {
                                                createName(event.target.value)
                                            }}

                                        />
                                    </div>

                                    <div className="mx-1">
                                        <input
                                            type="text"
                                            id="mail"
                                            required
                                            style={{ border: "1px solid black", padding: "8px" }}
                                            placeholder="Email"
                                            className=" w-80 rounded"
                                            onChange={(event) => {
                                                createMail(event.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <textarea
                                        rows="10"
                                        cols="86"
                                        placeholder="Your Message"
                                        style={{
                                            border: "1px solid black",
                                            borderRadius: "6px",
                                            padding: "10px",
                                        }}
                                        onChange={(event) => {
                                            createText(event.target.value)
                                        }}
                                    ></textarea>
                                </div>
                                <div
                                    className="mt-3 mx-12 text-xl rounded-2xl py-2 bg-red-700 text-white
                            transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 drop-shadow-xl"
                                >
                                    <button
                                        className=" p-3"
                                        id="signUp-btn"
                                        type="submit"
                                        value="sign-value"
                                        style={{
                                            color: "white",
                                            width: "266px",
                                        }}
                                    >
                                        <span className="items-center">Send Message</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;