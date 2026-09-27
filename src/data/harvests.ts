import { HarvestRecord } from '@/types'

export const mockHarvests: HarvestRecord[] = [
  {
    harvestId: 'harvest_001',
    orderId: 'order_001',
    cropName: '圣女果小番茄',
    weight: 3,
    unit: '斤',
    status: 'pending',
    harvestDate: '2026-08-28'
  },
  {
    harvestId: 'harvest_002',
    orderId: 'order_001',
    cropName: '奶油草莓',
    weight: 2,
    unit: '斤',
    status: 'mailed',
    harvestDate: '2026-08-12',
    processTime: '2026-08-12 14:00',
    trackingNo: 'SF1234567890'
  },
  {
    harvestId: 'harvest_003',
    orderId: 'order_002',
    cropName: '水果玉米',
    weight: 10,
    unit: '根',
    status: 'pickup',
    harvestDate: '2026-08-05',
    processTime: '2026-08-06 10:00'
  },
  {
    harvestId: 'harvest_004',
    orderId: 'order_003',
    cropName: '南高丛蓝莓',
    weight: 2,
    unit: '斤',
    status: 'mailed',
    harvestDate: '2026-07-28',
    processTime: '2026-07-28 15:00',
    trackingNo: 'YT9876543210'
  },
  {
    harvestId: 'harvest_005',
    orderId: 'order_001',
    cropName: '圣女果小番茄',
    weight: 2,
    unit: '斤',
    status: 'pickup',
    harvestDate: '2026-07-20',
    processTime: '2026-07-21 09:00'
  }
]
