import {observable} from 'mobx';

import {Log} from '../types'

class LogStore {
    maxSize = 50;

    @observable items = [] as Log[];

    init = (logs: Log[]) => {
        this.items = logs;
    }

    add = (log: Log) => {
        if (this.items.length >= this.maxSize) {
            this.items.pop();
        }
        this.items.unshift(log);
    }
}

export default new LogStore();
