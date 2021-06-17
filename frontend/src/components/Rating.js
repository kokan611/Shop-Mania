import React from 'react'
import propType from "prop-types";

const Rating = ({value,text,color}) => {
    let valueArr=[];
    for(let i=0;i<5;i++)
      valueArr[i]=i;
   
    return (
        <div className="rating">
        <span>
    
        {    valueArr.map(index => {
         return <i style={{color}}
          className={value>=index+1? 'fas fa-star':value>=index+0.5?'fas fa-star-half-alt':'far fa-star'}></i>
            })
    }
          
        </span>
        <span> {text&&text}</span>
            
        </div>
    )
}
Rating.defaultProps={
    color:`#f8e825`,
}
Rating.propType={
    value: propType.number.isRequired,
    text: propType.string.isRequired,
    color: propType.string,
    
}

export default Rating
