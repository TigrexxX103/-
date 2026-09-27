import React from 'react'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import classnames from 'classnames'
import { mockUser } from '@/data/user'
import { mockOrders } from '@/data/orders'
import { mockHarvests } from '@/data/harvests'
import styles from './index.module.scss'

interface EntryItem {
  id: string
  icon: string
  text: string
  iconClass: string
  path: string
}

const entryItems: EntryItem[] = [
  { id: 'lands', icon: '🌱', text: '我的地块', iconClass: '', path: '/pages/my-lands/index' },
  { id: 'orders', icon: '📋', text: '我的订单', iconClass: styles.entryIconOrder, path: '/pages/order-list/index' },
  { id: 'activities', icon: '🎉', text: '我的活动', iconClass: styles.entryIconActivity, path: '/pages/my-activities/index' },
  { id: 'points', icon: '🎁', text: '积分商城', iconClass: styles.entryIconPoints, path: '/pages/points-detail/index' },
  { id: 'favorites', icon: '❤️', text: '收藏夹', iconClass: styles.entryIconFav, path: '/pages/order-list/index' },
  { id: 'diary', icon: '📝', text: '我的日记', iconClass: styles.entryIconDiary, path: '/pages/home/index' },
  { id: 'farm', icon: '🏡', text: '农场入驻', iconClass: styles.entryIconFarm, path: '/pages/farm-home/index' },
  { id: 'settings', icon: '⚙️', text: '设置', iconClass: styles.entryIconSettings, path: '/pages/settings/index' }
]

const ProfilePage: React.FC = () => {
  const pendingHarvestCount = mockHarvests.filter(h => h.status === 'pending').length

  const handleEntryClick = (entry: EntryItem) => {
    if (entry.path.includes('/pages/home/index') ||
        entry.path.includes('/pages/discover/index') ||
        entry.path.includes('/pages/adopt/index') ||
        entry.path.includes('/pages/message/index') ||
        entry.path.includes('/pages/profile/index')) {
      Taro.switchTab({ url: entry.path }).catch(() => {})
    } else {
      Taro.navigateTo({ url: entry.path })
    }
  }

  const handleStatClick = (type: 'lands' | 'harvest' | 'points') => {
    const paths = {
      lands: '/pages/my-lands/index',
      harvest: '/pages/harvest/index',
      points: '/pages/points-detail/index'
    }
    Taro.navigateTo({ url: paths[type] })
  }

  const handleEditProfile = () => {
    Taro.navigateTo({ url: '/pages/settings/index' })
  }

  const handleRecentClick = () => {
    Taro.navigateTo({ url: '/pages/harvest/index' })
  }

  return (
    <View className={styles.profilePage}>
      {/* 用户信息区 */}
      <View className={styles.userSection}>
        <View className={styles.userInfo}>
          <Image
            className={styles.userAvatar}
            src={mockUser.avatar}
            mode="aspectFill"
          />
          <View className={styles.userDetail}>
            <View className={styles.userNameRow}>
              <Text className={styles.userName}>{mockUser.nickname}</Text>
              {mockUser.isCertified && (
                <View className={styles.certBadge}>
                  <Text className={styles.certText}>已认证地主</Text>
                </View>
              )}
            </View>
            <Text className={styles.userBio}>{mockUser.bio}</Text>
          </View>
          <View className={styles.editBtn} onClick={handleEditProfile}>
            <Text className={styles.editText}>编辑</Text>
          </View>
        </View>
      </View>

      {/* 数据统计 */}
      <View className={styles.statsCard}>
        <View className={styles.statItem} onClick={() => handleStatClick('lands')}>
          <Text className={styles.statValue}>{mockUser.landCount}</Text>
          <Text className={styles.statLabel}>我的地块</Text>
        </View>
        <View className={styles.statItem} onClick={() => handleStatClick('harvest')}>
          <Text className={styles.statValue}>{mockUser.harvestCount}</Text>
          <Text className={styles.statLabel}>收获次数</Text>
        </View>
        <View className={styles.statItem} onClick={() => handleStatClick('points')}>
          <Text className={styles.statValue}>{mockUser.points}</Text>
          <Text className={styles.statLabel}>积分</Text>
        </View>
      </View>

      {/* 核心入口网格 */}
      <View className={styles.entryGrid}>
        {entryItems.map(entry => (
          <View
            key={entry.id}
            className={styles.entryItem}
            onClick={() => handleEntryClick(entry)}
          >
            <View className={classnames(styles.entryIcon, entry.iconClass)}>
              <Text>{entry.icon}</Text>
            </View>
            <Text className={styles.entryText}>{entry.text}</Text>
          </View>
        ))}
      </View>

      {/* 最近动态 */}
      <View className={styles.recentSection} onClick={handleRecentClick}>
        <View className={styles.recentHeader}>
          <Text className={styles.recentTitle}>最近动态</Text>
          <Text className={styles.recentMore}>查看全部 ›</Text>
        </View>
        <View className={styles.recentItem}>
          <Text className={styles.recentIcon}>🍅</Text>
          <View className={styles.recentContent}>
            <Text className={styles.recentText}>
              {pendingHarvestCount > 0
                ? `你有${pendingHarvestCount}次收获待处理，请选择邮寄或自提`
                : '你的小番茄第3次施肥已完成，长势喜人'}
            </Text>
          </View>
          <Text className={styles.recentTime}>10分钟前</Text>
        </View>
      </View>
    </View>
  )
}

export default ProfilePage
