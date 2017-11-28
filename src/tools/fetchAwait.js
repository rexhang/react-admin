const parseJSONFilter = (res) => res.json();

// 使用 fetch 封装
const get = (uri) => {
    return fetch(uri).then(parseJSONFilter).catch(err => ({ err }));
};

const post = (uri, body) => {
    return fetch(uri, {
        body: body,
        method: 'POST'
    }).then(parseJSONFilter).catch(error => ({ error }));
};

// 异步
const asyncGet = (uri) => {
    return fetch(uri);
};

// 异步
const asyncPost = (uri, body) => {
    return fetch(uri, {
        body: body,
        method: 'POST'
    });
};

export { get, post, asyncGet, asyncPost };

// How To Use This Export API

/* 

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

*/