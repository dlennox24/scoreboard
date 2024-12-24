import Layout from '@/components/layout/Layout';
import ColorModeIconDropdown from '@/theme/ColorModeIconDropdown';
import { Typography } from '@mui/material';
import { purple } from '@mui/material/colors';

export default function FiveCrownsPage() {
  const game = {
    name: 'Five Crowns',
    color: purple[900],
  };
  return (
    <Layout color={game.color} title={game.name}>
      <Typography variant="h4">RULES</Typography>
      <ColorModeIconDropdown></ColorModeIconDropdown>
    </Layout>
  );
}
