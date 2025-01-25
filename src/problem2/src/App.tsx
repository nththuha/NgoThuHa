import { resolver, theme } from "@/configs/theme/mantine-theme";
import guestRoutes from "@/router";
import { LoadingOverlay, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { Suspense, useMemo } from "react";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = useMemo(() => {
    return _buildRoutes();
  }, []);

  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <ModalsProvider>
        <Suspense fallback={<LoadingOverlay visible={true} />}>
          {useRoutes(routes)}
        </Suspense>
        <Notifications position="top-right" zIndex={1000} />
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;

function _buildRoutes() {
  return guestRoutes;
}
