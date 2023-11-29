import React from 'react'
import styles from '../page.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.contactForm}>
                <h2>Contact Me</h2>
                <form>
                    <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="Email" required/>
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className={styles.bottomFooter}>
                <div className={styles.socialMedia}>
                    <h3>Social Media</h3>
                    <div className={styles.socialMediaWrapper}>
                            <a href='https://github.com/realpxd' ><i className="fab fa-github"></i></a>
                            <a href='https://in.linkedin.com/in/programmerxd' ><i className="fab fa-linkedin-in"></i></a>
                            <a href='https://instagram.com/programmerxd' ><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <p>Copyright &copy; ProgrammerXD 2023</p>
            </div>
        </div>
    )
}

export default Footer