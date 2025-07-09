import KeyInfoSection from '@/components/keys/key-info-section'
import KeyPreviewSection from '@/components/keys/key-preview-section'
import type { GPGKeyInfo } from '@/data/gpg-key'

interface KeyCardProps {
	keyInfo: GPGKeyInfo
	className?: string
}

export default function KeyCard({ keyInfo, className = '' }: KeyCardProps) {
	return (
		<div
			className={`grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 ${className}`}
		>
			<KeyInfoSection keyInfo={keyInfo} />
			<KeyPreviewSection keyContent={keyInfo.key} />
		</div>
	)
}
