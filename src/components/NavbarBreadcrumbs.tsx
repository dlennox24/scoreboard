import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { AppBar } from '@mui/material';
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: theme.palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}));

export default function NavbarBreadcrumbs() {
  return (
    <AppBar position="static">
      <StyledBreadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextRoundedIcon fontSize="small" />}
      >
        <Typography variant="body1">Dashboard</Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.primary', fontWeight: 600 }}
        >
          Home
        </Typography>
      </StyledBreadcrumbs>
    </AppBar>
  );
}
