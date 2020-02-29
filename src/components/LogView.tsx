import React from 'react';
import {observer} from 'mobx-react-lite';
import {Timeline, Tag} from 'antd';

import {useStores} from '../hooks';
import {LOG_TYPE_MAP} from '../constants';
import {renderTime} from '../utils';

const LogView = observer(() => {
    const {logStore: {items: logs}} = useStores();

    return (
        <Timeline>
            {logs.map(({id, type, name, member, date}) => (
                <Timeline.Item key={id}>
                    <Tag color="green">{member}</Tag>
                    在
                    <Tag color="orange">{renderTime(date)}</Tag>
                     {LOG_TYPE_MAP[type]} 
                    <Tag color="red">{name}</Tag>
                </Timeline.Item>
            ))}
        </Timeline>
    );
});

export default LogView;
