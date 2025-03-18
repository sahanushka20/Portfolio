import React, { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";
 

const TechCard = ({ index, name, icon }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 400,
        }}
        className="bg-white bg-opacity-20 backdrop-blur-lg border border-white/30 p-3 rounded-lg w-24 h-28 flex flex-col items-center justify-center shadow-lg shadow-white/10"
      >
             <div className='relative w-full h-[230px]'>
          <img
            src={icon}
            alt='skill-icon'
            className='w-full h-full object-contain'
          />
           
          </div>
         
      </Tilt>
    </motion.div>
  );
};

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    
    setIsMobile(mediaQuery.matches);

    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

     
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-10">
      {isMobile ? 
          technologies.map((technologies, index) => (
            <TechCard key={`technologies-${index}`} index = {index} {...technologies} />
          )) :
         technologies.map((tech) => (
            <div key={tech.name} className="w-28 h-28">
              <BallCanvas icon={tech.icon} />
            </div>
          ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
