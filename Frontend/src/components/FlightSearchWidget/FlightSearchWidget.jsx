import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchLiveFlightOffers } from '../../services/flightApiService';
import FlightResultsDashboard from '../FlightResults/FlightResultsDashboard';
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

const FlightSearchWidget = ({ variant = 'default' }) => {
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

  // Checkbox states - Streamlined to only Direct flights and Nearby airports
  const [directOnly, setDirectOnly] = useState(false);
  const [nearbyAirports, setNearbyAirports] = useState(false);

  // Validation & Search state
  const [toInputError, setToInputError] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState(null);
  const [flightOffers, setFlightOffers] = useState([]);
  const [isLoadingFlights, setIsLoadingFlights] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);

  // Swap From and To
  const handleSwap = (e) => {
    e.stopPropagation();
    const temp = fromLoc;
    setFromLoc(toLoc || 'Thiruvananthapuram (TRV)');
    setToLoc(temp);
    if (temp) setToInputError(false);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!toLoc.trim()) {
      setToInputError(true);
      return;
    }
    setToInputError(false);
    setIsLoadingFlights(true);
    setSearchPerformed(true);

    const criteria = {
      fromLoc,
      toLoc,
      departDate,
      returnDate: tripType === 'One way' ? '' : returnDate,
      tripType,
      directOnly,
      nearbyAirports,
      travellers,
      currency: 'INR'
    };
    setSearchCriteria(criteria);

    try {
      const results = await fetchLiveFlightOffers(criteria);
      setFlightOffers(results);
    } catch (err) {
      console.error('Error fetching live flight offers:', err);
      setFlightOffers([]);
    } finally {
      setIsLoadingFlights(false);
    }
  };

  return (
    <section className={`flight-search-section ${variant === 'hero' ? 'hero-variant' : ''}`}>
      <div className="flight-search-container">
        
        {/* Main Heading */}
        <div className="flight-search-header-row">
          <div>
            <h2 className="flight-search-heading">
              Millions of cheap flights. One simple search.
            </h2>
            <p className="flight-search-subheading">
              Search and compare real-time airline fares & schedules across hundreds of carriers with Flybook.
            </p>
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

          {/* Search Submit Button */}
          <button type="submit" className="fsw-search-submit-btn" title="Search live fares">
            <span className="fsw-btn-title">Search flights</span>
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

        {/* Bottom Checkbox Options - Streamlined to only Direct flights and Nearby airports */}
        <div className="fsw-bottom-row streamlined">
          <label className="fsw-checkbox-label">
            <input
              type="checkbox"
              checked={directOnly}
              onChange={(e) => setDirectOnly(e.target.checked)}
              className="fsw-custom-checkbox"
            />
            <span>Direct flights only</span>
          </label>
          <label className="fsw-checkbox-label">
            <input
              type="checkbox"
              checked={nearbyAirports}
              onChange={(e) => setNearbyAirports(e.target.checked)}
              className="fsw-custom-checkbox"
            />
            <span>Add nearby airports</span>
          </label>
        </div>

        {/* Loading Radar Scanner State */}
        {isLoadingFlights && (
          <div className="fsw-loading-scanner-box">
            <div className="fsw-radar-spinner">
              <span className="fsw-radar-sweep"></span>
              <span className="fsw-radar-icon">✈️</span>
            </div>
            <h4>Searching real-time airfares...</h4>
            <p>Comparing live seat availability and fares across 25+ global carriers</p>
          </div>
        )}

        {/* Real-time Flight Fare Comparison & Filtration Dashboard */}
        {searchPerformed && !isLoadingFlights && (
          <FlightResultsDashboard
            offers={flightOffers}
            searchCriteria={searchCriteria}
            onResetSearch={() => {
              setSearchPerformed(false);
              setFlightOffers([]);
            }}
          />
        )}

      </div>
    </section>
  );
};

export default FlightSearchWidget;
