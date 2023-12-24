import React, { useEffect, useState } from 'react';
import styles from '../page.module.css';
import Model from './ModelObj.js';

const SectionA = () => {
  const [text, setText] = useState('');
  const arr = ['Website', 'Bedroom', 'Balcony' , 'Kitchen' , 'Teddy' , 'Shoes' , 'Potato' , 'Fridge' , 'Computer' , 'Wardrobe'];
  const [counter, setCounter] = useState(0);
  var isTextEmpty = false;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prevCounter => (prevCounter + 1) % arr.length);
    }, 2000);

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, [arr.length]);

  useEffect(() => {
    let intervalId;
    const clearText = () => {
      let index = 0;
     intervalId = setInterval(() => {
        if (text.length > 0) {
          setText(prevText => prevText.slice(0, -1)); // Remove one character at a time
        } else {
          clearInterval(intervalId);
          isTextEmpty = true;
          index = (index + 1) % arr.length;
          setText(arr[index]); // Set new text from the array
        }
      }, 250); // Speed of deletion, adjust as needed
    };

    clearText();

    return() => {
        if(isTextEmpty){
            clearInterval(intervalId);
            setText(arr[counter])
            let charArr = [];
            let charStr;

            arr[counter].split("").forEach((char , index) => {
                charArr.push(...char)
                charStr = charArr.join("")
                
                setText(charStr)
                console.log(charStr)
            })

            console.log(charArr)
            console.log(charStr)
        }else{
            clearInterval(intervalId);

        }
    }
  }, [counter, arr]);

  return (
    <>
      <div className={`${styles.container} ${styles.cA}`} id='home'>
        <div className={`${styles.block} ${styles.bA}`}>
          <h1>Debugging My House</h1>
          <p>Found Some Glitches in {text}</p>
        </div>
        <Model />
      </div>
    </>
  );
};

export default SectionA;
