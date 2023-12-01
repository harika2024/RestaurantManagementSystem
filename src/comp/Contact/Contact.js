import React from 'react'

export default function Contact() {
    return (
        <>

            <div className="flex mx-52 mt-6 mb-6 text-center" style={{
                justifyContent: "space-evenly",
                display: "flex",
                alignItems: "center",
                height: "30vh",
            }}>
                <div className="col text-center">
                    <div className="text-center">
                        <div className='font-semibold text-xl mb-6 text-red-800'>LOCATION</div>
                        <div>112 W Main St.<br />Alhambra, CA 923801</div>
                    </div>
                </div>
                <div className="col">
                    <div className='text-center'>
                        <div className='font-semibold text-xl mb-6 text-red-800'>HOURS</div>
                        <div className='my-2'>Brunch:
                            Thursday _ Monday,9am to 2:30pm</div>
                        <div className='my-2'>Dinner:
                            Thursday _ Sunday,5pm to 9pm</div>
                        <div className='my-2'>Closed:
                            Tusedays &  Wednesdays</div>
                    </div>
                </div>
                <div className="col sqs-col-4 span-4">
                    <div className="sqs-html-content">
                        <div className='font-semibold text-xl mb-6 text-red-800'>CONTACT</div>
                        <div>
                            <p>(626) 281-1035</p><br />
                            <p>harikaanaprthi99@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div >
            <div className=' mb-20'>
                <section>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968796.927165853!2d73.50845548033651!3d18.467209700000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc31580275bb8b7%3A0xf2f64250d4dc05f2!2sSakshi&#39;s%20Kitchen!5e0!3m2!1sen!2sin!4v1685469139023!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968796.927165853!2d73.50845548033651!3d18.467209700000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc31580275bb8b7%3A0xf2f64250d4dc05f2!2sSakshi&#39;s%20Kitchen!5e0!3m2!1sen!2sin!4v1685469139023!5m2!1sen!2sin"
                        width="80%" height="400px" style={{
                            border: 0,
                            filter: "grayscale(100%)"
                        }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" className='mx-40' title='map'></iframe>
                </section >
            </div >

        </>
    )
}
