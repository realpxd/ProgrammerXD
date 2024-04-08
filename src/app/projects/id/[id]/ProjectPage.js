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
                                <Image src={item?.imgSrc} width={item?.imgw + 50} height={item?.imgh + 50} className={item?.isDesk && styles.imgDesk} alt={item?.title} />
                                <h1>{item?.title}</h1>
                                <div className={styles.projectPageData}>
                                    <p>{item?.description}</p>
                                    <div className={styles.projectPageStack}>
                                        {item?.stacks.map((st) => {
                                            return (
                                                <p key={st}>{st}</p>
                                            )
                                        })}
                                    </div>
                                    <div className={styles.projectPageBtns}>
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