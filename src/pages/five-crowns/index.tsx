import Layout from '@/components/layout/Layout';
import ColorModeIconDropdown from '@/theme/ColorModeIconDropdown';
import { purple } from '@mui/material/colors';

export default function FiveCrownsPage() {
  const game = {
    name: 'Five Crowns',
    color: purple[900],
  };
  return (
    <Layout color={game.color} title={game.name}>
      <div>five crowns</div>
      <ColorModeIconDropdown></ColorModeIconDropdown>
    </Layout>
  );
}
