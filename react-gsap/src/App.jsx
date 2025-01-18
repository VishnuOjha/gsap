import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {

  useGSAP(() => {
      gsap.to('.box', {
        x: 1000,
        duration: 1,
        delay: 1,
        ease: 'power1.inOut',
       
      })
  })
  return (

   
    <main>
      <div className="box">

      </div>
    </main>
  )
}

export default App