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
