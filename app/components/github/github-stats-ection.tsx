import type { GitHubData } from '@/lib/github'
import GitHubContributionCalendar from './github-contribution-calendar'
import GitHubLanguages from './github-languages'
import GitHubStatsCards from './github-stats-cards'

interface GitHubStatsSectionProps {
	githubData: GitHubData
}

const GitHubStatsSection = ({ githubData }: GitHubStatsSectionProps) => {
	const hasNoData =
		!githubData.contributions.length &&
		!githubData.stats.topLanguages.length &&
		githubData.stats.followers === 0 &&
		githubData.stats.stars === 0 &&
		githubData.stats.contributions === 0 &&
		githubData.stats.pullRequests === 0

	if (hasNoData) {
		return (
			<div className=" p-6">
				<div className="bg-primary-foreground border-[3px] border-black dark:border-white p-6 -rotate-1 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] relative overflow-hidden">
					<h3 className="text-2xl font-bold mb-2">GitHub API took a nap 😴</h3>

					<p className="text-lg mb-4">
						...check back later to see my GitHub stats!
					</p>

					<div className="font-mono text-center my-2">
						<pre className="inline-block text-left">
							{`  /\\_/\\  
 ( -.- ) zzz
 >|   |<  
   ---`}
						</pre>
					</div>

					<div className="absolute top-3 right-3 w-6 h-6 bg-blue-300 dark:bg-blue-600 border-[2px] border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] rotate-12" />
					<div className="absolute bottom-3 left-6 w-8 h-8 bg-tertiary/60 border-[2px] border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] -rotate-6" />
				</div>
			</div>
		)
	}

	return (
		<div className="">
			<GitHubStatsCards githubData={githubData} />

			<GitHubLanguages githubData={githubData} />

			<GitHubContributionCalendar githubData={githubData} />

			<div className="flex justify-end mt-6 gap-3">
				<div className="w-8 h-8 bg-tertiary border-[2px] border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]" />
				<div className="w-12 h-8 -bg border-[2px] border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]" />
				<div className="w-16 h-8 bg-tertiary/50 border-[2px] border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]" />
			</div>
		</div>
	)
}

export default GitHubStatsSection
