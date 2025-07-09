import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'The Blog. - Robert Eggl',
	description:
		'Thoughts, tutorials, and insights on software development, design, and technology. Explore articles on cloud computing, full-stack development, and AI.',
	keywords:
		'blog, software development, cloud computing, full-stack development, AI, tutorials, technology insights, Robert Eggl',
	authors: [{ name: 'Robert Eggl' }],
	robots: 'index, follow',
	openGraph: {
		title: 'The Blog. - Robert Eggl',
		description:
			'Thoughts, tutorials, and insights on software development, design, and technology.',
		type: 'website',
		url: 'https://eggl.dev/blog',
		siteName: 'Robert Eggl',
		images: [
			{
				url: 'https://eggl.dev/opengraph-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Robert Eggl Blog'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'The Blog. - Robert Eggl',
		description:
			'Thoughts, tutorials, and insights on software development, design, and technology.',
		images: ['https://eggl.dev/opengraph-image.jpg']
	},
	other: {
		'og:locale': 'en_US',
		'og:type': 'website'
	}
}

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Blog',
	name: 'Robert Eggl - The Blog.',
	description:
		'Thoughts, tutorials, and insights on software development, design, and technology.',
	url: 'https://eggl.dev/blog',
	author: {
		'@type': 'Person',
		name: 'Robert Eggl',
		url: 'https://eggl.dev',
		jobTitle: "Software Engineer & Master's Student"
	},
	publisher: {
		'@type': 'Person',
		name: 'Robert Eggl',
		url: 'https://eggl.dev'
	},
	mainEntityOfPage: {
		'@type': 'WebPage',
		'@id': 'https://eggl.dev/blog'
	}
}

export default function BlogLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
				}}
			/>
			<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{children}
			</div>
		</>
	)
}
