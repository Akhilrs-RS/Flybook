import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { buildGoogleFlightsUrl } from '../../utils/googleFlightsHelper';
import './FlightSearchWidget.css';

const popularDestinations = [
  'Dubai (DXB)',
  'London (LHR)',
  'Singapore (SIN)',
  'Riyadh (RUH)',
  'Male (MLE)',
  'Bangkok (BKK)',
  'Delhi (DEL)'
];

const FlightSearchWidget = () => {
  // Compute default dates (Depart: +7 days, Return: +14 days)
  const todayStr = new Date().toISOString().split('T')[0];
  const defaultDepart = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const defaultReturn = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  // State for search fields
  const [tripType, setTripType] = useState('Return');
  const [showTripMenu, setShowTripMenu] = useState(false);
  const [bags, setBags] = useState('Bags');
  const [showBagsMenu, setShowBagsMenu] = useState(false);

  const [fromLoc, setFromLoc] = useState('Thiruvananthapuram (TRV)');
  const [toLoc, setToLoc] = useState('');
  const [departDate, setDepartDate] = useState(defaultDepart);
  const [returnDate, setReturnDate] = useState(defaultReturn);
  const [travellers, setTravellers] = useState('1 Adult, Economy');

  // Checkbox states
  const [nearbyFrom, setNearbyFrom] = useState(false);
  const [nearbyTo, setNearbyTo] = useState(false);
  const [directOnly, setDirectOnly] = useState(false);
  const [placeToStay, setPlaceToStay] = useState(true);

  // Validation & Live Redirect state
  const [toInputError, setToInputError] = useState(false);
  const [redirectInfo, setRedirectInfo] = useState(null);

  // Swap From and To
  const handleSwap = (e) => {
    e.stopPropagation();
    const temp = fromLoc;
    setFromLoc(toLoc || 'Thiruvananthapuram (TRV)');
    setToLoc(temp);
    if (temp) setToInputError(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!toLoc.trim()) {
      setToInputError(true);
      return;
    }
    setToInputError(false);

    // Build live Google Flights deep-link URL
    const url = buildGoogleFlightsUrl({
      fromLoc,
      toLoc,
      departDate,
      returnDate: tripType === 'One way' ? '' : returnDate,
      tripType,
      directOnly,
      travellers,
      currency: 'INR'
    });

    setRedirectInfo({
      origin: fromLoc,
      destination: toLoc,
      url,
      tripType,
      directOnly
    });

    // Launch Google Flights in a new browser tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="flight-search-section">
      <div className="flight-search-container">
        
        {/* Main Heading */}
        <div className="flight-search-header-row">
          <div>
            <h2 className="flight-search-heading">
              Millions of cheap flights. One simple search.
            </h2>
            <p className="flight-search-subheading">
              Search live fares & schedules directly on Google Flights with Flybook’s curated routing.
            </p>
          </div>
          <div className="google-flights-powered-badge">
            <span className="gf-dot"></span>
            <span>Live on Google Flights</span>
          </div>
        </div>

        {/* Top Dropdown Pills */}
        <div className="flight-search-top-pills">
          
          {/* Trip Type Dropdown */}
          <div className="fsw-pill-wrapper">
            <button 
              type="button" 
              className="fsw-pill-btn"
              onClick={() => {
                setShowTripMenu(!showTripMenu);
                setShowBagsMenu(false);
              }}
            >
              <span>{tripType}</span>
              <svg className="fsw-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {showTripMenu && (
              <div className="fsw-dropdown-menu">
                {['Return', 'One way', 'Multi-city'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`fsw-dropdown-item ${tripType === type ? 'active' : ''}`}
                    onClick={() => {
                      setTripType(type);
                      setShowTripMenu(false);
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Bags Dropdown */}
          <div className="fsw-pill-wrapper">
            <button 
              type="button" 
              className="fsw-pill-btn"
              onClick={() => {
                setShowBagsMenu(!showBagsMenu);
                setShowTripMenu(false);
              }}
            >
              <span>{bags}</span>
              <svg className="fsw-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {showBagsMenu && (
              <div className="fsw-dropdown-menu">
                {['Cabin bag only', '1 checked bag', '2+ checked bags'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className="fsw-dropdown-item"
                    onClick={() => {
                      setBags(opt);
                      setShowBagsMenu(false);
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Main 5-Cell Search Bar Row */}
        <form className="fsw-search-form" onSubmit={handleSearch}>
          <div className={`fsw-bar-wrapper ${toInputError ? 'has-error' : ''}`}>
            
            {/* Segment 1: From */}
            <div className="fsw-cell fsw-from-cell">
              <span className="fsw-cell-label">From</span>
              <input
                type="text"
                className="fsw-cell-input"
                value={fromLoc}
                onChange={(e) => setFromLoc(e.target.value)}
                placeholder="Country, city or airport"
              />

              {/* Floating Circular Swap Button */}
              <button
                type="button"
                className="fsw-swap-btn"
                onClick={handleSwap}
                title="Swap departure and arrival"
                aria-label="Swap departure and arrival"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 7h12m0 0l-4-4m4 4l-4 4m-8 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </button>
            </div>

            {/* Segment 2: To */}
            <div className={`fsw-cell fsw-to-cell ${toInputError ? 'cell-error' : ''}`}>
              <span className="fsw-cell-label">
                To {toInputError && <span className="label-error-text">— Please enter destination</span>}
              </span>
              <input
                type="text"
                className={`fsw-cell-input placeholder-highlight ${toInputError ? 'input-error' : ''}`}
                value={toLoc}
                onChange={(e) => {
                  setToLoc(e.target.value);
                  if (e.target.value.trim()) setToInputError(false);
                }}
                placeholder="Country, city or airport (e.g. Dubai, London)"
                required
              />
            </div>

            {/* Segment 3: Depart */}
            <div className="fsw-cell fsw-depart-cell">
              <span className="fsw-cell-label">Depart</span>
              <input
                type="date"
                min={todayStr}
                className="fsw-cell-input date-input"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
              />
            </div>

            {/* Segment 4: Return */}
            <div className={`fsw-cell fsw-return-cell ${tripType === 'One way' ? 'disabled-cell' : ''}`}>
              <span className="fsw-cell-label">
                {tripType === 'One way' ? 'Return (One-way)' : 'Return'}
              </span>
              <input
                type="date"
                min={departDate || todayStr}
                disabled={tripType === 'One way'}
                className="fsw-cell-input date-input"
                value={tripType === 'One way' ? '' : returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </div>

            {/* Segment 5: Travellers and Cabin Class */}
            <div className="fsw-cell fsw-travellers-cell">
              <span className="fsw-cell-label">Travellers and cabin class</span>
              <input
                type="text"
                className="fsw-cell-input"
                value={travellers}
                onChange={(e) => setTravellers(e.target.value)}
                placeholder="e.g. 1 Adult, Economy"
              />
            </div>

          </div>

          {/* Search Button with Google Flights Link Indicator */}
          <button type="submit" className="fsw-search-submit-btn" title="Search live fares on Google Flights">
            <span className="fsw-btn-title">Search</span>
            <span className="fsw-btn-sub">Google Flights ↗</span>
          </button>
        </form>

        {/* Popular Destination Quick-Pick Chips */}
        <div className="fsw-popular-chips-row">
          <span className="fsw-chips-label">Popular Hubs:</span>
          <div className="fsw-chips-list">
            {popularDestinations.map((dest) => (
              <button
                key={dest}
                type="button"
                className="fsw-chip-btn"
                onClick={() => {
                  setToLoc(dest);
                  setToInputError(false);
                }}
              >
                {dest}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Checkbox Options Grid */}
        <div className="fsw-bottom-row">
          
          {/* Left Checkboxes (aligned under From & To) */}
          <div className="fsw-bottom-left-group">
            <div className="fsw-checkbox-cols">
              
              {/* Column 1: Under From */}
              <div className="fsw-col-under-from">
                <label className="fsw-checkbox-label">
                  <input
                    type="checkbox"
                    checked={nearbyFrom}
                    onChange={(e) => setNearbyFrom(e.target.checked)}
                    className="fsw-custom-checkbox"
                  />
                  <span>Add nearby airports</span>
                </label>

                <label className="fsw-checkbox-label direct-flights-label">
                  <input
                    type="checkbox"
                    checked={directOnly}
                    onChange={(e) => setDirectOnly(e.target.checked)}
                    className="fsw-custom-checkbox"
                  />
                  <span>Direct flights only</span>
                </label>
              </div>

              {/* Column 2: Under To */}
              <div className="fsw-col-under-to">
                <label className="fsw-checkbox-label">
                  <input
                    type="checkbox"
                    checked={nearbyTo}
                    onChange={(e) => setNearbyTo(e.target.checked)}
                    className="fsw-custom-checkbox"
                  />
                  <span>Add nearby airports</span>
                </label>
              </div>

            </div>
          </div>

          {/* Right Checkbox (aligned under Travellers and Cabin Class) */}
          <div className="fsw-bottom-right-group">
            <label className="fsw-checkbox-label place-to-stay-label">
              <input
                type="checkbox"
                checked={placeToStay}
                onChange={(e) => setPlaceToStay(e.target.checked)}
                className="fsw-custom-checkbox checked-accent"
              />
              <span>Add a place to stay</span>
            </label>
          </div>

        </div>

        {/* Live Google Flights Redirect Confirmation Banner */}
        {redirectInfo && (
          <div className="fsw-redirect-card">
            <div className="fsw-redirect-header">
              <div className="fsw-redirect-left">
                <span className="fsw-redirect-pulse"></span>
                <span className="fsw-redirect-tag">GOOGLE FLIGHTS DEEP-LINK</span>
              </div>
              <button 
                type="button" 
                className="fsw-redirect-close-btn"
                onClick={() => setRedirectInfo(null)}
                aria-label="Dismiss banner"
              >
                ✕
              </button>
            </div>

            <div className="fsw-redirect-body">
              <div className="fsw-redirect-main">
                <h4 className="fsw-redirect-title">
                  Searching {redirectInfo.directOnly ? 'Direct' : ''} Flights: {redirectInfo.origin} &rarr; {redirectInfo.destination}
                </h4>
                <p className="fsw-redirect-desc">
                  We opened your flight search on Google Flights in a new tab. If it did not open automatically, click below:
                </p>
                <div className="fsw-redirect-action-row">
                  <a 
                    href={redirectInfo.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="fsw-open-google-btn"
                  >
                    Open Live Results on Google Flights ↗
                  </a>
                  <Link to="/contact" className="fsw-concierge-assist-btn">
                    Book via Flybook Concierge (Offline Rates & Visa Support) &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default FlightSearchWidget;
