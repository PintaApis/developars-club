import { Account } from '../../domain/entities/Account'

import { CanRegister } from '../../domain/interfaces/adapters/canRegister'

export class UserRegistrator {
	constructor(private readonly repository: CanRegister) {}

	public execute(account: Account) {
		return this.repository.register(account)
	}
}
