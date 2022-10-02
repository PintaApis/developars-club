import { Account, Credentials } from '../../entities/Account'

export abstract class CanAuthenticate {
	public abstract authenticate(credentials: Credentials): void
}
