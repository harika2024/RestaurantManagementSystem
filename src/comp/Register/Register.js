import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from '../../assests/Icons/google.png'
import loginImg from "../../assests/kitchen.png";
import gooleImg from "../../assests/logo.webp";

const Register = () => {
    const [email, createMail] = useState("")
    const [password, createPass] = useState("")
    const [first_name, createFirst_name] = useState("")
    const [last_name, createLast_name] = useState("")
    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()
        const post = { first_name, last_name, email, password }
        try {
            const res = await axios.post('http://localhost:5000/register', post)
            console.log(res.data)
            alert("New user Created Sucesfully")
            navigate("/Restaurant-Management-System/login")
        }
        catch (e) {
            alert("Error! \n Email already exists! Please Login")
        }
    }

    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log("Login Failed:", error),
    });

    useEffect(() => {
        if (user) {
            axios
                .get(
                    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: "application/json",
                        },
                    }
                )
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };
    return (
        <div className="bg-white" style={{ minHeight: '100vh' }}>
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
                <div className="section justify-center items-center text-center">
                    <div className="mx-10 text-center">
                        <div className="font-semibold text-3xl mt-20 text-red-700">
                            Sign Up for here

                        </div>
                        <div className="font-semibold text-xl mt-3">
                            Connect with great local businesses
                        </div>
                        <p className="mt-3">
                            By continuing, you agree to Yelp’s
                            <a href="/Restaurant-Management-System/terms" className=" decoration-0">
                                {" "}
                                Terms & Conditions
                            </a>
                            <br /> and acknowledge Yelp’s
                        </p>
                    </div>
                    <div>
                        <button
                            onClick={() => login()}
                            className="buttonPress rounded-xl my-4 mx-5 justify-normal w-96 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 drop-shadow-xl bg-slate-100 p-3"
                        >
                            <div className="flex flex-row justify-center items-center">
                                <img src={logo} alt=" " className="mr-4 "
                                    style={{ width: "17px", height: "17px" }} />
                                Continue with Google
                            </div>
                        </button>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="mt-10 mx-12 flex flex-row ">
                            <div className="mx-1">
                                <input
                                    type="text"
                                    id="first_name"
                                    required
                                    style={{ border: "1px solid black", padding: "5px" }}
                                    placeholder="FirstName"
                                    className=" rounded"
                                    onChange={(event) => {
                                        createFirst_name(event.target.value)
                                    }}
                                    value={first_name}
                                />
                            </div>

                            <div className="mx-1">
                                <input
                                    type="text"
                                    id="last_name"
                                    required
                                    style={{ border: "1px solid black", padding: "5px" }}
                                    placeholder="LastName"
                                    className=" rounded"
                                    onChange={(event) => {
                                        createLast_name(event.target.value)
                                    }}
                                    value={last_name}
                                />
                            </div>
                        </div>

                        <div className="mt-3 mx-11">
                            <input
                                type="email"
                                id="email"
                                required
                                style={{ border: "1px solid black", padding: "5px", width: "95%" }}
                                placeholder="Email"
                                className=" rounded"
                                onChange={(event) => {
                                    createMail(event.target.value)
                                }}
                                value={email}
                            />
                        </div>
                        <div className="mt-3 mx-11">
                            <input
                                type="password"
                                id="email"
                                required
                                style={{ border: "1px solid black", padding: "5px", width: "95%" }}
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
                                <span>SignUp</span>
                            </button>
                        </div>
                    </form>
                    <br />
                    <div className="ml-32">
                        Already signed in?<Link to="/Restaurant-Management-System/login">Login</Link>
                    </div>
                </div>
                <div>
                    <img src={loginImg} alt="" />
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Register;