import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';

import logo from '../logo.svg';
import {MENUS, PATH_MAP} from '../constants';

const {Sider} = Layout;
const {SubMenu} = Menu;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}
        >
            <div className="App-logo">
                {collapsed ? <img src={logo} alt="logo" /> : <span>家庭计划管理系统</span>}
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[location.pathname]}
            >
                {MENUS.map(({path, submenus = [], icon = ''}) => submenus.length
                    ? (
                        <SubMenu
                            key={path}
                            title={icon
                                ? (
                                    <span>
                                        <Icon type={icon} />
                                        <span>{PATH_MAP[path] || ''}</span>
                                    </span>
                                )
                                : PATH_MAP[path] || ''
                            }
                        >
                            {submenus.map(submenu => (
                                <Menu.Item key={submenu.path}>
                                    <Link to={submenu.path}>{PATH_MAP[submenu.path] || ''}</Link>
                                </Menu.Item>
                            ))}
                        </SubMenu>
                    )
                    : (
                        <Menu.Item key={path}>
                            <Link to={path}>{icon && <Icon type={icon} />}{PATH_MAP[path] || ''}</Link>
                        </Menu.Item>
                    )
                )}
            </Menu>
        </Sider>
    );
};

export default Sidebar;
