import React from "react";

import "./book_appointment.css";

import search from "../../assets/images/search_icon.svg";
import location from "../../assets/images/location_icon.svg";
import cross from "../../assets/images/cross_icon.svg";
import settings from "../../assets/images/settings_icon.svg";

const search_array = [
    {
        logo: search,
        placeholder: "Search Doctor, Therapist, Consultant, Spa",
    },

    {
        logo: location,
        placeholder: "Select your location",
    },
];

const search_category = [
    "Doctor",
    "Lawyer",
    "Therapist",
    "Barber",
    "Spa",
    "Med Spa",
    "Psychiatrist",
    "Consultancy firm",
];

export default function Book_appointment() {
    return (
        <div className="search-bar-container">
            <h1 className="search-bar-title">
                Find and Book Appointments with Local and International
                Professionals
            </h1>

            <div className="search-bar">
                {search_array.map((search) => (
                    <div className="search-bar-input">
                        <img
                            className="search-logo"
                            src={search.logo}
                            alt="search_logo"
                        />
                        <input
                            className="search-input"
                            type="text"
                            placeholder={search.placeholder}
                        />
                    </div>
                ))}

                <button className="search-button">Search</button>
            </div>

            <div className="category-before-text">Are you looking for</div>

            <div className="categories">
                {search_category.map((category) => (
                    <div className="category-tag">
                        <div className="category-tag-text">{category}</div>
                        <img className="category-tag-img" src={cross} />
                    </div>
                ))}
            </div>

            <div className="category-tag-more">
                <div className="category-tag-text">More</div>
                <img className="category-tag-img" src={settings} />
            </div>

            <a href="#" className="advanced-search-link">
                Explore advance search →
            </a>
        </div>
    );
}
