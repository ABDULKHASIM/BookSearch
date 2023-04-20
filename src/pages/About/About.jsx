import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>That's the thing about books. They let you travel without moving your feet.</p>
            <p className='fs-17'>Books are a uniquely portable magic.</p>
            <p className='fs-17'>Reading is a conversation. All books talk. But good book listens as well</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
