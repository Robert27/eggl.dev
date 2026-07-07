import { serializeJsonLd } from '@/lib/structured-data'

export function JsonLd({ data }: { data: Record<string, unknown> }) {
	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
			dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
		/>
	)
}
