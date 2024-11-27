import React from "react";

import "./business_solution.css";

import search from "../../assets/images/Search_white.svg";
import success from "../../assets/images/Success.svg";
import trail from "../../assets/images/Point_to_trail.svg";
import main_image from "../../assets/images/Main-image.webp";
import Aqua from "../../assets/images/Aqua.webp";
import logo_cfr from "../../assets/images/logo_cfr.webp";
import mucha from "../../assets/images/mucha_marketing.webp";
import rh_logo from "../../assets/images/RH-logo.webp";
import skin_precision from "../../assets/images/skin_precision.webp";
import spaTru from "../../assets/images/SpaTruCLINICS.webp";

const img_array = [Aqua, logo_cfr, mucha, rh_logo, skin_precision, spaTru];

export default function Business_solution() {
    return (
        <div className="business-solution-container">
            <h1 className="headline">
                Looking for a{" "}
                <span className="highlight-red">Business Solution</span>
                <br />
                <span className="highlight-red">for</span> appointments?
            </h1>
            <p className="description">
                Ambel simplifies business management by providing tools for
                scheduling appointments, managing bookkeeping, accepting
                payments,
                <br /> sharing resources with customers, sending reminders, and
                running email marketing campaigns.
            </p>
            <div className="button_and_feature_with_image">
                <img className="trail_img" src={trail} alt="trail" />
                <div className="button_and_feature">
                    <div className="button-group">
                        <button className="btn btn-green">
                            Start A Free Trial
                        </button>
                        <button className="btn btn-orange">
                            <img src={search} alt="search" />
                            <div className="btn_text">Find Professionals</div>
                        </button>
                    </div>
                    <div className="features-container">
                        <div className="feature">
                            <img className="check-icon" src={success} />
                            <span className="feature_text">
                                No credit card required
                            </span>
                        </div>
                        <div className="feature">
                            <img className="check-icon" src={success} />
                            <span className="feature_text">
                                Try one month for free
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <img className="main_img" src={main_image} alt="Main_Image" />
            <div className="main_text_img">
                <div className="main_text">
                    Join 10k+ Users, 35+ Solo Practitioners and 60+ Businesses
                    all over the World
                </div>
                <div className="array_img">
                    {img_array.map((img) => (
                        <img src={img} alt="Array_Image" />
                    ))}
                </div>
            </div>
        </div>
    );
}
