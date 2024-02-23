import React from 'react';
import './works.css';
import Tindog from '../../assets/tin-dog.png';
import Drumkit from '../../assets/drum-kit.png';
import Psycalc from '../../assets/psycalc.png';
import Simongame from '../../assets/simon-game.png';
import SammyA from '../../assets/sammyA.png';
import Blog from '../../assets/Blog.png';

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My portfolio</h2>
        <span className="worksDesc">i take pride in paying attention to the smallest details and making sure that my work is pixel perfect. i am excited to brings my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className="worksImgs">
            <a href="https://tin-dog-sigma.vercel.app/"><img src={Tindog} alt="pTindog" className="worksImg" /></a> 
            <a href="https://drum-kit-olive-two.vercel.app/"><img src={Drumkit} alt="Drumkit" className="worksImg" /></a>
            <a href="https://psycalc.vercel.app/"> <img src={Psycalc} alt="Psycalc" className="worksImg" /></a>
            <a href="https://simon-game-sand-ten.vercel.app/"><img src={Simongame} alt="Simongame" className="worksImg" /></a>
            <a href="https://landing-page-sable-tau.vercel.app/"><img src={SammyA} alt="SammyA" className="worksImg" /></a>
            <a href="https://blog-lovat-nine-14.vercel.app/"><img src={Blog} alt="blog" className="worksImg" /></a>
            
           
            
            
            
        </div>
        <button className="worksBtn">See more </button>
    </section>
  );
}

export default Works