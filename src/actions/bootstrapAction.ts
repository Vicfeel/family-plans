import {action} from 'mobx';

import {userStore} from '../stores';

class BootstrapAction {
    constructor() {
        this.init();
    }

    @action init = () => {
        const state = {
            users: [{
              id: 1,
              name: '张伟佩',
              pwd: '123'
            }, {
              id: 2,
              name: 'b',
              pwd: '123'
            }],
            plans: [{
              id: 1,
              name: 'learn',
              period: 7,
              frequency: 5
            }, {
              id: 2,
              name: 'yoga',
              period: 1,
              frequency: 1
            }],
            punishments: [{
              id: 1,
              name: 'pay 50'
            }, {
              id: 1,
              name: 'do homework'
            }]
        };

        userStore.init(state.users);
    }
}

export default new BootstrapAction();
