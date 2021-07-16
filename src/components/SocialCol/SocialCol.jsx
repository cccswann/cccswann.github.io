import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen, faLinkedinIn, faInstagram, faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons'
import Link from "../_ui/Link/Link"

import "./SocialCol.scss";

const SocialCol = () => {
    return (
        <div className="SocialCol">
            <div className="SocialCol__icons">
                <Link
                    className="SocialCol__icon"
                    doOpenInNewTab
                    to="https://github.com/cccswann">
                    <FontAwesomeIcon
                        icon={faGithub}
                         />
                </Link>
                <Link
                    className="SocialCol__icon"
                    doOpenInNewTab
                    to="https://www.linkedin.com/in/ciaraswann/">
                    <FontAwesomeIcon
                        icon={faLinkedinIn}
                    />
                </Link>
            </div>
        </div>
    );
};

export default SocialCol;