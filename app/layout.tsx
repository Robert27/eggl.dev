import type { Metadata } from 'next'
import './app.css'
import { Space_Grotesk, Space_Mono } from 'next/font/google'
import Navbar from './components/neo-navbar'
import Footer from './components/sections/footer'
import Provider from './contexts/provider'

export const metadata: Metadata = {
	title: "Robert Eggl - Software Engineer & Master's Student",
	description:
		"Portfolio of Robert Eggl, Software Engineer and Master's Student specializing in Cloud Computing, Full-Stack Development, and AI.",
	keywords:
		'Robert Eggl, Software Engineer, Cloud Computing, Full-Stack Development, Artificial Intelligence, Cloud Engineering, Open Source, Portfolio',
	authors: [{ name: 'Robert Eggl' }],
	robots: 'index, follow',
	openGraph: {
		title: "Robert Eggl - Software Engineer & Master's Student",
		description:
			"Portfolio of Robert Eggl, Software Engineer and Master's Student specializing in Cloud Computing, Full-Stack Development, and AI.",
		type: 'website',
		url: 'https://eggl.dev'
	},
	metadataBase: new URL('https://eggl.dev'),
	creator: 'Robert Eggl',
	publisher: 'Robert Eggl',
	category: 'Technology',
	classification: 'Technology',
	applicationName: 'Robert Eggl',
	appleWebApp: {
		title: 'Robert Eggl',
		capable: true,
		statusBarStyle: 'black-translucent'
	}
}

const geist = Space_Grotesk({
	subsets: ['latin']
})

const mono = Space_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-mono'
})

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Robert Eggl',
	url: 'https://eggl.dev',
	image: 'https://github.com/Robert27.png',
	sameAs: [
		'https://www.linkedin.com/in/roberteggl',
		'https://github.com/Robert27',
		'https://gitlab.com/roberteggl',
		'https://x.com/roberteggl',
		'https://bsky.app/profile/eggl.dev',
		'https://www.facebook.com/eggl.robert/',
		'https://stackoverflow.com/users/15148240/robert-eggl'
	],
	jobTitle: "Software Engineer & Master's Student",
	worksFor: {
		'@type': 'CollegeOrUniversity',
		name: 'Technische Hochschule Ingolstadt'
	},
	alumniOf: {
		'@type': 'CollegeOrUniversity',
		name: 'Technische Hochschule Ingolstadt'
	},
	description:
		'Robert Eggl ist ein deutscher Entwickler für KI- und Cloud-Anwendungen. Er ist Gründer von Neuland Next und Masterstudent für Cloud Applications & Security Engineering.'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${geist.className} ${mono.variable} overflow-x-hidden min-w-0 dark`}
		>
			<head>
				<meta charSet="utf-8" />
				<link rel="me" href="https://social.tchncs.de/@roberteggl" />
				<meta name="fediverse:creator" content="@roberteggl@social.tchncs.de" />
				<link rel="canonical" href="https://eggl.dev" />
				<link
					rel="alternate"
					type="application/rss+xml"
					title="RSS Feed for Robert Eggl's Blog"
					href="https://eggl.dev/feed"
				/>
			</head>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: not a problem
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
				}}
			/>
			<body className="flex flex-col min-h-screen w-full max-w-screen overflow-x-hidden min-w-0">
				<Provider>
					<header>
						<Navbar />
					</header>
					<main className="flex-grow w-full max-w-full mx-auto px-2 sm:px-4 min-w-0 overflow-x-hidden">
						{children}
					</main>
					<Footer />
				</Provider>
			</body>
		</html>
	)
}
