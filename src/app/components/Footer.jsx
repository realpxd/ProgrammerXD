"use client"
import React, { useState } from 'react'
import styles from './Footer.module.css'
import { 
    FaLinkedin, 
    FaGithub, 
    FaInstagram, 
    FaTwitter,
    FaEnvelope,
    FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const res = await fetch('https://nodemailer-server-pxd.vercel.app/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (res.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    const socialLinks = [
        { Icon: FaLinkedin, url: 'https://linkedin.com/in/programmerxd', label: 'LinkedIn', color: '#0077b5' },
        { Icon: FaGithub, url: 'https://github.com/realpxd', label: 'GitHub', color: '#333' },
        { Icon: FaTwitter, url: 'https://twitter.com/dotpxd', label: 'Twitter', color: '#1da1f2' },
        { Icon: FaInstagram, url: 'https://instagram.com/programmerxd', label: 'Instagram', color: '#e4405f' }
    ];

    return (
        <footer className={styles.footer} id='contact'>
            <div className={styles.container}>
                <div className={styles.contactSection}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Get In Touch</h2>
                        <p className={styles.subtitle}>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                    </div>

                    <div className={styles.contentGrid}>
                        <div className={styles.contactInfo}>
                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3>Email</h3>
                                    <a href="mailto:thisisnamansaini@gmail.com">thisisnamansaini@gmail.com</a>
                                </div>
                            </div>
                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3>Location</h3>
                                    <p>Gurugram, Haryana, India</p>
                                </div>
                            </div>
                            <div className={styles.socialLinks}>
                                <h3>Connect With Me</h3>
                                <div className={styles.socialIcons}>
                                    {socialLinks.map((social, index) => {
                                        const IconComponent = social.Icon;
                                        return (
                                            <a
                                                key={index}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={social.label}
                                                className={styles.socialIcon}
                                                style={{ '--hover-color': social.color }}
                                            >
                                                <IconComponent />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <form className={styles.contactForm} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <textarea
                                    id="message"
                                    placeholder="Your Message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className={styles.submitButton}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                            {submitStatus === 'success' && (
                                <p className={styles.successMessage}>Message sent successfully! 🎉</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className={styles.errorMessage}>Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </div>
                </div>

                <div className={styles.bottomFooter}>
                    <div className={styles.footerContent}>
                        <p className={styles.copyright}>
                            &copy; {new Date().getFullYear()} ProgrammerXD / Naman Saini. All rights reserved.
                        </p>
                        <p className={styles.tagline}>
                            Building the future, one line of code at a time.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
