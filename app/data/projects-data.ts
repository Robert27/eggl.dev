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
