import React, { useState, useMemo } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import classnames from 'classnames'
import { mockHarvests } from '@/data/harvests'
import { HarvestRecord } from '@/types'
import styles from './index.module.scss'

const HarvestPage: React.FC = () => {
  const [harvests, setHarvests] = useState(mockHarvests)

  const pendingCount = useMemo(() => {
    return harvests.filter(h => h.status === 'pending').length
  }, [harvests])

  const totalHarvest = useMemo(() => {
    return harvests.length
  }, [harvests])

  const totalWeight = useMemo(() => {
    return harvests.reduce((sum, h) => {
      const weight = h.unit === '根' ? h.weight * 0.3 : h.weight
      return sum + weight
    }, 0).toFixed(1)
  }, [harvests])

  const getStatusText = (status: HarvestRecord['status']) => {
    const map = { pending: '待处理', mailed: '已邮寄', pickup: '已自提' }
    return map[status]
  }

  const getStatusClass = (status: HarvestRecord['status']) => {
    const map = {
      pending: styles.statusPending,
      mailed: styles.statusMailed,
      pickup: styles.statusPickup
    }
    return map[status]
  }

  const handleProcessHarvest = (harvest: HarvestRecord) => {
    Taro.showActionSheet({
      itemList: ['邮寄到家', '到店自提'],
      success: (res) => {
        const newStatus = res.tapIndex === 0 ? 'mailed' : 'pickup'
        setHarvests(prev => prev.map(h =>
          h.harvestId === harvest.harvestId
            ? { ...h, status: newStatus as HarvestRecord['status'], processTime: new Date().toISOString() }
            : h
        ))
        Taro.showToast({
          title: newStatus === 'mailed' ? '已安排邮寄' : '已选择自提',
          icon: 'success'
        })
      }
    })
  }

  const handleTracking = (harvest: HarvestRecord) => {
    if (harvest.trackingNo) {
      Taro.showModal({
        title: '快递单号',
        content: harvest.trackingNo,
        showCancel: false
      })
    }
  }

  return (
    <View className={styles.harvestPage}>
      {/* 待处理提示 */}
      {pendingCount > 0 && (
        <View className={styles.pendingBanner}>
          <View className={styles.pendingIcon}>
            <Text>📦</Text>
          </View>
          <View className={styles.pendingContent}>
            <Text className={styles.pendingTitle}>你有{pendingCount}次收获待处理</Text>
            <Text className={styles.pendingDesc}>请选择邮寄或自提方式</Text>
          </View>
          <View className={styles.pendingBtn}>
            <Text className={styles.pendingBtnText}>去处理</Text>
          </View>
        </View>
      )}

      {/* 收获统计 */}
      <View className={styles.statsSection}>
        <View className={styles.statCard}>
          <Text className={styles.statValue}>{totalHarvest}</Text>
          <Text className={styles.statLabel}>累计收获次数</Text>
        </View>
        <View className={styles.statCard}>
          <Text className={styles.statValue}>{totalWeight}</Text>
          <Text className={styles.statLabel}>累计重量（斤）</Text>
        </View>
      </View>

      {/* 收获列表 */}
      <View className={styles.harvestList}>
        {harvests.length === 0 ? (
          <View className={styles.emptyState}>
            <Text className={styles.emptyIcon}>🌾</Text>
            <Text className={styles.emptyText}>暂无收获记录</Text>
          </View>
        ) : (
          harvests.map(harvest => (
            <View key={harvest.harvestId} className={styles.harvestItem}>
              <View className={styles.harvestHeader}>
                <Text className={styles.harvestCrop}>{harvest.cropName}</Text>
                <Text className={classnames(styles.harvestStatus, getStatusClass(harvest.status))}>
                  {getStatusText(harvest.status)}
                </Text>
              </View>
              <View className={styles.harvestInfo}>
                <View className={styles.harvestInfoItem}>
                  <Text className={styles.harvestInfoIcon}>⚖️</Text>
                  <Text className={styles.harvestInfoText}>{harvest.weight}{harvest.unit}</Text>
                </View>
                <View className={styles.harvestInfoItem}>
                  <Text className={styles.harvestInfoIcon}>📅</Text>
                  <Text className={styles.harvestInfoText}>{harvest.harvestDate}</Text>
                </View>
                {harvest.trackingNo && (
                  <View
                    className={styles.harvestInfoItem}
                    onClick={() => handleTracking(harvest)}
                  >
                    <Text className={styles.harvestInfoIcon}>🔍</Text>
                    <Text className={styles.harvestInfoText}>查看物流</Text>
                  </View>
                )}
              </View>
              {harvest.status === 'pending' && (
                <View className={styles.harvestAction}>
                  <View
                    className={styles.harvestActionBtn}
                    onClick={() => handleProcessHarvest(harvest)}
                  >
                    <Text className={styles.harvestActionText}>选择配送方式</Text>
                  </View>
                </View>
              )}
            </View>
          ))
        )}
      </View>
    </View>
  )
}

export default HarvestPage
