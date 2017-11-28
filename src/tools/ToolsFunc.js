
const _getUrlParams = (params) => {
    let reg = new RegExp("(^|&)" + params + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
    /*带解析中文的方案*/
    /*var reg = new RegExp("(^|&)"+key+"=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result?decodeURIComponent(result[2]):null;*/
}

const _validate = {
    badName: (badname) => { // 验证user名是否包含特殊字符
        let badnameReg = /[\\\/<>&\"\'\`#\*\^\~\|,:;\?\(\)\[\]%\$]/;
        if (badnameReg.test(badname)) {
            return true;
        }
        return false;
    },
    email: (email) => { // 验证邮箱格式
        let emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return emailReg.test(email);
    },
    space: (space) => { // 验证是否含空格
        let spaceReg = /\s+/;
        return spaceReg.test(space);
    },
    phone: (phone) => { // 验证电话吗是否合格
        let phoneReg = /^1[3,5,7,8]\d{9}$/;
        return phoneReg.test(phone);
    },
    url: (url) => { // 验证网址
        let urlReg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
        return urlReg.test(url);
    }
}

export const getUrlParams = _getUrlParams;

export const validate = _validate;
