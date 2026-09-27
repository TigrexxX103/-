import { Product } from '@/types'
import { landImages, productImages } from './image-map'

export const mockProducts: Product[] = [
  {
    productId: 'prod_001',
    name: '有机圣女果 2斤装',
    coverImage: landImages.tomato,
    price: 39.9,
    originalPrice: 59.9,
    sales: 328,
    description: '农场直采有机圣女果，无农药无化肥，自然成熟，酸甜可口。',
    images: [
      landImages.tomato,
      landImages.tomato2
    ],
    farmName: '绿野生态农场'
  },
  {
    productId: 'prod_002',
    name: '奶油草莓 精品礼盒',
    coverImage: productImages.fruitBox,
    price: 68,
    originalPrice: 88,
    sales: 256,
    description: '大棚种植奶油草莓，精选大果，甜度高，礼盒包装送礼佳品。',
    images: [
      landImages.strawberry
    ],
    farmName: '绿野生态农场'
  },
  {
    productId: 'prod_003',
    name: '太湖稻花香米 10斤装',
    coverImage: productImages.rice,
    price: 98,
    originalPrice: 128,
    sales: 189,
    description: '太湖流域优质水稻，古法种植，一年一季，米饭香软可口。',
    images: [
      landImages.rice
    ],
    farmName: '稻香田园农场'
  },
  {
    productId: 'prod_004',
    name: '大马士革玫瑰纯露',
    coverImage: productImages.roseGift,
    price: 128,
    sales: 145,
    description: '古法蒸馏玫瑰纯露，天然护肤，可做爽肤水、喷雾。',
    images: [
      landImages.rose
    ],
    farmName: '花田牧歌农场'
  },
  {
    productId: 'prod_005',
    name: '蓝莓鲜果 2斤装',
    coverImage: landImages.blueberry,
    price: 58,
    originalPrice: 78,
    sales: 312,
    description: '南高丛蓝莓，现摘现发，酸甜适中，富含花青素。',
    images: [
      landImages.blueberry
    ],
    farmName: '稻香田园农场'
  },
  {
    productId: 'prod_006',
    name: '有机罗马生菜 3斤装',
    coverImage: productImages.giftBox,
    price: 29.9,
    sales: 98,
    description: '水培有机罗马生菜，干净卫生，即采即食，沙拉首选。',
    images: [
      landImages.lettuce
    ],
    farmName: '绿野生态农场'
  },
  {
    productId: 'prod_007',
    name: '向日葵花束 精选5支',
    coverImage: landImages.sunflower,
    price: 45,
    sales: 67,
    description: '精选向日葵花束，花期长，适合家居装饰和送礼。',
    images: [
      landImages.sunflower2
    ],
    farmName: '花田牧歌农场'
  },
  {
    productId: 'prod_008',
    name: '水果玉米 10根装',
    coverImage: landImages.corn2,
    price: 35,
    originalPrice: 45,
    sales: 234,
    description: '脆甜水果玉米，可生吃，皮薄汁多，老少皆宜。',
    images: [
      landImages.corn
    ],
    farmName: '稻香田园农场'
  },
  {
    productId: 'prod_009',
    name: '螺丝椒 2斤装',
    coverImage: landImages.chili2,
    price: 25,
    sales: 76,
    description: '螺丝椒，皮薄肉厚，辣味适中，炒菜配菜佳品。',
    images: [
      landImages.chili
    ],
    farmName: '绿野生态农场'
  },
  {
    productId: 'prod_010',
    name: '薰衣草香薰礼盒',
    coverImage: productImages.lavenderGift,
    price: 88,
    sales: 54,
    description: '薰衣草香薰礼盒，含香薰精油+香薰蜡烛+干花包，助眠舒缓。',
    images: [
      landImages.lavender
    ],
    farmName: '花田牧歌农场'
  }
]
