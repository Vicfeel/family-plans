import {action} from 'mobx';

import {logStore} from '../stores';
import {Log} from '../types';
import {uuid} from '../utils';

class LogAction {
    @action('新增日志') add = (log: Pick<Log, 'member'|'name'|'type'|'date'>) => {
        const id = uuid();

        logStore.add({id, ...log});
    }
}

export default new LogAction();
