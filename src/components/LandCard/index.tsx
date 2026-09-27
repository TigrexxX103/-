import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import classnames from 'classnames'
import { Land } from '@/types'
import styles from './index.module.scss'

interface LandCardProps {
  land: Land
  onClick?: (land: Land) => void
  layout?: 'grid' | 'horizontal'
}

const LandCard: React.FC<LandCardProps> = ({ land, onClick, layout = 'grid' }) => {
  const progress = Math.round((land.adoptedSlots / land.totalSlots) * 100)

  const handleClick = () => {
    onClick?.(land)
  }

  const getStatusText = () => {
    const map: Record<string, string> = {
      available: '可认养',
      full: '已满员',
      almost_full: '即将满员',
      almost_mature: '即将成熟'
    }
    return map[land.status] || ''
  }

  return (
    <View
      className={classnames(styles.landCard, layout === 'horizontal' && styles.horizontal)}
      onClick={handleClick}
    >
      <View className={styles.imageWrap}>
        <Image
          className={styles.coverImage}
          src={land.coverImage}
          mode="aspectFill"
        />
        {land.tags.length > 0 && (
          <View className={styles.tagWrap}>
            {land.tags.map((tag, index) => (
              <View
                key={index}
                className={classnames(
                  styles.tag,
                  tag === '热' && styles.tagHot,
                  tag === '新' && styles.tagNew
                )}
              >
                <Text className={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
      <View className={styles.content}>
        <Text className={styles.name}>{land.name}</Text>
        <View className={styles.locationRow}>
          <Text className={styles.locationIcon}>📍</Text>
          <Text className={styles.location}>{land.location}</Text>
          <Text className={styles.area}>{land.area}㎡</Text>
        </View>
        <View className={styles.progressRow}>
          <View className={styles.progressBar}>
            <View
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </View>
          <Text className={styles.progressText}>
            {land.adoptedSlots}/{land.totalSlots}
          </Text>
        </View>
        <View className={styles.bottomRow}>
          <View className={styles.priceWrap}>
            <Text className={styles.price}>¥{land.price}</Text>
            <Text className={styles.unit}>/{land.unit.replace('元/', '')}</Text>
          </View>
          <View className={styles.statusWrap}>
            <Text className={styles.starIcon}>⭐</Text>
            <Text className={styles.rating}>{land.rating}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default LandCard
