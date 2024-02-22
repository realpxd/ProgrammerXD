import React from 'react'
import SectionA from './SectionA';
import SectionB from './SectionB';
import SectionC from './SectionC';
import Footer from '../Footer'
import styles from '@/app/page.module.css'
const Home = () => {
    return (
        <>
            <SectionA />
            <hr className={styles.hr} />
            <SectionB />
            <hr className={styles.hr} />
            <SectionC />
            <hr className={styles.hr} />
            <Footer />
        </>
    )
}

export default Home