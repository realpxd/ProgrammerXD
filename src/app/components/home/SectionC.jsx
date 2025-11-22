"use client"
import React from 'react'
import styles from './SectionC.module.css'
import Link from 'next/link';
import { MdArrowForward } from "react-icons/md";
import ProjectsData from '../projects/ProjectsData';
import { DNA } from "react-loader-spinner"

const SectionC = ({ projectsData, isLoading, isError, error }) => {
    return (
        <section className={styles.projectsSection} id='projects'>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Featured Projects</h2>
                    <p className={styles.subtitle}>
                        A collection of projects showcasing my skills and creativity
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
                    <>
                        <div className={styles.projectsGrid}>
                            {[2, 1, 6]
                                .map((projectId) => projectsData.find((item) => item.id === projectId))
                                .filter(Boolean)
                                .map((item, index) => {
                                    // Find the actual index in the original projectsData array
                                    const actualIndex = projectsData.findIndex(project => project.id === item.id);
                                    return (
                                        <ProjectsData
                                            key={item.id}
                                            index={actualIndex}
                                            id={item.id}
                                            lastIndex={index === 2 ? 3 : undefined}
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
                                    );
                                })}
                        </div>
                        <div className={styles.viewAllContainer}>
                            <Link href={'/projects'} className={styles.viewAllButton}>
                                <span>View All Projects</span>
                                <MdArrowForward className={styles.arrowIcon} />
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default SectionC
