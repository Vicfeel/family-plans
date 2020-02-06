import React from 'react';

import {Layout, Icon} from 'antd';

import styles from './Header.module.css';

const {Header: AntHeader} = Layout;

const Header = () => (
    <AntHeader className={styles.container}>
        <div>
            <Icon type="smile" theme="filled" /> 今天你打卡了吗？
        </div>
    </AntHeader>
);

export default Header;
