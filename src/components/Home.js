import React from 'react';
import vg from "../assets/middle.jpg";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>BLS World School</h1>
          <p>Dreams comes true of every student</p>
        </main> 
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>The School with Maximum Care and Maximum Activities and Maximum Facility and The Choice of Every Student.</p>
        </div>
      </div>

      <div className="home3" id='about'>
        <div>
          <h1>Why Choose a Global School</h1>
          <p>At BLS, there is a commitment to provide students with the learning experiences necessary to develop their understanding for sustainability.
          The aim is that all studentsbapply this understanding in decisions that they make in their everyday lives. they are empowered to take action, 
          seek solutions and become aware that they can make a difference, responding to the actions needed to sustain the planet. Teachers facilitate this
          learning through the integration os the Sustainable Development Goals (SDGs) in the BLS Curricula</p>
        </div>
      </div>

      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay: "0.3s"
            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{
              animationDelay: "0.5s"
            }}>
              <AiFillAmazonCircle />
              <p>Facebook</p>
            </div>

            <div style={{
              animationDelay: "0.7s"
            }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{
              animationDelay: "0.1s"
            }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home

