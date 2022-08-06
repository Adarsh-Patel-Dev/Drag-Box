import React from 'react'
import { DraggableBox } from '../DraggableBox/Draggable'
import "./display.css"

function Display() {
  return (
    <div className='display-container'>
    <DraggableBox/>
    </div>
  )
}

export { Display }