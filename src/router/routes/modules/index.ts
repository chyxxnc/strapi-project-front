import type { RouteRecordRaw } from 'vue-router'
import { CustomerServiceOutlined } from '@ant-design/icons-vue'
import { DefaultLayout } from '@/layouts'

const route: RouteRecordRaw = {
  path: '/',
  name: 'home',
  component: DefaultLayout,
  meta: {
    icon: CustomerServiceOutlined,
    title: 'Home',
  },
  children: [
    {
      path: 'form',
      name: 'form',
      component: () => import('@/views/home/form/index.vue'),
      meta: {
        title: 'Form',
      },
    },
    {
      path: 'movie',
      name: 'movie',
      component: () => import('@/views/home/movie/index.vue'),
      meta: {
        title: 'Movie',
      },
    },
  ],
}

export default route
