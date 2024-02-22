import React from 'react'
import styles from '@/app/page.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from "react-icons/fa";
import { MdSelectAll } from "react-icons/md";

const SectionC = () => {
    return (
        <>
            <div className={`${styles.container} ${styles.cC}`} style={{position:'relative'}}>
                <div className={`${styles.block} ${styles.bC}`} id='projects'>
                    <h2>Projects</h2>
                    <div className={styles.projectsWrapper}>
                        <div className={styles.projectsContainer}>
                            <Image src={"/projects/session.png"} width={220} height={200} quality={90} ></Image>
                            <div className={styles.projectData}>
                                <h3>Session</h3>
                                <p>Session is a social media app that allows users to share their thoughts with the world. It is a platform where users can chat with others, share their experiences, and discover new things. Session is designed to be simple, intuitive, and fun to use.</p>
                                <div>
                                    <Link href="https://github.com/realpxd/Session" className={styles.projectBtns}><button><FaGithub/></button></Link>
                                    <Link href="https://github.com/realpxd/Session" className={styles.projectBtns}><button><FaLink/></button></Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.projectsContainer}>
                            <Image src={"/projects/gph_tp.png"} width={220} height={200} ></Image>
                            <div className={styles.projectData}>
                                <h3>GPHisar</h3>
                                <p>GPHisar is an Official Government Institute Educational App. This app helps students and staff to quickly access Study Materials and News & Anouncements from the Institute. </p>
                                <div>
                                {/* <Link href="https://github.com/realpxd/WOD" className={styles.projectBtns}><button>Github</button></Link> */}
                                <Link href="https://gphisar.ac.in/" className={styles.projectBtns}><button><FaLink/></button></Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.projectsContainer}>
                            <Image src={"/projects/ngl-user.png"} width={220} height={200} className={styles.imgDesk}></Image>
                            <div className={styles.projectData}>
                                <h3>NGL - Clone</h3>
                                <p>NGL is a anonymous-message sharing website that allow users to share their thoughts and messages without revealing their name or identity.</p>
                                <div>
                                <Link href="https://github.com/realpxd/Ngl-Clone" className={styles.projectBtns}><button><FaGithub/></button></Link>
                                <Link href="https://ngl-clone-frontend.vercel.app/" className={styles.projectBtns}><button><FaLink/></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Link href={"/projects"} className={styles.pjBtn}><button><MdSelectAll />View All</button></Link>
            </div>
        </>
    )
}

export default SectionC