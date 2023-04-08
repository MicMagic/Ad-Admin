import React, { useEffect } from 'react';
import * as echarts from 'echarts/core';
import { LineChart, LineSeriesOption } from 'echarts/charts';
import { GridComponent, GridComponentOption } from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { Row, Col, Progress } from 'antd';
import './index.scss';

type EchartsOption = echarts.ComposeOption<GridComponentOption | LineSeriesOption>
export default function Dashboard() {
  // 注册组件
  echarts.use([
    GridComponent,
    LineChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
  ]);
  useEffect(() => {
    const appChartDom = document.getElementById('appChart')!;
    const appletDom = document.getElementById('appletChart')!;
    const appChart = echarts.init(appChartDom);
    const appletChart = echarts.init(appletDom);
    const option: EchartsOption = {
      xAxis: {
        type: 'category',
        data: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [ 150, 230, 224, 218, 135, 147, 260 ],
          type: 'line'
        }
      ]
    };
    appChart.setOption(option);
    appletChart.setOption(option);
  }, []);
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
            <div id='appChart'></div>
          </Col>
          <Col className='chart-item'>
            <div id='appletChart'></div>
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
