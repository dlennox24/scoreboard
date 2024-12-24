import CustomizedDataGrid from '@/components/CustomizedDataGrid';
import LayoutScoreboard from '@/layouts/Scoreboard.layout';

export default function HomePage() {
  return (
    <LayoutScoreboard>
      <CustomizedDataGrid />
    </LayoutScoreboard>
  );
}
