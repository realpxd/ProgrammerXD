"use client"
import React from 'react'
import styles from './Achievements.module.css'

const Achievements = () => {
    const achievements = [
        {
            title: 'Hackathon Success',
            description: 'Participated in HACK CBS 8.0, competing against 100+ teams and successfully crafted an Decentralized Escrow based Freelance Platform, showcasing innovation and technical skills.',
            year: '2025',
            category: 'Hackathon'
        },
        {
            title: 'Top-10 Ranking in Crown for Code',
            description: 'Attained a top-10 ranking out of 150+ participants in the Crown for Code Coding Competition, demonstrating strong problem-solving and coding skills.',
            year: '2024',
            category: 'Competition'
        },
        {
            title: 'Excellence Award at Polytechnic',
            description: 'Awarded with an excellence award in recognition of constant contributions to the Development of 2 Official Projects at Guru Daksh Government Polytechnic.',
            year: '2024',
            category: 'Recognition'
        },
        {
            title: 'Top Performer in MERN Stack Training',
            description: 'Earned recognition as the top-performing student of the Batch among 7+ peers during the 8-week MERN Stack apprenticeship at Novem Controls Pvt. Ltd.',
            year: '2023',
            category: 'Training'
        }
    ];

    return (
        <section className={styles.achievementsSection} id='achievements'>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Achievements & Milestones</h2>
                    <p className={styles.subtitle}>
                        A journey of continuous learning and growth in software development
                    </p>
                </div>
                
                <div className={styles.achievementsList}>
                    {achievements.map((achievement, index) => (
                        <div key={index} className={styles.achievementItem}>
                            <div className={styles.achievementContent}>
                                <div className={styles.achievementHeader}>
                                    <div className={styles.achievementMain}>
                                        <span className={styles.category}>{achievement.category}</span>
                                        <h3 className={styles.achievementTitle}>{achievement.title}</h3>
                                    </div>
                                    <span className={styles.year}>{achievement.year}</span>
                                </div>
                                <p className={styles.achievementDescription}>{achievement.description}</p>
                            </div>
                            <div className={styles.achievementLine}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Achievements
