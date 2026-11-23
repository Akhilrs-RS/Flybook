import React, { useState } from 'react';
import './FlightSearchWidget.css';

const FlightSearchWidget = () => {
  // State for search fields
  const [tripType, setTripType] = useState('Return');
  const [showTripMenu, setShowTripMenu] = useState(false);
  const [bags, setBags] = useState('Bags');
  const [showBagsMenu, setShowBagsMenu] = useState(false);

  const [fromLoc, setFromLoc] = useState('Thiruvananthapuram (TRV)');
  const [toLoc, setToLoc] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travellers, setTravellers] = useState('1 Adult, Economy');

  // Checkbox states
  const [nearbyFrom, setNearbyFrom] = useState(false);
  const [nearbyTo, setNearbyTo] = useState(false);
  const [directOnly, setDirectOnly] = useState(false);
  const [placeToStay, setPlaceToStay] = useState(true);

  // Search notification state
  const [searched, setSearched] = useState(false);

  // Swap From and To
  const handleSwap = (e) => {
    e.stopPropagation();
    const temp = fromLoc;
    setFromLoc(toLoc || 'Thiruvananthapuram (TRV)');
    setToLoc(temp);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
    setTimeout(() => setSearched(false), 3500);
  };

  return (
    <section className="flight-search-section">
      <div className="flight-search-container">
        
        {/* Main Heading */}
        <h2 className="flight-search-heading">
          Millions of cheap flights. One simple search.
        </h2>

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
          <div className="fsw-bar-wrapper">
            
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
            <div className="fsw-cell fsw-to-cell">
              <span className="fsw-cell-label">To</span>
              <input
                type="text"
                className="fsw-cell-input placeholder-highlight"
                value={toLoc}
                onChange={(e) => setToLoc(e.target.value)}
                placeholder="Country, city or airport"
              />
            </div>

            {/* Segment 3: Depart */}
            <div className="fsw-cell fsw-depart-cell">
              <span className="fsw-cell-label">Depart</span>
              <input
                type="text"
                className="fsw-cell-input date-input"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                placeholder="Add date"
              />
            </div>

            {/* Segment 4: Return */}
            <div className="fsw-cell fsw-return-cell">
              <span className="fsw-cell-label">Return</span>
              <input
                type="text"
                className="fsw-cell-input date-input"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                placeholder="Add date"
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
              />
            </div>

          </div>

          {/* Search Button */}
          <button type="submit" className="fsw-search-submit-btn">
            Search
          </button>
        </form>

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
                  <span>Direct flights</span>
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

        {/* Toast confirmation for dummy search */}
        {searched && (
          <div className="fsw-search-toast">
            <span>✈ Searching {tripType.toLowerCase()} flights from {fromLoc || 'origin'} to {toLoc || 'selected destination'}...</span>
          </div>
        )}

      </div>
    </section>
  );
};

export default FlightSearchWidget;
