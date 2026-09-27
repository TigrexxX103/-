import { Message } from '@/types'

export const mockMessages: Message[] = [
  {
    messageId: 'msg_001',
    type: 'growth',
    icon: '🌱',
    title: '你的小番茄第3次施肥已完成',
    summary: '农场主今日完成了有机肥料的追施，小苗长势喜人，快来看看最新照片吧！',
    createTime: '10分钟前',
    isRead: false,
    relatedId: 'land_001',
    relatedPage: '/pages/monitor/index?id=land_001'
  },
  {
    messageId: 'msg_002',
    type: 'harvest',
    icon: '🍅',
    title: '你的番茄已成熟，请选择邮寄或自提',
    summary: '认养地块「小番茄专属地块」已有3斤番茄达到采收标准，请在7天内选择配送方式。',
    createTime: '2小时前',
    isRead: false,
    relatedId: 'order_001',
    relatedPage: '/pages/harvest/index'
  },
  {
    messageId: 'msg_003',
    type: 'interaction',
    icon: '❤️',
    title: '田园行者 赞了你的日记',
    summary: '“今天去农场看了我认养的小番茄...”',
    createTime: '3小时前',
    isRead: false,
    relatedPage: '/pages/home/index'
  },
  {
    messageId: 'msg_004',
    type: 'activity',
    icon: '🎉',
    title: '农场新活动：周末采摘体验营',
    summary: '绿野生态农场将于本周六举办亲子采摘体验活动，认养用户享8折优惠。',
    createTime: '昨天 18:30',
    isRead: true,
    relatedId: 'act_001',
    relatedPage: '/pages/activity-detail/index?id=act_001'
  },
  {
    messageId: 'msg_005',
    type: 'system',
    icon: '📢',
    title: '认养成功！你的专属地块已确认',
    summary: '恭喜你成功认养「小番茄专属地块」，认养期2026-08-15至2027-08-14，快来领取电子证书吧！',
    createTime: '2026-08-15 10:20',
    isRead: true,
    relatedPage: '/pages/certificate/index'
  },
  {
    messageId: 'msg_006',
    type: 'growth',
    icon: '🌾',
    title: '你的水稻田进入分蘖期',
    summary: '水稻分蘖期是关键生长期，农场主已完成第二次施肥，预计10月中旬可收割。',
    createTime: '2026-08-14 09:00',
    isRead: true,
    relatedId: 'land_003',
    relatedPage: '/pages/monitor/index?id=land_003'
  },
  {
    messageId: 'msg_007',
    type: 'harvest',
    icon: '🍓',
    title: '你的草莓已邮寄，请注意查收',
    summary: '您的2斤草莓已于今日发出，快递单号：SF1234567890，预计2天内送达。',
    createTime: '2026-08-12 14:00',
    isRead: true,
    relatedPage: '/pages/harvest/index'
  },
  {
    messageId: 'msg_008',
    type: 'interaction',
    icon: '💬',
    title: '花花妈妈 评论了你的日记',
    summary: '“哇，看起来好好吃！请问是哪个农场认养的呀？”',
    createTime: '2026-08-11 20:15',
    isRead: true,
    relatedPage: '/pages/home/index'
  },
  {
    messageId: 'msg_009',
    type: 'activity',
    icon: '🌻',
    title: '向日葵摄影大赛报名开启',
    summary: '花田牧歌农场举办向日葵摄影大赛，参与即可获赠向日葵花束一束，快来报名吧！',
    createTime: '2026-08-10 08:30',
    isRead: true,
    relatedId: 'act_002',
    relatedPage: '/pages/activity-detail/index?id=act_002'
  },
  {
    messageId: 'msg_010',
    type: 'system',
    icon: '⭐',
    title: '积分到账：浇水互动+2分',
    summary: '您今日已完成浇水互动，获得2积分奖励，连续签到7天可额外获得20积分。',
    createTime: '2026-08-09 07:00',
    isRead: true,
    relatedPage: '/pages/points-detail/index'
  }
]
