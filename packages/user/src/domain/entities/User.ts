import { Profile } from './Profile'

import { DatabaseRecord } from '../types/Record'

export interface User {
	displayName: string
	avatar: string
	username: string
	role: Array<Role>
	summary: string | null
	profile: Profile | null
	following: Array<User>
	followers: Array<User>
}

export type Role = {
	name: string
	description: string
}

export type UserRecord = User & DatabaseRecord
