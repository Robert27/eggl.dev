export interface ContactInformation {
	title: string
	name: string
	address: string
	email: string
	phone: string
}

export interface LegalInformation {
	responsibleForContent: string
}

export interface ImprintData {
	contactInformation: ContactInformation
	legalInformation: LegalInformation
}

export const imprintData: ImprintData = {
	contactInformation: {
		title: 'Kontaktinformationen',
		name: 'Robert Eggl',
		address: process.env.NEXT_PUBLIC_ADDRESS ?? '',
		email: 'info@eggl.dev',
		phone: process.env.NEXT_PUBLIC_PHONE ?? ''
	},
	legalInformation: {
		responsibleForContent: 'Robert Eggl'
	}
}

export default imprintData
