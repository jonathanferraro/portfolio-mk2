import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css'

export function Contact() {
    const form = useRef();
    const [honeypot, setHoneypot] = useState('')
    const [formStatus, setFormStatus] = useState('')
    const [submitTime, setSubmitTime] = useState(false)

    const honeypotChecker = (e) => {
        setHoneypot(e.target.value)
    }

    const submitTimeChecker = () => {
        if (submitTime == false) {
            let newTime = new Date()
            setSubmitTime(newTime)
            return true
        }
        let curTime = new Date()
        let diff = curTime - submitTime 

        if (diff >= 8000 ) {
            let newTime = new Date()
            setSubmitTime(newTime)
            return true
        } else {
            return false
        }

    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (honeypot !== '') {
            setHoneypot('');
            setFormStatus('Bot Spam Prevention');

        } else if (submitTimeChecker() === false) {
            setFormStatus('Please wait before sending again');

        } else {
            emailjs.sendForm('service_goa0mam', 'template_np17i36', form.current, '4uHj1eN-7JxdhOLi9')
            .then((result) => {
                console.log(result.text);
                setFormStatus('Message sent successfully');
            }, (error) => {
                console.log(error.text);
                setFormStatus('Error sending message');
            });
        }

        e.target.reset() 
    };
  
    return (
        <div className='contact mt-14 mb-12'>
            <p className='text-2xl '>Contact</p>
            <div id='contact-link'>
                <p className={`${formStatus == 'Message sent successfully' ? 'text-green-500' : 'text-red-500'}`}>{formStatus}</p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                {/* bot spam input field */}
                <input style={{'display' : 'none'}} type='text' name='honeypot' onChange={honeypotChecker}/>

                <label>Name</label>
                <input type="text" name="user_name" required />
                <label>Email</label>
                <input type="email" name="user_email" required />
                <label>Message</label>
                <textarea name="message" required />
                <input type="submit" value="Send" />
            </form>
      </div>
    );
}