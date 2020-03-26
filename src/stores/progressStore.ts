import {observable, computed} from 'mobx';

import {PlanProgress, PunishmentProgress} from '../types'

class ProgressStore {
    @observable plans: Map<string, PlanProgress> = new Map();
    @observable punishments: Map<string, PunishmentProgress> = new Map();

    // 每个成员的计划打卡进度
    @computed get memberPlanCheckInCount() {
        const memberProgress = {} as {[memberId: string]: number};

        this.plans.forEach(({memberId, records}) => {
            memberProgress[memberId] = memberProgress[memberId] || 0;
            memberProgress[memberId] += records.length;
        });

        return memberProgress;
    }

    // 每个成员剩余惩罚情况
    @computed get memberPunishmentToCheckInCount() {
        const memberProgress = {} as {[memberId: string]: number};

        this.punishments.forEach((item) => {
            memberProgress[item.memberId] = memberProgress[item.memberId] || 0;

            memberProgress[item.memberId] += (item.toCheckInCount - item.records.length);
        });

        return memberProgress;
    }

    init = (plans: PlanProgress[], punishments: PunishmentProgress[]) => {
        this.plans = new Map(plans.map(val => [`${val.planId}_${val.memberId}`, val]));
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
