import React from 'react'
import './MobileList.css'
function MobileList(props) {
    const {image, title, price} = props;
  return (
    <div className='main'>
      <img className = 'image' src = {image}/>
      <div className='mobile-info'>
        <h2>{title}</h2>
        <p>{price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default MobileList
