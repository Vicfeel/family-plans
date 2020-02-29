import {action} from 'mobx';

import {message} from 'antd';

import {planStore, memberStore, progressStore} from '../stores';
import {PlanProgress, LOG_TYPE, PLAN_PERIOD} from '../types';
import {isSameDay, getTime} from '../utils';
import {logAction} from '.';

class PlanProgressAction {
    @action('计划打卡') checkIn = (memberId: string, planId: string) => {
        if (!memberStore.has(memberId) || !planStore.has(planId)) {
            return;
        }

        const progress = this.getProgress(planId, memberId);
        const now = getTime();

        progress.records.push(now);
        progressStore.plans.set(`${planId}_${memberId}`, progress);

        logAction.add({
            member: memberStore.getName(memberId),
            type: LOG_TYPE.CHECK_IN_PLAN,
            name: planStore.getName(planId),
            date: now,
        });

        message.success('计划打卡完成');
    }

    @action('重置打卡进度') reset = (period: PLAN_PERIOD) => {
        [...progressStore.plans.values()].forEach(({planId, memberId}) => {
            const plan = planStore.get(planId);

            if (!plan || plan.period === period) {
                this.deleteProgress(planId, memberId);
            }
        });
    }

    setProgress = (planId: string, memberId: string, progress: PlanProgress) =>
        progressStore.plans.set(`${planId}_${memberId}`, progress);

    getProgress = (planId: string, memberId: string): PlanProgress => 
        progressStore.plans.get(`${planId}_${memberId}`) || {planId, memberId, records: []};

    deleteProgress = (planId: string, memberId: string) => progressStore.plans.delete(`${planId}_${memberId}`);

    getCheckInCount = (planId: string, memberId: string) =>
        this.getProgress(planId, memberId).records.length;

    hasCheckInToday = (planId: string, memberId: string) =>
        this.getProgress(planId, memberId).records.some(isSameDay(getTime()));
}

export default new PlanProgressAction();
