import { User } from './User'

export type Credentials = {
	identifier: string
	password: string
}

export type AccountMeta = {
	email: Email
	user: User
}

export type Email = {
	address: string
	verified: boolean
}

export type Account = Credentials & AccountMeta
