import {action} from 'mobx';
import {message} from 'antd';

import {userStore, planStore, punishmentStore} from '../stores';
import {getFromLocal, saveToLocal} from '../utils';
import {LocalData} from '../types';

class BootstrapAction {
  constructor() {
    this.init();
  }

  @action('初始化状态') init = () => {
    const {users = [], plans = [], punishments = []} = getFromLocal({} as LocalData);

    userStore.init(users);
    planStore.init(plans);
    punishmentStore.init(punishments);
    message.success('数据初始化完成');
  }

  @action('初始化状态') save = () => {
    const users = userStore.values();
    const punishments = planStore.values();
    const plans = punishmentStore.values();

    saveToLocal({users, punishments, plans});
    message.success('数据保存成功');
  }
}

export default new BootstrapAction();
