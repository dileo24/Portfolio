import { Frameworks } from "../components/FrameWorks";

const About = () => {
	return (
		<section className="c-space section-spacing">
			<h2 className="text-heading pt-10">Sobre mi</h2>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
				<div className="flex items-end grid-default-color grid-prim no-hover">
					<img
						src="assets/coding-pov.png"
						className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
					/>
					<div className="z-10">
						<p className="subtext">
							Como project leader y desarrollador de software trabajo en aplicaciones web y APIs, planeándolas desde cero y/o garantizando
							un mantenimiento eficiente.
						</p>
					</div>
					<div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
				</div>
				<div className="grid-default-color grid-sec no-hover">
					<div className="z-10 w-[50%]">
						<p className="subtext">
							Entre habilidades técnicas y gestión de equipos, siempre me enfoco en crear soluciones prácticas, mantenibles y que realmente
							cumplan con las necesidades del usuario.
						</p>
					</div>
					<div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
						<Frameworks />
					</div>
				</div>
				<div className="grid-default-color grid-sec no-hover">
					<div className="z-10 w-full md:w-2/3">
						<p className="subtext font-semibold">
							Mi metodología se basa en el desarrollo iterativo, comuncación constante con el área de testing y feedback recurrente con mi
							equipo, asegurando que cada aporte posea un valor tangible al producto final.
						</p>
					</div>
					<div className="absolute bottom-0 right-0 w-full h-3/5 md:h-4/5 flex items-end justify-end">
						<img
							src="assets/compu2.webp"
							className="object-contain h-full w-auto max-w-full md:max-w-[80%] lg:max-w-[75%] transform scale-x-[-1]"
							style={{
								filter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.3))",
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
