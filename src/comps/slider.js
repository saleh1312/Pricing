import React ,{useState} from 'react'
import { motion } from 'framer-motion'
import "./slider.css"

function Slider() {

    const [imgs,setimgs] = useState([
        'https://m.media-amazon.com/images/I/512CLp4b5xL._AC_SY580_.jpg',
        'https://m.media-amazon.com/images/I/41nJXP9OhCL._AC_SY580_.jpg',
        'https://upload.wikimedia.org/wikipedia/en/e/e8/Walking_Dead_Season_3_Official_Poster.jpg',
        'https://upload.wikimedia.org/wikipedia/en/6/6d/Walking_Dead_S7_Poster.jpg',
        'https://m.media-amazon.com/images/I/91ZDk+VOvHL._RI_.jpg'
    ])
    const [active,setactive]=useState(2)
    const [bounds,setbounds]=useState(1)
    const [trans,settrans]=useState(0)
    const right_btn =()=>{
        settrans(trans-270)
        setactive(active+1)
    }
    const left_btn =()=>{
        settrans(trans+270)
        setactive(active-1)
    }
   
  return (
    <div className='slider w-100 h-50 bg-success position-relative d-flex flex-row justify-content-center align-items-start'>
      
      <div className='w-0 h-100 position-relative d-flex flex-row justify-content-center align-items-center'>
        <button className='position-absolute left_btn' onClick={left_btn}>Left</button>
      </div>
      
      <div className='slider-images w-100 h-100 bg-dark d-flex flex-row justify-content-center align-items-center overflow-hidden'>
        {
            imgs.map((ele,index)=>{
                if (index===active){
                    return(
                        <motion.img animate={{x:trans ,scale:1.2,opacity:1,zIndex:5}} src={ele} className='image' key={index}></motion.img>
                    )

                }
                else if(index>=active-bounds && index<=active+bounds){
                    return(
                        <motion.img animate={{x:trans ,scale:1,opacity:0.7,zIndex:0}} src={ele} className='image' key={index}></motion.img>
                    )
                }
                else{
                    return(
                        <motion.img animate={{x:trans ,scale:0,opacity:0.7,zIndex:0}} src={ele} className='image' key={index}></motion.img>
                    )
                }
            })
        }
      </div>
      
      <div className='w-0 h-100 position-relative d-flex flex-row justify-content-center align-items-center'>
        <button className='position-absolute right_btn' onClick={right_btn}>Right</button>
      </div>
      
    </div>
  )
}

export default Slider
