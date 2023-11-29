import React from 'react'
import styles from '../page.module.css'
import Image from 'next/image';

const SectionC = () => {
    return (
        <>
            <div className={`${styles.container} ${styles.cC}`}>
                <div className={`${styles.block} ${styles.bC}`}>
                    <h2>Projects</h2>
                    <div className={styles.projectsWrapper}>
                        <div className={styles.projectsContainer}>
                            <Image src={"/me.webp"} width={250} height={300} ></Image>
                            <div className={styles.projectData}>
                                <h3>Project 1</h3>
                                <p>Project Description</p>
                                <div>
                                    <button>Github</button>
                                    <button>Live</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.projectsContainer}>
                            <Image src={"/me.webp"} width={250} height={300} ></Image>
                            <div className={styles.projectData}>
                                <h3>Project 2</h3>
                                <p>Project Description</p>
                                <div>
                                    <button>Github</button>
                                    <button>Live</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.projectsContainer}>
                            <Image src={"/me.webp"} width={250} height={300} ></Image>
                            <div className={styles.projectData}>
                                <h3>Project 3</h3>
                                <p>Project Description</p>
                                <div>
                                    <button>Github</button>
                                    <button>Live</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SectionC