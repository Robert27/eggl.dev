import { Github, GithubIcon, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
	const currentYear = new Date().getFullYear()
	const gitSha = process.env.NEXT_PUBLIC_GIT_SHA ?? 'development'

	return (
		<footer className="py-12 border-t-2 border-neo-border bg-accent-background">
			<div className="container-custom">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<div className="mb-6 md:mb-0">
						<p className="font-mono font-bold text-xl">Robert Eggl</p>
						<p className="text-muted-foreground">
							Software Engineer & Master's Student
						</p>
					</div>

					<div className="flex gap-4">
						<a
							href="https://github.com/Robert27"
							target="_blank"
							rel="noopener noreferrer"
							className="neo-button p-3 !aspect-square flex items-center justify-center"
							aria-label="GitHub"
						>
							<Github size={20} />
						</a>
						<a
							href="https://linkedin.com/in/roberteggl"
							target="_blank"
							rel="noopener noreferrer"
							className="neo-button p-3 !aspect-square flex items-center justify-center"
							aria-label="LinkedIn"
						>
							<Linkedin size={20} />
						</a>

						<a
							href="mailto:robert@eggl.dev"
							className="neo-button p-3 !aspect-square flex items-center justify-center"
							aria-label="Email"
						>
							<Mail size={20} />
						</a>
					</div>
				</div>

				<div className="border-t border-neo-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
					<p>&copy; {currentYear} Robert Eggl. All rights reserved.</p>
					<div className="flex gap-6 mt-4 md:mt-0">
						<Link href="/legal/imprint" className="hover:underline">
							Imprint
						</Link>
						<Link href="/legal/privacy" className="hover:underline">
							Datenschutz | Privacy
						</Link>
					</div>
				</div>

				<div className="text-xs text-center mt-10 text-muted-foreground">
					<div className="mb-4">
						<p className="opacity-90 hover:opacity-100 transition-opacity">
							🤫 Psst! This isn't some boring template <br /> Every pixel was
							crafted with care and at least three cups of coffee. ;)
						</p>
					</div>
					<a
						href={`https://github.com/Robert27/eggl.dev/commit/${gitSha}`}
						target="_blank"
						className="group"
						rel="noopener noreferrer"
						aria-label="View commit on GitHub"
					>
						<div className="inline-flex items-center gap-2 neo-card px-4 py-2">
							<div className="flex items-center gap-2">
								<GithubIcon
									size={12}
									className="group-hover:scale-110 group-hover:text-accent transition-all duration-200"
								/>
								<span className="font-mono text-[0.7rem]">
									Commit SHA:{' '}
									<span className="text-accent font-bold">
										{gitSha.slice(0, 7)}
									</span>
								</span>
							</div>
						</div>
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
