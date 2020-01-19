export const MENUS = [
    {
        path: '/summary',
        icon: 'pie-chart',
    }, {
        path: '/checkIn',
        icon: 'carry-out',
        submenus: [
            {
                path: '/checkIn/plan',
            },
            {
                path: '/checkIn/punishment',
            },
        ]
    }, {
        icon: 'setting',
        path: '/setting',
        submenus: [
            {
                path: '/setting/plan',
            },
            {
                path: '/setting/member',
            },
            {
                path: '/setting/punishment',
            }
        ]
    }
];

export const PATH_MAP: {[path: string]: string} = {
    '/summary': '汇总信息',
    '/checkIn': '打卡管理',
    '/checkIn/plan': '计划打卡',
    '/checkIn/punishment': '惩罚打卡',
    '/setting': '配置管理',
    '/setting/plan': '计划配置',
    '/setting/member': '成员配置',
    '/setting/punishment': '惩罚配置',
};
