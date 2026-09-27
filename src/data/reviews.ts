import { Review } from '@/types'
import { avatarImages, reviewImages } from './image-map'

export const mockReviews: Review[] = [
  {
    reviewId: 'review_001',
    orderId: 'order_001',
    userId: 'user_002',
    userName: '田园行者',
    userAvatar: avatarImages.user1,
    rating: 5,
    content: '体验非常好！农场主很负责，每次施肥都会拍照发过来。番茄也很甜，快递包装很好，没有坏果。',
    images: [
      reviewImages.review1,
      reviewImages.review2
    ],
    createTime: '2026-08-20 14:30'
  },
  {
    reviewId: 'review_002',
    orderId: 'order_002',
    userId: 'user_003',
    userName: '花花妈妈',
    userAvatar: avatarImages.user2,
    rating: 5,
    content: '带孩子参加了农场体验课，女儿玩得很开心！认养玫瑰花园还能做花艺，性价比很高。',
    images: [
      reviewImages.review4
    ],
    createTime: '2026-08-18 16:00'
  },
  {
    reviewId: 'review_003',
    orderId: 'order_003',
    userId: 'user_004',
    userName: '种地的程序员',
    userAvatar: avatarImages.user3,
    rating: 4,
    content: '草莓确实好吃，比超市的强太多。就是快递有点慢，等了3天才到。总体满意，会续认。',
    images: [],
    createTime: '2026-08-15 11:20'
  },
  {
    reviewId: 'review_004',
    orderId: 'order_004',
    userId: 'user_005',
    userName: '银发族老张',
    userAvatar: avatarImages.user4,
    rating: 5,
    content: '退休生活有了新寄托！每天看看玉米长高，和老友分享收获的玉米，特别有成就感。',
    images: [
      reviewImages.review7
    ],
    createTime: '2026-08-10 08:00'
  },
  {
    reviewId: 'review_005',
    orderId: 'order_005',
    userId: 'user_006',
    userName: '美食探店小分队',
    userAvatar: avatarImages.user5,
    rating: 5,
    content: '蓝莓又大又甜，做蓝莓酱绝了！自提还能顺便逛农场，体验很好。',
    images: [
      reviewImages.review6
    ],
    createTime: '2026-08-05 15:30'
  },
  {
    reviewId: 'review_006',
    orderId: 'order_006',
    userId: 'user_007',
    userName: '阳台种菜爱好者',
    userAvatar: avatarImages.user6,
    rating: 4,
    content: '辣椒长势很好，已经收到两次了。农场主回复很及时，有问必答。',
    images: [],
    createTime: '2026-08-01 10:00'
  },
  {
    reviewId: 'review_007',
    orderId: 'order_007',
    userId: 'user_008',
    userName: '周末带娃党',
    userAvatar: avatarImages.user7,
    rating: 5,
    content: '带孩子来了好几次了，每次都有新体验。比去游乐场有意义，推荐给所有亲子家庭！',
    images: [
      reviewImages.review2,
      reviewImages.review1
    ],
    createTime: '2026-07-28 17:00'
  }
]
