import {action} from 'mobx';

import moment from 'moment';
import {message} from 'antd';

import {planStore} from '../stores';
import {Plan} from '../types';
import {uuid} from '../utils';

class PlanAction {
    @action('新增计划') addPlan = (plan: Pick<Plan, 'name'|'executors'|'period'|'frequency'>) => {
        const id = uuid();

        const created = moment().format('LLLL');

        planStore.set(id, {...plan, id, created});
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
