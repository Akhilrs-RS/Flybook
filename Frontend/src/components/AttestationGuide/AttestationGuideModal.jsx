import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MdClose, 
  MdOutlineVerified, 
  MdOutlineSchool, 
  MdOutlineFamilyRestroom, 
  MdOutlineBusiness, 
  MdOutlineArrowForward,
  MdOutlineCheckCircle,
  MdOutlinePhone,
  MdOutlineMail,
  MdOutlineAssignment
} from 'react-icons/md';
import './AttestationGuideModal.css';

const TABS = [
  { id: 'overview', label: 'Overview & Apostille' },
  { id: 'doc-types', label: '3 Document Types' },
  { id: 'pipeline', label: 'Legalization Pipeline' },
  { id: 'country-guides', label: 'Country Guides (UAE, Kuwait...)' },
  { id: 'checklist', label: 'Document Checklist & Support' }
];

const AttestationGuideModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="agm-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="agm-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="agm-header">
          <div className="agm-header-text">
            <span className="agm-eyebrow">FLYBOOK CONCIERGE LEGALIZATION GUIDE</span>
            <h2 className="agm-title">Embassy Attestation & Apostille Services</h2>
            <p className="agm-subtitle">
              Comprehensive legal authentication for international employment, residency, higher education, and overseas enterprise expansion.
            </p>
          </div>
          <button className="agm-close-btn" onClick={onClose} aria-label="Close attestation guide">
            <MdClose />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="agm-tabs-bar">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`agm-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Body */}
        <div className="agm-body">

          {/* TAB 1: OVERVIEW & APOSTILLE */}
          {activeTab === 'overview' && (
            <div className="agm-tab-pane">
              <div className="agm-intro-card">
                <h3>What is Embassy Attestation & Legalization?</h3>
                <p>
                  Legalization of documents and certificates is required by foreign embassies when you plan to travel abroad for work, residence, study, or business purposes. It is the mandatory verification process followed by nations that are <strong>not members of the Apostille Hague Convention</strong> (such as the UAE, Saudi Arabia, Kuwait, Qatar, and Bahrain).
                </p>
                <p>
                  Embassy attestation verifies the authenticity of individuals and corporate entities before foreign governments. Once state-level departments and the <strong>Ministry of External Affairs (MEA, India)</strong> have verified the documents, the respective Embassy stamps the document to grant it legal authority in the destination country.
                </p>
              </div>

              <div className="agm-split-cards">
                <div className="agm-info-card">
                  <div className="agm-card-badge">NON-HAGUE CONVENTION COUNTRIES</div>
                  <h4>Embassy Attestation</h4>
                  <p>
                    Required for entry, work, or residency in Middle East and Gulf nations (UAE, Kuwait, Saudi Arabia, Qatar, Bahrain, China, etc.).
                  </p>
                  <ul className="agm-card-list">
                    <li><MdOutlineCheckCircle className="check-ico" /> State Department (HRD / Home / SDM / NORKA / Mantralaya)</li>
                    <li><MdOutlineCheckCircle className="check-ico" /> Ministry of External Affairs (MEA, Govt of India) Stamp</li>
                    <li><MdOutlineCheckCircle className="check-ico" /> Destination Country Embassy / Consulate Seal</li>
                    <li><MdOutlineCheckCircle className="check-ico" /> MOFA (Ministry of Foreign Affairs) in destination nation</li>
                  </ul>
                </div>

                <div className="agm-info-card highlight-card">
                  <div className="agm-card-badge gold">1961 HAGUE CONVENTION TREATY</div>
                  <h4>Apostille Attestation</h4>
                  <p>
                    A simplified, universal international documentation standard recognized in <strong>92 member nations worldwide</strong> (predominantly Western countries, European Union, Australia, USA, etc.).
                  </p>
                  <ul className="agm-card-list">
                    <li><MdOutlineCheckCircle className="check-ico" /> No destination embassy visit required</li>
                    <li><MdOutlineCheckCircle className="check-ico" /> Stamped directly with a square, computer-produced sticker stamp on document reverse</li>
                    <li><MdOutlineCheckCircle className="check-ico" /> Valid across all 92 Hague Convention member states</li>
                    <li><MdOutlineCheckCircle className="check-ico" /> Expedited processing through SDM/MEA</li>
                  </ul>
                </div>
              </div>

              <div className="agm-purposes-banner">
                <h4>Primary Purposes for Document Legalization:</h4>
                <div className="agm-purposes-chips">
                  <span>🎓 Foreign Higher Education</span>
                  <span>💼 Overseas Employment & Work Visas</span>
                  <span>🏡 Permanent Residency & Family Visas</span>
                  <span>🚀 International Start-Up & Commercial Expansion</span>
                  <span>🏥 MOH / DOH Healthcare Licensure</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 3 DOCUMENT TYPES */}
          {activeTab === 'doc-types' && (
            <div className="agm-tab-pane">
              <div className="agm-section-header">
                <h3>The Three Primary Types of Attestation & Apostille</h3>
                <p>Every certificate requires distinct initial state verifications before MEA and Embassy stamping.</p>
              </div>

              <div className="agm-types-grid">
                {/* 1. Educational */}
                <div className="agm-type-box">
                  <div className="type-box-header">
                    <MdOutlineSchool className="type-ico" />
                    <div>
                      <span className="type-tag">CATEGORY 01</span>
                      <h4>Educational Certificates</h4>
                    </div>
                  </div>
                  <p className="type-desc">
                    Issued by recognized schools, colleges, and universities across India for academic or employment validation.
                  </p>
                  <div className="type-docs-list">
                    <strong>Certificates Included:</strong>
                    <span>Degree Certificates, Diploma Certificates, SSLC, HSC, Marksheets, Engineering & Nursing Degrees, Bonafide Letters.</span>
                  </div>
                  <div className="type-use-cases">
                    <strong>Essential For:</strong>
                    <ul>
                      <li>Securing international work permits and employment visas</li>
                      <li>Admission to foreign universities and academic institutions</li>
                      <li>Writing licensing exams (MOH, DOH for doctors, nurses, pharmacists)</li>
                      <li>Attaining official degree equivalency abroad</li>
                    </ul>
                  </div>
                </div>

                {/* 2. Non-Educational / Personal */}
                <div className="agm-type-box">
                  <div className="type-box-header">
                    <MdOutlineFamilyRestroom className="type-ico" />
                    <div>
                      <span className="type-tag">CATEGORY 02</span>
                      <h4>Personal / Non-Educational</h4>
                    </div>
                  </div>
                  <p className="type-desc">
                    Personal certificates confirming legal, familial, civil, and character status of individuals traveling abroad.
                  </p>
                  <div className="type-docs-list">
                    <strong>Certificates Included:</strong>
                    <span>Birth Certificates, Marriage Certificates, Police Clearance (PCC), Experience Letters, Death Certificates, Medical Fitness.</span>
                  </div>
                  <div className="type-use-cases">
                    <strong>Essential For:</strong>
                    <ul>
                      <li>Sponsoring residence visas for spouse, children, and parents</li>
                      <li>School and kindergarten admission for children (Transfer Certificates)</li>
                      <li>Work visa background verification and PCC compliance</li>
                      <li>Overseas legal affairs, probate, and dual citizenship claims</li>
                    </ul>
                  </div>
                </div>

                {/* 3. Commercial */}
                <div className="agm-type-box">
                  <div className="type-box-header">
                    <MdOutlineBusiness className="type-ico" />
                    <div>
                      <span className="type-tag">CATEGORY 03</span>
                      <h4>Commercial Documents</h4>
                    </div>
                  </div>
                  <p className="type-desc">
                    Corporate, legal, and trade documentation for companies conducting business or cross-border trade in foreign markets.
                  </p>
                  <div className="type-docs-list">
                    <strong>Certificates Included:</strong>
                    <span>Power of Attorney (POA), Chamber of Commerce Invoices, Board Resolutions, Articles of Association, Trade Licenses.</span>
                  </div>
                  <div className="type-use-cases">
                    <strong>Essential For:</strong>
                    <ul>
                      <li>Registering a company or opening foreign branch offices</li>
                      <li>Opening corporate bank accounts in UAE, Kuwait, Saudi, or Qatar</li>
                      <li>Authorizing legal rights to sell or transfer property</li>
                      <li>Removing or adding partners in LLC partnerships</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: LEGALIZATION PIPELINE */}
          {activeTab === 'pipeline' && (
            <div className="agm-tab-pane">
              <div className="agm-section-header">
                <h3>The 4-Tier Legalization Pipeline (India to Destination Country)</h3>
                <p>Documents progress through rigorous, structured tiers to eliminate fraud and guarantee legal validity.</p>
              </div>

              {/* Workflow Stepper */}
              <div className="agm-stepper">
                <div className="agm-step-node">
                  <div className="step-num-badge">01</div>
                  <div className="step-content">
                    <span className="step-tag">TIER 1 • LOCAL & STATE LEVEL</span>
                    <h4>Notary & State Department Verification</h4>
                    <p>
                      <strong>For Educational:</strong> State HRD (Higher Education Dept), SDM (Sub-Divisional Magistrate), NORKA (Kerala), or Higher Education Councils.<br />
                      <strong>For Personal:</strong> State Home Department, Notary Public, or Mantralaya (Mumbai).<br />
                      <strong>For Commercial:</strong> Chamber of Commerce certification.
                    </p>
                  </div>
                </div>

                <div className="agm-step-node">
                  <div className="step-num-badge">02</div>
                  <div className="step-content">
                    <span className="step-tag">TIER 2 • CENTRAL GOVT (INDIA)</span>
                    <h4>MEA (Ministry of External Affairs) Authentication</h4>
                    <p>
                      The official central government ministry in India verifies the state signatures and applies the official <strong>MEA Stamp</strong> (or Hague Apostille sticker for member states) before handing over to the foreign embassy.
                    </p>
                  </div>
                </div>

                <div className="agm-step-node">
                  <div className="step-num-badge">03</div>
                  <div className="step-content">
                    <span className="step-tag">TIER 3 • DIPLOMATIC ATTESTATION</span>
                    <h4>Destination Embassy / Consulate Attestation</h4>
                    <p>
                      The Embassy or Consulate of the destination country located in India (New Delhi, Mumbai, Chennai) inspects the MEA seal and places the official Embassy stamp and consular signature.
                    </p>
                  </div>
                </div>

                <div className="agm-step-node">
                  <div className="step-num-badge">04</div>
                  <div className="step-content">
                    <span className="step-tag">TIER 4 • IN-COUNTRY VALIDATION</span>
                    <h4>MOFA (Ministry of Foreign Affairs) Attestation</h4>
                    <p>
                      Upon arrival in the destination country (e.g. UAE, Kuwait, Saudi Arabia, Qatar), the local Ministry of Foreign Affairs affixes the final verification seal, confirming full local legal recognition for visas, employment, and banking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="agm-workflow-summary">
                <strong>Standard MOFA Route for Education:</strong>
                <span className="route-flow">
                  State HRD / SDM &rarr; MEA (New Delhi) &rarr; Destination Embassy &rarr; Destination MOFA
                </span>
              </div>
            </div>
          )}

          {/* TAB 4: COUNTRY GUIDES */}
          {activeTab === 'country-guides' && (
            <div className="agm-tab-pane">
              <div className="agm-section-header">
                <h3>Country-Specific Attestation Guidelines</h3>
                <p>Key requirements and protocols across our primary GCC and international corridors.</p>
              </div>

              <div className="agm-countries-grid">
                
                {/* UAE */}
                <div className="country-guide-card">
                  <div className="country-guide-header">
                    <span className="flag">🇦🇪</span>
                    <div>
                      <h4>UAE Embassy Attestation</h4>
                      <span className="country-sub">United Arab Emirates (Dubai, Abu Dhabi & 7 Emirates)</span>
                    </div>
                  </div>
                  <p>
                    Mandatory for individuals applying for employment, resident visas, or commercial licensing across any of the seven Emirates.
                  </p>
                  <div className="guide-points">
                    <strong>Key Purposes in UAE:</strong>
                    <ul>
                      <li>Work card & labor permit issuance</li>
                      <li>Family residence visas (spouse, children, in-laws)</li>
                      <li>MOH (Ministry of Health) and DOH licensing for medical practitioners</li>
                      <li>School transfer certificates for children's admission</li>
                      <li>Opening UAE bank accounts, LLC partner changes, and property rights</li>
                    </ul>
                  </div>
                </div>

                {/* Kuwait */}
                <div className="country-guide-card">
                  <div className="country-guide-header">
                    <span className="flag">🇰🇼</span>
                    <div>
                      <h4>Kuwait Embassy Attestation</h4>
                      <span className="country-sub">State of Kuwait</span>
                    </div>
                  </div>
                  <p>
                    A crucial requirement that proves you and your documents are legitimate before Kuwaiti authorities.
                  </p>
                  <div className="guide-points">
                    <strong>Mandatory Documents for Kuwait:</strong>
                    <ul>
                      <li>Original Degree / Diploma Certificate</li>
                      <li>Original Year-wise Mark Sheets</li>
                      <li>Official Bonafide Letter from the College / University</li>
                      <li>Clear Passport Copy (Front & Back)</li>
                    </ul>
                    <div className="guide-notice">
                      <strong>Procedure:</strong> State HRD/SDM &rarr; MEA &rarr; Kuwait Embassy &rarr; Kuwait MOFA.
                    </div>
                  </div>
                </div>

                {/* Saudi Arabia */}
                <div className="country-guide-card">
                  <div className="country-guide-header">
                    <span className="flag">🇸🇦</span>
                    <div>
                      <h4>Saudi Embassy Attestation</h4>
                      <span className="country-sub">Kingdom of Saudi Arabia</span>
                    </div>
                  </div>
                  <p>
                    Specialized legalizations for professional employment, Iqama visas, family visas, and engineering council registrations.
                  </p>
                  <div className="guide-points">
                    <strong>Key Details:</strong>
                    <ul>
                      <li>Requires university verification alongside embassy stamping</li>
                      <li>Commercial trade invoices & board resolutions verified via Chamber of Commerce</li>
                      <li>Full cultural bureau & embassy liaison handled by Flybook</li>
                    </ul>
                  </div>
                </div>

                {/* Qatar & Bahrain */}
                <div className="country-guide-card">
                  <div className="country-guide-header">
                    <span className="flag">🇶🇦 🇧🇭</span>
                    <div>
                      <h4>Qatar & Bahrain Attestation</h4>
                      <span className="country-sub">State of Qatar & Kingdom of Bahrain</span>
                    </div>
                  </div>
                  <p>
                    Certified end-to-end processing for Qatar and Bahrain visas, higher education admissions, and commercial enterprise setups.
                  </p>
                  <div className="guide-points">
                    <strong>Key Details:</strong>
                    <ul>
                      <li>Educational certificates authenticated with university transcripts</li>
                      <li>Police Clearance Certificates (PCC) legalized for employment visas</li>
                      <li>Qatar MOFA electronic tracking and doorstep delivery</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 5: CHECKLIST & SUPPORT */}
          {activeTab === 'checklist' && (
            <div className="agm-tab-pane">
              <div className="agm-section-header">
                <h3>Document Checklist & Flybook White-Glove Support</h3>
                <p>Everything you need to prepare for a frictionless, guaranteed attestation experience.</p>
              </div>

              <div className="agm-checklist-grid">
                <div className="agm-checklist-box">
                  <h4>Standard Document Checklist</h4>
                  <ul className="checklist-items">
                    <li>
                      <MdOutlineVerified className="chk-ico" />
                      <div>
                        <strong>Original Certificate:</strong>
                        <span>Original degree, diploma, birth, marriage, or commercial document (laminated documents will have lamination removed safely).</span>
                      </div>
                    </li>
                    <li>
                      <MdOutlineVerified className="chk-ico" />
                      <div>
                        <strong>Passport Copy:</strong>
                        <span>High-resolution color copy of applicant's passport (first and last pages).</span>
                      </div>
                    </li>
                    <li>
                      <MdOutlineVerified className="chk-ico" />
                      <div>
                        <strong>All Semester Mark Sheets:</strong>
                        <span>Required for educational certificate attestation (especially for Kuwait, Saudi Arabia, and UAE).</span>
                      </div>
                    </li>
                    <li>
                      <MdOutlineVerified className="chk-ico" />
                      <div>
                        <strong>Bonafide Letter / Authorization:</strong>
                        <span>Issued by the college/university verifying regular student enrollment (required for specific embassies).</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="agm-flybook-service-box">
                  <span className="service-tag">CONCIERGE EXPERIENCE</span>
                  <h4>Why Choose Flybook Attestation Services?</h4>
                  <p>
                    Experience complete peace of mind without visiting government offices or waiting in embassy queues.
                  </p>
                  <div className="service-perks">
                    <div className="perk-item">
                      <span className="perk-bullet">✦</span>
                      <div>
                        <strong>Doorstep Pick-Up & Drop:</strong>
                        <p>Secure, insured courier collection from your residence or office across India and global delivery.</p>
                      </div>
                    </div>
                    <div className="perk-item">
                      <span className="perk-bullet">✦</span>
                      <div>
                        <strong>Real-time Electronic Tracking:</strong>
                        <p>Monitor your documents at every stage (Notary, HRD, MEA, Embassy, MOFA) with transparent status updates.</p>
                      </div>
                    </div>
                    <div className="perk-item">
                      <span className="perk-bullet">✦</span>
                      <div>
                        <strong>24/7 Expert Concierge Support:</strong>
                        <p>Our senior attestation counselors are available round the clock to resolve embassy queries and paperwork hurdles.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Contact Bar */}
              <div className="agm-cta-bar">
                <div className="agm-cta-text">
                  <h5>Ready to legalize your certificates?</h5>
                  <p>Speak to an attestation specialist or submit an online inquiry today.</p>
                </div>
                <div className="agm-cta-actions">
                  <Link to="/contact" className="agm-primary-btn" onClick={onClose}>
                    Submit Documents for Attestation &rarr;
                  </Link>
                  <a href="tel:+919876543210" className="agm-secondary-btn">
                    <MdOutlinePhone /> +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="agm-footer">
          <div className="agm-footer-notice">
            <span>Official Authentication Corridors: India 🇮🇳 • UAE 🇦🇪 • Kuwait 🇰🇼 • Saudi Arabia 🇸🇦 • Qatar 🇶🇦 • Bahrain 🇧🇭 • 92 Hague Apostille Nations</span>
          </div>
          <button className="agm-close-bottom-btn" onClick={onClose}>
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};

export default AttestationGuideModal;
