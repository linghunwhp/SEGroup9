// 菜单 侧边栏
export default [
  { path: '/index', title: 'Home', icon: 'home' },
  {
    title: 'History',
    icon: 'folder-o',
    children: [
      { path: '/page1', title: 'History_1' },
      { path: '/page2', title: 'History_2' },
      { path: '/page3', title: 'History_3' }
    ]
  }
]
