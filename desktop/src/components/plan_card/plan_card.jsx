import React from "react";

import "./plan_card.css";

import tick from "../../assets/images/tick.svg";

export default function Plan_card(props) {
    return (
        <div className="plan_card">
            <img src={props.img} alt="card_logo" className="card_icon" />
            <div className="card_title">{props.title}</div>
            <div className="card_pay_amnt">{props.pay_amnt}</div>
            <div className="card_descriptionWithAmnt">
                <div className="card_description">{props.description}</div>
                {props.practioner_amnt !== undefined ? (
                    <input
                        className="card_prac_amnt"
                        type="number"
                        min={0}
                        value={props.practioner_amnt}
                        onChange={(e) =>
                            props.setPractioner_amnt(e.target.value)
                        }
                    />
                ) : (
                    ""
                )}
            </div>

            <div className="card_bullet">
                {props.bullet.map((bull) => (
                    <div className="card_items">
                        <img src={tick} alt="tick" className="bullet_tick" />
                        <div className="bullet_text">{bull}</div>
                    </div>
                ))}
            </div>

            <button className="card_button">
                Get Started
            </button>
        </div>
    );
}
