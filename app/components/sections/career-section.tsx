'use client'
import { useEffect, useRef, useState } from 'react'
import type { GitHubData } from '@/lib/github'
import GitHubStatsSection from '../github/github-stats-ection'
import SectionHeader from '../section-header'

const emptyData: GitHubData = {
	contributions: [],
	stats: {
		followers: 0,
		stars: 0,
		contributions: 0,
		pullRequests: 0,
		topLanguages: []
	}
}

const GitHubStatsSkeleton = () => {
	return (
		<div className="">
			<div className="relative mb-8">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{Array.from({ length: 4 }).map((_, index) => (
						<div key={index} className="p-1">
							<div className="neo-card p-3 h-full w-full relative overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent animate-pulse" />
								<div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />

								<div className="mb-2">
									<div className="w-5 h-5 bg-accent/30 rounded animate-pulse" />
								</div>

								<div className="h-4 bg-accent/20 rounded mb-1 animate-pulse" />

								<div className="h-3 bg-accent/15 rounded w-3/4 animate-pulse" />

								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-[scan_2s_ease-in-out_infinite]" />
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="mt-8 mb-8">
				<div className="flex items-center mb-4">
					<div className="w-5 h-5 bg-accent/30 rounded mr-2 animate-pulse" />
					<div className="h-6 bg-accent/20 rounded w-32 animate-pulse" />
				</div>

				<div className="flex flex-wrap gap-3">
					{Array.from({ length: 6 }).map((_, index) => (
						<div
							key={index}
							className="neo-card py-2 px-3 relative overflow-hidden"
						>
							<div className="w-16 h-4 bg-accent/20 rounded animate-pulse" />
							<div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/15 to-transparent animate-[scan_1.5s_ease-in-out_infinite]" />
						</div>
					))}
				</div>
			</div>

			<div className="mt-8 mb-8">
				<div className="flex items-center mb-4">
					<div className="w-5 h-5 bg-accent/30 rounded mr-2 animate-pulse" />
					<div className="h-6 bg-accent/20 rounded w-40 animate-pulse" />
				</div>

				<div className="neo-card-static p-5 inline-block relative overflow-hidden">
					<div className="flex flex-col gap-1 mx-4">
						<div className="flex items-center mb-3 mt-1">
							<div className="w-32 h-4 bg-accent/20 rounded animate-pulse" />
						</div>

						<div className="flex">
							<div className="w-10 flex-shrink-0">
								<div className="h-4" />
								{Array.from({ length: 7 }).map((_, i) => (
									<div
										key={i}
										className="h-3 mt-1 w-6 bg-accent/10 rounded animate-pulse"
									/>
								))}
							</div>

							<div className="flex flex-col gap-1">
								{Array.from({ length: 7 }).map((_, dayIndex) => (
									<div key={dayIndex} className="flex gap-1">
										{Array.from({ length: 53 }).map((_, weekIndex) => (
											<div
												key={weekIndex}
												className="w-3 h-3 bg-accent/10 rounded animate-pulse"
												style={{
													animationDelay: `${(dayIndex * 53 + weekIndex) * 0.02}s`
												}}
											/>
										))}
									</div>
								))}
							</div>
						</div>

						<div className="mt-6 flex items-center justify-end gap-2">
							<div className="w-8 h-3 bg-accent/10 rounded animate-pulse" />
							{Array.from({ length: 5 }).map((_, i) => (
								<div
									key={i}
									className="w-3 h-3 bg-accent/10 rounded animate-pulse"
									style={{ animationDelay: `${i * 0.1}s` }}
								/>
							))}
							<div className="w-8 h-3 bg-accent/10 rounded animate-pulse" />
						</div>
					</div>

					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent animate-[scan_3s_ease-in-out_infinite]" />
				</div>
			</div>

			<div className="flex justify-end mt-6 gap-3">
				<div className="w-8 h-8 bg-accent/20 border-[2px] border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] animate-pulse" />
				<div className="w-12 h-8 bg-accent/15 border-[2px] border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] animate-pulse" />
				<div className="w-16 h-8 bg-accent/10 border-[2px] border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] animate-pulse" />
			</div>
		</div>
	)
}

const GitHubStatsError = () => {
	return (
		<div className="">
			<div className="relative mb-8">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{Array.from({ length: 4 }).map((_, index) => (
						<div key={index} className="p-1">
							<div className="neo-card p-3 h-full w-full relative overflow-hidden">
								<div className="mb-2">
									<div className="w-5 h-5 bg-muted-foreground/30 rounded" />
								</div>
								<div className="h-4 bg-muted-foreground/20 rounded mb-1" />
								<div className="h-3 bg-muted-foreground/15 rounded w-3/4" />
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="mt-8 mb-8">
				<div className="neo-card p-6 text-center">
					<div className="mb-4">
						<div className="w-12 h-12 bg-muted-foreground/20 rounded-full mx-auto mb-3 flex items-center justify-center">
							<svg
								className="w-6 h-6 text-muted-foreground"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
								/>
							</svg>
						</div>
						<h3 className="font-mono font-bold text-lg mb-2">
							Connection Error
						</h3>
						<p className="text-muted-foreground">
							Unable to load GitHub statistics
						</p>
						<p className="text-sm text-muted-foreground/70 mt-1">
							Please try again later
						</p>
					</div>
				</div>
			</div>

			<div className="flex justify-end mt-6 gap-3">
				<div className="w-8 h-8 bg-muted-foreground/20 border-[2px] border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]" />
				<div className="w-12 h-8 bg-muted-foreground/15 border-[2px] border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]" />
				<div className="w-16 h-8 bg-muted-foreground/10 border-[2px] border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]" />
			</div>
		</div>
	)
}

const CareerSection = () => {
	const [githubData, setGitHubData] = useState<GitHubData>(emptyData)
	const [isLoading, setIsLoading] = useState(true)
	const [hasError, setHasError] = useState(false)
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true)
				setHasError(false)

				const res = await fetch('/api/github')
				if (res.ok) {
					const data: GitHubData = await res.json()
					setGitHubData(data)
				} else {
					setHasError(true)
				}
			} catch (error) {
				console.error('Failed to fetch GitHub data', error)
				setHasError(true)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [])

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		const resizeCanvas = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		}

		window.addEventListener('resize', resizeCanvas)
		resizeCanvas()

		let animationId: number

		const drawGrid = (time: number) => {
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)

			gradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)')
			gradient.addColorStop(1, 'rgba(165, 243, 252, 0.2)')

			ctx.strokeStyle = gradient
			ctx.lineWidth = 1.5

			const horizontalLines = 25
			const verticalLines = 30
			const horizonY = canvas.height * 0.2

			const t = time * 0.0004
			const waveAmplitude = canvas.height * 0.035
			const waveFrequency = (Math.PI / canvas.width) * 3

			for (let i = 0; i <= horizontalLines; i++) {
				const progress = i / horizontalLines

				const y = horizonY + progress ** 1.5 * (canvas.height - horizonY)

				ctx.beginPath()

				for (let x = 0; x <= canvas.width; x += 5) {
					const normalizedX = x / canvas.width
					const distanceFromHorizon = (y - horizonY) / canvas.height

					const waveEffect =
						Math.sin(x * waveFrequency + t) *
						waveAmplitude *
						(1 - distanceFromHorizon ** 0.7)

					const distFromCenter = (normalizedX - 0.5) * 2
					const perspectiveCurve =
						distFromCenter ** 2 * canvas.height * 0.15 * (1 - progress)

					const yPos = y - waveEffect - perspectiveCurve

					if (x === 0) {
						ctx.moveTo(x, yPos)
					} else {
						ctx.lineTo(x, yPos)
					}
				}
				ctx.stroke()
			}

			for (let i = 0; i <= verticalLines; i++) {
				const progress = i / verticalLines
				ctx.beginPath()

				const vanishX = canvas.width * 0.5
				const baseX = (progress - 0.5) * canvas.width * 2.0 + vanishX

				const oscillation =
					Math.sin(t * 0.5 + progress * Math.PI * 2) * canvas.width * 0.02

				for (let j = -20; j <= 100; j++) {
					const segmentProgress = j / 100
					const y = horizonY + segmentProgress * (canvas.height - horizonY)

					const convergeFactor = (1 - segmentProgress) ** 1.8
					const x =
						vanishX +
						(baseX - vanishX) * (segmentProgress + convergeFactor) +
						oscillation * Math.abs(segmentProgress)

					if (j === -20) {
						ctx.moveTo(x, y)
					} else {
						ctx.lineTo(x, y)
					}
				}
				ctx.stroke()
			}

			ctx.shadowBlur = 10
			ctx.shadowColor = 'rgba(56, 189, 248, 0.5)'

			ctx.shadowBlur = 0

			animationId = requestAnimationFrame(drawGrid)
		}

		animationId = requestAnimationFrame(drawGrid)

		return () => {
			window.removeEventListener('resize', resizeCanvas)
			cancelAnimationFrame(animationId)
		}
	}, [])

	return (
		<section
			id="career"
			className="section relative overflow-hidden  -mx-2 sm:-mx-4"
		>
			<div
				className="absolute inset-0 w-full  bg-accent"
				style={{
					clipPath: 'inset(0)',
					zIndex: 0
				}}
			>
				<canvas
					ref={canvasRef}
					className="fixed w-full h-full"
					style={{
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,

						pointerEvents: 'none'
					}}
				/>
			</div>

			<div className="container-custom relative z-10">
				<SectionHeader number="05" title="GitHub Activity" mbSize="mb-12" />
				{isLoading ? (
					<GitHubStatsSkeleton />
				) : hasError ? (
					<GitHubStatsError />
				) : (
					<GitHubStatsSection githubData={githubData} />
				)}
			</div>
		</section>
	)
}

export default CareerSection
