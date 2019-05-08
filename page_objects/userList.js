module.exports = {
    elements: {
        //新建
        CreateUserBtn: {
            selector : '.btn-primary'
        },
        //创建用户弹框-登录名输入框
        NameInput: {
            selector : 'div.form-group:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
        },
        //显示用户弹框-显示名输入框
        ViewNameInput: {
            selector : 'div.form-group:nth-child(2) > div:nth-child(2) > input:nth-child(1)'
        },
        //保存
        SaveUser: {
            selector : 'div.dropdown:nth-child(1) > button:nth-child(1)'
        },
        //查询用户输入框
        QueryUserInput: {
            selector : 'input.ng-scope'
        },
        //用户列表页面第1行的编辑按钮
        EditorUser : {
            selector : 'tr.ng-scope:nth-child(1) > td:nth-child(2) > a:nth-child(1)'
        }

    }
}