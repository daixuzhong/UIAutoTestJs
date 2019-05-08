module.exports = {
  'CreateUser': function (browser) {
      browser.maximizeWindow()
      var login = browser.page.login();
      login.navigate()
        //等待1秒，确保输入框可以使用
        .waitForElementVisible('@LoginName',1000)
        .waitForElementVisible('@Password',1000)
        // 输入用户名密码,点击登录
        .setValue('@LoginName', 'admin')
        .setValue('@Password', '123@qwe')
        .click('@LoginBtn')

      var home = browser.page.homePage();
      home
        //通过校验右上角个人信息来判断登录是否成功
        .waitForElementVisible('@MySetting',3000)
        .getText('@MySetting', result => {
          browser.assert.equal(result.value, '管理员(财务中心)')
        })

        //点击导航栏的Admin-左侧导航栏的系统管理-用户列表
        .click('@AdminOnTopNavi')
        .click('@UserMangerOnLeftNavi')
        //等待导航栏用户列表出现
        .waitForElementVisible('@UserListOnLeftNavi', 1000)
        .click('@UserListOnLeftNavi')

      var user = browser.page.userList();
      user
        //点击新建
        .waitForElementVisible('@CreateUserBtn', 2000).click('@CreateUserBtn')
        // 确保输入框可以使用，输入用户名和显示名
        .waitForElementVisible('@NameInput', 2000).setValue('@NameInput', 'ceshi123')
        .waitForElementVisible('@ViewNameInput', 2000).setValue('@ViewNameInput', '测试123')

        //点击保存
        .click('@SaveUser').pause(1000)

        //检查是否保存成功
        .getAttribute('body', 'class', function (result) {
          this.assert.equal(result.value, 'sidebar-light  pace-done')
        })

        //搜索该用户
        .waitForElementVisible('@QueryUserInput',2000).setValue('@QueryUserInput', 'ceshi123')
          browser.keys([browser.Keys.ENTER]).keys([browser.Keys.NULL])
        //点击编辑
        user.click('@EditorUser').pause(5000)
          //校验登录名是否为ceshi123
          .waitForElementVisible('@NameInput').getValue('@NameInput', function (result) {
              this.assert.equal(result.value, 'ceshi123')
      })
          //校验显示名是否为测试123
          .waitForElementVisible('@NameInput').getValue('@ViewNameInput', function (result) {
              this.assert.equal(result.value, '测试123')
      })

        .end()
  }

}