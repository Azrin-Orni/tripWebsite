import React from "react";
import './about.css'
import img from '../../assets/customer.png'
import img2 from '../../assets/mountain.png'
import img3 from '../../assets/climbing.png'

import video from '../../assets/video.mp4'

const About = () => {
    return(
        <section className="about section">
            <div className="secContainer">
                <h2 className="title">
                    Why Hikings?
                </h2>
                <div className="mainContent container grid">
                    <div className="singleItem">
                        <img src={img2} alt="Name"/>
                        <h3>100+ Mountains</h3>

                        <p>Research shows that a chance to break away from the normal rythms of daily life reduces 
                            stress and improves health and well being
                        </p>
                    </div>
                    <div className="singleItem">
                        <img src={img3} alt="Name"/>
                        <h3>1000+ Hikings</h3>

                        <p>Research shows that a chance to break away from the normal rythms of daily life reduces 
                            stress and improves health and well being
                        </p>
                    </div>
                    <div className="singleItem">
                        <img src={img} alt="Name"/>
                        <h3>2000+ Customers</h3>

                        <p>Research shows that a chance to break away from the normal rythms of daily life reduces 
                            stress and improves health and well being
                        </p>
                    </div>

                </div>

                <div className="videoCard container">
                    <div className="cardContent grid">
                        <div className="cardText">
                            <h2>Wonderful experience  there!</h2>
                            <p>The adventure subranking is based on an 
                                equally weighted average of scores from 
                                five country
                                </p>
                        </div>
                        <div className="cardVideo"> 
                            <video src={video} autoPlay loop muted type="video/mp4">

                            </video>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;