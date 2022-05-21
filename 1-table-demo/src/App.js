
import { Table, Popconfirm, Typography } from 'antd';
import ReactEcharts from 'echarts-for-react';
import 'antd/dist/antd.css'
import './App.css';

const data = [
  { name: '李白', age: 21, sex: '男' },
  { name: '李清照', age: 22, sex: '女' }
]

const columns = [
  { title: '姓名', dataIndex: 'name', key: 1, editable: true },
  { title: '年龄', dataIndex: 'age', key: 2 },
  { title: '性别', dataIndex: 'sex', key: 3 }
]


const option = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['最高气温', '最低气温']
  },
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: { readOnly: false },
      magicType: { type: ['bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} °C'
    }
  },
  series: [
    {
      name: '最高气温',
      type: 'line',
      data: [11, 11, 15, 13, 12, 13, 10],
    },
    {
      name: '最低气温',
      type: 'line',
      data: [1, -2, 2, 5, 3, 2, 0],
    }
  ]
};


function App() {
  return (
    <>
      <h1>表格学习</h1>
      <Table columns={columns} dataSource={data} />

      <h1>EChart学习</h1>
      <code>yarn add  echarts-for-react</code>
      <ReactEcharts option={option} style={{ height: '350px', width: '1000px' }} />
    </>
  )
}

export default App;
