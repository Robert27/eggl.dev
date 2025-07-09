'use client'
import { AnimatePresence } from 'framer-motion'

const Provider = ({ children }: { children: React.ReactNode }) => {
	return <AnimatePresence mode="wait">{children}</AnimatePresence>
}

export default Provider
