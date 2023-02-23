import './about.scss';
import AnimatedLetters from '../Components/AnimatedLetters/AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGithub, faHtml5, faJsSquare, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {

  // const [letterClass, setLetterClass] = useState('text-animate')

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, []);

  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters 
              // letterClass={letterClass}
              strArray={['A','b','o','u','t','','U','s']}
              idx={15}
          />
        </h1>
        <p>
          this is some stuff
        </p>
        <p>
          this is some more stuff
        </p>

      </div>

      <div className='stage-cube-cont'>
        <div>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faLinkedin} color='#DD0031' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faReact} color='#DD0031' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faGithub} color='#DD0031' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faCss3} color='#DD0031' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faHtml5} color='#DD0031' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faJsSquare} color='#DD0031' />
            </div>
          </div>
        </div>
      </div>
    </div>
   )
}

export default About;