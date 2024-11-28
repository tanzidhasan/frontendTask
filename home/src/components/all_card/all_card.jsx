import React from "react";

import "./all_card.css";

import map_img from "../../assets/images/MultiBranchFF.webp";
import roles from "../../assets/images/Roles_Home.webp";
import payment from "../../assets/images/payment_Home.webp";
import integration from "../../assets/images/Intrgration_Home.webp";
import shopping from "../../assets/images/Shopping.webp";
import gift from "../../assets/images/Gift_card.webp";
import sms from "../../assets/images/SMS_Home.webp";
import website from "../../assets/images/Website_widget.webp";
import resource from "../../assets/images/Resource_Home.webp";
import dashboard from "../../assets/images/Dashboard_Home.webp";

import Book_appointment from "../book_appoinment/book_appointment";
import One_brand from "../one_brand/one_brand";
import {
    first_color,
    second_color,
    third_color,
    fourth_color,
    fifth_color,
    sixth_color,
    seventh_color,
    eighth_color,
    ninth_color,
    tenth_color,
} from "../../stores/color";

const card_array = [
    {
        title: "One brand in one easy to use system, across all your locations",
        description:
            "Give customers a consistent brand experience, online and in person. With one source for all your business information, you'll unify your guest data, business operations, marketing efforts, and more from one login area.",
        img: map_img,
        color: "white",
        backgroud_color: first_color,
    },

    {
        title: "Invite unlimited team members and assign custom roles and permissions",
        description:
            "This feature enables organizations to efficiently manage team members across one or multiple locations. Roles can be assigned and customized to control access, ensuring that team members only view or edit information and resources relevant to their roles.",
        img: roles,
        color: "white",
        backgroud_color: second_color,
    },

    {
        title: "Securely manage and organize payments: Cash, Debit, Credits",
        description:
            "Customers can securely payment via online credit, debit card, In person POS, Tap to pay and in app wallet. Also can record of cash and other gateway payment for reporting. Ambel integrates with gateways like Stripe, Clover, Square, and PayPal, providing comprehensive support for all your accounting and bookkeeping needs.",
        img: payment,
        color: "white",
        backgroud_color: third_color,
    },

    {
        title: "Third party apps Integrations tailored your business",
        description:
            "Connect tools like Google Meet, Zoom, Loom, Zapier, Zendesk, and WhatsApp to streamline operations. Ambel also integrates with payment gateways such as Stripe, PayPal, Clover, and Square, allowing you to access all features in one convenient platform.",
        img: integration,
        color: "black",
        backgroud_color: fourth_color,
    },

    {
        title: "Create a free website and start selling your products online.",
        description:
            "With our Online Shop and Inventory Management System, you can easily manage inventory, streamline e-commerce operations, and provide an exceptional shopping experience for your customers. Enjoy full e-commerce functionality to manage products, orders, and inventory seamlessly.",
        img: shopping,
        color: "black",
        backgroud_color: fifth_color,
    },

    {
        title: "Boost Sales with Gift Cards, Packages, and Memberships",
        description:
            "Enhance customer loyalty and increase revenue by offering gift cards for easy gifting, tailored packages that add value, and membership programs that reward repeat purchases. These options attract new customers, encourage larger purchases, and build a loyal customer base.",
        img: gift,
        color: "white",
        backgroud_color: sixth_color,
    },

    {
        title: "Unlimited SMS and Email Reminders, Notifications, and Marketing",
        description:
            "Stay connected with your customers effortlessly with unlimited SMS and email options. Send reminders for upcoming bookings, real-time notifications, and targeted marketing emails to keep your audience engaged and informed, all without limits. Boost customer satisfaction and retention while promoting your brand effectively via your own business email.",
        img: sms,
        color: "black",
        backgroud_color: seventh_color,
    },

    {
        title: "Create an Attractive and Customized Booking Page with your own domain",
        description:
            "Stay connected with your customers effortlessly with unlimited SMS and email options. Send reminders for upcoming bookings, real-time notifications, and targeted marketing emails to keep your audience engaged and informed, all without limits. Boost customer satisfaction and retention while promoting your brand effectively via your own business email.",
        img: website,
        color: "white",
        backgroud_color: eighth_color,
    },

    {
        title: "Streamline Daily Operations with E-Forms, Prescriptions, and Med Charts",
        description:
            "Digitize and organize your daily tasks efficiently with our all-in-one platform. Use customizable E-forms for patient intake and documentation, generate prescriptions instantly for seamless medication management, and maintain accurate med charts to monitor patient treatment plans. Simplify workflows, reduce paperwork, and ensure accurate, secure record-keeping for enhanced operational efficiency and patient care.",
        img: resource,
        color: "black",
        backgroud_color: ninth_color,
    },

    {
        title: "Comprehensive Dashboard with Real-Time Data Insights",
        description:
            "Access a powerful dashboard with real-time data visualization to monitor key metrics, track performance, and make instant, informed decisions. Gain valuable insights with dynamic charts and analytics, all in one intuitive interface.",
        img: dashboard,
        color: "black",
        backgroud_color: tenth_color,
    },
];

export default function All_card() {
    return (
        <div className="all_card">
            <Book_appointment />
            {card_array.map((card) => (
                <One_brand
                    title={card.title}
                    description={card.description}
                    img={card.img}
                    color={card.color}
                    backgroud_color={card.backgroud_color}
                />
            ))}
        </div>
    );
}
