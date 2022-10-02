import { Account } from '../../entities/Account'

export abstract class CanRegister {
	public abstract register(account: Account): void
}
