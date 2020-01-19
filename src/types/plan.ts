export interface Plan {
    id: string;
    name: string;
    period: number;
    frequency: number;
    executors: string[];
    created: string;
}
