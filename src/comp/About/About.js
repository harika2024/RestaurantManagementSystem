import React from "react";
import Yank from '../../assests/Res.jpg';

const About = () => {
    return (
        <>
            <div>
                <div style={{ display: "flex", justifyContent: 'space-around' }} className="m-24">
                    <div style={{ height: "50%", width: "50%" }}>
                        <img src={Yank} alt="" />
                    </div>
                    <div className="mt-5">
                        <div className="text-left text-3xl mb-10 font-semibold text-red-800">About</div>
                        <div className=" text-base">Yang’s Kitchen strives to source local, sustainable and organic when possible. <br />We work hard to source premium ingredients and we cook everything from <br />scratch with love. We also do our best to pay our employees living wages <br />(tips are shared with all employees, including kitchen staff) and to reduce <br />our environmental footprint wherever we can. Overall, these factors<br /> translate to higher menu prices, but we hope that you find value and <br />feel a sense of comfort in knowing
                            that we aim to get better <br />everyday at doing what is important to us.</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;