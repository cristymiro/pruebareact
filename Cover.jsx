
import fondoPantalla from '../media/navidad.mp4';
import './Cover.css';
import React, {useRef, useState} from 'react'

function Cover() {

  const [isFinished, setIsFinished] = useState(false)
  const handleVideoEnd = (event) => {
    event.preventDefault();
    setIsFinished(true)
  }

  const renderButton = () => {
    if(isFinished){
      return(
        <>
          <button className="video">Hola</button>
          <button className="video">Hola</button>
          <button className="video">Hola</button>
          <button className="video">Hola</button>
          <button className="video">Hola</button>


        </>

      )
    }
    return null;
  }


  return (
    <div className="cover-container">
        <video onEnded={handleVideoEnd}  className='video' src={fondoPantalla} autoPlay muted />
       
       {renderButton()}
    </div>
  )
}

export default Cover;