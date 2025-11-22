import React from 'react'
import styles from './Skills.module.css'

const Skills = () => {
    const skills = [
        { category: 'Languages', items: ['Java', 'JavaScript', 'TypeScript', 'Ruby'] },
        { category: 'Libraries', items: ['React JS', 'TanStack Query', 'Tailwind CSS'] },
        { category: 'Frameworks', items: ['Node JS', 'Express JS', 'MongoDB', 'Ruby on Rails'] },
        { category: 'Tools & Platforms', items: ['Git', 'Github', 'Vercel', 'VS-Code', 'Android Studio', 'Firebase', 'WordPress'] },
        { category: 'Soft Skills', items: ['Communication', 'Teamwork', 'Leadership'] }
    ];

    return (
        <div className={styles.skillsSection}>
            <div className={styles.titleWrapper}>
                <h2 className={styles.sectionTitle}>Tech Stack</h2>
            </div>
            
            <div className={styles.skillsGrid}>
                {skills.map((skillGroup, index) => (
                    <div key={index} className={styles.skillCard}>
                        <h3 className={styles.skillCategory}>{skillGroup.category}</h3>
                        <div className={styles.skillItems}>
                            {skillGroup.items.map((item, idx) => (
                                <span key={idx} className={styles.skillTag}>{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.skillsText}>
                <p>
                    As a Full Stack Engineer with experience at Zapro AI and Novem Controls, I've built expertise in 
                    modern web technologies including React, TypeScript, Ruby on Rails, and MERN stack. My experience 
                    spans from developing scalable procurement systems to building vendor portals that significantly 
                    improve client retention and operational efficiency.
                </p>
                <p>
                    I'm passionate about writing clean, maintainable code and have experience with Agile methodologies, 
                    API design, database management, and optimizing application performance. I've contributed to projects 
                    that increased client retention by 50% and reduced onboarding time by 40%.
                </p>
            </div>
        </div>
    )
}

export default Skills

