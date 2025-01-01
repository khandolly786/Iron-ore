import React from 'react';
import './Marquee.css';
import image1 from '../assets/1.png';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg'; 
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';
import image7 from '../assets/7.jpg';
import image8 from '../assets/8.jpg';
 const Marquee =()=>{
    return(
        <div className='marquee-container'>
            <div className='marquee'>
                <img src={image1} alt='Iron Ore 1' className='marquee-img'/>
                <img src={image3} alt='Iron Ore 3'className='marquee-img marquee-size'/>
                <img src={image2} alt='Iron Ore 2' className='marquee-img'/>
                <img src={image1} alt='Iron Ore 1'className='marquee-img'/>
                <img src={image3} alt='Iron Ore 3'className='marquee-img'/>
                <img src={image2} alt='Iron Ore 2'className='marquee-img'/>
                <img src={image4} alt='Iron Ore 4'className='marquee-img'/>
                <img src={image5} alt='Iron Ore 5'className='marquee-img'/>
                <img src={image6} alt='Iron Ore 6'className='marquee-img'/>
                <img src={image7} alt='Iron Ore 7'className='marquee-img'/>
                <img src={image8} alt='Iron Ore 8'className='marquee-img'/>
            </div>
        </div>
    );
 };

 export default Marquee;