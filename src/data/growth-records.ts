import { GrowthRecord } from '@/types'
import { landImages, growthImages } from './image-map'

export const mockGrowthRecords: GrowthRecord[] = [
  {
    recordId: 'rec_001',
    landId: 'land_001',
    stage: 'fruiting',
    stageName: '结果期',
    description: '今日完成第三次有机肥料追施，使用腐熟羊粪+菜籽饼，小苗长势喜人，已挂果30+颗。预计两周后可陆续成熟。',
    images: [
      growthImages.fruiting,
      landImages.tomato2
    ],
    createTime: '2026-08-28 09:00',
    authorName: '绿野生态农场'
  },
  {
    recordId: 'rec_002',
    landId: 'land_001',
    stage: 'flowering',
    stageName: '开花期',
    description: '番茄进入开花期，花朵黄色，长势旺盛。今天进行了人工辅助授粉，提高坐果率。',
    images: [
      growthImages.flowering
    ],
    createTime: '2026-08-14 08:30',
    authorName: '绿野生态农场'
  },
  {
    recordId: 'rec_003',
    landId: 'land_001',
    stage: 'seedling',
    stageName: '幼苗期',
    description: '番茄苗移栽完成，株高约15cm，已缓苗成功。今日搭建了攀爬支架。',
    images: [
      growthImages.seedling
    ],
    createTime: '2026-07-30 10:00',
    authorName: '绿野生态农场'
  },
  {
    recordId: 'rec_004',
    landId: 'land_001',
    stage: 'seed',
    stageName: '播种期',
    description: '番茄种子催芽完成，今日播种到育苗盘，温度控制在25-28℃。',
    images: [
      growthImages.sprout
    ],
    createTime: '2026-07-15 09:00',
    authorName: '绿野生态农场'
  }
]

export function getRecordsByLandId(landId: string): GrowthRecord[] {
  return mockGrowthRecords.filter(record => record.landId === landId)
}
