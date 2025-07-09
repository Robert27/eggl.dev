import React, { useEffect, useState } from 'react'

interface TypewriterProps {
	text: string
	delay?: number
	className?: string
}

const Typewriter: React.FC<TypewriterProps> = ({
	text,
	delay = 100,
	className
}) => {
	const [displayText, setDisplayText] = useState('')
	const [currentIndex, setCurrentIndex] = useState(0)
	useEffect(() => {
		setDisplayText('')
		setCurrentIndex(0)
	}, [text])

	useEffect(() => {
		if (!text) return

		if (currentIndex < text.length) {
			const timeout = setTimeout(() => {
				setDisplayText(text.slice(0, currentIndex + 1))
				setCurrentIndex((prev) => prev + 1)
			}, delay)

			return () => clearTimeout(timeout)
		}
	}, [currentIndex, delay, text])

	const formattedText = displayText.split('\n').map((line, index, array) => (
		<React.Fragment key={index}>
			{line}
			{index < array.length - 1 && <br />}
		</React.Fragment>
	))

	return (
		<span className={className}>
			{formattedText}
			<span className="animate-pulse">
				{currentIndex < text.length ? '|' : ''}
			</span>
		</span>
	)
}

export default Typewriter
