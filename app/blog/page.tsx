'use client'
import { allBlogs } from 'contentlayer/generated'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, BookOpen, Calendar, Clock, Rss } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

interface BlogCardProps {
	post: (typeof allBlogs)[0]
	index: number
}

const BlogCard = ({ post, index }: BlogCardProps) => {
	const cardRef = useRef(null)
	const isInView = useInView(cardRef, {
		once: true,
		margin: '-50px 0px',
		amount: 0.2
	})

	const wordCount = post.body.raw.split(' ').length
	const readingTime = Math.ceil(wordCount / 200)

	const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})

	const cardVariants = {
		hidden: {
			opacity: 0,
			y: 30,
			scale: 0.95
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: 'spring' as const,
				damping: 20,
				stiffness: 90,
				delay: index * 0.1
			}
		}
	}

	return (
		<motion.div
			ref={cardRef}
			variants={cardVariants}
			initial="hidden"
			animate={isInView ? 'visible' : 'hidden'}
			className="group"
		>
			<Link href={`/blog/${post.slug}`} className="block">
				<div className="neo-card p-8 relative overflow-hidden bg-gradient-to-br from-background via-background to-background/95 hover:from-background hover:via-background/98 hover:to-background transition-all duration-500">
					<motion.div
						className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
						initial={{ scale: 0.8, opacity: 0 }}
						animate={
							isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
						}
						transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
					/>

					<div className="relative z-10">
						<div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground font-mono">
							<div className="flex items-center gap-1">
								<Calendar size={14} />
								<span>{formattedDate}</span>
							</div>
							<div className="flex items-center gap-1">
								<Clock size={14} />
								<span>{readingTime} min read</span>
							</div>
							<div className="flex items-center gap-1">
								<BookOpen size={14} />
								<span>{wordCount} words</span>
							</div>
						</div>

						<motion.h2
							className="text-2xl md:text-3xl font-bold font-mono mb-4 group-hover:text-accent transition-colors duration-300 leading-tight"
							initial={{ opacity: 0, x: -20 }}
							animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
							transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
						>
							{post.title}
						</motion.h2>

						<motion.p
							className="text-muted-foreground text-lg leading-relaxed mb-6"
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
						>
							{post.description}
						</motion.p>

						<motion.div
							className="flex items-center gap-2 text-accent font-mono font-bold group-hover:gap-3 transition-all duration-300"
							initial={{ opacity: 0, x: -10 }}
							animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
							transition={{ delay: index * 0.1 + 0.6, duration: 0.6 }}
						>
							<span>READ ARTICLE</span>
							<ArrowRight
								size={16}
								className="group-hover:translate-x-1 transition-transform duration-300"
							/>
						</motion.div>
					</div>

					<div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
				</div>
			</Link>
		</motion.div>
	)
}

export default function BlogPage() {
	const posts = allBlogs.sort(
		(a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
	)

	const headerRef = useRef(null)
	const isInView = useInView(headerRef, {
		once: true,
		amount: 0.1
	})

	return (
		<div className="container mx-auto px-4 max-w-4xl py-20">
			<div className="fixed top-12 left-0 w-full overflow-hidden pointer-events-none select-none">
				<h2 className="font-mono font-black text-[25vw] leading-none opacity-[0.03] -mt-20 tracking-tighter">
					BLOG
				</h2>
			</div>
			<motion.div
				ref={headerRef}
				className="mb-16"
				initial={{ opacity: 0, y: 30 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
				transition={{ type: 'spring', stiffness: 100, damping: 20 }}
			>
				<div className="flex items-center justify-between mb-6">
					<motion.h1
						className="text-4xl md:text-5xl font-bold font-mono"
						initial={{ opacity: 0, x: -20 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
						transition={{ delay: 0.2, duration: 0.6 }}
					>
						THE BLOG.
					</motion.h1>
					<motion.a
						href="/api/feed"
						className="neo-card p-3 hover:bg-accent/10 transition-colors duration-300 group"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={
							isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
						}
						transition={{ delay: 0.3, duration: 0.6 }}
						title="Subscribe to RSS feed"
					>
						<Rss
							size={20}
							className="text-accent group-hover:text-accent/80 transition-colors duration-300"
						/>
					</motion.a>
				</div>
				<motion.p
					className="text-xl text-muted-foreground font-mono max-w-2xl"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ delay: 0.4, duration: 0.6 }}
				>
					Thoughts, tutorials, and insights on software development, design, and
					technology.
				</motion.p>
			</motion.div>

			<div className="space-y-8">
				{posts.map((post, index) => (
					<BlogCard key={post._id} post={post} index={index} />
				))}
			</div>

			{posts.length === 0 && (
				<motion.div
					className="text-center py-16"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.6 }}
				>
					<div className="neo-card p-12 max-w-md mx-auto">
						<BookOpen
							size={48}
							className="mx-auto mb-4 text-muted-foreground"
						/>
						<h3 className="text-xl font-bold font-mono mb-2">No posts yet</h3>
						<p className="text-muted-foreground">
							I'm working on some interesting content. Check back soon!
						</p>
					</div>
				</motion.div>
			)}
		</div>
	)
}
