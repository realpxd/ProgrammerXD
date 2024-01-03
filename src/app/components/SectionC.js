import React from 'react'
import styles from '../page.module.css'
import Image from 'next/image';
import Link from 'next/link';

const SectionC = () => {
    return (
        <>
            <div className={`${styles.container} ${styles.cC}`}>
                <div className={`${styles.block} ${styles.bC}`} id='projects'>
                    <h2>Projects</h2>
                    <div className={styles.projectsWrapper}>
                        <div className={styles.projectsContainer}>
                            <Image src={"/projects/wod_tp.png"} width={220} height={200} quality={90} ></Image>
                            <div className={styles.projectData}>
                                <h3>WOD</h3>
                                <p>WOD - Whispers of Deception , is a Android Mobile App Project that comes with a unique idea of Voice communication among peoples from world .</p>
                                <div>
                                    <Link href="https://github.com/realpxd/WOD" className={styles.projectBtns}><button>Github</button></Link>
                                    <Link href="https://github.com/realpxd/WOD/blob/master/app/release/app-release.apk" className={styles.projectBtns}><button>Live</button></Link>
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
                                <Link href="https://gphisar.ac.in/wp-content/uploads/2023/10/GPHisar.apk" className={styles.projectBtns}><button>Live</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.projectsContainer}>
                            <Image src={"/projects/ecom.png"} width={220} height={200} className={styles.imgDesk}></Image>
                            <div className={styles.projectData}>
                                <h3>E-Commerce</h3>
                                <p>It is a E-Commerce Website template that includes admin panel for products listing , product deleting etc.</p>
                                <div>
                                <Link href="https://github.com/realpxd/s-ecom-project" className={styles.projectBtns}><button>Github</button></Link>
                                <Link href="https://realpxd.github.io/s-ecom-project/" className={styles.projectBtns}><button>Live</button></Link>
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