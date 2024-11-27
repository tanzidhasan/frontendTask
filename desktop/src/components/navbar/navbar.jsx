import React from "react";

import "./navbar.css";

import logo_img from "../../assets/images/ambelLOGO.svg";
import downArrow from "../../assets/images/downArrow.svg";

export default function Navbar() {
    return (
        <>
            <div className="navbar_body">

                <div className="navbar_menu">
                    <a href="/">
                        <img
                            className="logo_img"
                            src={logo_img}
                            alt="Ambel Logo"
                        />
                    </a>
                    <div className="menu_links">
                        <div className="menu_links_text">Features</div>
                        <img className="menu_links_img" src={downArrow} />
                    </div>
                    <div className="menu_links">
                        <div className="menu_links_text">Plans</div>
                    </div>
                    <div className="menu_links">
                        <div className="menu_links_text">Solutions</div>
                        <img className="menu_links_img" src={downArrow} />
                    </div>
                    <div className="menu_links">
                        <div className="menu_links_text">Resources</div>
                        <img className="menu_links_img" src={downArrow} />
                    </div>

                    <div className="menu_links">
                        <div className="menu_links_text">Find Professional</div>
                    </div>

                    <div className="menu_links">
                        <div className="menu_links_text">Help</div>
                        <img className="menu_links_img" src={downArrow} />
                    </div>
                </div>

                <div className="navbar_sign">
                    <button className="sign_button">Sign Up</button>

                    <button className="sign_button sign_in_button">
                        Sign in
                    </button>
                </div>
            </div>
        </>
    );
}
