import {Plan, Punishment, LOG_TYPE} from '../types';

export const plan: Plan = {
    id: '',
    name: '',
    executors: [] as string[],
    frequency: 1,
    created: '',
};

export const punishment: Punishment = {
    id: '',
    name: '',
    created: '',
};

export const LOG_TYPE_MAP: Record<LOG_TYPE, string> = {
    [LOG_TYPE.CHECK_IN_PLAN]: '打卡了计划',
    [LOG_TYPE.CHECK_IN_PUNISHMENT]: '完成了惩罚',
    [LOG_TYPE.ADD_PUNISHMENT]: '新增了惩罚',
};
