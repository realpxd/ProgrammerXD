import React from 'react'
import Skills from './Skills'
import Achievements from './Achievements'
import styles from './SkillsAndAchievements.module.css'

const SkillsAndAchievements = () => {
    return (
        <div className={styles.combinedSection} id='experience'>
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>Skills & Achievements</h2>
                <div className={styles.contentGrid}>
                    <Skills />
                    <div className={styles.achievementsWrapper}>
                        <Achievements />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsAndAchievements

