import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts/core';
import { LineChart, LineSeriesOption } from 'echarts/charts';
import { GridComponent, TitleComponent, TitleComponentOption, GridComponentOption, TooltipComponent, TooltipComponentOption } from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { Row, Col, Progress, Table, List } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import VirtualList from 'rc-virtual-list';
import './index.scss';
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}
interface UserItem {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

type EchartsOption = echarts.ComposeOption<TitleComponentOption | GridComponentOption | LineSeriesOption | TooltipComponentOption>
export default function Dashboard() {
  const [ listData, setListData ] = useState<UserItem[]>([]);
  const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
  const ContainerHeight = 400;
  // 表格表头
  const columns: ColumnsType<DataType> = [
    {
      title: '应用名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    }
  ];
  // 表格数据
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
  ];
  // 注册组件
  echarts.use([
    GridComponent,
    LineChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
    TooltipComponent,
    TitleComponent
  ]);
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setListData(listData.concat(body.results));
      });
  };
  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
  };
  useEffect(() => {
    appendData();
    const appChartDom = document.getElementById('appChart')!;
    const appletDom = document.getElementById('appletChart')!;
    const appChart = echarts.init(appChartDom);
    const appletChart = echarts.init(appletDom);
    const commonOption: EchartsOption = {
      grid: {
        left: '4%',
        right: '0%',
        bottom: '10%'
      },
      xAxis: {
        type: 'category',
        data: [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月' ]
      },
      yAxis: {
        name: '人数',
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#000'
          }
        }
      },
      tooltip: {
        trigger: 'axis'
      }
    };
    const appOption: EchartsOption = {
      title: {
        text: 'App月度注册用户统计',
        textStyle: {
          fontSize: '16',
          fontWeight: 'bold'
        },
        left: 'center'
      },
      series: [
        {
          data: [ 150, 230, 224, 218, 135, 147, 260 ],
          type: 'line'
        }
      ]
    };
    const appletOption: EchartsOption = {
      title: {
        text: '小程序月度注册用户统计',
        textStyle: {
          fontSize: '16',
          fontWeight: 'bold'
        },
        left: 'center'
      },
      series: [
        {
          data: [ 150, 230, 224, 218, 135, 147, 260 ],
          type: 'line'
        }
      ]
    };
    appChart.setOption(Object.assign({}, commonOption, appOption));
    appletChart.setOption(Object.assign({}, commonOption, appletOption));
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
      <Row justify="space-between">
        <Col className='dashborad-table'>
          <div className='table-title'>广告数据</div>
          <Table pagination={false} bordered={true} columns={columns} dataSource={data}/>
        </Col>
        <Col className='dashborad-list'>
          <div className='list-title'>用户活跃度排行</div>
          <List>
            <VirtualList
              data={listData}
              height={ContainerHeight}
              itemHeight={47}
              itemKey="email"
              onScroll={onScroll}
            >
              {(item: UserItem) => (
                <List.Item key={item.email}>
                  <List.Item.Meta
                    title={`${item.name.last}/最新使用产品的时间`}
                    description='用户IP'
                  />
                  <div>App/Applet(使用该产品的时间)</div>
                </List.Item>
              )}
            </VirtualList>
          </List>
        </Col>
      </Row>
    </div>
  );
}
