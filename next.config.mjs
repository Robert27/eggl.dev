import { withContentlayer } from 'next-contentlayer2'

/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true
	},
	typescript: {
		ignoreBuildErrors: true
	},
	images: {
		unoptimized: true
	},
	output: 'standalone',
	experimental: {
		reactCompiler: true,
		optimizePackageImports: ['framer-motion', 'lucide-react']
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production'
	}
}

export default withContentlayer(nextConfig)
