import React from 'react'
import './card.css'

const Card = ({ img, description, count1, count2, button1, button2 ,button3}) => {
    return (
        <div className='card'>
             <h5 className='pos'>{button3}</h5>
            <h1><span className="count3">invaild answer</span><span className="count4">correct answer</span></h1>
            <h1><span className="count1">{count1}</span><span className="count2">{count2}</span></h1>
            <img src={img} alt={description} />
            <h2>{description}</h2>
            <div className='fixit'>
            <h5 className='fix5'>{button1}</h5>
            <h5 className='fix5'>{button2}</h5>
            </div>
           
         
        </div>
    )
}

export default Card
