import React from "react";
import imagenSignup from '../../images/signup.jpeg'
import '../pages/SignUp.css'

function SignUp() {
    return (
        <div className="contact">
            <div className="leftSide"
            style={{backgroundImage: `url(${imagenSignup})`}}
            ></div>
            <div className="rightSide">
            <h1> Suscribete </h1>

            <form id="contact-form" method="POST">
                <label htmlFor="name">Full Name</label>
                <input name="name" placeholder="Enter full name..." type="text" />
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter email..." type="email" />
                <label htmlFor="message">Message</label>
                <textarea
                 rows="6"
                    placeholder="Ingresa un mensaje o crítica sobre mi primera página web..."
                    name="message"
                    required
                ></textarea>
                <button type="submit"> Send Message</button>
                </form>
                </div>

        </div>

    );
    
}

export default SignUp;