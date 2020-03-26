import {action} from 'mobx';

import {message} from 'antd';

import {planStore} from '../stores';
import {Plan} from '../types';
import {uuid, getTime} from '../utils';

class PlanAction {
    @action('新增计划') addPlan = (plan: Pick<Plan, 'name'|'executors'|'frequency'>) => {
        const id = uuid();

        planStore.set(id, {...plan, id, created: getTime()});
        message.success('新增计划成功');
    }

    @action('更新计划') updatePlan = (plan: Plan) => {
        planStore.set(plan.id, plan);
        message.success('更新计划成功');
    }

    @action('删除计划') deletePlan = (id: string) => {
        planStore.delete(id);
        message.success('删除计划成功');
    }
}

export default new PlanAction();
