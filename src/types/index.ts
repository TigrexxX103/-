// ============================================
// 全局类型定义 - 认领一块地
// ============================================

/** 用户信息 */
export interface UserInfo {
  userId: string
  nickname: string
  avatar: string
  phone?: string
  bio?: string
  points: number
  landCount: number
  harvestCount: number
  isCertified: boolean
}

/** 地块作物类型 */
export type CropType = 'vegetable' | 'fruit' | 'grain' | 'flower'

/** 地块状态 */
export type LandStatus = 'available' | 'full' | 'almost_full' | 'almost_mature'

/** 生长阶段 */
export type GrowthStage = 'seed' | 'seedling' | 'flowering' | 'fruiting' | 'harvest'

/** 地块信息 */
export interface Land {
  landId: string
  farmId: string
  farmName: string
  name: string
  coverImage: string
  location: string
  address: string
  area: number
  soilType: string
  cropType: CropType
  cropName: string
  price: number
  unit: string
  totalSlots: number
  adoptedSlots: number
  status: LandStatus
  currentStage: GrowthStage
  rating: number
  reviewCount: number
  tags: string[]
  images: string[]
  description: string
  benefits: string[]
}

/** 生长记录 */
export interface GrowthRecord {
  recordId: string
  landId: string
  stage: GrowthStage
  stageName: string
  description: string
  images: string[]
  createTime: string
  authorName: string
}

/** 认养订单 */
export interface AdoptOrder {
  orderId: string
  userId: string
  landId: string
  landName: string
  landCover: string
  period: number
  amount: number
  payStatus: 'unpaid' | 'paid' | 'refunded'
  adoptStartTime: string
  adoptEndTime: string
  deliveryType: 'mail' | 'pickup'
  message?: string
}

/** 收获记录 */
export interface HarvestRecord {
  harvestId: string
  orderId: string
  cropName: string
  weight: number
  unit: string
  status: 'pending' | 'mailed' | 'pickup'
  harvestDate: string
  processTime?: string
  trackingNo?: string
}

/** 活动信息 */
export interface Activity {
  activityId: string
  farmId: string
  farmName: string
  title: string
  coverImage: string
  startTime: string
  endTime: string
  location: string
  price: number
  totalQuota: number
  bookedCount: number
  description: string
  tags: string[]
}

/** 用户评价 */
export interface Review {
  reviewId: string
  orderId: string
  userId: string
  userName: string
  userAvatar: string
  rating: number
  content: string
  images: string[]
  createTime: string
}

/** 农场信息 */
export interface Farm {
  farmId: string
  name: string
  avatar: string
  description: string
  location: string
  landCount: number
  reviewCount: number
  rating: number
  joinTime: string
  replyRate: number
  images: string[]
}

/** 消息类型 */
export type MessageType = 'growth' | 'harvest' | 'system' | 'interaction' | 'activity'

/** 消息信息 */
export interface Message {
  messageId: string
  type: MessageType
  icon: string
  title: string
  summary: string
  createTime: string
  isRead: boolean
  relatedId?: string
  relatedPage?: string
}

/** 生长日记 */
export interface GrowthDiary {
  diaryId: string
  publisherId: string
  publisherName: string
  publisherAvatar: string
  images: string[]
  video?: string
  content: string
  createTime: string
  likeCount: number
  commentCount: number
  isLiked: boolean
}

/** Banner */
export interface Banner {
  bannerId: string
  image: string
  title: string
  link?: string
}

/** 商品信息 */
export interface Product {
  productId: string
  name: string
  coverImage: string
  price: number
  originalPrice?: number
  sales: number
  description: string
  images: string[]
  farmName: string
}

/** 积分明细 */
export interface PointsRecord {
  recordId: string
  type: 'earn' | 'spend'
  amount: number
  description: string
  createTime: string
}
