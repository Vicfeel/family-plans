export interface PlanProgress {
    planId: string;
    memberId: string;
    records: string[];
}

export interface PunishmentProgress {
    punishmentId: string;
    memberId: string;
    toCheckInCount: number;
    records: string[];
}

export enum LOG_TYPE {
    CHECK_IN_PLAN = 'checkInPlan',
    CHECK_IN_PUNISHMENT = 'checkInPunishment',
    ADD_PUNISHMENT = 'addPunishment'
};

export interface Log {
    id: string;
    member: string;
    type: LOG_TYPE;
    name: string;
    date: string;
}
