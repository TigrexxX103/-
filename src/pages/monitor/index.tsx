import React, { useState, useMemo } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import classnames from 'classnames'
import { getLandById } from '@/data/lands'
import { getRecordsByLandId } from '@/data/growth-records'
import { mockUser } from '@/data/user'
import { avatarImages } from '@/data/image-map'
import { GrowthStage } from '@/types'
import styles from './index.module.scss'

const stageInfo: Record<GrowthStage, { name: string; desc: string; emoji: string }> = {
  seed: { name: '播种期', desc: '种子已播下，正在催芽', emoji: '🌱' },
  seedling: { name: '幼苗期', desc: '小苗已出土，茁壮成长中', emoji: '🌿' },
  flowering: { name: '开花期', desc: '花朵盛开，进行授粉', emoji: '🌸' },
  fruiting: { name: '结果期', desc: '果实正在发育，即将成熟', emoji: '🍅' },
  harvest: { name: '收获期', desc: '果实成熟，等你来采摘', emoji: '🧺' }
}

interface CommentItem {
  id: string
  name: string
  avatar: string
  content: string
  time: string
}

const initialComments: CommentItem[] = [
  {
    id: 'comment_001',
    name: '小农人',
    avatar: mockUser.avatar,
    content: '希望我的小番茄快快长大！每天都来看它～',
    time: '2026-08-28 08:00'
  },
  {
    id: 'comment_002',
    name: '绿野生态农场',
    avatar: avatarImages.farmer1,
    content: '放心吧，我们会用心照顾好每一株作物！预计两周后可以成熟。',
    time: '2026-08-28 09:15'
  }
]

const MonitorPage: React.FC = () => {
  const router = useRouter()
  const landId = router.params.id || 'land_001'

  const land = useMemo(() => getLandById(landId), [landId])
  const records = useMemo(() => getRecordsByLandId(landId), [landId])

  const [watered, setWatered] = useState(false)
  const [fertilized, setFertilized] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [comments, setComments] = useState(initialComments)

  const currentStage = land ? stageInfo[land.currentStage] : stageInfo.seed
  const countdownDays = 14

  const handleInteract = (type: 'water' | 'fertilize') => {
    if (type === 'water' && !watered) {
      setWatered(true)
      Taro.showToast({ title: '浇水成功！+2积分', icon: 'none' })
    } else if (type === 'fertilize' && !fertilized) {
      setFertilized(true)
      Taro.showToast({ title: '施肥成功！+2积分', icon: 'none' })
    } else {
      Taro.showToast({ title: '今日已互动过了哦', icon: 'none' })
    }
  }

  const handleSendComment = () => {
    if (!commentText.trim()) {
      Taro.showToast({ title: '请输入留言内容', icon: 'none' })
      return
    }

    const newComment: CommentItem = {
      id: `comment_${Date.now()}`,
      name: mockUser.nickname,
      avatar: mockUser.avatar,
      content: commentText.trim(),
      time: new Date().toLocaleString('zh-CN', { hour12: false }).replace(/\//g, '-')
    }

    setComments(prev => [...prev, newComment])
    setCommentText('')
    Taro.showToast({ title: '留言成功', icon: 'success' })
  }

  if (!land) {
    return (
      <View style={{ padding: '100rpx', textAlign: 'center' }}>
        <Text>地块不存在</Text>
      </View>
    )
  }

  return (
    <View className={styles.monitorPage}>
      {/* 当前生长阶段大卡片 */}
      <View className={styles.stageCard}>
        <Text className={styles.stageDecoration}>{currentStage.emoji}</Text>
        <Text className={styles.stageLabel}>当前阶段</Text>
        <Text className={styles.stageName}>{currentStage.name}</Text>
        <Text className={styles.stageDesc}>{currentStage.desc}</Text>
        <View className={styles.stageCountdown}>
          <Text className={styles.countdownText}>距离收获还有</Text>
          <Text className={styles.countdownNumber}>{countdownDays}</Text>
          <Text className={styles.countdownText}>天</Text>
        </View>
      </View>

      {/* 互动区 */}
      <View className={styles.interactSection}>
        <View
          className={classnames(styles.interactBtn, watered && styles.active)}
          onClick={() => handleInteract('water')}
        >
          <Text className={styles.interactIcon}>💧</Text>
          <Text className={styles.interactLabel}>浇水</Text>
          <Text className={styles.interactStatus}>{watered ? '已浇水' : '+2积分'}</Text>
        </View>
        <View
          className={classnames(styles.interactBtn, fertilized && styles.active)}
          onClick={() => handleInteract('fertilize')}
        >
          <Text className={styles.interactIcon}>🌾</Text>
          <Text className={styles.interactLabel}>施肥</Text>
          <Text className={styles.interactStatus}>{fertilized ? '已施肥' : '+2积分'}</Text>
        </View>
      </View>

      {/* 生长时间轴 */}
      <View className={styles.timelineSection}>
        <Text className={styles.sectionTitle}>生长记录</Text>
        <View className={styles.growthTimeline}>
          <View className={styles.timelineLine} />
          {records.map(record => (
            <View key={record.recordId} className={styles.growthItem}>
              <View className={styles.timelineDot} />
              <Text className={styles.growthDate}>{record.createTime}</Text>
              <Text className={styles.growthStageName}>{record.stageName}</Text>
              <Text className={styles.growthDesc}>{record.description}</Text>
              {record.images.length > 0 && (
                <View className={styles.growthImages}>
                  {record.images.map((img, idx) => (
                    <Image
                      key={idx}
                      className={styles.growthImage}
                      src={img}
                      mode="aspectFill"
                      onClick={() => Taro.previewImage({ urls: record.images, current: img })}
                    />
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      </View>

      {/* 留言区 */}
      <View className={styles.messageSection}>
        <Text className={styles.sectionTitle}>留言互动</Text>
        <View className={styles.messageInputWrap}>
          <Input
            className={styles.messageInput}
            placeholder="给你的地块说点什么..."
            value={commentText}
            onInput={(e) => setCommentText(e.detail.value)}
          />
          <View className={styles.sendBtn} onClick={handleSendComment}>
            <Text className={styles.sendBtnText}>发送</Text>
          </View>
        </View>
        <View className={styles.messageList}>
          {comments.map(comment => (
            <View key={comment.id} className={styles.messageItem}>
              <Image className={styles.messageAvatar} src={comment.avatar} mode="aspectFill" />
              <View className={styles.messageBody}>
                <View className={styles.messageHeader}>
                  <Text className={styles.messageName}>{comment.name}</Text>
                  <Text className={styles.messageTime}>{comment.time}</Text>
                </View>
                <View className={styles.messageBubble}>
                  <Text className={styles.messageText}>{comment.content}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

export default MonitorPage
