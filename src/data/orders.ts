import { AdoptOrder } from '@/types'
import { landImages } from './image-map'

export const mockOrders: AdoptOrder[] = [
  {
    orderId: 'order_001',
    userId: 'user_001',
    landId: 'land_001',
    landName: '小番茄专属地块',
    landCover: landImages.tomato,
    period: 1,
    amount: 299,
    payStatus: 'paid',
    adoptStartTime: '2026-07-15',
    adoptEndTime: '2027-07-14',
    deliveryType: 'mail',
    message: '希望小番茄快快长大！'
  },
  {
    orderId: 'order_002',
    userId: 'user_001',
    landId: 'land_005',
    landName: '玉米种植区',
    landCover: landImages.corn,
    period: 1,
    amount: 199,
    payStatus: 'paid',
    adoptStartTime: '2026-06-01',
    adoptEndTime: '2027-05-31',
    deliveryType: 'pickup'
  },
  {
    orderId: 'order_003',
    userId: 'user_001',
    landId: 'land_008',
    landName: '蓝莓认养区',
    landCover: landImages.blueberry,
    period: 1,
    amount: 459,
    payStatus: 'paid',
    adoptStartTime: '2026-05-10',
    adoptEndTime: '2027-05-09',
    deliveryType: 'mail'
  }
]
