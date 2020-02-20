import {Punishment, Plan, PlanProgress, PunishmentProgress} from '.';

export interface LocalData {
    punishments: Punishment[],
    plans: Plan[],
    progresses: {
        plans: PlanProgress[],
        punishments: PunishmentProgress[],
    }
}
