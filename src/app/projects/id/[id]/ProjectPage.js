"use client"
import React from 'react'
import { useQuery } from "react-query"
import { DNA } from "react-loader-spinner"
import styles from './ProjectPage.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import NavBar from '@/app/components/NavBar';

const ProjectPage = (props) => {
    const { id } = props
    const { data: projectsData, isLoading, isError, error } = useQuery('projects', fetchProjectsData);

    async function fetchProjectsData() {
        const response = await fetch('/projects/projectsData.json');
        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }
        return response.json();
    }

    const project = projectsData?.find((_, index) => index == id);

    if (isLoading) {
        return (
            <>
                <NavBar />
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
            </>
        );
    }

    if (isError || !project) {
        return (
            <>
                <NavBar />
                <div className={styles.errorContainer}>
                    <h2>Project Not Found</h2>
                    <Link href="/projects" className={styles.backButton}>
                        <FaArrowLeft />
                        Back to Projects
                    </Link>
                </div>
            </>
        );
    }

    return (
        <>
            <NavBar />
            <div className={styles.projectPage}>
                <div className={styles.container}>
                    <Link href="/projects" className={styles.backLink}>
                        <FaArrowLeft />
                        <span>Back to Projects</span>
                    </Link>

                    <div className={styles.heroSection}>
                        <div className={styles.imageWrapper}>
                            <Image 
                                src={project.imgSrc} 
                                width={800} 
                                height={600} 
                                className={`${styles.heroImage} ${project.isDesk ? styles.desktopImage : ''}`} 
                                alt={project.title}
                            />
                        </div>
                        <div className={styles.heroContent}>
                            <h1 className={styles.projectTitle}>{project.title}</h1>
                            <p className={styles.projectSubtitle}>{project.description}</p>
                            <div className={styles.actionButtons}>
                                {project.github && (
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={styles.actionButton}
                                    >
                                        <FaGithub />
                                        <span>View Code</span>
                                    </a>
                                )}
                                {project.live && (
                                    <a 
                                        href={project.live} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={`${styles.actionButton} ${styles.primaryButton}`}
                                    >
                                        <FaExternalLinkAlt />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={styles.detailsSection}>
                        <div className={styles.detailsGrid}>
                            <div className={styles.detailCard}>
                                <h3 className={styles.detailTitle}>About This Project</h3>
                                <p className={styles.detailText}>{project.description}</p>
                            </div>

                            {project.stacks && project.stacks.length > 0 && (
                                <div className={styles.detailCard}>
                                    <h3 className={styles.detailTitle}>Technologies Used</h3>
                                    <div className={styles.techStack}>
                                        {project.stacks.map((tech, index) => (
                                            <span key={index} className={styles.techTag}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPage
