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

export interface Log {
    id: string;
    member: string;
    type: 'checkInPlan' | 'checkInPunishment';
    name: string;
    date: string;
}
