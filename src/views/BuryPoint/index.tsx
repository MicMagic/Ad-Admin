import React from 'react';
import { Form, Input, Button, Space, Dropdown, type MenuProps } from 'antd';
import SvgIcon from '@components/SvgIcon/index';
import { observer } from 'mobx-react';
import './index.scss';

const BuryPoint = (): JSX.Element => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Space>
          <SvgIcon iconName='downloadtpl'/>
          模板下载
        </Space>
      )
    },
    {
      key: '2',
      label: (
        <Space>
          <SvgIcon iconName='export'/>
          文件导入
        </Space>
      )
    }
  ];
  return (
    <div className='bury-point-wrapper'>
      <div className='bury-point-header'>
        <Form layout='inline'>
          <Form.Item label='项目'>
            <Input placeholder='请输入……'/>
          </Form.Item>
          <Form.Item label='应用类型'>
            <Input placeholder='请输入……'/>
          </Form.Item>
          <Form.Item>
            <Button type='primary'>搜索</Button>
          </Form.Item>
        </Form>
        <Space>
          <Button type='primary' icon={<SvgIcon iconName='new'/>}>新增</Button>
          <Dropdown menu={{ items }} placement="bottom" arrow>
            <Button icon={<SvgIcon iconName='dropdown'/>}>操作</Button>
          </Dropdown>
        </Space>
      </div>
      <div className=''></div>
    </div>
  );
};

export default observer(BuryPoint);