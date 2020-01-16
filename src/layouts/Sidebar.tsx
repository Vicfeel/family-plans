import React, {useState} from 'react';
import {Layout, Menu, Icon} from 'antd';

import logo from '../logo.svg';

const {Sider} = Layout;
const {SubMenu} = Menu;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
            <div className="App-logo">
                {collapsed ? <img src={logo} alt="logo" /> : <span>家庭计划管理系统</span>}
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="summary">
                    <Icon type="pie-chart" />
                    <span>汇总信息</span>
                </Menu.Item>
                <SubMenu
                    key="checkIn"
                    title={
                        <span>
                            <Icon type="carry-out" />
                            <span>打卡管理</span>
                        </span>
                    }
                >
                    <Menu.Item key="planCheckIn">计划打卡</Menu.Item>
                    <Menu.Item key="punishmentCheckIn">惩罚打卡</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="setting"
                    title={
                        <span>
                            <Icon type="setting" />
                            <span>配置管理</span>
                        </span>
                    }
                >
                    <Menu.Item key="planSetting">计划配置</Menu.Item>
                    <Menu.Item key="memberSetting">成员配置</Menu.Item>
                    <Menu.Item key="punishmentSetting">惩罚配置</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
};

export default Sidebar;
