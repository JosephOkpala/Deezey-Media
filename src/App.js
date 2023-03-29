import { useRef } from 'react';
import { motion } from 'framer-motion';
import logodark from './img/deezey_media_logo_dark.png';
import threeline from './img/3Line.png';
import afrodriods from './img/afrodroids.png';
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
import drone from './img/drone-guy.jpg';
import ebuka from './img/ebuka.png';
import joseph from './img/joseph.jpeg';
import deezey from './img/deezey_footer.png';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import twitter from './img/twitter.png';
import linkedin from './img/linkedin.png';
import tiktok from './img/tik-tok.png';
import './App.css';

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
  const portfolio = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  // const { scrollYProgress } = useScroll();

  return (
    <div className="App">
      {/* <Navbar /> */}
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
                transition={{ delay: 0.35, type: 'spring' }}
                onClick={() => scrollToSection(portfolio)}
              >
                Portfolio
              </motion.li>
              <motion.li
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, type: 'spring' }}
                onClick={() => scrollToSection(team)}
              >
                Team
              </motion.li>
              <a href="mailto:deezeymedia@gmail.com">
                <motion.li
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.54, type: 'spring' }}
                >
                  Contact Us
                </motion.li>
              </a>
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
              <span className="about-stroke">About</span> Us
            </motion.h2>
            <p>
              As digital content and media evolves, we are finding the best ways
              to tell brand stories and captivate audiences. Through visual
              storytelling and the use of technology, we are dedicated to
              providing the best value for the consumers and brands we work
              with. We are not AD men; We are adopters of the digital age; film
              makers, creators, technologists, writers, animators,
              photographers, marketers, storytellers, in the business of
              influencing culture and fostering progress for our clients and
              consumers.
            </p>
            <p>
              Consider our partnership as an extension of your marketing
              department; from conceiving the idea, to creating the story, and
              ultimately, fueling the conversation.
            </p>
          </div>
        </div>
      </div>
      <div className="serv">
        <div className="services-page" ref={services}>
          <div className="services-header">
            <motion.h1
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{ type: 'spring' }}
              viewport={{ once: true }}
            >
              Services
            </motion.h1>
            <p>
              Whether you have a new startup or an established business we are
              here to help.
            </p>
          </div>
          <div className="each-services-grid">
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ type: 'spring' }}
              viewport={{ once: true }}
              className="each-service mg brand-service max-width"
            >
              <h4>Branding</h4>
              <p>
                At the core of every brand lies the building blocks to a great
                company, we translate your vision into long lasting visual
                assets. "Our branding services are designed to help businesses
                establish a clear and consistent identity. We work closely with
                our clients to understand their values and target audience, and
                use this information to develop a unique brand strategy that
                sets them apart from their competitors."
              </p>
              <ul>
                <li>Logo creation and brand assets </li>
                <li>Personal branding</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ type: 'spring', delay: 0.2 }}
              viewport={{ once: true }}
              className="each-service mg brandstrategy-service max-width"
            >
              <h4>Brand strategy and consultation</h4>
              <p>
                Whether you are a startup looking to launch into the market or a
                50-year-old legacy company, we are open to strategizing on ways
                to reach your desired audience and achieve your marketing goals.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ type: 'spring', delay: 0.3 }}
              viewport={{ once: true }}
              className="each-service mg webdesign-service max-width"
            >
              <h4>Web design</h4>
              <p>
                Our web design services are tailored to create visually stunning
                and user-friendly websites that effectively communicate our
                clients' brand message. From concept to launch, we work closely
                with our clients to create a website that is not only beautiful
                but also effective in driving conversions.
              </p>
              <ul>
                <li>UI/UX Design</li>
                <li>Frontend development</li>
                <li>Backend development</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ type: 'spring', delay: 0.3 }}
              viewport={{ once: true }}
              className="each-service mg marketing-service max-width"
            >
              <h4>Digital marketing</h4>
              <p>
                A sum total of our service offering is delivering the best value
                for our clients and we do this by a combination of the right
                media buying plan as well as unique content marketing techniques
                to ensure the audiences are captured properly in the campaigns
                we launch.
              </p>
              <ul>
                <li>Community management</li>
                <li>Content marketing</li>
                <li>Ads</li>
                <li>Influencer marketing</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ type: 'spring', delay: 0.4 }}
              viewport={{ once: true }}
              className="each-service mg contentcreation-service max-width"
            >
              <h4>Content Creation</h4>
              <p>
                No matter the scale and content type, we are the right partners
                to carry out your creative needs.
              </p>
              <ul>
                <li>Graphics design</li>
                <li>Content writing</li>
                <li>Colour grading</li>
                <li>Video Editing</li>
                <li>Radio Jingles</li>
                <li>Animation and Motion Graphics</li>
                <li>Voice over production</li>
                <li>Commercial Cinematography (TVC)</li>
                <li>Corporate videography, Documentaries</li>
                <li>Theatre and Stage productions</li>
                <li>Social media videos</li>
                <li>Live Streaming</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ type: 'spring', delay: 0.5 }}
              viewport={{ once: true }}
              className="each-service mg podcast-service max-width"
            >
              <h4>Podcast</h4>
              <p>
                As audio and video content continues to sip into our daily
                lives, we are producing for the most daring creator looking to
                capture an audience and share their journey.
              </p>
              <ul>
                <li>In-house podcast production</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
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
          <img src={afrodriods} alt="afrodroids logo" />
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.35, type: 'spring' }}
          viewport={{ once: true }}
        >
          <img src={youverify} alt="youverify logo" />
        </motion.div>
      </div>
      <div className="our-team" ref={team}>
        <h3>Our Team</h3>
        <div className="our-team-grid">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, type: 'spring' }}
            viewport={{ once: true }}
          >
            <img src={emmanuel} alt="creative director profile" />
            <h4 style={{ fontSize: '1.4rem' }}>Okpala Emmanuel</h4>
            <h5 style={{ fontSize: '1.1rem' }}>Creative Director</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            viewport={{ once: true }}
          >
            <img src={ronald} alt="project manager and colorist profile" />
            <h4 style={{ fontSize: '1.4rem' }}>Nnadiukwu Ronald</h4>
            <h5 style={{ fontSize: '1.1rem' }}>Video Producer</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            viewport={{ once: true }}
          >
            <img src={emordi} alt="strategy lead profile" />
            <h4 style={{ fontSize: '1.4rem' }}>Emmanuel Emordi</h4>
            <h5 style={{ fontSize: '1.1rem' }}>Strategy Lead</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            viewport={{ once: true }}
          >
            <img src={precious} alt="graphics designer profile" />
            <h4 style={{ fontSize: '1.4rem' }}>Obi Precious</h4>
            <h5 style={{ fontSize: '1.1rem' }}>Graphics Designer</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            viewport={{ once: true }}
          >
            <img src={drone} alt="drone guy profile" />
            <h4 style={{ fontSize: '1.4rem' }}>Ovo Derhie</h4>
            <h5 style={{ fontSize: '1.1rem' }}>
              Drone Pilot and Cinematographer
            </h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, type: 'spring' }}
            viewport={{ once: true }}
          >
            <img src={ebuka} alt="photographer profile" />
            <h4 style={{ fontSize: '1.4rem' }}>Onyewuchi Ebuka</h4>
            <h5 style={{ fontSize: '1.1rem' }}>Photographer</h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, type: 'spring' }}
            viewport={{ once: true }}
          >
            <img src={joseph} alt="frontend developer profile" />
            <h4 style={{ fontSize: '1.4rem' }}>Okpala Joseph</h4>
            <h5 style={{ fontSize: '1.1rem' }}>Frontend Developer</h5>
          </motion.div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-cont">
          <div className="mg-3">
            <h5>Get in touch</h5>
            <p className="mg-2">75 Mike Ejezie Street, Lekki Phase 1,</p>
            <p className="mg-2">Lagos, Nigeria.</p>
            <a href="mailto:deezeymedia@gmail.com" className="footer-mail">
              <p className="mg-2">hello@deezeymedia.com</p>
            </a>
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
      </footer>
    </div>
  );
};
export default App;
