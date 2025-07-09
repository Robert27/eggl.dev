import { allBlogs } from 'contentlayer/generated'
import { BookOpen, Calendar, Clock, Home } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

export const generateStaticParams = async () =>
	allBlogs.map((p) => ({ slug: p.slug }))

export default function BlogPostPage({ params }: { params: { slug: string } }) {
	const post = allBlogs.find((p) => p.slug === params.slug)
	if (!post) return notFound()

	// biome-ignore lint/correctness/useHookAtTopLevel: TODO
	const MDXContent = useMDXComponent(post.body.code)

	// Calculate reading time and word count
	const wordCount = post.body.raw.split(' ').length
	const readingTime = Math.ceil(wordCount / 100)

	// Format date
	const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})

	return (
		<article className="py-20">
			{/* Breadcrumbs */}
			<Breadcrumb className="mb-8">
				<BreadcrumbList className="font-mono">
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link
								href="/"
								className="flex items-center gap-1 hover:text-accent transition-colors duration-200"
							>
								<Home size={14} />
								<span>Home</span>
							</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link
								href="/blog"
								className="hover:text-accent transition-colors duration-200"
							>
								Blog
							</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage
							className="max-w-[200px] truncate"
							title={post.title}
						>
							{post.title}
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			{/* Article header */}
			<header className="mb-12">
				<h1 className="text-3xl md:text-4xl font-bold font-mono mb-2 leading-tight text-accent">
					{post.title}
				</h1>

				{/* Meta information */}
				<div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground font-mono">
					<div className="flex items-center gap-2">
						<Calendar size={14} className="text-accent" />
						<span>{formattedDate}</span>
					</div>
					<div className="flex items-center gap-2">
						<Clock size={14} className="text-accent" />
						<span>{readingTime} min read</span>
					</div>
					<div className="flex items-center gap-2">
						<BookOpen size={14} className="text-accent" />
						<span>{wordCount} words</span>
					</div>
				</div>

				{/* Description */}
				{post.description && (
					<p className="text-xl text-muted-foreground font-mono leading-relaxed">
						{'>'} {post.description}
					</p>
				)}
			</header>

			{/* Article content */}
			<div className="prose dark:prose-invert prose-lg max-w-none">
				<MDXContent />
			</div>
		</article>
	)
}
