import { describe, test, expect } from '@jest/globals'

import { UserList } from '../src/application/useCase/userList'
import { User } from '../src/domain/entities/User'
import { CanList } from '../src/domain/interfaces/adapters/canList'

const users: User[] = [
	{
		displayName: 'John Doe',
		username: 'johndoe',
		avatar: 'avatar.png',
		role: [],
		summary: null,
		profile: null,
		following: [],
		followers: [],
	},
]

describe('user list', () => {
	test('should return a list', () => {
		const repository: CanList = {
			list: function (): User[] {
				return users
			},
		}

		const userLister = new UserList(repository)
		const userList = userLister.execute()

		expect(userList).toBe(users)
	})
})
