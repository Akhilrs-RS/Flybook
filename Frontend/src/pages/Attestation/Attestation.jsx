import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/Common/PageHero';
import d5Img from '../../assets/d5.jpg';
import { 
  MdOutlineVerified, 
  MdOutlineSchool, 
  MdOutlineFamilyRestroom, 
  MdOutlineBusiness, 
  MdOutlineCheckCircle,
  MdOutlinePhone,
  MdOutlineMail,
  MdOutlineArrowForward
} from 'react-icons/md';
import './Attestation.css';

const TABS = [
  { id: 'overview', label: 'Overview & Apostille' },
  { id: 'doc-types', label: '3 Document Types' },
  { id: 'pipeline', label: '4-Tier Pipeline' },
  { id: 'country-guides', label: 'Country Guides (UAE, Kuwait...)' },
  { id: 'checklist', label: 'Checklist & Support' }
];

const Attestation = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="attestation-page">
      {/* 1. Page Hero */}
      <PageHero
        subtitle="EMBASSY LEGALIZATION & APOSTILLE"
        title="Document Attestation Services"
        tagline="Certified authentication for educational, personal, and commercial certificates across India, UAE, Saudi Arabia, Qatar, Kuwait & 92 Hague Apostille nations."
        bgImage={d5Img}
        minHeight="55vh"
        align="left"
      />

      {/* 2. Corridor Highlight Bar */}
      <section className="attestation-corridor-bar">
        <div className="corridor-container">
          <span className="corridor-title">PRIMARY ATTESTATION CORRIDORS:</span>
          <div className="corridor-chips">
            <span className="corridor-chip">🇮🇳 India (MEA & State HRD)</span>
            <span className="corridor-chip">🇦🇪 UAE (Dubai, Abu Dhabi)</span>
            <span className="corridor-chip">🇸🇦 Saudi Arabia</span>
            <span className="corridor-chip">🇶🇦 Qatar</span>
            <span className="corridor-chip">🇰🇼 Kuwait</span>
            <span className="corridor-chip">🇧🇭 Bahrain</span>
            <span className="corridor-chip">🌍 92 Hague Apostille Nations</span>
          </div>
        </div>
      </section>

      {/* 3. Main Interactive Content Guide */}
      <section className="attestation-main-section">
        <div className="attestation-container">
          
          {/* Sub Navigation Tabs */}
          <div className="attestation-tabs-nav">
            {TABS.map(tab => (
              <button
                key={tab.id}
                className={`attestation-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: OVERVIEW & APOSTILLE */}
          {activeTab === 'overview' && (
            <div className="attestation-tab-content">
              <div className="attestation-feature-card">
                <span className="attestation-eyebrow">UNDERSTANDING THE PROCESS</span>
                <h3 className="attestation-content-title">What is Embassy Attestation?</h3>
                <p>
                  Legalization of documents and certificates is required by foreign embassies when you plan to travel abroad for work, residence, study, or business purposes. This is the official procedure followed by countries that are <strong>not members of the Apostille Hague Convention</strong> (such as the UAE, Saudi Arabia, Kuwait, Qatar, and Bahrain).
                </p>
                <p>
                  Legalization is conducted by an embassy, consulate, or authorized government institution to verify the authenticity of an individual or corporate entity. After the <strong>Ministry of External Affairs (MEA, Government of India)</strong> validates the document following state government verification, the respective foreign Embassy affixes its official seal, making it legally valid abroad.
                </p>
              </div>

              {/* Comparison: Embassy vs Apostille */}
              <div className="attestation-comparison-grid">
                <div className="comparison-card">
                  <div className="comp-badge">NON-HAGUE CONVENTION NATIONS</div>
                  <h4>Embassy Attestation</h4>
                  <p>
                    Mandatory for entry, employment, and residency across Middle East & GCC countries (UAE, Kuwait, Saudi Arabia, Qatar, Bahrain, China, etc.).
                  </p>
                  <ul className="comp-list">
                    <li><MdOutlineCheckCircle className="chk-ico" /> <strong>State Level:</strong> HRD, Home Department, SDM, or NORKA</li>
                    <li><MdOutlineCheckCircle className="chk-ico" /> <strong>Central Govt:</strong> Ministry of External Affairs (MEA, New Delhi)</li>
                    <li><MdOutlineCheckCircle className="chk-ico" /> <strong>Diplomatic Seal:</strong> Destination Embassy / Consulate</li>
                    <li><MdOutlineCheckCircle className="chk-ico" /> <strong>Destination Country:</strong> Ministry of Foreign Affairs (MOFA)</li>
                  </ul>
                </div>

                <div className="comparison-card highlight">
                  <div className="comp-badge gold">1961 HAGUE CONVENTION TREATY</div>
                  <h4>Apostille Attestation</h4>
                  <p>
                    A streamlined, universal international documentation procedure recognized in <strong>92 member countries worldwide</strong> (predominantly Western & European nations, Australia, USA, etc.).
                  </p>
                  <ul className="comp-list">
                    <li><MdOutlineCheckCircle className="chk-ico" /> No separate foreign embassy visit required</li>
                    <li><MdOutlineCheckCircle className="chk-ico" /> Validated with a square, computer-produced sticker stamp on document reverse</li>
                    <li><MdOutlineCheckCircle className="chk-ico" /> Universally valid across all 92 Hague Convention signatory countries</li>
                    <li><MdOutlineCheckCircle className="chk-ico" /> Expedited processing through SDM & MEA</li>
                  </ul>
                </div>
              </div>

              {/* Primary Purposes */}
              <div className="attestation-purposes-box">
                <h4>Why is Document Legalization Required?</h4>
                <div className="purposes-grid">
                  <div className="purpose-pill">
                    <span className="p-icon">🎓</span>
                    <div>
                      <strong>Foreign Higher Education</strong>
                      <p>University admissions and credit equivalency.</p>
                    </div>
                  </div>
                  <div className="purpose-pill">
                    <span className="p-icon">💼</span>
                    <div>
                      <strong>Overseas Employment</strong>
                      <p>Work visa issuance, labor card, and employment contracts.</p>
                    </div>
                  </div>
                  <div className="purpose-pill">
                    <span className="p-icon">🏡</span>
                    <div>
                      <strong>Permanent Residency</strong>
                      <p>Sponsoring resident visas for spouse, children, and parents.</p>
                    </div>
                  </div>
                  <div className="purpose-pill">
                    <span className="p-icon">🚀</span>
                    <div>
                      <strong>Commercial & Start-Up Visas</strong>
                      <p>Establishing corporate bank accounts, trade licenses, and LLCs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 3 DOCUMENT TYPES */}
          {activeTab === 'doc-types' && (
            <div className="attestation-tab-content">
              <div className="attestation-intro-text">
                <h3>The Three Primary Categories of Certificates</h3>
                <p>Every certificate category undergoes distinct state and central verification pipelines before diplomatic stamping.</p>
              </div>

              <div className="doc-types-grid">
                
                {/* 1. Educational */}
                <div className="doc-type-card">
                  <div className="dt-header">
                    <MdOutlineSchool className="dt-icon" />
                    <div>
                      <span className="dt-tag">CATEGORY 01</span>
                      <h4>Educational Certificates</h4>
                    </div>
                  </div>
                  <p className="dt-summary">
                    Issued by accredited schools, colleges, autonomous institutes, and universities in India.
                  </p>
                  <div className="dt-docs">
                    <strong>Certificates Included:</strong>
                    <span>Degree Certificates, Diploma Certificates, SSLC, HSC, Marksheets, Bonafide Letters, Engineering & Nursing Degrees.</span>
                  </div>
                  <div className="dt-purposes">
                    <strong>Primary Uses:</strong>
                    <ul>
                      <li>Securing international work permits and labor cards</li>
                      <li>Admission to foreign undergraduate or master's programs</li>
                      <li>Writing licensing exams (MOH, DOH for doctors, nurses, pharmacists)</li>
                      <li>Obtaining official government degree equivalency</li>
                    </ul>
                  </div>
                </div>

                {/* 2. Non-Educational / Personal */}
                <div className="doc-type-card">
                  <div className="dt-header">
                    <MdOutlineFamilyRestroom className="dt-icon" />
                    <div>
                      <span className="dt-tag">CATEGORY 02</span>
                      <h4>Personal / Non-Educational</h4>
                    </div>
                  </div>
                  <p className="dt-summary">
                    Personal and civil certificates confirming legal identity, familial relationships, and character status.
                  </p>
                  <div className="dt-docs">
                    <strong>Certificates Included:</strong>
                    <span>Birth Certificates, Marriage Certificates, Police Clearance (PCC), Experience Letters, Death Certificates, Medical Fitness.</span>
                  </div>
                  <div className="dt-purposes">
                    <strong>Primary Uses:</strong>
                    <ul>
                      <li>Sponsoring residence visas for spouse, children, and in-laws</li>
                      <li>School and kindergarten admission for children (Transfer Certificates)</li>
                      <li>Background verification and PCC compliance for migration</li>
                      <li>Overseas legal affairs, probate, and dual citizenship claims</li>
                    </ul>
                  </div>
                </div>

                {/* 3. Commercial */}
                <div className="doc-type-card">
                  <div className="dt-header">
                    <MdOutlineBusiness className="dt-icon" />
                    <div>
                      <span className="dt-tag">CATEGORY 03</span>
                      <h4>Commercial Documents</h4>
                    </div>
                  </div>
                  <p className="dt-summary">
                    Corporate, financial, and trade records for companies conducting cross-border business.
                  </p>
                  <div className="dt-docs">
                    <strong>Certificates Included:</strong>
                    <span>Power of Attorney (POA), Chamber of Commerce Invoices, Board Resolutions, Articles of Association, Trade Licenses.</span>
                  </div>
                  <div className="dt-purposes">
                    <strong>Primary Uses:</strong>
                    <ul>
                      <li>Registering a company or opening foreign branch offices</li>
                      <li>Opening corporate bank accounts in UAE, Kuwait, Saudi, or Qatar</li>
                      <li>Granting legal authority to sell or manage real estate property</li>
                      <li>Removing or adding partners in LLC partnerships</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: 4-TIER PIPELINE */}
          {activeTab === 'pipeline' && (
            <div className="attestation-tab-content">
              <div className="attestation-intro-text">
                <h3>The 4-Tier Legalization Pipeline (India to Destination Country)</h3>
                <p>A rigorous step-by-step authentication procedure ensuring zero rejection by foreign immigration authorities.</p>
              </div>

              <div className="pipeline-stepper">
                
                <div className="pipeline-step">
                  <div className="step-number">01</div>
                  <div className="step-body">
                    <span className="step-badge">TIER 1 • STATE LEVEL</span>
                    <h4>Notary & State Department Verification</h4>
                    <p>
                      <strong>Educational Documents:</strong> Authenticated by State HRD (Higher Education Department), Sub-Divisional Magistrate (SDM), NORKA (Kerala), or Higher Education Council.<br />
                      <strong>Personal Documents:</strong> Authenticated by State Home Department, Notary Public, or Mantralaya (Mumbai).<br />
                      <strong>Commercial Documents:</strong> Certified by the Chamber of Commerce.
                    </p>
                  </div>
                </div>

                <div className="pipeline-step">
                  <div className="step-number">02</div>
                  <div className="step-body">
                    <span className="step-badge">TIER 2 • CENTRAL GOVERNMENT</span>
                    <h4>Ministry of External Affairs (MEA) Authentication</h4>
                    <p>
                      The official central ministry in India verifies state signatures and affixes the official <strong>MEA Stamp</strong> (or Hague Apostille sticker for member states) before handing over to the foreign diplomatic mission.
                    </p>
                  </div>
                </div>

                <div className="pipeline-step">
                  <div className="step-number">03</div>
                  <div className="step-body">
                    <span className="step-badge">TIER 3 • DIPLOMATIC EMBASSY</span>
                    <h4>Destination Embassy / Consulate Attestation</h4>
                    <p>
                      The Embassy or Consulate of the destination country located in India (New Delhi, Mumbai, Chennai) validates the MEA seal and applies the official Embassy stamp and consular signature.
                    </p>
                  </div>
                </div>

                <div className="pipeline-step">
                  <div className="step-number">04</div>
                  <div className="step-body">
                    <span className="step-badge">TIER 4 • IN-COUNTRY VALIDATION</span>
                    <h4>Ministry of Foreign Affairs (MOFA) Final Seal</h4>
                    <p>
                      Upon arrival in the destination country (e.g. UAE, Kuwait, Saudi Arabia, Qatar), the local Ministry of Foreign Affairs affixes the final verification seal, confirming complete legal recognition for work and residency.
                    </p>
                  </div>
                </div>

              </div>

              <div className="pipeline-summary-box">
                <strong>Standard MOFA Route for Education:</strong>
                <span className="route-text">
                  State HRD / SDM &rarr; MEA (New Delhi) &rarr; Destination Embassy &rarr; Destination MOFA
                </span>
              </div>
            </div>
          )}

          {/* TAB 4: COUNTRY GUIDES */}
          {activeTab === 'country-guides' && (
            <div className="attestation-tab-content">
              <div className="attestation-intro-text">
                <h3>Country-Specific Embassy Guidelines & Requirements</h3>
                <p>Distinct prerequisites and verified legal pathways across GCC and international corridors.</p>
              </div>

              <div className="country-guides-grid">
                
                {/* UAE */}
                <div className="cg-card">
                  <div className="cg-header">
                    <span className="cg-flag">🇦🇪</span>
                    <div>
                      <h4>UAE Embassy Attestation</h4>
                      <span className="cg-sub">United Arab Emirates (Dubai, Abu Dhabi, Sharjah & all 7 Emirates)</span>
                    </div>
                  </div>
                  <p>
                    Mandatory for individuals seeking employment, resident visas, or corporate registration across any of the seven Emirates.
                  </p>
                  <div className="cg-details">
                    <strong>Key Purposes in UAE:</strong>
                    <ul>
                      <li>Work card & labor permit issuance</li>
                      <li>Family residence visas (spouse, children, in-laws)</li>
                      <li>MOH (Ministry of Health) & DOH exams for medical practitioners</li>
                      <li>School transfer certificates for children's admission</li>
                      <li>Opening UAE bank accounts, LLC partner changes, and property rights</li>
                    </ul>
                  </div>
                </div>

                {/* Kuwait */}
                <div className="cg-card">
                  <div className="cg-header">
                    <span className="cg-flag">🇰🇼</span>
                    <div>
                      <h4>Kuwait Embassy Attestation</h4>
                      <span className="cg-sub">State of Kuwait</span>
                    </div>
                  </div>
                  <p>
                    A critical procedure confirming that you and your documents are legitimate before Kuwaiti authorities.
                  </p>
                  <div className="cg-details">
                    <strong>Mandatory Documents for Kuwait:</strong>
                    <ul>
                      <li>Original Degree / Diploma Certificate</li>
                      <li>Original Year-wise Mark Sheets</li>
                      <li>Official Bonafide Letter from College / University</li>
                      <li>Clear Passport Copy (Front & Back)</li>
                    </ul>
                    <div className="cg-subnote">
                      <strong>Procedure:</strong> State HRD/SDM &rarr; MEA &rarr; Kuwait Embassy &rarr; Kuwait MOFA.
                    </div>
                  </div>
                </div>

                {/* Saudi Arabia */}
                <div className="cg-card">
                  <div className="cg-header">
                    <span className="cg-flag">🇸🇦</span>
                    <div>
                      <h4>Saudi Embassy Attestation</h4>
                      <span className="cg-sub">Kingdom of Saudi Arabia</span>
                    </div>
                  </div>
                  <p>
                    Specialized legalizations for professional employment, Iqama visas, family visas, and engineering council registrations.
                  </p>
                  <div className="cg-details">
                    <strong>Key Details:</strong>
                    <ul>
                      <li>Requires university verification alongside embassy stamping</li>
                      <li>Commercial trade invoices & board resolutions verified via Chamber of Commerce</li>
                      <li>Full cultural bureau & embassy liaison handled by Flybook</li>
                    </ul>
                  </div>
                </div>

                {/* Qatar & Bahrain */}
                <div className="cg-card">
                  <div className="cg-header">
                    <span className="cg-flag">🇶🇦 🇧🇭</span>
                    <div>
                      <h4>Qatar & Bahrain Attestation</h4>
                      <span className="cg-sub">State of Qatar & Kingdom of Bahrain</span>
                    </div>
                  </div>
                  <p>
                    Certified end-to-end processing for Qatar and Bahrain visas, higher education admissions, and commercial enterprise setups.
                  </p>
                  <div className="cg-details">
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
            <div className="attestation-tab-content">
              <div className="attestation-intro-text">
                <h3>Document Checklist & Flybook White-Glove Support</h3>
                <p>Everything you need to prepare for a frictionless, guaranteed attestation experience.</p>
              </div>

              <div className="checklist-support-grid">
                <div className="checklist-box">
                  <h4>Standard Document Checklist</h4>
                  <ul className="check-list-items">
                    <li>
                      <MdOutlineVerified className="chk-icon" />
                      <div>
                        <strong>Original Certificate:</strong>
                        <span>Original degree, diploma, birth, marriage, or commercial document (laminated documents will have lamination removed safely).</span>
                      </div>
                    </li>
                    <li>
                      <MdOutlineVerified className="chk-icon" />
                      <div>
                        <strong>Passport Copy:</strong>
                        <span>High-resolution color copy of applicant's passport (first and last pages).</span>
                      </div>
                    </li>
                    <li>
                      <MdOutlineVerified className="chk-icon" />
                      <div>
                        <strong>All Semester Mark Sheets:</strong>
                        <span>Required for educational certificate attestation (especially for Kuwait, Saudi Arabia, and UAE).</span>
                      </div>
                    </li>
                    <li>
                      <MdOutlineVerified className="chk-icon" />
                      <div>
                        <strong>Bonafide Letter / Authorization:</strong>
                        <span>Issued by the college/university verifying regular student enrollment (required for specific embassies).</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="support-perks-box">
                  <span className="perk-tag">FLYBOOK CONCIERGE ASSURANCE</span>
                  <h4>Why Choose Flybook Attestation Services?</h4>
                  <p>
                    Experience complete peace of mind without visiting government offices or waiting in embassy queues.
                  </p>
                  <div className="perks-list">
                    <div className="perk-item">
                      <span className="perk-gold-bullet">✦</span>
                      <div>
                        <strong>Doorstep Pick-Up & Drop:</strong>
                        <p>Secure, insured courier collection from your residence or office across India and global delivery.</p>
                      </div>
                    </div>
                    <div className="perk-item">
                      <span className="perk-gold-bullet">✦</span>
                      <div>
                        <strong>Real-time Electronic Tracking:</strong>
                        <p>Monitor your documents at every stage (Notary, HRD, MEA, Embassy, MOFA) with transparent status updates.</p>
                      </div>
                    </div>
                    <div className="perk-item">
                      <span className="perk-gold-bullet">✦</span>
                      <div>
                        <strong>24/7 Expert Concierge Support:</strong>
                        <p>Our senior attestation counselors are available round the clock to resolve embassy queries and paperwork hurdles.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Contact Bar */}
              <div className="attestation-cta-banner">
                <div className="cta-banner-text">
                  <h3>Ready to legalize your certificates?</h3>
                  <p>Submit your documents online or speak with a senior Flybook attestation counselor.</p>
                </div>
                <div className="cta-banner-actions">
                  <Link to="/contact" className="cta-primary-btn">
                    Submit Documents for Attestation &rarr;
                  </Link>
                  <a href="tel:+919876543210" className="cta-secondary-btn">
                    <MdOutlinePhone /> +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default Attestation;
