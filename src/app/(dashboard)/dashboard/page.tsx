import './Dashboard.module.css';
import KeyMetricsGrid from './sections/KeyMetricsGrid';
import ProgressPieChart from './sections/ProgressPieChart';
import QuickActions from './sections/QuickActions';
import RecentActivities from './sections/RecentActivities';
import SubjectsProgress from './sections/SubjectsProgress';
import UpcomingDeadlines from './sections/UpcomingDeadlines';
import WelcomeSection from './sections/WelcomeSection';

const Dashboard: React.FC = () => {

  return (
    <div className="max-w-full p-0">
      <WelcomeSection />
      <QuickActions />
      <KeyMetricsGrid />
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <SubjectsProgress />
        <div className="order-first lg:order-none">
          <ProgressPieChart />
          <RecentActivities />
          <UpcomingDeadlines />
        </div>
      </div>
    </div>
  )
}

export default Dashboard