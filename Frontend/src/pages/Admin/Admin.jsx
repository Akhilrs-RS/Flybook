import React, { useState, useEffect } from 'react';
import { enquiryService } from '../../services/enquiryService';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';
import EnquiryStats from './components/EnquiryStats';
import EnquiryTable from './components/EnquiryTable';
import EnquiryDetailModal from './components/EnquiryDetailModal';
import './Admin.css';

const Admin = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [classFilter, setClassFilter] = useState('All');
  const [activeTab, setActiveTab] = useState('enquiries');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Load enquiries
  const loadEnquiries = () => {
    const data = enquiryService.getEnquiries();
    setEnquiries(data);
  };

  useEffect(() => {
    loadEnquiries();

    // Listen to real-time events triggered by public Contact form or admin actions
    const handleUpdate = (e) => {
      if (e.detail) {
        setEnquiries(e.detail);
      } else {
        loadEnquiries();
      }
    };

    window.addEventListener('flybook_enquiries_updated', handleUpdate);
    return () => {
      window.removeEventListener('flybook_enquiries_updated', handleUpdate);
    };
  }, []);

  // Sync selected enquiry when enquiries change
  useEffect(() => {
    if (selectedEnquiry) {
      const refreshed = enquiries.find(e => e.id === selectedEnquiry.id);
      setSelectedEnquiry(refreshed || null);
    }
  }, [enquiries]);

  // Handlers
  const handleUpdateStatus = (id, newStatus) => {
    enquiryService.updateStatus(id, newStatus);
  };

  const handleAddNote = (id, noteText) => {
    enquiryService.addNote(id, noteText);
  };

  const handleDeleteEnquiry = (id) => {
    enquiryService.deleteEnquiry(id);
    if (selectedEnquiry && selectedEnquiry.id === id) {
      setSelectedEnquiry(null);
    }
  };

  const handleExportCSV = () => {
    enquiryService.exportToCSV(filteredEnquiries);
  };

  // Filter logic
  const filteredEnquiries = enquiries.filter((item) => {
    // Status filter
    if (statusFilter !== 'All' && item.status !== statusFilter) {
      return false;
    }

    // Class filter
    if (classFilter !== 'All' && item.travelClass !== classFilter) {
      return false;
    }

    // Search filter
    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase();
      const matchName = (item.name || '').toLowerCase().includes(q);
      const matchEmail = (item.email || '').toLowerCase().includes(q);
      const matchPhone = (item.phone || '').toLowerCase().includes(q);
      const matchDest = (item.destination || '').toLowerCase().includes(q);
      const matchId = (item.id || '').toLowerCase().includes(q);
      return matchName || matchEmail || matchPhone || matchDest || matchId;
    }

    return true;
  });

  const newEnquiriesCount = enquiries.filter(e => e.status === 'New').length;

  return (
    <div className="admin-portal-root">
      {/* 1. Sidebar */}
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        newCount={newEnquiriesCount}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* 2. Main Portal Content Area */}
      <div className="admin-main-wrapper">
        <AdminHeader
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onExport={handleExportCSV}
          onRefresh={loadEnquiries}
          newCount={newEnquiriesCount}
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
        />

        <main className="admin-content-container">
          {activeTab === 'enquiries' && (
            <>
              {/* Dashboard Page Title */}
              <div className="admin-page-heading-row">
                <div>
                  <h1 className="admin-page-title">Enquiries & Leads</h1>
                  <p className="admin-page-subtitle">
                    Manage client bespoke journey requests submitted from the public website.
                  </p>
                </div>
                <div className="live-counter-badge">
                  Showing <strong>{filteredEnquiries.length}</strong> of {enquiries.length} requests
                </div>
              </div>

              {/* Metric KPI Tiles */}
              <EnquiryStats enquiries={enquiries} />

              {/* Main Data Table */}
              <EnquiryTable
                enquiries={filteredEnquiries}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                classFilter={classFilter}
                setClassFilter={setClassFilter}
                onSelectEnquiry={(enq) => setSelectedEnquiry(enq)}
                onUpdateStatus={handleUpdateStatus}
                onDeleteEnquiry={handleDeleteEnquiry}
                selectedId={selectedEnquiry?.id}
              />
            </>
          )}

          {activeTab === 'analytics' && (
            <div className="admin-placeholder-card">
              <h2>Destinations & Trends Overview</h2>
              <p>Top requested bespoke destinations based on traveller submissions:</p>
              
              <div className="analytics-dest-grid">
                {Object.entries(
                  enquiries.reduce((acc, curr) => {
                    const dest = curr.destination || 'Other';
                    acc[dest] = (acc[dest] || 0) + 1;
                    return acc;
                  }, {})
                ).map(([dest, count]) => (
                  <div key={dest} className="analytics-dest-tile">
                    <span className="dest-name">{dest}</span>
                    <span className="dest-count">{count} enquiries</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="admin-placeholder-card">
              <h2>Flybook Portal Settings</h2>
              <p>Admin configuration and enquiry notification settings.</p>
              <div className="settings-section">
                <div className="setting-row">
                  <div>
                    <h4>Public Form Status</h4>
                    <p>The Travel Enquiry form on /contact is active and capturing leads.</p>
                  </div>
                  <span className="setting-badge-active">Active • Connected</span>
                </div>
                <div className="setting-row">
                  <div>
                    <h4>Data Storage Mode</h4>
                    <p>Synchronized via local client store with real-time event dispatch.</p>
                  </div>
                  <span className="setting-badge-info">Local Sync</span>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* 3. Enquiry Detail Drawer */}
      <EnquiryDetailModal
        enquiry={selectedEnquiry}
        onClose={() => setSelectedEnquiry(null)}
        onUpdateStatus={handleUpdateStatus}
        onAddNote={handleAddNote}
      />
    </div>
  );
};

export default Admin;
