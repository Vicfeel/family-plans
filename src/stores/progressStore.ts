import {observable, computed} from 'mobx';

import {Progress} from '../types'

class ProgressStore {
    @observable data: Progress[] = [];

    @computed get planProgress() {
        const planProgress = {} as {[planId: string]: Progress[]};

        this.data.forEach((item) => {
            planProgress[item.planId] = planProgress[item.planId] || [];

            planProgress[item.planId].push(item);
        });

        return planProgress;
    }

    @computed get memberProgress() {
        const memberProgress = {} as {[planId: string]: Progress[]};

        this.data.forEach((item) => {
            memberProgress[item.memberId] = memberProgress[item.memberId] || [];

            memberProgress[item.memberId].push(item);
        });

        return memberProgress;
    }
}

export default new ProgressStore();
