import React from 'react';
import { 
  MdOutlineMarkEmailUnread, 
  MdOutlineForum, 
  MdOutlineCheckCircle, 
  MdOutlineAllInbox 
} from 'react-icons/md';

const EnquiryStats = ({ enquiries }) => {
  const total = enquiries.length;
  const newCount = enquiries.filter(e => e.status === 'New').length;
  const inProgressCount = enquiries.filter(e => e.status === 'In Progress' || e.status === 'Contacted').length;
  const bookedCount = enquiries.filter(e => e.status === 'Booked').length;

  const stats = [
    {
      title: 'TOTAL ENQUIRIES',
      value: total,
      subtext: 'All-time submissions',
      icon: <MdOutlineAllInbox />,
      colorClass: 'stat-total'
    },
    {
      title: 'ACTION REQUIRED',
      value: newCount,
      subtext: 'Unreviewed new leads',
      icon: <MdOutlineMarkEmailUnread />,
      colorClass: 'stat-new',
      highlight: newCount > 0
    },
    {
      title: 'IN DISCUSSION',
      value: inProgressCount,
      subtext: 'Active design proposals',
      icon: <MdOutlineForum />,
      colorClass: 'stat-progress'
    },
    {
      title: 'CONFIRMED BOOKINGS',
      value: bookedCount,
      subtext: 'Finalized bespoke tours',
      icon: <MdOutlineCheckCircle />,
      colorClass: 'stat-booked'
    }
  ];

  return (
    <div className="admin-stats-grid">
      {stats.map((stat, idx) => (
        <div key={idx} className={`stat-card ${stat.colorClass} ${stat.highlight ? 'pulse' : ''}`}>
          <div className="stat-card-header">
            <span className="stat-label">{stat.title}</span>
            <div className="stat-icon-badge">{stat.icon}</div>
          </div>
          <div className="stat-value">{stat.value}</div>
          <span className="stat-subtext">{stat.subtext}</span>
        </div>
      ))}
    </div>
  );
};

export default EnquiryStats;
