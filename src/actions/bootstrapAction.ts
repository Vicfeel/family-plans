import {action} from 'mobx';
import {message} from 'antd';

import {memberStore, planStore, punishmentStore} from '../stores';
import {getFromLocal, saveToLocal} from '../utils';
import {LocalData, Member} from '../types';

class BootstrapAction {
  constructor() {
    this.init();
  }

  @action('初始化状态') init = () => {
    const {plans = [], punishments = []} = getFromLocal({} as LocalData);
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
    message.success('数据初始化完成');
  }

  @action('初始化状态') save = () => {
    const members = memberStore.values();
    const plans = planStore.values();
    const punishments = punishmentStore.values();

    saveToLocal({members, punishments, plans});
    message.success('数据保存成功');
  }
}

export default new BootstrapAction();
