'use client'
import { motion } from 'framer-motion'
import { GitBranch } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/components/ui/tooltip'
import { formatDate, type GitHubData, getContributionColor } from '@/lib/github'

interface GitHubContributionCalendarProps {
	githubData: GitHubData
}

const GitHubContributionCalendar = ({
	githubData
}: GitHubContributionCalendarProps) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.2 }
		)

		if (containerRef.current) {
			observer.observe(containerRef.current)
		}

		return () => {
			observer.disconnect()
		}
	}, [])

	const generateDelayedPixelVariants = (
		dayIndex: number,
		weekIndex: number
	) => {
		const baseDelay = dayIndex * 0.02 + weekIndex * 0.01

		return {
			hidden: {
				opacity: 0,
				scale: 0
			},
			visible: {
				opacity: 1,
				scale: 1,
				transition: {
					duration: 0.3,
					delay: baseDelay,
					ease: 'easeOut' as const
				}
			}
		}
	}

	return (
		<div className="mt-8 mb-8" ref={containerRef}>
			<h4 className="font-mono font-bold text-xl mb-4 flex items-center -text">
				<GitBranch size={20} className="mr-2 text-tertiary" />
				Contribution Calendar
			</h4>

			<div className="neo-card-static p-5 inline-block">
				<div className="flex flex-col gap-1 mx-4">
					<div className="flex items-center mb-3 mt-1">
						<div className="w-full">
							{(() => {
								if (githubData.contributions.length > 0) {
									const firstDate = new Date(githubData.contributions[0].date)
									const lastDate = new Date(
										githubData.contributions[
											githubData.contributions.length - 1
										].date
									)

									const firstMonthYear = firstDate.toLocaleDateString('en-US', {
										month: 'short',
										year: 'numeric'
									})

									const lastMonthYear = lastDate.toLocaleDateString('en-US', {
										month: 'short',
										year: 'numeric'
									})

									return (
										<div className="font-mono text-sm font-bold">
											{firstMonthYear} - {lastMonthYear}
										</div>
									)
								}
								return null
							})()}
						</div>
					</div>

					<div className="flex">
						<div className="w-10 flex-shrink-0">
							<div className="h-4 text-right text-xs font-mono" />
							{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
								<div
									key={day}
									className="h-3 mt-1 text-right pr-2 text-xs font-mono opacity-70"
								>
									{day}
								</div>
							))}
						</div>

						<div className="overflow-x-auto pb-2 max-w-[calc(100vw-140px)]">
							<div className="flex flex-col">
								<div className="flex gap-1 h-4">
									{Array.from({
										length: Math.ceil(githubData.contributions.length / 7)
									}).map((_, i) => (
										<div key={i} className="w-3 h-3 flex-shrink-0" />
									))}
								</div>

								{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
									(day, dayIndex) => (
										<div key={day} className="flex gap-1 mt-1 w-max">
											{Array.from({
												length: Math.ceil(githubData.contributions.length / 7)
											}).map((_, weekIndex) => {
												const contribIndex = weekIndex * 7 + dayIndex
												const contribution =
													contribIndex < githubData.contributions.length
														? githubData.contributions[contribIndex]
														: null

												return contribution ? (
													<TooltipProvider key={weekIndex} delayDuration={0}>
														<Tooltip>
															<TooltipTrigger asChild>
																<motion.div
																	initial="hidden"
																	variants={generateDelayedPixelVariants(
																		dayIndex,
																		weekIndex
																	)}
																	animate={isVisible ? 'visible' : 'hidden'}
																	className={`w-3 h-3 flex-shrink-0 ${getContributionColor(contribution.count)} border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white cursor-pointer transition-colors`}
																/>
															</TooltipTrigger>
															<TooltipContent side="top">
																<span className="font-bold">
																	{formatDate(contribution.date)}
																</span>
																:{' '}
																<span className="text-accent font-bold">
																	{contribution.count} contributions
																</span>
															</TooltipContent>
														</Tooltip>
													</TooltipProvider>
												) : (
													<div key={weekIndex} className="w-3 h-3" />
												)
											})}
										</div>
									)
								)}
							</div>
						</div>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
						transition={{ delay: 0.8, duration: 0.5 }}
						className="mt-6 flex items-center justify-end gap-2 text-xs font-mono"
					>
						<span className="mr-1">Less</span>
						<div className="w-3 h-3 bg-neutral-800 border  dark:border-white/10" />
						<div className="w-3 h-3 bg-accent/30 border border-black/10 dark:border-white/10" />
						<div className="w-3 h-3 bg-accent/60 border border-black/10 dark:border-white/10" />
						<div className="w-3 h-3 bg-accent/85 border border-black/10 dark:border-white/10" />
						<div className="w-3 h-3 bg-accent] border border-black/10 dark:border-white/10" />
						<span className="ml-1">More</span>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default GitHubContributionCalendar
