import { UserInfo } from '@/types'
import { avatarImages } from './image-map'

export const mockUser: UserInfo = {
  userId: 'user_001',
  nickname: '小农人',
  avatar: avatarImages.user1,
  phone: '138****8888',
  bio: '热爱田园生活，享受慢节奏时光 🌱',
  points: 1280,
  landCount: 3,
  harvestCount: 5,
  isCertified: true
}
