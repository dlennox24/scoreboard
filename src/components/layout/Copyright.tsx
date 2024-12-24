import Link from '@mui/material/Link';
import Typography, { TypographyProps } from '@mui/material/Typography';

export default function Copyright(props: TypographyProps) {
  return (
    <Typography
      variant="body2"
      align="center"
      {...props}
      sx={[
        {
          color: 'text.secondary',
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      {'Copyright © MIT '}
      <Link
        color="inherit"
        href="https://github.com/dlennox24/scoreboard/blob/master/LICENSE.md"
      >
        Daniel Lennox
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
