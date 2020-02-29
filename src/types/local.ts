import {Punishment, Plan, PlanProgress, PunishmentProgress, Log} from '.';

export interface LocalData {
    punishments: Punishment[],
    plans: Plan[],
    progresses: {
        plans: PlanProgress[],
        punishments: PunishmentProgress[],
    }
    logs: Log[],
}
