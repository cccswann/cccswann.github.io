import React from "react"
import Link from "../_ui/Link/Link";
import MaxWidth from "../_ui/MaxWidth/MaxWidth";

import "./Contact.scss";

const Contact = () => {
    return (
        <div className="Contact">
            <h2 className="Contact__header">
                Get In Touch
                <br/>
            </h2>
            <h3 className="Contact__subheader">
                I'm currently open to new oportunities, <br></br>so please feel free to reach out!
                {/* <span className="emoji" role="img" aria-label="Emoji smile">😊</span> */}
            </h3>
            <Link
                doOpenInNewTab
                isButton
                className="Contact__button"
                buttonProps={{size: "l", color: "white-blue-stroke"}}
                to="mailto:cccswann@gmail.com"
            >
                Say Hi!
            </Link>
        </div>
    );
};

export default Contact;