import React from 'react'
import '../src/index.css'
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { AuroraBackground } from './ui/aurora-background'
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';

const Hero = () => {
  return (
			<AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
				<TextGenerateEffect 
					className="text-[40px] lg:text-6xl md:text-7xl font-bold dark:text-white text-center"
					words="Hi I`m  Tra-Vaughn James"
				/>
      
        <div className="md:text-center sm:text-center font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        Information Security Policy & Management Student at Carnegie Mellon University
        </div>

				<a href="#projects"> 
					<MagicButton
						title="View My Projects"
						icon ={<FaLocationArrow />}
						position="right"
					/> 
				</a>
      </motion.div>
    </AuroraBackground>
  )
}

export default Hero