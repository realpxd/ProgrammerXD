import React from 'react'
import styles from './WorkExperience.module.css'

const WorkExperience = () => {
    const workExperience = [
        {
            company: 'Zapro AI Pvt. Ltd.',
            role: 'Full Stack Engineer (Part-Time)',
            period: 'August 2025 - Present',
            location: 'Bangalore, Karnataka, IN',
            points: [
            ],
            technologies: ['React', 'TypeScript', 'Ruby on Rails']
        },
        {
            company: 'Google Developers Group On Campus - Gurugram University',
            role: 'Tech Team Member',
            period: '2024 – Present',
            location: 'Gurugram, Haryana, IN',
            points: [
                'Active tech team member of GDGGUG (Google Developers Group On Campus Gurugram University)',
                'Built gdggug.com - the official website for the club with a team of 6 members',
                'Collaborated on frontend and backend development, contributing to the club\'s digital presence'
            ],
            technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB']
        },
        {
            company: 'Zapro AI Pvt. Ltd.',
            role: 'Full Stack Engineer (Full-Time)',
            period: 'November 2024 – August 2025',
            location: 'Bangalore, Karnataka, IN',
            points: [
                'Built and maintained multiple customization features in the overall product, increasing clients retainment by 50%',
                'Led the end-to-end development of a new vendor-portal module (React & TypeScript as front-end + Ruby on Rails as back-end)',
                'Enabled clients to onboard suppliers in under 5 minutes, reducing previous manual onboarding time by ~40%'
            ],
            technologies: ['React', 'TypeScript', 'Ruby on Rails', 'Node.js', 'Express.js']
        },
        {
            company: 'Zapro AI Pvt. Ltd.',
            role: 'Frontend Engineer Intern',
            period: 'March 2024 – November 2024',
            location: 'Bangalore, Karnataka, IN',
            points: [
                'Spearheaded the development of a robust and scalable procurement system with React JS and enforced strict TypeScript with Zod schema validation',
                'Experienced in Agile Methodology Approach for classified project development and good communication between QA and Backend Teams',
                'Contributed in optimizing build and deployment time by 10% through replacing 70% of the recoil-library implementations with react-query hook',
                'Implemented i18next for multiple languages support that helped in increasing satisfaction rate of non-english-speaking users by 20%'
            ],
            technologies: ['React', 'TypeScript', 'Zod', 'React Query', 'i18next']
        },
        {
            company: 'Novem Controls Pvt. Ltd.',
            role: 'Apprenticeship in MERN Stack Development',
            period: 'Aug 2023 – Sep 2023',
            location: 'Mohali, Punjab, IN',
            points: [
                'Conceptualized a comprehensive 8-week MERN Stack training, excelling in framework and libraries like React JS, Express JS, and Node JS',
                'Earned recognition as the top-performing student of the Batch among 7+ peers and helped colleagues in learning path for overall growth',
                'Acquired expertise and good understanding in API design & integration, database management, and SPA development'
            ],
            technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MERN Stack']
        }
    ];

    return (
        <div className={styles.workSection}>
            <h2 className={styles.sectionTitle}>Work Experience</h2>
            <div className={styles.experienceTimeline}>
                {workExperience.map((exp, index) => (
                    <div key={index} className={styles.experienceCard}>
                        <div className={styles.experienceHeader}>
                            <div>
                                <h3 className={styles.companyName}>{exp.company}</h3>
                                <p className={styles.role}>{exp.role}</p>
                                {exp.location && <p className={styles.location}>{exp.location}</p>}
                            </div>
                            <span className={styles.period}>{exp.period}</span>
                        </div>
                        <ul className={styles.pointsList}>
                            {exp.points.map((point, idx) => (
                                <li key={idx} className={styles.pointItem}>{point}</li>
                            ))}
                        </ul>
                        <div className={styles.technologies}>
                            {exp.technologies.map((tech, idx) => (
                                <span key={idx} className={styles.techTag}>{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkExperience

