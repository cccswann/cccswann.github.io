import React, { useContext, useState, useEffect } from 'react';
import Link from "../_ui/Link/Link";
import MaxWidth from "../_ui/MaxWidth/MaxWidth";
import ProfileImg from "../../images/profile.jpg"

import "./About.scss";
import AboutImg from '../Image/AboutImg';


const About = () => {
    const skills = ['Python', 'Ruby', 'JavaScript (ES6+)', 'React', 'Gatsby', 'Docker', 'Kubernetes', 'AWS', 'Terraform'];

    return (
        <MaxWidth>
            <div className="About__section">
                <div className="inner">
                    <div className="About__text">
                        <h2 className="About__header">
                            About
                            <br/>
                        </h2>
                        <p className="About__subheader">
                            I'm currently pursuing a <span className="underline--magical">Master's in Computer Science</span> at Arizona State University. I'm also a University of Washington alumna;
                            while there, I studied <span className="underline--magical">Communications</span> and <span className="underline--magical">Business Administration</span>. During my undergrad, I began 
                            programming and learning computer science concepts in my free time -- and I never stopped. I'm particularly interested in <span className="underline--magical">cloud computing</span> and <span className="underline--magical">distributed systems</span>. 
                            {/* <span className="emoji" role="img" aria-label="Emoji smile">😊</span> */}
                        </p>
                        <p><strong>Here are some technologies I've been using recently:</strong></p>
                        <ul className="skills-list">
                        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                        
                        </ul>
                    </div>
                    <AboutImg src={ProfileImg} />
                </div>
            </div>
        </MaxWidth>
    );
};

export default About;