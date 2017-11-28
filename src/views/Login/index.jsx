import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { message } from 'antd';

import './index.scss';

import { get, post, asyncGet, asyncPost } from '../../tools/fetchAwait';



class Login extends Component {
    constructor(props) {
        super(props)
        this.goNextRoute = this.goNextRoute.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onFormChange = this.onFormChange.bind(this)
        this.state = {
            forms: {
                user: '',
                password: ''
            },
            addAnimation: 'animated flipInX'
        }
    }
    
    componentDidMount() {
        // To disabled submit button at the beginning.
        console.log($(window))
        console.log(this.props)

        // async 表示这是一个async函数，await只能用在这个函数里面
        const awaitGetGO = async () => {
            const admin = 'admin',pass = 1;
            try {
                // await 后面跟着的应该是一个promise对象（当然，其他返回值也没关系，只是会立即执行，不过那样就没有意义了…）
                // await 表示在这里等待promise返回结果了，再继续执行。按照顺序执行 【比如先请求得到key然后拿到key作为参数去请求第二个接口就很适用】
                console.log('正在等待获取接口1信息')
                let result = await asyncGet(`https://rexhang.com/api/test.php?user=${admin}&pass=${pass}`);
                let key = await result.json();
                console.log(key)

                console.log('正在等待获取接口2信息')
                let result2 = await asyncGet(`https://rexhang.com/api/test.php?user=${key.pass}&pass=${pass+2}`);
                let resultData2 = await result2.json();
                console.log(resultData2)

            } catch (err) {
                console.log("Error", err);
            }

        }
        awaitGetGO();

        const getGo = () => {
            const admin = 'admin', pass = 2;
            get(`https://rexhang.com/api/test.php?user=${admin}&pass=${pass}`).then(res => {
                console.log('异步普通get 模式获取接口信息')
                console.log(res)
            }).catch( err =>{
                console.log("Error", err);
            } )
        }
        getGo();

        // post异步请求
        const awaitPostGO = async () => {
            let Post_Body = new FormData();
            Post_Body.append("pass", '123456');
            Post_Body.append("user", 'admin');

            let result = await asyncPost(`https://rexhang.com/api/post.php`, Post_Body);
            let res = await result.json();
            console.log(res)

        }
        awaitPostGO();

        const postGO = () => {
            let Post_Body = new FormData();
            Post_Body.append("pass", '123456');
            Post_Body.append("user", 'admin');
            post(`https://rexhang.com/api/post.php`, Post_Body).then(res => {
                console.log(res)
            }).catch(err => {
                console.log("Error", err);
            })
        }
        postGO();

    }
    goNextRoute(){
        // push与replace的区别，一个是添加，一个是替换，历史记录中被替换的已经不存在了，所以浏览器回退不到替换前的页面。
        // console.log(this.props);
        // this.props.history.push('/follow');
        this.props.history.push({
            pathname:'/index',
            state:{name:'xxx'},
            hash: '',
            query: {foo: 'bar'}
        })

        // this.props.history.replace('/follow');
        // this.props.history.replace({
        //     pathname: '/index',
        //     state: { foo: 'bar' }
        // })
    }
    handleSubmit(e){
        e.preventDefault();
        let forms = this.state.forms;
        
        /* ajax */

        if (forms.user === 'admin' && forms.password === '123456' ){
            message.info('登录成功', 1, () => {
                // alert('回调函数') 
                this.goNextRoute();

            });
        } else{
            message.error('账号|密码不正确', 1, () => {
                // alert('回调函数') 
                console.log(forms)
            });
        }
  
    }
    onFormChange(e, type){
        // console.log(e.target.value)
        // console.log(type)
        let stateObj = this.state;
        switch (type) {
            case 'user':
                stateObj.forms.user = e.target.value;
                break;
            case 'password':
                stateObj.forms.password = e.target.value;
                break;
            default:
                break;
        }
        this.setState(stateObj)
    }
    render() {
        const submitStyle = {
            padding: '0 20px'
        }
        return (
            <div className={`login-box ${this.state.addAnimation}`}>
                <h2 className="tit">Admin</h2>
                <form onSubmit={(e) => { this.handleSubmit(e) } }>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">用户名</label>
                        <input
                            value={this.state.forms.user}
                            onChange={(e) => { this.onFormChange(e, 'user')} }
                        type="text" className="form-control" id="exampleInputEmail1" autoFocus placeholder="在此输入用户名" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">密码</label>
                        <input
                            defaultValue={this.state.forms.password}
                            onChange={(e) => { this.onFormChange(e, 'password') }}
                        type="password" className="form-control" id="exampleInputPassword1" placeholder="在此输入密码" />
                    </div>
                    <button type="submit" className="btn btn-info"><span style={submitStyle}>登录</span></button>
                </form>
            </div>
        );
    }
}




export default Login;
