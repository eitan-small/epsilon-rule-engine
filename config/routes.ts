export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
    ],
  },
  { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
  {
    path: '/decision',
    name: '决策管理',
    icon: 'ThunderboltOutlined',
    routes: [
      {
        path: '/decision',
        redirect: '/decision/model',
      },
      {
        path: '/decision/project',
        name: '项目管理',
        component: './project/list',
      },
      {
        path: '/decision/model',
        name: '模型管理',
        component: './model',
      },
    ],
  },
];
