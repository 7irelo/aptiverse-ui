import React from 'react'
import { 
  TrendingUp, 
  BookOpen, 
  Target, 
  Award, 
  Clock, 
  Brain,
  Calendar,
  BarChart3,
  PieChart,
  ArrowUp,
  ArrowDown,
  AlertTriangle,
  CheckCircle2,
  Star,
  Zap,
  Bookmark,
  Users
} from 'lucide-react'

import './Dashboard.css'

// Type definitions
interface Subject {
  name: string;
  progress: number;
  target: number;
  color: string;
  averageScore: number;
  nextAssessment?: string;
  focusArea: string;
}

interface OverallStats {
  averageScore: number;
  completionRate: number;
  studyHours: number;
  goalsAchieved: number;
  weeklyTrend: number;
  emotionalWellness: number;
  attendance: string;
  classRank: string;
  streak: number;
}

interface RecentActivity {
  subject: string;
  activity: string;
  time: string;
  score: number;
  type: 'assignment' | 'test' | 'quiz' | 'project';
}

interface UpcomingDeadline {
  subject: string;
  task: string;
  due: string;
  priority: 'high' | 'medium' | 'low';
  type: string;
  preparationTime: string;
}

interface PieChartData {
  name: string;
  value: number;
  color: string;
}

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  trend: number;
  description: string;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow';
}

interface SubjectCardProps {
  subject: Subject;
}

interface ActivityItemProps {
  activity: RecentActivity;
}

interface DeadlineItemProps {
  deadline: UpcomingDeadline;
}

interface PieChartComponentProps {
  data: PieChartData[];
}

const Dashboard: React.FC = () => {
  // Enhanced mock data for South African Grade 11/12 students
  const subjects: Subject[] = [
    { 
      name: 'Mathematics', 
      progress: 75, 
      target: 80, 
      color: 'bg-blue-500',
      averageScore: 72,
      nextAssessment: 'Trigonometry Test - Jan 25',
      focusArea: 'Calculus'
    },
    { 
      name: 'Physical Sciences', 
      progress: 68, 
      target: 75, 
      color: 'bg-purple-500',
      averageScore: 65,
      nextAssessment: 'Chemistry Practical - Jan 26',
      focusArea: 'Physics Formulas'
    },
    { 
      name: 'Life Sciences', 
      progress: 82, 
      target: 78, 
      color: 'bg-green-500',
      averageScore: 79,
      nextAssessment: 'Genetics Quiz - Jan 27',
      focusArea: 'Ecology'
    },
    { 
      name: 'English HL', 
      progress: 88, 
      target: 85, 
      color: 'bg-red-500',
      averageScore: 84,
      nextAssessment: 'Literature Essay - Feb 1',
      focusArea: 'Creative Writing'
    },
    { 
      name: 'Afrikaans FAL', 
      progress: 65, 
      target: 70, 
      color: 'bg-orange-500',
      averageScore: 62,
      nextAssessment: 'Oral Assessment - Jan 30',
      focusArea: 'Writing Skills'
    },
    { 
      name: 'Geography', 
      progress: 72, 
      target: 75, 
      color: 'bg-cyan-500',
      averageScore: 70,
      nextAssessment: 'Climate Test - Jan 31',
      focusArea: 'Map Work'
    },
    { 
      name: 'Accounting', 
      progress: 79, 
      target: 82, 
      color: 'bg-indigo-500',
      averageScore: 76,
      nextAssessment: 'Financial Statements - Feb 2',
      focusArea: 'Cost Accounting'
    },
    { 
      name: 'Business Studies', 
      progress: 85, 
      target: 80, 
      color: 'bg-emerald-500',
      averageScore: 82,
      nextAssessment: 'Marketing Test - Jan 29',
      focusArea: 'Entrepreneurship'
    }
  ]

  const overallStats: OverallStats = {
    averageScore: 76,
    completionRate: 68,
    studyHours: 24,
    goalsAchieved: 12,
    weeklyTrend: 5,
    emotionalWellness: 72,
    attendance: '95%',
    classRank: '15/40',
    streak: 7
  }

  const recentActivities: RecentActivity[] = [
    { 
      subject: 'Mathematics', 
      activity: 'Completed Algebra Assignment', 
      time: '2 hours ago', 
      score: 85,
      type: 'assignment'
    },
    { 
      subject: 'Physical Sciences', 
      activity: 'Chemistry Practical Report', 
      time: '1 day ago', 
      score: 78,
      type: 'project'
    },
    { 
      subject: 'English', 
      activity: 'Literature Essay Submission', 
      time: '2 days ago', 
      score: 92,
      type: 'assignment'
    },
    { 
      subject: 'Life Sciences', 
      activity: 'Biology Theory Test', 
      time: '3 days ago', 
      score: 81,
      type: 'test'
    },
    { 
      subject: 'Accounting', 
      activity: 'Ledger Entries Quiz', 
      time: '4 days ago', 
      score: 88,
      type: 'quiz'
    }
  ]

  const upcomingDeadlines: UpcomingDeadline[] = [
    { 
      subject: 'Mathematics', 
      task: 'Trigonometry Test', 
      due: 'Tomorrow', 
      priority: 'high',
      type: 'Test',
      preparationTime: '2 hours needed'
    },
    { 
      subject: 'Accounting', 
      task: 'Financial Statements Project', 
      due: 'In 2 days', 
      priority: 'high',
      type: 'Project',
      preparationTime: '4 hours needed'
    },
    { 
      subject: 'Geography', 
      task: 'Research Project Submission', 
      due: 'In 5 days', 
      priority: 'medium',
      type: 'Project',
      preparationTime: '3 hours needed'
    },
    { 
      subject: 'Business Studies', 
      task: 'Case Study Analysis', 
      due: 'In 3 days', 
      priority: 'medium',
      type: 'Assignment',
      preparationTime: '1 hour needed'
    }
  ]

  const quickActions = [
    { icon: BookOpen, label: 'Continue Studying', description: 'Math - Calculus', action: '/study' },
    { icon: Target, label: 'Set Weekly Goal', description: 'Plan your targets', action: '/goals' },
    { icon: Bookmark, label: 'Save Resources', description: 'Bookmark study materials', action: '/resources' },
    { icon: Users, label: 'Join Study Group', description: 'Collaborate with peers', action: '/groups' }
  ]

  // Calculate subject distribution for pie chart
  const subjectDistribution: PieChartData[] = subjects.map(subject => ({
    name: subject.name,
    value: subject.progress,
    color: subject.color
  }))

  const getGreeting = (): string => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    return 'Good evening'
  }

  return (
    <div className="dashboard-container">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-header">
          <div>
            <h1 className="welcome-title">{getGreeting()}, John! 👋</h1>
            <p className="welcome-subtitle">Here's your learning overview for today</p>
          </div>
          <div className="streak-badge">
            <Zap size={16} className="text-yellow-500" />
            <span>{overallStats.streak} day streak</span>
          </div>
        </div>
        <div className="trend-badge">
          <TrendingUp size={16} />
          <span>Performance up {overallStats.weeklyTrend}% this week • {overallStats.attendance} attendance</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions-grid">
        {quickActions.map((action, index) => (
          <button key={index} className="quick-action-card">
            <div className="action-icon">
              <action.icon size={20} className="text-blue-600" />
            </div>
            <div className="action-content">
              <span className="action-label">{action.label}</span>
              <span className="action-description">{action.description}</span>
            </div>
            <ArrowUp size={16} className="text-gray-400 transform rotate-45" />
          </button>
        ))}
      </div>

      {/* Key Metrics Grid */}
      <div className="metrics-grid">
        <MetricCard
          icon={<BookOpen className="text-blue-600" />}
          title="Overall Average"
          value={`${overallStats.averageScore}%`}
          trend={overallStats.weeklyTrend}
          description={`Class rank: ${overallStats.classRank}`}
          color="blue"
        />
        <MetricCard
          icon={<Target className="text-green-600" />}
          title="Weekly Progress"
          value={`${overallStats.completionRate}%`}
          trend={2}
          description="Goals completed this week"
          color="green"
        />
        <MetricCard
          icon={<Clock className="text-purple-600" />}
          title="Study Time"
          value={`${overallStats.studyHours}h`}
          trend={-3}
          description="Total hours this week"
          color="purple"
        />
        <MetricCard
          icon={<Award className="text-orange-600" />}
          title="Achievements"
          value={overallStats.goalsAchieved}
          trend={8}
          description="Monthly goals completed"
          color="orange"
        />
      </div>

      <div className="dashboard-content">
        {/* Subjects Progress */}
        <div className="content-card">
          <div className="card-header">
            <div>
              <h2 className="card-title">Subject Performance</h2>
              <span className="card-subtitle">NSC Curriculum Progress & Focus Areas</span>
            </div>
            <div className="card-actions">
              <button className="action-button">View Detailed Report</button>
            </div>
          </div>
          <div className="subjects-grid">
            {subjects.map((subject, index) => (
              <SubjectCard key={index} subject={subject} />
            ))}
          </div>
        </div>

        {/* Charts and Additional Info */}
        <div className="sidebar-cards">
          {/* Progress Pie Chart */}
          <div className="content-card">
            <div className="card-header">
              <h2 className="card-title">Study Distribution</h2>
              <PieChart size={20} className="text-gray-400" />
            </div>
            <div className="pie-chart-container">
              <PieChartComponent data={subjectDistribution} />
            </div>
          </div>

          {/* Recent Activities */}
          <div className="content-card">
            <div className="card-header">
              <h2 className="card-title">Recent Activities</h2>
              <BarChart3 size={20} className="text-gray-400" />
            </div>
            <div className="activity-list">
              {recentActivities.map((activity, index) => (
                <ActivityItem key={index} activity={activity} />
              ))}
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="content-card">
            <div className="card-header">
              <h2 className="card-title">Upcoming Deadlines</h2>
              <Calendar size={20} className="text-gray-400" />
            </div>
            <div className="deadline-list">
              {upcomingDeadlines.map((deadline, index) => (
                <DeadlineItem key={index} deadline={deadline} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Metric Card Component
const MetricCard: React.FC<MetricCardProps> = ({ 
  icon, 
  title, 
  value, 
  trend, 
  description, 
  color 
}) => {
  const trendColor = trend >= 0 ? 'text-green-600' : 'text-red-600'
  const trendIcon = trend >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />
  
  return (
    <div className="metric-card">
      <div className="metric-header">
        <div className="metric-icon">
          {icon}
        </div>
        <div className={`trend-indicator ${trendColor}`}>
          {trendIcon}
          <span>{Math.abs(trend)}%</span>
        </div>
      </div>
      <div className="metric-content">
        <h3 className="metric-value">{value}</h3>
        <p className="metric-title">{title}</p>
        <p className="metric-description">{description}</p>
      </div>
    </div>
  )
}

// Subject Card Component
const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  const isOnTrack = subject.progress >= subject.target
  const performanceLevel = subject.averageScore >= 80 ? 'high' : subject.averageScore >= 70 ? 'medium' : 'low'
  
  return (
    <div className="subject-card">
      <div className="subject-header">
        <div className="subject-info">
          <h3 className="subject-name">{subject.name}</h3>
          <div className="subject-meta">
            <span className="subject-score">Avg: {subject.averageScore}%</span>
            {subject.nextAssessment && (
              <span className="assessment-date">{subject.nextAssessment}</span>
            )}
          </div>
        </div>
        <div className="subject-status">
          <span className={`status-badge ${isOnTrack ? 'status-good' : 'status-warning'}`}>
            {isOnTrack ? 'On Track' : 'Needs Focus'}
          </span>
          <div className={`performance-dot performance-${performanceLevel}`} />
        </div>
      </div>
      
      <div className="progress-section">
        <div className="progress-bar">
          <div 
            className={`progress-fill ${subject.color}`}
            style={{ width: `${subject.progress}%` }}
          ></div>
        </div>
        <div className="progress-stats">
          <span className="current-score">{subject.progress}%</span>
          <span className="target-score">Target: {subject.target}%</span>
        </div>
      </div>
      
      {subject.focusArea && (
        <div className="focus-area">
          <AlertTriangle size={12} />
          <span>Focus on: {subject.focusArea}</span>
        </div>
      )}
    </div>
  )
}

// Pie Chart Component using CSS
const PieChartComponent: React.FC<PieChartComponentProps> = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  let currentAngle = 0

  return (
    <div className="pie-chart">
      <svg viewBox="0 0 100 100" className="pie-svg">
        {data.map((item, index) => {
          const percentage = (item.value / total) * 100
          const angle = (percentage / 100) * 360
          const largeArcFlag = angle > 180 ? 1 : 0
          
          const x1 = 50 + 50 * Math.cos(currentAngle * Math.PI / 180)
          const y1 = 50 + 50 * Math.sin(currentAngle * Math.PI / 180)
          const x2 = 50 + 50 * Math.cos((currentAngle + angle) * Math.PI / 180)
          const y2 = 50 + 50 * Math.sin((currentAngle + angle) * Math.PI / 180)
          
          const pathData = [
            `M 50 50`,
            `L ${x1} ${y1}`,
            `A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            `Z`
          ].join(' ')
          
          currentAngle += angle
          
          return (
            <path
              key={index}
              d={pathData}
              className={`pie-segment ${item.color.replace('bg-', 'fill-')}`}
            />
          )
        })}
        <circle cx="50" cy="50" r="30" className="pie-center" />
      </svg>
      
      <div className="pie-legend">
        {data.map((item, index) => (
          <div key={index} className="legend-item">
            <div className={`legend-color ${item.color}`}></div>
            <span className="legend-text">
              {item.name} ({Math.round((item.value / total) * 100)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Activity Item Component
const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'test': return <BarChart3 size={14} />
      case 'quiz': return <Brain size={14} />
      case 'project': return <Target size={14} />
      default: return <BookOpen size={14} />
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="activity-item">
      <div className={`activity-icon activity-${activity.type}`}>
        {getActivityIcon(activity.type)}
      </div>
      <div className="activity-content">
        <p className="activity-text">{activity.activity}</p>
        <div className="activity-meta">
          <span className="activity-subject">{activity.subject}</span>
          <span className="activity-time">{activity.time}</span>
        </div>
      </div>
      <div className={`activity-score ${getScoreColor(activity.score)}`}>
        {activity.score}%
      </div>
    </div>
  )
}

// Deadline Item Component
const DeadlineItem: React.FC<DeadlineItemProps> = ({ deadline }) => (
  <div className="deadline-item">
    <div className="deadline-info">
      <h4 className="deadline-task">{deadline.task}</h4>
      <div className="deadline-details">
        <span className="deadline-subject">{deadline.subject}</span>
        <span className="deadline-type">{deadline.type}</span>
        <span className="preparation-time">{deadline.preparationTime}</span>
      </div>
    </div>
    <div className="deadline-meta">
      <span className={`priority-badge priority-${deadline.priority}`}>
        {deadline.priority}
      </span>
      <span className="deadline-due">{deadline.due}</span>
    </div>
  </div>
)

export default Dashboard