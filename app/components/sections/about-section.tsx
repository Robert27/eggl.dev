'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Braces, Code, Coffee, GraduationCap, Laptop } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import SectionHeader from '../section-header'

const mainCardVariants = {
	hidden: { opacity: 0, x: -30 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6 }
	}
}

const skillCardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, delay: index * 0.1 }
	})
}

const AboutSection = () => {
	const sectionRef = useRef<HTMLElement>(null)
	const [isInView, setIsInView] = useState(false)

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start']
	})

	const gridOpacity = useTransform(
		scrollYProgress,
		[0, 0.2, 0.8, 1],
		[0.1, 0.3, 0.3, 0.1]
	)

	useEffect(() => {
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
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current)
			}
		}
	}, [])

	const aboutCards = [
		{
			icon: <Code size={24} className="text-foreground" />,
			title: 'Cloud Engineering',
			description:
				'Building scalable systems with Rust, Kubernetes, and modern architecture patterns.',
			bgColor: '#0090ce',
			gradient: 'from-[#0090ce]/20 to-[#0090ce]/5'
		},
		{
			icon: <GraduationCap size={24} className="text-foreground" />,
			title: 'AI & Security',
			description:
				'Combining AI knowledge with security engineering principles.',
			bgColor: '#00a2a2',
			gradient: 'from-[#00a2a2]/20 to-[#00a2a2]/5'
		},
		{
			icon: <Laptop size={24} className="text-foreground" />,
			title: 'Web Development',
			description:
				'Creating responsive applications with React, Next.js, and GraphQL.',
			bgColor: '#ea3e94',
			gradient: 'from-[#ea3e94]/20 to-[#ea3e94]/5'
		},
		{
			icon: <Coffee size={24} className="text-foreground" />,
			title: 'Open Source',
			description:
				'Contributing to community projects with thousands of active users.',
			bgColor: '#10b981',
			gradient: 'from-[#10b981]/20 to-[#10b981]/5'
		}
	]

	return (
		<section
			id="about"
			ref={sectionRef}
			className="section relative py-24 md:py-32 bg-background text-foreground overflow-hidden"
		>
			<motion.div className="absolute inset-0" style={{ opacity: gridOpacity }}>
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
				className="absolute top-0 left-0 w-full  pointer-events-none select-none"
				style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']) }}
			>
				<h2 className="font-mono font-black text-[25vw] leading-none opacity-[0.03] tracking-tighter -mt-26 overflow-x-visible">
					ABOUT
				</h2>
			</motion.div>

			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 100 100"
					preserveAspectRatio="none"
					className="absolute inset-0"
				>
					{Array.from({ length: 10 }).map((_, i) => (
						<motion.line
							key={i}
							x1="0"
							y1={10 + i * 9}
							x2="100"
							y2={i * 9}
							strokeWidth="0.5"
							stroke="rgba(250, 250, 250, 0.01)"
							initial={{ pathLength: 0 }}
							animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
							transition={{ duration: 1.5, delay: i * 0.1 }}
						/>
					))}
					{Array.from({ length: 10 }).map((_, i) => (
						<motion.line
							key={i + 10}
							x1={10 + i * 9}
							y1="0"
							x2={i * 9}
							y2="100"
							strokeWidth="0.5"
							stroke="rgba(250, 250, 250, 0.01)"
							initial={{ pathLength: 0 }}
							animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
							transition={{ duration: 1.5, delay: i * 0.1 }}
						/>
					))}
				</svg>

				<motion.div
					className="absolute top-1/4 right-1/4 w-16 h-16 border-4 border-dashed border-accent/20"
					animate={{
						rotate: [0, 360],
						scale: [1, 1.1, 1]
					}}
					transition={{
						duration: 20,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'linear'
					}}
				/>

				<motion.div
					className="absolute bottom-1/4 left-1/4 w-12 h-12 border-4 border-accent/20"
					animate={{
						rotate: [360, 0],
						scale: [1, 1.2, 1]
					}}
					transition={{
						duration: 15,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'linear'
					}}
				/>
			</div>

			<div className="container-custom relative z-10 mx-auto w-full px-4 sm:px-6 md:px-8 max-w-[100%] sm:max-w-[95%] md:max-w-7xl">
				<SectionHeader number="01" title="About Me" mbSize="mb-16" />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
					<motion.div
						className="relative backdrop-blur-md bg-background/50 p-8 md:p-10 border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(250,250,250,0.8)]"
						variants={mainCardVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<div className="absolute -top-6 -left-6 w-16 h-16 border-t-4 border-l-4 border-accent opacity-50" />

						<h3 className="text-2xl md:text-3xl font-bold mb-8 inline-block relative">
							My Journey
							<div className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent" />
						</h3>

						<div className="space-y-6 text-base md:text-lg">
							<p>
								Cloud Engineering specialist with expertise in Data Science and
								modern web technologies. Currently pursuing an M.Sc. in Cloud
								Applications and Security Engineering.
							</p>

							<p>
								I build scalable solutions ranging from cloud-native
								applications to data pipelines, focusing on robust architectures
								and security principles.
							</p>

							<p>
								Beyond my professional roles, I'm an active open-source
								contributor and community builder through the Neuland Ingolstadt
								e.V. student association.
							</p>
						</div>

						{/* Tech icon decoration */}
						<div className="absolute -right-5 -bottom-2 bg-accent p-2 border-2 border-foreground rotate-6">
							<Braces size={20} className="text-foreground" />
						</div>
					</motion.div>

					{/* Skills cards grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{aboutCards.map((card, index) => (
							<motion.div
								key={index}
								className={`relative backdrop-blur-md bg-gradient-to-br ${card.gradient} p-6 border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(250,250,250,0.8)] group hover:shadow-[8px_8px_0px_0px_rgba(250,250,250,0.8)]`}
								variants={skillCardVariants}
								initial="hidden"
								whileInView="visible"
								custom={index}
								viewport={{ once: true }}
								whileHover={{ scale: 1.02 }}
							>
								<div className="flex items-center space-x-4 mb-4">
									<div
										className="p-3 rounded-lg"
										style={{ backgroundColor: card.bgColor }}
									>
										{card.icon}
									</div>
									<h3 className="font-mono text-xl font-bold">{card.title}</h3>
								</div>
								<p className="text-foreground/80">{card.description}</p>

								{/* Hover effect */}
								<div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
							</motion.div>
						))}
					</div>
				</div>

				{/* Bottom decoration */}
				<div className="mt-16 flex justify-center">
					<div className="inline-flex items-center space-x-6">
						<div className="h-1 w-12 bg-accent" />
						<div className="flex space-x-2">
							<Code size={20} className="text-accent" />
							<Laptop size={20} className="text-foreground" />
							<GraduationCap size={20} className="text-accent" />
						</div>
						<div className="h-1 w-12 bg-accent" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
