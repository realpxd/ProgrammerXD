import React from 'react'
import styles from '@/app/page.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        var name = e.target.name.value;
        var email = e.target.email.value;
        var message = e.target.message.value;
        var formdata = {
            name,
            email,
            message
        }

        const res = await fetch('https://nodemailer-server-pxd.vercel.app/sendMail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })

        const data = await res.json();
        console.log(data);
        alert('Message Sent Successfully');
    }

    return (
        <div className={styles.footer}>
            <div className={styles.contactForm} id='contact'>
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" id='name' required />
                    <input type="email" placeholder="Email" id='email' required />
                    <textarea placeholder="Message" id='message' required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className={styles.bottomFooter}>
                <div className={styles.socialMedia}>
                    <h3>Social Media</h3>
                    <div className={styles.socialMediaWrapper}>
                        {/* <a href='https://github.com/realpxd' ><i className="fab fa-github"></i></a>
                        <a href='https://in.linkedin.com/in/programmerxd' ><i className="fab fa-linkedin-in"></i></a>
                        <a href='https://instagram.com/programmerxd' ><i className="fab fa-instagram"></i></a> */}
                        <a href='https://in.linkedin.com/in/programmerxd' >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                style={{ color: "red" }}
                            /></a>
                        <a href='https://github.com/realpxd' >
                            <FontAwesomeIcon
                                icon={faGithub}
                                style={{ color: "red" }}
                            /></a>
                        <a href='https://instagram.com/programmerxd' >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                style={{ color: "red" }}
                            /></a>
                        <a href='https://twitter.com/PXD_Officials' >
                            <FontAwesomeIcon
                                icon={faTwitter}
                                style={{ color: "red" }}
                            /></a>

                    </div>
                </div>
                <p>Copyright &copy; ProgrammerXD 2023</p>
            </div>
        </div>
    )
}

export default Footer