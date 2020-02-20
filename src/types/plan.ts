export enum PLAN_PERIOD {
    WEEK = 'week',
    YEAR = 'year'
};

export interface Plan {
    id: string;
    name: string;
    period: PLAN_PERIOD;
    frequency: number;
    executors: string[];
    created: string;
}
