import {User, Punishment, Plan} from '.';

export interface LocalData {
    users: User[],
    punishments: Punishment[],
    plans: Plan[]
}
