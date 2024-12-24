import AppTheme from '@/theme/AppTheme';
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '@/theme/customizations';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import type {} from '@mui/x-charts/themeAugmentation';
import type {} from '@mui/x-data-grid/themeAugmentation';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import type {} from '@mui/x-tree-view/themeAugmentation';
import * as React from 'react';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function App({
  Component,
  pageProps,
}: Readonly<{
  Component: React.ComponentType<unknown>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
}>) {
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <AppTheme themeComponents={xThemeComponents}>
          <CssBaseline enableColorScheme />
          <Component {...pageProps} />
        </AppTheme>
      </StyledEngineProvider>
    </React.StrictMode>
  );
}
