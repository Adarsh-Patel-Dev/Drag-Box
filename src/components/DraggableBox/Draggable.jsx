import React from 'react'
import "./draggableBox.css"

function DraggableBox() {
  return (
    <div className='floating-box'>
        <div className='floating-box-pos'>
        <p>Center</p>
        </div>
        <div className='floating-box-msg'>
        <p>Drag me Around...</p>
        </div>

    </div>
  )
}

export  { DraggableBox }