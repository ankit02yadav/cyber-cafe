import './about.css'
import Card from './card.jsx'
import image from '../assets/wallpaper4.png'
function About() {
    return (
        <section id='about' style={{ backgroundImage: `url(${image})` }}>
            <div className="support">
                {/*   */}
                <Card name="Free Guidance" work="I offer free guidance to help you navigate challenges and make informed decisions." uurl="https://cdn4.iconfinder.com/data/icons/man-user-human-profile-business-avatar-person/100/07A-1User-2-512.png"></Card>
                <Card name="100% Accuracy" work="I strive for 100% accuracy in all my work, ensuring reliable and precise results." uurl="https://icon-library.com/images/accurate-icon/accurate-icon-8.jpg"></Card>
                <Card name="24/6 Support" work="I provide 24/7 services, offering continuous support and assistance whenever you need it." uurl="https://cdn.pixabay.com/photo/2013/07/13/12/49/group-160427_640.png"></Card>
            </div>
            <div className="know-me">
                <button className="know-more">Know About Us</button>
                <div className="text-info">
                    <div className="heading">Gautam Docs <span className='color-change'>Not Just a Luxury, But a Necessity for Cyber Cafes</span> </div>
                    <div className="basic-info">
                        computing has become a cornerstone of modern connectivity, transform-ing how <br></br><span className='color-change'>we access information, communicate, and entertain ourselves.</span>
                    </div>
                    <div className="bar-box">
                        <div className="no-of-people">
                            <h2>Costumers This Month: </h2>
                            <div className="bar">
                                <div className="percentage percentage1">
                                    <div className="count">3451</div>
                                </div>
                            </div>
                        </div>
                        <div className="security">
                            <h2>Our Security : </h2>
                            <div className="bar">
                                <div className="percentage percentage2">
                                    <div className="count">97%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* #122228; grey type */}
                    <div className="ticks4">
                        <ul>
                            <li>Reliable Support with 24/7 Assistance</li>
                            <li>High-Speed Internet for Seamless Browsing</li><br />
                            <li>Committed to Data Privacy and Security</li>
                            <li>Affordable Packages for Every User</li>
                        </ul>
                    </div>
                </div>
                <a href="#sub-footer">
                    <button className='call-now'>Call Now</button></a>
            </div>
            <div className="best-services">
                <div className="heading color-change">Our <span className='color-white'>Best Services</span>  For You</div>
                <div className="info-services color-change">Here We Are Showing Our Best Services We Made For You</div>
                <div className="container">

                    <div className="box">
                        <div className="head">Form Filling</div>
                        <div className="logo-box">F</div>
                        <div className="info">
                            Easily complete forms with our streamlined process. Submit necessary details quickly and securely for a hassle-free experience.
                        </div>
                    </div>

                    <div className="box">
                        <div className="head">Ticket Book</div>
                        <div className="logo-box">T</div>
                        <div className="info">
                            Book your tickets effortlessly with our user-friendly interface. Whether it’s for travel or events, get your tickets in a few clicks.
                        </div>
                    </div>

                    <div className="box">
                        <div className="head">Apply/Update</div>
                        <div className="logo-box">A</div>
                        <div className="info">
                            Apply for services or update your details seamlessly. Stay up-to-date with the latest features and offers.
                        </div>
                    </div>

                    <div className="box">
                        <div className="head">Secure Networking</div>
                        <div className="logo-box">N</div>
                        <div className="info">
                            Connect with others securely and privately. Our platform ensures safe communication and collaboration at every step.
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
export default About