import React from "react";
import classNames from "classnames"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
import MaxWidth from "../_ui/MaxWidth/MaxWidth"
import Link from "../_ui/Link/Link"
import "./Header.scss";

const Header = ({ knockoutHeader }) => (
    <Headroom className="Header__headroom">
        <MaxWidth size="l" className={classNames("Header__container", {
            "Header__container--knockoutColors" : knockoutHeader
        })}>
            <div className="Header__content">

                <div className="Header__links">
                    <Link
                        className="Header__link"
                        to={'/#about'}
                    >
                        About
                    </Link>
                    <Link
                        className="Header__link"
                        to={'/#projects'}
                    >
                        Projects
                    </Link>
                    <Link
                        doOpenInNewTab
                        className="Header__link Header__link--email"
                        to="mailto:cccswann+p@gmail.com"
                    >
                        Contact
                        <span>&#8594;</span>
                    </Link>
                </div>
            </div>
        </MaxWidth>
    </Headroom>
)

Header.propTypes = {
    knockoutHeader: PropTypes.bool,
}

Header.defaultProps = {
    knockoutHeader: false,
}

export default Header