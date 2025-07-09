import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
	const currentYear = new Date().getFullYear()

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

				<p className="text-xs text-center mt-10 text-muted-foreground  opacity-90 hover:opacity-100 transition-opacity cursor-default">
					🤫 Psst! This isn't some boring template <br /> Every pixel was
					crafted with care and at least three cups of coffee. ;)
					<br />
					The source code will be available soon!
				</p>
			</div>
		</footer>
	)
}

export default Footer
