import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faDochub,
  faDocker,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import {  faStar } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer) // Temizlik fonksiyonu, zamanlayıcıyı temizler
    }
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

          <div>
            <p>
              I'm a very ambitious front-end developer looking for a role in an
              established IT company with the opportunity to work with the
              latest technologies on challenging and diverse projects.
            </p>

            <p>
              I'm quiet confident, naturally curious, and perpetually working on
              improving my chops one design problem at a time.
            </p>

            <p>
              If I had to describe myself in one sentence, it would be a
              technology obsessed who loves to research, learn, travel.
            </p>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className='stars'>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
          </div>
        
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#DD0060" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#000" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
