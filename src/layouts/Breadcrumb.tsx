import React from 'react';
import {Breadcrumb as AntBreadcrumb} from 'antd';

const Breadcrumb = () => (
    <AntBreadcrumb style={{ margin: '16px 0' }}>
        <AntBreadcrumb.Item>User</AntBreadcrumb.Item>
        <AntBreadcrumb.Item>Bill</AntBreadcrumb.Item>
    </AntBreadcrumb>
);

export default Breadcrumb;
