import { lazy } from 'react'

export const publicPaths = ['/login', '/reset-password']

type RouteConfig = {
  path: string
  element: React.LazyExoticComponent<() => JSX.Element>
  wrapper?: React.ComponentType<{ children: React.ReactNode }>
}

const routeConfigs: RouteConfig[] = [
  {
    path: '/',
    element: lazy(() => import('@/pages/home')),
  },
  {
    path: '/*',
    element: lazy(() => import('@/pages/home')),
  },
]

const routes = routeConfigs.map(({ path, element: Component, wrapper: Wrapper }) => {
  return {
    path,
    element: <Component />
  }
})

export default routes
