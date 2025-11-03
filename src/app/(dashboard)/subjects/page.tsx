import React from 'react'
import Link from 'next/link'
import { 
  BookOpen, 
  TrendingUp, 
  Clock, 
  Target, 
  Award,
  BarChart3,
  Calendar,
  FileText,
  ArrowRight,
  Star
} from 'lucide-react'

import './Subjects.css'

// Mock data for South African NSC subjects
const subjectsData = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    code: 'MAT',
    description: 'Algebra, Calculus, Geometry and Mathematical Literacy',
    progress: 75,
    target: 80,
    averageScore: 72,
    studyHours: 18,
    assignmentsCompleted: 12,
    upcomingDeadlines: 2,
    strength: 'Algebra',
    weakness: 'Calculus',
    lastActivity: '2 days ago',
    color: 'bg-blue-500',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200'
  },
  {
    id: 'physical-sciences',
    name: 'Physical Sciences',
    code: 'PSC',
    description: 'Physics and Chemistry fundamentals',
    progress: 68,
    target: 75,
    averageScore: 65,
    studyHours: 15,
    assignmentsCompleted: 8,
    upcomingDeadlines: 3,
    strength: 'Chemistry',
    weakness: 'Physics',
    lastActivity: '1 day ago',
    color: 'bg-purple-500',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200'
  },
  {
    id: 'life-sciences',
    name: 'Life Sciences',
    code: 'LSC',
    description: 'Biology, Ecology and Human Anatomy',
    progress: 82,
    target: 78,
    averageScore: 79,
    studyHours: 12,
    assignmentsCompleted: 10,
    upcomingDeadlines: 1,
    strength: 'Human Biology',
    weakness: 'Ecology',
    lastActivity: '3 days ago',
    color: 'bg-green-500',
    textColor: 'text-green-600',
    borderColor: 'border-green-200'
  },
  {
    id: 'english',
    name: 'English Home Language',
    code: 'ENG',
    description: 'Language, Literature and Communication',
    progress: 88,
    target: 85,
    averageScore: 84,
    studyHours: 10,
    assignmentsCompleted: 15,
    upcomingDeadlines: 0,
    strength: 'Literature',
    weakness: 'Creative Writing',
    lastActivity: 'Today',
    color: 'bg-red-500',
    textColor: 'text-red-600',
    borderColor: 'border-red-200'
  },
  {
    id: 'afrikaans',
    name: 'Afrikaans FAL',
    code: 'AFR',
    description: 'First Additional Language - Reading and Writing',
    progress: 65,
    target: 70,
    averageScore: 62,
    studyHours: 8,
    assignmentsCompleted: 6,
    upcomingDeadlines: 2,
    strength: 'Reading',
    weakness: 'Writing',
    lastActivity: '4 days ago',
    color: 'bg-orange-500',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-200'
  },
  {
    id: 'geography',
    name: 'Geography',
    code: 'GEO',
    description: 'Physical and Human Geography',
    progress: 72,
    target: 75,
    averageScore: 70,
    studyHours: 9,
    assignmentsCompleted: 7,
    upcomingDeadlines: 1,
    strength: 'Map Work',
    weakness: 'Climate Studies',
    lastActivity: '2 days ago',
    color: 'bg-cyan-500',
    textColor: 'text-cyan-600',
    borderColor: 'border-cyan-200'
  },
  {
    id: 'accounting',
    name: 'Accounting',
    code: 'ACC',
    description: 'Financial Accounting and Business Principles',
    progress: 79,
    target: 82,
    averageScore: 76,
    studyHours: 14,
    assignmentsCompleted: 9,
    upcomingDeadlines: 2,
    strength: 'Financial Statements',
    weakness: 'Cost Accounting',
    lastActivity: 'Yesterday',
    color: 'bg-indigo-500',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-200'
  },
  {
    id: 'business-studies',
    name: 'Business Studies',
    code: 'BUS',
    description: 'Business Management and Entrepreneurship',
    progress: 85,
    target: 80,
    averageScore: 82,
    studyHours: 11,
    assignmentsCompleted: 11,
    upcomingDeadlines: 1,
    strength: 'Business Management',
    weakness: 'Entrepreneurship',
    lastActivity: 'Today',
    color: 'bg-emerald-500',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-200'
  }
]

const Subjects = () => {
  const overallStats = {
    totalSubjects: subjectsData.length,
    averageProgress: Math.round(subjectsData.reduce((sum, subject) => sum + subject.progress, 0) / subjectsData.length),
    totalStudyHours: subjectsData.reduce((sum, subject) => sum + subject.studyHours, 0),
    assignmentsCompleted: subjectsData.reduce((sum, subject) => sum + subject.assignmentsCompleted, 0)
  }

  return (
    <div className="subjects-container">
      {/* Header Section */}
      <div className="subjects-header">
        <div className="header-content">
          <div className="header-text">
            <h1 className="page-title">My Subjects</h1>
            <p className="page-subtitle">National Senior Certificate Curriculum</p>
          </div>
          <div className="header-stats">
            <div className="stat-card">
              <BookOpen className="text-blue-600" size={20} />
              <div>
                <span className="stat-value">{overallStats.totalSubjects}</span>
                <span className="stat-label">Subjects</span>
              </div>
            </div>
            <div className="stat-card">
              <TrendingUp className="text-green-600" size={20} />
              <div>
                <span className="stat-value">{overallStats.averageProgress}%</span>
                <span className="stat-label">Avg Progress</span>
              </div>
            </div>
            <div className="stat-card">
              <Clock className="text-purple-600" size={20} />
              <div>
                <span className="stat-value">{overallStats.totalStudyHours}h</span>
                <span className="stat-label">Study Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="subjects-grid">
        {subjectsData.map((subject) => (
          <Link 
            key={subject.id} 
            href={`/subjects/${subject.id}`}
            className="subject-card-link"
          >
            <div className="subject-card">
              {/* Subject Header */}
              <div className="subject-header">
                <div className="subject-icon">
                  <div className={`subject-badge ${subject.color}`}>
                    <BookOpen size={20} className="text-white" />
                  </div>
                  <div className="subject-info">
                    <h3 className="subject-name">{subject.name}</h3>
                    <p className="subject-code">{subject.code}</p>
                  </div>
                </div>
                <div className="subject-arrow">
                  <ArrowRight size={16} className="text-gray-400" />
                </div>
              </div>

              {/* Progress Section */}
              <div className="progress-section">
                <div className="progress-header">
                  <span className="progress-label">Progress</span>
                  <span className="progress-value">{subject.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className={`progress-fill ${subject.color}`}
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
                <div className="progress-target">
                  Target: {subject.target}%
                </div>
              </div>

              {/* Analytics Summary */}
              <div className="analytics-grid">
                <div className="analytics-item">
                  <BarChart3 size={16} className="text-gray-500" />
                  <span className="analytics-value">{subject.averageScore}%</span>
                  <span className="analytics-label">Avg Score</span>
                </div>
                <div className="analytics-item">
                  <Clock size={16} className="text-gray-500" />
                  <span className="analytics-value">{subject.studyHours}h</span>
                  <span className="analytics-label">Study Time</span>
                </div>
                <div className="analytics-item">
                  <FileText size={16} className="text-gray-500" />
                  <span className="analytics-value">{subject.assignmentsCompleted}</span>
                  <span className="analytics-label">Assignments</span>
                </div>
                <div className="analytics-item">
                  <Calendar size={16} className="text-gray-500" />
                  <span className="analytics-value">{subject.upcomingDeadlines}</span>
                  <span className="analytics-label">Due Soon</span>
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="swot-section">
                <div className="swot-item">
                  <div className="swot-label strength">
                    <Star size={12} />
                    Strength
                  </div>
                  <span className="swot-text">{subject.strength}</span>
                </div>
                <div className="swot-item">
                  <div className="swot-label weakness">
                    <Target size={12} />
                    Focus Area
                  </div>
                  <span className="swot-text">{subject.weakness}</span>
                </div>
              </div>

              {/* Last Activity */}
              <div className="last-activity">
                <span className="activity-text">Last activity: {subject.lastActivity}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Subjects