import { Home } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import KeyCard from '@/components/keys/key-card'
import SectionHeader from '@/components/section-header'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import UsageSection from '@/components/usage-section'
import { GPG_KEYS } from '@/data/gpg-key'

export const metadata: Metadata = {
	title: 'GPG Keys - Robert Eggl',
	description:
		"Robert Eggl's GPG public keys for secure communication and verification."
}

export default function Keys() {
	const activeKeys = GPG_KEYS.filter((key) => key.status === 'active')
	const replacedKeys = GPG_KEYS.filter((key) => key.status === 'replaced')

	return (
		<main className="min-h-screen bg-background text-foreground">
			<div className="fixed inset-0 pointer-events-none">
				<div className="absolute inset-0 bg-gradient-radial from-[rgba(0,113,162,0.1)] to-transparent" />
				<div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:80px_80px]" />
			</div>

			<div className="fixed top-0 left-0 w-full overflow-hidden pointer-events-none select-none">
				<h2 className="font-mono font-black text-[25vw] leading-none opacity-[0.03] -mt-20 tracking-tighter">
					KEYS
				</h2>
			</div>

			<div className="container-custom relative z-10 py-24 px-4 sm:px-6 md:px-8 mx-auto ">
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
							<BreadcrumbPage>Keys</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<SectionHeader number="01" title="GPG Keys" mbSize="mb-8 md:mb-16" />

				<h1 className="sr-only">GPG Keys - Robert Eggl</h1>

				{activeKeys.map((keyInfo, index) => (
					<div key={keyInfo.id} className={index > 0 ? 'mt-12' : ''}>
						<KeyCard keyInfo={keyInfo} />
					</div>
				))}

				{replacedKeys.length > 0 && (
					<>
						<SectionHeader number="02" title="Previous Keys" mbSize="my-24" />
						{replacedKeys.map((keyInfo, index) => (
							<div key={keyInfo.id} className={index > 0 ? 'mt-12' : ''}>
								<KeyCard keyInfo={keyInfo} />
							</div>
						))}
					</>
				)}

				<SectionHeader number="03" title="Usage" mbSize="mt-24" />
				<UsageSection />
			</div>
		</main>
	)
}
