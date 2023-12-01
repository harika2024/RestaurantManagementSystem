import React from "react";
import work from '../../assests/chefs.jpg'
// import "./styles/WorkStyle.css";
const Work = () => {
    return (
        <>
            <div className="policyContainer bg-white">
                <div className="policyHeader">How It Works</div>
                <div>
                    <img src={work} alt=" " />
                </div>
                <div className="policyBody">
                    <div className="subDivHead">Step 1:Order Online</div>
                    <div className="subDivBody">
                        <div>
                            Select from our rotating menu and place your order online.
                        </div>
                    </div>

                    <div className="subDivHead">Step 2: We Cook For You</div>
                    <div className="subDivBody">
                        <div>
                            Our chefs will prepare your meals made from only fresh and healthy
                            ingredients.
                        </div>
                    </div>
                </div>
                <div className="subDivHead">Step 3: We Deliver to Your Home</div>
                <div className="subDivBody">
                    <div>
                        Your order will be delivered directly to your door step on your
                        selected delivery day.
                    </div>
                </div>
            </div>
        </>
    );
};

export default Work;