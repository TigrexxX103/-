import React from 'react'
import { View, Text } from '@tarojs/components'
import styles from './index.module.scss'

const ActivityBookingPage: React.FC = () => {
  return (
    <View className={styles.bookingPage}>
      <Text className={styles.icon}>📋</Text>
      <Text className={styles.title}>活动预约</Text>
      <Text className={styles.desc}>功能正在开发中，敬请期待...</Text>
    </View>
  )
}

export default ActivityBookingPage
