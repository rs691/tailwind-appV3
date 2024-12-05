import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '.././css/MotionCards.css';

const MotionCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardVariants = {
    initial: { 
      scale: 0.8, 
      opacity: 0.6 
    },
    hover: { 
      scale: 1.05, 
      opacity: 1,
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
  };

  const cards = [
    { 
      title: "About", 
      link: "/about", 
      color: "bg-blue-100",
      description: "Learn more about me"
    },
    { 
      title: "Projects", 
      link: "/projects", 
      color: "bg-green-500",
      description: "Explore my work"
    },
    { 
      title: "Contact", 
      link: "/contact", 
      color: "bg-purple-500",
      description: "Get in touch"
    },
    { 
      title: "Earth", 
      link: "/earth", 
      color: "bg-teal-500",
      description: "Discover more"
    }
  ];

  return (
    <div className="flex justify-center items-center space-x-4 p-4">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial="initial"
          whileHover="hover"
          variants={cardVariants}
          className={`
            relative 
            w-64 
            h-80 
            ${card.color} 
            rounded-xl
            outline outline-offset-2 outline-pink-500 
            shadow-lg 
            overflow-hidden 
            cursor-pointer
            transform 
            transition-all 
            duration-300
            ${hoveredCard === index ? 'scale-105' : ''}
          `}
          onHoverStart={() => setHoveredCard(index)}
          onHoverEnd={() => setHoveredCard(null)}
        >
          <Link to={card.link} className="absolute inset-0 z-10">
            <div className="p-6 text-white h-full flex flex-col justify-between outline outline-offset-2 outline-pink-500">
              <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
              <p className="text-sm opacity-75">{card.description}</p>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ 
                  x: hoveredCard === index ? 0 : -20, 
                  opacity: hoveredCard === index ? 1 : 0 
                }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-sm font-semibold"
              >
                Explore →
              </motion.div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default MotionCards;