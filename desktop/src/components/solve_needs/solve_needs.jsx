import React from "react";

import "./solve_needs.css";

import uppertick from "../../assets/images/upper_tick.svg";
import schedule from "../../assets/images/Calender_white_Home.svg";
import consultant from "../../assets/images/Consultant_white.svg";
import payment from "../../assets/images/Payment_white.svg";
import customer from "../../assets/images/Targeting_white.svg";
import notification from "../../assets/images/Notification_white.svg";
import website from "../../assets/images/Website_builder white.svg";
import report from "../../assets/images/Report_white.svg";
import resources from "../../assets/images/Resources_white.svg";

const features = [
    {
        title: "Schedule & Booking",
        description:
            "Create, schedule and send your clients to your Ambel booking page, where they can book on any device.",
        icon: schedule,
    },
    {
        title: "Live Consultant",
        description:
            "Integrate meet, zoom and loom to communicate with your customers or clients in via video conference.",
        icon: consultant,
    },
    {
        title: "Payments",
        description:
            "Send custom invoices, take POS and cash payment also accept credit or debit card payment from anywhere.",
        icon: payment,
    },
    {
        title: "Customer Tracking",
        description:
            "Manage customer, send marketing email and message, create record and track via note, case study.",
        icon: customer,
    },
    {
        title: "Notification",
        description:
            "Automatically notify your clients and practitioners with reminder via SMS and email by single setup.",
        icon: notification,
    },
    {
        title: "Website Builder",
        description:
            "Get a free website, design and customize your booking website for your business without any code.",
        icon: website,
    },
    {
        title: "Reports",
        description:
            "Powerful data and graphs at your fingertips to monitor day to day activities and generate reports.",
        icon: report,
    },
    {
        title: "Resources",
        description:
            "Create and share resources like Prescriptions, Documentations, Medical Charts and Videos.",
        icon: resources,
    },
];

export default function Solve_needs() {
    return (
        <div className="features-section">
            <p className="features-header">Features</p>

            <h2 className="features-title">
                Solve all your needs with a single software solution
            </h2>
            <p className="features-subtitle">
                This platform streamlines the entire customer management
                process, saving businesses time and increasing efficiency.
                Trusted by over 60+ businesses.
            </p>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div className="feature-icon">
                            <img className="icon_img" src={feature.icon} />
                            <img className="icon_img" src={uppertick} />
                        </div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
