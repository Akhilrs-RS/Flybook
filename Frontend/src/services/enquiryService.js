// Frontend/src/services/enquiryService.js

const STORAGE_KEY = 'flybook_enquiries';

// Realistic initial seed data for Flybook luxury tours
const SEED_ENQUIRIES = [
  {
    id: 'ENQ-M8K2P1',
    name: 'Aarav Mehta',
    email: 'aarav.mehta@gmail.com',
    phone: '+91 98201 44521',
    destination: 'Amalfi Coast & Southern Italy',
    travelDate: '15/12/2026',
    travelers: '2 Adults',
    travelClass: 'luxury',
    message: 'Looking for a private clifftop villa in Positano with a private yacht charter to Capri for 3 days.',
    status: 'New',
    createdAt: new Date(Date.now() - 1000 * 60 * 35).toISOString(), // 35 mins ago
    notes: [
      { text: 'Received through Contact page. High-value lead.', timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString() }
    ]
  },
  {
    id: 'ENQ-K7L9B3',
    name: 'Elena Rostova',
    email: 'elena.rostova@luxurytravel.co',
    phone: '+44 7911 123456',
    destination: 'Kyoto & Traditional Japan',
    travelDate: '20/03/2027',
    travelers: '4 Guests',
    travelClass: 'business',
    message: 'Cherry blossom season bespoke expedition. Interested in private tea master ceremony and authentic ryokan with private onsen.',
    status: 'Contacted',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(), // 4 hours ago
    notes: [
      { text: 'Sent introductory email with 2027 Kyoto luxury preview.', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString() }
    ]
  },
  {
    id: 'ENQ-R4T8X9',
    name: 'Vikram & Sunita Singhania',
    email: 'vikram.singhania@apexholding.in',
    phone: '+91 98100 88722',
    destination: 'Swiss Alps & Glacier Scenic Rail',
    travelDate: '10/01/2027',
    travelers: '2 Adults',
    travelClass: 'bespoke',
    message: '25th Wedding Anniversary. Need Excellence Class Glacier Express seats, The Chedi Andermatt suite, and helicopter tour around Matterhorn.',
    status: 'In Progress',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(), // 1 day ago
    notes: [
      { text: 'Custom itinerary draft prepared by senior designer Priya.', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString() }
    ]
  },
  {
    id: 'ENQ-P2V5N6',
    name: 'Chloe Tremblay',
    email: 'c.tremblay@genevacap.ch',
    phone: '+41 22 730 5500',
    destination: 'Maldives Luxury Overwater Atolls',
    travelDate: '05/11/2026',
    travelers: '2 Adults, 1 Child',
    travelClass: 'luxury',
    message: 'Cheval Blanc Randheli or Soneva Jani overwater retreat with private seaplane transfers.',
    status: 'Booked',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 3 days ago
    notes: [
      { text: 'Deposit confirmed. Booking reference FLY-CHV-902.', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString() }
    ]
  },
  {
    id: 'ENQ-D3W1Q8',
    name: 'Devendra Rathore',
    email: 'dev.rathore@heritageindia.com',
    phone: '+91 94140 23119',
    destination: 'Royal Rajasthan Heritage & Palaces',
    travelDate: '01/02/2027',
    travelers: '6 Family Members',
    travelClass: 'first',
    message: 'Taj Lake Palace Udaipur and Umaid Bhawan Palace Jodhpur with private vintage car transfers and royal historian guides.',
    status: 'Contacted',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(), // 4 days ago
    notes: [
      { text: 'Intro call conducted. Preparing palace suite allotment.', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 50).toISOString() }
    ]
  }
];

export const enquiryService = {
  getEnquiries() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_ENQUIRIES));
        return SEED_ENQUIRIES;
      }
      return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to read enquiries from storage:', e);
      return SEED_ENQUIRIES;
    }
  },

  addEnquiry(formData) {
    try {
      const current = this.getEnquiries();
      const newEnquiry = {
        id: 'ENQ-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
        name: formData.name || 'Valued Traveller',
        email: formData.email || '',
        phone: formData.phone || '',
        destination: formData.destination || 'Unspecified',
        travelDate: formData.travelDate || 'Flexible',
        travelers: formData.travelers || '1',
        travelClass: formData.travelClass || 'luxury',
        message: formData.message || '',
        status: 'New',
        createdAt: new Date().toISOString(),
        notes: [
          { text: 'Enquiry submitted directly from public website form.', timestamp: new Date().toISOString() }
        ]
      };

      const updated = [newEnquiry, ...current];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('flybook_enquiries_updated', { detail: updated }));
      return newEnquiry;
    } catch (e) {
      console.error('Failed to add enquiry:', e);
      return null;
    }
  },

  updateStatus(id, newStatus) {
    try {
      const current = this.getEnquiries();
      const updated = current.map(item => {
        if (item.id === id) {
          const notes = item.notes || [];
          return {
            ...item,
            status: newStatus,
            notes: [
              ...notes,
              { text: `Status updated to "${newStatus}"`, timestamp: new Date().toISOString() }
            ]
          };
        }
        return item;
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('flybook_enquiries_updated', { detail: updated }));
      return updated;
    } catch (e) {
      console.error('Failed to update enquiry status:', e);
      return null;
    }
  },

  addNote(id, noteText) {
    try {
      const current = this.getEnquiries();
      const updated = current.map(item => {
        if (item.id === id) {
          const notes = item.notes || [];
          return {
            ...item,
            notes: [
              ...notes,
              { text: noteText, timestamp: new Date().toISOString() }
            ]
          };
        }
        return item;
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('flybook_enquiries_updated', { detail: updated }));
      return updated;
    } catch (e) {
      console.error('Failed to add note:', e);
      return null;
    }
  },

  deleteEnquiry(id) {
    try {
      const current = this.getEnquiries();
      const updated = current.filter(item => item.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('flybook_enquiries_updated', { detail: updated }));
      return updated;
    } catch (e) {
      console.error('Failed to delete enquiry:', e);
      return null;
    }
  },

  exportToCSV(enquiries) {
    const headers = ['Enquiry ID', 'Date', 'Name', 'Email', 'Phone', 'Destination', 'Travel Date', 'Travellers', 'Class', 'Status', 'Message'];
    const rows = enquiries.map(e => [
      e.id,
      new Date(e.createdAt).toLocaleString(),
      `"${(e.name || '').replace(/"/g, '""')}"`,
      e.email || '',
      e.phone || '',
      `"${(e.destination || '').replace(/"/g, '""')}"`,
      e.travelDate || '',
      e.travelers || '',
      e.travelClass || '',
      e.status || 'New',
      `"${(e.message || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `flybook_enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
