import React from 'react';
import './intro.css';
import bg from '../../assets/sambg.png'
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">i'm <span className="introName">Sammy</span> <br />Website Developer </span>
            <span className="introPara">i am a skilled web developer and designer with a skill in creating <br /> visually appealing and user friendly websites</span>
            <Link><button className="btn"><img src={btnImg} alt="" className='btnImg' />Hire me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro;