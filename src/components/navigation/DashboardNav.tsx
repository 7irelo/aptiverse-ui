'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  BarChart3, 
  User, 
  BookOpen, 
  Brain, 
  Target,
  Award,
  Settings,
  Users,
  GraduationCap,
  Heart,
  Calendar,
  FileText,
  Bell,
  HelpCircle,
  ChevronDown,
  Calculator,
  Microscope,
  BookText,
  Languages,
  Globe,
  Building
} from 'lucide-react'
import './DashboardNav.css'

// Subjects data for the dropdown - removed progress property
const subjectsData = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    code: 'MAT',
    color: 'bg-blue-500',
    icon: Calculator,
  },
  {
    id: 'physical-sciences',
    name: 'Physical Sciences',
    code: 'PSC',
    color: 'bg-purple-500',
    icon: Microscope,
  },
  {
    id: 'life-sciences',
    name: 'Life Sciences',
    code: 'LSC',
    color: 'bg-green-500',
    icon: Brain,
  },
  {
    id: 'english',
    name: 'English HL',
    code: 'ENG',
    color: 'bg-red-500',
    icon: BookText,
  },
  {
    id: 'afrikaans',
    name: 'Afrikaans FAL',
    code: 'AFR',
    color: 'bg-orange-500',
    icon: Languages,
  },
  {
    id: 'geography',
    name: 'Geography',
    code: 'GEO',
    color: 'bg-cyan-500',
    icon: Globe,
  },
  {
    id: 'accounting',
    name: 'Accounting',
    code: 'ACC',
    color: 'bg-indigo-500',
    icon: Building,
  },
  {
    id: 'business-studies',
    name: 'Business Studies',
    code: 'BUS',
    color: 'bg-emerald-500',
    icon: Users,
  }
]

const DashboardNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [showSubjectsDropdown, setShowSubjectsDropdown] = useState(false)

  const toggleNav = () => {
    setIsCollapsed(!isCollapsed)
    // Close dropdown when collapsing nav
    if (!isCollapsed && showSubjectsDropdown) {
      setShowSubjectsDropdown(false)
    }
  }

  const toggleSubjectsDropdown = () => {
    setShowSubjectsDropdown(!showSubjectsDropdown)
  }

  const menuItems = [
    { href: '/dashboard', icon: Home, label: 'Dashboard', color: 'text-blue-600' },
    { 
      href: '#', 
      icon: BookOpen, 
      label: 'My Subjects', 
      color: 'text-green-600',
      onClick: toggleSubjectsDropdown,
      hasDropdown: true
    },
    { href: '/analytics', icon: BarChart3, label: 'Analytics', color: 'text-purple-600' },
    { href: '/study-companion', icon: Brain, label: 'Study Companion', color: 'text-indigo-600' },
    { href: '/goals', icon: Target, label: 'Goals & Targets', color: 'text-orange-600' },
    { href: '/rewards', icon: Award, label: 'Rewards', color: 'text-yellow-600' },
    { href: '/diary', icon: FileText, label: 'Learning Diary', color: 'text-pink-600' },
    { href: '/wellness', icon: Heart, label: 'Wellness', color: 'text-red-600' },
    { href: '/schedule', icon: Calendar, label: 'Schedule', color: 'text-cyan-600' },
    { href: '/notifications', icon: Bell, label: 'Notifications', color: 'text-amber-600' },
  ]

  const secondaryItems = [
    { href: '/profile', icon: User, label: 'Profile' },
    { href: '/settings', icon: Settings, label: 'Settings' },
    { href: '/help', icon: HelpCircle, label: 'Help & Support' },
  ]

  return (
    <>
      <div className={`dashboard-nav ${isCollapsed ? 'collapsed' : ''}`}>
        {/* Header with Toggle */}
        <div className="nav-header">
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={toggleNav}
          >
            <div className="flex-shrink-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2">
              <GraduationCap size={24} className="text-white" />
            </div>
            {!isCollapsed && (
              <div className="flex items-center justify-between w-full">
                <div>
                  <h1 className="text-lg font-bold text-gray-900">Aptiverse</h1>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Main Navigation */}
        <nav className="nav-content">
          <div className="mb-6">
            <ul className="nav-list">
              {menuItems.map((item) => (
                <li key={item.href} className="nav-item">
                  {item.hasDropdown ? (
                    <div className="dropdown-container">
                      <button
                        onClick={item.onClick}
                        className={`nav-link group w-full text-left ${showSubjectsDropdown ? 'active' : ''}`}
                      >
                        <item.icon size={20} className={`flex-shrink-0 ${item.color}`} />
                        {!isCollapsed && (
                          <>
                            <span className="link-text">{item.label}</span>
                            <ChevronDown 
                              size={16} 
                              className={`ml-auto transition-transform duration-200 ${showSubjectsDropdown ? 'rotate-180' : ''}`} 
                            />
                          </>
                        )}
                        
                      </button>
                      
                      {/* Subjects Dropdown - Always render but control visibility */}
                      <div className={`subjects-dropdown ${showSubjectsDropdown && !isCollapsed ? 'open' : 'hidden'}`}>
                        <div className="dropdown-content">
                          {subjectsData.map((subject) => (
                            <Link
                              key={subject.id}
                              href={`/subjects/${subject.id}`}
                              className="dropdown-item"
                              onClick={() => setShowSubjectsDropdown(false)}
                            >
                              <div className={`dropdown-item-icon ${subject.color}`}>
                                <subject.icon size={16} className="text-white" />
                              </div>
                              <div className="dropdown-item-content">
                                <span className="dropdown-item-name">{subject.name}</span>
                                <span className="dropdown-item-code">{subject.code}</span>
                              </div>
                              {/* Removed progress bar section */}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link href={item.href} className="nav-link group">
                      <item.icon size={20} className={`flex-shrink-0 ${item.color}`} />
                      {!isCollapsed && <span className="link-text">{item.label}</span>}
                      {isCollapsed && (
                        <div className="nav-tooltip">
                          {item.label}
                        </div>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Navigation */}
          <div className="mt-auto">
            {!isCollapsed && (
              <h3 className="section-title">
                Account
              </h3>
            )}
            <ul className="nav-list">
              {secondaryItems.map((item) => (
                <li key={item.href} className="nav-item">
                  <Link href={item.href} className="nav-link group">
                    <item.icon size={20} className="flex-shrink-0 text-gray-600" />
                    {!isCollapsed && <span className="link-text">{item.label}</span>}
                    {isCollapsed && (
                      <div className="nav-tooltip">
                        {item.label}
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Close dropdown when clicking outside */}
      {showSubjectsDropdown && (
        <div 
          className="dropdown-overlay"
          onClick={() => setShowSubjectsDropdown(false)}
        />
      )}
    </>
  )
}

export default DashboardNav