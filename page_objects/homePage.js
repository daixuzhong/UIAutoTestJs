module.exports = {
    elements: {
        //右上角个人设置
        MySetting: {
            selector : '.my-setting-top-user-name'
        },
        //上方导航栏admin
        AdminOnTopNavi: {
            selector : '#topbar > ul:nth-child(1) > li:nth-child(8) > a:nth-child(1)'
        },
        //左侧导航栏-系统管理
        UserMangerOnLeftNavi: {
            selector : 'li.panel:nth-child(2) > a:nth-child(1)'
        },
        //左侧导航栏-系统管理-用户列表
        UserListOnLeftNavi: {
            selector : '#collapse2 > li:nth-child(7) > a:nth-child(1)'
        }
    }
}