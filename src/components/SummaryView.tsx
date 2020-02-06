import React from 'react';
import {Link} from 'react-router-dom';

import {Button} from 'antd';

import styles from './SummaryView.module.css';

const SummaryView = () => {
    return (
        <div className={styles.btnArea}>
            <Link to="/checkIn/punishment">
                <Button type="primary">惩罚打卡</Button>
            </Link>
            <Link to="/checkIn/plan">
                <Button type="primary">计划打卡</Button>
            </Link>
        </div>
    )
};

export default SummaryView;
