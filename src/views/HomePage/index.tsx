import React from 'react';
import { Layout, Space, Menu, MenuProps } from 'antd';
import { observer } from 'mobx-react';
import { Link, Outlet } from 'react-router-dom';
import SvgIcon from '@components/SvgIcon/index';
import MainHeader from '@components/MainHeader';
import useStore from '@src/store';
import './index.scss';

const { Header, Sider, Content } = Layout;
const HomePage = (): JSX.Element => {
  const { commonStore } = useStore();
  const { menuCollapsed } = commonStore;
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
    getItem(<Link to="dashboard">dashboard</Link>, '1', <SvgIcon iconName='dashboard' />),
    getItem(<Link to="selection">选品管理</Link>, '2', <SvgIcon iconName='selection' />),
    getItem(<Link to="adPlatform">广告平台</Link>, '3', <SvgIcon iconName='adPlatform' />),
    getItem(<Link to="buryPoint">埋点管理</Link>, '4', <SvgIcon iconName='buryPoint' />),
    getItem(<Link to="package">包管理</Link>, '5', <SvgIcon iconName='package' />),
    getItem(<Link to="userPortrait">用户画像</Link>, '6', <SvgIcon iconName='userPortrait' />),
    getItem(<Link to="alternative">备选产品</Link>, '7', <SvgIcon iconName='alternative' />),
    getItem(<Link to="autoTest">自动化测试</Link>, '8', <SvgIcon iconName='autoTest' />),
  ];
  return (
    <div className='homepage-wrapper'>
      <Layout>
        <Space align="start" size={16}>
          <Sider className='homepage-sider' trigger={null} collapsible collapsed={menuCollapsed}>
            <div className='homepage-logo'>
              <SvgIcon iconName="logo" />
              {!menuCollapsed ? <span className='project-title'>Ad-Admin</span> : null}
            </div>
            <Menu
              mode="inline"
              items={items}
              defaultSelectedKeys={[ '1' ]}
            />
          </Sider>
          <Layout>
            <Space direction="vertical">
              <Header className='homepage-header'>
                <MainHeader />
              </Header>
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

export default observer(HomePage);