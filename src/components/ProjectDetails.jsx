import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const ProjectDetails = ({ title, description, subDescription, image, tags, href, closeModal }) => {
	const modalRef = useRef(null);

	// Función para detectar clics fuera del modal
	const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			closeModal();
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
			<motion.div
				ref={modalRef}
				className="relative max-w-4xl mx-4 overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 max-h-[85vh]"
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
			>
				<button onClick={closeModal} className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 !cursor-pointer">
					<img src="assets/close.svg" className="w-6 h-6" alt="Close" />
				</button>
				<a target="_blank" href={href} className="block w-full overflow-hidden aspect-video rounded-t-2xl">
					<img src={image} alt={title} loading="lazy" className="object-cover w-full h-full" />
				</a>
				<div className="p-5">
					<div className="flex items-center justify-between mb-2">
						<h5 className="text-2xl font-bold text-white">{title}</h5>
						<a className="inline-flex items-center gap-1 font-medium cursor-pointer" target="_blank" href={href}>
							<img src="assets/arrow-up.svg" className="size-6" />
						</a>
					</div>

					<p className="mb-3 font-normal text-neutral-400">{description}</p>
					{Array.isArray(subDescription) ? (
						subDescription.map((subDesc, index) => (
							<p key={index} className="mb-3 font-normal text-neutral-400">
								{subDesc}
							</p>
						))
					) : (
						<div className="space-y-4">
							<div>
								<p className="mb-1 text-xs font-bold tracking-wider uppercase text-sand">Vista del cliente</p>
								{subDescription.client.map((subDesc, index) => (
									<p key={index} className="mb-2 font-normal text-neutral-400">
										{subDesc}
									</p>
								))}
							</div>
							<div>
								<p className="mb-1 text-xs font-bold tracking-wider uppercase text-sand">Panel de administrador</p>
								{subDescription.admin.map((subDesc, index) => (
									<p key={index} className="mb-2 font-normal text-neutral-400">
										{subDesc}
									</p>
								))}
							</div>
						</div>
					)}

					<div className="flex items-center justify-between mt-4">
						<div className="flex gap-3">
							{tags.map((tag) => (
								<img key={tag.id} src={tag.path} alt={tag.name} className="rounded-lg size-10 hover-animation" />
							))}
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default ProjectDetails;
