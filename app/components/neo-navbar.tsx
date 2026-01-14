'use client'
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const headerRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const setNavbarHeight = () => {
			if (headerRef.current) {
				const height = headerRef.current.getBoundingClientRect().height
				document.documentElement.style.setProperty(
					'--navbar-height',
					`${height}px`
				)
			}
		}
		setNavbarHeight()
		window.addEventListener('resize', setNavbarHeight)
		return () => window.removeEventListener('resize', setNavbarHeight)
	}, [isMenuOpen])

	const navLinks = [
		{ name: 'Projects', href: '/projects', isPage: true },
		{ name: 'Contact', href: '/#contact', isPage: false },
		{ name: 'GPG Keys', href: '/keys', isPage: true },
		{ name: 'Blog', href: '/blog', isPage: true }
	]

	const socialLinks = [
		{ icon: Github, href: 'https://github.com/Robert27', label: 'GitHub' },
		{
			icon: Linkedin,
			href: 'https://linkedin.com/in/roberteggl',
			label: 'LinkedIn'
		},
		{ icon: Mail, href: 'mailto:info@eggl.dev', label: 'Email' }
	]

	interface NavLinkProps {
		link: {
			name: string
			href: string
			isPage: boolean
			icon?: React.ElementType
		}
		className: string
		onClick?: () => void
	}

	const NavLink = ({ link, className, onClick }: NavLinkProps) => {
		if (link.isPage) {
			return (
				<Link
					href={link.href}
					className={`${className} relative group`}
					onClick={onClick}
				>
					{link.icon ? <link.icon size={16} className="inline mr-1" /> : null}
					{link.name}
					<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
				</Link>
			)
		}
		return (
			<a
				href={link.href}
				className={`${className} relative group`}
				onClick={onClick}
			>
				{link.name}
				<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
			</a>
		)
	}

	return (
		<header
			ref={headerRef}
			className={
				'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 backdrop-blur-md bg-background/80 border-b border-accent/20'
			}
		>
			<div className="container-custom flex items-center justify-between">
				<Link href="/" className="font-mono font-bold text-xl text-foreground">
					Robert Eggl
				</Link>

				<nav className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<NavLink
							key={link.name}
							link={link}
							className="font-mono text-sm tracking-wider text-foreground hover:text-accent transition-colors"
							onClick={() => {}}
						/>
					))}
					<div className="h-4 w-px bg-accent/20 mx-2" />
					<div className="flex items-center gap-4">
						{socialLinks.map((social) => (
							<a
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-accent/80 hover:text-accent transition-colors"
								aria-label={social.label}
							>
								<social.icon size={18} />
							</a>
						))}
					</div>
				</nav>

				<div className="flex md:hidden items-center gap-4">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="p-2 text-accent hover:text-accent/80 transition-colors"
						aria-label="Toggle menu"
						type="button"
					>
						{isMenuOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</div>

			{isMenuOpen && (
				<div className="md:hidden backdrop-blur-md bg-background/95 border-b border-accent/20">
					<div className="container-custom py-4">
						<nav className="flex flex-col gap-4">
							{navLinks.map((link) => (
								<NavLink
									key={link.name}
									link={link}
									className="font-mono text-lg py-2 text-foreground hover:text-accent transition-colors"
									onClick={() => setIsMenuOpen(false)}
								/>
							))}
							<div className="h-px bg-accent/20 my-2" />
							<div className="flex items-center gap-4">
								{socialLinks.map((social) => (
									<a
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="text-accent/80 hover:text-accent transition-colors"
										aria-label={social.label}
									>
										<social.icon size={20} />
									</a>
								))}
							</div>
						</nav>
					</div>
				</div>
			)}
		</header>
	)
}

export default Navbar
