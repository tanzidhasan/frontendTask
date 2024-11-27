import React, { useState } from "react";

import "./welcome.css";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export default function Welcome() {
    const [plan_butt, setPlanButton] = useState(true);

    return (
        <>
            <Navbar />

            <div className="welcome_body">
                <div className="priceing_plans">Priceing Plans</div>

                <div className="starting_text">Let’s Get Started</div>
                <div className="starting_text">
                    We have got a plan that's perfect for you.
                </div>

                <div className="try_plan">
                    Simple, transparent pricing that grows with you. Try any
                    plan free for 30 days.
                </div>

                <div className="mon_year_button">
                    <button
                        style={{
                            backgroundColor: plan_butt ? "white" : "gainsboro",
                            color: plan_butt ? "black" : "grey",
                        }}
                        onClick={() => {
                            setPlanButton(true);
                        }}
                        className="plan_button"
                    >
                        MONTHLY
                    </button>
                    <button
                        style={{
                            backgroundColor: plan_butt ? "gainsboro" : "white",
                            color: plan_butt ? "grey" : "black",
                        }}
                        onClick={() => {
                            setPlanButton(false);
                        }}
                        className="plan_button"
                    >
                        YEARLY
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
}
