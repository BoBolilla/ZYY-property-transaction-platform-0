import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home', // 首页
          component: () => import('@/views/home/HomePage.vue')
        },
        {
          path: '/news', // 新闻页
          component: () => import('@/views/news/NewsPage.vue'),
          redirect: '/news/current',
          children: [
            {
              path: '/news/current', // 时事新闻
              component: () => import('@/views/news/NewsCurrent.vue')
            },
            {
              path: '/news/work', // 工作状态
              component: () => import('@/views/news/NewsWork.vue')
            },
            {
              path: '/news/media', // 媒体发布
              component: () => import('@/views/news/NewsMedia.vue')
            }
          ]
        },
        {
          path: '/newsDetail/:id', // 新闻详情页
          component: () => import('@/views/news/NewsDetail.vue')
        },
        {
          path: '/organization', // 机构页
          component: () => import('@/views/organization/OrganizationPage.vue'),
          redirect: '/organization/history',
          children: [
            {
              path: '/organization/history', // 历史
              component: () =>
                import('@/views/organization/OrganizationHistory.vue')
            },
            {
              path: '/organization/capital', // 注册资本
              component: () =>
                import('@/views/organization/OrganizationCapital.vue')
            },
            {
              path: '/organization/culture', // 文化
              component: () =>
                import('@/views/organization/OrganizationCulture.vue')
            },
            {
              path: '/organization/philosophy', // 宗旨
              component: () =>
                import('@/views/organization/OrganizationPhilosophy.vue')
            }
          ]
        },
        {
          path: '/feedback', // 反馈页
          component: () => import('@/views/feedback/FeedbackPage.vue'),
          redirect: '/feedback/submit',
          children: [
            {
              path: '/feedback/submit', // 意见提交
              component: () => import('@/views/feedback/FeedbackSubmit.vue')
            },
            {
              path: '/feedback/release', // 处理公示
              component: () => import('@/views/feedback/FeedbackRelease.vue')
            }
          ]
        },
        {
          path: '/transaction', // 交易页
          component: () => import('@/views/transaction/TransactionPage.vue')
        }
      ]
    }
  ]
})

export default router
