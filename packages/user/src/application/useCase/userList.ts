import { Credentials } from '../../domain/entities/Account'

import { CanList } from '../../domain/interfaces/adapters/canList'

export class UserList {
	constructor(private readonly repository: CanList) {}

	public execute() {
		return this.repository.list()
	}
}
