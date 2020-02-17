import {action} from 'mobx';

import {message} from 'antd';

import {planStore, memberStore, progressStore} from '../stores';
import {PlanProgress} from '../types';
import {isSameDay, getTime} from '../utils';

class PlanProgressAction {
    @action('计划打卡') checkIn = (memberId: string, planId: string) => {
        if (!memberStore.has(memberId) || !planStore.has(planId)) {
            return;
        }

        const progress = this.getProgress(planId, memberId);

        progress.records.push(getTime());
        progressStore.plans.set(`${planId}_${memberId}`, progress);

        message.success('计划打卡完成');
    }

    getProgress = (planId: string, memberId: string): PlanProgress => 
        progressStore.plans.get(`${planId}_${memberId}`) || {planId, memberId, records: []};

    getCheckInCount = (planId: string, memberId: string) =>
        this.getProgress(planId, memberId).records.length;

    hasCheckInToday = (planId: string, memberId: string) =>
        this.getProgress(planId, memberId).records.some(isSameDay(getTime()));
}

export default new PlanProgressAction();
