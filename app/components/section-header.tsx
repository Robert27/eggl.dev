'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionHeaderProps {
	number: string
	title: string
	className?: string
	mbSize?: string
}

const SectionHeader = ({
	number,
	title,
	className = '',
	mbSize = 'mb-12'
}: SectionHeaderProps) => {
	const headerRef = useRef(null)
	const isInView = useInView(headerRef, {
		once: true,
		amount: 0.1
	})

	return (
		<motion.h2
			ref={headerRef}
			className={`text-3xl md:text-4xl font-bold ${mbSize} relative flex items-center flex-wrap ${className}`}
			initial={{ opacity: 0, y: 20 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
			transition={{
				type: 'spring',
				stiffness: 100,
				damping: 20,
				delay: 0.1
			}}
			style={{ willChange: 'transform, opacity' }}
		>
			<motion.span className="bg-neo-accent text-secondary-foreground px-2 mr-3 inline-flex items-center overflow-hidden relative">
				<motion.span
					className="inline-block"
					initial={{ y: 30 }}
					animate={isInView ? { y: 0 } : { y: 30 }}
					transition={{
						type: 'spring',
						stiffness: 300,
						damping: 15,
						delay: 0.2
					}}
					style={{ willChange: 'transform' }}
				>
					{number}
				</motion.span>
				<motion.div
					className="absolute inset-0 bg-tertiary"
					initial={{ scaleY: 1, transformOrigin: 'top' }}
					animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					style={{ willChange: 'transform' }}
				/>
			</motion.span>
			<motion.span
				className="inline-flex items-center break-words break-all md:break-normal"
				initial={{ opacity: 0, x: -20 }}
				animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
				transition={{ delay: 0.3, duration: 0.5 }}
				style={{ willChange: 'transform, opacity' }}
			>
				{title}
			</motion.span>
		</motion.h2>
	)
}

export default SectionHeader
