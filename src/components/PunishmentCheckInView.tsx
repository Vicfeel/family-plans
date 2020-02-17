import React, {useState} from 'react';
import { observer } from 'mobx-react-lite';
import {Table, Select, Button, Row, Col} from 'antd';

import {useStores, useActions} from '../hooks';
import {Punishment} from '../types';

const {Column} = Table;
const {Option} = Select;

const PunishmentCheckInView = observer(() => {
    const {
        memberStore: {items: members},
        punishmentStore: {items: punishments},
    } = useStores();
    const {
        punishmentProgressAction: {checkIn, getToCheckInCount}
    } = useActions();
    const [memberId, setMemeberId] = useState('');

    const selectedMember = memberId !== '';
    const punishmentsWithCheckIn = punishments.map(punishment => ({
        ...punishment,
        toCheckInCount: selectedMember ? getToCheckInCount(punishment.id, memberId) : '-'
    }));

    const handleCheckIn = ({id: punishmentId}: Punishment) => () => checkIn(memberId, punishmentId);
    const renderOperation = (punishment: Punishment) => (
        <Button
            disabled={!selectedMember}
            type="primary"
            onClick={handleCheckIn(punishment)}
        >
            完成一次
        </Button>
    );
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
                dataSource={punishmentsWithCheckIn}
            >
                <Column title="惩罚" dataIndex="name"/>
                <Column title="未完成次数" dataIndex="toCheckInCount" />
                <Column title="操作" render={renderOperation}/>
            </Table>
        </>
    )
});

export default PunishmentCheckInView;
