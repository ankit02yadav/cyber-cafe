import './home.css'
import image from '../assets/background.png'
function Home() {
    return (
        <section id='home' style={{ backgroundImage: `url(${image})` }}>
            <div className="home-content" >
                <div className="info">
                    <div className="heading">
                        Provide <span className='color-change'>Fastest</span> Service From  
                        <span className='color-change'> Gautam Docs</span>
                    </div>
                    <div className="info-me">
                    At our Internet Café, we provide expert assistance with job search, form filling, and online applications. While we don't offer computer rentals, our dedicated team ensures you receive top-notch support for all your online form-related needs. Visit us for professional, reliable, and efficient service.
                    </div>
                </div>
                <a href="#sub-footer">
                <button className='contact'>Contact</button>
                <button className='learn'>Learn More</button>
                </a>
            </div>
            <div className="social-media">
                <a href="https://wa.link/udp5th"><img src="https://static-00.iconduck.com/assets.00/whatsapp-icon-1979x2048-y3bz6p8d.png" alt="" /></a>
                <a href=""><img src="https://i1.wp.com/multarte.com.br/wp-content/uploads/2019/03/logo-instagram-png-fundo-transparente5.png?fit=2400,2400&ssl=1" alt="" /></a>
                <a href="mailto:name@email.com"><img src="https://cdn1.iconfinder.com/data/icons/random-crafticons/48/misc-_mail-512.png" alt="" /></a>
            </div>
        </section>
    )
};
export default Home