export const myProjects = [
	{
		id: 1,
		title: "Gestión financiera con asistente de WhatsApp",
		description:
			"Plataforma web en producción que reemplazó las planillas de Excel de un empresario con varios negocios. Centraliza ingresos, gastos, préstamos y patrimonio, y también se maneja por WhatsApp.",
		sections: [
			{
				title: "Lo destacado",
				items: [
					"Asistente de WhatsApp con IA: se carga un gasto con un audio, un texto o la foto de un ticket, y se guarda al confirmar.",
					"Tablero mensual por negocio, en pesos y dólares, con préstamos que calculan el interés día a día.",
					"Reportes anuales, ingreso con Face ID o huella y cuentas de solo lectura para la contadora.",
					"Conectado con Car Place y respaldado por más de 300 pruebas automáticas.",
				],
			},
		],
		pdf: "/assets/projects/finanzas.pdf",
		href: "",
		image: "/assets/projects/finanzas.jpg",
		tags: [
			{ id: 1, name: "Angular", path: "/assets/logos/angular.svg" },
			{ id: 2, name: "NestJS", path: "/assets/logos/nestjs.svg" },
			{ id: 3, name: "Prisma", path: "/assets/logos/prisma.svg" },
			{ id: 4, name: "MySQL", path: "/assets/logos/mysql.svg" },
			{ id: 5, name: "WhatsApp + IA" },
		],
	},
	{
		id: 2,
		title: "Car Place",
		description:
			"Sitio web y CRM en producción para una agencia de autos usados de Córdoba: el público ve el stock y consulta, y los socios gestionan todo el negocio.",
		sections: [
			{
				title: "Lo destacado",
				items: [
					"Catálogo con filtros, fichas con fotos y formularios para consultar, financiar o vender el auto propio.",
					"CRM con stock, ventas, gastos, facturación, calendario y cuentas entre socios.",
					"Comandos de voz: el administrador manda un audio y la IA lo convierte en una acción del sistema.",
					"Finanzas en pesos y dólares, sincronizadas automáticamente con el sistema de gestión financiera.",
				],
			},
		],
		pdf: "/assets/projects/carplace.pdf",
		href: "https://carplace.ar/",
		image: "/assets/projects/carplace.jpg",
		tags: [
			{ id: 1, name: "React", path: "/assets/logos/react.svg" },
			{ id: 2, name: "Material UI", path: "/assets/logos/mui.svg" },
			{ id: 3, name: "Node", path: "/assets/logos/node.svg" },
			{ id: 4, name: "Express", path: "/assets/logos/express.svg" },
			{ id: 5, name: "Sequelize", path: "/assets/logos/sequelize.svg" },
			{ id: 6, name: "OpenAI" },
		],
	},
	{
		id: 3,
		title: "Los Matis",
		status: "En desarrollo",
		description:
			"E-commerce y panel de administración para una regalería que vende en local, en la web y en Mercado Libre. Desarrollo el backend dentro de un equipo con front, diseño y testing.",
		sections: [
			{
				title: "Lo destacado",
				items: [
					"Tienda online con carrito, checkout y cobros con Mercado Pago.",
					"Puntos, referidos, tarjetas de regalo y mails automáticos de carrito abandonado y \"volvió al stock\".",
					"Panel de administración con permisos por sección y reportes de ventas y stock.",
					"Migración desde el sistema anterior y casi 600 tests automatizados.",
				],
			},
		],
		pdf: "",
		href: "",
		image: "",
		tags: [
			{ id: 1, name: "NestJS", path: "/assets/logos/nestjs.svg" },
			{ id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
			{ id: 3, name: "MySQL", path: "/assets/logos/mysql.svg" },
			{ id: 4, name: "Mercado Pago" },
		],
	},
	{
		id: 4,
		title: "SportQuatro",
		description: "Catálogo web y CRM para una concesionaria, con chat de WhatsApp en tiempo real para el equipo de ventas.",
		sections: [
			{
				title: "Lo destacado",
				items: [
					"Catálogo con filtros, simulador de financiación y tasación del auto propio.",
					"Bot de WhatsApp con IA que atiende consultas y deriva al vendedor cuando hace falta.",
					"Pipeline de ventas tipo Kanban y métricas del negocio, con permisos por rol.",
					"Bandeja de WhatsApp compartida en tiempo real y recordatorios automáticos de seguimiento.",
				],
			},
		],
		pdf: "",
		href: "https://sportquatro.com/",
		image: "/assets/projects/sportquatro.jpg",
		tags: [
			{ id: 1, name: "React", path: "/assets/logos/react.svg" },
			{ id: 2, name: "Material UI", path: "/assets/logos/mui.svg" },
			{ id: 3, name: "Node", path: "/assets/logos/node.svg" },
			{ id: 4, name: "Express", path: "/assets/logos/express.svg" },
			{ id: 5, name: "Socket.io", path: "/assets/logos/socketio.svg" },
			{ id: 6, name: "MySQL", path: "/assets/logos/mysql.svg" },
		],
	},
	{
		id: 5,
		title: "Boscatto Estudio",
		description: "Sistema de turnos online para una peluquería/barbería, con un panel para gestionar el negocio día a día.",
		sections: [
			{
				title: "Lo destacado",
				items: [
					"Reserva online por servicio, peluquero y horario, sin necesidad de crear una cuenta.",
					"El cliente reprograma o cancela su turno desde el link que recibe por mail.",
					"Panel con agenda, equipo, servicios, reseñas y permisos por rol.",
					"Bloqueos por vacaciones o feriados que avisan automáticamente a los clientes afectados.",
				],
			},
		],
		pdf: "",
		href: "https://boscatto.com.ar/",
		image: "/assets/projects/boscatto.jpg",
		tags: [
			{ id: 1, name: "Angular", path: "/assets/logos/angular.svg" },
			{ id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
			{ id: 3, name: "NestJS", path: "/assets/logos/nestjs.svg" },
			{ id: 4, name: "Prisma", path: "/assets/logos/prisma.svg" },
			{ id: 5, name: "MySQL", path: "/assets/logos/mysql.svg" },
		],
	},
];

export const mySocials = [
	{
		name: "WhatsApp",
		href: "https://wa.me/+543516863857",
		icon: "/assets/socials/whatsApp.svg",
	},
	{
		name: "Linkedin",
		href: "https://www.linkedin.com/in/joaquindileo/",
		icon: "/assets/socials/linkedIn.svg",
	},
	{
		name: "Github",
		href: "https://github.com/dileo24",
		icon: "/assets/socials/github.svg",
	},
];

export const experiences = [
	{
		title: "Project Manager & Project Leader",
		job: "Universidad Católica de Córdoba",
		date: "Nov 2023 - Actualidad",
		roles: [
			{
				title: "Project Manager - Project Leader",
				date: "Sep 2026 - Actualidad",
				contents: [
					"Project Manager de la aplicación móvil institucional: relevo el estado técnico y funcional de la solución, defino y priorizo el roadmap junto al equipo de desarrollo, y coordino requerimientos, integraciones y plazos con las áreas involucradas.",
					"Referente del proyecto core de contabilidad de la universidad: lidero el equipo, organizo las tareas, coordino los tiempos y programo.",
				],
			},
			{
				title: "Project Leader - Software Developer",
				date: "Ene 2025 - Actualidad",
				contents: [
					"Lidero el desarrollo y mantenimiento de un sistema de gestión de insumos y servicios para administrar pagos y recepciones con proveedores, gestionando un equipo de programadores y testers y siendo el nexo con usuarios finales e institucionales.",
				],
			},
			{
				title: "Software Developer",
				date: "Nov 2023 - Ene 2025",
				contents: ["Desarrollo full stack de sistemas institucionales."],
			},
		],
		contents: ["Utilizando Node, Express, Angular, React, SQL, AWS, TypeScript y Jira, con metodologías Scrum y Kanban."],
	},
	{
		title: "Tutor desarrollo full stack",
		job: "Desafío Latam Bootcamp",
		date: "2024 - 2025",
		contents: [
			"Guiar estudiantes a través del programa de estudio que incluye CSS, HTML, JavaScript, React, Bootstrap, Git, Node.js, PostgreSQL, Sequelize, GitHub, Express.js.",
			"Instruir con distintas prácticas, actividades y proyectos para perfeccionar sus habilidades con dicho stack.",
		],
	},
	{
		title: "Full stack developer",
		job: "CIDS (UTN FRC)",
		date: "2023",
		contents: [
			"En el Centro de investigación, desarrollo y transferencia de sistemas de información me enfoqué en el desarrollo de proyectos privados y nacionales para gestión de empresas utilizando Angular, Typescript, MongoDB y Tailwind.",
		],
	},
	{
		title: "Project Leader & Full stack developer",
		job: "GoPage Desarrollo Web",
		date: "2023",
		contents: [
			"Planificación a través de Trello y coordinación de reuniones diarias para controlar avances.",
			"Desarrollo de tareas Full Stack utilizando Node.js, Express, React, Redux, SCSS.",
			"Comunicación con los potenciales clientes para la venta de páginas web a pedido.",
		],
	},
	{
		title: "Asistente de enseñanza Full stack",
		job: "Soy Henry Bootcamp",
		date: "2022 - 2023",
		contents: [
			"Coordinar a un grupo de estudiantes para lograr la integración al grupo de estudio.",
			"Orientar a los estudiantes en los primeros pasos de la cursada.",
			"Asistir la resolución de ejercicios y promover la colaboración grupal (Pair Programming).",
		],
	},
];
export const reviews = [
	{
		name: "Jack",
		username: "@jack",
		body: "I've never seen anything like this before. It's amazing. I love it.",
		img: "https://robohash.org/jack",
	},
	{
		name: "Jill",
		username: "@jill",
		body: "I don't know what to say. I'm speechless. This is amazing.",
		img: "https://robohash.org/jill",
	},
	{
		name: "John",
		username: "@john",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "https://robohash.org/john",
	},
	{
		name: "Alice",
		username: "@alice",
		body: "This is hands down the best thing I've experienced. Highly recommend!",
		img: "https://robohash.org/alice",
	},
	{
		name: "Bob",
		username: "@bob",
		body: "Incredible work! The attention to detail is phenomenal.",
		img: "https://robohash.org/bob",
	},
	{
		name: "Charlie",
		username: "@charlie",
		body: "This exceeded all my expectations. Absolutely stunning!",
		img: "https://robohash.org/charlie",
	},
	{
		name: "Dave",
		username: "@dave",
		body: "Simply breathtaking. The best decision I've made in a while.",
		img: "https://robohash.org/dave",
	},
	{
		name: "Eve",
		username: "@eve",
		body: "So glad I found this. It has changed the game for me.",
		img: "https://robohash.org/eve",
	},
];
