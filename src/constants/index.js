export const myProjects = [
	{
		id: 1,
		title: "Gestión financiera con asistente de WhatsApp",
		description:
			"Plataforma web en producción para un empresario con varios negocios (venta de autos, peluquería, un auto de Uber y una cartera de préstamos). Centraliza lo que antes llevaba en planillas de Excel —ingresos, gastos, cuentas, préstamos, deudas, patrimonio y reportes— y se puede manejar hablándole por WhatsApp: con un audio, una foto de un ticket o un texto, el sistema interpreta qué cargar y lo guarda después de que el usuario confirma.",
		sections: [
			{
				title: "Qué resuelve",
				items: [
					"Tablero con ingresos, gastos y patrimonio del mes, con cada negocio por separado y en pesos y dólares (convertidos con el dólar de cada fecha).",
					"Préstamos y deudas con interés calculado día a día, cobros parciales y cuotas.",
					"Reportes anuales (resúmenes, gráficos y promedios) sobre un año fiscal propio de cada usuario.",
					"Asistente de WhatsApp con IA: carga por texto, voz o foto, consultas (\"¿cuánto tengo en Mercado Pago?\"), recordatorios y deshacer.",
					"Integración con una plataforma externa de compraventa de autos que envía stock, ventas, gastos y cuentas entre socios por webhooks autenticados.",
					"Multiusuario con datos aislados, vistas limitadas por cuenta, cuentas de solo lectura (para la contadora) e ingreso con Face ID o huella (passkeys).",
					"Importación del historial desde Excel con verificación mes a mes contra los totales originales.",
				],
			},
			{
				title: "Desafíos técnicos",
				items: [
					"Modelado de dinero: decimales exactos, doble moneda, intereses diarios y un patrimonio mensual calculado con registros vigentes por período.",
					"Asistente de IA seguro: nada se guarda sin confirmación, todo se puede deshacer y los datos de cada usuario nunca se mezclan.",
					"Integración con terceros tolerante a avisos repetidos, incompletos o duplicados (idempotencia y validación).",
					"Producto real en uso diario, mobile first: ~20.000 líneas de TypeScript, 37 modelos de datos, despliegue continuo con migraciones automáticas y más de 300 pruebas automáticas (Vitest + end-to-end en navegador).",
				],
			},
		],
		href: "",
		logo: "",
		image: "/assets/projects/finanzas.jpg",
		tags: [
			{ id: 1, name: "Angular", path: "/assets/logos/angular.svg" },
			{ id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
			{ id: 3, name: "NestJS", path: "/assets/logos/nestjs.svg" },
			{ id: 4, name: "Prisma", path: "/assets/logos/prisma.svg" },
			{ id: 5, name: "MySQL", path: "/assets/logos/mysql.svg" },
			{ id: 6, name: "WhatsApp API" },
			{ id: 7, name: "IA" },
		],
	},
	{
		id: 2,
		title: "Car Place",
		description:
			"Plataforma web y CRM en producción para una agencia de autos usados de Córdoba: un sitio público para comprar y vender autos, y un CRM privado para que los dos socios administren todo el negocio.",
		sections: [
			{
				title: "Sitio público",
				items: [
					"Catálogo de stock con filtros, fichas con fotos y precios con descuento.",
					"Formularios para consultar, vender el auto propio y financiarlo.",
					"Páginas institucionales y contacto directo por WhatsApp.",
				],
			},
			{
				title: "CRM de gestión",
				items: [
					"Stock: alta y edición de autos con fotos, datos de compra, titularidad (de un socio o 50/50), precios de InfoAuto y alistaje por tareas.",
					"Ventas y finanzas: ventas con conversión de moneda según el dólar blue de cada fecha, gastos, cuentas entre socios y facturación.",
					"Planificación del negocio: inversiones, marketing e ideas con plazos y estados, más calendario, tareas, conversaciones, consultas y usuarios.",
					"Comandos de voz: el administrador envía audios que se transcriben con Whisper y se interpretan con GPT para ejecutar acciones.",
					"Sincronización automática con un sistema de finanzas externo, con una vista distinta para cada socio según su porcentaje.",
				],
			},
			{
				title: "Destacado",
				items: [
					"Más de 10 módulos en el CRM y lógica financiera multimoneda: cada registro guarda el dólar de su fecha, así los totales históricos no cambian con la cotización del día.",
					"Cuentas entre socios con compensación automática (FIFO) y pagos parciales; un gasto de la empresa se divide 50/50 con un solo switch.",
					"Sincronización con el sistema de finanzas mediante cola con debounce y reintentos, envíos idempotentes y resincronización completa cada hora.",
					"58 tests automáticos y despliegue continuo desde main con GitHub Actions.",
				],
			},
		],
		href: "https://carplace.ar/",
		logo: "",
		image: "/assets/projects/carplace.jpg",
		tags: [
			{ id: 1, name: "React", path: "/assets/logos/react.svg" },
			{ id: 2, name: "Material UI", path: "/assets/logos/mui.svg" },
			{ id: 3, name: "Node", path: "/assets/logos/node.svg" },
			{ id: 4, name: "Express", path: "/assets/logos/express.svg" },
			{ id: 5, name: "Sequelize", path: "/assets/logos/sequelize.svg" },
			{ id: 6, name: "MariaDB" },
			{ id: 7, name: "OpenAI" },
		],
	},
	{
		id: 3,
		title: "Los Matis",
		status: "En desarrollo",
		description:
			"E-commerce y panel de administración para una regalería que vende en local, en la web y en Mercado Libre. Reemplaza un sistema de escritorio heredado y centraliza catálogo, stock, pedidos, cobros y atención al cliente. Desarrollo el backend como API REST, trabajando en equipo con front, diseño y testing.",
		sections: [
			{
				title: "Qué resuelve",
				items: [
					"Tienda online: catálogo con variantes, combos, carrito, checkout y cobros con Mercado Pago (Checkout Pro) confirmados por webhook firmado.",
					"Panel de administración con permisos por sección (ver y gestionar), dashboard y reportes de ventas, productos más vendidos y rotación de stock.",
					"Fidelización y marketing: programa de puntos, referidos, tarjetas de regalo digitales, newsletter y encuestas post-compra.",
					"Automatizaciones: avisos de \"volvió al stock\", recuperación de carritos abandonados y mails transaccionales en cada cambio de estado del pedido.",
					"Multimoneda con cotización automática del dólar (API de Bluelytics).",
					"Seguridad y operación: autenticación JWT, recuperación de contraseña con tokens de un solo uso y backups automáticos.",
				],
			},
			{
				title: "Hitos técnicos",
				items: [
					"Integración de pagos de punta a punta con verificación de firma, idempotencia y control de importes.",
					"Cobro combinado con saldos de puntos y tarjetas de regalo sin condiciones de carrera (saldos atómicos).",
					"Migración de datos desde el sistema legado y migraciones automáticas en cada deploy (Render, Vercel y Aiven).",
					"Más de 570 requests y casi 600 tests automatizados en Bruno que funcionan como documentación viva para el tester; trabajo por tickets en Trello e investigación documentada de facturación electrónica ante ARCA.",
				],
			},
		],
		href: "",
		logo: "",
		image: "",
		tags: [
			{ id: 1, name: "NestJS", path: "/assets/logos/nestjs.svg" },
			{ id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
			{ id: 3, name: "TypeORM" },
			{ id: 4, name: "MySQL", path: "/assets/logos/mysql.svg" },
			{ id: 5, name: "Mercado Pago" },
		],
	},
	{
		id: 4,
		title: "Boscatto Estudio",
		description: "Sistema de reservas online para una peluquería/barbería, con panel de administración completo para gestionar el negocio día a día.",
		sections: [
			{
				title: "Vista del cliente",
				items: [
				"Reserva de turno online elegido por servicio, peluquero, fecha y horario disponible.",
				"Autogestión del turno vía link enviado por mail: el cliente puede reprogramarlo o cancelarlo sin necesidad de crear una cuenta.",
				"Catálogo de servicios con fotos y videos, precios y beneficios incluidos.",
				"Reseñas de Google integradas a la web y sección de contacto con mapa, WhatsApp y redes sociales.",
				],
			},
			{
				title: "Panel de administrador",
				items: [
				"Cuentas de staff con permisos granulares por sección (turnos, peluqueros, servicios, reseñas, bloqueos, usuarios) y un rol superadmin.",
				"Calendario completo de turnos: alta manual, reprogramación y seguimiento de 5 estados (confirmado, asistió, no asistió, cancelado por cliente/por el local).",
				"Gestión del equipo de peluqueros con foto de perfil y horario semanal validado (sin superposición de rangos).",
				"Catálogo de servicios con galería de fotos y video que se optimiza automáticamente al subirse.",
				"Bloqueos de agenda para vacaciones o feriados: cancela en cascada los turnos afectados y notifica por mail a cada cliente con un link para reprogramar.",
				"Moderación de reseñas (ocultar las de Google, cargar y editar las manuales) y configuración de los datos del negocio para la web pública.",
				],
			},
		],
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
		id: 5,
		title: "SportQuatro",
		description: "Concesionaria de autos con catálogo público y un CRM interno para el equipo de ventas: pipeline de consultas, stock, ventas y chat de WhatsApp en tiempo real.",
		sections: [
			{
				title: "Vista del cliente",
				items: [
				"Catálogo de vehículos con filtros por marca, año, precio, kilometraje y categoría.",
				"Simulador de financiación, ficha de detalle por vehículo y formulario para tasar/vender el auto propio.",
				"Consulta directa por WhatsApp, atendida por un bot asistido por IA que deriva al equipo de ventas cuando corresponde.",
				],
			},
			{
				title: "Panel de administrador",
				items: [
				"CRM con pipeline de consultas en formato Kanban (nuevo, con oferta, seguimiento, cerrado, perdido) con reordenamiento por drag & drop, y visibilidad de datos según el rol (admin, supervisor, vendedor).",
				"Dashboard con métricas del negocio: consultas del mes, origen de las consultas, tiempo promedio de cierre y evolución semanal/mensual de consultas y ventas.",
				"Gestión de stock de vehículos con checklist de alistaje por unidad y reordenamiento de fotos.",
				"Registro de ventas por mes, con búsqueda y permisos distintos para vendedores, supervisores y administradores.",
				"Bandeja de conversaciones de WhatsApp en tiempo real (Socket.io), compartida por el equipo, con mensajes predefinidos y sincronizada con el bot de IA que también procesa comandos de voz.",
				"Gestor de tareas y recordatorios, administración de cuentas del equipo, y tareas automáticas: recordatorios de seguimiento, backup semanal por mail y limpieza de conversaciones inactivas.",
				],
			},
		],
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
		title: "Project Manager & Project Leader",
		job: "Universidad Católica de Córdoba",
		date: "Sep 2026 - Actualidad",
		contents: [
			"Project Manager de la aplicación móvil institucional: relevo el estado técnico y funcional de la solución (backend, infraestructura y aplicación), defino y priorizo el roadmap de nuevas funcionalidades junto al equipo de desarrollo, y actúo como nexo con las áreas involucradas para coordinar requerimientos, integraciones y plazos.",
			"Referente del proyecto core de contabilidad de la universidad: lidero el equipo, organizo las tareas, coordino los tiempos y participo activamente en el desarrollo.",
			"Utilizando Flutter, Go, Jira, metodología Scrum.",
		],
	},
	{
		title: "Project Leader & Software Developer",
		job: "Universidad Católica de Córdoba",
		date: "Ene 2025 - Actualidad",
		contents: [
			"Lidero el desarrollo y mantenimiento de un sistema de gestión de insumos y servicios utilizado para administrar pagos y recepciones con proveedores. Como referente del proyecto, gestiono un equipo de programadores y testers, siendo el nexo directo con usuarios finales e institucionales.",
			"Además, colaboro ocasionalmente en otros proyectos como desarrollador y guía técnico.",
			"Utilizando Angular, PHP, Node, Laravel, SQL, AWS, Typescript, Jira, metodología Scrum.",
		],
	},
	{
		title: "Software Developer",
		job: "Universidad Católica de Córdoba",
		date: "Nov 2023 - Ene 2025",
		contents: [
			"Desarrollo full stack de sistemas institucionales utilizando React, Angular, PHP, Laravel, Node, SQL y AWS, trabajando con metodología Scrum.",
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
