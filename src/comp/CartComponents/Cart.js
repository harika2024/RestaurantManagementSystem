import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Store/CartSlice'
import EmptyCart from './EmptyCart'
import GooglePayTransaction from '../GooglePayTransaction'

export default function Cart() {

    const [cnt, setCnt] = useState(5.25)

    const dispatch = useDispatch()
    const products = useSelector(state => state.cart)

    const handleRemove = (productId) => {
        dispatch(remove(productId))
    }

    return (
        <>
            <div style={{ minHeight: '100vh' }}>
                <div className=' flex flex-row flex-wrap flex-y-14 justify-evenly'>
                    {products.length === 0 ? (
                        <EmptyCart />
                    ) : (
                        products.map((product) => {
                            return (
                                <div>
                                    <div className='flex flex-row justify-between mx-10'>
                                        <div
                                            className='flex flex-row justify-start my-10 mx-10'
                                        >

                                            <div>
                                                <img src={product.ImgSrc} alt="" style={{ height: '150px', width: '150px' }} />
                                            </div>
                                            <div>
                                                <div>Title: {product.FoodName}</div>
                                                <div>Price: {product.Price}</div>
                                                <div>
                                                    <button className='text-red-500' onClick={() => handleRemove(product._id)}>Remove ITem</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )
                    }
                </div>
                <div className='mx-10 flex justify-center'>

                    <GooglePayTransaction
                        total={cnt * products.length}
                    />
                </div>
            </div>
        </>
    )

}
