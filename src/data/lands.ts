import { Land } from '@/types'
import { landImages } from './image-map'

export const mockLands: Land[] = [
  {
    landId: 'land_001',
    farmId: 'farm_001',
    farmName: '绿野生态农场',
    name: '小番茄专属地块',
    coverImage: landImages.tomato,
    location: '杭州市/余杭区',
    address: '余杭区径山镇绿野生态农场A区3号',
    area: 20,
    soilType: '沙壤土',
    cropType: 'vegetable',
    cropName: '圣女果小番茄',
    price: 299,
    unit: '元/年',
    totalSlots: 50,
    adoptedSlots: 38,
    status: 'available',
    currentStage: 'fruiting',
    rating: 4.8,
    reviewCount: 126,
    tags: ['热', '即将成熟'],
    images: [
      landImages.tomato,
      landImages.tomato2,
      landImages.tomato3
    ],
    description: '位于径山脚下的优质沙壤土地块，全程有机种植，不使用化肥农药。您将获得专属地块标识，每月生长报告，每年5斤小番茄直邮到家。',
    benefits: [
      '专属地块标识牌',
      '每月生长报告',
      '每年5斤产出直邮',
      '免费线下体验2次',
      '电子认养证书'
    ]
  },
  {
    landId: 'land_002',
    farmId: 'farm_001',
    farmName: '绿野生态农场',
    name: '草莓认养区',
    coverImage: landImages.strawberry,
    location: '杭州市/余杭区',
    address: '余杭区径山镇绿野生态农场B区1号',
    area: 15,
    soilType: '草莓专用基质',
    cropType: 'fruit',
    cropName: '奶油草莓',
    price: 399,
    unit: '元/年',
    totalSlots: 30,
    adoptedSlots: 30,
    status: 'full',
    currentStage: 'flowering',
    rating: 4.9,
    reviewCount: 89,
    tags: ['满员'],
    images: [
      landImages.strawberry,
      landImages.strawberry2,
      landImages.strawberry3
    ],
    description: '大棚种植的奶油草莓地块，温控保湿，确保草莓甜度和品质。',
    benefits: [
      '专属地块标识牌',
      '每月生长报告',
      '每年8斤草莓直邮',
      '免费线下采摘3次',
      '电子认养证书'
    ]
  },
  {
    landId: 'land_003',
    farmId: 'farm_002',
    farmName: '稻香田园农场',
    name: '优质水稻田',
    coverImage: landImages.rice,
    location: '苏州市/吴中区',
    address: '吴中区东山镇稻香田园农场',
    area: 50,
    soilType: '水稻土',
    cropType: 'grain',
    cropName: '太湖稻花香米',
    price: 599,
    unit: '元/年',
    totalSlots: 20,
    adoptedSlots: 12,
    status: 'available',
    currentStage: 'seedling',
    rating: 4.7,
    reviewCount: 56,
    tags: ['新'],
    images: [
      landImages.rice,
      landImages.rice2,
      landImages.rice3
    ],
    description: '太湖流域优质水稻田，古法种植，一年一季，产出稻花香米。',
    benefits: [
      '专属地块标识牌',
      '每季生长报告',
      '每年30斤大米直邮',
      '免费线下体验1次',
      '电子认养证书'
    ]
  },
  {
    landId: 'land_004',
    farmId: 'farm_003',
    farmName: '花田牧歌农场',
    name: '玫瑰花园地块',
    coverImage: landImages.rose,
    location: '昆明市/呈贡区',
    address: '呈贡区斗南花田牧歌农场',
    area: 10,
    soilType: '腐叶土',
    cropType: 'flower',
    cropName: '大马士革玫瑰',
    price: 499,
    unit: '元/年',
    totalSlots: 25,
    adoptedSlots: 18,
    status: 'available',
    currentStage: 'flowering',
    rating: 4.9,
    reviewCount: 78,
    tags: ['热'],
    images: [
      landImages.rose,
      landImages.rose2,
      landImages.rose3
    ],
    description: '大马士革玫瑰专属地块，可赏花、可制作玫瑰纯露，浪漫田园体验。',
    benefits: [
      '专属地块标识牌',
      '每月生长报告',
      '玫瑰纯露2瓶',
      '免费花艺体验2次',
      '电子认养证书'
    ]
  },
  {
    landId: 'land_005',
    farmId: 'farm_002',
    farmName: '稻香田园农场',
    name: '玉米种植区',
    coverImage: landImages.corn,
    location: '苏州市/吴中区',
    address: '吴中区东山镇稻香田园农场C区',
    area: 30,
    soilType: '壤土',
    cropType: 'grain',
    cropName: '水果玉米',
    price: 199,
    unit: '元/年',
    totalSlots: 40,
    adoptedSlots: 35,
    status: 'almost_full',
    currentStage: 'flowering',
    rating: 4.6,
    reviewCount: 42,
    tags: ['即将满员'],
    images: [
      landImages.corn,
      landImages.corn2
    ],
    description: '脆甜水果玉米，可生吃，适合亲子家庭认养体验。',
    benefits: [
      '专属地块标识牌',
      '每月生长报告',
      '每年20根玉米直邮',
      '免费线下体验1次',
      '电子认养证书'
    ]
  },
  {
    landId: 'land_006',
    farmId: 'farm_001',
    farmName: '绿野生态农场',
    name: '有机生菜地块',
    coverImage: landImages.lettuce,
    location: '杭州市/余杭区',
    address: '余杭区径山镇绿野生态农场A区8号',
    area: 12,
    soilType: '有机基质土',
    cropType: 'vegetable',
    cropName: '罗马生菜',
    price: 159,
    unit: '元/年',
    totalSlots: 60,
    adoptedSlots: 45,
    status: 'available',
    currentStage: 'seedling',
    rating: 4.5,
    reviewCount: 34,
    tags: ['新'],
    images: [
      landImages.lettuce,
      landImages.lettuce2
    ],
    description: '水培有机罗马生菜，无土栽培，干净卫生，即采即食。',
    benefits: [
      '专属地块标识牌',
      '每月生长报告',
      '每年10斤生菜直邮',
      '免费线下体验1次',
      '电子认养证书'
    ]
  },
  {
    landId: 'land_007',
    farmId: 'farm_003',
    farmName: '花田牧歌农场',
    name: '向日葵花海地块',
    coverImage: landImages.sunflower,
    location: '昆明市/呈贡区',
    address: '呈贡区斗南花田牧歌农场北区',
    area: 8,
    soilType: '沙壤土',
    cropType: 'flower',
    cropName: '观赏向日葵',
    price: 259,
    unit: '元/年',
    totalSlots: 35,
    adoptedSlots: 20,
    status: 'available',
    currentStage: 'seedling',
    rating: 4.8,
    reviewCount: 61,
    tags: ['热'],
    images: [
      landImages.sunflower,
      landImages.sunflower2
    ],
    description: '向日葵花海中的专属地块，夏季最美拍照打卡地。',
    benefits: [
      '专属地块标识牌',
      '每月生长报告',
      '向日葵花束2次',
      '免费花海摄影体验',
      '电子认养证书'
    ]
  },
  {
    landId: 'land_008',
    farmId: 'farm_002',
    farmName: '稻香田园农场',
    name: '蓝莓认养区',
    coverImage: landImages.blueberry,
    location: '苏州市/吴中区',
    address: '吴中区东山镇稻香田园农场南区',
    area: 18,
    soilType: '酸性腐殖土',
    cropType: 'fruit',
    cropName: '南高丛蓝莓',
    price: 459,
    unit: '元/年',
    totalSlots: 25,
    adoptedSlots: 22,
    status: 'almost_full',
    currentStage: 'flowering',
    rating: 4.9,
    reviewCount: 95,
    tags: ['即将满员'],
    images: [
      landImages.blueberry,
      landImages.blueberry2
    ],
    description: '南高丛蓝莓，酸甜可口，富含花青素，适合全家共享。',
    benefits: [
      '专属地块标识牌',
      '每月生长报告',
      '每年6斤蓝莓直邮',
      '免费采摘体验2次',
      '电子认养证书'
    ]
  },
  {
    landId: 'land_009',
    farmId: 'farm_001',
    farmName: '绿野生态农场',
    name: '辣椒种植地块',
    coverImage: landImages.chili,
    location: '杭州市/余杭区',
    address: '余杭区径山镇绿野生态农场B区5号',
    area: 14,
    soilType: '壤土',
    cropType: 'vegetable',
    cropName: '螺丝椒',
    price: 179,
    unit: '元/年',
    totalSlots: 45,
    adoptedSlots: 28,
    status: 'available',
    currentStage: 'fruiting',
    rating: 4.4,
    reviewCount: 28,
    tags: [],
    images: [
      landImages.chili,
      landImages.chili2
    ],
    description: '螺丝椒，皮薄肉厚，辣味适中，适合家庭菜园认养。',
    benefits: [
      '专属地块标识牌',
      '每月生长报告',
      '每年8斤辣椒直邮',
      '免费线下体验1次',
      '电子认养证书'
    ]
  },
  {
    landId: 'land_010',
    farmId: 'farm_003',
    farmName: '花田牧歌农场',
    name: '薰衣草庄园地块',
    coverImage: landImages.lavender,
    location: '昆明市/呈贡区',
    address: '呈贡区斗南花田牧歌农场西区',
    area: 12,
    soilType: '沙质壤土',
    cropType: 'flower',
    cropName: '法国薰衣草',
    price: 389,
    unit: '元/年',
    totalSlots: 20,
    adoptedSlots: 14,
    status: 'available',
    currentStage: 'seedling',
    rating: 4.7,
    reviewCount: 52,
    tags: ['新'],
    images: [
      landImages.lavender,
      landImages.lavender2
    ],
    description: '法国薰衣草庄园，紫色浪漫花海，可制作薰衣草香包。',
    benefits: [
      '专属地块标识牌',
      '每月生长报告',
      '薰衣草香薰礼盒',
      '免费花艺体验1次',
      '电子认养证书'
    ]
  }
]

/** 根据ID获取地块 */
export function getLandById(landId: string): Land | undefined {
  return mockLands.find(land => land.landId === landId)
}

/** 根据作物类型筛选 */
export function getLandsByCropType(cropType: string): Land[] {
  if (cropType === 'all') return mockLands
  return mockLands.filter(land => land.cropType === cropType)
}
