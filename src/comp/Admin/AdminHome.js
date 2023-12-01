import React from 'react'
import icon from '../../assests/admin.avif'


export default function AdminHome() {
    return (
        <div>
            <div>
                <div className='text-4xl my-10 text-center font-bold'>WELCOME!</div>
                <div className=' flex justify-center items-center' >
                    <img src={icon} style={{ width: "900px", height: "500px" }} alt='admin' />
                </div>
            </div>
        </div>
    )
}
