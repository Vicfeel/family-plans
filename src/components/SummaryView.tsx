import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Row, Col, Statistic, Card} from 'antd';

import {useStores} from '../hooks';
import {PLAN_PERIOD} from '../types';

// import styles from './SummaryView.module.css';

const SummaryView = () => {
    const {
        memberStore: {items: members},
        planStore: {items: plans},
        progressStore: {memberPlanProgress, memberPunishmentProgress}
    } = useStores();

    const membersWithDetail = members.map((member) => ({
        ...member,
        planCheckInCount: memberPlanProgress[member.id] || 0,
        punishmentCheckInCount: memberPunishmentProgress[member.id] || 0,
        weekPlanNum: plans.filter(plan => plan.executors.includes(member.id) && plan.period === PLAN_PERIOD.WEEK).length,
        yearPlanNum: plans.filter(plan => plan.executors.includes(member.id) && plan.period === PLAN_PERIOD.YEAR).length,
    }));

    return (
        <>
            {membersWithDetail.map(({
                id, name, planCheckInCount, punishmentCheckInCount,
                weekPlanNum, yearPlanNum
            }) => (
                <Card key={id} size="small" title={name} style={{marginBottom: "10px"}}>
                    <Row gutter={16} style={{alignItems: 'normal'}}>
                        <Col span={6}>
                            <Statistic title="打卡次数" value={planCheckInCount} suffix="/ 20" />
                            <Link to="/checkIn/plan">
                                <Button type="primary">去打卡</Button>
                            </Link>
                        </Col>
                        <Col span={6}>
                            <Statistic title="剩余惩罚" value={punishmentCheckInCount} />
                            <Link to="/checkIn/punishment">
                                <Button type="primary" disabled={punishmentCheckInCount === 0}>去完成</Button>
                            </Link>
                        </Col>
                        <Col span={6}>
                            <Statistic title="进行中的周计划" value={weekPlanNum} />
                            <Link to="/setting/plan">
                                <Button type="primary">去新增</Button>
                            </Link>
                        </Col>
                        <Col span={6}>
                            <Statistic title="进行中的年计划" value={yearPlanNum} />
                            <Link to="/setting/plan">
                                <Button type="primary">去新增</Button>
                            </Link>
                        </Col>
                    </Row>
                </Card>
            ))}
            <Card size="small" title={"公告板"} style={{marginBottom: "10px"}}>
                
            </Card>
        </>
    )
};

export default SummaryView;
