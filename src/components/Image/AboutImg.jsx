import React from 'react';
import MaxWidth from "../_ui/MaxWidth/MaxWidth";
import ProfileImg from "../../images/profile.jpg"
import './AboutImg.scss';


const AboutImg = () => {
    return (
          <div className="AboutImg">
            <img className="AboutImg" src={ProfileImg} alt="A dog smiling in a party hat" />
          </div>
    );
};

AboutImg.propTypes = {
};

export default AboutImg;