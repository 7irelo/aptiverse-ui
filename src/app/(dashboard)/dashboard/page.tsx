import { api } from '@/lib/services/api-client';
import './Dashboard.module.css';
import KeyMetricsGrid from './sections/KeyMetricsGrid';
import ProgressPieChart from './sections/ProgressPieChart';
import QuickActions from './sections/QuickActions';
import RecentActivities from './sections/RecentActivities';
import SubjectsProgress from './sections/SubjectsProgress';
import UpcomingDeadlines from './sections/UpcomingDeadlines';
import WelcomeSection from './sections/WelcomeSection';

const Dashboard: React.FC = async () => {
  
  let users: any[] = [];
  let error: string | null = null;

  try {
    console.log('🔄 Starting users fetch...');
    users = await api.get<any[]>('/users');
    console.log('✅ Users fetched successfully:', users.length);
  } catch (err) {
    console.error('❌ Failed to fetch users:', {
      error: err,
      message: err instanceof Error ? err.message : 'Unknown error',
      stack: err instanceof Error ? err.stack : undefined
    });
    error = 'Failed to load users data';
  }

  return (
    <div className="max-w-full p-0">
      <WelcomeSection />
      <QuickActions />
      <KeyMetricsGrid />
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <SubjectsProgress />
        <div className="order-first lg:order-0">
          <ProgressPieChart />
          <RecentActivities />
          <UpcomingDeadlines />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;