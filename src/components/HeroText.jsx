import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
	const words = ["Software Developer", "Project Leader"];

	const variants = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
			<div className="flex flex-col space-y-6 md:space-y-0 c-space">
				<motion.h1 className="text-4xl font-medium" variants={variants} initial="hidden" animate="visible" transition={{ delay: 1 }}>
					Hola!
					<br />
					Soy Joaquín Di Leo
				</motion.h1>

				<div className="flex flex-col items-center md:items-start">
					<motion.div variants={variants} initial="hidden" animate="visible" transition={{ delay: 1.5 }}>
						<FlipWords words={words} className="font-black text-white text-7xl md:text-8xl text-center md:text-left" />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default HeroText;
