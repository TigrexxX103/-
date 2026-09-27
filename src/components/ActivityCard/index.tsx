import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import { Activity } from '@/types'
import styles from './index.module.scss'

interface ActivityCardProps {
  activity: Activity
  onClick?: (activity: Activity) => void
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onClick }) => {
  const handleClick = () => {
    onClick?.(activity)
  }

  return (
    <View className={styles.activityCard} onClick={handleClick}>
      <View className={styles.imageWrap}>
        <Image
          className={styles.coverImage}
          src={activity.coverImage}
          mode="aspectFill"
        />
        <View className={styles.priceTag}>
          <Text className={styles.priceText}>
            {activity.price === 0 ? '免费' : `¥${activity.price}`}
          </Text>
        </View>
      </View>
      <View className={styles.content}>
        <Text className={styles.title}>{activity.title}</Text>
        <View className={styles.infoRow}>
          <Text className={styles.infoIcon}>📅</Text>
          <Text className={styles.infoText}>{activity.startTime.split(' ')[0]}</Text>
        </View>
        <View className={styles.infoRow}>
          <Text className={styles.infoIcon}>📍</Text>
          <Text className={styles.infoText}>{activity.location}</Text>
        </View>
        <View className={styles.footer}>
          <View className={styles.tagList}>
            {activity.tags.slice(0, 2).map((tag, index) => (
              <View key={index} className={styles.tag}>
                <Text className={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
          <Text className={styles.quota}>
            {activity.bookedCount}/{activity.totalQuota}人
          </Text>
        </View>
      </View>
    </View>
  )
}

export default ActivityCard
