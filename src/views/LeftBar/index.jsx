import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './css/nav.css';

import './index.scss';

import nav from './js/nav';

import imgSrc from './images/mini.png';

class LeftBar extends Component {
    constructor(props){
        super(props);
        this.page2Click = this.page2Click.bind(this);
    }
    page2Click(e){
        // e.preventDefault()  //：阻止默认事件
        e.stopPropagation() //：阻止事件冒泡
        console.log(this._addOn)
    }
    componentDidMount(){
        nav.init()
    }
    componentWillUnmount(){
        nav.uninit()
    }
    render() {
        const id = 777;
        const linkToPage1 = {
            pathname: `/index/page1`,
            /* search: '?name=sd',
            hash: '#sd', */
            state: { author: 'rexhang', animate: 'animated pulse' }
        }
        const linkToPage2 = {
            pathname: `/index/page2/${id}`,
            /* search: '?name=sd',
            hash: '#sd', */
            state: { author: 'rexhang', animate: 'animated pulse' }
        };
        const linkToPage3 = {
            pathname: `/index/page3`,
            /* search: '?name=sd',
            hash: '#sd', */
            state: { author: 'rexhang', animate: 'animated pulse' }
        };
        return (
            <div className="leftBar">
                {/* 
                    <ul className="rex-cf">
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                    <li>
                        <Link to={linkToPage1}>page1</Link>
                    </li>
                    <li>
                        <Link ref={addOn => this._addOn = addOn } to={linkToPage2} onClick={ this.page2Click }
                            className="active">page2</Link>
                    </li>
                </ul>
                */}

                <div className="nav rex-cf">
                    <div className="nav-top">
                        <div id="mini" style={{borderBottom: '1px solid rgba(255,255,255,.1)'}}>
                            <img src={imgSrc} />
                        </div>
                    </div>
                    <ul className="lists">
                        <li className="nav-item">
                            <a href="javascript:;" className="icon-pos">
                                <i className="glyphicon glyphicon-plus isicon"></i>
                                <span>网站配置</span>
                                <i className="glyphicon glyphicon-menu-down isicon-r"></i>
                            </a>
                            <ul>
                                <li><Link to={linkToPage1}><span>page1</span></Link></li>
                                <li><Link to={linkToPage2}><span>page2</span></Link></li>
                                <li><Link to={linkToPage3}><span>page3</span></Link></li>
                                <li><a href="javascript:;"><span>系统日志</span></a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="javascript:;" className="icon-pos">
                                <i className="glyphicon glyphicon-glass isicon"></i>
                                <span>文章管理</span>
                                <i className="glyphicon glyphicon-menu-down isicon-r"></i>
                            </a>
                            <ul>
                                <li><a href="javascript:;"><span>站内新闻</span></a></li>
                                <li><a href="javascript:;"><span>站内公告</span></a></li>
                                <li><a href="javascript:;"><span>登录日志</span></a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="javascript:;" className="icon-pos">
                                <i className="glyphicon glyphicon-heart isicon"></i>
                                <span>订单管理</span>
                                <i className="glyphicon glyphicon-menu-down isicon-r"></i>
                            </a>
                            <ul>
                                <li><a href="javascript:;"><span>订单列表</span></a></li>
                                <li><a href="javascript:;"><span>打个酱油</span></a></li>
                                <li><Link to="/login"><span>退出</span></Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default LeftBar;