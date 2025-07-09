import { NextResponse } from 'next/server'
import { GPG_KEY, NEULAND_GPG_KEY, OLD_GPG_KEY } from '@/data/gpg-key'

export async function GET() {
	const combinedKeys = `${GPG_KEY}\n\n# Previous Key (Kept for historical reference)\n${OLD_GPG_KEY}\n\n# Neuland Ingolstadt e.V.Key\n${NEULAND_GPG_KEY}`

	return new NextResponse(combinedKeys, {
		headers: {
			'Content-Type': 'text/plain',
			'Content-Disposition': 'attachment; filename="robert-eggl.asc"'
		}
	})
}
