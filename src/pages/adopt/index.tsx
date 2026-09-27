import React, { useState, useMemo } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import classnames from 'classnames'
import { mockLands } from '@/data/lands'
import { Land, CropType } from '@/types'
import LandCard from '@/components/LandCard'
import styles from './index.module.scss'

const cropTypes = [
  { id: 'all', name: '全部' },
  { id: 'vegetable', name: '蔬菜' },
  { id: 'fruit', name: '水果' },
  { id: 'grain', name: '粮食' },
  { id: 'flower', name: '花卉' }
]

const sortOptions = [
  { id: 'default', name: '综合' },
  { id: 'distance', name: '距离最近' },
  { id: 'price', name: '价格最低' },
  { id: 'hot', name: '最热' }
]

const priceRanges = [
  { id: 'all', name: '不限' },
  { id: '0-200', name: '200元以下' },
  { id: '200-400', name: '200-400元' },
  { id: '400-600', name: '400-600元' },
  { id: '600+', name: '600元以上' }
]

const areaRanges = [
  { id: 'all', name: '不限' },
  { id: '0-20', name: '20㎡以下' },
  { id: '20-50', name: '20-50㎡' },
  { id: '50+', name: '50㎡以上' }
]

const AdoptPage: React.FC = () => {
  const [activeCrop, setActiveCrop] = useState('all')
  const [activeSort, setActiveSort] = useState('default')
  const [showFilter, setShowFilter] = useState(false)
  const [tempPriceRange, setTempPriceRange] = useState('all')
  const [tempAreaRange, setTempAreaRange] = useState('all')

  const filteredLands = useMemo(() => {
    let result = [...mockLands]

    // 作物类型筛选
    if (activeCrop !== 'all') {
      result = result.filter(land => land.cropType === activeCrop)
    }

    // 价格筛选
    if (tempPriceRange !== 'all') {
      const [min, max] = tempPriceRange.split('-')
      if (max) {
        result = result.filter(land => land.price >= Number(min) && land.price < Number(max))
      } else if (min.includes('+')) {
        result = result.filter(land => land.price >= Number(min))
      }
    }

    // 面积筛选
    if (tempAreaRange !== 'all') {
      const [min, max] = tempAreaRange.split('-')
      if (max) {
        result = result.filter(land => land.area >= Number(min) && land.area < Number(max))
      } else if (min.includes('+')) {
        result = result.filter(land => land.area >= Number(min))
      }
    }

    // 排序
    switch (activeSort) {
      case 'price':
        result.sort((a, b) => a.price - b.price)
        break
      case 'hot':
        result.sort((a, b) => b.adoptedSlots - a.adoptedSlots)
        break
      case 'distance':
        // 模拟距离排序
        result.sort((a, b) => a.landId.localeCompare(b.landId))
        break
    }

    return result
  }, [activeCrop, activeSort, tempPriceRange, tempAreaRange])

  const handleCropChange = (cropId: string) => {
    setActiveCrop(cropId)
  }

  const handleSortClick = () => {
    Taro.showActionSheet({
      itemList: sortOptions.map(opt => opt.name),
      success: (res) => {
        setActiveSort(sortOptions[res.tapIndex].id)
      }
    })
  }

  const handleFilterClick = () => {
    setShowFilter(true)
  }

  const handleFilterClose = () => {
    setShowFilter(false)
  }

  const handleReset = () => {
    setTempPriceRange('all')
    setTempAreaRange('all')
  }

  const handleConfirm = () => {
    setShowFilter(false)
  }

  const handleLandClick = (land: Land) => {
    Taro.navigateTo({ url: `/pages/land-detail/index?id=${land.landId}` })
  }

  const handleMapMode = () => {
    Taro.showToast({ title: '地图模式开发中', icon: 'none' })
  }

  const handleBellClick = () => {
    Taro.switchTab({ url: '/pages/message/index' })
  }

  return (
    <View className={styles.adoptPage}>
      {/* 顶部栏 */}
      <View className={styles.headerBar}>
        <Text className={styles.headerTitle}>认养一块地</Text>
        <View className={styles.headerBell} onClick={handleBellClick}>
          <Text className={styles.bellIcon}>🔔</Text>
          <View className={styles.bellDot} />
        </View>
      </View>

      {/* 筛选栏 */}
      <View className={styles.filterBar}>
        <ScrollView className={styles.filterScroll} scrollX enhanced showScrollbar={false}>
          {cropTypes.map(crop => (
            <Text
              key={crop.id}
              className={classnames(styles.filterTab, activeCrop === crop.id && styles.active)}
              onClick={() => handleCropChange(crop.id)}
            >
              {crop.name}
            </Text>
          ))}
        </ScrollView>
        <View className={styles.sortBtn} onClick={handleSortClick}>
          <Text className={styles.sortText}>
            {sortOptions.find(opt => opt.id === activeSort)?.name || '综合'}
          </Text>
          <Text style={{ fontSize: '20rpx', color: '#86909C' }}>▼</Text>
        </View>
        <View className={styles.filterBtn} onClick={handleFilterClick}>
          <Text className={styles.filterIcon}>⚙️</Text>
        </View>
      </View>

      {/* 地块列表 */}
      <View className={styles.landList}>
        {filteredLands.length === 0 ? (
          <View className={styles.emptyState}>
            <Text className={styles.emptyIcon}>🌾</Text>
            <Text className={styles.emptyText}>暂无符合条件的地块</Text>
          </View>
        ) : (
          filteredLands.map(land => (
            <View key={land.landId} className={styles.landItem}>
              <LandCard land={land} onClick={handleLandClick} />
            </View>
          ))
        )}
      </View>

      {/* 地图模式悬浮按钮 */}
      <View className={styles.mapBtn} onClick={handleMapMode}>
        <Text className={styles.mapIcon}>🗺️</Text>
        <Text className={styles.mapText}>地图模式</Text>
      </View>

      {/* 筛选面板 */}
      {showFilter && (
        <>
          <View className={styles.filterMask} onClick={handleFilterClose} />
          <View className={styles.filterPanel}>
            <View className={styles.panelHeader}>
              <Text className={styles.panelTitle}>筛选</Text>
              <Text className={styles.panelClose} onClick={handleFilterClose}>✕</Text>
            </View>

            <View className={styles.panelSection}>
              <Text className={styles.sectionLabel}>价格区间</Text>
              <View className={styles.optionList}>
                {priceRanges.map(range => (
                  <Text
                    key={range.id}
                    className={classnames(styles.optionItem, tempPriceRange === range.id && styles.active)}
                    onClick={() => setTempPriceRange(range.id)}
                  >
                    {range.name}
                  </Text>
                ))}
              </View>
            </View>

            <View className={styles.panelSection}>
              <Text className={styles.sectionLabel}>地块面积</Text>
              <View className={styles.optionList}>
                {areaRanges.map(range => (
                  <Text
                    key={range.id}
                    className={classnames(styles.optionItem, tempAreaRange === range.id && styles.active)}
                    onClick={() => setTempAreaRange(range.id)}
                  >
                    {range.name}
                  </Text>
                ))}
              </View>
            </View>

            <View className={styles.panelFooter}>
              <View className={styles.resetBtn} onClick={handleReset}>
                <Text>重置</Text>
              </View>
              <View className={styles.confirmBtn} onClick={handleConfirm}>
                <Text>确定</Text>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  )
}

export default AdoptPage
