import { allBlogs } from 'contentlayer/generated'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://eggl.dev'

	// Static pages
	const staticPages = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 1.0
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 0.8
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 0.9
		},
		{
			url: `${baseUrl}/keys`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7
		},
		{
			url: `${baseUrl}/legal/imprint`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.4
		},
		{
			url: `${baseUrl}/legal/privacy`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.4
		}
	]

	// Blog posts
	const blogPosts = allBlogs.map((post) => ({
		url: `${baseUrl}/blog/${post.slug}`,
		lastModified: new Date(post.date),
		changeFrequency: 'monthly' as const,
		priority: 0.6
	}))

	return [...staticPages, ...blogPosts]
}
