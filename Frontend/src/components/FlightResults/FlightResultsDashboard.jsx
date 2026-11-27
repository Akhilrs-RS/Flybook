import React, { useState, useMemo } from 'react';
import {
  MdOutlineLuggage,
  MdOutlineRestaurant,
  MdOutlineCheck,
  MdOutlineChat
} from 'react-icons/md';
import './FlightResultsDashboard.css';

const FlightResultsDashboard = ({
  offers = [],
  searchCriteria,
  onResetSearch
}) => {
  // Filtration states: Only Direct flights only & Add nearby airports
  const [directOnly, setDirectOnly] = useState(Boolean(searchCriteria?.directOnly));
  const [nearbyAirports, setNearbyAirports] = useState(Boolean(searchCriteria?.nearbyAirports));

  const [expandedOfferId, setExpandedOfferId] = useState(null);
  const [bookingOffer, setBookingOffer] = useState(null);

  // Booking Form State
  const [bookName, setBookName] = useState('');
  const [bookPhone, setBookPhone] = useState('');
  const [bookEmail, setBookEmail] = useState('');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Filter and sort flights (sorted naturally by best price)
  const filteredOffers = useMemo(() => {
    let result = [...offers];

    // 1. Direct Flights Only
    if (directOnly) {
      result = result.filter(o => o.stops === 0);
    }

    // 2. Add Nearby Airports Filter
    if (!nearbyAirports) {
      result = result.filter(o => !o.isNearbyAirport);
    }

    // Sort by cheapest fare
    result.sort((a, b) => a.price.totalPerAdult - b.price.totalPerAdult);

    return result;
  }, [offers, directOnly, nearbyAirports]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const constructWhatsAppUrl = (offer) => {
    if (!offer) return '#';
    const text = encodeURIComponent(
      `Hello Flybook Concierge! I would like to book this flight:\n\n` +
      `✈️ Flight: ${offer.airline.name} (${offer.flightNumber})\n` +
      `🛫 Route: ${offer.origin.city} (${offer.origin.code}) ➔ ${offer.destination.city} (${offer.destination.code})\n` +
      `📅 Date: ${offer.origin.date}\n` +
      `⏰ Time: ${offer.origin.departureTime} – ${offer.destination.arrivalTime}\n` +
      `💰 Quoted Fare: ₹${offer.price.totalPerAdult.toLocaleString('en-IN')} / person\n\n` +
      `Please assist me with instant ticket issuance and visa support.`
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  const routeOriginDisplay = searchCriteria?.fromLoc?.split('(')[0]?.trim() || 'Thiruvananthapuram';
  const routeDestDisplay = searchCriteria?.toLoc?.split('(')[0]?.trim() || 'Destination';

  return (
    <div className="frd-dashboard-container">
      
      {/* 1. Header Banner & Flight Route Summary */}
      <div className="frd-summary-header">
        <div className="frd-route-info">
          <div className="frd-route-title-row">
            <span className="frd-live-pulse-dot"></span>
            <span className="frd-live-badge">REAL-TIME AIRLINE FARES</span>
            <span className="frd-results-count">
              {filteredOffers.length} {filteredOffers.length === 1 ? 'Flight' : 'Flights'} Available
            </span>
          </div>
          <h3 className="frd-main-route">
            {routeOriginDisplay} ➔ {routeDestDisplay}
          </h3>
          <div className="frd-tags-strip">
            <span className="frd-tag">📅 {searchCriteria?.departDate || 'Next Week'}</span>
            <span className="frd-tag">👥 {searchCriteria?.travellers || '1 Adult, Economy'}</span>
            <span className="frd-tag">✈️ {searchCriteria?.tripType || 'Return'}</span>
          </div>
        </div>

        <div className="frd-header-actions">
          <button
            type="button"
            className="frd-modify-search-btn"
            onClick={onResetSearch}
            title="Modify search parameters"
          >
            Modify Search ✕
          </button>
        </div>
      </div>

      {/* 2. Customer Filtration Options Bar (Direct flights only & Add nearby airports ONLY) */}
      <div className="frd-filter-bar">
        <div className="frd-filter-bar-left">
          <span className="frd-filter-bar-label">Customer Filters:</span>
          <button
            type="button"
            className={`frd-filter-toggle-pill ${directOnly ? 'active' : ''}`}
            onClick={() => setDirectOnly(prev => !prev)}
          >
            <span className="frd-pill-checkbox">{directOnly ? '✓' : ''}</span>
            <span>Direct flights only</span>
          </button>
          <button
            type="button"
            className={`frd-filter-toggle-pill ${nearbyAirports ? 'active' : ''}`}
            onClick={() => setNearbyAirports(prev => !prev)}
          >
            <span className="frd-pill-checkbox">{nearbyAirports ? '✓' : ''}</span>
            <span>Add nearby airports</span>
          </button>
        </div>

        {(directOnly || nearbyAirports) && (
          <button
            type="button"
            className="frd-clear-filters-btn"
            onClick={() => {
              setDirectOnly(false);
              setNearbyAirports(false);
            }}
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* 3. Fare Cards Feed (Streamlined Full Width Layout) */}
      <main className="frd-offers-feed">
        
        {filteredOffers.length === 0 ? (
          <div className="frd-no-results-card">
            <div className="frd-no-res-icon">✈️</div>
            <h4>No flights match your current filtration</h4>
            <p>Try unchecking "Direct flights only" or toggle "Add nearby airports" to view connecting or alternative flights.</p>
            <button
              type="button"
              className="frd-reset-all-btn"
              onClick={() => {
                setDirectOnly(false);
                setNearbyAirports(true);
              }}
            >
              Show All Available Flights
            </button>
          </div>
        ) : (
          filteredOffers.map((offer) => {
            const isExpanded = expandedOfferId === offer.id;

            return (
              <div key={offer.id} className="frd-fare-card">
                
                {/* Card Top Strip */}
                <div className="frd-card-top-strip">
                  <div className="frd-airline-brand">
                    <div className="frd-airline-logo-box" style={{ backgroundColor: offer.airline.color }}>
                      {offer.airline.logoText}
                    </div>
                    <div className="frd-airline-meta">
                      <strong className="frd-airline-name">{offer.airline.name}</strong>
                      <span className="frd-flight-num">{offer.flightNumber} • {offer.aircraft}</span>
                    </div>
                  </div>

                  <div className="frd-card-badges">
                    {offer.isNearbyAirport && (
                      <span className="frd-badge nearby">
                        ✈️ {offer.nearbyNote || 'Nearby Airport'}
                      </span>
                    )}
                    {offer.stops === 0 ? (
                      <span className="frd-badge direct">Non-Stop</span>
                    ) : (
                      <span className="frd-badge layover">1 Stop • {offer.layover?.city}</span>
                    )}
                    {offer.seatsRemaining && offer.seatsRemaining <= 4 && (
                      <span className="frd-badge warning">
                        Only {offer.seatsRemaining} seats left
                      </span>
                    )}
                  </div>
                </div>

                {/* Flight Journey Row */}
                <div className="frd-journey-row">
                  
                  {/* Departure Point */}
                  <div className="frd-point dep">
                    <strong className="frd-time">{offer.origin.departureTime}</strong>
                    <span className="frd-airport-code">{offer.origin.code}</span>
                    <span className="frd-city">{offer.origin.city}</span>
                    <span className="frd-terminal">{offer.origin.terminal}</span>
                  </div>

                  {/* Flight Timeline Graphic */}
                  <div className="frd-timeline-graphic">
                    <span className="frd-duration-text">{offer.duration}</span>
                    <div className="frd-line-wrapper">
                      <span className="frd-dot start"></span>
                      <div className="frd-route-line">
                        {offer.stops > 0 && <span className="frd-layover-dot" title={`Layover in ${offer.layover?.city}`}></span>}
                      </div>
                      <span className="frd-dot end"></span>
                    </div>
                    <span className="frd-sub-route-text">
                      {offer.stops === 0 ? 'Direct Flight' : `${offer.layover?.duration} in ${offer.layover?.city}`}
                    </span>
                  </div>

                  {/* Arrival Point */}
                  <div className="frd-point arr">
                    <div className="frd-arr-time-wrap">
                      <strong className="frd-time">{offer.destination.arrivalTime}</strong>
                      {offer.destination.nextDay && <span className="frd-next-day">+1 day</span>}
                    </div>
                    <span className="frd-airport-code">{offer.destination.code}</span>
                    <span className="frd-city">{offer.destination.city}</span>
                    <span className="frd-terminal">{offer.destination.terminal}</span>
                  </div>

                  {/* Price & Action Box */}
                  <div className="frd-price-action-box">
                    <div className="frd-price-wrap">
                      <span className="frd-price-tag-sub">Per adult • All taxes incl.</span>
                      <div className="frd-price-val">
                        <span className="frd-curr">₹</span>
                        <span className="frd-amount">{offer.price.totalPerAdult.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="frd-select-fare-btn"
                      onClick={() => setBookingOffer(offer)}
                    >
                      Book via Concierge &rarr;
                    </button>
                  </div>

                </div>

                {/* Card Bottom Perks Row */}
                <div className="frd-card-bottom-perks">
                  <div className="frd-perks-left">
                    <span className="frd-perk-item">
                      <MdOutlineLuggage /> Cabin: {offer.baggage.cabin} • Check-in: {offer.baggage.checked}
                    </span>
                    <span className="frd-perk-item">
                      <MdOutlineRestaurant /> {offer.inFlightMeal}
                    </span>
                    {offer.refundable && (
                      <span className="frd-perk-item green">
                        <MdOutlineCheck /> Partially Refundable
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    className="frd-toggle-details-btn"
                    onClick={() => setExpandedOfferId(isExpanded ? null : offer.id)}
                  >
                    {isExpanded ? 'Hide Details ▲' : 'Flight Details ▼'}
                  </button>
                </div>

                {/* Expandable Flight Leg & Fare Breakdown */}
                {isExpanded && (
                  <div className="frd-expanded-details-drawer">
                    <div className="frd-details-grid">
                      
                      <div className="frd-leg-detail">
                        <h5>Flight Schedule & Layover Information</h5>
                        <div className="frd-leg-step">
                          <span className="frd-step-ico">🛫</span>
                          <div>
                            <strong>Depart: {offer.origin.city} ({offer.origin.code})</strong>
                            <p>Departure Terminal: {offer.origin.terminal} • {offer.origin.departureTime} ({offer.origin.date})</p>
                            <p className="frd-sub-dim">Carrier: {offer.airline.name} ({offer.flightNumber}) • Aircraft: {offer.aircraft}</p>
                          </div>
                        </div>

                        {offer.stops > 0 && offer.layover && (
                          <div className="frd-layover-notice">
                            <span>⏱️ Transit Layover in {offer.layover.city} for {offer.layover.duration}</span>
                            <p>Baggage transfers automatically to destination airport.</p>
                          </div>
                        )}

                        <div className="frd-leg-step">
                          <span className="frd-step-ico">🛬</span>
                          <div>
                            <strong>Arrival: {offer.destination.city} ({offer.destination.code})</strong>
                            <p>Arrival Terminal: {offer.destination.terminal} • {offer.destination.arrivalTime} {offer.destination.nextDay ? '(Next Day)' : ''}</p>
                          </div>
                        </div>
                      </div>

                      <div className="frd-fare-breakdown-box">
                        <h5>Live Fare & Fee Breakdown</h5>
                        <div className="frd-fare-row">
                          <span>Base Airfare:</span>
                          <span>₹{offer.price.baseFare.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="frd-fare-row">
                          <span>Aviation Fuel & Airport Taxes:</span>
                          <span>₹{offer.price.taxes.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="frd-fare-row total">
                          <strong>Total Per Adult:</strong>
                          <strong>₹{offer.price.totalPerAdult.toLocaleString('en-IN')}</strong>
                        </div>
                        <div className="frd-fare-note">
                          ✦ Includes Flybook Concierge priority seating & complimentary travel documentation review.
                        </div>
                      </div>

                    </div>
                  </div>
                )}

              </div>
            );
          })
        )}

      </main>

      {/* 4. Flybook Concierge Booking Modal */}
      {bookingOffer && (
        <div className="frd-modal-backdrop" onClick={() => { setBookingOffer(null); setBookingSubmitted(false); }}>
          <div className="frd-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="frd-modal-close"
              onClick={() => { setBookingOffer(null); setBookingSubmitted(false); }}
            >
              ✕
            </button>

            {!bookingSubmitted ? (
              <>
                <div className="frd-modal-header">
                  <span className="frd-modal-eyebrow">FLYBOOK CONCIERGE BOOKING</span>
                  <h3 className="frd-modal-title">Confirm Your Flight Booking</h3>
                  <p className="frd-modal-sub">
                    Lock in this real-time airline fare with zero convenience fees and full offline visa assistance.
                  </p>
                </div>

                <div className="frd-selected-flight-summary">
                  <div className="frd-sf-airline">
                    <span className="frd-airline-tag-pill" style={{ backgroundColor: bookingOffer.airline.color }}>
                      {bookingOffer.airline.logoText}
                    </span>
                    <div>
                      <strong>{bookingOffer.airline.name} • {bookingOffer.flightNumber}</strong>
                      <span>{bookingOffer.origin.city} ({bookingOffer.origin.code}) ➔ {bookingOffer.destination.city} ({bookingOffer.destination.code})</span>
                    </div>
                  </div>
                  <div className="frd-sf-price">
                    <span className="sf-price-label">Live Quoted Fare:</span>
                    <strong className="sf-price-val">₹{bookingOffer.price.grandTotal.toLocaleString('en-IN')}</strong>
                  </div>
                </div>

                <form className="frd-modal-form" onSubmit={handleBookingSubmit}>
                  <div className="frd-form-row">
                    <div className="frd-input-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        required
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                      />
                    </div>
                    <div className="frd-input-group">
                      <label>Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        required
                        value={bookPhone}
                        onChange={(e) => setBookPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="frd-input-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      required
                      value={bookEmail}
                      onChange={(e) => setBookEmail(e.target.value)}
                      placeholder="rahul@example.com"
                    />
                  </div>

                  <div className="frd-modal-actions">
                    <button type="submit" className="frd-submit-booking-btn">
                      Confirm Flight Booking &rarr;
                    </button>
                    <a
                      href={constructWhatsAppUrl(bookingOffer)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="frd-whatsapp-instant-btn"
                    >
                      <MdOutlineChat /> Instant WhatsApp Desk
                    </a>
                  </div>
                </form>
              </>
            ) : (
              <div className="frd-booking-success-box">
                <div className="frd-success-icon">✓</div>
                <h3>Flight Inquiry Confirmed!</h3>
                <p>
                  Thank you, <strong>{bookName}</strong>. Our senior air ticketing desk has received your request for <strong>{bookingOffer.airline.name} ({bookingOffer.flightNumber})</strong>.
                </p>
                <p className="frd-success-sub">
                  A concierge officer will connect with you via WhatsApp/Phone at <strong>{bookPhone}</strong> within 15 minutes with confirmed PNR seat options and payment link.
                </p>
                <div className="frd-success-actions">
                  <a
                    href={constructWhatsAppUrl(bookingOffer)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="frd-whatsapp-instant-btn"
                  >
                    Open Live Chat on WhatsApp ➔
                  </a>
                  <button
                    type="button"
                    className="frd-modal-done-btn"
                    onClick={() => { setBookingOffer(null); setBookingSubmitted(false); }}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default FlightResultsDashboard;
