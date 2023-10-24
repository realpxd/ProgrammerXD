import React, { useState } from 'react'
import styles from '../page.module.css'
import Image from 'next/image';

const SectionB = () => {


    const imgData = ["squid.png", "rocketDoge.png", "spotifyClone.png", "igClone.png"];
    const content = [
        {
            "Title": "Squid Game",
            "Description": "I am a self-taught developer, Constantly working on my Skills while Gaining a Solid Knowledge & Understanding in Development & Communication.",
            "Image": "squid.png"
        },
        {
            "Title": "Rocket Doge",
            "Description": "I am a self-taught developer, Constantly working on my Skills while Gaining a Solid Knowledge & Understanding in Development & Communication.",
            "Image": "rocketDoge.png"
        },
        {
            "Title": "Spotify Clone",
            "Description": "I am a self-taught developer, Constantly working on my Skills while Gaining a Solid Knowledge & Understanding in Development & Communication.",
            "Image": "spotifyClone.png"
        },
        {
            "Title": "Instagram Clone",
            "Description": "I am a self-taught developer, Constantly working on my Skills while Gaining a Solid Knowledge & Understanding in Development & Communication.",
            "Image": "igClone.png"
        }
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (index) => {
        setSelectedImage(index);
    };
    return (
        <>
            <div className={`${styles.container} ${styles.cB}`}>
                <Image className={styles.wave} src={"/wave.svg"} width={1} height={1}></Image>
                <div className={`${styles.block} ${styles.bB}`}>


                    <div className={styles.asideData}>
                        <div>
                            <h2>{selectedImage !== null ? content[selectedImage].Title : 'My Projects'}</h2>
                            <p>{selectedImage !== null ? content[selectedImage].Description : 'Check the projects I have worked on by selecting them from the list below'}</p>
                        </div>
                    </div>
                    <div className={styles.aside}>
                        {imgData.map((img, index) => (
                            <>
                                <div>
                                    <Image
                                        key={index}
                                        src={`/ai/${img}`}
                                        width={1000}
                                        height={800}
                                        onClick={() => handleImageClick(index)}
                                        className={selectedImage === index ? styles.selectedImage : 'image'}
                                        alt={`${img}`}
                                    />
                                    <p className={styles.imgTitle}> {content[index].Title} </p>
                                </div>
                            </>
                        ))}
                    </div>

                </div>

            </div>
        </>
    )
}

export default SectionB