import React from 'react';
import {Layout} from 'antd';

import {Breadcrumb} from '.';

const {Header, Content, Footer} = Layout;

const Main = () => (
    <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb />
            <div>Bill is a cat.</div>
        </Content>
        <Footer style={{textAlign: 'center'}}>家庭计划管理平台 ©2020 Created by 张伟佩</Footer>
    </Layout>
)

export default Main;
