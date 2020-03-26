import {action} from 'mobx';
import {message} from 'antd';

import {memberStore, planStore, punishmentStore, progressStore, logStore} from '../stores';
import {getFromLocal, saveToLocal} from '../utils';
import {LocalData, Member} from '../types';
import punishmentAction from './punishmentAction';
import planProgressAction from './planProgressAction';

class BootstrapAction {
  constructor() {
    this.init();
  }

  @action('初始化数据') init = () => {
    const {
      plans = [], punishments = [],
      progresses = {plans: [], punishments: []},
      logs = [],
    } = getFromLocal({} as LocalData);
    const members: Member[] = [{
      id: 'zwp',
      name: '张伟佩',
      pwd: '123',
      color: 'green',
    },{
      id: 'zq',
      name: '张琦',
      pwd: '123',
      color: 'red',
    }];

    memberStore.init(members);
    planStore.init(plans);
    punishmentStore.init(punishments);
    logStore.init(logs);
    progressStore.init(progresses.plans, progresses.punishments);
    message.success('数据初始化完成');
  }

  @action('保存数据') save = () => {
    const members = memberStore.values();
    const plans = planStore.values();
    const punishments = punishmentStore.values();
    const progresses = {
      plans: [...progressStore.plans.values()],
      punishments: [...progressStore.punishments.values()]
    };
    const logs = logStore.items;

    saveToLocal({members, punishments, plans, progresses, logs});
    message.success('数据保存成功');
  }

  @action('周计划结算') settlement = () => {
    // 结算未完成计划，领取相应惩罚
    memberStore.items.forEach(({id}) => {
      const checkInCount = progressStore.memberPlanCheckInCount[id] || 0;
      const toCheckInCount = planStore.memberToCheckInCountInThisWeek[id] || 0;

      punishmentAction.receivePunishment(id, toCheckInCount - checkInCount);
    });
    planProgressAction.reset();

    // 清空本周日志
    logStore.init([]);
  }
}

export default new BootstrapAction();
