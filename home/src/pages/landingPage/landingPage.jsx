import React from "react";

import "./landingPage.css";

import Navbar from "desktopApp/navbar";
import Footer from "desktopApp/footer";
import Solve_needs from "desktopApp/solve_needs";

export default function LandingPage() {
    return (
        <>
            <Navbar />

            <div className="data">Home</div>

            <Solve_needs />

            <Footer />
        </>
    );
}
