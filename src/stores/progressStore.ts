import {observable, computed} from 'mobx';

import {PlanProgress, PunishmentProgress} from '../types'

class ProgressStore {
    @observable plans: Map<string, PlanProgress> = new Map();
    @observable punishments: Map<string, PunishmentProgress> = new Map();

    @computed get memberPlanProgress() {
        const memberProgress = {} as {[memberId: string]: number};

        this.plans.forEach((item) => {
            memberProgress[item.memberId] = memberProgress[item.memberId] || 0;

            memberProgress[item.memberId] += item.records.length;
        });

        return memberProgress;
    }

    @computed get memberPunishmentProgress() {
        const memberProgress = {} as {[memberId: string]: number};

        this.punishments.forEach((item) => {
            memberProgress[item.memberId] = memberProgress[item.memberId] || 0;

            memberProgress[item.memberId] += item.records.length;
        });

        return memberProgress;
    }

    init = (plans: PlanProgress[], punishments: PunishmentProgress[]) => {
        this.plans = new Map(plans.map(val => [`${val.planId}_${val.memberId}}`, val]));
        this.punishments = new Map(punishments.map(val => [`${val.punishmentId}_${val.memberId}`, val]));
    };

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
