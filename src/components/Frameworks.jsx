import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
	const skills = ["git", "react", "tailwindcss", "mui", "sequelize", "typescript", "aws", "node", "postgresql", "laravel", "php", "sass"];
	return (
		<div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
			<OrbitingCircles iconSize={50}>
				{skills.map((skill, index) => (
					<Icon key={index} src={`assets/logos/${skill}.svg`} />
				))}
			</OrbitingCircles>
			<OrbitingCircles iconSize={35} radius={100} reverse speed={2}>
				{skills.reverse().map((skill, index) => (
					<Icon key={index} src={`assets/logos/${skill}.svg`} />
				))}
			</OrbitingCircles>
		</div>
	);
}

const Icon = ({ src }) => <img src={src} className="duration-200 rounded-sm hover:scale-110" />;
