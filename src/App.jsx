import "./App.css";
import { useRef} from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import PropTypes from 'prop-types';
<<<<<<< HEAD
// import { Link } from 'react-router-dom';
import coolPic from './assets/coolPic.svg';
import MotionCards from "./components/MotionCards";
=======
import { Link } from 'react-router-dom';
// import coolPic from './assets/coolPic.svg';
import landingFrontImage from './assets/landingFrontImaga.svg';
import LandingUI from "./pages/LandingUI";
>>>>>>> a9afa9f30ce9e01afb50052f91181d89d1c7904c


function ParallaxText({ children, baseVelocity = 100 }) {
 
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
   

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Change scroll direction dynamically
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });



  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
      
      
      
    </div>
  );
}

function App() {
  return (
    <>
      <section className="app">
<<<<<<< HEAD
        <ParallaxText baseVelocity={-3}>Software Development</ParallaxText>
     
        <img src={coolPic} alt="coolPic" />
=======
        <ParallaxText baseVelocity={-3}>Software dampingevelopment</ParallaxText>
        {/* <img src={coolPic} alt="coolPic" /> */}
        <img src={landingFrontImage} alt="front" />
>>>>>>> a9afa9f30ce9e01afb50052f91181d89d1c7904c
      
        <ParallaxText baseVelocity={3}>and im a software developer</ParallaxText>


      </section>
      <MotionCards />
      <button className="outline outline-offset-2 outline-pink-500">Button C</button>
      {/* <Link to="about" className="btn btn-primary">About</Link>
      <Link to="projects" className="btn btn-primary">Earth</Link>
<<<<<<< HEAD
      <Link to="hero" className="btn btn-primary">Hero</Link> */}
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Hello<span className="text-violet-400 dark:text-violet-600">laborum doloribus</span> delectus
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50 outline outline-offset-2 outline-pink-500">Get started</button>
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50 outline outline-offset-2 outline-pink-500">Learn more</button>
		</div>
	</div>

=======
      <Link to="contact" className="btn btn-primary">Contact</Link>
      <Link to="projects" className="btn btn-primary">Projects</Link>
      <LandingUI/>
>>>>>>> a9afa9f30ce9e01afb50052f91181d89d1c7904c
    </>
  );
}

ParallaxText.propTypes = {
  children: PropTypes.node.isRequired,
  baseVelocity: PropTypes.number,
}

export default App;