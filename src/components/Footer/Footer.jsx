import React from 'react';
import MaxWidth from "../_ui/MaxWidth/MaxWidth";
import Link from "../_ui/Link/Link";
import './Footer.scss';


const Footer = () => {
    return (
        <div className="Footer__container">
            <MaxWidth size="l" className="Footer">
                <div>
                    
                </div>
                <div className="Footer__copyright__container">
                    <span className="Footer__copyright">
                        &copy; 2021 Ciara Swann — </span>
                    <Link
                        className="Footer__copyright__link"
                        href="https://github.com/cccswann"
                    >
                        Designed and developed by Ci.
                </Link>
                </div>
            </MaxWidth>
        </div>
    );
};

Footer.propTypes = {

};

export default Footer;