"use client"
import {
    Activity,
    AlertTriangle,
    Award,
    BarChart3,
    BarChart4,
    Bookmark,
    BookOpen,
    BookText,
    BrainCircuit,
    Calendar,
    CalendarDays,
    CheckCircle2,
    ChevronDown,
    ChevronUp,
    Clock,
    Clock4,
    Download,
    Eye,
    Gauge,
    Lightbulb,
    LineChart,
    MessageCircle,
    Mic,
    MousePointerClick,
    PieChart,
    Puzzle,
    Send,
    Sparkles,
    Star,
    Target,
    TargetIcon,
    TrendingDown,
    TrendingUp,
    UserCheck,
    Users,
    VideoIcon,
    Zap
} from 'lucide-react';
import React, { use, useState } from 'react';

import subjectsData from '../_data';
import './Subject.css';

interface ChatMessage {
    text: string;
    isUser: boolean;
}

const Subject: React.FC<{ params: Promise<{ subject: string }> }> = ({ params }) => {
    const unwrappedParams = use(params)
    const subject = subjectsData.find(s => s.id === unwrappedParams.subject)
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
    const [userInput, setUserInput] = useState('')
    const [expandedTopic, setExpandedTopic] = useState<number | null>(null)
    const [selectedTimeframe, setSelectedTimeframe] = useState<'week' | 'month' | 'term'>('week')
    const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'resources'>('overview')

    if (!subject) {
        return (
            <div className="subject-not-found">
                <AlertTriangle size={48} className="text-yellow-500 mb-4" />
                <h1>Subject Not Found</h1>
                <p>The subject "{unwrappedParams.subject}" does not exist in your curriculum.</p>
            </div>
        )
    }

    // Enhanced analytics data with real subject data integration
    const performanceData = {
        weekly: subject.weeklyStudyHours || [4, 5, 3, 6, 4, 5, 4],
        monthly: [62, 65, 68, 72, 75, 78, 80, 82, 79, 75],
        term: [58, 62, 65, 68, 72, 75, 78, 80, 82, 84, 82, 80]
    }

    const studyHoursData = {
        weekly: subject.weeklyStudyHours || [4, 5, 3, 6, 4, 5, 4],
        monthly: [12, 14, 10, 16, 18, 15, 14, 17, 16, 15],
        term: [45, 48, 42, 50, 52, 48, 46, 51, 49, 47, 50, 52]
    }

    // Enhanced efficiency data based on subject analytics
    const efficiencyData = [
        { category: 'Study Efficiency', score: subject.studyEfficiency, icon: <Gauge size={16} /> },
        { category: 'Retention Rate', score: subject.retentionRate, icon: <BrainCircuit size={16} /> },
        { category: 'Learning Velocity', score: Math.round(subject.learningVelocity * 10), icon: <TrendingUp size={16} /> },
        { category: 'Time Management', score: subject.assessmentPatterns?.timeManagement || 68, icon: <Clock4 size={16} /> },
        { category: 'Engagement', score: subject.engagementMetrics?.participationRate || 75, icon: <UserCheck size={16} /> }
    ]

    const predictedScores = {
        current: subject.averageScore,
        predicted: subject.predictedScore,
        target: subject.target
    }

    // Enhanced topic data from subject analytics
    const enhancedTopics = subject.topicPerformance?.map(topic => ({
        ...topic,
        progress: topic.score,
        strengths: getTopicStrengths(topic.topic),
        weaknesses: getTopicWeaknesses(topic.topic),
        recommendations: getTopicRecommendations(topic.topic)
    })) || []

    function getTopicStrengths(topic: string): string {
        const strengths: Record<string, string> = {
            'Algebra': 'Strong problem-solving and equation manipulation',
            'Calculus': 'Good understanding of basic differentiation',
            'Geometry': 'Excellent spatial reasoning skills',
            'Statistics': 'Accurate data interpretation',
            'Trigonometry': 'Solid grasp of trigonometric identities'
        }
        return strengths[topic] || 'Good conceptual understanding'
    }

    function getTopicWeaknesses(topic: string): string {
        const weaknesses: Record<string, string> = {
            'Algebra': 'Needs practice with complex equations',
            'Calculus': 'Integration techniques require improvement',
            'Geometry': 'Proof writing needs development',
            'Statistics': 'Probability concepts need reinforcement',
            'Trigonometry': 'Application in real-world problems'
        }
        return weaknesses[topic] || 'Need more practice with advanced applications'
    }

    function getTopicRecommendations(topic: string): string {
        const recommendations: Record<string, string> = {
            'Algebra': 'Practice advanced equation solving daily',
            'Calculus': 'Focus on integration methods and applications',
            'Geometry': 'Work on geometric proofs and theorems',
            'Statistics': 'Study probability distributions and analysis',
            'Trigonometry': 'Master trigonometric identities and graphs'
        }
        return recommendations[topic] || 'Focus on practice problems and review key concepts'
    }

    // Enhanced resources based on subject type
    const enhancedResources = [
        {
            title: 'Interactive Practice Problems',
            description: 'AI-generated exercises tailored to your learning gaps',
            category: 'Practice',
            type: 'interactive',
            icon: <MousePointerClick className="text-blue-500" size={20} />
        },
        {
            title: 'Concept Video Library',
            description: 'Visual explanations for complex topics',
            category: 'Visual Learning',
            type: 'video',
            icon: <VideoIcon className="text-red-500" size={20} />
        },
        {
            title: 'Study Guide & Notes',
            description: 'Comprehensive summary of key concepts',
            category: 'Reference',
            type: 'pdf',
            icon: <BookText className="text-green-500" size={20} />
        },
        {
            title: 'Audio Explanations',
            description: 'Listen to concepts on the go',
            category: 'Audio',
            type: 'audio',
            icon: <Mic className="text-purple-500" size={20} />
        },
        {
            title: 'Challenge Puzzles',
            description: 'Advanced problems to test your understanding',
            category: 'Advanced',
            type: 'interactive',
            icon: <Puzzle className="text-orange-500" size={20} />
        }
    ]

    const handleSendMessage = () => {
        if (!userInput.trim()) return

        const newMessage: ChatMessage = { text: userInput, isUser: true }
        const aiResponse: ChatMessage = {
            text: getAIResponse(userInput),
            isUser: false
        }

        setChatMessages(prev => [...prev, newMessage, aiResponse])
        setUserInput('')
    }

    const getAIResponse = (message: string): string => {
        const lowerMessage = message.toLowerCase()

        if (lowerMessage.includes('help') || lowerMessage.includes('struggl')) {
            return `I can see you're looking for help with ${subject.name}. Based on your performance analytics:\n\n• Focus on ${subject.weakness} - your current score: ${subject.topicPerformance?.find(t => t.topic === subject.weakness)?.score || 65}%\n• Study efficiency: ${subject.studyEfficiency}% - try spaced repetition\n• Recommended: ${subject.improvementTips?.slice(0, 2).join(', ')}\n• Learning velocity: ${subject.learningVelocity}x average`
        } else if (lowerMessage.includes('improve') || lowerMessage.includes('better')) {
            return `To improve in ${subject.name}, leverage these insights:\n\n• Peak learning hours: ${subject.learningBehavior?.peakLearningHours?.join(', ') || 'Afternoons'}\n• Best study style: ${subject.learningBehavior?.preferredLearningStyle || 'Visual'}\n• Target weak areas: ${subject.knowledgeGaps?.map(gap => gap.concept).join(', ')}\n• Study consistency: ${subject.studyPatterns?.consistency}% - aim for 85%+`
        } else if (lowerMessage.includes('resource') || lowerMessage.includes('material')) {
            return `Smart resources for ${subject.name}:\n\n• Adaptive practice: Targets your ${subject.knowledgeGaps?.[0]?.concept || 'key gaps'}\n• Video tutorials: ${subject.learningResources?.videoTutorials || 70}% effectiveness for you\n• Group study: ${subject.socialLearning?.groupStudyEffectiveness || 6.5}/10 impact\n• AI-generated exercises based on your error patterns`
        } else if (lowerMessage.includes('analytics') || lowerMessage.includes('stats')) {
            return `Your ${subject.name} analytics breakdown:\n\n• Performance trend: ${subject.performanceTrend}\n• Efficiency score: ${subject.studyEfficiency}%\n• Retention rate: ${subject.retentionRate}%\n• Class percentile: ${subject.peerComparison?.percentile}%\n• Risk level: ${subject.predictionMetrics?.riskLevel}\n• Predicted final score: ${subject.predictedScore}%`
        } else {
            return `I understand you're asking about ${subject.name}. For personalized advice:\n\n• Ask about specific topics like "${subject.topicPerformance?.[0]?.topic}"\n• Request study strategies based on your learning style\n• Get help with upcoming deadlines\n• Explore resources matching your ${subject.learningBehavior?.preferredLearningStyle || 'preferred'} learning style`
        }
    }

    const toggleTopicExpansion = (index: number) => {
        setExpandedTopic(expandedTopic === index ? null : index)
    }

    const getPerformanceTrend = () => {
        return subject.performanceTrend === 'improving' ? 'up' :
            subject.performanceTrend === 'declining' ? 'down' : 'stable'
    }

    const getPerformanceData = (): number[] => {
        const timeframeMap = {
            week: 'weekly',
            month: 'monthly',
            term: 'term'
        } as const;
        return performanceData[timeframeMap[selectedTimeframe]]
    }

    const getStudyHoursData = (): number[] => {
        const timeframeMap = {
            week: 'weekly',
            month: 'monthly',
            term: 'term'
        } as const;
        return studyHoursData[timeframeMap[selectedTimeframe]]
    }

    // Enhanced analytics metrics
    const analyticsMetrics = [
        {
            label: 'Cognitive Load',
            value: subject.cognitiveAnalytics?.problemSolvingSpeed || 7.2,
            max: 10,
            description: 'Problem-solving efficiency'
        },
        {
            label: 'Retention Rate',
            value: subject.retentionRate || 75,
            max: 100,
            description: 'Knowledge retention over time'
        },
        {
            label: 'Learning Velocity',
            value: subject.learningVelocity || 1.2,
            max: 2.0,
            description: 'Pace of skill acquisition'
        },
        {
            label: 'Engagement Score',
            value: subject.engagementMetrics?.participationRate || 80,
            max: 100,
            description: 'Active participation level'
        }
    ]

    return (
        <div className="subject-detail-container">
            {/* Enhanced Header Section */}
            <div className="subject-header">
                <div className="subject-banner">
                    <div className="subject-identity">
                        <div className={`subject-icon-large ${subject.color} shimmer`}>
                            <BookOpen size={32} className="text-white" />
                        </div>
                        <div className="subject-info">
                            <div className="subject-header-main">
                                <h1 className="subject-title">{subject.name}</h1>
                                <span className="subject-code-badge">{subject.code}</span>
                            </div>
                            <p className="subject-description">{subject.description}</p>
                            <div className="subject-meta-grid">
                                <div className="meta-item">
                                    <Target size={16} />
                                    <span>Target: <strong>{subject.target}%</strong></span>
                                </div>
                                <div className="meta-item">
                                    <Activity size={16} />
                                    <span>Trend: <strong className={`trend-${subject.performanceTrend}`}>{subject.performanceTrend}</strong></span>
                                </div>
                                <div className="meta-item">
                                    <Award size={16} />
                                    <span>Rank: <strong>{subject.peerComparison?.ranking}/{subject.peerComparison?.classAverage}</strong></span>
                                </div>
                                <div className="meta-item">
                                    <UserCheck size={16} />
                                    <span>Attendance: <strong>{subject.attendance?.attendanceRate}%</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="progress-overview">
                        <div className="progress-circle">
                            <div className="progress-text">
                                <span className="progress-percent">{subject.progress}%</span>
                                <span className="progress-label">Overall Progress</span>
                            </div>
                            <svg className="progress-ring" width="120" height="120">
                                <circle
                                    className="progress-ring-background"
                                    strokeWidth="8"
                                    fill="transparent"
                                    r="52"
                                    cx="60"
                                    cy="60"
                                />
                                <circle
                                    className={`progress-ring-fill ${subject.color.replace('bg-', 'stroke-')}`}
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    fill="transparent"
                                    r="52"
                                    cx="60"
                                    cy="60"
                                    strokeDasharray={`${subject.progress * 3.27} 327`}
                                />
                            </svg>
                        </div>
                        <div className="progress-stats">
                            <div className="progress-stat">
                                <Sparkles size={16} className="text-blue-500" />
                                <span>Efficiency: {subject.studyEfficiency}%</span>
                            </div>
                            <div className="progress-stat">
                                <BrainCircuit size={16} className="text-green-500" />
                                <span>Retention: {subject.retentionRate}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="navigation-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        <BarChart3 size={18} />
                        Overview
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
                        onClick={() => setActiveTab('analytics')}
                    >
                        <LineChart size={18} />
                        Deep Analytics
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'resources' ? 'active' : ''}`}
                        onClick={() => setActiveTab('resources')}
                    >
                        <Bookmark size={18} />
                        Smart Resources
                    </button>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="subject-content-grid">
                {/* Left Column - Enhanced Analytics */}
                <div className="content-column">
                    {/* Enhanced Stats Overview */}
                    <div className="stats-overview-grid">
                        <div className="stat-card-main performance">
                            <div className="stat-header">
                                <TrendingUp className="stat-icon-main" />
                                <div className="stat-trend">
                                    {getPerformanceTrend() === 'up' ?
                                        <TrendingUp size={16} className="text-green-500" /> :
                                        getPerformanceTrend() === 'down' ?
                                            <TrendingDown size={16} className="text-red-500" /> :
                                            <Activity size={16} className="text-yellow-500" />
                                    }
                                </div>
                            </div>
                            <div className="stat-value-main">{subject.averageScore}%</div>
                            <div className="stat-label-main">Average Score</div>
                            <div className="stat-comparison">
                                {subject.averageScore >= subject.target ?
                                    `+${subject.averageScore - subject.target}% above target` :
                                    `${subject.target - subject.averageScore}% below target`
                                }
                            </div>
                        </div>

                        <div className="stat-card-main efficiency">
                            <div className="stat-header">
                                <Zap className="stat-icon-main" />
                                <div className="stat-trend">
                                    <Gauge size={16} className="text-blue-500" />
                                </div>
                            </div>
                            <div className="stat-value-main">{subject.studyEfficiency}%</div>
                            <div className="stat-label-main">Study Efficiency</div>
                            <div className="stat-comparison">
                                {subject.studyEfficiency >= 80 ? 'Excellent' :
                                    subject.studyEfficiency >= 70 ? 'Good' : 'Needs improvement'}
                            </div>
                        </div>

                        <div className="stat-card-main time">
                            <div className="stat-header">
                                <Clock className="stat-icon-main" />
                                <div className="stat-trend">
                                    <CalendarDays size={16} className="text-purple-500" />
                                </div>
                            </div>
                            <div className="stat-value-main">{subject.studyHours}h</div>
                            <div className="stat-label-main">Study Hours</div>
                            <div className="stat-comparison">
                                {Math.round(subject.studyHours / 4)}h weekly average
                            </div>
                        </div>

                        <div className="stat-card-main rank">
                            <div className="stat-header">
                                <Users className="stat-icon-main" />
                                <div className="stat-trend">
                                    <Award size={16} className="text-orange-500" />
                                </div>
                            </div>
                            <div className="stat-value-main">#{subject.peerComparison?.ranking}</div>
                            <div className="stat-label-main">Class Rank</div>
                            <div className="stat-comparison">
                                Top {subject.peerComparison?.percentile}% of class
                            </div>
                        </div>
                    </div>

                    {/* Performance Prediction with Enhanced Analytics */}
                    <div className="prediction-card">
                        <h2 className="card-title">
                            <TargetIcon className="icon" />
                            Performance Intelligence
                            <span className="ai-badge">AI Powered</span>
                        </h2>
                        <div className="prediction-content">
                            <div className="prediction-bars">
                                <div className="prediction-bar">
                                    <div className="prediction-label">
                                        <Activity size={14} />
                                        Current
                                    </div>
                                    <div className="prediction-bar-track">
                                        <div
                                            className="prediction-bar-fill current"
                                            style={{ width: `${predictedScores.current}%` }}
                                        ></div>
                                    </div>
                                    <div className="prediction-value">{predictedScores.current}%</div>
                                </div>
                                <div className="prediction-bar">
                                    <div className="prediction-label">
                                        <TrendingUp size={14} />
                                        Predicted
                                    </div>
                                    <div className="prediction-bar-track">
                                        <div
                                            className="prediction-bar-fill predicted"
                                            style={{ width: `${predictedScores.predicted}%` }}
                                        ></div>
                                    </div>
                                    <div className="prediction-value">{predictedScores.predicted}%</div>
                                </div>
                                <div className="prediction-bar">
                                    <div className="prediction-label">
                                        <Target size={14} />
                                        Target
                                    </div>
                                    <div className="prediction-bar-track">
                                        <div
                                            className="prediction-bar-fill target"
                                            style={{ width: `${predictedScores.target}%` }}
                                        ></div>
                                    </div>
                                    <div className="prediction-value">{predictedScores.target}%</div>
                                </div>
                            </div>
                            <div className="prediction-insight">
                                <BrainCircuit size={16} />
                                <div>
                                    <strong>AI Insight:</strong> {subject.predictionMetrics?.riskLevel === 'low' ?
                                        "You're on track to exceed your target! Maintain current study patterns." :
                                        "Focus on consistent practice and address knowledge gaps to reach your target."}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Performance Charts */}
                    <div className="charts-card">
                        <div className="charts-header">
                            <h2 className="card-title">
                                <BarChart4 className="icon" />
                                Performance Analytics
                            </h2>
                            <div className="timeframe-selector">
                                <button
                                    className={`timeframe-btn ${selectedTimeframe === 'week' ? 'active' : ''}`}
                                    onClick={() => setSelectedTimeframe('week')}
                                >
                                    <Calendar size={14} />
                                    Week
                                </button>
                                <button
                                    className={`timeframe-btn ${selectedTimeframe === 'month' ? 'active' : ''}`}
                                    onClick={() => setSelectedTimeframe('month')}
                                >
                                    <CalendarDays size={14} />
                                    Month
                                </button>
                                <button
                                    className={`timeframe-btn ${selectedTimeframe === 'term' ? 'active' : ''}`}
                                    onClick={() => setSelectedTimeframe('term')}
                                >
                                    <BookOpen size={14} />
                                    Term
                                </button>
                            </div>
                        </div>

                        <div className="charts-grid-enhanced">
                            <div className="chart-container-enhanced">
                                <h4 className="chart-title">
                                    <TrendingUp size={16} />
                                    Performance Trend
                                </h4>
                                <div className="bar-chart-enhanced">
                                    {getPerformanceData().map((value: number, index: number) => (
                                        <div key={index} className="bar-wrapper-enhanced">
                                            <div
                                                className={`bar-enhanced ${subject.color} glow`}
                                                style={{ height: `${value}%` }}
                                                title={`${value}%`}
                                            ></div>
                                            <span className="bar-label-enhanced">
                                                {selectedTimeframe === 'week' ? ['M', 'T', 'W', 'T', 'F', 'S', 'S'][index] :
                                                    selectedTimeframe === 'month' ? `W${index + 1}` : `M${index + 1}`}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="chart-container-enhanced">
                                <h4 className="chart-title">
                                    <Clock size={16} />
                                    Study Hours
                                </h4>
                                <div className="line-chart-enhanced">
                                    <div className="line-graph-enhanced">
                                        {getStudyHoursData().map((hours: number, index: number) => {
                                            const maxHours = Math.max(...getStudyHoursData())
                                            const percentage = maxHours > 0 ? (hours / maxHours) * 90 : 0
                                            return (
                                                <div
                                                    key={index}
                                                    className="data-point-enhanced glow"
                                                    style={{
                                                        left: `${(index / (getStudyHoursData().length - 1)) * 100}%`,
                                                        bottom: `${percentage}%`
                                                    }}
                                                    title={`${hours}h`}
                                                ></div>
                                            )
                                        })}
                                    </div>
                                    <div className="chart-labels-enhanced">
                                        {getStudyHoursData().map((_: number, index: number) => (
                                            <span key={index}>
                                                {selectedTimeframe === 'week' ? ['M', 'T', 'W', 'T', 'F', 'S', 'S'][index] :
                                                    selectedTimeframe === 'month' ? `W${index + 1}` : `M${index + 1}`}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Skills Efficiency */}
                    <div className="efficiency-card">
                        <h2 className="card-title">
                            <PieChart className="icon" />
                            Learning Analytics
                            <span className="ai-badge">Real-time</span>
                        </h2>
                        <div className="efficiency-grid">
                            {efficiencyData.map((skill, index) => (
                                <div key={index} className="efficiency-item">
                                    <div className="efficiency-header">
                                        <div className="efficiency-category">
                                            {skill.icon}
                                            <span>{skill.category}</span>
                                        </div>
                                        <span className="efficiency-score">{skill.score}%</span>
                                    </div>
                                    <div className="efficiency-bar">
                                        <div
                                            className={`efficiency-fill ${skill.score >= 80 ? 'excellent' :
                                                    skill.score >= 70 ? 'good' :
                                                        skill.score >= 60 ? 'average' : 'poor'
                                                } glow`}
                                            style={{ width: `${skill.score}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced Topic Breakdown */}
                    <div className="topics-card">
                        <h2 className="card-title">
                            <BrainCircuit className="icon" />
                            Topic Intelligence
                        </h2>
                        <div className="topics-list">
                            {enhancedTopics.map((topic, index) => (
                                <div key={index} className="topic-item glow-hover">
                                    <div
                                        className="topic-header"
                                        onClick={() => toggleTopicExpansion(index)}
                                    >
                                        <div className="topic-info">
                                            <span className="topic-name">{topic.topic}</span>
                                            <div className="topic-trend">
                                                {topic.trend === 'up' && <TrendingUp size={14} className="text-green-500" />}
                                                {topic.trend === 'down' && <TrendingDown size={14} className="text-red-500" />}
                                                {topic.trend === 'stable' && <Activity size={14} className="text-yellow-500" />}
                                            </div>
                                        </div>
                                        <div className="topic-score-container">
                                            <span className={`topic-score ${topic.score >= 80 ? 'score-excellent' :
                                                    topic.score >= 70 ? 'score-good' :
                                                        topic.score >= 60 ? 'score-average' : 'score-poor'
                                                }`}>
                                                {topic.score}%
                                            </span>
                                            {expandedTopic === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                        </div>
                                    </div>
                                    <div className="topic-progress">
                                        <div
                                            className={`topic-progress-bar ${topic.score >= 80 ? 'bg-green-500' :
                                                    topic.score >= 70 ? 'bg-blue-500' :
                                                        topic.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                                                }`}
                                            style={{ width: `${topic.progress}%` }}
                                        ></div>
                                    </div>
                                    {expandedTopic === index && (
                                        <div className="topic-details">
                                            <div className="detail-item">
                                                <strong>Strengths:</strong> {topic.strengths}
                                            </div>
                                            <div className="detail-item">
                                                <strong>Areas to Improve:</strong> {topic.weaknesses}
                                            </div>
                                            <div className="detail-item">
                                                <strong>AI Recommendations:</strong> {topic.recommendations}
                                            </div>
                                            <div className="topic-actions">
                                                <button className="action-btn primary glow">
                                                    <Eye size={14} />
                                                    View Resources
                                                </button>
                                                <button className="action-btn secondary">
                                                    <BookOpen size={14} />
                                                    Practice Now
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Enhanced Chatbot & Resources */}
                <div className="content-column">
                    {/* Enhanced AI Study Assistant */}
                    <div className="chatbot-card">
                        <h2 className="card-title">
                            <MessageCircle className="icon" />
                            AI Study Assistant
                            <span className="ai-badge">Live</span>
                        </h2>
                        <div className="chatbot-container">
                            <div className="chat-messages">
                                {chatMessages.length === 0 ? (
                                    <div className="welcome-message">
                                        <BrainCircuit size={48} className="welcome-icon" />
                                        <h3>Hello! I'm your AI Study Assistant</h3>
                                        <p>I have deep insights into your learning patterns and can help you with:</p>
                                        <ul>
                                            <li>Personalized study strategies for {subject.name}</li>
                                            <li>Understanding your cognitive analytics</li>
                                            <li>Optimizing your study schedule</li>
                                            <li>Targeting knowledge gaps effectively</li>
                                            <li>Real-time performance analysis</li>
                                        </ul>
                                        <p>Ask me anything about your learning journey!</p>
                                    </div>
                                ) : (
                                    chatMessages.map((message, index) => (
                                        <div
                                            key={index}
                                            className={`message ${message.isUser ? 'user-message' : 'ai-message'}`}
                                        >
                                            {message.text.split('\n').map((line: string, lineIndex: number) => (
                                                <p key={lineIndex}>{line}</p>
                                            ))}
                                        </div>
                                    ))
                                )}
                            </div>
                            <div className="chat-input-container">
                                <input
                                    type="text"
                                    placeholder="Ask about analytics, study strategies, or concepts..."
                                    className="chat-input"
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') handleSendMessage()
                                    }}
                                />
                                <button
                                    className="send-button glow"
                                    onClick={handleSendMessage}
                                    disabled={!userInput.trim()}
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Study Tips */}
                    <div className="tips-card">
                        <h2 className="card-title">
                            <Lightbulb className="icon" />
                            Smart Study Strategies
                        </h2>
                        <div className="tips-list">
                            {subject.improvementTips?.map((tip: string, index: number) => (
                                <div key={index} className="tip-item glow-hover">
                                    <div className="tip-header">
                                        <div className="tip-priority">
                                            {index === 0 ? <AlertTriangle className="text-red-500" size={16} /> :
                                                index < 3 ? <Star className="text-yellow-500" size={16} /> :
                                                    <CheckCircle2 className="text-green-500" size={16} />}
                                        </div>
                                        <span className="tip-title">{tip.split(':')[0]}</span>
                                    </div>
                                    <p className="tip-description">{tip.split(':')[1] || tip}</p>
                                    <span className={`tip-type ${index === 0 ? 'high' : index < 3 ? 'medium' : 'low'}`}>
                                        {index === 0 ? 'High Priority' : index < 3 ? 'Medium Priority' : 'Low Priority'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced Learning Resources */}
                    <div className="resources-card">
                        <h2 className="card-title">
                            <Bookmark className="icon" />
                            Smart Resources
                        </h2>
                        <div className="resources-list">
                            {enhancedResources.map((resource, index) => (
                                <div key={index} className="resource-item glow-hover">
                                    <div className="resource-icon">
                                        {resource.icon}
                                    </div>
                                    <div className="resource-content">
                                        <h4 className="resource-title">{resource.title}</h4>
                                        <p className="resource-description">{resource.description}</p>
                                        <span className="resource-category">{resource.category}</span>
                                    </div>
                                    <button className="resource-download glow">
                                        <Download size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Analytics Snapshot */}
                    <div className="analytics-snapshot">
                        <h3 className="snapshot-title">
                            <Activity className="icon" />
                            Quick Analytics
                        </h3>
                        <div className="analytics-grid">
                            {analyticsMetrics.map((metric, index) => (
                                <div key={index} className="analytics-item">
                                    <div className="analytics-label">{metric.label}</div>
                                    <div className="analytics-value">{metric.value}/{metric.max}</div>
                                    <div className="analytics-bar">
                                        <div
                                            className="analytics-fill"
                                            style={{ width: `${(metric.value / metric.max) * 100}%` }}
                                        ></div>
                                    </div>
                                    <div className="analytics-description">{metric.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subject