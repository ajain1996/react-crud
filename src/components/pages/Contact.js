import React from 'react'
import Navbar from '../layout/Navbar'

export default function Contact() {
    return (
        <div>
            {/* <!-- Page Content --> */}
            {/* <!-- Heading Starts Here --> */}
            <div className="page-heading header-text">
                {/* <Navbar /> */}
            </div>
            {/* <!-- Heading Ends Here --> */}


            {/* <!-- Contact Us Starts Here --> */}
            <div className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-form">
                                <form id="contact" action="" method="post">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="name" type="text" id="name" placeholder="Your name" required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="email" type="text" id="email" placeholder="Your email" required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="subject" type="text" id="subject" placeholder="Subject" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <textarea name="message" rows="6" id="message" placeholder="Your message" required=""></textarea>
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="main-button">Send Message</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-content ps-4">
                                <div className="section-heading text-start">
                                    <span>Contact Us</span>
                                    <h2>Let's keep in touch</h2>
                                    <p>Quisque sagittis blandit sapien et elementum. Fusce pretium viverra consequat. Aliquam at feugiat mi. Pellentesque hendrerit, felis ac sodales commodo.</p>
                                </div>
                                <div className="row text-start">
                                    <div className="col-md-6 col-sm-12 col-lg-6 col-sm-6">
                                        <ul>
                                            <li><i className="fa fa-phone"></i> 010-020-0560</li>
                                            <li><i className="fa fa-support"></i> support@company.com</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-lg-6 col-sm-6">
                                        <ul>
                                            <li><i className="fa fa-envelope"></i> contact@company.com</li>
                                            <li><i className="fa fa-globe"></i> www.company.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact Us Ends Here --> */}
        </div>
    )
}
