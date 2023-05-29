import React, { useState, useEffect } from 'react';
import { Layout, Space, Menu, MenuProps } from 'antd';
import { observer } from 'mobx-react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import SvgIcon from '@components/SvgIcon/index';
import MainHeader from '@components/MainHeader';
import useStore from '@src/store';
import './index.scss';

const { Header, Sider, Content } = Layout;
const HomePage = (): JSX.Element => {
  const [ defaultKey, setDefaultKey ] = useState('');
  const { commonStore } = useStore();
  const { menuCollapsed } = commonStore;
  const { pathname } = useLocation();
  
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
    getItem(<Link to="dashboard">dashboard</Link>, 'dashboard', <SvgIcon iconName='dashboard' />),
    getItem(<Link to="selection">选品管理</Link>, 'selection', <SvgIcon iconName='selection' />),
    getItem(<Link to="adPlatform">广告平台</Link>, 'adPlatform', <SvgIcon iconName='adPlatform' />),
    getItem(<Link to="buryPoint">埋点管理</Link>, 'buryPoint', <SvgIcon iconName='buryPoint' />),
    getItem(<Link to="package">包管理</Link>, 'package', <SvgIcon iconName='package' />),
    getItem(<Link to="userPortrait">用户画像</Link>, 'userPortrait', <SvgIcon iconName='userPortrait' />),
    getItem(<Link to="alternative">备选产品</Link>, 'alternative', <SvgIcon iconName='alternative' />),
    getItem(<Link to="autoTest">自动化测试</Link>, 'autoTest', <SvgIcon iconName='autoTest' />),
  ];
  useEffect(() => {
    const pathArr = pathname.split('/');
    setDefaultKey(pathArr[pathArr.length - 1]);
  }, [ pathname ]);
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
              selectedKeys={[ `${defaultKey}` ]}
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