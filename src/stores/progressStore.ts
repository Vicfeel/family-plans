import {observable, computed} from 'mobx';

import {PlanProgress, PunishmentProgress} from '../types'

class ProgressStore {
    @observable plans: Map<string, PlanProgress> = new Map();
    @observable punishments: Map<string, PunishmentProgress> = new Map();

    @computed get planProgress() {
        const planProgress = {} as {[planId: string]: PlanProgress[]};

        this.plans.forEach((item) => {
            planProgress[item.planId] = planProgress[item.planId] || [];

            planProgress[item.planId].push(item);
        });

        return planProgress;
    }

    @computed get memberProgress() {
        const memberProgress = {} as {[planId: string]: PlanProgress[]};

        this.plans.forEach((item) => {
            memberProgress[item.memberId] = memberProgress[item.memberId] || [];

            memberProgress[item.memberId].push(item);
        });

        return memberProgress;
    }

    addPunishment = (punishmentId: string, memberId: string) => {
        const progress = this.getProgress(punishmentId, memberId) || {
            punishmentId, memberId,
            toCheckInCount: 0,
            records: [],
        };

        progress.toCheckInCount += 1;

        this.setProgress(punishmentId, memberId, progress);
    }

    getProgress = (punishmentId: string, memberId: string) =>
        this.punishments.get(`${punishmentId}_${memberId}`);
    
    setProgress = (punishmentId: string, memberId: string, progress: PunishmentProgress) =>
        this.punishments.set(`${punishmentId}_${memberId}`, progress);
}

export default new ProgressStore();
