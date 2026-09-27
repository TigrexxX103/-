import React, { useMemo } from 'react'
import { View, Text } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { getLandById } from '@/data/lands'
import { mockUser } from '@/data/user'
import styles from './index.module.scss'

const CertificatePage: React.FC = () => {
  const router = useRouter()
  const landId = router.params.id || 'land_001'

  const land = useMemo(() => getLandById(landId), [landId])
  const certificateNo = useMemo(() => `CL${Date.now().toString().slice(-8)}`, [])

  const handleSave = () => {
    Taro.showToast({ title: '证书已保存到相册', icon: 'success' })
  }

  const handleShare = () => {
    Taro.showToast({ title: '分享功能开发中', icon: 'none' })
  }

  if (!land) {
    return (
      <View style={{ padding: '100rpx', textAlign: 'center' }}>
        <Text>地块不存在</Text>
      </View>
    )
  }

  return (
    <View className={styles.certificatePage}>
      <View className={styles.certificateCard}>
        <Text className={styles.certificateCorner + ' ' + styles.cornerTopLeft}>🌱</Text>
        <Text className={styles.certificateCorner + ' ' + styles.cornerBottomRight}>🌿</Text>

        <View className={styles.certificateHeader}>
          <View className={styles.certificateBadge}>
            <Text>🏆</Text>
          </View>
          <Text className={styles.certificateLabel}>电子认养证书</Text>
          <Text className={styles.certificateName}>{land.name}</Text>
          <Text className={styles.certificateSubtitle}>专属地块认养凭证</Text>
        </View>

        <View className={styles.certificateInfo}>
          <View className={styles.certificateRow}>
            <Text className={styles.certificateRowLabel}>认养编号</Text>
            <Text className={styles.certificateRowValue}>{certificateNo}</Text>
          </View>
          <View className={styles.certificateRow}>
            <Text className={styles.certificateRowLabel}>认养人</Text>
            <Text className={styles.certificateRowValue}>{mockUser.nickname}</Text>
          </View>
          <View className={styles.certificateRow}>
            <Text className={styles.certificateRowLabel}>地块位置</Text>
            <Text className={styles.certificateRowValue}>{land.location}</Text>
          </View>
          <View className={styles.certificateRow}>
            <Text className={styles.certificateRowLabel}>种植作物</Text>
            <Text className={styles.certificateRowValue}>{land.cropName}</Text>
          </View>
          <View className={styles.certificateRow}>
            <Text className={styles.certificateRowLabel}>认养日期</Text>
            <Text className={styles.certificateRowValue}>2026-08-29</Text>
          </View>
        </View>

        <View className={styles.certificateFooter}>
          <Text className={styles.certificateDate}>签发日期：2026-08-29</Text>
          <View className={styles.certificateSeal}>
            <Text className={styles.sealText}>认领一块地<br />官方认证</Text>
          </View>
        </View>
      </View>

      <View className={styles.actionButtons}>
        <View className={styles.saveBtn} onClick={handleSave}>
          <Text className={styles.saveBtnText}>保存到相册</Text>
        </View>
        <View className={styles.shareBtn} onClick={handleShare}>
          <Text className={styles.shareBtnText}>分享给好友</Text>
        </View>
      </View>
    </View>
  )
}

export default CertificatePage
