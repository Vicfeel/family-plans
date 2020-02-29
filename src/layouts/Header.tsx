import React from 'react';
import {observer} from 'mobx-react-lite';

import {Layout, Icon, Button} from 'antd';

import {useActions} from '../hooks';

import styles from './Header.module.css';

const {Header: AntHeader} = Layout;

const Header = observer(() => {
    const {bootstrapAction: {save, settlement}} = useActions();

    return (
        <AntHeader className={styles.container}>
            <div>
                <Icon type="smile" theme="filled" /> 今天你打卡了吗？
            </div>
            <Button.Group>
                <Button type="default" onClick={save}>保存数据</Button>
                <Button type="danger" onClick={settlement}>本周结算</Button>
            </Button.Group>
        </AntHeader>
    );
});

export default Header;
