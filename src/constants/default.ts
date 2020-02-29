import {Plan, Punishment, PLAN_PERIOD, LOG_TYPE} from '../types';

export const plan: Plan = {
    id: '',
    name: '',
    executors: [] as string[],
    period: PLAN_PERIOD.WEEK,
    frequency: 1,
    created: '',
};

export const PLAN_PERIOD_MAP: Record<PLAN_PERIOD, string> = {
    [PLAN_PERIOD.WEEK]: '周',
    [PLAN_PERIOD.YEAR]: '年'
};

export const punishment: Punishment = {
    id: '',
    name: '',
    created: '',
};

export const LOG_TYPE_MAP: Record<LOG_TYPE, string> = {
    [LOG_TYPE.CHECK_IN_PLAN]: '打卡了计划',
    [LOG_TYPE.CHECK_IN_PUNISHMENT]: '完成了惩罚',
};
