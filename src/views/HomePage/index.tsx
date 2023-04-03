import React from 'react';
import { Layout, Space, Menu, MenuProps } from 'antd';
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
    getItem('dashboard', '1', <MailOutlined />),
    getItem('选品管理', '2', <MailOutlined />),
    getItem('广告管理', '3', <MailOutlined />),
    getItem('埋点管理', '4', <MailOutlined />),
    getItem('包管理', '5', <MailOutlined />),
    getItem('用户画像', '6', <MailOutlined />),
    getItem('备选产品', '7', <MailOutlined />),
    getItem('自动化测试', '8', <MailOutlined />),
  ];
  return (
    <div className='homepage-wrapper'>
      <Layout>
        <Space>
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
              <Content>content</Content>
            </Space>
          </Layout>
        </Space>
      </Layout>
    </div>
  );
};

export default HomePage;