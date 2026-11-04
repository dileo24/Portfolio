import { motion } from "motion/react";
import { Frameworks } from "../components/Frameworks";
import { KanbanBoard } from "../components/KanbanBoard";
import { Counter } from "../components/Counter";

const reveal = {
	hidden: { opacity: 0, y: 40 },
	visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" } }),
};

const stats = [
	{ value: 3, prefix: "+", label: "años en la Universidad Católica de Córdoba" },
	{ value: 3, label: "proyectos que lidero en la UCC" },
	{ value: 4, label: "productos freelance en producción" },
	{ value: 5, label: "proyectos freelance de punta a punta" },
];

const Card = ({ i, className, children }) => (
	<motion.div variants={reveal} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className={className}>
		{children}
	</motion.div>
);

const About = () => {
	return (
		<section className="c-space section-spacing" style={{ minHeight: "unset" }}>
			<h2 className="text-heading pt-20">Sobre mi</h2>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[20rem] mt-12">
				<Card i={0} className="relative overflow-hidden grid-default-color md:col-span-3 min-h-[22rem] md:min-h-0 no-hover">
					<div className="absolute rounded-full pointer-events-none -top-20 -left-20 size-72 bg-lavender/20 blur-3xl animate-pulse" />
					<div className="relative z-10 w-[62%] md:w-[55%]">
						<p className="mb-2 text-xs font-bold tracking-widest uppercase text-sand">PM · Project Leader · Developer</p>
						<p className="subtext">
							Planifico, coordino equipos y desarrollo aplicaciones web y APIs, desde el roadmap hasta producción, enfocado en soluciones
							prácticas, mantenibles y que realmente cumplan con las necesidades del usuario.
						</p>
					</div>
					<div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 opacity-35 md:opacity-100">
						<Frameworks />
					</div>
				</Card>

				<Card i={1} className="relative flex flex-col justify-between gap-4 overflow-hidden grid-default-color md:col-span-3 no-hover">
					<p className="z-10 font-semibold subtext">
						Trabajo con <span className="text-white">Scrum</span> y <span className="text-white">Kanban</span>: iteraciones cortas, comunicación
						constante con testing y feedback recurrente con el equipo, para que cada entrega sume valor real al producto.
					</p>
					<KanbanBoard />
				</Card>

			</div>
			<Card i={2} className="mt-4 grid-default-color no-hover">
				<div className="grid grid-cols-2 gap-6 py-2 md:grid-cols-4">
						{stats.map((s) => (
							<div key={s.label} className="flex flex-col justify-center">
								<span className="text-5xl font-bold text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-lavender to-sand">
									<Counter value={s.value} prefix={s.prefix} />
								</span>
								<span className="mt-1 text-sm text-neutral-400">{s.label}</span>
							</div>
						))}
				</div>
			</Card>
		</section>
	);
};

export default About;
