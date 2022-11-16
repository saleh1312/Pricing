import { motion } from 'framer-motion'
import React from 'react'
import "./pricingCrd.css"
function PricingCrd(props) {
  return (
    <motion.div animate={props.animate} className="card d-flex flex-column bg-light">
      <div className='w-100 d-flex flex-row justify-content-center align-items-center' style={{height:"20%"}}>
        <img src={props.data.image} alt="Girl in a jacket" width="50" height="50" style={{ borderRadius: '25px'}}/>
      </div>
      <div className='w-100 d-flex flex-row justify-content-center align-items-center' style={{height:"20%"}}>
        <h3 style={{fontFamily:"Buffalo",fontWeight:"Bold"}}>{props.data.name}</h3>
      </div>
      <div className='w-100 d-flex flex-column justify-content-start align-items-center' style={{height:"50%"}}>
        {
          props.data.lines.map((line)=>{
            return ( <h5 style={{fontFamily:"Buffalo",color:"#2c786c"}}>{line}</h5> )
          })
        }
      </div>
      <div className='w-100 d-flex flex-row justify-content-center align-items-center' style={{height:"10%"}}>
          <button className='contact w-50 h-75 btn btn-warning d-flex flex-row justify-content-center align-items-center'>
            {props.data.price + " EGP"}
          </button>
      </div>
        
    </motion.div>
  )
}

export default PricingCrd
