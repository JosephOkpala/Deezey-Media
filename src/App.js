import { useRef } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import logodark from './img/Deezey-media-logo.png';
import threeline from './img/3Line.png';
import ala from './img/ala_logo.png';
import bap from './img/BAP.png';
import chevron from './img/Chevron.png';
import chickenrepublic from './img/chickenrepublic.png';
import cwg from './img/CWG.png';
import dorman from './img/dorman.png';
import fincra from './img/fincra.png';
import fmn from './img/FMN.png';
import globus from './img/globusbank.png';
import ihs from './img/ihs.png';
import mrchef from './img/MrChef.png';
import sao from './img/SAO.png';
import unitybank from './img/unitybank.png';
import youverify from './img/youverify.png';
import emmanuel from './img/emmanuel.png';
import ronald from './img/ronald.png';
import emordi from './img/emordi.png';
import precious from './img/precious.png';
import drone from './img/drone-guy.png';
import ebuka from './img/ebuka.png';
import joseph from './img/joseph.png';
import timothy from './img/timothy.png';
import deezey from './img/Deezey-Media-Logo-footer.png';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import twitter from './img/twitter.png';
import linkedin from './img/linkedin.png';
import tiktok from './img/tik-tok.png';
import emmanuell from './img/emmanuel-landscape.png';
import josephh from './img/joseph-landscape.png';
import './Home.css';
import './About.css';
import './Services.css';
import './Clients.css';
import './Team.css';
import './Footer.css';
import './App.css';
import './Media.css';

const Home = () => {
  return (
    <div className="home-page">
      <div>
        <motion.h4
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: 'spring' }}
          viewport={{ once: true }}
        >
          DEEZEY MEDIA IS A VERSATILE MEDIA COMPANY
        </motion.h4>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring' }}
          viewport={{ once: true }}
        >
          We create new media content for <br /> brands and individuals.
        </motion.h1>
        <motion.h4
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, type: 'spring' }}
          viewport={{ once: true }}
        >
          EXPLORE OUR EXPANDING DIGITAL CONTENT PLATFORM...
        </motion.h4>
      </div>
    </div>
  );
};

const App = () => {
  const aboutus = useRef(null);
  const services = useRef(null);
  const team = useRef(null);
  const footer = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      <div className="nav-shadow">
        <nav>
          <img className="logodark" src={logodark} alt="Deezey media logo" />
          <div className="burger">
            <div className="line-one"></div>
            <div className="line-two"></div>
            <div className="line-three"></div>
          </div>
          <div className="navlinks">
            <ul>
              <motion.li
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, type: 'spring' }}
                onClick={() => scrollToSection(aboutus)}
              >
                About Us
              </motion.li>
              <motion.li
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                onClick={() => scrollToSection(services)}
              >
                Services
              </motion.li>
              <motion.li
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, type: 'spring' }}
                onClick={() => scrollToSection(team)}
              >
                Team
              </motion.li>
              <motion.li
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.54, type: 'spring' }}
                onClick={() => scrollToSection(footer)}
              >
                Contact Us
              </motion.li>
            </ul>
          </div>
        </nav>
      </div>
      <Home />
      <div className="about-page-cover" ref={aboutus}>
        <div className="about-page">
          <div>
            <motion.h2
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{ type: 'spring' }}
              viewport={{ once: true }}
            >
              Why we are awesome!
            </motion.h2>
            <p>
              Deezey media is primarily a content creation company Creative
              Agency and Production Company combined Whatever your brief,
              whether it’s a TV commercial, corporate video, brand film or
              animation, at the core of every great piece of advertising is a
              good idea and a well-crafted script.
            </p>
          </div>
        </div>
      </div>
      <section ref={services} className="services-section">
        <div className="services-section-div">
          <div className="video-text">
            <div className="each-services-div">
              <div className="video-background">
                <ReactPlayer
                  url="https://vimeo.com/814035145"
                  playing
                  loop
                  muted
                  controls={true}
                  width="100%"
                  height="100%"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-2.4rem',
                }}
              >
                <h2>
                  <div>
                    <span className="each-service-span-text1">We create</span>
                    <span className="each-service-span-text2">
                      {' '}
                      engaging contents.
                    </span>
                  </div>
                </h2>
              </div>
            </div>
            <div className="video-text-divp">
              <p>
                No matter the scale and content type, we are the right partners
                to carry out your creative needs.
              </p>
            </div>
          </div>
          <div className="each-services-images">
            <img src={emmanuell} alt="" />
            <img src={emmanuell} alt="" />
            <img src={emmanuell} alt="" className="hide-mobile" />
          </div>
        </div>
        <div className="services-section-div">
          <div className="video-text">
            <div className="each-services-div" style={{ position: 'relative' }}>
              <div className="video-background">
                <ReactPlayer
                  url="https://vimeo.com/814035145"
                  playing
                  loop
                  muted
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-2.4rem',
                }}
              >
                <h2
                  style={{
                    marginBottom: '0.7rem',
                  }}
                >
                  <div>
                    <span className="each-service-span-text1">
                      Delivering the best
                    </span>
                    <span className="each-service-span-text2">
                      {' '}
                      value uniquely.
                    </span>
                  </div>
                </h2>
              </div>
            </div>
            <div className="video-text-divp">
              <p>
                We Combine the right media buying plan as well as unique content
                marketing techniques to capture our client’s audiences in the
                campaigns we launch.
              </p>
            </div>
          </div>
          <div className="each-services-images">
            <img src={josephh} alt="" />
            <img src={josephh} alt="" />
            <img src={josephh} alt="" className="hide-mobile" />
          </div>
        </div>
        <div className="services-section-div">
          <div className="video-text">
            <div className="each-services-div" style={{ position: 'relative' }}>
              <div className="video-background">
                <ReactPlayer
                  url="https://vimeo.com/814035145"
                  playing
                  loop
                  muted
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-2.4rem',
                }}
              >
                <h2
                  style={{
                    marginBottom: '0.7rem',
                  }}
                >
                  <div>
                    <span className="each-service-span-text1">
                      Long lasting
                    </span>
                    <span className="each-service-span-text2">
                      {' '}
                      visual assets.
                    </span>
                  </div>
                </h2>
              </div>
            </div>
            <div className="video-text-divp">
              <p>
                Our branding service helps your business establish a clear and
                consistent identity that sets your brand apart from competitors.
              </p>
            </div>
          </div>
          <div className="each-services-images">
            <img src={emmanuell} alt="" />
            <img src={emmanuell} alt="" />
            <img src={emmanuell} alt="" className="hide-mobile" />
          </div>
        </div>
        <div className="services-section-div">
          <div className="video-text">
            <div className="each-services-div" style={{ position: 'relative' }}>
              <div className="video-background">
                <ReactPlayer
                  url="https://vimeo.com/814035145"
                  playing
                  loop
                  muted
                  width="100%"
                  height="100vh"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-2.4rem',
                }}
              >
                <h2
                  style={{
                    marginBottom: '0.7rem',
                  }}
                >
                  <div>
                    <span className="each-service-span-text1">
                      Creating good
                    </span>
                    <span className="each-service-span-text2">
                      {' '}
                      impressions.
                    </span>
                  </div>
                </h2>
              </div>
            </div>
            <div className="video-text-divp">
              <p>
                Our web design services are tailored to create visually stunning
                and user-friendly websites that effectively communicate our
                client’s brand message.
              </p>
            </div>
          </div>
          <div className="each-services-images">
            <img src={josephh} alt="" />
            <img src={josephh} alt="" />
            <img src={josephh} alt="" className="hide-mobile" />
          </div>
        </div>
        <div className="services-section-div">
          <div className="video-text">
            <div className="each-services-div" style={{ position: 'relative' }}>
              <div className="video-background">
                <ReactPlayer
                  url="https://vimeo.com/814035145"
                  playing
                  loop
                  muted
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-2.4rem',
                }}
              >
                <h2
                  style={{
                    marginBottom: '0.7rem',
                  }}
                >
                  <div>
                    <span className="each-service-span-text1">Podcast</span>
                  </div>
                </h2>
              </div>
            </div>
            <div>
              <div className="video-text-divp">
                <p>
                  Our in-house podcast production is bent on producing daring
                  and captivating audio and video content that captures our
                  client's audience and share their journey.
                </p>
              </div>
            </div>
          </div>
          <div className="each-services-images">
            <img src={emmanuell} alt="" />
            <img src={emmanuell} alt="" />
            <img src={emmanuell} alt="" className="hide-mobile" />
          </div>
        </div>
        <div className="services-section-div">
          <div className="video-text">
            <div className="each-services-div" style={{ position: 'relative' }}>
              <div className="video-background">
                <ReactPlayer
                  url="https://vimeo.com/814035145"
                  playing
                  loop
                  muted
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-2.4rem',
                }}
              >
                <h2
                  style={{
                    marginBottom: '0.7rem',
                  }}
                >
                  <div>
                    <span className="each-service-span-text1">
                      Achieving your
                    </span>
                    <span className="each-service-span-text2">
                      {' '}
                      marketing goals.
                    </span>
                  </div>
                </h2>
              </div>
            </div>
            <div className="video-text-divp">
              <p>
                As a startup or a 50-year-old legacy company, we are open to
                strategizing on ways to build and optimize your brand.
              </p>
            </div>
          </div>
          <div className="each-services-images">
            <img src={josephh} alt="" />
            <img src={josephh} alt="" />
            <img src={josephh} alt="" className="hide-mobile" />
          </div>
        </div>
      </section>
      <div className="clients-page">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={threeline} alt="3line logo" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, type: 'spring' }}
          viewport={{ once: true }}
        >
          <img src={youverify} alt="youverify logo" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          viewport={{ once: true }}
        >
          <img src={ala} alt="ala logo" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          viewport={{ once: true }}
        >
          <img src={bap} alt="Bolanle Austen Peters logo" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, type: 'spring' }}
          viewport={{ once: true }}
        >
          <img src={chevron} alt="chevron logo" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
          viewport={{ once: true }}
        >
          <img src={chickenrepublic} alt="chicken republic logo" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, type: 'spring' }}
          viewport={{ once: true }}
        >
          <img src={cwg} alt="CWG logo" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, type: 'spring' }}
          viewport={{ once: true }}
        >
          <img src={dorman} alt="dorman logo" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, type: 'spring' }}
          viewport={{ once: true }}
        >
          <img src={fincra} alt="fincra logo" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, type: 'spring' }}
          viewport={{ once: true }}
        >
          <img src={fmn} alt="fmn logo" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, type: 'spring' }}
          viewport={{ once: true }}
        >
          <img src={globus} alt="globus bank logo" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1, type: 'spring' }}
          viewport={{ once: true }}
        >
          <img src={ihs} alt="ihs logo" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, type: 'spring' }}
          viewport={{ once: true }}
        >
          <img src={mrchef} alt="mrchef logo" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.25, type: 'spring' }}
          viewport={{ once: true }}
        >
          <img src={sao} alt="sao logo" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.3, type: 'spring' }}
          viewport={{ once: true }}
        >
          <img src={unitybank} alt="unitybank logo" />
        </motion.div>
      </div>
      <div className="our-team" ref={team}>
        <div className="our-team-text">
          <h3>Our Team</h3>
          <p>
            Our team of experts is devoted to creating effective campaigns that
            drive results for your business..
          </p>
        </div>
        <div className="our-team-grid">
          <motion.div
            className="each-team"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, type: 'spring' }}
            viewport={{ once: true }}
          >
            <div className="color-overlay-container">
              <img
                src={emmanuel}
                alt="creative director profile"
                className="color-overlay-container-img"
              />
            </div>
            <h4>Emmanuel Okpala</h4>
            <h5>Creative Director</h5>
          </motion.div>
          <motion.div
            className="each-team"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            viewport={{ once: true }}
          >
            <div className="color-overlay-container">
              <img src={ronald} alt="project manager and colorist profile" />
            </div>
            <h4>Ronald Nnadiukwu</h4>
            <h5>Video Producer</h5>
          </motion.div>
          <motion.div
            className="each-team"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            viewport={{ once: true }}
          >
            <div className="color-overlay-container">
              <img src={emordi} alt="strategy lead profile" />
            </div>
            <h4>Emmanuel Emordi</h4>
            <h5>Strategy Lead</h5>
          </motion.div>
          <motion.div
            className="each-team"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            viewport={{ once: true }}
          >
            <div className="color-overlay-container">
              <img src={joseph} alt="frontend developer profile" />
            </div>

            <h4>Chima Okpala</h4>
            <h5>Frontend Developer</h5>
          </motion.div>
          <motion.div
            className="each-team"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            viewport={{ once: true }}
          >
            <div className="color-overlay-container">
              <img src={precious} alt="precious profile" />
            </div>
            <h4>Precious Obi</h4>
            <h5>Content and Project manager</h5>
          </motion.div>
          <motion.div
            className="each-team"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, type: 'spring' }}
            viewport={{ once: true }}
          >
            <div className="color-overlay-container">
              <img src={drone} alt="drone guy profile" />
            </div>
            <h4>Ovo Derhie</h4>
            <h5>Drone Pilot and Cinematographer</h5>
          </motion.div>
          <motion.div
            className="each-team"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, type: 'spring' }}
            viewport={{ once: true }}
          >
            <div className="color-overlay-container">
              <img src={ebuka} alt="photographer profile" />
            </div>
            <h4>Onyewuchi Ebuka</h4>
            <h5>Photographer</h5>
          </motion.div>
          <motion.div
            className="each-team"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, type: 'spring' }}
            viewport={{ once: true }}
          >
            <div className="color-overlay-container">
              <img src={timothy} alt="graphics designer profile" />
            </div>
            <h4>Joseph Timothy</h4>
            <h5>Graphics Designer</h5>
          </motion.div>
        </div>
      </div>
      <footer className="footer" ref={footer}>
        <div className="footer-container">
          <motion.h1>
            <span style={{ fontWeight: '300' }}>Ready to get Started?</span>
            <motion.a href="mailto:deezeymedia@gmail.com">
              {' '}
              Get in touch.
            </motion.a>
          </motion.h1>
          <div className="footer-cont">
            <div className="mg-3 footer-location">
              <p className="mg-2">75 Mike Ejezie Street, Lekki Phase 1,</p>
              <p className="mg-2">Lagos, Nigeria.</p>
              <p>+2347064810089</p>
            </div>
            <div className="mg-3">
              <h5>Follow us</h5>
              <div className="social-media-links">
                <a
                  href="https://m.facebook.com/Deezeymedia/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={facebook} alt="facebook logo" />
                </a>
                <a
                  href="https://www.instagram.com/deezeymedia/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={instagram} alt="instagram logo" />
                </a>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={twitter} alt="twitter logo" />
                </a>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={linkedin} alt="linkedin logo" />
                </a>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={tiktok} alt="tiktok logo" />
                </a>
              </div>
            </div>
            <div className="footer-logo">
              <img src={deezey} alt="deezey media logo" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default App;
