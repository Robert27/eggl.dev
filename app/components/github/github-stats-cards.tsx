import { Code, GitBranch, GitPullRequest, Star } from 'lucide-react'
import type { GitHubData } from '@/lib/github'

interface GitHubStatsCardsProps {
	githubData: GitHubData
}

const GitHubStatsCards = ({ githubData }: GitHubStatsCardsProps) => {
	const renderCard = (card: {
		icon: React.ReactNode
		title: string
		description: string
	}) => (
		<div className="neo-card p-3 h-full w-full">
			<div className="mb-2">{card.icon}</div>
			<h3 className="font-mono text-base font-bold mb-1">{card.title}</h3>
			<p className="text-muted-foreground text-sm">{card.description}</p>
		</div>
	)

	const statsCards = [
		{
			icon: <GitBranch className="h-5 w-5 text-tertiary" />,
			title: `${githubData.stats.contributions} Contributions`,
			description: 'Code commits in the last year'
		},
		{
			icon: <GitPullRequest className="h-5 w-5 text-tertiary" />,
			title: `${githubData.stats.pullRequests} Pull Requests`,
			description: 'All time pull requests made'
		},
		{
			icon: <Code className="h-5 w-5 text-tertiary" />,
			title: `${githubData.stats.followers} Followers`,
			description: 'GitHub profile followers'
		},
		{
			icon: <Star className="h-5 w-5 text-tertiary" />,
			title: `${githubData.stats.stars} Stars`,
			description: 'Received on GitHub projects'
		}
	]

	return (
		<div className="relative mb-8">
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{statsCards.map((card, index) => (
					<div key={index} className="p-1">
						{renderCard(card)}
					</div>
				))}
			</div>
		</div>
	)
}

export default GitHubStatsCards
