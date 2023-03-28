// import { useEffect, useRef } from 'react';
// import logodark from './img/deezey_media_logo_dark.png';
// import threeline from './img/3Line.png';
// import afrodriods from './img/afrodroids.png';
// import ala from './img/ala_logo.png';
// import bap from './img/BAP.png';
// import chevron from './img/Chevron.png';
// import chickenrepublic from './img/chickenrepublic.png';
// import cwg from './img/CWG.png';
// import dorman from './img/dorman.png';
// import fincra from './img/fincra.png';
// import fmn from './img/FMN.png';
// import globus from './img/globusbank.png';
// import ihs from './img/ihs.png';
// import mrchef from './img/MrChef.png';
// import sao from './img/SAO.png';
// import unitybank from './img/unitybank.png';
// import youverify from './img/youverify.png';
// import './App.css';
// import Aos from 'aos';
// import 'aos/dist/aos.css';

// const Home = () => {
//   useEffect(() => {
//     Aos.init({ duration: 400, easing: 'ease-in-out-cubic' });
//   }, []);

//   return (
//     <div className="home-page">
//       <div>
//         <h4 data-aos="fade-up" data-aos-once="true" data-aos-delay="400">
//           DEEZEY MEDIA IS A VERSATILE MEDIA COMPANY
//         </h4>
//         <h1 data-aos="fade-up" data-aos-once="true">
//           We create new media content for <br /> brands and individuals.
//         </h1>
//         <h4 data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
//           EXPLORE OUR EXPANDING DIGITAL CONTENT PLATFORM...
//         </h4>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const aboutus = useRef(null);
//   const services = useRef(null);
//   const team = useRef(null);
//   const portfolio = useRef(null);

//   const scrollToSection = (elementRef) => {
//     window.scrollTo({
//       top: elementRef.current.offsetTop,
//       behavior: 'smooth',
//     });
//   };

//   useEffect(() => {
//     Aos.init({ duration: 400 });
//   }, []);

//   return (
//     <div className="App">
//       {/* <Navbar /> */}
//       <div className="nav-shadow">
//         <nav>
//           <img className="logodark" src={logodark} alt="Deezey media logo" />
//           <div className="burger">
//             <div className="line-one"></div>
//             <div className="line-two"></div>
//             <div className="line-three"></div>
//           </div>
//           <div className="navlinks">
//             <ul>
//               <li onClick={() => scrollToSection(aboutus)}>About Us</li>
//               <li onClick={() => scrollToSection(services)}>Services</li>
//               <li onClick={() => scrollToSection(portfolio)}>Portfolio</li>
//               <li onClick={() => scrollToSection(team)}>Team</li>
//               <a href="mailto:okpalajoseph995@gmail.com">
//                 <li>Contact Us</li>
//               </a>
//             </ul>
//           </div>
//         </nav>
//       </div>
//       <Home />
//       <div className="about-page-cover" ref={aboutus}>
//         <div className="about-page">
//           <div>
//             <h2 data-aos="fade-up" data-aos-once="true">
//               <span className="about-stroke">About</span> Us
//             </h2>
//             <p>
//               As digital content and media evolves, we are finding the best ways
//               to tell brand stories and captivate audiences. Through visual
//               storytelling and the use of technology, we are dedicated to
//               providing the best value for the consumers and brands we work
//               with. We are not AD men; We are adopters of the digital age; film
//               makers, creators, technologists, writers, animators,
//               photographers, marketers, storytellers, in the business of
//               influencing culture and fostering progress for our clients and
//               consumers.
//             </p>
//             <p>
//               Consider our partnership as an extension of your marketing
//               department; from conceiving the idea, to creating the story, and
//               ultimately, fueling the conversation.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="services-page" ref={services}>
//         <div className="services-header">
//           <h1>Services</h1>
//           <p>
//             Whether you have a new startup or an established business we are
//             here to help.
//           </p>
//         </div>
//         <div className="each-services-grid">
//           <div
//             className="each-service mg brand-service max-width"
//             data-aos="fade-left"
//             data-aos-once="true"
//           >
//             <h4>Branding</h4>
//             <p>
//               At the core of every brand lies the building blocks to a great
//               company, we translate your vision into long lasting visual assets.
//               "Our branding services are designed to help businesses establish a
//               clear and consistent identity. We work closely with our clients to
//               understand their values and target audience, and use this
//               information to develop a unique brand strategy that sets them
//               apart from their competitors."
//             </p>
//             <ul>
//               <li>Logo creation and brand assets </li>
//               <li>Personal branding</li>
//             </ul>
//           </div>
//           <div
//             className="each-service mg brandstrategy-service max-width"
//             data-aos="fade-left"
//             data-aos-once="true"
//             data-aos-delay="200"
//           >
//             <h4>Brand strategy and consultation</h4>
//             <p>
//               Whether you are a startup looking to launch into the market or a
//               50-year-old legacy company, we are open to strategizing on ways to
//               reach your desired audience and achieve your marketing goals.
//             </p>
//           </div>
//           <div
//             className="each-service mg webdesign-service max-width"
//             data-aos="fade-left"
//             data-aos-once="true"
//             data-aos-delay="200"
//           >
//             <h4>Web design</h4>
//             <p>
//               Our web design services are tailored to create visually stunning
//               and user-friendly websites that effectively communicate our
//               clients' brand message. From concept to launch, we work closely
//               with our clients to create a website that is not only beautiful
//               but also effective in driving conversions.
//             </p>
//             <ul>
//               <li>UI/UX Design</li>
//               <li>Frontend development</li>
//               <li>Backend development</li>
//             </ul>
//           </div>
//           <div
//             className="each-service mg marketing-service max-width"
//             data-aos="fade-left"
//             data-aos-once="true"
//             data-aos-delay="200"
//           >
//             <h4>Digital marketing</h4>
//             <p>
//               A sum total of our service offering is delivering the best value
//               for our clients and we do this by a combination of the right media
//               buying plan as well as unique content marketing techniques to
//               ensure the audiences are captured properly in the campaigns we
//               launch.
//             </p>
//             <ul>
//               <li>Community management</li>
//               <li>Content marketing</li>
//               <li>Ads</li>
//               <li>Influencer marketing</li>
//             </ul>
//           </div>
//           <div
//             className="each-service mg contentcreation-service max-width"
//             data-aos="fade-left"
//             data-aos-once="true"
//             data-aos-delay="200"
//           >
//             <h4>Content Creation</h4>
//             <p>
//               No matter the scale and content type, we are the right partners to
//               carry out your creative needs.
//             </p>
//             <ul>
//               <li>Graphics design</li>
//               <li>Content writing</li>
//             </ul>
//           </div>
//           <div
//             className="each-service mg podcast-service max-width"
//             data-aos="fade-left"
//             data-aos-once="true"
//             data-aos-delay="200"
//           >
//             <h4>Podcast</h4>
//             <p>
//               As audio and video content continues to sip into our daily lives,
//               we are producing for the most daring creator looking to capture an
//               audience and share their journey.
//             </p>
//             <ul>
//               <li>In-house podcast production</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="clients-page">
//         <div>
//           <img src={threeline} alt="3line logo" id="width" />
//         </div>
//         <div>
//           <img src={afrodriods} alt="afrodroids logo" id="width" />
//         </div>
//         <div>
//           <img src={ala} alt="ala logo" />
//         </div>
//         <div>
//           <img src={bap} alt="Bolanle Austen Peters logo" />
//         </div>
//         <div>
//           <img src={chevron} alt="chevron logo" />
//         </div>
//         <div>
//           <img src={chickenrepublic} alt="chicken republic logo" />
//         </div>
//         <div>
//           <img src={cwg} alt="CWG logo" />
//         </div>
//         <div>
//           <img src={dorman} alt="dorman logo" />
//         </div>
//         <div>
//           <img src={fincra} alt="fincra logo" />
//         </div>
//         <div>
//           <img src={fmn} alt="fmn logo" />
//         </div>
//         <div>
//           <img src={globus} alt="globus bank logo" />
//         </div>
//         <div>
//           <img src={ihs} alt="ihs logo" />
//         </div>
//         <div>
//           <img src={mrchef} alt="mrchef logo" />
//         </div>
//         <div>
//           <img src={sao} alt="sao logo" />
//         </div>
//         <div>
//           <img src={unitybank} alt="unitybank logo" />
//         </div>
//         <div>
//           <img src={youverify} alt="youverify logo" />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default App;

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
import './App.css';

const Home = () => {
  return (
    <div className="home-page">
      <div>
        <motion.h4
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: 'spring' }}
          // viewport={{ once: true }}
        >
          DEEZEY MEDIA IS A VERSATILE MEDIA COMPANY
        </motion.h4>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring' }}
        >
          We create new media content for <br /> brands and individuals.
        </motion.h1>
        <motion.h4
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, type: 'spring' }}
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
              <a href="mailto:okpalajoseph995@gmail.com">
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
              company, we translate your vision into long lasting visual assets.
              "Our branding services are designed to help businesses establish a
              clear and consistent identity. We work closely with our clients to
              understand their values and target audience, and use this
              information to develop a unique brand strategy that sets them
              apart from their competitors."
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
              50-year-old legacy company, we are open to strategizing on ways to
              reach your desired audience and achieve your marketing goals.
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
              for our clients and we do this by a combination of the right media
              buying plan as well as unique content marketing techniques to
              ensure the audiences are captured properly in the campaigns we
              launch.
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
              No matter the scale and content type, we are the right partners to
              carry out your creative needs.
            </p>
            <ul>
              <li>Graphics design</li>
              <li>Content writing</li>
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
              As audio and video content continues to sip into our daily lives,
              we are producing for the most daring creator looking to capture an
              audience and share their journey.
            </p>
            <ul>
              <li>In-house podcast production</li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="clients-page">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={threeline} alt="3line logo" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={afrodriods} alt="afrodroids logo" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={ala} alt="ala logo" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={bap} alt="Bolanle Austen Peters logo" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={chevron} alt="chevron logo" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={chickenrepublic} alt="chicken republic logo" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={cwg} alt="CWG logo" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={dorman} alt="dorman logo" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={fincra} alt="fincra logo" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={fmn} alt="fmn logo" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={globus} alt="globus bank logo" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={ihs} alt="ihs logo" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={mrchef} alt="mrchef logo" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={sao} alt="sao logo" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={unitybank} alt="unitybank logo" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <img src={youverify} alt="youverify logo" />
        </motion.div>
      </div>
    </div>
  );
};
export default App;
