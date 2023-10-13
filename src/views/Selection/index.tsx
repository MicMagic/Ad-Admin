import React from 'react';
import { Form, Select } from 'antd';
import './index.scss';

const rankList = [
  {
    label: '全部',
    value: 'allList'
  },
  {
    label: '免费榜',
    value: 'freeList'
  },
  {
    label: '付费榜',
    value: 'payList'
  },
  {
    label: '畅销榜',
    value: 'sellWellList'
  }
];
const device = [
  {
    label: 'iPhone',
    value: 'iPhone'
  },
  {
    label: 'iPad',
    value: 'iPad'
  }
];
export default function Selection() {
  return (
    <div className='selection-wrapper'>
      <div className='selection-header'>
        <Form layout='inline'>
          <Form.Item label='榜单类型'>
            <Select defaultValue='allList' style={{ width: 80 }} options={rankList}/>
          </Form.Item>
          <Form.Item label='地区'>
            
          </Form.Item>
          <Form.Item label='设备'>
            <Select defaultValue='iPhone' style={{ width: 90 }} options={device}/>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
