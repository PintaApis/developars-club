import { Account, Credentials } from '../domain/entities/Account'
import { User } from '../domain/entities/User'

import { CanAuthenticate } from '../domain/interfaces/adapters/canAuthenticate'
import { CanRegister } from '../domain/interfaces/adapters/canRegister'
import { CanList } from '../domain/interfaces/adapters/canList'

export class DefaultUserRepository
	implements CanRegister, CanAuthenticate, CanList
{
	public authenticate(credentials: Credentials): void {
		throw new Error('Method not implemented.')
	}

	public register(account: Account): void {
		throw new Error('Method not implemented.')
	}

	public list(): Array<User> {
		throw new Error('Method not implemented.')
	}
}
