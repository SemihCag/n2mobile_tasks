import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '../views/UsersView.vue'
import TodoView from '@/views/TodoView.vue'
import UserHeader from '@/components/headers/UserHeader.vue'
import HomeHeader from '@/components/headers/HomeHeader.vue'
import PostsView from '@/views/PostsView.vue'
import AlbumsView from '@/views/AlbumsView.vue'
import AlbumDetailView from '@/views/AlbumDetailView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: UsersView,
      meta: {
        header: HomeHeader
      }
    },
    {
      path: '/users/:userId',
      component: TodoView,
      meta: {
        header: UserHeader
      },
    },
    {
      path: '/users/:userId/posts',
      component: PostsView,
      meta: {
        header: UserHeader
      },
    },
    {
      path: '/users/:userId/albums',
      component: AlbumsView,
      meta: {
        header: UserHeader
      },
    },
    {
      path: '/users/:userId/albums/:albumId',
      component: AlbumDetailView,
      meta: {
        header: UserHeader
      },
    },
  ]
})

export default router
