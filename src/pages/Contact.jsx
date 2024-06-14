import { useState } from "react";
import { useAuth } from "../store/auth";

const defaultContactFromData = {
    username: "",
    email: "",
    message: "",
}

const Contact = () => {
 
    const [contact,setContact] = useState(defaultContactFromData);

    const [userData,setUserData] = useState(true);

    const { user } = useAuth();

    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        });

        setUserData(false);
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact, [name]:value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`https://recipe-hub-backend.onrender.com/api/form/contact`,{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify(contact),
            });

            if(response.ok){
                setContact(defaultContactFromData);
                const data = await response.json();
                console.log(data);
                alert('Message send successfully');
            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <section className="section-contact">
          <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1><br/>
          </div>
          <div className="container grid grid-two-cols">
                <div className="contact-img">
                    <img src="/img/contactimg.jpg" alt="img"
                        width="600" height="600"
                    />
                    </div>
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div className="reg">
                                <label htmlFor="username"><strong>Username</strong></label><br/>
                                <input type="text" 
                                name="username" 
                                placeholder="username"
                                required  id="username"
                                autoComplete="off"
                                value={contact.username}
                                onChange={handleInput}
                                />
                            </div>
                            <div className="reg">
                                <label htmlFor="email"><strong>Email</strong></label><br/>
                                <input type="email" 
                                name="email" 
                                placeholder="Enter email"
                                required id="email"
                                autoComplete="off"
                                value={contact.email}
                                onChange={handleInput}></input>
                            </div>
                            <div className="reg">
                                <label htmlFor="message"><strong>Message</strong></label><br/>
                                <textarea name="message" id="message" cols="30" rows="5" placeholder="Write your message here...."
                                  autoComplete="off" required value={contact.message}
                                  onChange={handleInput}></textarea>
                            </div>
                            <br/>
                            <button type="submit">Submit</button>
                        </form>
                    </section>
                </div>
            <section className="section-iframe">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15775.530345577565!2d88.735680862483!3d22.87599210034343
                !2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8b36ae4c4aca9%3A0x91211ab07c42ad58!2sGobardanga%2C%20West%20Ben
                gal!5e0!3m2!1sen!2sin!4v1710926101242!5m2!1sen!2sin" 
                width="600" 
                height="450" allowFullScreen="" 
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </section>
    );
};

export default Contact;