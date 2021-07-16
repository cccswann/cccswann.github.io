import React from "react"
import Link from "../components/_ui/Link/Link"
import Intro from "../components/Intro/Intro"
import Layout from "../components/Layout/Layout"
import MaxWidth from "../components/_ui/MaxWidth/MaxWidth";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

const Home = () => (
    <Layout showNavigation showSocialCol showFooter>
        <Intro />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <MaxWidth id="about">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <About />
        </MaxWidth>
        <br></br>
        <br></br>
        <MaxWidth id="contact">
          <Contact />
        </MaxWidth>
      
    </Layout>
);

export default Home;