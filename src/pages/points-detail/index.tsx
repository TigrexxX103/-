import React from 'react'
import { View, Text } from '@tarojs/components'
import { mockPointsRecords } from '@/data/points'
import { mockUser } from '@/data/user'
import { PointsRecord } from '@/types'
import styles from './index.module.scss'

const getRecordIcon = (description: string): string => {
  if (description.includes('签到')) return '📅'
  if (description.includes('浇水')) return '💧'
  if (description.includes('施肥')) return '🌾'
  if (description.includes('分享')) return '🔗'
  if (description.includes('打卡')) return '📍'
  if (description.includes('邀请')) return '👥'
  if (description.includes('兑换')) return '🎁'
  if (description.includes('资料')) return '📝'
  return '⭐'
}

const PointsDetailPage: React.FC = () => {
  return (
    <View className={styles.pointsPage}>
      {/* 积分头部 */}
      <View className={styles.pointsHeader}>
        <Text className={styles.pointsLabel}>我的积分</Text>
        <Text className={styles.pointsValue}>{mockUser.points}</Text>
        <Text className={styles.pointsTip}>积分可兑换农产品、体验券、周边文创</Text>
      </View>

      {/* 积分记录列表 */}
      <View className={styles.recordList}>
        {mockPointsRecords.length === 0 ? (
          <View className={styles.emptyState}>
            <Text className={styles.emptyIcon}>🎁</Text>
            <Text className={styles.emptyText}>暂无积分记录</Text>
          </View>
        ) : (
          mockPointsRecords.map((record: PointsRecord) => (
            <View key={record.recordId} className={styles.recordItem}>
              <View className={styles.recordIcon + ' ' + (record.type === 'earn' ? styles.earnIcon : styles.spendIcon)}>
                <Text>{getRecordIcon(record.description)}</Text>
              </View>
              <View className={styles.recordInfo}>
                <Text className={styles.recordDesc}>{record.description}</Text>
                <Text className={styles.recordTime}>{record.createTime}</Text>
              </View>
              <Text className={styles.recordAmount + ' ' + (record.type === 'earn' ? styles.amountEarn : styles.amountSpend)}>
                {record.type === 'earn' ? '+' : '-'}{record.amount}
              </Text>
            </View>
          ))
        )}
      </View>
    </View>
  )
}

export default PointsDetailPage
