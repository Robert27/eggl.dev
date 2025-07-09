import { Lock, Shield, Terminal } from 'lucide-react'
import CopyButton from '@/components/keys/copy-button'

interface UsageSectionProps {
	className?: string
}

export default function UsageSection({ className = '' }: UsageSectionProps) {
	return (
		<div
			className={`relative col-span-1 md:col-span-2 mt-8 md:mt-16 w-full ${className}`}
		>
			<div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-12 h-12 md:w-16 md:h-16 border-t-4 border-l-4 border-accent opacity-50" />
			<div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-12 h-12 md:w-16 md:h-16 border-b-4 border-r-4 border-accent opacity-50" />

			<div className="relative backdrop-blur-md bg-background/50 p-4 md:p-6 lg:p-8 border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(250,250,250,0.8)] w-full">
				<h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 inline-block relative">
					Usage
					<div className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent" />
				</h3>

				<div className="space-y-4 md:space-y-6">
					<div className="flex items-start w-full">
						<div className="p-2 md:p-3 bg-accent mr-3 md:mr-5 flex items-center justify-center shrink-0">
							<Lock size={20} className="md:w-6 md:h-6" color="#fafafa" />
						</div>
						<div className="min-w-0 flex-1">
							<span className="block text-lg md:text-xl">Encryption</span>
							<span className="text-foreground/70 text-sm md:text-base">
								Encrypt messages to me
							</span>
						</div>
					</div>

					<div className="flex items-start w-full">
						<div className="p-2 md:p-3 bg-accent mr-3 md:mr-5 flex items-center justify-center shrink-0">
							<Shield size={20} className="md:w-6 md:h-6" color="#fafafa" />
						</div>
						<div className="min-w-0 flex-1">
							<span className="block text-lg md:text-xl">Verification</span>
							<span className="text-foreground/70 text-sm md:text-base">
								Verify my signatures and commits
							</span>
						</div>
					</div>

					<div className="flex items-start w-full">
						<div className="p-2 md:p-3 bg-accent mr-3 md:mr-5 flex items-center justify-center shrink-0">
							<Terminal size={20} className="md:w-6 md:h-6" color="#fafafa" />
						</div>
						<div className="min-w-0 flex-1">
							<span className="block text-lg md:text-xl">Import Command</span>
							<div className="relative w-full">
								<pre className="bg-background p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm mt-2 whitespace-pre-wrap w-full break-all">
									curl https://eggl.dev/api/keys.asc | gpg --import
								</pre>
								<CopyButton
									text="curl https://eggl.dev/api/keys.asc | gpg --import"
									title="Copy command to clipboard"
									className="absolute top-2 right-2"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
