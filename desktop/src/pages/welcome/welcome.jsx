import React, { useState } from "react";

import "./welcome.css";

import icon1 from "../../assets/images/Icon.svg";
import icon2 from "../../assets/images/icon-2.svg";
import icon3 from "../../assets/images/icon-3.svg";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Plan_card from "../../components/plan_card/plan_card";
import Solve_needs from "../../components/solve_needs/solve_needs";
import Faq from "../../components/faq/faq";

export default function Welcome() {
    const [plan_butt, setPlanButton] = useState(true);

    const [practioner_amnt, setPractioner_amnt] = useState(10);

    return (
        <>
            <Navbar />

            <div className="welcome_body">
                <div className="upper_welcome_body">
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
                                backgroundColor: plan_butt
                                    ? "white"
                                    : "gainsboro",
                                // color: plan_butt ? "black" : "grey",
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
                                backgroundColor: plan_butt
                                    ? "gainsboro"
                                    : "white",
                                // color: plan_butt ? "grey" : "black",
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

                <div className="plan_cards">
                    <Plan_card
                        img={icon1}
                        title="Pay As You Go"
                        pay_amnt="10%"
                        description="10% from your customer payment"
                        bullet={[
                            "Only pre-paid booking",
                            "Both practitioner and Organization",
                            "Up to 5 practitioners in organization",
                            "2 staff members are allowed",
                            "Basic chat and email support",
                        ]}
                    />

                    <Plan_card
                        img={icon2}
                        title="Practitioner"
                        pay_amnt="$49"
                        description="1 practitioner license/monthly"
                        bullet={[
                            "All booking options",
                            "All schedule Feature",
                            "Individual single practitioner license",
                            "3 staff members are allowed",
                            "Unlimited email marketing",
                        ]}
                    />

                    <Plan_card
                        img={icon3}
                        title="Enterprise"
                        pay_amnt="$39"
                        description="Practitioner Number"
                        practioner_amnt={practioner_amnt}
                        setPractioner_amnt={(value) =>
                            setPractioner_amnt(value)
                        }
                        bullet={[
                            "All booking options",
                            "Only for Organization",
                            "Unlimited practitioners and staff",
                            "Customizable 6 page website",
                            "E-commerce functionality",
                        ]}
                    />
                </div>

                <div className="trial-banner">
                    <div className="trial-text">
                        <h2>Start your 30-day free trial</h2>
                        <p>
                            Join over 100+ practitioners and organizations
                            already growing with Ambel
                        </p>
                    </div>
                    <div className="trial-buttons">
                        <button className="learn-more">Learn more</button>
                        <button className="get-started">Get started</button>
                    </div>
                </div>

                <Solve_needs />

                <Faq />

                
            </div>

            <Footer />
        </>
    );
}
