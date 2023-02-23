import './about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../Components/AnimatedLetters/AnimatedLetters';
import { faCss3, faGithub, faHtml5, faJsSquare, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {

  // const [letterClass, setLetterClass] = useState('text-animate')

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, []);

  return (

    <main className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters 
              // letterClass={letterClass}
              strArray={['A','b','o','u','t','','U','s']}
              idx={15}
          />
        </h1>
        <p>
        We are a group of bootcamp coders new to REACT JS.
        </p>
        <p>
        This is the final project of a 16 week Bootcamp where we were introduced to Frontend Web Development.
        </p>

      </div>

      <div className='stage-cube-cont'>
        <div>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faLinkedin} color='#DD0031' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faGithub} color='#ec4d28' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faHtml5} color='#f06529' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
            </div>
          </div>
        </div>
      </div>
    </main>
   )
}

export default About;
