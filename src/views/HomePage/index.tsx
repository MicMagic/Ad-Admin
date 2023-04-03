import React from 'react';
import { Layout, Space, Menu, MenuProps } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';
import Logo from '../../assets/img/logo.png';
import './index.scss';

const { Header, Sider, Content } = Layout;
const HomePage = (): JSX.Element => {
  // 菜单item类型别名
  type MenuItem = Required<MenuProps>['items'][number];
  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem => {
    return {
      label,
      key,
      icon,
      children,
    } as MenuItem;
  };
  // 配置路由菜单导航
  const items: MenuProps['items'] = [
    getItem(<Link to="dashboard">dashboard</Link>, '1', <MailOutlined />),
    getItem(<Link to="selection">选品管理</Link>, '2', <MailOutlined />),
    getItem(<Link to="adPlatform">广告平台</Link>, '3', <MailOutlined />),
    getItem(<Link to="buryPoint">埋点管理</Link>, '4', <MailOutlined />),
    getItem(<Link to="package">包管理</Link>, '5', <MailOutlined />),
    getItem(<Link to="userPortrait">用户画像</Link>, '6', <MailOutlined />),
    getItem(<Link to="alternative">备选产品</Link>, '7', <MailOutlined />),
    getItem(<Link to="autoTest">自动化测试</Link>, '8', <MailOutlined />),
  ];
  return (
    <div className='homepage-wrapper'>
      <Layout>
        <Space align="start">
          <Sider className='homepage-sider'>
            <div className='homepage-logo'>
              <img src={Logo} alt="logo" />
              <span>Ad-Admin</span>
            </div>
            <Menu
              mode="inline"
              items={items}
              defaultSelectedKeys={[ '1' ]}
            />
          </Sider>
          <Layout>
            <Space direction="vertical">
              <Header className='homepage-header'>header</Header>
              <Content>
                <Outlet />
              </Content>
            </Space>
          </Layout>
        </Space>
      </Layout>
    </div>
  );
};

export default HomePage;