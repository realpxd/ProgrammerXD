import React from 'react'
import styles from '@/app/page.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from "react-icons/fa";

const ProjectsData = (props) => {
    const { id, imgSrc, imgw, imgh, title, description, live, github, isDesk, lastIndex } = props
    console.log(props)
    return (
        <Link href={`/projects/id/${lastIndex ? lastIndex : id}`}>
            <div className={styles.projectsContainer} key={id}>
                <Image src={imgSrc} width={imgw} height={imgh} className={isDesk && styles.imgDesk} alt={title}></Image>
                <div className={styles.projectData}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div>
                        {github && <Link href={github} className={styles.projectBtns}><button><FaGithub /></button></Link>}
                        {live && <Link href={live} className={styles.projectBtns}><button><FaLink /></button></Link>}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectsData