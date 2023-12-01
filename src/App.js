import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
// import { RemoveScroll } from 'react-remove-scroll'
import { Provider } from 'react-redux';

import './comp/TermsOfService/TermsStyle.css'
import NavBar from './comp/NavBar/NavBar'
import HomePage from './comp/HomePage/HomePage'

import './tailwind.css'
import './comp/TermsOfService/TermsStyle.css'
import './comp/specification/speStyle.css'
import './comp/options/optionsCss.css'


import Login from './comp/Login/Login'
import Register from './comp/Register/Register'
import ContactUs from './comp/Contact/ContactUs'
import Footer from './comp/Footer/Footer'
import Work from './comp/options/HowItWorks'
import { PrivateRoutes, AdminPrivateRoutes } from './comp/PrivateRoutes/PrivateRoutes'
import TermsOfService from './comp/TermsOfService/TermsOfService'
// import UserList from './userList'
import ScrollToTop from './comp/ScrollToTop';
import Cart from './comp/CartComponents/Cart'
import store from './comp/Store/store';
import AdminLogin from './comp/Login/AdminLogin';
import AdminPage from './comp/Admin/AdminPage';
// import AdminHome from './comp/Admin/AdminHome';
import UserData from './comp/Admin/UsersData';
import FoodItemsData from './comp/Admin/FoodItemsData';
import AddFoodItem from './comp/Admin/AddFoodItem';
import GooglePayTransaction from './comp/GooglePayTransaction';



export default function App() {

  const [state, setState] = useState('home')

  return (
    <>
      {/* <GooglePayTransaction /> */}

      {
        state === 'home' ? (
          <Provider store={store}>
            <NavBar />
            <Routes>

              <Route path='/Restaurant-Management-System' element={<HomePage />} />
              <Route path='/Restaurant-Management-System/login' element={<Login />} />
              <Route path='/Restaurant-Management-System/adminLogin' element={<AdminLogin func={(name) => setState(name)} />} />
              <Route path='/Restaurant-Management-System/signup' element={<Register />} />
              <Route path='/Restaurant-Management-System/cart' element={<Cart />} />


              <Route element={<PrivateRoutes />}>
                <Route path='/Restaurant-Management-System/contact' element={<ContactUs />} />
              </Route>

              <Route element={<AdminPrivateRoutes />}>
                <Route path='/Restaurant-Management-System/admin' element={<AdminPage />} />
                <Route path='/Restaurant-Management-System/admin/userdata' element={<UserData />} />
                <Route path='/Restaurant-Management-System/admin/fooditems' element={<FoodItemsData />} />
                <Route path='/Restaurant-Management-System/admin/newItem' element={<AddFoodItem />} />
              </Route>


              <Route path='/Restaurant-Management-System/terms' element={<TermsOfService />} />
              <Route path='/Restaurant-Management-System/work' element={<Work />} />


            </Routes>

            <Footer />
            <ScrollToTop />
          </Provider>

        ) : (
          <AdminPage func={(name) => setState(name)} />
        )
      }
      {/* <div className=' no-scrollbar'>


      </div> */}
    </>
  )
}