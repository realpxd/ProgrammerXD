import React, { useEffect, useState } from 'react'
import { useQueryClient, useQuery } from "react-query"
import styles from '@/app/page.module.css'
import Image from 'next/image';

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
    console.log(projectsData);



    return (
        <>
            {projectsData &&
                projectsData &&
                projectsData
                    .filter((_, index) => index == id)
                    .map((item, index) => {
                        return (
                            <p>{item.imgSrc}</p>
                        )
                    })
            }
        </>
    )
}

export default ProjectPage