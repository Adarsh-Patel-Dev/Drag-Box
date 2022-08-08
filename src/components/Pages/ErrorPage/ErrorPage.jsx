import React from 'react'
import { useNavigate } from "react-router-dom";
import { usePositionContext } from "../../Context/PositionContext";
import { FaAngleLeft } from "react-icons/fa";
import { Footer } from '../../Footer/Footer';

function ErrorPage() {
  const navigate = useNavigate();
  const { setBorder, positionDispatch } = usePositionContext();
  return (
    <div className='page'>
         <header className="header-container nav">
        <p className="page2-header">ErrorPage</p>
        </header>
        <main className="main">
          <div className="main-container"> 
          <h2>404! Page not found</h2>
          </div>
          </main>

        
      <Footer url="/" btnText="Back to Home" icon ="left"/>
    </div>
  )
}

export default ErrorPage