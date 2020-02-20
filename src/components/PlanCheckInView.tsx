import React, {useState} from 'react';
import { observer } from 'mobx-react-lite';
import {Table, Select, Button, Row, Col} from 'antd';

import {planPeriodMap} from '../constants';
import {useStores, useActions} from '../hooks';
import {Plan} from '../types';

const {Column} = Table;
const {Option} = Select;

const PlanCheckInView = observer(() => {
    const {
        memberStore: {items: members},
        planStore: {items: plans},
    } = useStores();
    const {
        planProgressAction: {checkIn, getCheckInCount, hasCheckInToday}
    } = useActions();
    const [memberId, setMemeberId] = useState('');

    const selectedMember = memberId !== '';
    const plansWithCheckIn = plans.map(plan => ({
        ...plan,
        checkInCount: selectedMember ? getCheckInCount(plan.id, memberId) : '-'
    }));

    const handleCheckIn = ({id: planId}: Plan) => () => checkIn(memberId, planId);
    const renderOperation = (plan: Plan) => (
        <Button
            disabled={!selectedMember || hasCheckInToday(plan.id, memberId)}
            type="primary"
            onClick={handleCheckIn(plan)}
        >
            {selectedMember && hasCheckInToday(plan.id, memberId) ? '今日已打卡' : '今日打卡'}
        </Button>
    );
    const renderFrequency = ({frequency, period}: Plan) => `每${planPeriodMap[period]}${frequency}次`;

    return (
        <>
            <Row style={{padding: "5px 0"}}>
                <Col span={4}>请先选择打卡人</Col>
                <Col span={4}>
                    <Select
                        autoFocus
                        style={{width: "100%"}}
                        value={memberId}
                        onChange={setMemeberId}
                    >
                        {members.map(({id, name}) => (
                            <Option key={id} value={id}>{name}</Option>
                        ))}
                    </Select>
                </Col>
            </Row>
            <Table
                rowKey="id"
                dataSource={plansWithCheckIn}
            >
                <Column title="计划" dataIndex="name"/>
                <Column title="频率" render={renderFrequency}/>
                <Column title="已打卡次数" dataIndex="checkInCount" />
                <Column title="操作" render={renderOperation}/>
            </Table>
        </>
    )
});

export default PlanCheckInView;
