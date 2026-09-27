import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import classnames from 'classnames'
import { GrowthDiary } from '@/types'
import styles from './index.module.scss'

interface DiaryCardProps {
  diary: GrowthDiary
  onClick?: (diary: GrowthDiary) => void
  onLike?: (diary: GrowthDiary) => void
}

const DiaryCard: React.FC<DiaryCardProps> = ({ diary, onClick, onLike }) => {
  const handleClick = () => {
    onClick?.(diary)
  }

  const handleLike = (e) => {
    e.stopPropagation()
    onLike?.(diary)
  }

  return (
    <View className={styles.diaryCard} onClick={handleClick}>
      <View className={styles.header}>
        <Image
          className={styles.avatar}
          src={diary.publisherAvatar}
          mode="aspectFill"
        />
        <View className={styles.headerInfo}>
          <Text className={styles.publisherName}>{diary.publisherName}</Text>
          <Text className={styles.createTime}>{diary.createTime}</Text>
        </View>
      </View>
      <Text className={styles.content}>{diary.content}</Text>
      {diary.images.length > 0 && (
        <View
          className={classnames(
            styles.imageGrid,
            diary.images.length === 1 && styles.imageGridSingle,
            diary.images.length === 2 && styles.imageGridDouble
          )}
        >
          {diary.images.map((img, index) => (
            <Image
              key={index}
              className={classnames(
                styles.diaryImage,
                diary.images.length === 1 && styles.diaryImageSingle
              )}
              src={img}
              mode="aspectFill"
            />
          ))}
        </View>
      )}
      <View className={styles.footer}>
        <View className={styles.actionItem} onClick={handleLike}>
          <Text className={classnames(styles.actionIcon, diary.isLiked && styles.actionIconActive)}>
            {diary.isLiked ? '❤️' : '🤍'}
          </Text>
          <Text className={styles.actionText}>{diary.likeCount}</Text>
        </View>
        <View className={styles.actionItem}>
          <Text className={styles.actionIcon}>💬</Text>
          <Text className={styles.actionText}>{diary.commentCount}</Text>
        </View>
        <View className={styles.actionItem}>
          <Text className={styles.actionIcon}>🔗</Text>
          <Text className={styles.actionText}>分享</Text>
        </View>
      </View>
    </View>
  )
}

export default DiaryCard
