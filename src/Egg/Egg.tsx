import React, { useState } from 'react';

import './Egg.css';

import Full_Egg from './Images/FullEgg.png';
import crack_1 from './Images/Crack 1.png';
import crack_2 from './Images/Crack 2.png';
import crack_3 from './Images/Crack 3.png';
import crack_4 from './Images/Crack 4.png';
import crack_5 from './Images/Crack 5.png';
import crack_6 from './Images/Crack 6.png';
import crack_7 from './Images/Crack 7.png';
import Left_Half from './Images/Left Half.png';
import Right_Half from './Images/Right Half.png';
import Boy from './Images/boy.png';
import Girl from './Images/girl.png';

import SubTitle from './SubTitle';
import PreLoadImages from './PreLoadImages';


const Egg: React.FC = () => {
  const [src, setSrc] = useState(Full_Egg);
  const [count, setCount] = useState(0);

  let isBoy = true;
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('srf');
  if(myParam && myParam === "preach"){
    isBoy = false;
  }
  
  const images = [Full_Egg, crack_1, crack_2,crack_3,crack_4,crack_5,crack_6,crack_7, Left_Half, Right_Half, Boy, Girl];

  const click = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    switch(count){
        case 0: setSrc(crack_1);
        break;
        case 3: setSrc(crack_2);
        break;
        case 5: setSrc(crack_3);
        break;
        case 7: setSrc(crack_4);
        break;
        case 9: setSrc(crack_5);
        break;
        case 11: setSrc(crack_6);
        break;
        case 13: setSrc(crack_7);
        break;
        case 15: setSrc(isBoy? Boy: Girl);
        break;
    }
    setCount(count + 1);
  }


  let className = "Egg";
  if(count >= 16){
    className = "Egg-boygirl";
  }
  const max = 16;

  return (
      <div onClick={click} className="Page-container">
      {count >= max && <>
        <img src={Left_Half} className="Egg-left" alt="Egg" />
        </>}
    <div   className="Container">
        <img  src={src} className={className} alt="Egg" />
    </div>
    
    {count >= max && <>
        <img src={Right_Half} className="Egg-right" alt="Egg" />
        </>}
      <SubTitle count={count} max={max} isBoy={isBoy} />
      <PreLoadImages images={images} />
    </div>
  );
}

export default Egg;
