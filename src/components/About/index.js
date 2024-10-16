import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hi! I’m a high school student with a passion for creating solutions
            through computer science and logical problem-solving. I thrive on
            the process of turning ideas into reality, especially when the
            solution isn’t immediately obvious. The thrill of overcoming
            challenges and the knowledge I gain along the way keep me excited
            about coding.
          </p>
          <p>
            I’ve earned a state award in Fundamentals of Web Design through BPA,
            and I’ve had the opportunity to lead a district-wide hackathon,
            where I built a website and learned the ins and outs of SEO and
            backend development to improve site rankings. This led to another
            exciting project—creating a website for the entire Illinois debate
            community.
          </p>
          <p>
            When I’m not working on web development, I enjoy solving problems as
            part of my school’s math team. As I look ahead to college and
            internships, I’m eager to further develop my skills in artificial
            intelligence, data science, and cybersecurity. My foundation in
            math, along with the influence of STEM courses and self-learning
            through platforms like YouTube, continues to drive my passion for
            technology.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
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
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default About
