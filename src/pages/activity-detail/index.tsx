import React, { useMemo } from 'react'
import { View, Text, Image } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { mockActivities } from '@/data/activities'
import styles from './index.module.scss'

const ActivityDetailPage: React.FC = () => {
  const router = useRouter()
  const activityId = router.params.id || 'act_001'

  const activity = useMemo(() =>
    mockActivities.find(a => a.activityId === activityId),
    [activityId]
  )

  if (!activity) {
    return (
      <View style={{ padding: '100rpx', textAlign: 'center' }}>
        <Text>活动不存在</Text>
      </View>
    )
  }

  const progress = Math.round((activity.bookedCount / activity.totalQuota) * 100)

  const handleBook = () => {
    Taro.navigateTo({ url: `/pages/activity-booking/index?id=${activity.activityId}` })
  }

  return (
    <View className={styles.activityDetailPage}>
      <Image className={styles.activityImage} src={activity.coverImage} mode="aspectFill" />

      <View className={styles.activityInfo}>
        <Text className={styles.activityTitle}>{activity.title}</Text>
        <View className={styles.tagRow}>
          {activity.tags.map((tag, index) => (
            <Text key={index} className={styles.activityTag}>{tag}</Text>
          ))}
        </View>
        <View className={styles.metaList}>
          <View className={styles.metaItem}>
            <Text className={styles.metaIcon}>📅</Text>
            <Text className={styles.metaText}>{activity.startTime}</Text>
          </View>
          <View className={styles.metaItem}>
            <Text className={styles.metaIcon}>📍</Text>
            <Text className={styles.metaText}>{activity.location}</Text>
          </View>
          <View className={styles.metaItem}>
            <Text className={styles.metaIcon}>🏡</Text>
            <Text className={styles.metaText}>{activity.farmName}</Text>
          </View>
        </View>
      </View>

      <View className={styles.section}>
        <Text className={styles.sectionTitle}>活动介绍</Text>
        <Text className={styles.sectionContent}>{activity.description}</Text>
        <View className={styles.quotaWrap}>
          <Text className={styles.quotaLabel}>
            报名进度：{activity.bookedCount}/{activity.totalQuota}人
          </Text>
          <View className={styles.quotaBar}>
            <View className={styles.quotaFill} style={{ width: `${progress}%` }} />
          </View>
        </View>
      </View>

      <View className={styles.bottomBar}>
        <View className={styles.priceInfo}>
          <Text className={styles.priceLabel}>活动费用</Text>
          <Text className={styles.priceValue}>
            {activity.price === 0 ? '免费' : `¥${activity.price}`}
          </Text>
        </View>
        <View className={styles.bookBtn} onClick={handleBook}>
          <Text className={styles.bookBtnText}>立即报名</Text>
        </View>
      </View>
    </View>
  )
}

export default ActivityDetailPage
