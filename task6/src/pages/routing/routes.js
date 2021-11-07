import AlbumPage from "../AlbumPage";
import Albums from "../Albums";
import Auth from "../Auth";
import User from "../User";
import App from '../../App'

export const authRoutes = [
  {
    path: '/user/:userId',
    Component: <User />
  },
  {
    path: '/user/:userId/albums',
    Component: <Albums />
  },
  {
    path: '/user/:userId/albums/:albumId',
    Component: <AlbumPage />
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