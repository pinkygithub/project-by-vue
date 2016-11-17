const ROOT = 'http://localhost:9090/stprest'; // 服务Root路径
const LOGIN_URL = `${ROOT}/j_spring_security_check`;
const LOGOUT_URL = 'logout'; // 暂时没有退出登陆接口
const CHECK_USER_URL =`${ROOT}/staff/checkStaffAccount?staffAccount=`;
const REGISTER_URL =`${ROOT}/staff/save?email=&password=`;
// email=&password=  
export default {
    // 用户信息
    user: null,
    // 是否登陆
    authenticated: false,
    // 登陆
    login(context, creds) {
        return new Promise(function(resolve, reject) {
            let error_result = { flag: false, msg: '登陆失败' }
            context.$http.post(LOGIN_URL, creds).then((result) => {
                let data = result.body
                if (data.code === 0) {
                    localStorage.setItem('jwt_token', data.code)
                    localStorage.setItem('jwt_user', JSON.stringify(data.user))
                    this.authenticated = true
                    this.user = data.user
                    resolve(result)
                } else {
                    reject(error_result)
                }
            }, (error) => {
                reject(error_result)
            })
        }.bind(this))
    },
        // 注册
    register(context,creds) {
        return new Promise(function(resolve, reject) {
            let error_result = { flag: false, msg: '注册失败' }
            context.$http.post(REGISTER_URL, creds).then((result) => {
                let data = result.body
                 console.log(JSON.stringify(data))
                if (data.success) {
                    localStorage.setItem('msgCode', result.msgCode)
                    this.authenticated = true
                    resolve(result)
                } else {
                    reject(error_result)
                }
            }, (error) => {
                reject(error_result)
            })
        }.bind(this))
    },
        // 登录校验-用户是否存在
    checkUsername(context, staffAccount,staffId){
        return new Promise(function(resolve, reject) {
            let error_result = { flag: false, msg: '失败' }
            let url =  CHECK_USER_URL + staffAccount + "&staffId"
            context.$http.get(url).then((result) => {
                let data = result.body
                if (data.success) {                   
                    resolve()
                } else {
                    reject(data.msgCode)
                }
            }, (error) => {
                reject('unexpected error')
            })
        }.bind(this))
    },

    // 退出登录
    logout(context) {
        return new Promise(function(resolve, reject) {
            localStorage.removeItem('jwt_token')
            localStorage.removeItem('jwt_user')
            this.authenticated = false
            this.user = null
            resolve({})
        }.bind(this))
    },
    // 权限setting
    checkAuth() {
        let jwt = localStorage.getItem('jwt_token')
        if (jwt) {
            this.authenticated = true
        } else {
            this.authenticated = false
        }
    },
    // 获取Token（OAth2）    
    getToken() {
        return localStorage.getItem('jwt_token')
    },
    // 获取用户信息
    getUser() {
        return localStorage.getItem('jwt_user')
    }
}