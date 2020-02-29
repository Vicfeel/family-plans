import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Table, Button, Tag} from 'antd';

import {useStores} from '../common';

import EditPlanModal from './EditPlanModal';
import {useModal} from '../hooks';
import {Plan} from '../types';
import {plan as defaultPlan, PLAN_PERIOD_MAP} from '../constants';
import { renderTime } from '../utils';

const {Column} = Table;

const PlanSettingView = observer(() => {
    const {planStore: {items}, memberStore} = useStores();
    const [showModal, modalProps] = useModal();
    const [plan, setPlan] = useState(defaultPlan);

    const renderMember = (memberIds: string[]) => memberIds
        .filter(memberStore.has)
        .map(memberStore.get)
        .map((member) => member && (
            <Tag key={member.id} color={member.color}>{member.name}</Tag>
        ));
    const handleEditPlan = (plan: Plan) => () => {
        setPlan(plan);
        showModal();
    };
    const renderOperation = (plan: Plan) => <Button onClick={handleEditPlan(plan)}>编辑</Button>;
    const renderFrequency = ({frequency, period}: Plan) => `每${PLAN_PERIOD_MAP[period]}${frequency}次`;
    const renderCreated = ({created}: Plan) => renderTime(created);

    return (
        <>
            <div style={{padding: "10px 0"}}>
                <Button type="primary" onClick={handleEditPlan(defaultPlan)}>新增计划</Button>
                <EditPlanModal {...{...modalProps, initPlan: plan}} />
            </div>
            <Table
                rowKey="id"
                dataSource={items}
            >
                <Column title="计划" dataIndex="name"/>
                <Column title="频率" render={renderFrequency} />
                <Column title="执行人" dataIndex="executors" render={renderMember} />
                <Column title="创建时间" render={renderCreated} />
                <Column title="操作" render={renderOperation}/>
            </Table>
        </>
    );
});

export default PlanSettingView;
