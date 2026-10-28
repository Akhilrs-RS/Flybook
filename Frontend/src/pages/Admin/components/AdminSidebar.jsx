import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  MdDashboard, 
  MdOutlineExplore, 
  MdSettings, 
  MdOutlineExitToApp,
  MdOutlineTravelExplore,
  MdClose
} from 'react-icons/md';

const AdminSidebar = ({ activeTab, setActiveTab, newCount, isOpen, onClose }) => {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && <div className="admin-sidebar-backdrop" onClick={onClose}></div>}
      
      <aside className={`admin-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="admin-sidebar-header">
          <Link to="/admin" className="admin-brand-link">
            <div className="admin-brand-badge">
              <span>F</span>
            </div>
            <div className="admin-brand-text">
              <h2>Flybook</h2>
              <span>ADMIN PORTAL</span>
            </div>
          </Link>
          <button className="admin-sidebar-close" onClick={onClose} aria-label="Close Sidebar">
            <MdClose />
          </button>
        </div>

        <div className="admin-nav-section">
          <span className="admin-nav-label">MAIN NAVIGATION</span>
          <nav className="admin-nav-menu">
            <button 
              className={`admin-nav-item ${activeTab === 'enquiries' ? 'active' : ''}`}
              onClick={() => { setActiveTab('enquiries'); onClose?.(); }}
            >
              <MdDashboard className="nav-icon" />
              <span>Enquiries & Leads</span>
              {newCount > 0 && <span className="nav-badge-pill">{newCount} new</span>}
            </button>

            <button 
              className={`admin-nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => { setActiveTab('analytics'); onClose?.(); }}
            >
              <MdOutlineTravelExplore className="nav-icon" />
              <span>Destinations & Trends</span>
            </button>

            <button 
              className={`admin-nav-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => { setActiveTab('settings'); onClose?.(); }}
            >
              <MdSettings className="nav-icon" />
              <span>Settings & Portal</span>
            </button>
          </nav>
        </div>

        <div className="admin-sidebar-footer">
          <Link to="/" className="admin-view-site-btn" target="_blank" rel="noopener noreferrer">
            <MdOutlineExplore className="btn-icon" />
            <span>Visit Live Website</span>
            <MdOutlineExitToApp className="exit-icon" />
          </Link>
          
          <div className="admin-operator-card">
            <div className="operator-avatar">AD</div>
            <div className="operator-info">
              <span className="operator-name">Travel Director</span>
              <span className="operator-role">Admin Access</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
