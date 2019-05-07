module.exports = {
  'CreateUser': function (browser) {
    browser
        // 打开页面，最大化
        .url('http://47.100.40.166:8060/portal/Account/Login?ReturnUrl=%2Fportal%2F').maximizeWindow()
        //等待1秒，确保输入框可以使用.
        .waitForElementVisible('#LoginName', 1000)
        .waitForElementVisible('#Password')
        // 输入用户名密码,点击登录
        .setValue('#LoginName', 'admin')
        .setValue('#Password', '123@qwe')
        .click('#btnLogin').pause(2000)
        //通过校验右上角个人信息来判断登录是否成功
        .getText('.my-setting-top-user-name', result => {
          browser.assert.equal(result.value, '管理员(财务中心)')
        })
        //点击导航栏的Admin-右侧导航栏的系统管理-用户列表
        .click('#topbar > ul:nth-child(1) > li:nth-child(8) > a:nth-child(1)')
        .click('li.panel:nth-child(2) > a:nth-child(1)')
        //等待导航栏用户列表出现
        .waitForElementVisible('#collapse2 > li:nth-child(7) > a:nth-child(1)', 1000)
        .click('#collapse2 > li:nth-child(7) > a:nth-child(1)').pause(2000)
        //点击新建
        .click('.btn-primary').pause(1000)
        // 确保输入框可以使用.
        .waitForElementVisible('div.form-group:nth-child(1) > div:nth-child(2) > input:nth-child(1)')
        .waitForElementVisible('div.form-group:nth-child(2) > div:nth-child(2) > input:nth-child(1)')
        //输入登录名，显示名
        .setValue('div.form-group:nth-child(1) > div:nth-child(2) > input:nth-child(1)', 'ceshi123')
        .setValue('div.form-group:nth-child(2) > div:nth-child(2) > input:nth-child(1)', '测试123')
        //点击保存
        .click('div.dropdown:nth-child(1) > button:nth-child(1)').pause(500)

        //检查是否保存成功
        .getAttribute('body', 'class', function (result) {
          this.assert.equal(result.value, 'sidebar-light  pace-done')
        })
        .end()
  }
  // ,'Demo2' function (browser) {
  //   browser
  //       .click
  //       .end()
  // }
}