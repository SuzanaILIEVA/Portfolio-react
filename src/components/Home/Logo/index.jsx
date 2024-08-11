import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  

  return (
    <div className="logo-container">
        <h2 className='logo-s rotate-animation'>S</h2>
     </div>
     )
}

export default Logo