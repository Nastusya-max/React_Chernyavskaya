import AlbumPage from "../AlbumPage";
import Albums from "../Albums";
import Auth from "../Auth";
import User from "../User";
import App from '../../App'

export const authRoutes = [
  {
    path: '/user/:userId',
    component: User
  },
  {
    path: '/user/:userId/albums',
    component: Albums
  },
  {
    path: '/user/:userId/albums/:albumId',
    component: AlbumPage
  },
]

export const publicRoutes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/login',
    component: Auth
  },
  {
    path: '/albums',
    component: Albums
  },
  {
    path: '/albums/:albumId',
    component: AlbumPage
  },
]