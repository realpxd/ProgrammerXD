"use client"
import React from 'react'
import styles from './ProjectsData.module.css'
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const ProjectsData = (props) => {
    const { id, index, imgSrc, imgw, imgh, title, description, live, github, isDesk, stacks } = props
    
    const handleCardClick = () => {
        // Use index if provided, otherwise fall back to id
        const routeIndex = index !== undefined ? index : id;
        window.location.href = `/projects/id/${routeIndex}`;
    };

    return (
        <div 
            className={styles.projectCard}
            onClick={handleCardClick}
        >
            <div className={styles.imageContainer}>
                <Image 
                    src={imgSrc} 
                    width={imgw} 
                    height={imgh} 
                    className={`${styles.projectImage} ${isDesk ? styles.desktopImage : ''}`} 
                    alt={title}
                />
                <div className={styles.imageOverlay}>
                    <div className={styles.overlayContent}>
                        <FiArrowRight className={styles.arrowIcon} />
                        <span>View Details</span>
                    </div>
                </div>
            </div>
            
            <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{title}</h3>
                <p className={styles.projectDescription}>{description}</p>
                
                {stacks && stacks.length > 0 && (
                    <div className={styles.techStack}>
                        {stacks.slice(0, 4).map((tech, index) => (
                            <span key={index} className={styles.techTag}>{tech}</span>
                        ))}
                        {stacks.length > 4 && (
                            <span className={styles.techTag}>+{stacks.length - 4}</span>
                        )}
                    </div>
                )}
                
                <div className={styles.projectLinks} onClick={(e) => e.stopPropagation()}>
                    {github && (
                        <a 
                            href={github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.linkButton}
                            aria-label="View on GitHub"
                        >
                            <FaGithub />
                            <span>Code</span>
                        </a>
                    )}
                    {live && (
                        <a 
                            href={live} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={`${styles.linkButton} ${styles.primaryButton}`}
                            aria-label="View live site"
                        >
                            <FaExternalLinkAlt />
                            <span>Live</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectsData
