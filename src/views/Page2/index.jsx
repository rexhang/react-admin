import React, { Component } from 'react';
import { Calendar } from 'antd';

import './index.scss';

function onPanelChange(value, mode) {
    console.log(value, mode);
}

class Page2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            addAnimation: 'animated fadeInDown'
        }
    }
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div className={`page2 ${this.state.addAnimation}`}>
                <div className="wrap">
                    <Calendar onPanelChange={onPanelChange} />
                    <Calendar onPanelChange={onPanelChange} />
                </div>
            </div>
        )
    }
}

export default Page2;