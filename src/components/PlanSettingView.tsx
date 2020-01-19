import React from 'react';
import {Table, Button} from 'antd';

import {useStores} from '../common';

import styles from './PlanSettingView.module.css';

const PlanSettingView = () => {
    const {planStore} = useStores();
    const items = planStore.values();

    return (
        <>
            <div className={styles.container}>
                <Button type="primary">新增计划</Button>
            </div>
            <Table
                dataSource={items}
                columns={[
                    {
                        title: '计划',
                        dataIndex: 'name',
                        key: 'name',
                    }, {
                        title: '周期',
                        dataIndex: 'period',
                        key: 'period',
                    }, {
                        title: '次数',
                        dataIndex: 'frequency',
                        key: 'frequency',
                    }, {
                        title: '执行人',
                        dataIndex: 'executors',
                        key: 'executors',
                    }, {
                        title: '创建时间',
                        dataIndex: 'created',
                        key: 'created',
                    }
                ]}
            />
        </>
    );
};

export default PlanSettingView;
