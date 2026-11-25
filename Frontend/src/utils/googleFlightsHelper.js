/**
 * googleFlightsHelper.js
 * Utility to construct deep-links into Google Flights (google.com/travel/flights)
 * supporting IATA airport extraction, date normalization, trip types, and cabin classes.
 */

/**
 * Extracts 3-letter IATA code from location string if available,
 * e.g. "Thiruvananthapuram (TRV)" -> "TRV"
 * @param {string} locStr
 * @returns {string}
 */
export const extractAirportCode = (locStr) => {
  if (!locStr || typeof locStr !== 'string') return '';
  const trimmed = locStr.trim();
  
  // Match code inside parentheses, e.g. (TRV), (DXB)
  const codeMatch = trimmed.match(/\(([A-Z]{3})\)/i);
  if (codeMatch && codeMatch[1]) {
    return codeMatch[1].toUpperCase();
  }

  // Match 3-letter standalone code, e.g. "TRV"
  if (/^[A-Za-z]{3}$/.test(trimmed)) {
    return trimmed.toUpperCase();
  }

  // Otherwise return sanitized city/country name
  return trimmed.replace(/[^\w\s-]/g, '').trim();
};

/**
 * Normalizes date input to YYYY-MM-DD format for Google Flights
 * @param {string|Date} dateVal
 * @returns {string|null}
 */
export const formatGoogleFlightsDate = (dateVal) => {
  if (!dateVal) return null;

  if (typeof dateVal === 'string') {
    const trimmed = dateVal.trim();
    // Already in YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
      return trimmed;
    }
    // Format DD/MM/YYYY or DD-MM-YYYY
    const dmyMatch = trimmed.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
    if (dmyMatch) {
      const day = dmyMatch[1].padStart(2, '0');
      const month = dmyMatch[2].padStart(2, '0');
      const year = dmyMatch[3];
      return `${year}-${month}-${day}`;
    }
  }

  const d = new Date(dateVal);
  if (!isNaN(d.getTime())) {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return null;
};

/**
 * Builds a natural-language query deep-link URL for Google Flights
 * Example: https://www.google.com/travel/flights?q=Flights+to+DXB+from+TRV+on+2026-12-10+through+2026-12-20&hl=en&curr=INR
 * 
 * @param {Object} params
 * @param {string} params.fromLoc
 * @param {string} params.toLoc
 * @param {string} [params.departDate]
 * @param {string} [params.returnDate]
 * @param {string} [params.tripType='Return'] - 'Return' | 'One way' | 'Multi-city'
 * @param {boolean} [params.directOnly=false]
 * @param {string} [params.travellers='1 Adult, Economy']
 * @param {string} [params.currency='INR']
 * @returns {string} Fully encoded Google Flights URL
 */
export const buildGoogleFlightsUrl = ({
  fromLoc = 'TRV',
  toLoc = '',
  departDate = '',
  returnDate = '',
  tripType = 'Return',
  directOnly = false,
  travellers = '',
  currency = 'INR'
}) => {
  const origin = extractAirportCode(fromLoc) || 'TRV';
  const destination = extractAirportCode(toLoc) || '';

  // Base flight search URL
  const baseUrl = 'https://www.google.com/travel/flights';

  // Construct natural language query components
  const queryParts = [];

  // Prefix: "nonstop Flights" or "Flights"
  queryParts.push(directOnly ? 'nonstop Flights' : 'Flights');

  if (destination) {
    queryParts.push(`to ${destination}`);
  }

  if (origin) {
    queryParts.push(`from ${origin}`);
  }

  // Handle dates
  const formattedDepart = formatGoogleFlightsDate(departDate);
  const formattedReturn = formatGoogleFlightsDate(returnDate);

  if (tripType === 'One way') {
    if (formattedDepart) {
      queryParts.push(`on ${formattedDepart}`);
    }
  } else {
    // Return / Round-trip
    if (formattedDepart && formattedReturn) {
      queryParts.push(`on ${formattedDepart} through ${formattedReturn}`);
    } else if (formattedDepart) {
      queryParts.push(`on ${formattedDepart}`);
    }
  }

  // Cabin Class extraction
  const travLower = (travellers || '').toLowerCase();
  if (travLower.includes('first')) {
    queryParts.push('first class');
  } else if (travLower.includes('business')) {
    queryParts.push('business class');
  } else if (travLower.includes('premium')) {
    queryParts.push('premium economy');
  }

  const queryStr = queryParts.join(' ');
  const params = new URLSearchParams();
  params.set('q', queryStr);
  params.set('hl', 'en');
  if (currency) {
    params.set('curr', currency);
  }

  return `${baseUrl}?${params.toString()}`;
};
