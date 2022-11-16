import React ,{useState} from 'react'
import { motion } from 'framer-motion'
import "./slider.css"
import PricingCrd from './pricingCrd'
import Test from './test'
function Slider() {

  const [imgs,setimgs] = useState([
        'https://m.media-amazon.com/images/I/512CLp4b5xL._AC_SY580_.jpg',
        'https://m.media-amazon.com/images/I/41nJXP9OhCL._AC_SY580_.jpg',
        'https://upload.wikimedia.org/wikipedia/en/e/e8/Walking_Dead_Season_3_Official_Poster.jpg',
        'https://upload.wikimedia.org/wikipedia/en/6/6d/Walking_Dead_S7_Poster.jpg',
        'https://m.media-amazon.com/images/I/91ZDk+VOvHL._RI_.jpg'
    ])
    const [data,setdata] = useState([
      {name:"Standard Package",price:50,lines:["1 page"] ,image:"incrmeme/1.png"},
      {name:"Standard Package",price:1100,lines:["200 page","support"],image:"incrmeme/2.png"},
      {name:"Premium Package",price:96581,lines:["55 page","sechduling"],image:"incrmeme/3.png"},
      {name:"Premium Package",price:1123,lines:["343 page","live chat"],image:"incrmeme/4.png"},
      {name:"Enterprise Package",price:214231,lines:["3354 page","nlp"],image:"incrmeme/5.png"},
      {name:"Enterprise Package",price:214231,lines:["3354 page","nlp"],image:"incrmeme/6.png"},
      {name:"Legned Package",price:214231,lines:["3354 page","nlp"],image:"incrmeme/7.png"},
    ])
    const [active,setactive]=useState(Math.floor(data.length/2))
    const [bounds,setbounds]=useState(1)
    const [trans,settrans]=useState(data.length%2 ===0? -150:0) // 0 for fardy numbers, 300 for zawgi numbers
    const right_btn =()=>{
        settrans(trans-270)
        setactive(active+1)
    }
    const left_btn =()=>{
        settrans(trans+270)
        setactive(active-1)
    }
   
  return (
    <div className='slider w-100 h-75 bg-success position-relative d-flex flex-row justify-content-center align-items-start'>
      
      <div className='w-0 h-100 position-relative d-flex flex-row justify-content-center align-items-center'>
        <button className='position-absolute left_btn btn mybtn' onClick={left_btn}>&#8592;</button>
      </div>
      
      <div className='slider-images w-100 h-100 bg-dark d-flex flex-row justify-content-center align-items-center overflow-hidden'>
        {
            data.map((ele,index)=>{
           
                if (index===active){
                 
                   return(
                      <Test animate={{x:trans ,scale:1.2,opacity:1,zIndex:5}} data={ele}/>
                   
                   )
                }
                else if(index>=active-bounds && index<=active+bounds){
                    return(
                        
                        <Test animate={{x:trans ,scale:1,opacity:0.7,zIndex:0}}  data={ele}/>
                    )
                }
                else{
                    return(
                  
                        <Test animate={{x:trans ,scale:0,opacity:0.7,zIndex:0}}  data={ele}/>
                    )
                }
            })
        }
      </div>
      
      <div className='w-0 h-100 position-relative d-flex flex-row justify-content-center align-items-center'>
        <button className='position-absolute right_btn btn mybtn' onClick={right_btn}>&#8594;</button>
      </div>
      
    </div>
  )
}

export default Slider
