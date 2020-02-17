import React from 'react';
import {observer} from 'mobx-react-lite';

import {Layout, Icon, Button} from 'antd';

import {useActions} from '../hooks';

import styles from './Header.module.css';

const {Header: AntHeader} = Layout;

const Header = observer(() => {
    const {bootstrapAction: {save}} = useActions();

    return (
        <AntHeader className={styles.container}>
            <div>
                <Icon type="smile" theme="filled" /> 今天你打卡了吗？
            </div>
            <Button type="default" onClick={save}>保存数据</Button>
        </AntHeader>
    );
});

export default Header;
