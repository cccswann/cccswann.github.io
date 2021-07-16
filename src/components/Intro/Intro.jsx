import React from "react"
import Link from "../_ui/Link/Link";
import MaxWidth from "../_ui/MaxWidth/MaxWidth";

import "./Intro.scss";

const Intro = () => {
    return (
        <MaxWidth
            size="m"
            className="Intro"
        >
            <h2 className="Intro__greeting">
                Hi there! My name is
            </h2>
            <h1 className="Intro__header">
                <span className="underline--magical">Ciara Swann</span>.
                <br/>
            </h1>
            <h3 className="Intro__subheader">
                A software engineer based in the Pacific Northwest.
                I spend a lot of time working on projects and learning new technologies, and I love every second of it!
                {/* <span className="emoji" role="img" aria-label="Emoji smile">😊</span> */}
            </h3>
            <Link
                doOpenInNewTab
                isButton
                className="Intro__button"
                buttonProps={{size: "xl", color: "white-blue-stroke"}}
                to="mailto:cccswann@gmail.com"
            >
                Get in touch
            </Link>
        </MaxWidth>
    );
};

export default Intro;