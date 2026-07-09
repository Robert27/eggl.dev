import type { Metadata } from 'next'
import './app.css'
import { Space_Grotesk, Space_Mono } from 'next/font/google'
import { JsonLd } from './components/json-ld'
import Navbar from './components/neo-navbar'
import Footer from './components/sections/footer'
import Provider from './contexts/provider'
import {
	createWebsiteJsonLd,
	PERSON_DESCRIPTION,
	PERSON_TAGLINE
} from './lib/structured-data'

export const metadata: Metadata = {
	title: `Robert Eggl - ${PERSON_TAGLINE}`,
	description: PERSON_DESCRIPTION,
	keywords:
		'Robert Eggl, SAP, Fullstack Developer, Business Process Consultant, Enterprise Software, Cloud Computing, Full-Stack Development, Artificial Intelligence, Open Source, Portfolio',
	authors: [{ name: 'Robert Eggl' }],
	robots: 'index, follow',
	openGraph: {
		title: `Robert Eggl - ${PERSON_TAGLINE}`,
		description: PERSON_DESCRIPTION,
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

const websiteJsonLd = createWebsiteJsonLd()

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
				<JsonLd data={websiteJsonLd} />
			</head>
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
