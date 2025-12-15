export interface Project {
	title: string
	description: string
	technologies: string[]
	github?: string
	demo?: string
	image: string
	category: 'mobile' | 'web' | 'api' | 'tool' | 'fullstack'
	featured?: boolean
	showOnMain?: boolean
}

export const projects: Project[] = [
	{
		title: 'Neuland Next',
		description:
			"A university app for TH Ingolstadt, built with React Native and Expo. As the project's founder and lead developer, I was responsible for the majority of the app's development. The app has about 4000 active users and is used by students to manage their courses, grades and schedules.",
		technologies: ['React Native', 'Expo', 'TypeScript', 'CI/CD'],
		github: 'https://github.com/neuland-ingolstadt/neuland.app-native',
		demo: 'https://neuland.app',
		image: 'images/neuland-next-app-light.webp',
		category: 'mobile',
		featured: true,
		showOnMain: true
	},
	{
		title: 'Digital Member ID',
		description:
			'A modern, full-stack member identification system with QR code generation, verification, and Apple Wallet integration. It provides a comprehensive digital identity solution that combines modern web technologies with cryptographic security, offering secure QR generation, real-time verification, Apple Wallet integration, and a dashboard for tracking scan history and statistics.',
		technologies: ['Rust', 'Next.js', 'TypeScript', 'Apple Wallet', 'QR Codes'],
		github: 'https://github.com/neuland-ingolstadt/member-id',
		demo: 'https://id.informatik.sexy',
		image: 'images/member-id.webp',
		category: 'fullstack',
		featured: true,
		showOnMain: true
	},
	{
		title: 'Campus Life Events',
		description:
			'A fullstack web application for managing and displaying campus events at TH Ingolstadt. Built with Rust, Redis and Next.js, it allows university clubs to create and manage events, while students can browse them in Neuland Next app.',
		technologies: ['Rust', 'Next.js', 'Redis', 'TypeScript'],
		github: 'https://github.com/neuland-ingolstadt/campus-life-events',
		demo: 'https://cl.neuland.ing',
		image: 'images/cle.webp',
		category: 'fullstack',
		showOnMain: false
	},
	{
		title: 'Expo GitHub Cache',
		description:
			"A plugin that dramatically speeds up mobile app development by caching build files in GitHub Releases. Instead of waiting for full compilation every time, it reuses previously built versions when your code hasn't changed, saving significant development time.",
		technologies: [
			'TypeScript',
			'Expo',
			'GitHub API',
			'Build Caching',
			'NPM Package'
		],
		github: 'https://github.com/robert27/expo-github-cache',
		demo: 'https://www.npmjs.com/package/@eggl-js/expo-github-cache',
		image: 'images/cache.webp',
		category: 'tool',
		featured: true,
		showOnMain: true
	},
	{
		title: 'Neuland API',
		description:
			'A GraphQL API for the Neuland apps and services, built with Node.js and Apollo Server. It provides a unified interface for accessing data from various sources, like the meal plan, campus events and more.',
		technologies: ['Node.js', 'Apollo Server', 'GraphQL', 'PostgreSQL'],
		github: 'https://github.com/neuland-ingolstadt/neuland.app-backend',
		demo: 'https://api.neuland.app',
		image: 'images/backend.png',
		category: 'api',
		showOnMain: false
	},
	{
		title: 'Neuland Kubernetes',
		description:
			'Built and manage the self-hosted K3s infrastructure for Neuland services using GitOps principles. The infrastructure handles deployment automation, monitoring, and scaling for all Neuland applications, ensuring high availability and efficient resource management.',
		technologies: [
			'Kubernetes',
			'K3s',
			'GitOps',
			'FluxCD',
			'Docker',
			'Infrastructure'
		],
		github: 'https://github.com/neuland-ingolstadt/flux-infra',
		image: 'images/k3s.webp',
		category: 'tool',
		showOnMain: false
	},
	{
		title: 'Neuland Website',
		description:
			'The main landing page for the Neuland club, built with Next.js and Tailwind CSS. It serves as a showcase for our projects and provides information about the club and its events. I utilized a retro terminal style to effectively present our values, incorporating hidden features to enhance its appeal.',
		technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Analytics'],
		github: 'https://github.com/neuland-ingolstadt/neuland-website',
		demo: 'https://neuland-ingolstadt.de',
		image: 'images/neuland-website.webp',
		category: 'web',
		showOnMain: false
	},
	{
		title: 'Personal Website',
		description:
			'This personal portfolio website built with Next.js, featuring a modern neo-brutalist design with smooth animations and interactive elements. The site showcases my projects, skills, and experience in an engaging way.',
		technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
		demo: 'https://eggl.dev',
		github: 'https://github.com/robert27/eggl.dev',
		image: 'images/personal.webp',
		category: 'web',
		showOnMain: false
	},
	{
		title: 'Neuland App Website',
		description:
			'The landing page and documentation for the Neuland Next app, built with Next.js and Tailwind CSS. It serves as a showcase for the app and provides information about the app and its features.',
		technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Nextra'],
		github: 'https://github.com/neuland-ingolstadt/neuland.app-docs',
		demo: 'https://neuland.app',
		image: 'images/next-docs.webp',
		category: 'web',
		showOnMain: false
	},
	{
		title: 'Trajectory Trace Product Page',
		description:
			'At e:fs TechHub, I developed the product page for Trajectory Trace, showcasing its features and benefits. It combines a Docusaurus-powered documentation site with a custom React frontpage, delivering a seamless user experience.',
		technologies: ['React', 'Docusaurus', 'TypeScript', 'CSS'],
		demo: 'https://city.dev.sdk-cloud.de/docs/',
		image: 'images/ttd.webp',
		category: 'web',
		showOnMain: false
	},
	{
		title: 'Trajectory Trace',
		description:
			"At e:fs TechHub, I contributed to the development of Trajectory Trace, a cutting-edge platform for realtime traffic data processing and analysis. My work focused on enhancing the system's scalability and performance in both Rust backend and Next.js frontend.",
		technologies: ['Rust', 'Next.js', 'TypeScript', 'MQTT', 'Kafka'],
		image: 'images/tt.webp',
		demo: 'https://city.dev.sdk-cloud.de/',
		category: 'fullstack',
		showOnMain: false
	},
	{
		title: 'Home Assistant Integration',
		description:
			'To quickly retrieve the current meal plans of the TH Ingolstadt canteens, I developed a Home Assistant integration that fetches data from the Neuland API and exposes it via sensors. The integration also allows customization of locations and price groups.',
		technologies: ['Home Assistant', 'Python', 'GraphQL'],
		image: 'images/ha.webp',
		github: 'https://github.com/robert27/hacs-thi-mensa',
		category: 'tool',
		showOnMain: false
	}
]

export const getMainPageProjects = () => {
	return projects.filter((project) => project.showOnMain === true)
}

export const getFeaturedProjects = () => {
	return projects.filter((project) => project.featured === true)
}

export const getAllProjects = () => {
	return projects
}
