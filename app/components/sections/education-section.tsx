'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
	Award,
	BookOpen,
	Calendar,
	ChevronRight,
	GraduationCap
} from 'lucide-react'
import { useRef } from 'react'
import SectionHeader from '../section-header'

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: index * 0.2
		}
	})
}

const listItemVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: (achieveIndex: number) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: achieveIndex * 0.1
		}
	})
}

const EducationSection = () => {
	const sectionRef = useRef<HTMLElement>(null)
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start']
	})

	const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

	const education = [
		{
			degree: 'M.Sc. Cloud Applications and Security Engineering',
			institution: 'Technische Hochschule Ingolstadt',
			period: '10/2024 - Present',
			description:
				'Specializing in Security Engineering, Cloud-Native Development, and practical industry projects.',
			achievements: [
				'IT Security: Focus on Security Engineering, Computer Forensics, and Network Security',
				'Cloud-Native Development: Experience with Software Architectures, Virtualization, CI/CD, and Orchestration'
			],
			icon: GraduationCap,
			color: '#0090ce'
		},
		{
			degree: 'B.Sc. Artificial Intelligence',
			institution: 'Technische Hochschule Ingolstadt',
			period: '10/2020 - 09/2024',
			description:
				'Focused on machine learning algorithms, neural networks, and language/image processing with ethical considerations.',
			achievements: [
				'Bachelor Thesis: Using RTK-GNSS to improve reinforcement learning-based path planning for UAVs',
				'Project: LiDAR Sensor Analysis in collaboration with Continental'
			],
			icon: BookOpen,
			color: '#00a2a2'
		}
	]

	return (
		<section
			id="education"
			ref={sectionRef}
			className="section relative overflow-hidden py-32 bg-background-dark text-foreground"
		>
			<motion.div className="absolute inset-0" style={{ opacity }}>
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
						backgroundSize: '50px 50px'
					}}
				/>
			</motion.div>

			<motion.div
				className="absolute top-0 left-0 w-full pointer-events-none select-none"
				style={{ y }}
			>
				<h2 className="font-mono font-black text-[20vw] leading-none opacity-[0.03] -mt-20 tracking-tighter">
					EDUCATION
				</h2>
			</motion.div>

			<div className="absolute inset-0 overflow-hidden pointer-events-none">
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

				<div className="absolute left-16 top-1/3 opacity-20">
					<svg
						width="120"
						height="120"
						viewBox="0 0 120 120"
						xmlns="http://www.w3.org/2000/svg"
					>
						<motion.path
							d="M0,40 L80,40 L80,20 L120,20"
							stroke="#0090ce"
							strokeWidth="4"
							fill="none"
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{ duration: 2, delay: 0.5 }}
						/>
						<motion.path
							d="M40,0 L40,80 L60,80 L60,120"
							stroke="#00a2a2"
							strokeWidth="4"
							fill="none"
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{ duration: 2, delay: 0.7 }}
						/>
						<motion.circle
							cx="40"
							cy="40"
							r="6"
							fill="#ea3e94"
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.5, delay: 1.5 }}
						/>
					</svg>
				</div>
			</div>

			<div className="container-custom relative z-10">
				<SectionHeader number="04" title="Education" />

				<div className="mt-20 space-y-12">
					{education.map((item, index) => (
						<motion.div
							key={index}
							className="relative backdrop-blur-md bg-background/50 p-8 border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(250,250,250,0.8)] group hover:shadow-[12px_12px_0px_0px_rgba(250,250,250,0.8)]"
							variants={cardVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: '-100px' }}
							custom={index}
						>
							<div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-foreground/20">
								<div className="flex items-start md:items-center">
									<div
										className="p-3 mr-4 hidden md:flex"
										style={{ backgroundColor: item.color }}
									>
										<item.icon size={24} className="text-foreground" />
									</div>
									<h3 className="font-mono text-2xl font-bold">
										{item.degree}
									</h3>
								</div>
								<div className="flex items-center mt-2 md:mt-0 font-mono text-sm bg-foreground text-background py-1 px-3 self-start">
									<Calendar size={16} className="mr-2" />
									<span>{item.period}</span>
								</div>
							</div>

							<div className="mb-6">
								<p className="font-bold text-xl">{item.institution}</p>
							</div>

							<div className="mb-8">
								<p className="text-foreground/70 text-lg">{item.description}</p>
							</div>

							<div className="relative">
								<div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent" />
								<h4 className="font-mono font-bold text-lg mb-4 flex items-center">
									<Award
										size={18}
										className="mr-2"
										style={{ color: item.color }}
									/>
									Key Achievements
								</h4>
								<ul className="space-y-4">
									{item.achievements.map((achievement, achieveIndex) => (
										<motion.li
											key={achieveIndex}
											className="flex items-start"
											variants={listItemVariants}
											initial="hidden"
											whileInView="visible"
											custom={achieveIndex}
											viewport={{ once: true }}
										>
											<ChevronRight
												size={16}
												className="mr-2 mt-1"
												style={{ color: item.color }}
											/>
											<span>{achievement}</span>
										</motion.li>
									))}
								</ul>
							</div>

							<div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
						</motion.div>
					))}
				</div>

				<div className="mt-16 flex justify-center">
					<div className="inline-flex items-center space-x-6">
						<div className="h-1 w-12 bg-accent" />
						<div className="flex space-x-2">
							<GraduationCap size={20} className="text-accent" />
							<BookOpen size={20} className="text-foreground" />
							<Award size={20} className="text-accent" />
						</div>
						<div className="h-1 w-12 bg-accent" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default EducationSection
