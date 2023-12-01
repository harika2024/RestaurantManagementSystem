import React from 'react'
import { HashLink } from 'react-router-hash-link'
import cart from '../../assests/emptycart.webp'

export default function EmptyCart() {
    return (
        <>
            <div className='flex flex-col justify-center items-center text-center'>
                <img src={cart} alt='Your Cart is Empty' style={{ height: '350px', width: '350px' }} />
                <div className=' font-bold text-lg'>Empty Cart</div>
                <div className='my-2 text-base text-neutral-600'>
                    <div>Looks like you haven't made</div>
                    <div>your choice yet...</div>
                </div>
                <div className=" flex justify-center text-center my-2 text-xl rounded py-2 bg-red-700 text-white drop-shadow-xl hover:bg-red-600">
                    <button style={{
                        color: "white",
                        width: "250px",
                    }}
                        className=" p-1"
                    ><HashLink to="/Restaurant-Management-System/#menu" smooth>OPEN MENU</HashLink></button>
                </div>
                <div className='text-red-700 font-medium text-sm mt-1'>Check what we've got for you</div>
                <div className=' text-sm text-neutral-600'>and get swished!</div>

            </div>
        </>
    )
}
