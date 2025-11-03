'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Bell, User, Search, Settings, HelpCircle, LogOut } from 'lucide-react'
import './AppBar.css'

const AppBar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  
  // Refs for the dropdown containers
  const userMenuRef = useRef<HTMLDivElement>(null)
  const notificationsRef = useRef<HTMLDivElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close user menu if click is outside
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false)
      }
      
      // Close notifications if click is outside
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false)
      }
    }

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside)
    
    // Clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="app-bar">
      <div className="app-bar-content">
        <div className="app-bar-section">
          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search subjects, notes, or resources..." 
              className="search-input"
            />
          </div>
        </div>
        
        <div className="app-bar-section">
          {/* Notifications */}
          <div className="relative" ref={notificationsRef}>
            <button 
              className="icon-button" 
              aria-label="Notifications"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>
            
            {showNotifications && (
              <div className="dropdown-menu">
                <div className="dropdown-header">
                  <h3 className="dropdown-title">Notifications</h3>
                  <span className="notification-count">3 new</span>
                </div>
                <div className="dropdown-content">
                  <div className="notification-item">
                    <div className="notification-dot bg-blue-500"></div>
                    <div className="notification-text">
                      <p className="notification-message">New assignment in Mathematics</p>
                      <span className="notification-time">2 min ago</span>
                    </div>
                  </div>
                  <div className="notification-item">
                    <div className="notification-dot bg-green-500"></div>
                    <div className="notification-text">
                      <p className="notification-message">Your goal is 80% complete</p>
                      <span className="notification-time">1 hour ago</span>
                    </div>
                  </div>
                  <div className="notification-item">
                    <div className="notification-dot bg-purple-500"></div>
                    <div className="notification-text">
                      <p className="notification-message">Study companion has new tips</p>
                      <span className="notification-time">2 hours ago</span>
                    </div>
                  </div>
                </div>
                <div className="dropdown-footer">
                  <button className="view-all-button">View All Notifications</button>
                </div>
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="relative" ref={userMenuRef}>
            <button 
              className="user-button"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <div className="user-avatar">
                <User size={20} />
              </div>
              <div className="user-info">
                <span className="user-name">John Student</span>
                <span className="user-role">Grade 11</span>
              </div>
            </button>
            
            {showUserMenu && (
              <div className="dropdown-menu user-dropdown">
                <div className="dropdown-content">
                  <button className="dropdown-item">
                    <User size={16} />
                    <span>My Profile</span>
                  </button>
                  <button className="dropdown-item">
                    <Settings size={16} />
                    <span>Settings</span>
                  </button>
                  <button className="dropdown-item">
                    <HelpCircle size={16} />
                    <span>Help & Support</span>
                  </button>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item text-red-600">
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppBar