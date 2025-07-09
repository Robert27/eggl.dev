import CopyButton from '@/components/keys/copy-button'
import { getKeyPreview } from '@/data/gpg-key'

interface KeyPreviewSectionProps {
	keyContent: string
	title?: string
	copyTitle?: string
	className?: string
}

export default function KeyPreviewSection({
	keyContent,
	title = 'Public Key',
	copyTitle = 'Copy full key to clipboard',
	className = ''
}: KeyPreviewSectionProps) {
	return (
		<div className={`relative w-full ${className}`}>
			<div className="relative backdrop-blur-md bg-background/50 p-4 md:p-6 lg:p-8 border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(250,250,250,0.8)] w-full">
				<h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 inline-block relative">
					{title}
					<div className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent" />
				</h3>

				<div className="space-y-4">
					<div className="relative w-full bg-background-dark rounded-lg">
						<pre className=" p-3 md:p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm whitespace-pre-wrap w-full break-all">
							{getKeyPreview(keyContent)}
						</pre>
						<CopyButton
							text={keyContent}
							title={copyTitle}
							className="absolute top-2 right-2"
						/>
					</div>
					<div className="text-foreground/70 text-sm md:text-base">
						To get the full public key, use the copy button above.
					</div>
				</div>
			</div>
		</div>
	)
}
