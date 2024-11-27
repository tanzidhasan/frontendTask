import React from "react";

import "./faq.css";

import free_trial from "../../assets/images/love-icon.svg";
import plan_later from "../../assets/images/recycle-icon.svg";
import need_to_pay from "../../assets/images/mobile-icon.svg";
import auto_renew from "../../assets/images/rounded-star.svg";
import cancellation_policy from "../../assets/images/forbidden-icon.svg";
import lifetime from "../../assets/images/infinity-icon.svg";
import girl2_img from "../../assets/images/2-girl.webp";

const faqs = [
    {
        question: "Is there a free trial available?",
        answer: "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
        icon: free_trial, // Replace with a proper SVG or icon
    },
    {
        question: "Can I change my plan later?",
        answer: "Of course, you can change your plan anytime you want. You can also upgrade or downgrade your plan.",
        icon: plan_later,
    },
    {
        question:
            "May I need to pay the full amount while I update the plan in the middle of the month?",
        answer: "No, you don’t need to pay the full amount if you update the practitioner number. Just pay for available days from the next renewal.",
        icon: need_to_pay,
    },
    {
        question: "Can I disable the auto-renew?",
        answer: "You can disable and enable auto-renew anytime. Also, you can choose auto-renew from different options.",
        icon: auto_renew,
    },
    {
        question: "What is your cancellation policy?",
        answer: "We understand that things change. You can cancel your plan at any time, and we’ll refund you the difference already paid.",
        icon: cancellation_policy,
    },
    {
        question: "Can I run my business Pay As You Go for a lifetime?",
        answer: "Yes, you can run your business lifetime with Pay As You Go. No additional charges will be taken for your plan.",
        icon: lifetime,
    },
];

export default function Faq() {
    return (
        <div className="faq-section">
            <div className="faq-content">
                <div className="faq_header">Support</div>
                <h2 className="faq-title">Frequently asked questions</h2>
                <p className="faq-description">
                    Everything you need to know about the product and billing.
                    Can’t find the answer you’re looking for? Please{" "}
                    <a href="#">chat to our friendly team</a>.
                </p>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <img
                                className="faq-icon"
                                src={faq.icon}
                                alt="icon"
                            />
                            <div className="faq-text">
                                <h3 className="faq-question">{faq.question}</h3>
                                <p className="faq-answer">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="faq-image">
                <img className="faq-img" src={girl2_img} alt="Support Team" />
            </div>
        </div>
    );
}
