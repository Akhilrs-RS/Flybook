import React from 'react';
import { 
  MdOutlineRemoveRedEye, 
  MdDeleteOutline, 
  MdOutlineEmail, 
  MdOutlinePhone,
  MdFilterList
} from 'react-icons/md';

const formatTimeAgo = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const now = new Date();
  const diffSec = Math.floor((now - date) / 1000);

  if (diffSec < 60) return 'Just now';
  if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`;
  if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h ago`;
  if (diffSec < 86400 * 7) return `${Math.floor(diffSec / 86400)}d ago`;
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
};

const formatTravelClass = (val) => {
  switch (val) {
    case 'luxury': return 'Luxury Suite';
    case 'first': return 'First Class';
    case 'business': return 'Business Class';
    case 'economy': return 'Premium Economy';
    case 'bespoke': return 'Bespoke Custom';
    default: return val || 'Standard';
  }
};

const EnquiryTable = ({ 
  enquiries, 
  statusFilter, 
  setStatusFilter, 
  classFilter, 
  setClassFilter,
  onSelectEnquiry,
  onUpdateStatus,
  onDeleteEnquiry,
  selectedId
}) => {
  const statusTabs = ['All', 'New', 'Contacted', 'In Progress', 'Booked'];

  return (
    <div className="admin-table-card">
      {/* Table Control Bar */}
      <div className="admin-table-controls">
        <div className="status-tabs">
          {statusTabs.map(tab => (
            <button
              key={tab}
              className={`status-tab ${statusFilter === tab ? 'active' : ''}`}
              onClick={() => setStatusFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="table-filter-group">
          <MdFilterList className="filter-icon" />
          <select 
            value={classFilter} 
            onChange={(e) => setClassFilter(e.target.value)}
            className="class-filter-select"
          >
            <option value="All">All Travel Classes</option>
            <option value="luxury">Luxury Suite / First</option>
            <option value="business">Business Class</option>
            <option value="economy">Premium Economy</option>
            <option value="bespoke">Bespoke Custom</option>
          </select>
        </div>
      </div>

      {/* Table Container */}
      <div className="table-responsive">
        {enquiries.length === 0 ? (
          <div className="empty-table-state">
            <div className="empty-icon">📭</div>
            <h4>No Enquiries Found</h4>
            <p>No travel enquiries match your selected filters or search query.</p>
          </div>
        ) : (
          <table className="admin-enquiries-table">
            <thead>
              <tr>
                <th>TRAVELLER</th>
                <th>DESTINATION</th>
                <th>TRAVEL DATES</th>
                <th>CLASS</th>
                <th>SUBMITTED</th>
                <th>STATUS</th>
                <th className="text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enq) => {
                const isSelected = selectedId === enq.id;
                return (
                  <tr 
                    key={enq.id} 
                    className={`enquiry-row ${isSelected ? 'row-selected' : ''} ${enq.status === 'New' ? 'row-unread' : ''}`}
                    onClick={() => onSelectEnquiry(enq)}
                  >
                    {/* Traveller info */}
                    <td>
                      <div className="traveller-cell">
                        <div className="traveller-avatar">
                          {(enq.name || 'T')[0].toUpperCase()}
                        </div>
                        <div className="traveller-meta">
                          <span className="traveller-name">
                            {enq.name || 'Valued Traveller'}
                            {enq.status === 'New' && <span className="new-lead-dot" title="New unreviewed enquiry"></span>}
                          </span>
                          <span className="traveller-contact">
                            {enq.email} {enq.phone ? `• ${enq.phone}` : ''}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Destination */}
                    <td>
                      <span className="destination-badge">
                        {enq.destination || 'Unspecified'}
                      </span>
                    </td>

                    {/* Dates & Guests */}
                    <td>
                      <div className="dates-meta">
                        <span className="date-main">{enq.travelDate || 'Flexible'}</span>
                        <span className="guests-sub">{enq.travelers || '1 traveller'}</span>
                      </div>
                    </td>

                    {/* Preferred Class */}
                    <td>
                      <span className={`class-badge badge-${enq.travelClass || 'standard'}`}>
                        {formatTravelClass(enq.travelClass)}
                      </span>
                    </td>

                    {/* Submitted time */}
                    <td>
                      <span className="submitted-time" title={new Date(enq.createdAt).toLocaleString()}>
                        {formatTimeAgo(enq.createdAt)}
                      </span>
                    </td>

                    {/* Status dropdown */}
                    <td onClick={(e) => e.stopPropagation()}>
                      <select 
                        value={enq.status} 
                        onChange={(e) => onUpdateStatus(enq.id, e.target.value)}
                        className={`status-select status-${(enq.status || 'new').toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Booked">Booked</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="action-buttons-group">
                        <button 
                          className="table-action-btn view-btn"
                          onClick={() => onSelectEnquiry(enq)}
                          title="View Full Enquiry"
                        >
                          <MdOutlineRemoveRedEye />
                        </button>
                        <button 
                          className="table-action-btn delete-btn"
                          onClick={() => {
                            if (window.confirm(`Delete enquiry from ${enq.name}?`)) {
                              onDeleteEnquiry(enq.id);
                            }
                          }}
                          title="Delete Enquiry"
                        >
                          <MdDeleteOutline />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default EnquiryTable;
