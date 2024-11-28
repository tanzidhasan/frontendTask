import React, { useState } from "react";

import "./popular_business.css";

import doctor from "../../assets/images/Doctor_open.webp";
import lawyer from "../../assets/images/Lawyer_Open.webp";
import spaNSalon from "../../assets/images/Salon_Open.webp";
import therapist from "../../assets/images/Therapist_Open.webp";
import fitness from "../../assets/images/Fitness_Open.webp";
import instructor from "../../assets/images/Instructor_open.webp";
import consultancy from "../../assets/images/Consultant_open.webp";
import upperTick from "../../assets/images/upper_tick.svg";

const popular_business_array = [
    {
        header: "Doctor",
        title: "Business solution for healthcare providers",
        description:
            "Our software allows Doctors and Medical Professionals to book appointment, manage their patients, provide online prescriptions, overview of their med charts and automatically send reminders for treatments.",
        img: doctor,
    },
    {
        header: "Laywer",
        title: "Business solutions for Law Firms",
        description:
            "Ambel provides your Law Firm with document automation, case management, scheduling, booking, billing, custom invoice, installment and accounting features.",
        img: lawyer,
    },
    {
        header: "Spa & Salon",
        title: "Effortless Scheduling for Spas & Salons",
        description:
            "Enable clients to book services online 24/7, reducing phone time, front desk operation, streamlining appointment scheduling for your staff and reminders to reduce no shows, keeping schedules organized.",
        img: spaNSalon,
    },
    {
        header: "Therapist",
        title: "Simplify Your Therapy Practice with Intuitive Scheduling",
        description:
            "Spend less time on admin tasks with a user-friendly scheduler that handles bookings and cancellations. Stay organized and focus more on what matters most—your clients.",
        img: therapist,
    },
    {
        header: "Fitness",
        title: "Seamless Bookings for Trainers",
        description:
            "Make client booking easy with 24/7 online scheduling for classes and personal training sessions and diet chart. Offer package, memberships and track client progress—all in one place.",
        img: fitness,
    },
    {
        header: "Instructor",
        title: "Effortless Class Scheduling for Instructors",
        description:
            "Simplify your class management with scheduling tool designed for instructors. Allow clients to book sessions online, keep all class and client details organized in one place.",
        img: instructor,
    },
    {
        header: "Consultancy",
        title: "Give advice anytime from anywhere",
        description:
            "Effortlessly manage client booking with a scheduling solution designed for consulting. Enable clients to book online. Keep track of all sessions and client notes to deliver personalized, professional service every time.",
        img: consultancy,
    },
];

export default function Popular_business() {
    const [popular_button, setPopular_button] = useState("Doctor");

    return (
        <div className="popular_business_body">
            <>
                <div className="popular_business_header">Industries</div>
                <div className="popular_business_title">
                    Popular Businesses and Practitioners who use Ambel
                </div>
                <div className="popular_business_description">
                    Our platform supports a diverse range of professionals, with
                    popular industries; including: healthcare providers, medi
                    spas, salons , fitness coaches, law agencies, beauty
                    specialists, consultants, and therapists.
                </div>
            </>

            <div className="popular_business_button">
                {popular_business_array.map((button) => (
                    <div
                        className="popular_business_button_items"
                        onClick={() => setPopular_button(button.header)}
                        style={{
                            backgroundColor:
                                popular_button == button.header
                                    ? "#19525a"
                                    : "",
                            color:
                                popular_button == button.header
                                    ? "white"
                                    : "rgb(92, 92, 92)",
                        }}
                    >
                        {button.header}
                    </div>
                ))}
            </div>

            <div className="popular_business_cards">
                {popular_business_array.map((card) =>
                    card.header === popular_button ? (
                        <div className="popular_business_card">
                            <div className="popular_business_card_text">
                                <div className="popular_business_card_header">
                                    {card.header}
                                </div>

                                <div className="popular_business_card_title">
                                    {card.title}
                                </div>
                                <div className="popular_business_card_description">
                                    {card.description}
                                </div>

                                <div className="popular_business_card_footer">
                                    <div className="popular_business_card_button">
                                        Learn More
                                    </div>

                                    <img
                                        className="popular_business_card_upper_tick"
                                        src={upperTick}
                                        alt="Upper Tick"
                                    />
                                </div>
                            </div>
                            
                            <img
                                className="popular_business_card_img"
                                src={card.img}
                                alt="popular_business_img"
                            />
                        </div>
                    ) : (
                        <img
                            className="popular_business_card_img_"
                            onMouseEnter={() => {
                                setPopular_button(card.header);
                            }}
                            src={card.img}
                            alt="popular_business_img"
                        />
                    )
                )}
            </div>
        </div>
    );
}
