import { auto } from "@popperjs/core";
import React from "react";
import '../Pages/contact.css'

function Contact() {
    return (
        <div>
            <h2>Contact Us</h2>
            <form>

                <label>                    
                    Name:                    
                </label>
                <input type="text" placeholder="Enter your name" />

                <label>
                    Email:                    
                </label>
                <input type="text" placeholder="Enter your Email" />

                <label>
                    Message:                    
                </label>
                <textarea name="message" placeholder="please enter your message" rows={8} />

                <button type="submit" className="button">Submit</button>
                
            </form>            
        </div>
    )
}
export default Contact;