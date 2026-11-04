import { LayoutGroup, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const COLUMNS = ["Por hacer", "En curso", "Hecho"];
const INITIAL = [
	{ id: "relevamiento", label: "Relevamiento", color: "bg-sand", stage: 0 },
	{ id: "api", label: "API REST", color: "bg-lavender", stage: 0 },
	{ id: "front", label: "Front", color: "bg-sky-400", stage: 0 },
	{ id: "qa", label: "Testing QA", color: "bg-emerald-400", stage: 0 },
];

// Tablero que avanza solo: cada paso mueve la primera tarea pendiente una columna.
export function KanbanBoard() {
	const ref = useRef(null);
	const inView = useInView(ref, { margin: "-20% 0px" });
	const [tasks, setTasks] = useState(INITIAL);

	useEffect(() => {
		if (!inView) return;
		const id = setInterval(() => {
			setTasks((prev) => {
				const next = prev.findIndex((t) => t.stage < 2);
				if (next === -1) return INITIAL;
				return prev.map((t, i) => (i === next ? { ...t, stage: t.stage + 1 } : t));
			});
		}, 1100);
		return () => clearInterval(id);
	}, [inView]);

	return (
		<LayoutGroup>
			<div ref={ref} className="grid w-full grid-cols-3 gap-2">
				{COLUMNS.map((col, stage) => (
					<div key={col} className="flex flex-col gap-1.5 p-2 rounded-lg bg-black/20 border border-white/5 min-h-[7.5rem]">
						<p className="text-[10px] font-bold tracking-wider uppercase text-neutral-500">{col}</p>
						{tasks
							.filter((t) => t.stage === stage)
							.map((t) => (
								<motion.div
									key={t.id}
									layoutId={t.id}
									transition={{ type: "spring", stiffness: 300, damping: 28 }}
									className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-storm border border-white/10 text-[11px] text-neutral-300 shadow"
								>
									<span className={`size-1.5 shrink-0 rounded-full ${t.color}`} />
									<span className="truncate">{t.label}</span>
									{stage === 2 && <span className="ml-auto text-emerald-400">✓</span>}
								</motion.div>
							))}
					</div>
				))}
			</div>
		</LayoutGroup>
	);
}
