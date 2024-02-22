import React from 'react'
import styles from '@/app/page.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from "react-icons/fa";
import { MdSelectAll } from "react-icons/md";

const Projects = () => {
    return (
        <>
            <div className={`${styles.container} ${styles.cC}`} style={{ height: '160vh' }}>
                <div className={`${styles.block} ${styles.bC}`} id='projects'>
                    <h2>Projects</h2>
                    <div className={styles.projectsWrapper} style={{ width: '80vw' }}>
                        <div className={styles.projectsContainer}>
                            <Image src={"/projects/session.png"} width={220} height={200} quality={90} ></Image>
                            <div className={styles.projectData}>
                                <h3>Session</h3>
                                <p>Session is a social media app that allows users to share their thoughts with the world. It is a platform where users can chat with others, share their experiences, and discover new things. Session is designed to be simple, intuitive, and fun to use.</p>
                                <div>
                                    <Link href="https://github.com/realpxd/Session" className={styles.projectBtns}><button><FaGithub /></button></Link>
                                    <Link href="https://github.com/realpxd/Session" className={styles.projectBtns}><button><FaLink /></button></Link>
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
                                    <Link href="https://gphisar.ac.in/" className={styles.projectBtns}><button><FaLink /></button></Link>
                                </div>
                            </div>
                        </div>

                        <div className={styles.projectsContainer}>
                            <Image src={"/projects/wod_tp.png"} width={220} height={200} quality={90} ></Image>
                            <div className={styles.projectData}>
                                <h3>WOD</h3>
                                <p>WOD - Whispers of Deception , is a Android Mobile App Project that comes with a unique idea of Voice communication among peoples from world .</p>
                                <div>
                                    <Link href="https://github.com/realpxd/WOD" className={styles.projectBtns}><button><FaGithub /></button></Link>
                                    <Link href="https://github.com/realpxd/WOD/blob/master/app/release/app-release.apk" className={styles.projectBtns}><button><FaLink /></button></Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.projectsContainer}>
                            <Image src={"/projects/ngl-user.png"} width={220} height={200} className={styles.imgDesk}></Image>
                            <div className={styles.projectData}>
                                <h3>NGL - Clone</h3>
                                <p>NGL is a anonymous-message sharing website that allow users to share their thoughts and messages without revealing their name or identity.</p>
                                <div>
                                    <Link href="https://github.com/realpxd/Ngl-Clone" className={styles.projectBtns}><button><FaGithub /></button></Link>
                                    <Link href="https://ngl-clone-frontend.vercel.app/" className={styles.projectBtns}><button><FaLink /></button></Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.projectsContainer}>
                            <Image src={"/projects/ecom.png"} width={220} height={200} className={styles.imgDesk}></Image>
                            <div className={styles.projectData}>
                                <h3>E-Commerce</h3>
                                <p>It is a E-Commerce Website template that includes admin panel for products listing , product deleting etc.</p>
                                <div>
                                    <Link href="https://github.com/realpxd/s-ecom-project" className={styles.projectBtns}><button><FaGithub /></button></Link>
                                    <Link href="https://realpxd.github.io/s-ecom-project/" className={styles.projectBtns}><button><FaLink /></button></Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.projectsContainer}>
                            <Image src={"/projects/spotify-clone.png"} width={220} height={200} className={styles.imgDesk}></Image>
                            <div className={styles.projectData}>
                                <h3>Spotify Clone</h3>
                                <p>Spotify is a website where the users can listen to songs and interact with the playlists, and control the songs volume, current time, play/pause etc. </p>
                                <div>
                                    <Link href="https://github.com/realpxd/Spotify-Clone" className={styles.projectBtns}><button><FaGithub /></button></Link>
                                    <Link href="https://spotify-clone-phi-puce.vercel.app/" className={styles.projectBtns}><button><FaLink /></button></Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.projectsContainer}>
                            <Image src={"/projects/xclone-home.png"} width={220} height={200} className={styles.imgDesk}></Image>
                            <div className={styles.projectData}>
                                <h3>X - Clone</h3>
                                <p>X (formerly twitter) is a social media app used to share our thoughts and communicate with the world in a very effecient way.</p>
                                <div>
                                    <Link href="https://github.com/realpxd/X-Clone" className={styles.projectBtns}><button><FaGithub /></button></Link>
                                    <Link href="https://x-clone-pxd.vercel.app/" className={styles.projectBtns}><button><FaLink /></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects