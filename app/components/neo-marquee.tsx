'use client'
import MarqueeImport from 'react-fast-marquee'

// biome-ignore lint/suspicious/noExplicitAny: not a problem
const Marquee = (MarqueeImport as any).default || MarqueeImport
interface NeoMarqueeProps {
	text: string
	speed?: number
	backgroundColor?: string
	textColor?: string
	className?: string
	repeat?: number
	fullBleed?: boolean
}

const NeoMarquee = ({
	text,
	speed = 60,
	backgroundColor = 'bg-neo-accent',
	textColor = 'text-secondary-foreground',
	className = '',
	repeat = 2,
	fullBleed = false
}: NeoMarqueeProps) => {
	const content = repeat > 1 ? Array(repeat).fill(text).join(' • ') : text

	const marqueeSpeed = 120 - speed

	return (
		<div
			className={`${backgroundColor} ${textColor} py-3 overflow-hidden neo-border-y ${className}${fullBleed ? ' w-screen relative left-1/2 right-1/2 -mx-[50vw] px-0' : ''}`}
		>
			<Marquee
				speed={marqueeSpeed}
				className="font-mono font-bold text-xl tracking-wide"
			>
				{content}
			</Marquee>
		</div>
	)
}

export default NeoMarquee
