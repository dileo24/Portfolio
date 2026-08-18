export const myProjects = [
	{
		id: 1,
		title: "Boscatto Estudio",
		description: "Sistema de reservas online para una peluquería/barbería, con panel de administración completo para gestionar el negocio día a día.",
		subDescription: {
			client: [
				"Reserva de turno online elegido por servicio, peluquero, fecha y horario disponible.",
				"Autogestión del turno vía link enviado por mail: el cliente puede reprogramarlo o cancelarlo sin necesidad de crear una cuenta.",
				"Catálogo de servicios con fotos y videos, precios y beneficios incluidos.",
				"Reseñas de Google integradas a la web y sección de contacto con mapa, WhatsApp y redes sociales.",
			],
			admin: [
				"Cuentas de staff con permisos granulares por sección (turnos, peluqueros, servicios, reseñas, bloqueos, usuarios) y un rol superadmin.",
				"Calendario completo de turnos: alta manual, reprogramación y seguimiento de 5 estados (confirmado, asistió, no asistió, cancelado por cliente/por el local).",
				"Gestión del equipo de peluqueros con foto de perfil y horario semanal validado (sin superposición de rangos).",
				"Catálogo de servicios con galería de fotos y video que se optimiza automáticamente al subirse.",
				"Bloqueos de agenda para vacaciones o feriados: cancela en cascada los turnos afectados y notifica por mail a cada cliente con un link para reprogramar.",
				"Moderación de reseñas (ocultar las de Google, cargar y editar las manuales) y configuración de los datos del negocio para la web pública.",
			],
		},
		href: "https://boscatto.com.ar/",
		logo: "",
		image: "/assets/projects/boscatto.jpg",
		tags: [
			{ id: 1, name: "Angular", path: "/assets/logos/angular.svg" },
			{ id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
			{ id: 3, name: "NestJS", path: "/assets/logos/nestjs.svg" },
			{ id: 4, name: "Prisma", path: "/assets/logos/prisma.svg" },
			{ id: 5, name: "MySQL", path: "/assets/logos/mysql.svg" },
		],
	},
	{
		id: 2,
		title: "SportQuatro",
		description: "Concesionaria de autos con catálogo público y un CRM interno para el equipo de ventas: pipeline de consultas, stock, ventas y chat de WhatsApp en tiempo real.",
		subDescription: {
			client: [
				"Catálogo de vehículos con filtros por marca, año, precio, kilometraje y categoría.",
				"Simulador de financiación, ficha de detalle por vehículo y formulario para tasar/vender el auto propio.",
				"Consulta directa por WhatsApp, atendida por un bot asistido por IA que deriva al equipo de ventas cuando corresponde.",
			],
			admin: [
				"CRM con pipeline de consultas en formato Kanban (nuevo, con oferta, seguimiento, cerrado, perdido) con reordenamiento por drag & drop, y visibilidad de datos según el rol (admin, supervisor, vendedor).",
				"Dashboard con métricas del negocio: consultas del mes, origen de las consultas, tiempo promedio de cierre y evolución semanal/mensual de consultas y ventas.",
				"Gestión de stock de vehículos con checklist de alistaje por unidad y reordenamiento de fotos.",
				"Registro de ventas por mes, con búsqueda y permisos distintos para vendedores, supervisores y administradores.",
				"Bandeja de conversaciones de WhatsApp en tiempo real (Socket.io), compartida por el equipo, con mensajes predefinidos y sincronizada con el bot de IA que también procesa comandos de voz.",
				"Gestor de tareas y recordatorios, administración de cuentas del equipo, y tareas automáticas: recordatorios de seguimiento, backup semanal por mail y limpieza de conversaciones inactivas.",
			],
		},
		href: "https://sportquatro.com/",
		logo: "",
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
		title: "Project leader & Software developer",
		job: "Universidad Católica de Córdoba",
		date: "2023 - Actualidad",
		contents: [
			"Lidero el desarrollo y mantenimiento de un sistema de gestión de insumos y servicios utilizado para administrar pagos y recepciones con proveedores. Como referente del proyecto, gestiono un equipo de programadores y testers, siendo el nexo directo con usuarios finales e institucionales.",
			"Además, colaboro en otros proyectos como desarrollador y guía técnico.",
			"Utilizando Angular, PHP, Node, Laravel, SQL, AWS, Typescript, Jira, metodología Scrum.",
		],
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
