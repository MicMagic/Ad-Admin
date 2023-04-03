import React from 'react';
import { Layout, Space } from 'antd';
import Logo from '../../assets/img/logo.png';
import './index.scss';

const { Header, Sider, Content } = Layout;
const HomePage = (): JSX.Element => {
  return (
    <div className='homepage-wrapper'>
      <Layout>
        <Space>
          <Sider className='homepage-sider'>
            <div className='homepage-logo'>
              <img src={Logo} alt="logo" />
              <span>Ad-Admin</span>
            </div>
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