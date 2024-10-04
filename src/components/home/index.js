import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './index.scss';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={Logo} alt="developer" />
          aritosh a
          <br />
          web developer
        </h1>
        <h2>Frontend Developer / Java Expert / Student</h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
    </div>
  )
}

export default Home
