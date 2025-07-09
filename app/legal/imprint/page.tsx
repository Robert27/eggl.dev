import { Home } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/section-header'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import imprintData from '@/data/imprint'

export const metadata: Metadata = {
	title: 'Imprint | Robert Eggl',
	description: 'Imprint page for Robert Eggl'
}

const Imprint = () => {
	const { contactInformation, legalInformation } = imprintData

	return (
		<div className="container mx-auto px-4 max-w-5xl py-20">
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
						<BreadcrumbPage>Imprint</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<SectionHeader number="01" title="Impressum" />

			<h1 className="sr-only">Imprint - Robert Eggl</h1>

			<section className="mb-10 mt-8">
				<h2 className="text-2xl font-mono font-bold mb-6">
					{contactInformation.title}
				</h2>
				<div className="neo-card p-6 select-none pointer-events-none">
					<p className="mb-3">
						<strong>Name:</strong> {contactInformation.name}
					</p>
					<p className="mb-3">
						<strong>Addresse:</strong> {contactInformation.address}
					</p>
					<p className="mb-3">
						<strong>E-Mail:</strong> {contactInformation.email}
					</p>
					<p className="mb-3">
						<strong>Telefon:</strong> {contactInformation.phone}
					</p>
				</div>
			</section>

			<section className="mb-10 mt-8">
				<h2 className="text-2xl font-mono font-bold mb-6">
					Verantwortlich für den Inhalt
				</h2>
				<div className="neo-card p-6 select-none pointer-events-none">
					<p className="mb-3">{legalInformation.responsibleForContent}</p>
				</div>
			</section>
		</div>
	)
}

export default Imprint
