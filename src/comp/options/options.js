import React from 'react'
import arrayImg from './images'

export default function Options() {
    return (
        <>
            <div className='OptionDiv bg-red-50'>
                <div className='boundaryDiv1'>
                    <div className='boundaryDiv2'>
                        <div className='ElementOne'>
                            <div className='OptionImg'><figure><img src={arrayImg[1]} alt='' /></figure></div>
                            <div className='optionDiv'>
                                <div className='optionHead'>Dine-in</div>
                                <div className='optionBody'>
                                    Reserve a table online so we know to expect you.
                                </div>
                            </div>
                        </div>
                        <div className='ElementOne'>
                            <div className='OptionImg'><figure><img src={arrayImg[0]} alt='' /></figure></div>
                            <div className='optionDiv'>
                                <div className='optionHead'>Order Online</div>
                                <div className='optionBody'>
                                    Choose your meal plan according to your dietary goals & requirements.
                                </div>
                            </div>
                        </div>
                        <div className='ElementOne'>
                            <div className='OptionImg'><figure><img src={arrayImg[2]} alt='' /></figure></div>
                            <div className='optionDiv'>
                                <div className='optionHead'>We Deliver</div>
                                <div className='optionBody'>
                                    Your order will be delivered directly to your door step on your selected delivery day.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}