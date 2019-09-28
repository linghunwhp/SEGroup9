// 菜单 顶栏
export default [
  { path: '/index', title: 'Home', icon: 'home' },
  {
    title: 'Methods',
    icon: 'folder-o',
    children: [
      { path: '/page1', title: 'Normal' },
      { path: '/page2', title: 'Basic Auth' },
      { path: '/page3', title: 'Digest Auth' },
      { path: '/page4', title: 'OAuth 1.0' }
    ]
  }
]
