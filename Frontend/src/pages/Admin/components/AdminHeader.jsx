import React from 'react';
import { 
  MdSearch, 
  MdOutlineFileDownload, 
  MdRefresh, 
  MdNotificationsNone,
  MdMenu 
} from 'react-icons/md';

const AdminHeader = ({ 
  searchTerm, 
  setSearchTerm, 
  onExport, 
  onRefresh, 
  newCount,
  onOpenMobileMenu 
}) => {
  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <button 
          className="admin-mobile-menu-btn" 
          onClick={onOpenMobileMenu}
          aria-label="Open Navigation Menu"
        >
          <MdMenu />
        </button>

        <div className="admin-search-wrapper">
          <MdSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search enquiries by name, email, phone, or destination..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="admin-search-input"
          />
          {searchTerm && (
            <button className="search-clear-btn" onClick={() => setSearchTerm('')}>
              ×
            </button>
          )}
        </div>
      </div>

      <div className="admin-header-right">
        {newCount > 0 && (
          <div className="admin-alert-pill" title={`${newCount} new enquiries awaiting review`}>
            <span className="alert-dot"></span>
            <span>{newCount} New Requests</span>
          </div>
        )}

        <button 
          className="admin-action-btn refresh-btn" 
          onClick={onRefresh} 
          title="Refresh Data"
        >
          <MdRefresh className="btn-icon" />
          <span className="btn-text">Refresh</span>
        </button>

        <button 
          className="admin-action-btn export-btn" 
          onClick={onExport} 
          title="Export Enquiries to CSV"
        >
          <MdOutlineFileDownload className="btn-icon" />
          <span className="btn-text">Export CSV</span>
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
