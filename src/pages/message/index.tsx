import React, { useState, useMemo } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import classnames from 'classnames'
import { mockMessages } from '@/data/messages'
import { Message, MessageType } from '@/types'
import styles from './index.module.scss'

const messageTabs = [
  { id: 'all', name: '全部' },
  { id: 'growth', name: '生长动态' },
  { id: 'system', name: '系统通知' },
  { id: 'interaction', name: '互动消息' }
]

const MessagePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [messages, setMessages] = useState(mockMessages)

  const filteredMessages = useMemo(() => {
    if (activeTab === 'all') return messages
    return messages.filter(msg => msg.type === activeTab)
  }, [activeTab, messages])

  const unreadCount = useMemo(() => {
    return messages.filter(msg => !msg.isRead).length
  }, [messages])

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
  }

  const handleMessageClick = (message: Message) => {
    // 标记为已读
    setMessages(prev => prev.map(msg =>
      msg.messageId === message.messageId ? { ...msg, isRead: true } : msg
    ))

    // 跳转相关页面
    if (message.relatedPage) {
      if (message.relatedPage.includes('/pages/home/index') ||
          message.relatedPage.includes('/pages/discover/index') ||
          message.relatedPage.includes('/pages/adopt/index') ||
          message.relatedPage.includes('/pages/message/index') ||
          message.relatedPage.includes('/pages/profile/index')) {
        Taro.switchTab({ url: message.relatedPage }).catch(() => {})
      } else {
        Taro.navigateTo({ url: message.relatedPage }).catch(() => {
          Taro.switchTab({ url: '/pages/home/index' })
        })
      }
    }
  }

  const handleClearUnread = () => {
    Taro.showModal({
      title: '提示',
      content: '确定要将所有消息标记为已读吗？',
      success: (res) => {
        if (res.confirm) {
          setMessages(prev => prev.map(msg => ({ ...msg, isRead: true })))
          Taro.showToast({ title: '已全部标记为已读', icon: 'success' })
        }
      }
    })
  }

  return (
    <View className={styles.messagePage}>
      {/* 消息分类Tab */}
      <View className={styles.tabBarWrap}>
        <ScrollView className={styles.messageTabs} scrollX enhanced showScrollbar={false}>
          {messageTabs.map(tab => (
            <View
              key={tab.id}
              className={classnames(styles.messageTab, activeTab === tab.id && styles.active)}
              onClick={() => handleTabChange(tab.id)}
            >
              <Text>{tab.name}</Text>
            </View>
          ))}
        </ScrollView>
        {unreadCount > 0 && activeTab === 'all' && (
          <View
            className={styles.clearAllBtn}
            onClick={handleClearUnread}
          >
            <Text>全部已读</Text>
          </View>
        )}
      </View>

      {/* 消息列表 */}
      <View className={styles.messageList}>
        {filteredMessages.length === 0 ? (
          <View className={styles.emptyState}>
            <Text className={styles.emptyIcon}>📭</Text>
            <Text className={styles.emptyText}>暂无消息</Text>
          </View>
        ) : (
          filteredMessages.map(message => (
            <View
              key={message.messageId}
              className={styles.messageItem}
              onClick={() => handleMessageClick(message)}
            >
              <View className={styles.messageIcon}>
                <Text>{message.icon}</Text>
              </View>
              <View className={styles.messageContent}>
                <View className={styles.messageHeader}>
                  <Text className={styles.messageTitle}>{message.title}</Text>
                  <Text className={styles.messageTime}>{message.createTime}</Text>
                </View>
                <Text className={styles.messageSummary}>{message.summary}</Text>
              </View>
              {!message.isRead && <View className={styles.unreadDot} />}
            </View>
          ))
        )}
      </View>
    </View>
  )
}

export default MessagePage
