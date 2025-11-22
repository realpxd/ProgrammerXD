import React from 'react'
import styles from './Education.module.css'

const Education = () => {
    const education = [
        {
            qualification: 'Undergraduate Degree',
            institution: 'Gurugram University',
            period: 'Expected July 2028',
            field: 'Computer Science (AI)',
            location: 'Gurugram, Haryana, IN',
            points: [
                'Pursuing a comprehensive degree in Computer Science with specialization in Artificial Intelligence',
                'Focusing on software engineering, data structures, algorithms, machine learning, and modern web technologies'
            ],
            achievements: []
        },
        {
            qualification: 'Diploma',
            institution: 'Guru Daksh Government Polytechnic',
            period: 'July 2024',
            field: 'Computer Science',
            location: 'Hisar, Haryana, IN',
            cgpa: '7.0',
            points: [
                'Completed diploma in Computer Science with strong foundation in programming, software development, and computer systems',
                'Earned recognition for excellence in development projects'
            ],
            achievements: [
                'Awarded excellence award for constant contributions to Development of 2 Official Projects',
                'Strong foundation in computer science fundamentals'
            ]
        },
        {
            qualification: '12th',
            institution: 'K.L. Arya D.A.V Public School',
            period: 'July 2021',
            field: 'Commerce from CBSE',
            location: 'Hisar, Haryana, IN',
            percentage: '75%',
            points: [
                'Completed higher secondary education in Commerce stream from CBSE board',
                'Achieved 75% marks demonstrating strong academic performance'
            ],
            achievements: []
        }
    ];

    return (
        <div className={styles.educationSection} id='education'>
            <div className={styles.container}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.sectionTitle}>Education</h2>
                </div>
                
                <div className={styles.educationTimeline}>
                    {education.map((edu, index) => (
                        <div key={index} className={styles.educationCard}>
                            <div className={styles.educationHeader}>
                                <div className={styles.educationMain}>
                                    <h3 className={styles.qualification}>{edu.qualification}</h3>
                                    <p className={styles.institution}>{edu.institution}</p>
                                    <p className={styles.field}>{edu.field}</p>
                                    {edu.cgpa && <p className={styles.cgpa}>CGPA: {edu.cgpa}</p>}
                                    {edu.percentage && <p className={styles.percentage}>Percentage: {edu.percentage}</p>}
                                    {edu.location && <p className={styles.location}>{edu.location}</p>}
                                </div>
                                <span className={styles.period}>{edu.period}</span>
                            </div>
                            
                            <ul className={styles.pointsList}>
                                {edu.points.map((point, idx) => (
                                    <li key={idx} className={styles.pointItem}>{point}</li>
                                ))}
                            </ul>
                            
                            {edu.achievements && edu.achievements.length > 0 && (
                                <div className={styles.achievements}>
                                    <h4 className={styles.achievementsTitle}>Key Achievements:</h4>
                                    <ul className={styles.achievementsList}>
                                        {edu.achievements.map((achievement, idx) => (
                                            <li key={idx} className={styles.achievementItem}>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education

