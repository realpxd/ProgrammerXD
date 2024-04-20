import React from 'react'
import styles from '@/app/page.module.css'
import Model from '@/app/components/ModelObj';
import Image from 'next/image';

const SectionA = () => {
    return (
        <>
            <div className={`${styles.container} ${styles.cB}`}>
                <Image className={styles.pfp} src={"/me_hd.png"} width={250} height={300}></Image>
                <div className={`${styles.block} ${styles.bB}`}>
                    <h2>About Me</h2>
                    <p>I am a 20years old passionate software developer and a strong team player with rapid learning abilities. And as a self-taught developer am continuously learning various tools and technologies to get the best out of me.</p>
                </div>
            </div>
        </>
    )
}

export default SectionA