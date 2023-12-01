import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./FooterStyle.css";
import { Box, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {

    return (
        <>
            <div
                style={{
                    justifyContent: "space-around",
                    display: "flex",
                    alignItems: "center",
                    height: "20vh",
                    backgroundColor: "white",
                }}
            >
                <div>
                    <Box
                        sx={{
                            textAlign: "center",
                            marginTop: "5px",
                            bgcolor: "white",
                            color: "black",
                            p: 1,
                        }}
                    >
                        <Box
                            sx={{
                                my: 3,
                                "& svg": {
                                    fontSize: "40px",
                                    cursor: "pointer",
                                    mr: 2,
                                },
                                "& svg:hover": {
                                    transform: "translateX(5px)",
                                    transition: "all 400ms",
                                },
                            }}
                        >
                            <div className="mb-2">Follow us on</div>

                            <InstagramIcon className="instagram" />
                            <TwitterIcon className="twitter" />
                            <YouTubeIcon className="youtube" />
                        </Box>
                    </Box>
                </div>
                <div className="Foot">
                    <h4 className="font-semibold">Footer menu</h4>
                    <ul className="justify-center">
                        <li className="Linklist__Item">
                            <Link to="/Restaurant-Management-System/work">How It Works</Link>
                        </li>
                        <li className="Linklist__Item">
                            <Link to="/Restaurant-Management-System/terms">Terms & Conditions</Link>
                        </li>
                        <li className=" Linkedlist__Item">
                            <Link to="/Restaurant-Management-System/adminLogin">Admin Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Typography
                variant="h6"
                className="text-center"
                sx={{
                    "@media (min-width:50px)": {
                        fontSize: "1rem",
                    }
                }}
            >
                <div className="mb-10">All Rights Reserved &copy; Restaurant</div>
            </Typography>
            <Outlet />
        </>
    );
};

export default Footer;