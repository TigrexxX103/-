export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/discover/index',
    'pages/adopt/index',
    'pages/message/index',
    'pages/profile/index',
    'pages/land-detail/index',
    'pages/adopt-confirm/index',
    'pages/pay-result/index',
    'pages/certificate/index',
    'pages/monitor/index',
    'pages/harvest/index',
    'pages/activity-detail/index',
    'pages/activity-booking/index',
    'pages/farm-home/index',
    'pages/product-detail/index',
    'pages/order-list/index',
    'pages/photo-viewer/index',
    'pages/points-detail/index',
    'pages/my-lands/index',
    'pages/my-activities/index',
    'pages/settings/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#FFFFFF',
    navigationBarTitleText: '认领一块地',
    navigationBarTextStyle: 'black',
    backgroundColor: '#F5F7F5'
  },
  tabBar: {
    color: '#86909C',
    selectedColor: '#4CAF50',
    backgroundColor: '#FFFFFF',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
        iconPath: 'assets/tabbar/home.png',
        selectedIconPath: 'assets/tabbar/home-selected.png'
      },
      {
        pagePath: 'pages/discover/index',
        text: '发现',
        iconPath: 'assets/tabbar/discover.png',
        selectedIconPath: 'assets/tabbar/discover-selected.png'
      },
      {
        pagePath: 'pages/adopt/index',
        text: '认养',
        iconPath: 'assets/tabbar/adopt.png',
        selectedIconPath: 'assets/tabbar/adopt-selected.png'
      },
      {
        pagePath: 'pages/message/index',
        text: '消息',
        iconPath: 'assets/tabbar/message.png',
        selectedIconPath: 'assets/tabbar/message-selected.png'
      },
      {
        pagePath: 'pages/profile/index',
        text: '我的',
        iconPath: 'assets/tabbar/profile.png',
        selectedIconPath: 'assets/tabbar/profile-selected.png'
      }
    ]
  }
})
