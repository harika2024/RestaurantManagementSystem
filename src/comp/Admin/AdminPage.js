import React from 'react'
import { Routes, Route } from "react-router-dom";
import FoodItemsData from './FoodItemsData'
import UserData from './UsersData'
// import AdminNavbar from './AdminNavbar';
import AdminHome from './AdminHome';
import { Link, Outlet, useNavigate } from "react-router-dom";
import AddFoodItem from './AddFoodItem';
import MailsReceived from './MailsReceived';

export default function AdminPage(props) {
    const navigate = useNavigate()

    const adminLogout = () => {
        props.func('home')
        localStorage.removeItem('admin')

        alert('logged out')
        navigate('/Restaurant-Management-System')
    }

    return (
        <div>
            {/* <AdminNavbar func={props} /> */}
            <div>
                <div>
                    <div className='bg-gray-200 p-4 flex flex-row gap-4 justify-between px-10 text-center'>
                        <div className=' mx-5 pt-5 text-center font-bold text-xl'>
                            ADMIN DASHBOARD
                        </div>
                        <div className='flex flex-row gap-4 mx-5 my-5 text-center justify-center items-center'>
                            <div
                                className="bg-gray-200 text-lg rounded py-1/4 px-2 hover:bg-gray-300 hover:text-black transition ease-in-out duration-300 "
                            >
                                <Link to="/Restaurant-Management-System/admin">HOME</Link>
                            </div>

                            <div
                                className=" bg-gray-200 text-lg rounded py-1/4 px-2 hover:bg-gray-300 hover:text-black transition ease-in-out duration-300 "
                            >
                                <Link to="/Restaurant-Management-System/admin/userdata">USERS</Link>
                            </div>

                            <div
                                className="bg-gray-200 text-lg rounded py-1/4 px-2 hover:bg-gray-300 hover:text-black transition ease-in-out duration-300 "
                            >
                                <Link to="/Restaurant-Management-System/admin/fooditems">FOODITEMS </Link>
                            </div>

                            <div
                                className="bg-gray-200 text-lg rounded py-1/4 px-2 hover:bg-gray-300 hover:text-black transition ease-in-out duration-300 "
                            >
                                <Link to="/Restaurant-Management-System/admin/mails">MAILS </Link>
                            </div>

                            <div
                                className="bg-gray-200 text-lg rounded py-1/4 px-2 hover:bg-gray-300 hover:text-black transition ease-in-out duration-300"
                            ><Link to="/Restaurant-Management-System/admin/newItem">ADD FOODITEM </Link>
                            </div>

                            <div className="bg-gray-200 text-lg rounded py-1/4 px-2 hover:bg-gray-300 hover:text-black transition ease-in-out duration-300 cursor-pointer"
                                onClick={adminLogout} >
                                LOGOUT
                            </div>

                        </div>
                    </div>
                </div>

                <Outlet />
            </div>

            <div>

                <Routes>
                    <Route path="/Restaurant-Management-System/admin" element={<AdminHome />} />
                    <Route path='/Restaurant-Management-System/admin/userdata' element={<UserData />} />
                    <Route path='/Restaurant-Management-System/admin/fooditems' element={<FoodItemsData />} />
                    <Route path='/Restaurant-Management-System/admin/newItem' element={<AddFoodItem />} />
                    <Route path='/Restaurant-Management-System/admin/mails' element={<MailsReceived />} />
                </Routes>


            </div>
        </div>
    )
}
