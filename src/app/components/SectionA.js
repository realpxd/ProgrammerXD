import React from 'react'
import styles from '../page.module.css'
import Model from './ModelObj.js'

const SectionA = () => {
    return (
        <>
            <div className={`${styles.container} ${styles.cA}`}>
                <div className={`${styles.block} ${styles.bA}`}>
                    <h1>Debugging My House</h1>
                    {/* <p>I am 19 years old Web Developer, Codding is the thing in which I was always interested in 
                        and I am always ready to grab new skills. I am a self-taught developer, 
                        Constantly working on my Skills while 
                        Gaining a Solid Knowledge & Understanding in 
                        Development & Communication.</p> */}
                        <p>Found Some Glitches in Wardrobe</p>
                </div>
                <Model />

            </div>
        </>
    )
}

export default SectionA