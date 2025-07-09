'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
	ArrowUpRight,
	Code,
	Github,
	Key,
	Laptop,
	Linkedin,
	Mail,
	Terminal
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import SectionHeader from '../section-header'

const ContactSection = () => {
	const [hoverIndex, setHoverIndex] = useState<number | null>(null)
	const terminalRef = useRef<HTMLDivElement>(null)
	const sectionRef = useRef<HTMLElement>(null)
	const [terminalLines, setTerminalLines] = useState<string[]>([
		'> robert.init()',
		'Initializing contact channels...',
		'> robert.connect()'
	])

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
		if (hoverIndex !== null) {
			const newLine =
				hoverIndex === 0
					? '> Opening mail client to robert@eggl.dev'
					: hoverIndex === 1
						? '> Connecting to GitHub repository'
						: hoverIndex === 2
							? '> Establishing LinkedIn connection'
							: '> Accessing Bluesky profile'

			setTerminalLines((prev) => [...prev, newLine])

			if (terminalRef.current) {
				terminalRef.current.scrollTop = terminalRef.current.scrollHeight
			}
		}
	}, [hoverIndex])

	return (
		<section
			id="contact"
			ref={sectionRef}
			className="section relative overflow-hidden bg-background text-foreground py-32"
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
				className="absolute top-0 left-0 w-full pointer-events-none select-none"
				style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']) }}
			>
				<h2 className="font-mono font-black text-[25vw] leading-none opacity-[0.03] -mt-24 tracking-tighter overflow-x-visible">
					CONTACT
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
				<SectionHeader number="06" title="Contact" mbSize="mb-16" />

				<div className="grid md:grid-cols-2 gap-16">
					<motion.div
						className="relative"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<div className="absolute -top-6 -left-6 w-16 h-16 border-t-4 border-l-4 border-accent opacity-50" />
						<div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-4 border-r-4 border-accent opacity-50" />

						<div className="relative backdrop-blur-md bg-background/50 p-8 md:p-10 border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(250,250,250,0.8)]">
							<h3 className="text-2xl md:text-3xl font-bold mb-8 inline-block relative">
								Let's Connect
								<div className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent" />
							</h3>

							<p className="text-xl mb-12 leading-relaxed text-foreground/90">
								I'm always open to new opportunities and collaborations. Whether
								you want to discuss a project, share ideas, or just say hi, feel
								free to reach out!
							</p>

							<div className="space-y-6">
								<motion.a
									href="mailto:robert@eggl.dev"
									className="flex items-center group bg-background p-4 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(250,250,250,0.8)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(250,250,250,0.8)]"
									onMouseEnter={() => setHoverIndex(0)}
									onMouseLeave={() => setHoverIndex(null)}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<div className="p-3 bg-accent mr-5 flex items-center justify-center">
										<Mail size={24} color="#fafafa" />
									</div>
									<div className="flex-1">
										<span className="block text-xl">Email</span>
										<span className="text-foreground/70">robert@eggl.dev</span>
									</div>
									<ArrowUpRight
										size={20}
										className="text-foreground/50 group-hover:text-foreground transition-colors"
									/>
								</motion.a>

								<motion.a
									href="https://github.com/Robert27"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center group bg-background p-4 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(250,250,250,0.8)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(250,250,250,0.8)]"
									onMouseEnter={() => setHoverIndex(1)}
									onMouseLeave={() => setHoverIndex(null)}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<div className="p-3 bg-accent mr-5 flex items-center justify-center">
										<Github size={24} color="#fafafa" />
									</div>
									<div className="flex-1">
										<span className="block text-xl">GitHub</span>
										<span className="text-foreground/70">
											github.com/Robert27
										</span>
									</div>
									<ArrowUpRight
										size={20}
										className="text-foreground/50 group-hover:text-foreground transition-colors"
									/>
								</motion.a>

								<motion.a
									href="https://linkedin.com/in/roberteggl"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center group bg-background p-4 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(250,250,250,0.8)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(250,250,250,0.8)]"
									onMouseEnter={() => setHoverIndex(2)}
									onMouseLeave={() => setHoverIndex(null)}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<div className="p-3 bg-accent mr-5 flex items-center justify-center">
										<Linkedin size={24} color="#fafafa" />
									</div>
									<div className="flex-1">
										<span className="block text-xl">LinkedIn</span>
										<span className="text-foreground/70">
											linkedin.com/in/roberteggl
										</span>
									</div>
									<ArrowUpRight
										size={20}
										className="text-foreground/50 group-hover:text-foreground transition-colors"
									/>
								</motion.a>
							</div>
						</div>
					</motion.div>

					<motion.div
						className="relative max-md:hidden"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<div className="relative backdrop-blur-md bg-background/50 border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(250,250,250,0.8)] overflow-hidden transition-all p-1">
							<div className="flex items-center bg-foreground p-3">
								<div className="w-4 h-4 rounded-full bg-red-500 mr-2" />
								<div className="w-4 h-4 rounded-full bg-yellow-500 mr-2" />
								<div className="w-4 h-4 rounded-full bg-green-500 mr-2" />
								<div className="flex-1 text-center font-mono font-bold text-sm text-background">
									robert_eggl.sh
								</div>
							</div>

							<div
								ref={terminalRef}
								className="p-6 font-mono text-base bg-background text-foreground h-80 overflow-y-auto"
							>
								{terminalLines.map((line, index) => (
									<div
										key={index}
										className={`mb-2 ${line.startsWith('>') ? 'text-accent font-bold' : 'text-foreground/80'}`}
									>
										{line}
										{index === terminalLines.length - 1 &&
											!line.includes('Opening') &&
											!line.includes('Connecting') &&
											!line.includes('Establishing') &&
											!line.includes('Accessing') && (
												<span className="ml-1 animate-pulse">_</span>
											)}
									</div>
								))}
							</div>

							<div className="bg-foreground p-2 text-background font-mono text-xs flex justify-between">
								<span>Status: Online</span>
								<span>{'// Hover on links to see more'}</span>
							</div>
						</div>

						<motion.a
							href="/keys"
							className="mt-12 flex items-center gap-3 bg-background p-4 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(250,250,250,0.8)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(250,250,250,0.8)] group"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							<div className="p-3 bg-accent mr-5 flex items-center justify-center">
								<Key size={24} color="#fafafa" />
							</div>
							<span className="font-mono text-lg">My GPG Keys</span>
							<ArrowUpRight
								size={20}
								className="text-foreground/50 group-hover:text-foreground transition-colors ml-auto"
							/>
						</motion.a>
						<div className="flex items-center gap-2 mt-3 ml-2 text-foreground/80 text-sm">
							<svg
								width="18"
								height="18"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="inline-block"
							>
								<path
									d="M10 2C7.23858 2 5 4.23858 5 7V9H4C2.89543 9 2 9.89543 2 11V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V11C18 9.89543 17.1046 9 16 9H15V7C15 4.23858 12.7614 2 10 2ZM7 7C7 5.34315 8.34315 4 10 4C11.6569 4 13 5.34315 13 7V9H7V7ZM4 11H16V16H4V11Z"
									fill="#00a2a2"
								/>
							</svg>
							<span>
								Send me an{' '}
								<span className="font-semibold text-accent">
									encrypted message
								</span>{' '}
								using my GPG key!
							</span>
						</div>

						<div className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-dashed border-accent/40" />
					</motion.div>
				</div>

				<div className="mt-16 flex justify-center">
					<div className="inline-flex items-center space-x-6">
						<div className="h-1 w-12 bg-accent" />
						<div className="flex space-x-2">
							<Code size={20} className="text-accent" />
							<Terminal size={20} className="text-foreground" />
							<Laptop size={20} className="text-accent" />
						</div>
						<div className="h-1 w-12 bg-accent" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactSection
