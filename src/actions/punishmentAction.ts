import {action} from 'mobx';

import moment from 'moment';
import {message} from 'antd';

import {punishmentStore} from '../stores';
import {Punishment} from '../types';
import {uuid} from '../utils';

class PunishmentAction {
    @action('新增惩罚') addPunishment = (punishment: Pick<Punishment, 'name'>) => {
        const id = uuid();
        const created = moment().format('LLLL');

        punishmentStore.set(id, {...punishment, id, created});
        message.success('新增惩罚成功');
    }

    @action('更新惩罚') updatePunishment = (punishment: Punishment) => {
        punishmentStore.set(punishment.id, punishment);
        message.success('更新惩罚成功');
    }

    @action('删除惩罚') deletePunishment = (id: string) => {
        punishmentStore.delete(id);
        message.success('删除惩罚成功');
    }
}

export default new PunishmentAction();
