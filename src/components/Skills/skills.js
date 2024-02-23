import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import webDesign from '../../assets/website-design.png';
import appDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What i do</span>
        <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS and Javascript as well as Reactjs, nodejs and MongoDB.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX design</h2>
                    <p>i am responsible for creating a visually appealing and user-friendly interface, considering both the aesthetic aspects (UI) and the overall user experience (UX).</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={webDesign} alt="webDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>As a front end developer who utilizes HTML, CSS and Javascript, i am responsible for the technical implementation of a website which involves coding and programming to bring the design and functionality of a website to life.</p>
                </div>
            </div>

            <div className="skillBar">
            <img src={appDesign} alt="appDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App design</h2>
                    <p>i am responsible for creating visually appealing and user-friendly interfaces for mobile applications.  This involves a combination of artistic and technical skills, as well as a deep understanding of user behavior and mobile platform guidelines. </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills