import React from 'react'
import styles from './Experience.module.css'

const Experience = () => {
    const skills = [
        { category: 'Languages', items: ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'Python'] },
        { category: 'Frameworks & Libraries', items: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Express.js', 'Redux'] },
        { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'Firebase'] },
        { category: 'Tools & Platforms', items: ['GitHub', 'Vercel', 'Firebase', 'Docker', 'AWS'] },
        { category: 'Stacks', items: ['MERN Stack', 'Next.js Full Stack', 'React Native'] }
    ];

    const workExperience = [
        {
            company: 'Freelance Developer',
            role: 'Full Stack Developer',
            period: '2022 - Present',
            description: 'Developed and deployed multiple full-stack applications including social media clones, e-commerce platforms, and real-time messaging applications. Worked with clients to deliver custom web solutions using modern JavaScript frameworks.',
            technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express.js']
        },
        {
            company: 'Self-Taught Projects',
            role: 'Independent Developer',
            period: '2021 - 2022',
            description: 'Built various projects to learn and master web development. Created utility apps, portfolio websites, and experimented with different technologies to build a strong foundation in full-stack development.',
            technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB']
        }
    ];

    return (
        <div className={styles.experienceSection} id='experience'>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Skills & Experience</h2>
                
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

                <div className={styles.workExperienceSection}>
                    <h2 className={styles.workTitle}>Work Experience</h2>
                    <div className={styles.experienceTimeline}>
                        {workExperience.map((exp, index) => (
                            <div key={index} className={styles.experienceCard}>
                                <div className={styles.experienceHeader}>
                                    <div>
                                        <h3 className={styles.companyName}>{exp.company}</h3>
                                        <p className={styles.role}>{exp.role}</p>
                                    </div>
                                    <span className={styles.period}>{exp.period}</span>
                                </div>
                                <p className={styles.description}>{exp.description}</p>
                                <div className={styles.technologies}>
                                    {exp.technologies.map((tech, idx) => (
                                        <span key={idx} className={styles.techTag}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.experienceText}>
                    <p>
                        As a self-taught developer, I've built my expertise through hands-on projects and continuous learning. 
                        My experience spans from creating simple utility apps to complex full-stack applications with real-time 
                        features. I'm proficient in modern JavaScript frameworks and have experience working with both 
                        frontend and backend technologies.
                    </p>
                    <p>
                        I've successfully developed and deployed multiple projects including social media clones, 
                        anonymous messaging platforms, and e-commerce solutions. Each project has been a learning 
                        opportunity, helping me refine my skills and stay updated with industry best practices.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experience
