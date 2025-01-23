import React from 'react'
import './About.css'

export const About = () => {
    return (
        <div className="container hero">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-12">
                    <div className="about align-items-center">
                        <div className="about-title text-center">
                            <h2>My Work Experience</h2>
                            <p className="aboutme">Experienced web developer with 3 years of expertise in front-end development, responsive design, and modern frameworks</p>
                        </div>
                    </div>
                </div>
                <div className='experiance'>
                    <div className="companyname p-3 mt-4">
                        <ul className='list-unstyled workexperiance'>
                                <li class="date">Jul 2021 - Sep 2023</li>
                                <li class="logo"><img src='../src/assets/walstar.png'/></li>
                                <li class="position">
                                    Web Developer<br></br>
                                    <span>Kolhapur, India</span>
                                   
                                </li>
                                <li class="link"><a href="/"><i class="fa fa-arrow-right" id="rightarrow"></i>Go to website</a></li>
                        </ul>
                    </div>
                    <div className="companyname p-3">
                        <ul className='list-unstyled workexperiance'>
                                <li class="date">Oct 2023 - Apr 2024</li>
                                <li class="logo"><img src='../src/assets/walnut.webp'/></li>
                                <li class="position">
                                    Assotiate Developer<br></br>
                                    <span>Bengaluru, India</span>
                                </li>
                                <li class="link"><a href="/"><i class="fa fa-arrow-right" id="rightarrow"></i>Go to website</a></li>
                        </ul>
                    </div>
                    <div className="companyname p-3">
                        <ul className='list-unstyled workexperiance'>
                                <li class="date">May 2024 - Present</li>
                                <li class="logo"><img src='../src/assets/grx10-logo.png'/></li>
                                <li class="position">
                                    Web Developer<br></br>
                                    <span>Bengaluru, India</span>
                                </li>
                                <li class="link"><a href="/"><i class="fa fa-arrow-right" id="rightarrow"></i>Go to website</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
