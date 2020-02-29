import {action} from 'mobx';

import {message} from 'antd';

import {punishmentStore, memberStore, progressStore} from '../stores';
import {getTime} from '../utils';
import {LOG_TYPE} from '../types';
import {logAction} from '.';

class PunishmentProgressAction {
    @action('惩罚打卡') checkIn = (memberId: string, punishmentId: string) => {
        if (!memberStore.has(memberId) || !punishmentStore.has(punishmentId)) {
            return;
        }
        const progress = progressStore.getProgress(punishmentId, memberId);

        if (!progress) {
            return;
        }

        const now = getTime();
        progress.records.push(now);

        logAction.add({
            member: memberStore.getName(memberId),
            type: LOG_TYPE.CHECK_IN_PUNISHMENT,
            name: punishmentStore.getName(punishmentId),
            date: now,
        });

        if (progress.records.length === progress.toCheckInCount) {
            progressStore.punishments.delete(`${punishmentId}_${memberId}`);
            message.success('恭喜你完成了这个惩罚');
        } else {
            progressStore.punishments.set(`${punishmentId}_${memberId}`, progress);
            message.success('恭喜你完成一次惩罚');
        }
    }

    getToCheckInCount = (punishmentId: string, memberId: string) => {
        const progress = progressStore.getProgress(punishmentId, memberId);

        return progress && (progress.toCheckInCount > progress.records.length)
            ? progress.toCheckInCount - progress.records.length
            : 0;
    }
}

export default new PunishmentProgressAction();
