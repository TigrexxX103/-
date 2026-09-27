import { Farm } from '@/types'
import { farmImages, avatarImages } from './image-map'

export const mockFarms: Farm[] = [
  {
    farmId: 'farm_001',
    name: '绿野生态农场',
    avatar: avatarImages.farmer1,
    description: '位于杭州径山脚下的生态农场，坚持有机种植10年，不使用化肥农药，让每一口食物都安全放心。',
    location: '杭州市余杭区径山镇',
    landCount: 8,
    reviewCount: 340,
    rating: 4.8,
    joinTime: '2020-03-15',
    replyRate: 98,
    images: [
      farmImages.lvye,
      farmImages.lvye2,
      farmImages.lvye3
    ]
  },
  {
    farmId: 'farm_002',
    name: '稻香田园农场',
    avatar: avatarImages.farmer2,
    description: '苏州东山镇太湖畔的传统农场，主打水稻和水果种植，传承古法农耕技艺。',
    location: '苏州市吴中区东山镇',
    landCount: 6,
    reviewCount: 215,
    rating: 4.7,
    joinTime: '2021-06-20',
    replyRate: 95,
    images: [
      farmImages.daoxiang,
      farmImages.daoxiang2
    ]
  },
  {
    farmId: 'farm_003',
    name: '花田牧歌农场',
    avatar: avatarImages.farmer3,
    description: '昆明斗南花卉产区的特色农场，专注花卉种植和花艺体验，打造浪漫田园生活方式。',
    location: '昆明市呈贡区斗南',
    landCount: 5,
    reviewCount: 189,
    rating: 4.9,
    joinTime: '2022-01-10',
    replyRate: 99,
    images: [
      farmImages.huatian,
      farmImages.huatian2
    ]
  }
]

export function getFarmById(farmId: string): Farm | undefined {
  return mockFarms.find(farm => farm.farmId === farmId)
}
