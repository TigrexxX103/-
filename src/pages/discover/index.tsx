import React, { useState, useMemo } from 'react'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import classnames from 'classnames'
import { mockActivities } from '@/data/activities'
import { Activity } from '@/types'
import { contentImages, avatarImages } from '@/data/image-map'
import styles from './index.module.scss'

interface ContentItem {
  id: string
  type: 'story' | 'activity' | 'knowledge' | 'share'
  title: string
  description: string
  image: string
  publisher: string
  publisherAvatar: string
  createTime: string
  likes: number
  views: number
  tag?: string
  activity?: Activity
}

const categories = [
  { id: 'all', name: '全部' },
  { id: 'story', name: '农场故事' },
  { id: 'activity', name: '农事活动' },
  { id: 'knowledge', name: '知识科普' },
  { id: 'share', name: '用户分享' }
]

const mockContents: ContentItem[] = [
  {
    id: 'content_001',
    type: 'story',
    title: '从程序员到农场主：我的有机农业之路',
    description: '放弃互联网高薪工作，来到径山脚下创办生态农场，这5年我学到了什么...',
    image: contentImages.story1,
    publisher: '绿野生态农场',
    publisherAvatar: avatarImages.farmer1,
    createTime: '2026-08-28',
    likes: 328,
    views: 2156,
    tag: '农场故事'
  },
  {
    id: 'content_002',
    type: 'activity',
    title: '周末亲子采摘体验营',
    description: '带孩子来农场体验采摘乐趣！活动包含草莓/番茄自由采摘、小动物喂养、农家午餐...',
    image: contentImages.activity1,
    publisher: '绿野生态农场',
    publisherAvatar: avatarImages.farmer1,
    createTime: '2026-08-27',
    likes: 156,
    views: 1890,
    tag: '农事活动',
    activity: mockActivities[0]
  },
  {
    id: 'content_003',
    type: 'knowledge',
    title: '立秋节气知识：农事要点与养生指南',
    description: '立秋是秋季的第一个节气，此时农作物进入关键生长期，农民需要注意...',
    image: contentImages.knowledge1,
    publisher: '农业科普',
    publisherAvatar: avatarImages.farmer2,
    createTime: '2026-08-26',
    likes: 89,
    views: 1234,
    tag: '知识科普'
  },
  {
    id: 'content_004',
    type: 'share',
    title: '带娃农场一日游，孩子开心到不想回家',
    description: '周末带女儿来参加农场体验日，喂了小羊、捡了鸡蛋、种了菜，还吃了农家饭...',
    image: contentImages.share1,
    publisher: '周末带娃党',
    publisherAvatar: avatarImages.user2,
    createTime: '2026-08-25',
    likes: 234,
    views: 3456,
    tag: '用户分享'
  },
  {
    id: 'content_005',
    type: 'story',
    title: '稻香田园：太湖畔的古法农耕传承',
    description: '坚持不使用化肥农药，一年只种一季稻，我们用时间换品质...',
    image: contentImages.story2,
    publisher: '稻香田园农场',
    publisherAvatar: avatarImages.farmer2,
    createTime: '2026-08-24',
    likes: 178,
    views: 1678,
    tag: '农场故事'
  },
  {
    id: 'content_006',
    type: 'activity',
    title: '向日葵摄影大赛报名开启',
    description: '在向日葵花海中捕捉最美瞬间！专业摄影师现场指导...',
    image: contentImages.activity2,
    publisher: '花田牧歌农场',
    publisherAvatar: avatarImages.farmer3,
    createTime: '2026-08-23',
    likes: 267,
    views: 2890,
    tag: '农事活动',
    activity: mockActivities[1]
  },
  {
    id: 'content_007',
    type: 'knowledge',
    title: '番茄生长周期全解析：从种子到收获',
    description: '番茄的生长周期大约90-120天，分为发芽期、幼苗期、开花期、结果期...',
    image: contentImages.knowledge2,
    publisher: '种植小课堂',
    publisherAvatar: avatarImages.farmer1,
    createTime: '2026-08-22',
    likes: 145,
    views: 2345,
    tag: '知识科普'
  },
  {
    id: 'content_008',
    type: 'share',
    title: '退休后的田园生活，每天都很充实',
    description: '退休后认养了一块地，每天早上看看庄稼，和老农聊天，比在家看电视有意思多了...',
    image: contentImages.share2,
    publisher: '银发族老张',
    publisherAvatar: avatarImages.user4,
    createTime: '2026-08-21',
    likes: 312,
    views: 4567,
    tag: '用户分享'
  },
  {
    id: 'content_009',
    type: 'story',
    title: '花田牧歌：把花海变成生活方式',
    description: '从花卉种植到花艺体验，我们希望让更多人感受到花的美好...',
    image: contentImages.story3,
    publisher: '花田牧歌农场',
    publisherAvatar: avatarImages.farmer3,
    createTime: '2026-08-20',
    likes: 198,
    views: 2234,
    tag: '农场故事'
  },
  {
    id: 'content_010',
    type: 'activity',
    title: '稻田星空露营招募中',
    description: '在稻田边露营，看星空，听蛙鸣，体验不一样的乡村夜晚...',
    image: contentImages.activity3,
    publisher: '稻香田园农场',
    publisherAvatar: avatarImages.farmer2,
    createTime: '2026-08-19',
    likes: 289,
    views: 3123,
    tag: '农事活动',
    activity: mockActivities[5]
  }
]

const DiscoverPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredContents = useMemo(() => {
    if (activeCategory === 'all') return mockContents
    return mockContents.filter(item => item.type === activeCategory)
  }, [activeCategory])

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
  }

  const handleContentClick = (item: ContentItem) => {
    if (item.type === 'activity' && item.activity) {
      Taro.navigateTo({ url: `/pages/activity-detail/index?id=${item.activity.activityId}` })
    } else {
      Taro.showToast({ title: '详情页开发中', icon: 'none' })
    }
  }

  const handleCalendarClick = () => {
    Taro.showToast({ title: '活动日历开发中', icon: 'none' })
  }

  return (
    <View className={styles.discoverPage}>
      {/* 分类Tab */}
      <ScrollView className={styles.categoryTabs} scrollX enhanced showScrollbar={false}>
        {categories.map(cat => (
          <View
            key={cat.id}
            className={classnames(styles.categoryTab, activeCategory === cat.id && styles.active)}
            onClick={() => handleCategoryChange(cat.id)}
          >
            <Text>{cat.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* 活动日历入口 */}
      <View className={styles.calendarEntry} onClick={handleCalendarClick}>
        <View className={styles.calendarIcon}>
          <Text>📅</Text>
        </View>
        <Text className={styles.calendarText}>近期活动日历</Text>
        <Text className={styles.calendarArrow}>›</Text>
      </View>

      {/* 内容列表 */}
      <View className={styles.contentList}>
        {filteredContents.length === 0 ? (
          <View className={styles.emptyState}>
            <Text className={styles.emptyIcon}>📭</Text>
            <Text className={styles.emptyText}>暂无内容</Text>
          </View>
        ) : (
          filteredContents.map(item => (
            <View
              key={item.id}
              className={styles.contentCard}
              onClick={() => handleContentClick(item)}
            >
              <Image
                className={styles.contentImage}
                src={item.image}
                mode="aspectFill"
              />
              <View className={styles.contentBody}>
                <Text className={styles.contentTitle}>{item.title}</Text>
                <Text className={styles.contentDesc}>{item.description}</Text>
                <View className={styles.contentFooter}>
                  <View className={styles.contentMeta}>
                    <View className={styles.metaItem}>
                      <Text className={styles.metaIcon}>👤</Text>
                      <Text className={styles.metaText}>{item.publisher}</Text>
                    </View>
                    <View className={styles.metaItem}>
                      <Text className={styles.metaIcon}>❤️</Text>
                      <Text className={styles.metaText}>{item.likes}</Text>
                    </View>
                    <View className={styles.metaItem}>
                      <Text className={styles.metaIcon}>👁️</Text>
                      <Text className={styles.metaText}>{item.views}</Text>
                    </View>
                  </View>
                  {item.tag && <Text className={styles.contentTag}>{item.tag}</Text>}
                </View>
              </View>
            </View>
          ))
        )}
      </View>
    </View>
  )
}

export default DiscoverPage
