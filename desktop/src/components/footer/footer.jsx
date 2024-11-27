import React from "react";

import "./footer.css";

import twitter_logo from "../../assets/images/twitter.svg";
import facebook_logo from "../../assets/images/facebook.svg";
import instagram_logo from "../../assets/images/instagram.svg";
import github_logo from "../../assets/images/github.svg";
import dribble_logo from "../../assets/images/dribble.svg";

export default function Footer() {
    return (
        <>
            <div className="footer_body">
                <div className="section_footer">
                    <div className="footer_section">
                        <div className="footer_section_label">
                            For Customers
                        </div>
                        <div className="footer_section_items">
                            Find a Practioner
                        </div>
                        <div className="footer_section_items">
                            Book an Appointment
                        </div>
                        <div className="footer_section_items">Make Payment</div>
                        <div className="footer_section_items">
                            Live Consultant
                        </div>
                        <div className="footer_section_items">Refund</div>
                        <div className="footer_section_items">Shop</div>
                        <div className="footer_section_items">Resources</div>
                    </div>
                    <div className="footer_section">
                        <div className="footer_section_label">
                            For Practions
                        </div>
                        <div className="footer_section_items">
                            Profile Setup
                        </div>
                        <div className="footer_section_items">
                            Orgationation Setup
                        </div>
                        <div className="footer_section_items">
                            Collaboration
                        </div>
                        <div className="footer_section_items">Withdraw</div>
                        <div className="footer_section_items">Pay Staff</div>
                        <div className="footer_section_items">QR Code</div>
                        <div className="footer_section_items">Booking Page</div>
                        <div className="footer_section_items">
                            Business Tools
                        </div>
                    </div>
                    <div className="footer_section">
                        <div className="footer_section_label">Resources</div>
                        <div className="footer_section_items">Plans</div>
                        <div className="footer_section_items">Blog</div>
                        <div className="footer_section_items">FAQ</div>
                        <div className="footer_section_items">Reviews</div>
                        <div className="footer_section_items">
                            Refund & Return
                        </div>
                        <div className="footer_section_items">
                            Documentations
                        </div>
                        <div className="footer_section_items">Road Map</div>
                    </div>
                    <div className="footer_section">
                        <div className="footer_section_label">Company</div>
                        <div className="footer_section_items">About Us</div>
                        <div className="footer_section_items">Contact US</div>
                        <div className="footer_section_items">Career</div>
                        <div className="footer_section_items">
                            Support Center
                        </div>
                        <div className="footer_section_items">
                            Affiliate Program
                        </div>
                        <div className="footer_section_items">
                            Trust and Safeyt
                        </div>
                    </div>
                </div>

                <div className="footer_link">
                    <div className="footer_link_text">Follow Us</div>
                    <a href="https://x.com/" target="_blank">
                        <img
                            className="footer_link_logo"
                            src={twitter_logo}
                            alt="twitter"
                        />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                        <img
                            className="footer_link_logo"
                            src={facebook_logo}
                            alt="facebook"
                        />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img
                            className="footer_link_logo"
                            src={instagram_logo}
                            alt="instagram"
                        />
                    </a>
                    <a href="https://github.com/" target="_blank">
                        <img
                            className="footer_link_logo"
                            src={github_logo}
                            alt="github"
                        />
                    </a>
                    <a href="https://dribbble.com/" target="_blank">
                        <img
                            className="footer_link_logo"
                            src={dribble_logo}
                            alt="dribble"
                        />
                    </a>
                </div>

                <div className="footer_tail">
                    <div className="footer_copyright">
                        Copyright © 2024. Ambel. All rights reserved.
                    </div>

                    <div className="footer_termsNcondition">
                        <div className="footer_tNc_link">Terms & Condition</div>
                        <div className="footer_tNc_link">Cookies</div>
                        <div className="footer_tNc_link">Privacy Policy</div>
                    </div>
                </div>
            </div>
        </>
    );
}
