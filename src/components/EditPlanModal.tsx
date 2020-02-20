import React, {useState, FunctionComponent, ChangeEventHandler, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {Row, Col, Input, Modal, Select, InputNumber, Radio} from 'antd';
import {RadioChangeEvent} from 'antd/lib/radio';

import {useActions, useStores} from '../common';
import {Plan, PLAN_PERIOD} from '../types';
import {ModalProps} from '../hooks/modal';

import styles from './EditPlanModal.module.css';

const {Option} = Select;

const EditPlanModal: FunctionComponent<ModalProps> = observer(({visible, hideModal, initPlan}) => {
    const [plan, setPlan] = useState(initPlan as Plan);
    const {planAction: {addPlan, updatePlan}} = useActions();
    const {memberStore: {items: members}} = useStores();

    useEffect(() => setPlan(initPlan), [initPlan]);

    const isUpdatePlan = !!plan.id;
    const editPlan = (field: keyof Plan) => (val: any) => setPlan({...plan, [field]: val});
    const handleSubmit = () => {
        isUpdatePlan ? updatePlan(plan) : addPlan(plan);
        hideModal();
    }
    const handleChangeName: ChangeEventHandler<HTMLInputElement> = (e) => editPlan('name')(e.target.value);
    const handleChangePeriod = (e: RadioChangeEvent) => editPlan('period')(e.target.value);

    return (
        <Modal
            title={isUpdatePlan ? "编辑计划" : "新增计划"}
            visible={visible}
            onOk={handleSubmit}
            onCancel={hideModal}
            okText="确认"
            cancelText="取消"
        >
            <Row>
                <Col span={8}>计划名</Col>
                <Col span={16} className={styles.content}>
                    <Input
                        autoFocus
                        value={plan.name}
                        onChange={handleChangeName}
                        placeholder="请输入计划名"
                    />
                </Col>
            </Row>
            <Row>
                <Col span={8}>执行者</Col>
                <Col span={16} className={styles.content}>
                    <Select
                        mode="multiple"
                        placeholder="选择执行者"
                        style={{width: "100%"}}
                        value={plan.executors}
                        onChange={editPlan('executors')}
                    >
                        {members.map(({id, name}) => (
                            <Option key={id} value={id}>{name}</Option>
                        ))}
                    </Select>
                </Col>
            </Row>
            <Row>
                <Col span={8}>周期</Col>
                <Col span={16} className={styles.content}>
                    <Radio.Group onChange={handleChangePeriod} value={plan.period}>
                        <Radio value={PLAN_PERIOD.WEEK}>周</Radio>
                        <Radio value={PLAN_PERIOD.YEAR}>年</Radio>
                    </Radio.Group>
                </Col>
            </Row>
            <Row>
                <Col span={8}>频率</Col>
                <Col span={16} className={styles.content}>
                    <InputNumber
                        value={plan.frequency}
                        onChange={editPlan('frequency')}
                        style={{width: "100%"}}
                    />
                </Col>
            </Row>
        </Modal>
    )
});

export default EditPlanModal;
