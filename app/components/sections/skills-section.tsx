/** biome-ignore-all lint/correctness/useHookAtTopLevel: we ignore this :) */
'use client'
import { motion, useInView } from 'framer-motion'
import { Code, Globe, Laptop2, Zap } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useIsMobile } from '../../hooks/use-mobile'
import SectionHeader from '../section-header'

declare global {
	interface Window {
		resetSkillCategoryInterval?: (categoryIndex: number) => void
	}
}

const SkillsSection = () => {
	const isMobile = useIsMobile()
	const [activeSkillIndices, setActiveSkillIndices] = useState([0, 0, 0])
	const containerRef = useRef<HTMLDivElement>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const sectionRef = useRef<HTMLElement>(null)
	const [isInView, setIsInView] = useState(false)

	const skillCategories = [
		{
			title: 'Programming Languages',
			skills: [
				{ short: 'Web', full: 'JavaScript/TypeScript' },
				{ short: 'AI/ML', full: 'Python' },
				{ short: 'Perf', full: 'Rust' },
				{ short: 'Apps', full: 'Java' },
				{ short: 'Data', full: 'SQL' }
			],
			description:
				'Experienced with various programming languages for both frontend and backend development.',
			color: '#0099db',
			icon: Code
		},
		{
			title: 'Technologies',
			skills: [
				{ short: 'UI', full: 'React' },
				{ short: 'Mobile', full: 'React Native' },
				{ short: 'SSR', full: 'Next.js' },
				{ short: 'API', full: 'GraphQL & REST APIs' },
				{ short: 'Storage', full: '(No)SQL Databases' },
				{ short: 'ML', full: 'PyTorch' }
			],
			description:
				'Building full-stack applications with modern frameworks and APIs for both frontend and backend. Including experience with machine learning frameworks.',
			color: '#10b981',
			icon: Globe
		},
		{
			title: 'Tools & Platforms',
			skills: [
				{ short: 'VCS', full: 'Git' },
				{ short: 'Cloud', full: 'Docker' },
				{ short: 'CI/CD', full: 'CI/CD' },
				{ short: 'k8s', full: 'Kubernetes' },
				{ short: 'Docs', full: 'Office' }
			],
			description:
				'Leveraging modern DevOps tools and cloud platforms for efficient development workflows.',
			color: '#ea3e94',
			icon: Laptop2
		}
	]

	useEffect(() => {
		let intervals: ReturnType<typeof setInterval>[] = []
		const timeoutIds: { [key: number]: number } = {}

		const setupIntervals = () => {
			intervals.forEach(clearInterval)
			intervals = []

			intervals = skillCategories.map((_, categoryIndex) => {
				return setInterval(
					() => {
						setActiveSkillIndices((prev) => {
							const newIndices = [...prev]
							newIndices[categoryIndex] =
								(prev[categoryIndex] + 1) %
								skillCategories[categoryIndex].skills.length
							return newIndices
						})
					},
					8000 + categoryIndex * 1000
				)
			})
		}

		setupIntervals()

		const resetCategoryInterval = (categoryIndex: number) => {
			if (timeoutIds[categoryIndex]) {
				clearTimeout(timeoutIds[categoryIndex])
			}

			timeoutIds[categoryIndex] = window.setTimeout(() => {
				if (intervals[categoryIndex]) {
					clearInterval(intervals[categoryIndex])
				}

				intervals[categoryIndex] = setInterval(
					() => {
						setActiveSkillIndices((prev) => {
							const newIndices = [...prev]
							newIndices[categoryIndex] =
								(prev[categoryIndex] + 1) %
								skillCategories[categoryIndex].skills.length
							return newIndices
						})
					},
					8000 + categoryIndex * 1000
				)
			}, 8000)
		}

		window.resetSkillCategoryInterval = resetCategoryInterval

		return () => {
			intervals.forEach(clearInterval)

			Object.values(timeoutIds).forEach((timeoutId) => {
				clearTimeout(timeoutId)
			})

			window.resetSkillCategoryInterval = undefined
		}
	}, [])

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		const resizeCanvas = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight * 1.5
		}

		window.addEventListener('resize', resizeCanvas)
		resizeCanvas()

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInView(entry.isIntersecting)
			},
			{ threshold: 0.1 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => {
			window.removeEventListener('resize', resizeCanvas)
			if (sectionRef.current) observer.unobserve(sectionRef.current)
		}
	}, [isInView])

	return (
		<section
			id="skills"
			className="section py-32 overflow-hidden relative bg-background-dark text-foreground"
			ref={sectionRef}
		>
			<div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
				<canvas
					ref={canvasRef}
					className="absolute inset-0 w-full h-full"
					style={{ opacity: 0.6 }}
				/>

				<div className="absolute top-0 left-0 w-full  pointer-events-none select-none mt-8">
					<h2 className="font-mono font-black text-[20vw] leading-none opacity-[0.03] -mt-20 tracking-tighter">
						SKILLS
					</h2>
				</div>

				<motion.div
					className="absolute left-20 top-1/3 w-48 h-48 bg-[#0099db] opacity-10 transform rotate-12"
					initial={{ scale: 0, rotate: 0 }}
					whileInView={{ scale: 1, rotate: 12 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, ease: 'easeOut' }}
				/>
				<motion.div
					className="absolute right-24 bottom-1/4 w-32 h-32 bg-[#10b981] opacity-10"
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
				/>

				<div className="absolute top-1/4 right-1/4 w-16 h-16 border-4 border-dashed border-neo-border opacity-20" />

				<div className="absolute left-16 top-1/3 opacity-20">
					<svg
						width="120"
						height="120"
						viewBox="0 0 120 120"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0,40 L80,40 L80,20 L120,20"
							stroke="#0099db"
							strokeWidth="4"
							fill="none"
						/>
						<path
							d="M40,0 L40,80 L60,80 L60,120"
							stroke="#10b981"
							strokeWidth="4"
							fill="none"
						/>
						<circle cx="40" cy="40" r="6" fill="#ea3e94" />
						<circle cx="80" cy="20" r="6" fill="#0099db" />
						<circle cx="60" cy="80" r="6" fill="#10b981" />
					</svg>
				</div>

				<div className="absolute right-16 bottom-1/3 opacity-20">
					<svg
						width="100"
						height="100"
						viewBox="0 0 100 100"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20,0 L20,100 M40,0 L40,100 M60,0 L60,100 M80,0 L80,100 M0,20 L100,20 M0,40 L100,40 M0,60 L100,60 M0,80 L100,80"
							stroke="#fafafa"
							strokeWidth="1"
							strokeOpacity="0.3"
							fill="none"
						/>
						<rect
							x="20"
							y="20"
							width="40"
							height="40"
							stroke="#ea3e94"
							strokeWidth="2"
							fill="none"
						/>
						<circle
							cx="40"
							cy="40"
							r="10"
							stroke="#0099db"
							strokeWidth="2"
							fill="none"
						/>
					</svg>
				</div>

				<div className="absolute bottom-32 left-10 opacity-20">
					<div className="w-20 h-20 border-2 border-[#10b981]">
						<div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-1">
							{[...Array(9)].map((_, i) => (
								<div key={`chip-${i}`} className="bg-[#10b981] opacity-60" />
							))}
						</div>
						<div className="absolute -left-3 top-0 h-full flex flex-col justify-around">
							{[...Array(4)].map((_, i) => (
								<div key={`left-pin-${i}`} className="w-3 h-1 bg-[#10b981]" />
							))}
						</div>
						<div className="absolute -right-3 top-0 h-full flex flex-col justify-around">
							{[...Array(4)].map((_, i) => (
								<div key={`right-pin-${i}`} className="w-3 h-1 bg-[#10b981]" />
							))}
						</div>
						<div className="absolute -top-3 left-0 w-full flex justify-around">
							{[...Array(4)].map((_, i) => (
								<div key={`top-pin-${i}`} className="h-3 w-1 bg-[#10b981]" />
							))}
						</div>
						<div className="absolute -bottom-3 left-0 w-full flex justify-around">
							{[...Array(4)].map((_, i) => (
								<div key={`bottom-pin-${i}`} className="h-3 w-1 bg-[#10b981]" />
							))}
						</div>
					</div>
				</div>

				{[...Array(5)].map((_, i) => (
					<motion.div
						key={`node-${i}`}
						className="absolute w-3 h-3 rounded-full bg-[#ea3e94]"
						style={{
							left: `${20 + i * 15}%`,
							top: `${30 + ((i * i) % 5) * 10}%`
						}}
						animate={{
							opacity: [0.2, 0.8, 0.2],
							scale: [1, 1.3, 1]
						}}
						transition={{
							duration: 3,
							repeat: Number.POSITIVE_INFINITY,
							delay: i * 0.7
						}}
					/>
				))}
			</div>

			<div className="container-custom relative z-10">
				<SectionHeader
					number="02"
					title="Skills & Technologies"
					mbSize="mb-16"
				/>

				<div ref={containerRef} className="space-y-24">
					{skillCategories.map((category, index) => {
						const textContentRef = useRef(null)
						const isTextInView = useInView(textContentRef, {
							once: true,
							amount: 0.2,
							margin: isMobile ? '-50px' : '-150px'
						})

						return (
							<motion.div
								key={index}
								className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 "
								initial={{ opacity: 0, y: 100 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{
									duration: 0.8,
									delay: index * 0.1,
									ease: 'easeOut'
								}}
							>
								<motion.div
									className="w-full max-w-[250px] mx-auto lg:w-1/3"
									whileInView={{
										scale: [0.9, 1],
										rotateZ: index % 2 === 0 ? [5, 0] : [-5, 0]
									}}
									viewport={{ once: true, margin: '-150px' }}
									transition={{ duration: 1 }}
								>
									<div
										className={`neo-card p-6 overflow-hidden aspect-square relative ${isMobile ? 'max-w-[180px]' : 'max-w-[250px]'} mx-auto`}
										style={{
											boxShadow: '6px 6px 0px black',
											backgroundColor: `${category.color}15`,
											border: `3px solid ${category.color}`
										}}
									>
										<div className="absolute inset-0 flex items-center justify-center">
											<motion.div
												className="absolute"
												initial={{ scale: 0, rotate: -20 }}
												animate={{ scale: 1, rotate: 0 }}
												transition={{
													type: 'spring',
													stiffness: 260,
													damping: 20,
													delay: 0.3
												}}
											>
												<div
													className={`
													w-16 h-16 flex items-center justify-center
													border-4 border-black bg-white
													transform rotate-3 shadow-[6px_6px_0px_rgba(0,0,0,0.8)]
												`}
													style={{
														backgroundColor: category.color
													}}
												>
													<category.icon
														size={30}
														color="white"
														strokeWidth={2.5}
													/>
												</div>
											</motion.div>

											{category.skills.map((skill, i) => {
												const isActive = i === activeSkillIndices[index]
												const offset =
													(i -
														activeSkillIndices[index] +
														category.skills.length) %
													category.skills.length
												const angle =
													(offset / category.skills.length) * 2 * Math.PI
												const distance = isMobile ? 60 : 85
												const x = Math.cos(angle) * distance
												const y = Math.sin(angle) * distance

												return (
													<motion.div
														key={`skill-${i}`}
														className={`
															absolute px-3 py-1.5 font-bold font-mono text-sm cursor-pointer
															border-2 border-black bg-white
															${isActive ? 'z-10' : 'z-0'} 
														`}
														style={{
															boxShadow: isActive
																? '4px 4px 0px black'
																: '2px 2px 0px black',
															backgroundColor: isActive
																? category.color
																: 'white',
															color: isActive ? 'white' : category.color
														}}
														animate={{
															x: x,
															y: y,
															scale: isActive ? 1.2 : 0.8,
															rotate: isActive ? 2 : i % 2 === 0 ? 1 : -1
														}}
														transition={{
															duration: 0.6,
															type: 'spring',
															stiffness: 200,
															damping: 25
														}}
														onClick={() => {
															const newIndices = [...activeSkillIndices]
															newIndices[index] = i
															setActiveSkillIndices(newIndices)

															if (window.resetSkillCategoryInterval) {
																window.resetSkillCategoryInterval(index)
															}
														}}
													>
														{skill.short}
														{isActive && (
															<motion.div
																className="absolute -right-1 -top-1"
																initial={{ scale: 0 }}
																animate={{ scale: 1 }}
																transition={{ delay: 0.2 }}
															>
																<Zap
																	size={16}
																	color="white"
																	fill="black"
																	className="stroke-white"
																/>
															</motion.div>
														)}
													</motion.div>
												)
											})}
										</div>
									</div>
								</motion.div>

								<motion.div
									ref={textContentRef}
									className="w-full lg:w-2/3 space-y-6"
									initial={{
										x: index % 2 === 0 ? 50 : -50,
										opacity: 0
									}}
									animate={
										isTextInView
											? {
													x: 0,
													opacity: 1
												}
											: {}
									}
									transition={{ duration: 0.8, delay: 0.3 }}
								>
									<h3 className="font-mono text-2xl font-bold">
										{category.title}
									</h3>
									<p className="text-lg text-muted-foreground">
										{category.description}
									</p>

									<div className="flex flex-wrap gap-3 pt-2">
										{category.skills.map((skill, skillIndex) => (
											<motion.span
												key={skillIndex}
												className="px-4 py-2 text-sm font-mono rounded-none neo-button cursor-pointer"
												style={{
													border: '2px solid white',
													boxShadow:
														activeSkillIndices[index] === skillIndex
															? '5px 5px 0 white'
															: '3px 3px 0 white',
													transform:
														activeSkillIndices[index] === skillIndex
															? 'rotate(-2deg)'
															: 'rotate(0deg)',
													backgroundColor:
														activeSkillIndices[index] === skillIndex
															? `${category.color}80`
															: 'transparent'
												}}
												onClick={() => {
													const newIndices = [...activeSkillIndices]
													newIndices[index] = skillIndex
													setActiveSkillIndices(newIndices)

													if (window.resetSkillCategoryInterval) {
														window.resetSkillCategoryInterval(index)
													}
												}}
											>
												{skill.full}
											</motion.span>
										))}
									</div>
								</motion.div>
							</motion.div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default SkillsSection
