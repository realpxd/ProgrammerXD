import React from 'react'
import { useQuery } from 'react-query'
import styles from '@/app/page.module.css'
import ProjectsData from './ProjectsData';
import { DNA } from "react-loader-spinner"

const Projects = () => {


    const { data: projectsData, isLoading, isError, error } = useQuery('projects', fetchProjectsData);

    async function fetchProjectsData() {
        const response = await fetch('../../projects/projectsData.json');
        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }
        return response.json();
    }
    // console.log(projectsData);

    return (
        <>
            <div className={`${styles.container} ${styles.cC}`} style={{ height: '160vh' }}>
                <div className={`${styles.block} ${styles.bC}`} id='projects'>
                    <h2>Projects</h2>
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
                    <div className={styles.projectsWrapper} style={{ width: '80vw' }}>
                        {projectsData &&
                            projectsData.map((item, index) => {
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

                        {/* <ProjectsData
                            imgSrc={}
                            imgw={}
                            imgh={}
                            title={}
                            description={}
                            live={}
                            github={}
                            isDesk={true}
                        /> */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects