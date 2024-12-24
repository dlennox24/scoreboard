import ColorModeIconDropdown from '@/theme/ColorModeIconDropdown';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { AppBar, Toolbar, useTheme } from '@mui/material';
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Search from './Search';

export default function Header({
  color,
  title = '',
}: {
  color: string;
  title: string;
}) {
  const theme = useTheme();
  const backgroundColorContrast = theme.palette.getContrastText(color);
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ px: 2 }}>
          <Stack
            direction="row"
            sx={{
              display: { xs: 'none', md: 'flex' },
              width: '100%',
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
              maxWidth: { sm: '100%', md: '1700px' },
              py: 1,
            }}
            spacing={2}
          >
            <Breadcrumbs
              aria-label="breadcrumb"
              separator={<NavigateNextRoundedIcon fontSize="small" />}
              sx={{
                margin: theme.spacing(1, 0),
                [`& .${breadcrumbsClasses.separator}`]: {
                  color: alpha(backgroundColorContrast, 0.6),
                  margin: 1,
                },
                [`& .${breadcrumbsClasses.ol}`]: {
                  alignItems: 'center',
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: alpha(backgroundColorContrast, 0.6) }}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: backgroundColorContrast,
                  fontWeight: 600,
                }}
              >
                Scoreboard
              </Typography>
            </Breadcrumbs>
            <Stack direction="row" sx={{ gap: 1 }}>
              <Search />
              <ColorModeIconDropdown />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
