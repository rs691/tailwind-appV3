import "./App.css";
import { useRef, useState } from "react";
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
import { Link } from 'react-router-dom';

function ParallaxText({ children, baseVelocity = 100 }) {
  const [isPaused, setIsPaused] = useState(false);
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
    if (isPaused) return;

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

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
      <button 
        onClick={togglePause} 
        className="pause-button"
      >
        {isPaused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Parallax Text</h1>
      <section className="app">
        <ParallaxText baseVelocity={-3}>react, Bootstrap, NodeJS, Mongodb,</ParallaxText>
      
        <ParallaxText baseVelocity={3}>and im a software developer</ParallaxText>
      </section>
      <Link to="about" className="btn btn-primary">About</Link>
    </>
  );
}

ParallaxText.propTypes = {
  children: PropTypes.node.isRequired,
  baseVelocity: PropTypes.number,
}

export default App;