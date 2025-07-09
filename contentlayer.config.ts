import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

export const Blog = defineDocumentType(() => ({
	name: 'Blog',
	filePathPattern: '**/*.md',
	contentType: 'mdx',
	fields: {
		title: { type: 'string', required: true },
		date: { type: 'date', required: true },
		description: { type: 'string', required: false }
	},
	computedFields: {
		slug: {
			type: 'string',
			resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx?$/, '')
		}
	}
}))

export default makeSource({
	contentDirPath: 'posts',
	documentTypes: [Blog],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypeSlug]
	}
})
