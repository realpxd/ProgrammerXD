import React from 'react'
import styles from '@/app/page.module.css'
import Link from 'next/link';
import { MdSelectAll } from "react-icons/md";
import ProjectsData from '../projects/ProjectsData';
import { DNA } from "react-loader-spinner"

const SectionC = ({ projectsData, isLoading, isError, error }) => {
    console.log(projectsData);
    return (
        <>
            <div className={`${styles.container} ${styles.cC}`} style={{ position: 'relative' }}>
                <div className={`${styles.block} ${styles.bC}`} id='projects'>
                    <h2>Projects</h2>
                    <div className={styles.projectsWrapper}>
                        {
                            isLoading &&
                            <DNA
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="dna-loading"
                                wrapperStyle={{}}
                                wrapperClass="dna-wrapper"
                            />
                        }
                        {
                            isError &&
                            error.message
                        }
                        {projectsData &&
                            projectsData
                                .filter((_, index) => [0, 1, 3].includes(index))
                                .map((item, index) => {
                                    return (
                                        <ProjectsData
                                            id={index}
                                            imgSrc={item.imgSrc}
                                            imgw={item.imgw}
                                            imgh={item.imgh}
                                            title={item.title}
                                            description={item.description}
                                            live={item?.live}
                                            github={item?.github}
                                            isDesk={item?.isDesk}
                                        />
                                    );
                                })
                        }
                    </div>

                </div>
                <Link href={'/projects'} className={styles.pjBtn}>
                    <button><MdSelectAll />View All</button>
                </Link>
            </div>
        </>
    )
}

export default SectionC