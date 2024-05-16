import React, { useEffect, useState } from 'react'
import { useQueryClient, useQuery } from "react-query"
import { DNA } from "react-loader-spinner"
import styles from '@/app/page.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from "react-icons/fa";

const ProjectPage = (props) => {
    var { id } = props
    console.log(id)
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
        <div className={styles.projectPage}>

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
            {projectsData &&
                projectsData &&
                projectsData
                    .filter((_, index) => index == id)
                    .map((item, index) => {
                        return (
                            <div className={styles.projectPageContainer} key={item?.id}>
                                <div className={styles.projectPageLeft}>
                                    <Image src={item?.imgSrc} width={item?.imgw + 250} height={item?.imgh + 250} className={item?.isDesk && styles.imgDesk} alt={item?.title} />
                                    <h1>{item?.title}</h1>
                                </div>
                                <div className={styles.projectPageData}>
                                    <h3>About Project : </h3>
                                    <p className={styles.projectDescription}>{item?.description}</p>
                                    <h3>Tech Stacks : </h3>
                                    <div className={styles.projectPageStack}>
                                        {item?.stacks.map((st) => {
                                            return (
                                                <p key={st}>{st}</p>
                                            )
                                        })}
                                    </div>
                                    <div className={styles.projectPageBtns}>
                                        <h3>Links : </h3>
                                        {item?.github && <Link href={item.github}><button><FaGithub /> Github</button></Link>}
                                        {item?.live && <Link href={item.live}><button><FaLink /> Live</button></Link>}
                                    </div>
                                </div>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default ProjectPage