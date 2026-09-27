import React from 'react'
import { View, Text } from '@tarojs/components'
import styles from './index.module.scss'

const MyActivitiesPage: React.FC = () => {
  return (
    <View className={styles.activitiesPage}>
      <Text className={styles.icon}>🎉</Text>
      <Text className={styles.title}>我的活动</Text>
      <Text className={styles.desc}>功能正在开发中，敬请期待...</Text>
    </View>
  )
}

export default MyActivitiesPage
