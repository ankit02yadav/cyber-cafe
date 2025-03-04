import './faq.css'
import image from '../assets/faq.png'
function Faq() {
    return (

        <section className='faq' id='faq'>
            <div className="heading color-change">Our <span className='color-white'>FAQ Is Here </span>For You</div>
            <div className="faq-info color-change">Here We Are Showing Our Best Services We Made For You</div>
            <div className="question">
                <div className="question-list">
                    <div className="ques">
                        <div className="faq-questions">1. What services do you provide at your cyber café?</div>
                        <div className="faq-ans">We help you with tasks like form filling, updating IDs, and handling other verification-related tasks. While we don’t provide computers for general work, we assist with these specific services on your own devices.</div>
                    </div>
                    <div className="ques">
                        <div className="faq-questions">2. Do I need to bring my own device?</div>
                        <div className="faq-ans">Yes, you will need to bring your own device (smartphone, tablet, or laptop). We assist you with tasks like form filling, updating IDs, and other related services directly on your device.</div>
                    </div>
                    <div className="ques">
                        <div className="faq-questions">3. Do you charge for any of your services?</div>
                        <div className="faq-ans">No, we do not charge for verification-related services, including form filling and ID updates. Our assistance is free of charge for these tasks.</div>
                    </div>
                    <div className="ques">
                        <div className="faq-questions">4. What other services can you help with?</div>
                        <div className="faq-ans">We can help you with a variety of online tasks, including filling out forms, updating IDs, and resolving other specific queries you may have. If you need help with anything else, feel free to ask!</div>
                    </div>
                    <div className="ques">
                        <div className="faq-questions">5. How long do I have to wait for assistance?</div>
                        <div className="faq-ans">The waiting time depends on the task and the current number of customers. However, we strive to provide quick assistance, and you'll typically be helped within a few minutes.</div>
                    </div>
                </div>
                <img src={image} alt="faq image" />
            </div>
        </section>
    );
}
export default Faq