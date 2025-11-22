import React from 'react'
import styles from '@/app/page.module.css'
import Image from 'next/image';

const SectionB = () => {
    return (
        <>
            <div className={`${styles.container} ${styles.cB}`} id='about'>
                <div className={styles.imageWrapper}>
                    <Image 
                        src={"/me_new.jpeg"} 
                        fill
                        className={styles.pfp}
                        alt="Naman Saini"
                        sizes="(max-width: 768px) 55vw, 400px"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className={`${styles.block} ${styles.bB}`}>
                    <h2>About Me</h2>
                    <p>
                        I'm <strong>Naman Saini</strong>, a Full Stack Engineer passionate about building innovative and scalable web applications. 
                        Currently working at Zapro AI Pvt. Ltd., I specialize in developing robust solutions using React, TypeScript, 
                        Ruby on Rails, and the MERN stack.
                    </p>
                    <p>
                        My experience includes leading end-to-end development of vendor portals, optimizing application performance, 
                        and implementing features that have increased client retention by 50%. I'm skilled in Agile methodologies, 
                        API design, and have a proven track record of delivering high-quality software solutions.
                    </p>
                    <p>
                        With a strong foundation in both frontend and backend technologies, I'm constantly exploring new tools 
                        and frameworks to enhance my skills. I believe in writing clean, maintainable code and following best 
                        practices to create scalable solutions that drive business value.
                    </p>
                </div>
            </div>
        </>
    )
}

export default SectionB