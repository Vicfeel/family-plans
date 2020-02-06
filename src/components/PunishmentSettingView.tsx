import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Table, Button} from 'antd';

import {useStores} from '../common';

import EditPunishmentModal from './EditPunishmentModal';
import {useModal} from '../hooks';
import {Punishment} from '../types';
import {punishment as defaultPunishment} from '../constants';

const {Column} = Table;

const PunishmentSettingView = observer(() => {
    const {punishmentStore: {items}} = useStores();
    const [showModal, modalProps] = useModal();
    const [punishment, setPunishment] = useState(defaultPunishment);

    const handleEditPunishment = (punishment: Punishment) => () => {
        setPunishment(punishment);
        showModal();
    };
    const renderOperation = (punishment: Punishment) => <Button onClick={handleEditPunishment(punishment)}>编辑</Button>;

    return (
        <>
            <div style={{padding: "10px 0"}}>
                <Button type="primary" onClick={handleEditPunishment(defaultPunishment)}>新增惩罚</Button>
                <EditPunishmentModal {...{...modalProps, initPunishment: punishment}} />
            </div>
            <Table
                rowKey="id"
                dataSource={items}
            >
                <Column title="惩罚" dataIndex="name"/>
                <Column title="创建时间" dataIndex="created" />
                <Column title="操作" render={renderOperation}/>
            </Table>
        </>
    );
});

export default PunishmentSettingView;
