import {computed} from 'mobx';

import {Plan} from '../types'
import MapStore from './_MapStore';

class PlanStore extends MapStore<Plan> {
    // 每个成员的计划打卡进度
    @computed get memberToCheckInCountInThisWeek() {
        const ret = {} as {[memberId: string]: number};

        this.items.forEach(({id, executors, frequency}) => {
            executors.forEach((memberId) => {
                ret[memberId] = ret[memberId] || 0;

                ret[memberId] += frequency;
            });
        });

        return ret;
    }
}

export default new PlanStore();
