import React from 'react';
import { Row, Col, Progress } from 'antd';
import './index.scss';

export default function Dashboard() {
  return (
    <div className='dashboard-wrapper'>
      <Row justify="space-between">
        <Col className='card-item'>
          <div className='card-info'>
            <div>今日注册人数:</div>
            <div className='info-data'>
              <div>3428</div>
              <div className='data-rise'>+3.4%</div>
            </div>
            <div>昨日注册:40人</div>
          </div>
          <div>
            <Progress type="circle" strokeColor="#c91c4f" strokeWidth={12} size={70} percent={42} />
          </div>
        </Col>
        <Col className='card-item'>
          <div className='card-info'>
            <div>今日DAU:</div>
            <div className='info-data'>
              <div>3428</div>
              <div className='data-fall'>-3.4%</div>
            </div>
            <div>昨日DAU:400</div>
          </div>
          <div>
            <Progress type="circle" strokeColor="#4c9332" strokeWidth={12} size={70} percent={42} />
          </div>
        </Col>
        <Col className='card-item'>
          <div className='card-info'>
            <div>今日收益:</div>
            <div className='info-data'>
              <div>3428</div>
              <div className='data-rise'>+3.4%</div>
            </div>
            <div>昨日收益:40</div>
          </div>
          <div>
            <Progress type="circle" strokeColor="#c91c4f" strokeWidth={12} size={70} percent={42} />
          </div>
        </Col>
        <Col className='card-item'>
          <div className='card-info'>
            <div>今日注册人数:</div>
            <div className='info-data'>
              <div>3428</div>
              <div className='data-fall'>-3.4%</div>
            </div>
            <div>昨日注册:30人</div>
          </div>
          <div>
            <Progress type="circle" strokeColor="#4c9332" strokeWidth={12} size={70} percent={42} />
          </div>
        </Col>
      </Row>
      <div className='dashborad-chart'>
        <Row justify="space-between">
          <Col className='chart-item'>
            <div></div>
          </Col>
          <Col className='chart-item'>
            <div></div>
          </Col>
        </Row>
      </div>
      <div>
        <div>广告数据表格</div>
        <div>用户画像列表</div>
      </div>
    </div>
  );
}
