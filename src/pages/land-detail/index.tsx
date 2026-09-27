import React, { useState, useMemo } from 'react'
import { View, Text, Image, Swiper, SwiperItem, ScrollView } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import classnames from 'classnames'
import { getLandById } from '@/data/lands'
import { getFarmById } from '@/data/farms'
import { mockReviews } from '@/data/reviews'
import { GrowthStage } from '@/types'
import styles from './index.module.scss'

const stageLabels: Record<GrowthStage, string> = {
  seed: '翻土播种',
  seedling: '幼苗生长',
  flowering: '开花期',
  fruiting: '结果期',
  harvest: '成熟收获'
}

const stageOrder: GrowthStage[] = ['seed', 'seedling', 'flowering', 'fruiting', 'harvest']

const LandDetailPage: React.FC = () => {
  const router = useRouter()
  const landId = router.params.id || 'land_001'
  const [isFav, setIsFav] = useState(false)

  const land = useMemo(() => getLandById(landId), [landId])
  const farm = useMemo(() => land ? getFarmById(land.farmId) : undefined, [land])

  const currentStageIndex = useMemo(() => {
    if (!land) return 0
    return stageOrder.indexOf(land.currentStage)
  }, [land])

  const progress = useMemo(() => {
    if (!land) return 0
    return Math.round((land.adoptedSlots / land.totalSlots) * 100)
  }, [land])

  if (!land) {
    return (
      <View style={{ padding: '100rpx', textAlign: 'center' }}>
        <Text>地块不存在</Text>
      </View>
    )
  }

  const handleBack = () => {
    Taro.navigateBack()
  }

  const handleShare = () => {
    Taro.showToast({ title: '分享功能开发中', icon: 'none' })
  }

  const handleFav = () => {
    setIsFav(!isFav)
    Taro.showToast({
      title: isFav ? '已取消收藏' : '收藏成功',
      icon: 'none'
    })
  }

  const handleAdopt = () => {
    Taro.navigateTo({ url: `/pages/adopt-confirm/index?id=${land.landId}` })
  }

  const handleFarmClick = () => {
    if (farm) {
      Taro.navigateTo({ url: `/pages/farm-home/index?id=${farm.farmId}` })
    }
  }

  const handleViewAllReviews = () => {
    Taro.showToast({ title: '全部评价开发中', icon: 'none' })
  }

  return (
    <View className={styles.landDetailPage}>
      {/* 顶部悬浮按钮 */}
      <View className={styles.topActions}>
        <View className={styles.actionBtn} onClick={handleBack}>
          <Text>←</Text>
        </View>
        <View style={{ display: 'flex', gap: '16rpx' }}>
          <View className={styles.actionBtn} onClick={handleShare}>
            <Text>↗</Text>
          </View>
          <View className={styles.actionBtn} onClick={handleFav}>
            <Text>{isFav ? '❤️' : '🤍'}</Text>
          </View>
        </View>
      </View>

      {/* 图片轮播 */}
      <Swiper
        className={styles.imageSwiper}
        circular
        indicatorDots
        indicatorColor="rgba(255,255,255,0.4)"
        indicatorActiveColor="#FFFFFF"
      >
        {land.images.map((img, index) => (
          <SwiperItem key={index}>
            <Image className={styles.swiperImage} src={img} mode="aspectFill" />
          </SwiperItem>
        ))}
      </Swiper>

      {/* 基本信息 */}
      <View className={styles.infoSection}>
        <Text className={styles.landName}>{land.name}</Text>
        <View className={styles.tagRow}>
          {land.tags.map((tag, index) => (
            <Text
              key={index}
              className={classnames(
                styles.landTag,
                tag === '热' ? styles.tagHot : tag === '新' ? styles.tagNew : styles.tagDefault
              )}
            >
              {tag}
            </Text>
          ))}
        </View>
        <View className={styles.locationRow}>
          <Text style={{ fontSize: '28rpx' }}>📍</Text>
          <Text className={styles.locationText}>{land.address}</Text>
        </View>
        <View className={styles.infoGrid}>
          <View className={styles.infoItem}>
            <Text className={styles.infoLabel}>面积</Text>
            <Text className={styles.infoValue}>{land.area}㎡</Text>
          </View>
          <View className={styles.infoItem}>
            <Text className={styles.infoLabel}>土壤</Text>
            <Text className={styles.infoValue}>{land.soilType}</Text>
          </View>
          <View className={styles.infoItem}>
            <Text className={styles.infoLabel}>作物</Text>
            <Text className={styles.infoValue}>{land.cropName}</Text>
          </View>
        </View>
      </View>

      {/* 价格与状态 */}
      <View className={styles.priceSection}>
        <View className={styles.priceRow}>
          <Text className={styles.priceValue}>¥{land.price}</Text>
          <Text className={styles.priceUnit}>{land.unit}</Text>
        </View>
        <View className={styles.progressInfo}>
          <Text className={styles.progressLabel}>认养进度</Text>
          <Text className={styles.progressValue}>{land.adoptedSlots}/{land.totalSlots}份</Text>
        </View>
        <View className={styles.progressBar}>
          <View className={styles.progressFill} style={{ width: `${progress}%` }} />
        </View>
        <View className={styles.statusBadge}>
          <Text className={styles.statusText}>
            {land.status === 'full' ? '已满员' :
             land.status === 'almost_full' ? '即将满员' :
             land.status === 'almost_mature' ? '即将成熟' : '可认养'}
          </Text>
        </View>
      </View>

      {/* 农场主信息 */}
      {farm && (
        <View className={styles.farmSection} onClick={handleFarmClick}>
          <Image className={styles.farmAvatar} src={farm.avatar} mode="aspectFill" />
          <View className={styles.farmInfo}>
            <Text className={styles.farmName}>{farm.name}</Text>
            <View className={styles.farmMeta}>
              <Text className={styles.farmMetaText}>入驻{farm.joinTime.split('-')[0]}年</Text>
              <Text className={styles.farmMetaText}>回复率{farm.replyRate}%</Text>
              <Text className={styles.farmMetaText}>⭐{farm.rating}</Text>
            </View>
          </View>
          <Text className={styles.farmArrow}>›</Text>
        </View>
      )}

      {/* 种植日历 */}
      <View className={styles.calendarSection}>
        <Text className={styles.sectionTitle}>种植日历</Text>
        <View className={styles.timeline}>
          <View className={styles.timelineLine} />
          {stageOrder.map((stage, index) => (
            <View key={stage} className={styles.timelineItem}>
              <View
                className={classnames(
                  styles.timelineDot,
                  index < currentStageIndex && styles.done,
                  index === currentStageIndex && styles.active
                )}
              />
              <View className={styles.timelineContent}>
                <Text className={styles.timelineStage}>{stageLabels[stage]}</Text>
                <Text className={styles.timelineDesc}>
                  {index === currentStageIndex ? '当前阶段' :
                   index < currentStageIndex ? '已完成' : '待进行'}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* 认养权益 */}
      <View className={styles.benefitsSection}>
        <Text className={styles.sectionTitle}>认养权益</Text>
        <View className={styles.benefitList}>
          {land.benefits.map((benefit, index) => (
            <View key={index} className={styles.benefitItem}>
              <View className={styles.benefitIcon}>
                <Text>✓</Text>
              </View>
              <Text className={styles.benefitText}>{benefit}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* 地块描述 */}
      <View className={styles.descSection}>
        <Text className={styles.sectionTitle}>地块介绍</Text>
        <Text className={styles.descText}>{land.description}</Text>
      </View>

      {/* 用户评价 */}
      <View className={styles.reviewSection}>
        <Text className={styles.sectionTitle}>
          用户评价 ({land.reviewCount})
        </Text>
        {mockReviews.slice(0, 3).map(review => (
          <View key={review.reviewId} className={styles.reviewItem}>
            <Image className={styles.reviewAvatar} src={review.userAvatar} mode="aspectFill" />
            <View className={styles.reviewContent}>
              <View className={styles.reviewHeader}>
                <Text className={styles.reviewName}>{review.userName}</Text>
                <Text className={styles.reviewRating}>{'⭐'.repeat(review.rating)}</Text>
              </View>
              <Text className={styles.reviewText}>{review.content}</Text>
              {review.images.length > 0 && (
                <View className={styles.reviewImages}>
                  {review.images.map((img, idx) => (
                    <Image key={idx} className={styles.reviewImage} src={img} mode="aspectFill" />
                  ))}
                </View>
              )}
              <Text className={styles.reviewTime}>{review.createTime}</Text>
            </View>
          </View>
        ))}
        <View className={styles.viewAllReviews} onClick={handleViewAllReviews}>
          <Text>查看全部评价 ›</Text>
        </View>
      </View>

      {/* 底部操作栏 */}
      <View className={styles.bottomBar}>
        <View className={styles.favBtn} onClick={handleFav}>
          <Text className={styles.favIcon}>{isFav ? '❤️' : '🤍'}</Text>
          <Text className={styles.favText}>收藏</Text>
        </View>
        <View className={styles.adoptBtn} onClick={handleAdopt}>
          <Text className={styles.adoptBtnText}>立即认养</Text>
          <Text className={styles.adoptBtnPrice}>¥{land.price}{land.unit.replace('元', '')}</Text>
        </View>
      </View>
    </View>
  )
}

export default LandDetailPage
