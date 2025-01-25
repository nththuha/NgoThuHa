import { MantineProvider } from '@mantine/core'
import { resolver, theme } from '@/configs/themes'
import { Notifications } from '@mantine/notifications'
import { ModalsProvider } from '@mantine/modals'
import { useRoutes } from 'react-router-dom'
import routes from '@/routes'
import { Suspense, useSyncExternalStore } from 'react'
import loadingStore from '@/services/request/store/loading'
import LoadingOverlay from '@/components/common/LoadingOverlay'

export default function App() {
  const loadingGlobal = useSyncExternalStore(loadingStore.subscribe, loadingStore.getSnapshot)

  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <Notifications position="top-right" zIndex={1000} w={300} />
      <ModalsProvider>
        <LoadingOverlay visible={loadingGlobal} />
        <Suspense fallback={<LoadingOverlay visible={true} />}>{useRoutes(routes)}</Suspense>
      </ModalsProvider>
    </MantineProvider>
  )
}
