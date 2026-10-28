import React, { useState } from 'react';
import { 
  MdClose, 
  MdOutlineEmail, 
  MdOutlinePhone, 
  MdOutlineChat, 
  MdOutlineCalendarToday,
  MdOutlinePeople,
  MdOutlineFlightClass,
  MdOutlineLocationOn,
  MdOutlineNoteAdd
} from 'react-icons/md';

const EnquiryDetailModal = ({ enquiry, onClose, onUpdateStatus, onAddNote }) => {
  const [newNote, setNewNote] = useState('');

  if (!enquiry) return null;

  const handleNoteSubmit = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    onAddNote(enquiry.id, newNote.trim());
    setNewNote('');
  };

  // Format phone number for WhatsApp
  const cleanPhone = (enquiry.phone || '').replace(/[^0-9]/g, '');
  const whatsappUrl = cleanPhone 
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hello ${enquiry.name}, thank you for reaching out to Flybook Tours & Travels regarding your journey to ${enquiry.destination}.`)}`
    : null;

  const emailSubject = encodeURIComponent(`Flybook Tours & Travels — Your Journey to ${enquiry.destination || 'Luxury Destination'}`);
  const emailBody = encodeURIComponent(`Dear ${enquiry.name},\n\nThank you for reaching out to Flybook Tours & Travels regarding your bespoke journey.\n\nBest regards,\nFlybook Private Travel Concierge`);

  return (
    <div className="admin-drawer-overlay" onClick={onClose}>
      <div className="admin-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-header-meta">
            <span className="drawer-id">{enquiry.id}</span>
            <span className={`status-pill status-${(enquiry.status || 'new').toLowerCase().replace(/\s+/g, '-')}`}>
              {enquiry.status}
            </span>
          </div>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close details">
            <MdClose />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="drawer-body">
          {/* Traveller Overview Card */}
          <div className="drawer-card traveller-card">
            <div className="traveller-large-avatar">
              {(enquiry.name || 'T')[0].toUpperCase()}
            </div>
            <div className="traveller-large-info">
              <h3 className="traveller-large-name">{enquiry.name}</h3>
              <p className="traveller-subtext">Submitted on {new Date(enquiry.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} at {new Date(enquiry.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>

            {/* Quick Contact Action Buttons */}
            <div className="quick-contact-actions">
              {enquiry.email && (
                <a 
                  href={`mailto:${enquiry.email}?subject=${emailSubject}&body=${emailBody}`}
                  className="quick-btn email-btn"
                  title="Send Email"
                >
                  <MdOutlineEmail className="quick-btn-icon" />
                  <span>Email</span>
                </a>
              )}

              {enquiry.phone && (
                <a 
                  href={`tel:${enquiry.phone}`} 
                  className="quick-btn phone-btn"
                  title="Call Traveller"
                >
                  <MdOutlinePhone className="quick-btn-icon" />
                  <span>Call</span>
                </a>
              )}

              {whatsappUrl && (
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="quick-btn whatsapp-btn"
                  title="Chat on WhatsApp"
                >
                  <MdOutlineChat className="quick-btn-icon" />
                  <span>WhatsApp</span>
                </a>
              )}
            </div>
          </div>

          {/* Status Quick Changer */}
          <div className="drawer-section">
            <span className="drawer-section-title">UPDATE LEAD STATUS</span>
            <div className="status-quick-selector">
              {['New', 'Contacted', 'In Progress', 'Booked', 'Closed'].map(st => (
                <button
                  key={st}
                  className={`status-btn ${enquiry.status === st ? 'active' : ''}`}
                  onClick={() => onUpdateStatus(enquiry.id, st)}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Journey Specifications */}
          <div className="drawer-section">
            <span className="drawer-section-title">JOURNEY SPECIFICATIONS</span>
            <div className="specs-grid">
              <div className="spec-item">
                <MdOutlineLocationOn className="spec-icon" />
                <div className="spec-content">
                  <span className="spec-label">DESTINATION</span>
                  <span className="spec-val highlight">{enquiry.destination || 'Unspecified'}</span>
                </div>
              </div>

              <div className="spec-item">
                <MdOutlineCalendarToday className="spec-icon" />
                <div className="spec-content">
                  <span className="spec-label">TRAVEL DATE</span>
                  <span className="spec-val">{enquiry.travelDate || 'Flexible'}</span>
                </div>
              </div>

              <div className="spec-item">
                <MdOutlinePeople className="spec-icon" />
                <div className="spec-content">
                  <span className="spec-label">TRAVELLERS</span>
                  <span className="spec-val">{enquiry.travelers || '1'}</span>
                </div>
              </div>

              <div className="spec-item">
                <MdOutlineFlightClass className="spec-icon" />
                <div className="spec-content">
                  <span className="spec-label">PREFERRED CLASS</span>
                  <span className="spec-val capitalize">{enquiry.travelClass || 'Luxury'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Client Message */}
          <div className="drawer-section">
            <span className="drawer-section-title">CLIENT ENQUIRY MESSAGE</span>
            <div className="client-message-box">
              {enquiry.message ? (
                <p>"{enquiry.message}"</p>
              ) : (
                <p className="no-message">No specific notes or custom message provided by client.</p>
              )}
            </div>
          </div>

          {/* Internal Notes / Designer Log */}
          <div className="drawer-section">
            <span className="drawer-section-title">INTERNAL DESIGNER LOG & NOTES</span>
            
            <form onSubmit={handleNoteSubmit} className="add-note-form">
              <input
                type="text"
                placeholder="Add private note (e.g., 'Sent brochure', 'Follow up on Friday')..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                className="add-note-input"
              />
              <button type="submit" className="add-note-btn">
                <MdOutlineNoteAdd /> Add Note
              </button>
            </form>

            <div className="notes-timeline">
              {(enquiry.notes && enquiry.notes.length > 0) ? (
                enquiry.notes.map((note, idx) => (
                  <div key={idx} className="timeline-entry">
                    <span className="timeline-dot"></span>
                    <div className="timeline-content">
                      <p className="timeline-text">{note.text}</p>
                      <span className="timeline-date">
                        {new Date(note.timestamp).toLocaleDateString([], { month: 'short', day: 'numeric' })} at {new Date(note.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-notes">No internal notes added yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryDetailModal;
