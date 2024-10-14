import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
//import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timeout)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_jhsimck', 'template_az4uh2c', form.current, {
        publicKey: 'ozihklGro1N1JCyT7',
      })
      .then(
        () => {
          alert('Email sent!')
          window.location.reload(false)
        },
        (error) => {
          alert('Failed to send email, Please try again', error.text)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm interested in AI, Data, and Cybersecurity. Any unrealistic and
            ambitious large projects are appreciated.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        {/* <div className="info-map">
          Paritosh Vaghasiya,
          <br />
          United States,
          <br />
          Schaumburg
          <br />
          Illinois, 60193
          <br />
          <span>Paritoshv08@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[42.016281, -88.080002]} zoom={12}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[42.016281, -88.080002]}>
              <Popup>
                A hacker lives here, come and hack :) <br />
              </Popup>
            </Marker>
          </MapContainer>
        </div> */}
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default Contact
