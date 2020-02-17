import {action} from 'mobx';

import {message} from 'antd';

import {punishmentStore, memberStore, progressStore} from '../stores';
import {getTime} from '../utils';

class PunishmentProgressAction {
    @action('惩罚打卡') checkIn = (memberId: string, punishmentId: string) => {
        if (!memberStore.has(memberId) || !punishmentStore.has(punishmentId)) {
            return;
        }
        const progress = progressStore.getProgress(punishmentId, memberId);

        if (!progress) {
            return;
        }

        progress.records.push(getTime());
        if (progress.records.length === progress.toCheckInCount) {
            progressStore.punishments.delete(`${punishmentId}_${memberId}`);
            message.success('恭喜你完成了这个惩罚');
        } else {
            progressStore.punishments.set(`${punishmentId}_${memberId}`, progress);
            message.success('恭喜你完成一次惩罚');
        }
    }

    @action('领取惩罚') receivePunishment = (memberId: string, count: number) => {
        const pool = [...progressStore.punishments.keys()];

        Array.from({length: count}).forEach((_) => {
            const index = Math.floor((Math.random() * pool.length));
            const punishmentId = pool[index];

            progressStore.addPunishment(punishmentId, memberId);
        });
    };


    getToCheckInCount = (punishmentId: string, memberId: string) => {
        const progress = progressStore.getProgress(punishmentId, memberId);

        return progress && (progress.toCheckInCount > progress.records.length)
            ? progress.toCheckInCount - progress.records.length
            : 0;
    }
}

export default new PunishmentProgressAction();
