import { GrowthDiary } from '@/types'
import { landImages, avatarImages, activityImages } from './image-map'

export const mockDiaries: GrowthDiary[] = [
  {
    diaryId: 'diary_001',
    publisherId: 'user_002',
    publisherName: '田园行者',
    publisherAvatar: avatarImages.user1,
    images: [
      landImages.tomato,
      landImages.tomato2
    ],
    content: '今天去农场看了我认养的小番茄，已经结了好多果子，绿莹莹的特别可爱！农场主说再过两周就能成熟了，好期待呀～🍅',
    createTime: '2026-08-28 14:30',
    likeCount: 28,
    commentCount: 6,
    isLiked: false
  },
  {
    diaryId: 'diary_002',
    publisherId: 'farm_001',
    publisherName: '绿野生态农场',
    publisherAvatar: avatarImages.farmer1,
    images: [
      landImages.rice
    ],
    content: '今日农场播报：水稻田进入分蘖期，长势喜人！本周完成了第二次施肥，使用的是有机复合肥，大家可以在云监工里查看最新照片哦～🌾',
    createTime: '2026-08-27 09:00',
    likeCount: 56,
    commentCount: 12,
    isLiked: true
  },
  {
    diaryId: 'diary_003',
    publisherId: 'user_003',
    publisherName: '花花妈妈',
    publisherAvatar: avatarImages.user2,
    images: [
      landImages.rose,
      landImages.rose2,
      landImages.rose3
    ],
    content: '带女儿来参加农场的花艺体验课，她亲手做了一束玫瑰花束，开心得不得了！认养玫瑰花园真的太值了，下次还要来～🌹',
    createTime: '2026-08-26 16:45',
    likeCount: 89,
    commentCount: 15,
    isLiked: false
  },
  {
    diaryId: 'diary_004',
    publisherId: 'user_004',
    publisherName: '种地的程序员',
    publisherAvatar: avatarImages.user3,
    images: [
      landImages.strawberry
    ],
    content: '收到了农场寄来的第一茬草莓，又大又甜，比超市买的好吃太多了！一家人围在一起吃草莓的幸福感，是代码给不了的～🍓',
    createTime: '2026-08-25 11:20',
    likeCount: 124,
    commentCount: 23,
    isLiked: true
  },
  {
    diaryId: 'diary_005',
    publisherId: 'farm_003',
    publisherName: '花田牧歌农场',
    publisherAvatar: avatarImages.farmer3,
    images: [
      landImages.sunflower
    ],
    content: '向日葵花海进入盛放期啦！本周六举办向日葵摄影大赛，欢迎各位地主来打卡拍照，有丰厚奖品哦～🌻',
    createTime: '2026-08-24 08:30',
    likeCount: 67,
    commentCount: 18,
    isLiked: false
  },
  {
    diaryId: 'diary_006',
    publisherId: 'user_005',
    publisherName: '银发族老张',
    publisherAvatar: avatarImages.user4,
    images: [
      landImages.corn
    ],
    content: '退休后认养了一块玉米地，每天早上第一件事就是打开云监工看玉米长高了没，比看电视有意思多了！养生又养心～🌽',
    createTime: '2026-08-23 07:15',
    likeCount: 95,
    commentCount: 27,
    isLiked: false
  },
  {
    diaryId: 'diary_007',
    publisherId: 'user_006',
    publisherName: '美食探店小分队',
    publisherAvatar: avatarImages.user5,
    images: [
      landImages.blueberry,
      landImages.blueberry2
    ],
    content: '蓝莓熟了！自提了5斤回来，做了蓝莓酱和蓝莓冰淇淋，纯天然无添加，小朋友超爱吃。认养蓝莓真的是最正确的决定！🫐',
    createTime: '2026-08-22 15:00',
    likeCount: 110,
    commentCount: 19,
    isLiked: true
  },
  {
    diaryId: 'diary_008',
    publisherId: 'farm_002',
    publisherName: '稻香田园农场',
    publisherAvatar: avatarImages.farmer2,
    images: [
      landImages.rice2
    ],
    content: '本周农事播报：稻田除草完成，水稻长势良好，预计10月中旬可以收割。认养水稻的朋友们可以期待今年的新米啦！🌾',
    createTime: '2026-08-21 10:00',
    likeCount: 43,
    commentCount: 8,
    isLiked: false
  },
  {
    diaryId: 'diary_009',
    publisherId: 'user_007',
    publisherName: '阳台种菜爱好者',
    publisherAvatar: avatarImages.user6,
    images: [
      landImages.chili
    ],
    content: '认养的螺丝椒已经可以采收了！农场主拍了照片过来，红红的辣椒挂满枝头，太有成就感了。等着收到快递～🌶️',
    createTime: '2026-08-20 13:40',
    likeCount: 76,
    commentCount: 14,
    isLiked: false
  },
  {
    diaryId: 'diary_010',
    publisherId: 'user_008',
    publisherName: '周末带娃党',
    publisherAvatar: avatarImages.user7,
    images: [
      activityImages.picking,
      landImages.tomato
    ],
    content: '带孩子来农场体验了一整天，认养的草莓和番茄都看了，还喂了小动物。亲近自然的周末比去游乐场有意义多了！🐰',
    createTime: '2026-08-19 17:20',
    likeCount: 132,
    commentCount: 31,
    isLiked: true
  }
]
