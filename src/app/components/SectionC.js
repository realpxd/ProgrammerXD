import React from 'react'
import styles from '../page.module.css'
import Image from 'next/image';

const SectionC = () => {
    return (
        <>
            <div className={`${styles.container} ${styles.cC}`}>
                <Image className={styles.wave} src={"/wave.svg"} width={400} height={300}></Image>
                <h2>Statistics</h2>
                <div className={`${styles.block} ${styles.bC}`}>


                </div>
            </div>
        </>
    )
}

export default SectionC