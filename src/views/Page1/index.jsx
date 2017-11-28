import React, { Component } from 'react';
import { DatePicker } from 'antd';

import './index.scss';

function onChange(date, dateString) {
    console.log(date, dateString);
}

class Page1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            addAnimation: 'animated lightSpeedIn'
        }
    }
    componentDidMount(){
        // console.warn(this.props)
        // if (this.props.location.state){
        //     this.setState({
        //         addAnimation: this.props.location.state.animate
        //     })
        // } else{
        //     this.setState({
        //         addAnimation: 'animated pulse'
        //     })
        // }
    }
    render() {
        return (
            <div className={`page1 ${this.state.addAnimation}`}>
                <div className="wrap">
                    <h2>Route Animations</h2>
                    <DatePicker onChange={onChange} />
                </div>
            </div>
        )
    }
}

export default Page1;