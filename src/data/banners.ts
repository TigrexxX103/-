import { Banner } from '@/types'
import { bannerImages } from './image-map'

export const mockBanners: Banner[] = [
  {
    bannerId: 'banner_001',
    image: bannerImages.spring,
    title: '春季认养季',
    link: '/pages/adopt/index'
  },
  {
    bannerId: 'banner_002',
    image: bannerImages.corn,
    title: '新品上线：水果玉米',
    link: '/pages/land-detail/index?id=land_005'
  },
  {
    bannerId: 'banner_003',
    image: bannerImages.festival,
    title: '周末农场采摘节',
    link: '/pages/activity-detail/index?id=act_001'
  },
  {
    bannerId: 'banner_004',
    image: bannerImages.strawberry,
    title: '草莓认养火热进行中',
    link: '/pages/land-detail/index?id=land_002'
  }
]
