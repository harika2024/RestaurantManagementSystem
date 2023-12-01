import React from 'react'
import p1 from '../../assests/ImgBar/p1.png'
import p2 from '../../assests/ImgBar/p2.png'
import p3 from '../../assests/ImgBar/p3.png'
import p4 from '../../assests/ImgBar/p4.png'

export default function ImgBar() {
    return (
        <>
            <div className='mx-48 flex flex-row my-28 gap-14 items-center justify-center'>
                <div><img src={p1} alt="ImgBar" /></div>
                <div><img src={p2} alt="ImgBar" /></div>
                <div><img src={p3} alt="ImgBar" /></div>
                <div><img src={p4} alt="ImgBar" /></div>
            </div>
        </>
    )
}
