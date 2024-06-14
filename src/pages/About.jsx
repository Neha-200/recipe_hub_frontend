import { useAuth } from "../store/auth"; 

const About = () => {
 
    const {user} = useAuth();
    return (
        <>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content-about">
                        <h1>About Us</h1>
                        <p className="about-p">Hiii! {user ? user.username : `user`}, Welcome to Kitchen Secrets....</p>
                        <h2>Our Mission</h2>
                        <p>At Recipe Suggester, we believe that cooking should be an enjoyable and creative experience for everyone, regardless of skill level. Our mission is to inspire home cooks by providing personalized, easy-to-follow recipes that cater to your tastes, dietary preferences, and available ingredients.</p>
                        <h2>Who We Are</h2>
                        <p>We are a team of food enthusiasts and tech experts passionate about enhancing your cooking experience through innovative solutions.</p>
                        <h2>Why Choose Us?</h2>
                        <p>
                           <strong>Expertise:</strong> Our team consists of culinary experts and food enthusiasts who are passionate about creating and curating the best recipes.
                           <br/><br/>
                           <strong>Customization:</strong> We understand that every palate is unique. That's why we provide personalized recipe suggestions tailored to your tastes, dietary preferences, and available ingredients.
                           <br/><br/>
                           <strong>Customer-Centric Approach:</strong> We prioritize your satisfaction and provide top-notch support to help you find the perfect recipe and enhance your cooking experience.
                           <br/><br/>
                           <strong>Affordability:</strong> Our service is free to use, providing you with high-quality recipes without any cost.
                           <br/><br/>
                           <strong>Reliability:</strong> Count on us to be there when you need inspiration. Our platform is available 24/7, ensuring you always have access to great recipes.
                        </p>
                        <div className="btn btn-group">
                            <a href="/contact"><button className="btn">connect now</button></a>
                            <a href="/service"><button className="btn secondary-btn">learn more</button></a>
                        </div>
                    </div>
                    <div className="hero-img">
                        <img src="/img/aboutimg.webp" width="550" height="550" alt="img"/>
                    </div>
                </div>
            </section>
        </>
    );
}; 

export default About;