import React from 'react'
import Navbar from '../layout/Navbar'

export default function About() {
    return (
        <div>
            {/* <!-- Page Content --> */}
            {/* <!-- Heading Starts Here --> */}
            <div className="page-heading header-text">
                {/* <Navbar /> */}
            </div>
            {/* <!-- Heading Ends Here --> */}


            {/* <!-- About Us Starts Here --> */}
            <div className="about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-image">
                                <img src="assets/images/our-team.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-content text-start">
                                <div className="section-heading">
                                    <span>About Us</span>
                                    <h2>Background of our company</h2>
                                    <p>Duis sit amet nibh non sapien tincidunt bibendum. Curabitur rutrum justo id leo ornare, suscipit lobortis augue volutpat. Sed ligula arcu, interdum eu magna eget, tristique aliquet nibh.</p>
                                </div>
                                <div id='tabs'>
                                    <ul>
                                        <li><a href='#tabs-1'>Our History</a></li>
                                        <li><a href='#tabs-2'>Our Cloud</a></li>
                                        <li><a href='#tabs-3'>Our Network</a></li>
                                    </ul>
                                    <section className='tabs-content'>
                                        <article id='tabs-1'>
                                            <p>Ut elementum a elit sed tristique. Pellentesque sed semper erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean quam erat, rutrum ut malesuada a, commodo vitae lectus. Integer volutpat sapien in arcu fringilla, ac eleifend est facilisis.</p>
                                        </article>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About Us Ends Here --> */}


            {/* <!-- Team Starts Here --> */}
            <div className="team-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="section-heading">
                                <span>Our Team</span>
                                <h2>Meet the greatest people</h2>
                                <p>Integer blandit, tellus varius vulputate cursus, purus orci tincidunt tortor, eget tincidunt elit justo non leo. Donec mollis nulla id est suscipit, ut laoreet nibh faucibus.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="team-item">
                                <img src="assets/images/team-01.jpg" alt="" />
                                <div className="down-content">
                                    <h4>Jonathan Smart</h4>
                                    <span>Co-Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="team-item">
                                <img src="assets/images/team-02.jpg" alt="" />
                                <div className="down-content">
                                    <h4>Mary Morris</h4>
                                    <span>Co-Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="team-item">
                                <img src="assets/images/team-03.jpg" alt="" />
                                <div className="down-content">
                                    <h4>George White</h4>
                                    <span>Co-Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team Ends Here --> */}
        </div>
    )
}
