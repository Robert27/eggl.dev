import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

/**
 * Apply dark theme
 */
export function initializeTheme(): void {
	try {
		const stored = localStorage.getItem('theme')
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches
		const theme =
			stored === 'light' || stored === 'dark'
				? stored
				: prefersDark
					? 'dark'
					: 'light'

		const root = document.documentElement

		root.classList.remove('light', 'dark')
		root.classList.add(theme)
		root.setAttribute('data-theme', theme)
	} catch (e) {
		console.error('Theme initialization failed:', e)
	}
}
