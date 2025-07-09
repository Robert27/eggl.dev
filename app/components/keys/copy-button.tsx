'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

interface CopyButtonProps {
	text: string
	title?: string
	className?: string
}

export default function CopyButton({
	text,
	title = 'Copy to clipboard',
	className = ''
}: CopyButtonProps) {
	const [copied, setCopied] = useState(false)

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(text)
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		} catch (err) {
			console.error('Failed to copy text: ', err)
		}
	}

	return (
		<button
			type="button"
			onClick={handleCopy}
			className={`p-1.5 md:p-2 rounded-lg bg-background hover:bg-[#2a2a2a] transition-colors text-foreground/70 hover:text-foreground ${className}`}
			title={title}
		>
			{copied ? (
				<Check size={16} className="md:w-[18px] md:h-[18px]" />
			) : (
				<Copy size={16} className="md:w-[18px] md:h-[18px]" />
			)}
		</button>
	)
}
