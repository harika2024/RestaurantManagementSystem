import React from 'react'
import tree from '../../assests/tree.png'
import homeImg from '../../assests/homeIcon1.jpg'

import About from '../About/About'
import Menu from '../Full Menu/Menu'
import Specifications from '../specification/specifications'
import Options from '../options/options'
import Contact from '../Contact/Contact'
import ImgBar from '../ImgBar/ImgBar'
import Review from '../Reviews/Review'
import AddFoodItem from '../Admin/AddFoodItem'

export default function HomePage() {
    return (
        <div>
            <div className='bg-red-50'>
                <div className='flex flex-row justify-evenly' >
                    <div style={{ height: "700px", width: "700px" }} >
                        <img src={homeImg} alt='home' />
                    </div>
                    <div style={{ width: "600px" }} className='mt-10'>
                        <div>
                            <div className='flex flex-col'>
                                <div className='text-sm my-3'>WELCOME TO SAAKSHI'S KITCHEN</div>
                                <div className='text-3xl font-semibold'>Indian Food and Wine Experience <br />in Hyderabad</div>
                                <div className='customStyle text-red-700 font-semibold my-12'>
                                    <button type='button' className='text-lg rounded-2xl py-2 hover:bg-red-700 hover:text-white
                            transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 drop-shadow-xl'>
                                        BOOK A TABLE </button>
                                </div>
                            </div>
                            <div className='flex felx-col align-bottom justify-end'>
                                <div style={{ height: "490px", width: "320px" }}>
                                    <img src={tree} alt='tree' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <About />
            <Menu />
            <Specifications />
            <Options />
            <Contact />
            <Review />
            <ImgBar />
            {/* <AddFoodItem /> */}
        </div>
    )
}
