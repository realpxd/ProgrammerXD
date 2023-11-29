import React from 'react'
import styles from '../page.module.css'
import Model from './ModelObj.js'
import Image from 'next/image';

const SectionA = () => {
    return (
        <>
            <div className={`${styles.container} ${styles.cB}`}>
                <Image className={styles.pfp} src={"/me_hd.png"} width={250} height={300}></Image>
                <div className={`${styles.block} ${styles.bB}`}>
                    <h2>About Me</h2>
                    <p>I am 19 years old Developer, Codding is the thing in which I was always interested in 
                        and I am always ready to grab new skills. I am a self-taught developer, 
                        Constantly working on my abilities while 
                        Gaining a Solid Knowledge & Understanding in 
                        Development & Communication.</p>
                </div>

            </div>
        </>
    )
}

export default SectionA