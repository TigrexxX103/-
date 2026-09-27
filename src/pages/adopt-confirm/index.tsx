import React, { useState, useMemo } from 'react'
import { View, Text, Image, Textarea } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import classnames from 'classnames'
import { getLandById } from '@/data/lands'
import styles from './index.module.scss'

const periods = [
  { id: 'half', name: '半年', multiplier: 0.6 },
  { id: 'one', name: '一年', multiplier: 1 },
  { id: 'two', name: '两年', multiplier: 1.8 }
]

const AdoptConfirmPage: React.FC = () => {
  const router = useRouter()
  const landId = router.params.id || 'land_001'

  const land = useMemo(() => getLandById(landId), [landId])
  const [selectedPeriod, setSelectedPeriod] = useState('one')
  const [deliveryType, setDeliveryType] = useState<'mail' | 'pickup'>('mail')
  const [message, setMessage] = useState('')
  const [agreed, setAgreed] = useState(false)

  const period = periods.find(p => p.id === selectedPeriod)!
  const basePrice = land?.price || 0
  const totalAmount = Math.round(basePrice * period.multiplier)
  const shippingFee = deliveryType === 'mail' ? 0 : 0
  const finalAmount = totalAmount + shippingFee

  if (!land) {
    return (
      <View style={{ padding: '100rpx', textAlign: 'center' }}>
        <Text>地块不存在</Text>
      </View>
    )
  }

  const handlePay = () => {
    if (!agreed) {
      Taro.showToast({ title: '请先同意认养服务协议', icon: 'none' })
      return
    }

    Taro.showLoading({ title: '支付中...' })

    // 模拟微信支付
    setTimeout(() => {
      Taro.hideLoading()
      Taro.redirectTo({
        url: `/pages/pay-result/index?status=success&landId=${land.landId}&amount=${finalAmount}`
      })
    }, 1500)
  }

  const handleAgreementClick = () => {
    Taro.showToast({ title: '协议详情开发中', icon: 'none' })
  }

  return (
    <View className={styles.confirmPage}>
      {/* 地块信息摘要 */}
      <View className={styles.landSummary}>
        <Image className={styles.summaryImage} src={land.coverImage} mode="aspectFill" />
        <View className={styles.summaryInfo}>
          <Text className={styles.summaryName}>{land.name}</Text>
          <Text className={styles.summaryLocation}>📍 {land.location}</Text>
          <Text className={styles.summaryPrice}>¥{land.price}{land.unit.replace('元', '')}</Text>
        </View>
      </View>

      {/* 认养方案 */}
      <View className={styles.formSection}>
        <Text className={styles.formLabel}>认养周期</Text>
        <View className={styles.periodList}>
          {periods.map(p => (
            <View
              key={p.id}
              className={classnames(styles.periodItem, selectedPeriod === p.id && styles.active)}
              onClick={() => setSelectedPeriod(p.id)}
            >
              <Text className={styles.periodName}>{p.name}</Text>
              <Text className={styles.periodPrice}>
                ¥{Math.round(basePrice * p.multiplier)}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* 收获配送方式 */}
      <View className={styles.formSection}>
        <Text className={styles.formLabel}>收获配送方式</Text>
        <View className={styles.deliveryList}>
          <View
            className={classnames(styles.deliveryItem, deliveryType === 'mail' && styles.active)}
            onClick={() => setDeliveryType('mail')}
          >
            <View className={styles.deliveryInfo}>
              <Text className={styles.deliveryName}>📦 邮寄到家</Text>
              <Text className={styles.deliveryDesc}>每次成熟后邮寄到默认地址（包邮）</Text>
            </View>
            <View className={classnames(styles.deliveryRadio, deliveryType === 'mail' && styles.active)}>
              {deliveryType === 'mail' && <View className={styles.radioDot} />}
            </View>
          </View>
          <View
            className={classnames(styles.deliveryItem, deliveryType === 'pickup' && styles.active)}
            onClick={() => setDeliveryType('pickup')}
          >
            <View className={styles.deliveryInfo}>
              <Text className={styles.deliveryName}>🚗 到店自提</Text>
              <Text className={styles.deliveryDesc}>到农场自取，可顺便游玩</Text>
            </View>
            <View className={classnames(styles.deliveryRadio, deliveryType === 'pickup' && styles.active)}>
              {deliveryType === 'pickup' && <View className={styles.radioDot} />}
            </View>
          </View>
        </View>
      </View>

      {/* 寄语/命名 */}
      <View className={styles.formSection}>
        <Text className={styles.formLabel}>给这块地起个名字/写句寄语（选填）</Text>
        <Textarea
          className={styles.messageInput}
          placeholder="例如：希望我的番茄快快长大！"
          maxlength={20}
          value={message}
          onInput={(e) => setMessage(e.detail.value)}
        />
        <Text className={styles.inputHint}>{message.length}/20</Text>
      </View>

      {/* 认养协议 */}
      <View className={styles.formSection}>
        <View className={styles.agreementRow}>
          <View
            className={classnames(styles.checkbox, agreed && styles.checked)}
            onClick={() => setAgreed(!agreed)}
          >
            {agreed && <Text style={{ fontSize: '24rpx', color: '#FFFFFF' }}>✓</Text>}
          </View>
          <Text className={styles.checkboxText}>
            我已阅读并同意
            <Text className={styles.agreementLink} onClick={handleAgreementClick}>《认养服务协议》</Text>
          </Text>
        </View>
      </View>

      {/* 价格汇总 */}
      <View className={styles.priceSummary}>
        <View className={styles.priceRow}>
          <Text className={styles.priceLabel}>认养费（{period.name}）</Text>
          <Text className={styles.priceValue}>¥{totalAmount}</Text>
        </View>
        <View className={styles.priceRow}>
          <Text className={styles.priceLabel}>运费</Text>
          <Text className={styles.priceValue}>{shippingFee === 0 ? '包邮' : `¥${shippingFee}`}</Text>
        </View>
        <View className={styles.priceTotal}>
          <Text className={styles.priceTotalLabel}>合计</Text>
          <Text className={styles.priceTotalValue}>¥{finalAmount}</Text>
        </View>
      </View>

      {/* 底部支付栏 */}
      <View className={styles.payBar}>
        <View className={styles.payInfo}>
          <Text className={styles.payLabel}>应付金额</Text>
          <Text className={styles.payAmount}>¥{finalAmount}</Text>
        </View>
        <View
          className={classnames(styles.payBtn, !agreed && styles.disabled)}
          onClick={handlePay}
        >
          <Text className={styles.payBtnText}>确认支付</Text>
        </View>
      </View>
    </View>
  )
}

export default AdoptConfirmPage
