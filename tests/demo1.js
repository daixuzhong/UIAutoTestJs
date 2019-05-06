module.exports = {
  'demo1': function (client) {
    // 定义节点.
    const username = '#LoginName'
    const password = '#Password'
    const loginBtn = '#btnLogin'
    const usernameParam = 'admin'
    const passwordParam = '123@qwe'

    // 启动浏览器并打开 bing.com.
    client.url('http://47.100.40.166:8060/portal/Account/Login?ReturnUrl=%2Fportal%2F').maximizeWindow()

    // 确保输入框可以使用.
    client.expect.element(username).to.be.visible
    client.expect.element(password).to.be.visible
    client.pause(2000)  // 稍等两秒.

    // 输入用户名密码.
    client.setValue(username, usernameParam)
    client.pause(500)
    client.setValue(password, passwordParam)
    client.pause(500)
    client.click(loginBtn)
    client.pause(2000)

    // 截图然后保存到 "reports/answer.png". 
    var date = new Date();
    client.saveScreenshot('reports/answers.png')


    // client.end()
  }
}