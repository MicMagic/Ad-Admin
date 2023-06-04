import React from 'react';
import { Form, Input, Button, Space, Dropdown, Table, type MenuProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import SvgIcon from '@components/SvgIcon/index';
import { observer } from 'mobx-react';
import './index.scss';

interface DataType {
  key: React.Key;
  projectName: string;
  platform: string;
  eventType: string;
  eventId: string;
  page: string;
  versionNum: string;
  triggerTime: string;
  systemVersion: string;
  ip:string;
  createTime: string;
  updateTime: string;
}
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
  const columns: ColumnsType<DataType> = [
    {
      title: '项目名称',
      align: 'center',
      fixed: 'left',
      dataIndex: 'projectName'
    },
    {
      title: '平台',
      align: 'center',
      fixed: 'left',
      dataIndex: 'platform'
    },
    {
      title: '事件类型',
      align: 'center',
      dataIndex: 'eventType'
    },
    {
      title: '事件ID',
      align: 'center',
      dataIndex: 'eventId'
    },
    {
      title: '归属页面',
      align: 'center',
      dataIndex: 'page'
    },
    {
      title: '版本号',
      align: 'center',
      dataIndex: 'versionNum'
    },
    {
      title: '触发时机',
      align: 'center',
      dataIndex: 'triggerTime'
    },
    {
      title: '系统版本',
      align: 'center',
      dataIndex: 'systemVersion'
    },
    {
      title: 'IP',
      align: 'center',
      dataIndex: 'ip'
    },
    {
      title: '创建时间',
      align: 'center',
      dataIndex: 'createTime',
      sorter: true,
    },
    {
      title: '更新时间',
      align: 'center',
      dataIndex: 'updateTime',
      sorter: true,
    },
    {
      title: '操作',
      align: 'center',
      fixed: 'right',
      render: (_, record) => (
        <Space>
          <span className='table-edit' onClick={editHandler}>编辑</span>
          <span className='table-check' onClick={checkHandler}>查看</span>
          <span className='table-delete' onClick={deleteHanlder}>删除</span>
        </Space>
      )
    }
  ];
  const data: DataType[] = [
    {
      key: '1',
      projectName: '恋爱时光',
      platform: 'App',
      eventType: '加载',
      eventId: '123456',
      page: '首页',
      versionNum: 'v1.0',
      triggerTime: '加载',
      systemVersion: 'ios_16.0',
      ip: '192.168.0.1',
      createTime: '2023-06-01',
      updateTime: '2023-06-01',
    }
  ];
  const editHandler = () => {
    alert('编辑');
  };
  const checkHandler = () => {
    alert('查看');
  };
  const deleteHanlder = () => {
    alert('删除');
  };
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
      <div className='bury-point-table'>
        <Table bordered columns={columns} dataSource={data}/>
      </div>
    </div>
  );
};

export default observer(BuryPoint);