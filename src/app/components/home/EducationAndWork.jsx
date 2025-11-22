import React from 'react'
import Education from './Education'
import WorkExperience from './WorkExperience'
import styles from './EducationAndWork.module.css'

const EducationAndWork = () => {
    return (
        <div className={styles.combinedSection}>
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>Education & Work Experience</h2>
                <div className={styles.contentGrid}>
                    <div className={styles.educationWrapper}>
                        <Education />
                    </div>
                    <WorkExperience />
                </div>
            </div>
        </div>
    )
}

export default EducationAndWork

