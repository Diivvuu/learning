import React from 'react'
import MobileList from './MobileList'
import List from  './List.json'

function Mobile() {
  return (
    <div>
      {List.map((e)=>{
        return <MobileList
        image = {e.image}
        title = {e.title}
        price = {e.price}
        />
      })}
    </div>
  )
}

export default Mobile
