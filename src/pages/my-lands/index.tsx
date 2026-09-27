import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { mockOrders } from '@/data/orders'
import { getLandById } from '@/data/lands'
import { GrowthStage } from '@/types'
import styles from './index.module.scss'

const stageLabels: Record<GrowthStage, string> = {
  seed: '播种期',
  seedling: '幼苗期',
  flowering: '开花期',
  fruiting: '结果期',
  harvest: '收获期'
}

const MyLandsPage: React.FC = () => {
  const handleMonitor = (landId: string) => {
    Taro.navigateTo({ url: `/pages/monitor/index?id=${landId}` })
  }

  const handleAdoptMore = () => {
    Taro.switchTab({ url: '/pages/adopt/index' })
  }

  return (
    <View className={styles.myLandsPage}>
      {mockOrders.length === 0 ? (
        <View className={styles.emptyState}>
          <Text className={styles.emptyIcon}>🌱</Text>
          <Text className={styles.emptyText}>你还没有认养任何地块</Text>
          <View className={styles.emptyBtn} onClick={handleAdoptMore}>
            <Text className={styles.emptyBtnText}>去认养一块地</Text>
          </View>
        </View>
      ) : (
        <View className={styles.landList}>
          {mockOrders.map(order => {
            const land = getLandById(order.landId)
            if (!land) return null
            return (
              <View key={order.orderId} className={styles.landCard}>
                <View className={styles.landImageWrap}>
                  <Image className={styles.landImage} src={land.coverImage} mode="aspectFill" />
                  <View className={styles.stageBadge}>
                    <Text className={styles.stageBadgeText}>
                      {stageLabels[land.currentStage]}
                    </Text>
                  </View>
                </View>
                <View className={styles.landContent}>
                  <Text className={styles.landName}>{land.name}</Text>
                  <Text className={styles.landCrop}>种植作物：{land.cropName}</Text>
                  <View className={styles.landMeta}>
                    <View className={styles.landMetaItem}>
                      <Text className={styles.landMetaLabel}>认养开始</Text>
                      <Text className={styles.landMetaValue}>{order.adoptStartTime}</Text>
                    </View>
                    <View className={styles.landMetaItem}>
                      <Text className={styles.landMetaLabel}>认养结束</Text>
                      <Text className={styles.landMetaValue}>{order.adoptEndTime}</Text>
                    </View>
                    <View
                      className={styles.monitorBtn}
                      onClick={() => handleMonitor(order.landId)}
                    >
                      <Text className={styles.monitorBtnText}>云监工</Text>
                    </View>
                  </View>
                </View>
              </View>
            )
          })}
        </View>
      )}
    </View>
  )
}

export default MyLandsPage
