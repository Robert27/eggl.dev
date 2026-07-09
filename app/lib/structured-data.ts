export const SITE_URL = 'https://eggl.dev'
export const PERSON_ID = `${SITE_URL}/#person`
export const WEBSITE_ID = `${SITE_URL}/#website`

export const PERSON_JOB_TITLE =
	'Fullstack Developer & Business Process Consultant'

export const PERSON_TAGLINE = `${PERSON_JOB_TITLE} @ SAP`

export const PERSON_DESCRIPTION =
	'Portfolio of Robert Eggl, Fullstack Developer and Business Process Consultant at SAP, specializing in enterprise software, cloud-native development, and AI.'

export const personSameAs = [
	'https://www.linkedin.com/in/roberteggl',
	'https://github.com/Robert27',
	'https://gitlab.com/roberteggl',
	'https://x.com/roberteggl',
	'https://bsky.app/profile/eggl.dev',
	'https://www.facebook.com/eggl.robert/',
	'https://stackoverflow.com/users/15148240/robert-eggl',
	'https://social.tchncs.de/@roberteggl'
]

export function serializeJsonLd(data: Record<string, unknown>) {
	return JSON.stringify(data).replace(/</g, '\\u003c')
}

export function createWebsiteJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': WEBSITE_ID,
		url: SITE_URL,
		name: 'Robert Eggl',
		description: PERSON_DESCRIPTION,
		inLanguage: 'en',
		publisher: {
			'@type': 'Person',
			'@id': PERSON_ID,
			name: 'Robert Eggl',
			url: SITE_URL
		}
	}
}

interface RecentPost {
	title: string
	slug: string
	date: string
}

interface ProfilePageOptions {
	dateModified: string
	recentPosts: RecentPost[]
	followers?: number
	stars?: number
	blogPostCount: number
}

export function createProfilePageJsonLd({
	dateModified,
	recentPosts,
	followers = 0,
	stars = 0,
	blogPostCount
}: ProfilePageOptions) {
	const interactionStatistic = []

	if (followers > 0) {
		interactionStatistic.push({
			'@type': 'InteractionCounter',
			interactionType: 'https://schema.org/FollowAction',
			userInteractionCount: followers
		})
	}

	if (stars > 0) {
		interactionStatistic.push({
			'@type': 'InteractionCounter',
			interactionType: 'https://schema.org/LikeAction',
			userInteractionCount: stars
		})
	}

	const mainEntity: Record<string, unknown> = {
		'@type': 'Person',
		'@id': PERSON_ID,
		name: 'Robert Eggl',
		alternateName: 'Robert27',
		identifier: 'roberteggl',
		url: SITE_URL,
		image: 'https://github.com/Robert27.png',
		description: PERSON_DESCRIPTION,
		jobTitle: PERSON_JOB_TITLE,
		sameAs: personSameAs,
		worksFor: {
			'@type': 'Organization',
			name: 'SAP'
		},
		alumniOf: {
			'@type': 'CollegeOrUniversity',
			name: 'Technische Hochschule Ingolstadt'
		}
	}

	if (interactionStatistic.length > 0) {
		mainEntity.interactionStatistic = interactionStatistic
	}

	if (blogPostCount > 0) {
		mainEntity.agentInteractionStatistic = {
			'@type': 'InteractionCounter',
			interactionType: 'https://schema.org/WriteAction',
			userInteractionCount: blogPostCount
		}
	}

	return {
		'@context': 'https://schema.org',
		'@type': 'ProfilePage',
		'@id': `${SITE_URL}/#profilepage`,
		url: SITE_URL,
		name: `Robert Eggl - ${PERSON_TAGLINE}`,
		dateCreated: '2020-10-01T00:00:00Z',
		dateModified,
		isPartOf: { '@id': WEBSITE_ID },
		mainEntity,
		hasPart: recentPosts.map((post) => ({
			'@type': 'Article',
			headline: post.title,
			url: `${SITE_URL}/blog/${post.slug}`,
			datePublished: post.date,
			author: { '@id': PERSON_ID }
		}))
	}
}
