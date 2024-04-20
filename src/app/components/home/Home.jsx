import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import SectionA from './SectionA';
import SectionB from './SectionB';
import SectionC from './SectionC';
import Footer from '../Footer'
import styles from '@/app/page.module.css'
const Home = () => {
    const { data: projectsData, isLoading, isError, error } = useQuery('projects', fetchProjectsData);

    async function fetchProjectsData() {
        const response = await fetch('/projects/projectsData.json');
        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }
        return response.json();
    }


    return (
        <>
            <SectionA />
            <hr className={styles.hr} />
            <SectionB />
            <hr className={styles.hr} />
            <SectionC
                projectsData={projectsData}
                isLoading={isLoading}
                isError={isError}
                error={error}
            />
            <hr className={styles.hr} />
            <Footer />
        </>
    )
}

export default Home