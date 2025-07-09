import { NextResponse } from 'next/server'
import { getGitHubData } from '@/lib/github'

/**
 * Public facing API endpoint for GitHub data so I can use it for other projects too
 */
export async function GET() {
	try {
		const data = await getGitHubData()
		return NextResponse.json(data, { status: 200 })
	} catch (error) {
		console.error('Failed to fetch GitHub data:', error)

		return NextResponse.json(
			{
				error: 'Failed to fetch GitHub data',
				contributions: [],
				stats: {
					followers: 0,
					stars: 0,
					contributions: 0,
					pullRequests: 0,
					topLanguages: []
				}
			},
			{ status: 500 }
		)
	}
}
