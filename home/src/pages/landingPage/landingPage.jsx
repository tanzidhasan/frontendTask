import React from "react";

import "./landingPage.css";

import Navbar from "desktopApp/navbar";
import Footer from "desktopApp/footer";
import Solve_needs from "desktopApp/solve_needs";
import Business_solution from "../../components/business_solution/business_solution";
import Popular_business from "../../components/popular_business/popular_business";
import All_card from "../../components/all_card/all_card";

export default function LandingPage() {
    return (
        <>
            <Navbar />

            <Business_solution />

            <Popular_business />

            <Solve_needs />

            <All_card />

            <Footer />
        </>
    );
}
