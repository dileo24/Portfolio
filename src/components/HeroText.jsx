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
			{/* Desktop */}
			<div className="flex-col hidden md:flex c-space">
				<motion.h1 className="text-4xl font-medium" variants={variants} initial="hidden" animate="visible" transition={{ delay: 1 }}>
					Hola! Soy Joaquín
				</motion.h1>
				<div className="flex flex-col items-start">
					<motion.div variants={variants} initial="hidden" animate="visible" transition={{ delay: 1.5 }}>
						<FlipWords words={words} className="font-black text-white text-8xl" />
					</motion.div>
				</div>
			</div>
			{/* Mobile */}
			<div className="flex- flex-col space-y-6 md:hidden">
				<motion.p className="text-4xl font-medium" variants={variants} initial="hidden" animate="visible" transition={{ delay: 1 }}>
					Hola! Soy Joaquín
				</motion.p>
				<div>
					<motion.div variants={variants} initial="hidden" animate="visible" transition={{ delay: 1.5 }}>
						<FlipWords words={words} className="font-bold text-white text-7xl text-center ml-4" />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default HeroText;
