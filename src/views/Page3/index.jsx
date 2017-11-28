import React, { Component } from 'react';
import { Table } from 'antd';

import { get, post, asyncGet, asyncPost } from '../../tools/fetchAwait';

import './index.scss';

const renderContent = (value, row, index) => {
    const obj = {
        children: value,
        props: {},
    };
    return obj;
};
// antd Table 配置
const columns = [
    {
        title: 'Key',
        dataIndex: 'key',
        render: renderContent,
    },
    {
        title: '姓名',
        dataIndex: 'name',
        render: (value, row, index) =>{
            const obj = {
                children: <a href="javascript:;">{value}</a>,
                props: {
                    rowSpan: 1,
                    colSpan: 1
                },
            };
            return obj;
        },
    },
    {
        title: '年龄',
        dataIndex: 'age',
        render: renderContent,
    },
    {
        title: '联系方式',
        dataIndex: 'mobile',
        render: renderContent,
    },
    {
        title: '地址',
        dataIndex: 'address',
        render: renderContent,
    }
];

// 数据
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        phone: 18900010002,
        address: 'Sidney No. 1 Lake Park',
    }
];

class Page3 extends Component {
    constructor(props){
        super(props)
        this.state = {
            addAnimation: 'animated slideInDown'
        }
    }
    componentDidMount(){
        console.log(this.props);
        // 获取表格数据
        (async () => {
            try{
                const res = await (await asyncGet('http://www.armeets.net/portal/list/lists')).json();
                const obj = {
                    tableList: res.data
                }
                this.setState(obj);
            } catch(err){
                console.error(`Error: ${err}`);
            }
        })();
    }
    render() {
        return (
            <div className={`${this.state.addAnimation} page3`}>
                <div className="wrap">
                    <h1>page3</h1>
                    <Table columns={columns} dataSource={this.state.tableList} bordered />
                </div>
            </div>
        )
    }
}

export default Page3;