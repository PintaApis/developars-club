import { Skill } from './Skill'
import { User } from './User'

export interface Profile {
	experience: Array<Experience>
	repositories: Array<Repository>
	skills: Array<ValidatedSkill | WorkedSkill>
}

export type Experience = {
	company: Company
	description: string
	skills: Array<Skill>
	startDate: Date
	endDate: Date | 'CURRENT'
}

export type ValidatedSkill = Skill & {
	validatedBy: Array<User>
}

// WARP "WorkedSkill"
export type WorkedSkill = Skill & {
	workedId: Array<Company>
}

export type Company = {
	name: string
}

export type Repository = {
	name: string
	url: string
	description: string
}
