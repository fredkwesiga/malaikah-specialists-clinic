import React from 'react'
import { useEffect, useRef } from 'react'
import './Landing.css'
import { init } from 'ityped'

function Landing() {
  const textRef = useRef()

  useEffect(() => {
    console.log(textRef);
    init(textRef.current, {
      showCursor: false,
      typeSpeed: 100,
      backDelay: 5000,
      disableBackTyping: false,
      loop: true,

      strings: ['Quality Innovative', 'Healthcare Delivery'],
    })
  }, [])
  return (
    <>
      <div className="video-container">
        <img src="/images/hospital.jpeg" alt="doctor" id="himg"/>
       
          <div id="caption">
            <h1 className="htext">
              <span ref={textRef}></span>
            </h1>
          </div>
          </div>
    </>
  );
}

export default Landing;
