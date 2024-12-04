import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import PropTypes from 'prop-types';

// Custom wrap function to replace @motionone/utils
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const ParallaxSection = () => {
  const ParallaxText = ({ children, baseVelocity = 100, className }) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
    const directionFactor = useRef(1);

    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div className="overflow-hidden py-4">
        <motion.div 
          className={`flex whitespace-nowrap ${className}`}
          style={{ x }}
        >
          <span className="mr-8">{children}</span>
          <span className="mr-8">{children}</span>
          <span className="mr-8">{children}</span>
          <span className="mr-8">{children}</span>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="h-screen flex flex-col justify-center items-center">
        <ParallaxText 
          baseVelocity={-2}
          className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          FRONTEND DEVELOPER
        </ParallaxText>
        
        <ParallaxText 
          baseVelocity={2}
          className="text-2xl font-light text-gray-300"
        >
          React • TypeScript • Next.js • Tailwind
        </ParallaxText>
      </div>

      {/* Skills Section */}
      <div className="py-20">
        <ParallaxText 
          baseVelocity={-1.5}
          className="text-3xl font-bold text-yellow-400"
        >
          5+ YEARS EXPERIENCE • 50+ PROJECTS • OPEN SOURCE CONTRIBUTOR
        </ParallaxText>
      </div>

      {/* Project Section */}
      <div className="py-20">
        <ParallaxText 
          baseVelocity={3}
          className="text-2xl font-medium text-emerald-400"
        >
          FEATURED PROJECTS • E-COMMERCE • SOCIAL MEDIA • SAAS DASHBOARD
        </ParallaxText>
      </div>

      {/* Contact Section */}
      <div className="py-20">
        <ParallaxText 
          baseVelocity={-2}
          className="text-3xl font-bold text-rose-400">
          LETS CONNECT • GITHUB • LINKEDIN • TWITTER • EMAIL
        </ParallaxText>
      </div>
    </div>
  );
};


ParallaxSection.propTypes = {
    children: PropTypes.node.isRequired,
    baseVelocity: PropTypes.number,
    className: PropTypes.string
    };


export default ParallaxSection;