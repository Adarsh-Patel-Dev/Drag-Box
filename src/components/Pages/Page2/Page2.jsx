import React from 'react'
import { useNavigate } from 'react-router-dom'
import { usePositionContext } from '../../Context/PositionContext';
import { FaAngleLeft } from "react-icons/fa";



function Page2() {
  const navigate = useNavigate()
  const { setBorder, positionDispatch } = usePositionContext();
  
  return (
    <div className='page'>
    <header className='nav'>
      <p className='page2-header'>Page2</p>
    </header>

    <main className='main'>
      <div className='main-container'>
        <p>I am Adarsh</p>
      </div>
    </main>
    
    <footer className='footer'>
     <button className='footer-btn'
      onClick={()=>{
        navigate("/",{replace: true})
        positionDispatch({type: "CENTER", payload: 'center'})
        setBorder(true)

      }}> <FaAngleLeft/>Back
     </button>
    </footer>
    </div>
  )
}

export  {Page2}