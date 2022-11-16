import React from 'react'
import "./test.scss"
import { motion } from 'framer-motion'
function Test(props) {
  return (
 
        <motion.div animate={props.animate} className="wrapper">
        <div className="clash-card barbarian">
        <div className="clash-card__image ">
            <img src={props.data.image} width={300} height={230} alt="barbarian" />
        </div>
  
        <div className="clash-card__unit-name" >{props.data.name}</div>
        <div className="clash-card__unit-description">
            The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.
        
        
        </div>

        <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
            <div className="one-third">
            <div className="stat">20<sup>S</sup></div>
            <div className="stat-value">Trial days</div>
            </div>
            
            <div className="one-third">
            <button className='btn buybtn'>Buy</button>
            </div>

            <div className="one-third no-border">
            <div className="stat" >{props.data.price}</div>
            <div className="stat-value">Cost</div>
            </div>

        </div>

        </div>
    </motion.div>
  

  )
}

export default Test
