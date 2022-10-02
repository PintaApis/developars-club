import { Credentials } from '../../domain/entities/Account'

import { CanAuthenticate } from '../../domain/interfaces/adapters/canAuthenticate'

export class UserAuthenticator {
	constructor(private readonly repository: CanAuthenticate) {}

	public execute(credentials: Credentials) {
		return this.repository.authenticate(credentials)
	}
}
