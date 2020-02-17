import React, {useState, FunctionComponent, ChangeEventHandler, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {Row, Col, Input, Modal} from 'antd';

import {useActions} from '../common';
import {Punishment} from '../types';
import {ModalProps} from '../hooks/modal';

import styles from './EditPunishmentModal.module.css';

const EditPunishmentModal: FunctionComponent<ModalProps> = observer(({visible, hideModal, initPunishment}) => {
    const [punishment, setPunishment] = useState(initPunishment as Punishment);
    const {punishmentAction: {addPunishment, updatePunishment}} = useActions();

    useEffect(() => setPunishment(initPunishment), [initPunishment]);

    const isUpdatePunishment = !!punishment.id;
    const handleSubmit = () => {
        isUpdatePunishment ? updatePunishment(punishment) : addPunishment(punishment);
        hideModal();
    }
    const handleChangeName: ChangeEventHandler<HTMLInputElement> = (e) => setPunishment({
        ...punishment,
        name: e.target.value
    });

    return (
        <Modal
            title={isUpdatePunishment ? "编辑惩罚" : "新增惩罚"}
            visible={visible}
            onOk={handleSubmit}
            onCancel={hideModal}
            okText="确认"
            cancelText="取消"
        >
            <Row>
                <Col span={8}>惩罚名</Col>
                <Col span={16} className={styles.content}>
                    <Input
                        autoFocus
                        value={punishment.name}
                        onChange={handleChangeName}
                        placeholder="请输入惩罚名"
                    />
                </Col>
            </Row>
        </Modal>
    )
});

export default EditPunishmentModal;
