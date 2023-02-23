import '../Pages/contact.css'

import Button from 'react-bootstrap/Button';

function Contact() {
    const key = process.env.REACT_APP_WEB3FORMS_API_KEY

    return (
        <main className='container'>
            <h2>Say Hello 👋 or Send us Feedback! 📩</h2>
                <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value={key}></input>
                <input type="text" name="name" placeholder="Enter you name" required></input>
                <input type="email" name="email" placeholder="Enter your email address" required></input>
                <textarea name="message" placeholder="Your message..." required></textarea>
                <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
                <Button type="submit">Submit Form</Button>
            </form>          
        </main>
    )
}
export default Contact;