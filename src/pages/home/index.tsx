import React, { useState, useMemo } from 'react'
import { View, Text, Image, Swiper, SwiperItem, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import classnames from 'classnames'
import { mockBanners } from '@/data/banners'
import { mockLands } from '@/data/lands'
import { mockDiaries } from '@/data/diaries'
import { mockUser } from '@/data/user'
import { Land } from '@/types'
import LandCard from '@/components/LandCard'
import DiaryCard from '@/components/DiaryCard'
import styles from './index.module.scss'

interface QuickEntry {
  id: string
  icon: string
  text: string
  iconClass: string
  path: string
}

const quickEntries: QuickEntry[] = [
  { id: 'hot', icon: '🔥', text: '热门地块', iconClass: styles.quickIconHot, path: '/pages/adopt/index' },
  { id: 'limit', icon: '⏰', text: '限时认养', iconClass: styles.quickIconLimit, path: '/pages/adopt/index' },
  { id: 'nearby', icon: '📍', text: '附近农场', iconClass: styles.quickIconNearby, path: '/pages/adopt/index' },
  { id: 'points', icon: '🎁', text: '积分商城', iconClass: styles.quickIconPoints, path: '/pages/discover/index' }
]

const HomePage: React.FC = () => {
  const [diaries, setDiaries] = useState(mockDiaries)

  const recommendLands = useMemo(() => {
    return mockLands.filter(land => land.status !== 'full').slice(0, 5)
  }, [])

  const handleQuickEntry = (entry: QuickEntry) => {
    Taro.switchTab({ url: entry.path }).catch(() => {
      Taro.navigateTo({ url: entry.path })
    })
  }

  const handleBannerClick = (link?: string) => {
    if (!link) return
    if (link.includes('/pages/adopt/index') || link.includes('/pages/discover/index')) {
      Taro.switchTab({ url: link }).catch(() => {})
    } else {
      Taro.navigateTo({ url: link })
    }
  }

  const handleLandClick = (land: Land) => {
    Taro.navigateTo({ url: `/pages/land-detail/index?id=${land.landId}` })
  }

  const handleLike = (diaryId: string) => {
    setDiaries(prev => prev.map(d => {
      if (d.diaryId === diaryId) {
        return {
          ...d,
          isLiked: !d.isLiked,
          likeCount: d.isLiked ? d.likeCount - 1 : d.likeCount + 1
        }
      }
      return d
    }))
  }

  const handleSearch = () => {
    Taro.showToast({ title: '搜索功能开发中', icon: 'none' })
  }

  return (
    <View className={styles.homePage}>
      {/* 顶部状态栏 */}
      <View className={styles.topBar}>
        <View className={styles.weatherInfo}>
          <Text className={styles.weatherText}>☀️ 杭州 26°C</Text>
        </View>
        <Text className={styles.searchIcon} onClick={handleSearch}>🔍</Text>
      </View>

      {/* 用户欢迎语 */}
      <View className={styles.welcomeSection}>
        <Text className={styles.welcomeText}>🌱 你好，{mockUser.nickname}</Text>
        <Text className={styles.welcomeSubText}>今天想种点什么？</Text>
      </View>

      {/* 快捷入口 */}
      <View className={styles.quickEntry}>
        {quickEntries.map(entry => (
          <View
            key={entry.id}
            className={styles.quickItem}
            onClick={() => handleQuickEntry(entry)}
          >
            <View className={classnames(styles.quickIcon, entry.iconClass)}>
              <Text>{entry.icon}</Text>
            </View>
            <Text className={styles.quickText}>{entry.text}</Text>
          </View>
        ))}
      </View>

      {/* 轮播Banner */}
      <View className={styles.bannerSection}>
        <Swiper
          className={styles.bannerSwiper}
          autoplay
          circular
          interval={4000}
          duration={500}
          indicatorDots
          indicatorColor="rgba(255,255,255,0.4)"
          indicatorActiveColor="#FFFFFF"
        >
          {mockBanners.map(banner => (
            <SwiperItem
              key={banner.bannerId}
              onClick={() => handleBannerClick(banner.link)}
            >
              <View className={styles.bannerItem}>
                <Image
                  className={styles.bannerImage}
                  src={banner.image}
                  mode="aspectFill"
                />
                <Text className={styles.bannerTitle}>{banner.title}</Text>
              </View>
            </SwiperItem>
          ))}
        </Swiper>
      </View>

      {/* 推荐地块 */}
      <View className={styles.sectionHeader}>
        <Text className={styles.sectionTitle}>推荐地块</Text>
        <Text
          className={styles.sectionMore}
          onClick={() => Taro.switchTab({ url: '/pages/adopt/index' })}
        >
          查看全部 ›
        </Text>
      </View>
      <ScrollView className={styles.landScroll} scrollX enhanced showScrollbar={false}>
        {recommendLands.map(land => (
          <View key={land.landId} className={styles.landScrollItem}>
            <LandCard land={land} onClick={handleLandClick} />
          </View>
        ))}
      </ScrollView>

      {/* 生长日记Feed */}
      <View className={styles.sectionHeader}>
        <Text className={styles.sectionTitle}>生长日记</Text>
        <Text className={styles.sectionMore}>更多 ›</Text>
      </View>
      <View className={styles.diarySection}>
        <View className={styles.diaryList}>
          {diaries.map(diary => (
            <DiaryCard
              key={diary.diaryId}
              diary={diary}
              onLike={() => handleLike(diary.diaryId)}
            />
          ))}
        </View>
      </View>
    </View>
  )
}

export default HomePage
