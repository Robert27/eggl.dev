'use client'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import {
	ArrowDown,
	Braces,
	ChevronRight,
	Code,
	Laptop,
	Smartphone
} from 'lucide-react'
import { useEffect, useRef } from 'react'
import useSmoothScroll from '../../hooks/use-smooth-scroll'
import Typewriter from '../ui/typewriter'

const HeroSection = () => {
	const { handleHashLinkClick } = useSmoothScroll()
	const backgroundRef = useRef<HTMLDivElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end start']
	})

	const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

	useEffect(() => {
		if (!backgroundRef.current) return

		const createParticle = (size: number, duration: number, delay: number) => {
			const particle = document.createElement('div')
			particle.className = 'absolute'

			const shapes = ['square', 'circle', 'triangle']
			const shape = shapes[Math.floor(Math.random() * shapes.length)]

			if (shape === 'square') {
				particle.style.width = `${4 + Math.random() * size}px`
				particle.style.height = particle.style.width
				particle.style.backgroundColor =
					Math.random() > 0.5
						? 'rgba(0, 113, 162, 0.7)'
						: 'rgba(0, 162, 162, 0.7)'
			} else if (shape === 'circle') {
				particle.style.width = `${4 + Math.random() * size}px`
				particle.style.height = particle.style.width
				particle.style.borderRadius = '50%'
				particle.style.backgroundColor = 'rgba(250, 250, 250, 0.7)'
			} else {
				const size = 4 + Math.random() * 12
				particle.style.width = '0'
				particle.style.height = '0'
				particle.style.borderLeft = `${size}px solid transparent`
				particle.style.borderRight = `${size}px solid transparent`
				particle.style.borderBottom = `${size * 1.5}px solid rgba(0, 113, 162, 0.7)`
				particle.style.backgroundColor = 'transparent'
			}

			const startX = Math.random() * 100
			const endX = startX + (Math.random() * 20 - 10)

			particle.style.left = `${startX}%`
			particle.style.bottom = '-10px'
			particle.style.opacity = '0'

			particle.animate(
				[
					{
						opacity: 0,
						transform: 'translateY(0) translateX(0px) rotate(0deg)'
					},
					{
						opacity: 0.8,
						transform: `translateY(-${Math.random() * 70 + 30}vh) translateX(${(Math.random() - 0.5) * 200}px) rotate(${Math.random() * 180}deg)`
					},
					{
						opacity: 0,
						transform: `translateY(-${Math.random() * 90 + 60}vh) translateX(${endX - startX}%) rotate(${Math.random() * 360}deg)`
					}
				],
				{
					duration: duration * 1000,
					delay: delay * 1000,
					fill: 'forwards',
					easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
				}
			)

			return particle
		}

		const particles: HTMLDivElement[] = []
		const addParticles = () => {
			if (!backgroundRef.current) return

			for (let i = 0; i < 10; i++) {
				const size = Math.random() * 16 + 4
				const duration = 8 + Math.random() * 10
				const delay = i * 0.3

				const particle = createParticle(size, duration, delay)
				backgroundRef.current.appendChild(particle)
				particles.push(particle)

				setTimeout(
					() => {
						if (backgroundRef.current?.contains(particle)) {
							backgroundRef.current.removeChild(particle)
						}
					},
					(duration + delay) * 1000
				)
			}
		}

		addParticles()

		const intervalId = setInterval(addParticles, 12000)

		return () => {
			clearInterval(intervalId)
			particles.forEach((particle) => {
				if (backgroundRef.current?.contains(particle)) {
					backgroundRef.current.removeChild(particle)
				}
			})
		}
	}, [])

	return (
		<section
			ref={containerRef}
			style={{
				paddingTop: 'calc(var(--navbar-height, 56px) + 2rem)',
				minHeight: 'calc(100vh - var(--navbar-height, 56px))'
			}}
			className="relative overflow-hidden flex items-center pb-16 md:pb-32 text-foreground bg-background"
		>
			<motion.div className="absolute inset-0" style={{ y, opacity }}>
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							'radial-gradient(circle at 50% 50%, rgba(0, 113, 162, 0.1) 0%, rgba(13, 13, 14, 0) 50%)',
						backgroundSize: '100% 100%'
					}}
				/>
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							'linear-gradient(to right, rgba(250, 250, 250, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(250, 250, 250, 0.05) 1px, transparent 1px)',
						backgroundSize: '80px 80px'
					}}
				/>
			</motion.div>

			<motion.div
				className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none select-none mt-14"
				style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']) }}
			>
				<h2 className="font-mono font-black text-[25vw] leading-none opacity-[0.03] -mt-20 tracking-tighter">
					ROBERT
				</h2>
			</motion.div>

			<div className="absolute inset-0 overflow-hidden pointer-events-none mt-4">
				<div className="absolute left-0 top-1/4 w-24 h-24 bg-accent opacity-20" />

				<div className="absolute top-8 left-8 w-32 h-32">
					<div className="absolute top-0 left-0 w-full h-4 bg-foreground opacity-20" />
					<div className="absolute top-0 left-0 w-4 h-full bg-foreground opacity-20" />
				</div>

				<div className="absolute bottom-8 right-8 w-32 h-32">
					<div className="absolute bottom-0 right-0 w-full h-4 bg-foreground opacity-20" />
					<div className="absolute bottom-0 right-0 w-4 h-full bg-foreground opacity-20" />
				</div>

				<div className="absolute top-32 right-12 transform rotate-12">
					<div className="text-accent text-opacity-20 text-7xl font-mono">
						{'{ }'}
					</div>
				</div>

				<div className="absolute bottom-32 left-12 transform -rotate-12">
					<div className="text-accent text-opacity-20 text-7xl font-mono">
						{'< />'}
					</div>
				</div>

				<div
					ref={backgroundRef}
					className="absolute inset-0 w-full h-full overflow-hidden"
				/>
			</div>

			<div className="container mx-auto px-4 md:px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
					<motion.div
						className="relative"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<motion.div
							className="absolute -top-8 -left-4 bg-background border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(250,250,250,0.8)] overflow-hidden z-50"
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.3 }}
						>
							<div className="absolute top-0 right-0 w-8 h-8 bg-accent transform rotate-45 translate-x-1/2 -translate-y-1/2" />
						</motion.div>

						<div className="relative bg-background border-4 border-foreground p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(250,250,250,0.8)] overflow-hidden">
							<div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-accent" />
							<div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-accent" />

							<div className="mb-8 relative">
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
									<span className="invisible block" aria-hidden="true">
										Hello,
										<br />
										I'm Robert Eggl.|
									</span>
									<div className="absolute top-0 left-0 w-full">
										<AnimatePresence mode="wait">
											<Typewriter
												text={"Hello,\nI'm Robert Eggl."}
												delay={80}
											/>
										</AnimatePresence>
									</div>
								</h1>
								<div className="absolute -bottom-4 left-0 w-32 h-1 bg-accent" />
							</div>

							{/* Description with animated reveal and enhanced typography */}
							<motion.div
								className="relative"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 2, duration: 1 }}
							>
								<p className="text-xl text-foreground/90 max-w-2xl mb-12 leading-relaxed font-light">
									Master's student in Computer Science focusing on{' '}
									<span className="text-accent font-normal">
										Cloud Computing
									</span>{' '}
									and{' '}
									<span className="text-accent font-normal">
										Software Development
									</span>{' '}
									with a passion for{' '}
									<span className="text-accent font-normal">
										Artificial Intelligence
									</span>
									.
								</p>
								<div className="absolute -bottom-2 left-0 w-24 h-0.5 bg-accent/50" />
							</motion.div>

							{/* Call to action buttons with enhanced styling */}
							<div className="flex flex-col sm:flex-row gap-6 justify-start">
								<motion.a
									href="/blog"
									className="group relative flex items-center bg-background text-foreground px-6 py-3 text-sm sm:text-base border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(250,250,250,0.8)] font-mono font-bold transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_0px_rgba(250,250,250,0.8)] overflow-hidden w-fit"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
									<span className="relative">Read My Blog</span>
									<ChevronRight
										size={20}
										className="ml-2 group-hover:translate-x-1 transition-transform relative"
									/>
								</motion.a>

								<motion.button
									className="group relative flex items-center bg-background text-foreground px-6 py-3 text-sm sm:text-base border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(250,250,250,0.8)] font-mono font-bold transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_0px_rgba(250,250,250,0.8)] overflow-hidden w-fit"
									onClick={(e) => handleHashLinkClick(e, 'contact')}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
									<span className="relative">Let's Connect</span>
									<ChevronRight
										size={20}
										className="ml-2 group-hover:translate-x-1 transition-transform relative"
									/>
								</motion.button>
							</div>
						</div>
					</motion.div>

					{/* Right Column - Enhanced Tech Stack Visualization */}
					<motion.div
						className="hidden lg:block"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<div className="relative h-[600px]">
							{/* Floating tech cards with enhanced styling */}
							<motion.div
								className="absolute top-[10%] right-[15%] bg-background p-6 border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(250,250,250,0.8)] hover:shadow-[6px_6px_0px_0px_rgba(0,144,206,0.8)] transition-all duration-300 group"
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.4 }}
								whileHover={{ scale: 1.05, borderColor: '#0090ce' }}
							>
								<div className="flex items-center space-x-3">
									<div className="relative">
										<Code
											size={24}
											className="text-accent group-hover:scale-110 transition-transform"
										/>
									</div>
									<span className="font-mono">Full Stack</span>
								</div>
								<div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
							</motion.div>

							<motion.div
								className="absolute top-[35%] left-[15%] bg-background p-6 border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(250,250,250,0.8)] hover:shadow-[6px_6px_0px_0px_rgba(0,144,206,0.8)] transition-all duration-300 group"
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.6 }}
								whileHover={{ scale: 1.05, borderColor: '#0090ce' }}
							>
								<div className="flex items-center space-x-3">
									<div className="relative">
										<Laptop
											size={24}
											className="text-accent group-hover:scale-110 transition-transform"
										/>
									</div>
									<span className="font-mono">Cloud Native</span>
								</div>
								<div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
							</motion.div>

							<motion.div
								className="absolute bottom-[25%] right-[15%] bg-background p-6 border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(250,250,250,0.8)] hover:shadow-[6px_6px_0px_0px_rgba(0,144,206,0.8)] transition-all duration-300 group"
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.8 }}
								whileHover={{ scale: 1.05, borderColor: '#0090ce' }}
							>
								<div className="flex items-center space-x-3">
									<div className="relative">
										<Braces
											size={24}
											className="text-accent group-hover:scale-110 transition-transform"
										/>
									</div>
									<span className="font-mono">AI/ML</span>
								</div>
								<div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
							</motion.div>

							<motion.div
								className="absolute bottom-[10%] left-[15%] bg-background p-6 border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(250,250,250,0.8)] hover:shadow-[6px_6px_0px_0px_rgba(0,144,206,0.8)] transition-all duration-300 group"
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 1 }}
								whileHover={{ scale: 1.05, borderColor: '#0090ce' }}
							>
								<div className="flex items-center space-x-3">
									<div className="relative">
										<Smartphone
											size={24}
											className="text-accent group-hover:scale-110 transition-transform"
										/>
									</div>
									<span className="font-mono">App Dev</span>
								</div>
								<div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
							</motion.div>

							{/* Enhanced connecting lines with dynamic glow effect */}
							<svg
								className="absolute inset-0 w-full h-full"
								style={{ zIndex: -1 }}
							>
								<defs>
									<linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
										<stop offset="0%" stopColor="#0090ce" stopOpacity="0.2" />
										<stop offset="50%" stopColor="#0090ce" stopOpacity="0.8" />
										<stop offset="100%" stopColor="#0090ce" stopOpacity="0.2" />
									</linearGradient>
								</defs>

								{/* Animated paths with enhanced glow */}
								<motion.path
									d="M 400 150 L 300 250"
									stroke="url(#glow)"
									strokeWidth="3"
									fill="none"
									initial={{ pathLength: 0, opacity: 0 }}
									animate={{
										pathLength: 1,
										opacity: 1,
										strokeDasharray: '5,5',
										strokeDashoffset: [0, -10]
									}}
									transition={{
										duration: 2,
										delay: 1,
										strokeDashoffset: {
											duration: 1,
											repeat: Number.POSITIVE_INFINITY,
											ease: 'linear'
										}
									}}
								/>

								<motion.path
									d="M 300 250 L 400 350"
									stroke="url(#glow)"
									strokeWidth="3"
									fill="none"
									initial={{ pathLength: 0, opacity: 0 }}
									animate={{
										pathLength: 1,
										opacity: 1,
										strokeDasharray: '5,5',
										strokeDashoffset: [0, -10]
									}}
									transition={{
										duration: 2,
										delay: 1.2,
										strokeDashoffset: {
											duration: 1,
											repeat: Number.POSITIVE_INFINITY,
											ease: 'linear'
										}
									}}
								/>

								<motion.path
									d="M 400 350 L 300 450"
									stroke="url(#glow)"
									strokeWidth="3"
									fill="none"
									initial={{ pathLength: 0, opacity: 0 }}
									animate={{
										pathLength: 1,
										opacity: 1,
										strokeDasharray: '5,5',
										strokeDashoffset: [0, -10]
									}}
									transition={{
										duration: 2,
										delay: 1.4,
										strokeDashoffset: {
											duration: 1,
											repeat: Number.POSITIVE_INFINITY,
											ease: 'linear'
										}
									}}
								/>

								<motion.path
									d="M 400 150 L 300 450"
									stroke="url(#glow)"
									strokeWidth="3"
									fill="none"
									initial={{ pathLength: 0, opacity: 0 }}
									animate={{
										pathLength: 1,
										opacity: 1,
										strokeDasharray: '5,5',
										strokeDashoffset: [0, -10]
									}}
									transition={{
										duration: 2,
										delay: 1.6,
										strokeDashoffset: {
											duration: 1,
											repeat: Number.POSITIVE_INFINITY,
											ease: 'linear'
										}
									}}
								/>
							</svg>
						</div>
					</motion.div>
				</div>

				{/* Scroll down button */}
				<motion.div
					className="mt-24 flex justify-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 3, duration: 0.5 }}
				>
					<button
						className="bg-background p-3 sm:p-4 text-sm sm:text-base flex items-center justify-center border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(250,250,250,1)] font-mono font-bold transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(250,250,250,1)] animate-bounce-slow text-foreground cursor-pointer"
						aria-label="Scroll down"
						onClick={(e) => handleHashLinkClick(e, 'about')}
						type="button"
					>
						<span className="mr-2">Discover</span>
						<ArrowDown size={16} />
					</button>
				</motion.div>
			</div>
		</section>
	)
}

export default HeroSection
