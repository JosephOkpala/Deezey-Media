import logodark from '../img/deezey_media_logo_dark.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <img src={logodark} alt="Deezey media logo" />
        <div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div>
          <Link>About Us</Link>
          <Link>Services</Link>
          <Link>Portfolio</Link>
          <Link>Team</Link>
          <Link>Testimonials</Link>
          <Link>Contact Us</Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
