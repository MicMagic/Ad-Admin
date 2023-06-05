import React from 'react';
import { Form, Input } from 'antd';
import './index.scss';

export default function Selection() {
  return (
    <div className='selection-wrapper'>
      <div className='selection-header'>
        <Form layout='inline'>
          <Form.Item label='榜单类型'>
            <Input placeholder='请输入……'/>
          </Form.Item>
          <Form.Item label='地区'>
            <Input placeholder='请输入……'/>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
