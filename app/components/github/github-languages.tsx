import { Code } from 'lucide-react'
import type { GitHubData } from '@/lib/github'

interface GitHubLanguagesProps {
	githubData: GitHubData
}

const GitHubLanguages = ({ githubData }: GitHubLanguagesProps) => {
	return (
		<div className="mt-8 mb-8">
			<h4 className="font-mono font-bold text-xl mb-4 flex items-center -text">
				<Code size={20} className="mr-2 text-tertiary" />
				Top Languages
			</h4>

			<div className="flex flex-wrap gap-3">
				{githubData.stats.topLanguages.map((language, index) => (
					<div key={index} className="neo-card py-2 px-3">
						<span className="font-mono font-bold">{language}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default GitHubLanguages
