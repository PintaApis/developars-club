import { User } from '../../entities/User'

export abstract class CanList {
	public abstract list(): Array<User>
}
