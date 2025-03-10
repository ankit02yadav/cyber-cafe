import './Footer.css'
import image from '../assets/footer.png'
function SubFooter() {
    return (
        <>
            <section id='sub-footer' style={{ backgroundImage: `url(${image})` }}>
                <div className="container">
                    <div className="contact-links">
                        <form className="email" method="POST" action="mailto:name@email.com" enctype="multipart/form-data">
                            <input type="email" placeholder='Your Email' required />
                            <button type='submit' href="gautamchy25@gmail.com" >SEND</button>
                        </form>
                        <div className="text-email">For Sending All Documents, Quarry Please Subscribe</div>
                        <div className="links">
                            <div className="quick-links">
                                <h2>Quick Links </h2>
                                <ul>
                                    <li>&#10148; <a href="#home">Home</a></li>
                                    <li>&#10148; <a href="#about">About</a></li>
                                    <li>&#10148; <a href="#faq">Our FAQ</a></li>
                                    <li>&#10148; <a target='_blank' href="https://ankit-yadav2.github.io/portfolio/">Created By <span className='color-change'>Ankit Yadav</span></a></li>
                                </ul>
                            </div>
                            <div className="our-contact">
                                <h2>Our Contact</h2>
                                <div className="ph-no">
                                    <h3 className='color-change'>Phone No. :</h3>
                                    <span>+91 9472056895</span>
                                </div>
                                <div className="email-contact">
                                    <h3 className='color-change'>Email :</h3>
                                    <span>gautamchy25@gmail.com</span>
                                </div>
                                <div className="address-contact">
                                    <h3 className='color-change'>Address :</h3>
                                    <span>Prem Nagar, Najafgarh, New Delhi, India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-text">
                        <div className="logo">Verma</div>
                        <div className="site-info">Empowering the Digital Experience at Cyber Cafe Verma</div>
                        <div className="acc-info">Good <span className='color-change'>Process </span>is not a service it's a gateway to the future.</div>
                        <a target='_blank' href="https://ankit-yadav2.github.io/portfolio/">Creater's <span className='color-change'>Portfolio</span></a>
                    </div>
                </div>
            </section>
            <footer>
                Copyright &copy; All Right Reserved By Verma Docs.
            </footer>
        </>
    );
}
export default SubFooter
