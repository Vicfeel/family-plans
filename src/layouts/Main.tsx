import React from 'react';
import {Switch, Route, RouteProps} from 'react-router-dom';
import {Layout} from 'antd';

import {Breadcrumb, Header} from '.';
import {SummaryView, PlanCheckInView, PlanSettingView} from '../components';
import LostView from '../components/LostView';

const {Content, Footer} = Layout;

const routes: RouteProps[] = [
    {
        path: "/summary",
        exact: true,
        component: SummaryView,
    },
    {
        path: "/checkIn/plan",
        exact: true,
        component: PlanCheckInView,
    },
    {
        path: "/setting/plan",
        exact: true,
        component: PlanSettingView,
    }
];

const Main = () => (
    <Layout>
        <Header />
        <Content style={{margin: '0 16px'}}>
            <Breadcrumb />
            <Switch>
                {routes.map(route => (
                    <Route
                        key={`${route.path}`}
                        {...route}
                    />
                ))}
                <Route component={LostView} />
            </Switch>
        </Content>
        <Footer style={{textAlign: 'center'}}>家庭计划管理平台 ©2020 Created by 张伟佩</Footer>
    </Layout>
)

export default Main;
