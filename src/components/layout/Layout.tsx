import AppNavbar from '@/components/AppNavbar';
import Header from '@/components/Header';
import SideMenu from '@/components/layout/sidebar/SideMenu';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { alpha, useTheme } from '@mui/material/styles';
import { ReactNode } from 'react';
import Copyright from './Copyright';

export default function Layout({
  children,
  color,
  title = 'Unknown',
}: {
  children: ReactNode;
  color?: string;
  title?: string;
}) {
  const theme = useTheme();
  color = color ? color : theme.palette.primary.main;
  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu />
      <AppNavbar />
      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          backgroundColor: alpha(theme.palette.background.default, 1),
          overflow: 'auto',
          minHeight: '100vh',
        })}
      >
        <Stack spacing={2} sx={{ alignItems: 'center', pt: 0, height: '100%' }}>
          <Header color={color} title={title} />
          <Box sx={{ flexGrow: 1 }}>{children}</Box>
          <Copyright />
        </Stack>
      </Box>
    </Box>
  );
}
