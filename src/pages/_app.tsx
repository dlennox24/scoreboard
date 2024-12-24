import muiTheme from '@/theme/muiTheme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';

export default function App({
  Component,
  pageProps,
}: Readonly<{
  Component: React.ComponentType<unknown>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
}>) {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Head>
        <title>Scoreboard</title>
        <link rel="icon" href={`/favicon.ico`} />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
