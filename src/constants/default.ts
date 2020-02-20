import {Plan, Punishment, PLAN_PERIOD} from '../types';

export const plan: Plan = {
    id: '',
    name: '',
    executors: [] as string[],
    period: PLAN_PERIOD.WEEK,
    frequency: 1,
    created: '',
};

export const planPeriodMap: Record<PLAN_PERIOD, string> = {
    [PLAN_PERIOD.WEEK]: '周',
    [PLAN_PERIOD.YEAR]: '年'
};

export const punishment: Punishment = {
    id: '',
    name: '',
    created: '',
};
