"use client"
import React from 'react'
import { useQuery } from 'react-query'
import styles from './Projects.module.css'
import ProjectsData from './ProjectsData';
import { DNA } from "react-loader-spinner"

const Projects = () => {
    const { data: projectsData, isLoading, isError, error } = useQuery('projects', fetchProjectsData);

    async function fetchProjectsData() {
        const response = await fetch('/projects/projectsData.json');
        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }
        return response.json();
    }

    return (
        <section className={styles.projectsPage}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.pageTitle}>All Projects</h1>
                    <p className={styles.pageSubtitle}>
                        Explore my complete portfolio of web applications, mobile apps, and creative solutions
                    </p>
                </div>

                {isLoading && (
                    <div className={styles.loaderContainer}>
                        <DNA
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                        />
                    </div>
                )}

                {isError && (
                    <div className={styles.errorContainer}>
                        <p>{error.message}</p>
                    </div>
                )}

                {projectsData && (
                    <div className={styles.projectsGrid}>
                        {projectsData.map((item, index) => (
                            <ProjectsData
                                key={index}
                                index={index}
                                id={item.id}
                                imgSrc={item.imgSrc}
                                imgw={item.imgw}
                                imgh={item.imgh}
                                title={item.title}
                                description={item.description}
                                live={item?.live}
                                github={item?.github}
                                isDesk={item?.isDesk}
                                stacks={item?.stacks}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Projects
