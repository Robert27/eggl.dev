import { Calendar, Fingerprint, Key, MailIcon } from 'lucide-react'
import type { GPGKeyInfo } from '@/data/gpg-key'

interface KeyInfoSectionProps {
	keyInfo: GPGKeyInfo
	title?: string
	className?: string
}

export default function KeyInfoSection({
	keyInfo,
	title = 'Key Information',
	className = ''
}: KeyInfoSectionProps) {
	return (
		<div className={`relative w-full ${className}`}>
			<div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-12 h-12 md:w-16 md:h-16 border-t-4 border-l-4 border-accent opacity-50" />
			<div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-12 h-12 md:w-16 md:h-16 border-b-4 border-r-4 border-accent opacity-50" />

			<div className="relative backdrop-blur-md bg-background/50 p-4 md:p-6 lg:p-8 border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(250,250,250,0.8)] w-full">
				<h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 inline-block relative">
					{title}
					<div className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent" />
				</h3>

				<div className="space-y-4 md:space-y-6">
					<div className="flex items-center w-full">
						<div className="p-2 md:p-3 bg-accent mr-3 md:mr-5 flex items-center justify-center shrink-0">
							<MailIcon size={20} className="md:w-6 md:h-6" color="#fafafa" />
						</div>
						<div className="min-w-0 flex-1">
							<span className="block text-lg md:text-xl">E-Mail</span>
							<a
								className="text-foreground/90 text-sm md:text-base hover:underline hover:text-accent"
								href={`mailto:${keyInfo.email}`}
							>
								{keyInfo.email}
							</a>
						</div>
					</div>

					<div className="flex items-center w-full">
						<div className="p-2 md:p-3 bg-accent mr-3 md:mr-5 flex items-center justify-center shrink-0">
							<Key size={20} className="md:w-6 md:h-6" color="#fafafa" />
						</div>
						<div className="min-w-0 flex-1">
							<span className="block text-lg md:text-xl">Key ID</span>
							<span className="text-foreground/70 text-sm md:text-base">
								{keyInfo.keyId}
							</span>
						</div>
					</div>

					<div className="flex items-center w-full">
						<div className="p-2 md:p-3 bg-accent mr-3 md:mr-5 flex items-center justify-center shrink-0">
							<Fingerprint
								size={20}
								className="md:w-6 md:h-6"
								color="#fafafa"
							/>
						</div>
						<div className="min-w-0 flex-1">
							<span className="block text-lg md:text-xl">Fingerprint</span>
							<span className="text-foreground/70 text-sm md:text-base break-all">
								{keyInfo.fingerprint}
							</span>
						</div>
					</div>

					<div className="flex items-center w-full">
						<div className="p-2 md:p-3 bg-accent mr-3 md:mr-5 flex items-center justify-center shrink-0">
							<Calendar size={20} className="md:w-6 md:h-6" color="#fafafa" />
						</div>
						<div className="min-w-0 flex-1">
							<span className="block text-lg md:text-xl">Validity</span>
							<span className="text-foreground/70 text-sm md:text-base">
								{keyInfo.validity.from} - {keyInfo.validity.to}
							</span>
						</div>
					</div>

					{keyInfo.description && (
						<div className="text-foreground/70 text-sm md:text-base mt-4">
							{keyInfo.description}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
