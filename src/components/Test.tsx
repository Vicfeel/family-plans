import React from 'react';

import {observer} from 'mobx-react-lite';

import {useStores} from '../bind';

const Test = observer(() => {
    const {userStore} = useStores();

    return <>{userStore.values().map(ele => ele.name).join(',')}</>
});

export default Test;
