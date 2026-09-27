import React, { useMemo } from 'react'
import { View, Text } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import classnames from 'classnames'
import { getLandById } from '@/data/lands'
import { mockUser } from '@/data/user'
import styles from './index.module.scss'

const PayResultPage: React.FC = () => {
  const router = useRouter()
  const status = router.params.status || 'success'
  const landId = router.params.landId || 'land_001'
  const amount = router.params.amount || '299'

  const land = useMemo(() => getLandById(landId), [landId])

  const handleGoMonitor = () => {
    Taro.redirectTo({ url: `/pages/monitor/index?id=${landId}` })
  }

  const handleGoMyLands = () => {
    Taro.redirectTo({ url: '/pages/my-lands/index' })
  }

  const handleGoHome = () => {
    Taro.switchTab({ url: '/pages/home/index' })
  }

  const handleViewCertificate = () => {
    Taro.navigateTo({ url: `/pages/certificate/index?id=${landId}` })
  }

  const isSuccess = status === 'success'

  return (
    <View className={styles.payResultPage}>
      {/* 结果图标 */}
      <View className={classnames(styles.resultIconWrap, isSuccess && styles.successIconWrap)}>
        <Text className={styles.resultIcon}>{isSuccess ? '✓' : '✕'}</Text>
      </View>
      <Text className={styles.resultTitle}>
        {isSuccess ? '认养成功！' : '支付失败'}
      </Text>
      <Text className={styles.resultDesc}>
        {isSuccess
          ? '恭喜你成为大地主，开始你的认养之旅吧！'
          : '支付过程中出现问题，请重试'}
      </Text>

      {isSuccess && land && (
        <>
          {/* 电子认养证书 */}
          <View className={styles.certificateCard} onClick={handleViewCertificate}>
            <Text className={styles.certificateCorner + ' ' + styles.cornerTopLeft}>🌱</Text>
            <Text className={styles.certificateCorner + ' ' + styles.cornerBottomRight}>🌿</Text>
            <View className={styles.certificateHeader}>
              <Text className={styles.certificateLabel}>电子认养证书</Text>
              <Text className={styles.certificateName}>{land.name}</Text>
            </View>
            <View className={styles.certificateInfo}>
              <View className={styles.certificateRow}>
                <Text className={styles.certificateRowLabel}>认养编号</Text>
                <Text className={styles.certificateRowValue}>CL{Date.now().toString().slice(-8)}</Text>
              </View>
              <View className={styles.certificateRow}>
                <Text className={styles.certificateRowLabel}>认养人</Text>
                <Text className={styles.certificateRowValue}>{mockUser.nickname}</Text>
              </View>
              <View className={styles.certificateRow}>
                <Text className={styles.certificateRowLabel}>认养日期</Text>
                <Text className={styles.certificateRowValue}>2026-08-29</Text>
              </View>
              <View className={styles.certificateRow}>
                <Text className={styles.certificateRowLabel}>认养金额</Text>
                <Text className={styles.certificateRowValue}>¥{amount}</Text>
              </View>
            </View>
          </View>

          {/* 生长日记提醒 */}
          <View className={styles.reminderCard}>
            <Text className={styles.reminderIcon}>📅</Text>
            <Text className={styles.reminderText}>
              我们将每两周为你更新一次生长日记，请留意消息通知
            </Text>
          </View>
        </>
      )}

      {/* 操作按钮 */}
      <View className={styles.actionButtons}>
        {isSuccess ? (
          <>
            <View className={styles.primaryBtn} onClick={handleGoMonitor}>
              <Text className={styles.primaryBtnText}>去云监工</Text>
            </View>
            <View className={styles.secondaryBtn} onClick={handleGoMyLands}>
              <Text className={styles.secondaryBtnText}>查看我的地块</Text>
            </View>
            <View className={styles.tertiaryBtn} onClick={handleGoHome}>
              <Text className={styles.tertiaryBtnText}>返回首页</Text>
            </View>
          </>
        ) : (
          <>
            <View className={styles.primaryBtn} onClick={() => Taro.navigateBack()}>
              <Text className={styles.primaryBtnText}>重新支付</Text>
            </View>
            <View className={styles.secondaryBtn} onClick={handleGoHome}>
              <Text className={styles.secondaryBtnText}>返回首页</Text>
            </View>
          </>
        )}
      </View>
    </View>
  )
}

export default PayResultPage
