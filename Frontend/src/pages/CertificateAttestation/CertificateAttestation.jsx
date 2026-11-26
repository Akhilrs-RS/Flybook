import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/Common/PageHero';
import s1Img from '../../assets/s1.jpg';
import {
  MdOutlineSchool,
  MdOutlineBusiness,
  MdOutlineAccountBalance,
  MdOutlineMenuBook,
  MdOutlineHomeWork,
  MdOutlineApartment,
  MdOutlineCheckCircle,
  MdOutlineVerified,
  MdOutlinePhone,
  MdOutlineMail,
  MdOutlineArrowForward,
  MdOutlineHelpOutline,
  MdOutlineSecurity,
  MdOutlineSpeed
} from 'react-icons/md';
import './CertificateAttestation.css';

const SERVICES_DATA = [
  {
    id: 'education',
    title: 'Education Certificate Attestation',
    shortName: 'Educational',
    icon: <MdOutlineSchool className="ca-srv-icon" />,
    tag: 'ACADEMIC & DEGREE VERIFICATION',
    summary: 'Official authentication of academic degrees, professional diplomas, and marks cards issued by universities, boards, and autonomous colleges across India.',
    description: 'Educational certificate attestation is mandatory when applying for foreign employment permits, labor cards, higher studies, or professional licensing exams (e.g. MOH, DOH, DHA, Prometric). The certificate must first be verified by the university or state higher education department, followed by State HRD or SDM, Central MEA, and the destination embassy.',
    documents: [
      'Degree Certificates (B.Tech, BE, B.Sc, B.Com, BA, MBBS, BDS)',
      'Master\'s Degrees (M.Tech, MBA, M.Sc, M.Com, MA, MD, MS)',
      'Postgraduate & Technical Diplomas (Polytechnic, ITI)',
      'Nursing & Pharmacy Degree / Registration Certificates',
      'School Certificates (SSLC / 10th Standard, HSC / 12th Standard)',
      'Consolidated Marksheets, Semester Transcripts & Bonafide Letters'
    ],
    purposes: [
      'Obtaining international employment visas and work permits',
      'University admission and credit transfer for master\'s or Ph.D. programs',
      'Eligibility for medical council licensing (MOH, DOH, DHA, HAAD)',
      'Equivalency certificate issuance from foreign education ministries'
    ],
    prerequisites: [
      'Original Degree / Diploma Certificate',
      'Year-wise or all-semester original mark sheets',
      'Copy of high school certificate (10th / 12th)',
      'Clear high-resolution passport copy (first & last pages)',
      'University bonafide letter or verification receipt (for specific embassies)'
    ],
    pipeline: [
      'University / Board Archive Verification',
      'State HRD / Higher Education Department',
      'Ministry of External Affairs (MEA, New Delhi)',
      'Destination Embassy / Consulate (UAE, Saudi, Kuwait, etc.)'
    ],
    turnaround: '7 – 12 Business Days (Express Available)',
    accent: '#0284c7'
  },
  {
    id: 'commercial',
    title: 'Commercial Certificate Attestation',
    shortName: 'Commercial',
    icon: <MdOutlineBusiness className="ca-srv-icon" />,
    tag: 'CORPORATE & TRADE LEGALIZATION',
    summary: 'Legalization of business, financial, and legal corporate records required by foreign governments, banks, and commercial courts for cross-border operations.',
    description: 'When an Indian enterprise, partnership, or director establishes a business footprint abroad, commercial documents must be authenticated. Commercial attestation begins at the recognized Chamber of Commerce, followed by central validation from the Ministry of External Affairs and the destination foreign mission.',
    documents: [
      'Power of Attorney (POA) for Property, Business & Representation',
      'Chamber of Commerce Commercial Invoices & Packing Lists',
      'Certificate of Incorporation & Trade Licenses',
      'Memorandum of Association (MOA) & Articles of Association (AOA)',
      'Board Resolutions & Shareholder Authorization Agreements',
      'Agency Agreements, Distributorship Contracts & Audited Statements'
    ],
    purposes: [
      'Registering a foreign branch office, LLC, or subsidiary abroad',
      'Opening corporate bank accounts in UAE, Saudi Arabia, Kuwait, or Qatar',
      'Executing cross-border commercial tenders and property transfers',
      'Removing, inducting, or amending company partners and signatories'
    ],
    prerequisites: [
      'Original commercial document printed on company letterhead',
      'Authorized director / partner signatures with company seal',
      'Copy of Certificate of Incorporation & Company PAN',
      'Passport copies of authorized directors or power of attorney holder'
    ],
    pipeline: [
      'Local Notary Public Verification',
      'Chamber of Commerce Certification',
      'Ministry of External Affairs (MEA, New Delhi)',
      'Destination Embassy / Consular Division'
    ],
    turnaround: '3 – 7 Business Days',
    accent: '#b45309'
  },
  {
    id: 'norka',
    title: 'NORKA Attestation (Kerala)',
    shortName: 'NORKA Roots',
    icon: <MdOutlineAccountBalance className="ca-srv-icon" />,
    tag: 'GOVERNMENT OF KERALA ATTESTATION',
    summary: 'Exclusive authentication carried out by Non-Resident Keralites Affairs (NORKA-ROOTS) for certificates issued by universities and examination boards in Kerala.',
    description: 'NORKA Roots is the authorized field agency of the Department of Non-Resident Keralites Affairs (Government of Kerala). It provides a single-window verification mechanism for educational certificates issued by Kerala-based universities and approved boards before MEA and Gulf embassy stamping.',
    documents: [
      'Kerala University, MG University & Calicut University Degrees',
      'Kannur University & APJ Abdul Kalam Technological University (KTU)',
      'Kerala State Technical Education Board Diplomas',
      'Kerala SSLC & Higher Secondary (HSE / DHSE) Certificates',
      'Kerala Nurses and Midwives Council (KNMC) Certificates',
      'Autonomous College Degrees recognized by UGC in Kerala'
    ],
    purposes: [
      'Employment visa processing for Gulf nations (UAE, Saudi, Kuwait, Qatar, Oman)',
      'Overseas nursing recruitment and medical staff appointments in GCC',
      'Official state government-verified credential authentication',
      'Fast-track central MEA apostille / embassy liaison'
    ],
    prerequisites: [
      'Original certificate to be authenticated',
      'Original mark lists of all years / semesters',
      'Passport copy of the candidate (first and address pages)',
      'Two recent passport-size photographs',
      'Completed NORKA online application receipt (Flybook assists end-to-end)'
    ],
    pipeline: [
      'University Verification by NORKA Field Officers',
      'NORKA-ROOTS Regional Center Stamp (Trivandrum/Ernakulam/Kozhikode)',
      'Ministry of External Affairs (MEA)',
      'Destination Embassy / Consulate'
    ],
    turnaround: '4 – 8 Business Days',
    accent: '#059669'
  },
  {
    id: 'hrd',
    title: 'State HRD Attestation',
    shortName: 'State HRD',
    icon: <MdOutlineMenuBook className="ca-srv-icon" />,
    tag: 'HUMAN RESOURCE DEVELOPMENT DEPARTMENT',
    summary: 'Primary state-level educational authentication performed by the Department of Higher Education across all 28 states and union territories in India.',
    description: 'State HRD attestation verifies that the awarding university, college, or school board is recognized by UGC, AICTE, MHRD, or the State Board of Education. Each state maintains a dedicated HRD cell in its Secretariat (e.g. Tamil Nadu, Karnataka, Delhi, Maharashtra, Andhra Pradesh, Telangana, Uttar Pradesh, West Bengal).',
    documents: [
      'Undergraduate Degrees (B.Tech, BE, B.Sc, B.Com, BA, BBA, BCA)',
      'Postgraduate Degrees (M.Tech, ME, M.Sc, M.Com, MA, MBA, MCA)',
      'Doctoral Degrees (Ph.D., M.Phil)',
      'Medical & Dental Certificates (MBBS, BDS, BAMS, BHMS)',
      'State Technical Board Polytechnic Diplomas',
      'CBSE, ICSE, and State Secondary / Higher Secondary Certificates'
    ],
    purposes: [
      'Mandatory foundation for Saudi Arabia and Kuwait embassy attestation',
      'Credential evaluation reports (WES, IQAS, ICAS) for Canada / USA immigration',
      'Government and semi-government job appointments across the Middle East',
      'Equivalency certificate applications in foreign education ministries'
    ],
    prerequisites: [
      'Original educational certificate',
      'All semester / annual marksheets (original + clear copy)',
      'Copy of 10th and 12th standard certificates',
      'University verification letter or verification fee receipt (state-specific)',
      'Passport copy of the candidate'
    ],
    pipeline: [
      'Direct University Archive Verification',
      'State Secretariat Department of Higher Education (HRD Cell)',
      'Ministry of External Affairs (MEA, New Delhi)',
      'Destination Embassy / Consulate'
    ],
    turnaround: '10 – 20 Business Days (State Archive Dependent)',
    accent: '#4f46e5'
  },
  {
    id: 'home-dept',
    title: 'Home Department Attestation',
    shortName: 'Home Department',
    icon: <MdOutlineHomeWork className="ca-srv-icon" />,
    tag: 'STATE PERSONAL & CIVIL CERTIFICATES',
    summary: 'Authentication of personal, civil, and non-educational certificates conducted by the State Home Department or General Administration Department (GAD).',
    description: 'The State Home Department verifies the genuineness of personal records issued by municipal corporations, sub-registrars, police departments, and civil courts. This is the official state-level authentication step required before MEA stamping for family visas and overseas migration.',
    documents: [
      'Birth Certificates (Municipal Corporation / Panchayat issued)',
      'Marriage Certificates (Registrar of Marriages / Special Marriage Act)',
      'Police Clearance Certificates (PCC issued by Passport Office / Police)',
      'Death & Legal Heirship Certificates',
      'Affidavits (Single Status, Name Change, Sponsorship, Joint declaration)',
      'Medical Fitness Certificates & Experience Certificates'
    ],
    purposes: [
      'Sponsoring family residence visas (spouse, children, dependent parents)',
      'Admission of children to international schools and colleges abroad',
      'Permanent residency, dual citizenship, and immigration compliance',
      'Overseas property inheritance, legal disputes, and court probate'
    ],
    prerequisites: [
      'Original computerized certificate with registration number & seal',
      'Passport copies of the applicant and primary visa sponsor',
      'Copy of spouse passport (for marriage certificate attestation)',
      'Notary public stamp (if required prior to Home Department submission)'
    ],
    pipeline: [
      'Local Notary Public Verification',
      'State Home Department / GAD Secretariat',
      'Ministry of External Affairs (MEA)',
      'Destination Embassy / Consulate'
    ],
    turnaround: '3 – 7 Business Days',
    accent: '#d97706'
  },
  {
    id: 'mantralaya',
    title: 'Mantralaya Attestation (Mumbai)',
    shortName: 'Mantralaya',
    icon: <MdOutlineApartment className="ca-srv-icon" />,
    tag: 'FAST-TRACK STATE AUTHENTICATION (MUMBAI)',
    summary: 'High-speed personal and eligible educational certificate authentication executed at the Mantralaya (Maharashtra Government Secretariat, Mumbai).',
    description: 'Mantralaya attestation is an officially recognized state authentication route accepted by the Ministry of External Affairs (MEA) and all GCC embassies. It provides an expedited alternative to prolonged state-specific Home Department procedures, making it the preferred route for urgent visa submissions.',
    documents: [
      'Marriage Certificates (Pan-India issued)',
      'Birth Certificates & Transfer Certificates (TC)',
      'Police Clearance Certificates (PCC)',
      'Affidavits, Power of Attorney & Employment Experience Letters',
      'Selected Educational Certificates (under SDM / Mantralaya channel)',
      'Medical Certificates & Adoption Records'
    ],
    purposes: [
      'Express visa stamping for UAE, Qatar, Kuwait, and Saudi Arabia',
      'Urgent family visa processing when applicants have tight travel deadlines',
      'Overcoming lengthy processing delays in specific state secretariats',
      'Direct compatibility with MEA and consular diplomatic desks in Mumbai'
    ],
    prerequisites: [
      'Original certificate to be authenticated',
      'Clear passport copies (front & back page) of the applicant and sponsor',
      'Prior Notary Public attestation (handled directly by Flybook)',
      'Supporting relationship proof (if applicable)'
    ],
    pipeline: [
      'Notary Public Authentication (Mumbai)',
      'Mantralaya Home Department (Nariman Point, Mumbai)',
      'Ministry of External Affairs (MEA)',
      'Destination Embassy / Consulate'
    ],
    turnaround: '2 – 4 Business Days (Fastest Route in India)',
    accent: '#dc2626'
  }
];

const COMPARISON_ROWS = [
  {
    name: 'Education Certificate Attestation',
    authority: 'University + State HRD / Higher Education',
    docs: 'Degrees, Diplomas, Marksheets, Nursing/MBBS',
    speed: '7 – 12 Days',
    bestFor: 'Employment visas, foreign higher education, MOH licensing'
  },
  {
    name: 'Commercial Certificate Attestation',
    authority: 'Chamber of Commerce + MEA',
    docs: 'POA, Invoices, MOA, AOA, Trade Licenses',
    speed: '3 – 7 Days',
    bestFor: 'Company registration, corporate bank accounts abroad'
  },
  {
    name: 'NORKA Attestation',
    authority: 'NORKA Roots (Govt. of Kerala) + MEA',
    docs: 'Kerala university degrees, HSE, KNMC nursing',
    speed: '4 – 8 Days',
    bestFor: 'Kerala residents migrating to UAE, Saudi, Kuwait, Qatar'
  },
  {
    name: 'State HRD Attestation',
    authority: 'Respective State Higher Education Secretariat',
    docs: 'UGC/AICTE degrees across all 28 Indian States',
    speed: '10 – 20 Days',
    bestFor: 'Saudi Arabia & Kuwait mandatory university verification'
  },
  {
    name: 'Home Department Attestation',
    authority: 'State Home Department / GAD',
    docs: 'Birth, Marriage, Death, PCC, Affidavits',
    speed: '3 – 7 Days',
    bestFor: 'Family residence visas, dependent sponsorship'
  },
  {
    name: 'Mantralaya Attestation',
    authority: 'Mantralaya Secretariat (Mumbai)',
    docs: 'Personal certificates, Birth, Marriage, PCC',
    speed: '2 – 4 Days',
    bestFor: 'Express fast-track legalization for urgent GCC travel'
  }
];

const CertificateAttestation = () => {
  const [activeServiceId, setActiveServiceId] = useState('education');
  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <div className="cert-attestation-page">
      {/* 1. Hero Section */}
      <PageHero
        subtitle="GOVERNMENT-AUTHORIZED ATTESTATION"
        title="Certificate Attestation Services"
        tagline="Certified, end-to-end authentication for Educational, Commercial, NORKA, State HRD, Home Department, and Mantralaya certificates across India."
        bgImage={s1Img}
        minHeight="56vh"
        align="left"
        noBottomFade={true}
      />

      {/* 2. Top Trust & Corridor Bar */}
      <section className="ca-trust-bar">
        <div className="ca-trust-container">
          <div className="ca-trust-item">
            <MdOutlineVerified className="ca-trust-ico" />
            <div>
              <strong>100% Government Authorized</strong>
              <span>Direct coordination with HRD, NORKA, Home Dept & MEA</span>
            </div>
          </div>
          <div className="ca-trust-item">
            <MdOutlineSecurity className="ca-trust-ico" />
            <div>
              <strong>Insured Doorstep Pickup</strong>
              <span>Tamper-proof transit from all major cities across India</span>
            </div>
          </div>
          <div className="ca-trust-item">
            <MdOutlineSpeed className="ca-trust-ico" />
            <div>
              <strong>Express & Regular Tatkal</strong>
              <span>Fastest turnaround times with live tracking updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Interactive Services Showcase */}
      <section className="ca-main-section">
        <div className="ca-container">
          
          <div className="ca-section-header">
            <span className="ca-eyebrow">COMPREHENSIVE AUTHENTICATION SERVICES</span>
            <h2 className="ca-section-title">Select Your Attestation Service</h2>
            <p className="ca-section-desc">
              Explore prerequisite requirements, processing pipelines, and eligible certificates for each state and institutional authority.
            </p>
          </div>

          {/* Service Selector Tabs */}
          <div className="ca-services-nav">
            {SERVICES_DATA.map((srv) => (
              <button
                key={srv.id}
                type="button"
                className={`ca-srv-btn ${activeServiceId === srv.id ? 'active' : ''}`}
                onClick={() => setActiveServiceId(srv.id)}
              >
                <span className="ca-srv-btn-icon">{srv.icon}</span>
                <span className="ca-srv-btn-name">{srv.shortName}</span>
              </button>
            ))}
          </div>

          {/* Active Service Deep-Dive Card */}
          <div className="ca-service-detail-card">
            
            <div className="ca-card-top-row">
              <div className="ca-card-title-group">
                <span className="ca-card-badge" style={{ borderColor: activeService.accent, color: activeService.accent }}>
                  {activeService.tag}
                </span>
                <h3 className="ca-card-heading">{activeService.title}</h3>
                <p className="ca-card-summary">{activeService.summary}</p>
              </div>
              <div className="ca-card-speed-badge">
                <span className="ca-speed-label">ESTIMATED TURNAROUND</span>
                <strong className="ca-speed-val">{activeService.turnaround}</strong>
              </div>
            </div>

            <div className="ca-card-body-text">
              <p>{activeService.description}</p>
            </div>

            {/* 3-Column Info Grid */}
            <div className="ca-info-columns">
              
              {/* Col 1: Eligible Documents */}
              <div className="ca-info-col">
                <h4 className="ca-info-title">
                  <span className="ca-bullet">✦</span> Eligible Certificates
                </h4>
                <ul className="ca-info-list">
                  {activeService.documents.map((doc, idx) => (
                    <li key={idx}>
                      <MdOutlineCheckCircle className="ca-list-ico" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 2: Key Purposes */}
              <div className="ca-info-col">
                <h4 className="ca-info-title">
                  <span className="ca-bullet">✦</span> Mandatory For
                </h4>
                <ul className="ca-info-list">
                  {activeService.purposes.map((purp, idx) => (
                    <li key={idx}>
                      <MdOutlineCheckCircle className="ca-list-ico" />
                      <span>{purp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3: Prerequisites */}
              <div className="ca-info-col highlight-col">
                <h4 className="ca-info-title">
                  <span className="ca-bullet">✦</span> Required Documents
                </h4>
                <ul className="ca-info-list">
                  {activeService.prerequisites.map((req, idx) => (
                    <li key={idx}>
                      <MdOutlineCheckCircle className="ca-list-ico green" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Stepper Pipeline */}
            <div className="ca-pipeline-box">
              <h4 className="ca-pipeline-heading">Step-by-Step Processing Pathway</h4>
              <div className="ca-pipeline-steps">
                {activeService.pipeline.map((step, idx) => (
                  <div key={idx} className="ca-pipe-step">
                    <div className="ca-pipe-num">0{idx + 1}</div>
                    <div className="ca-pipe-text">{step}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Action Row */}
            <div className="ca-card-cta-row">
              <Link to="/contact" className="ca-card-cta-btn">
                Inquire for {activeService.shortName} Attestation &rarr;
              </Link>
              <a href="tel:+919876543210" className="ca-card-phone-btn">
                <MdOutlinePhone /> Speak with a Counselor
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Quick Comparison Matrix Table */}
      <section className="ca-matrix-section">
        <div className="ca-container">
          <div className="ca-section-header">
            <span className="ca-eyebrow">QUICK COMPARISON</span>
            <h2 className="ca-section-title">Attestation Services At A Glance</h2>
            <p className="ca-section-desc">
              Compare authorities, turnaround times, and document classifications to identify the exact service you require.
            </p>
          </div>

          <div className="ca-matrix-table-wrap">
            <table className="ca-matrix-table">
              <thead>
                <tr>
                  <th>Attestation Service</th>
                  <th>Key Authority</th>
                  <th>Covered Documents</th>
                  <th>Processing Time</th>
                  <th>Best Suited For</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx}>
                    <td className="row-title">
                      <strong>{row.name}</strong>
                    </td>
                    <td>{row.authority}</td>
                    <td className="row-docs">{row.docs}</td>
                    <td className="row-speed"><span className="speed-pill">{row.speed}</span></td>
                    <td>{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Cross-Link Banner to Embassy Legalization */}
      <section className="ca-embassy-crosslink-section">
        <div className="ca-container">
          <div className="ca-crosslink-banner">
            <div className="ca-crosslink-content">
              <span className="ca-crosslink-tag">DESTINATION EMBASSY LEGALIZATION</span>
              <h3 className="ca-crosslink-title">Need Embassy Stamping for UAE, Kuwait, Saudi or Qatar?</h3>
              <p className="ca-crosslink-desc">
                After state-level (HRD, NORKA, Mantralaya) and MEA verification, certificates must be stamped by the foreign embassy and destination MOFA. Explore our comprehensive country guides and consular requirements.
              </p>
            </div>
            <div className="ca-crosslink-actions">
              <Link to="/attestation" className="ca-crosslink-btn">
                View Embassy Legalization & Apostille &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Doorstep Safety & Guarantee */}
      <section className="ca-safety-section">
        <div className="ca-container">
          <div className="ca-safety-grid">
            <div className="ca-safety-card">
              <div className="ca-safety-icon-wrap">🛡️</div>
              <h4>Insured Safe Custody</h4>
              <p>Your original documents are protected under insured, fireproof custody with strict barcode chain-of-custody tracking.</p>
            </div>
            <div className="ca-safety-card">
              <div className="ca-safety-icon-wrap">🚚</div>
              <h4>Doorstep Courier Across India</h4>
              <p>Secure pickup and return delivery across Thiruvananthapuram, Kochi, Bangalore, Mumbai, Delhi, Chennai, and all Tier 1/2/3 cities.</p>
            </div>
            <div className="ca-safety-card">
              <div className="ca-safety-icon-wrap">📄</div>
              <h4>Safe Lamination Removal</h4>
              <p>Expert delamination specialists safely remove plastic coatings on original certificates without tearing or ink loss.</p>
            </div>
            <div className="ca-safety-card">
              <div className="ca-safety-icon-wrap">💬</div>
              <h4>Dedicated Attestation Counselor</h4>
              <p>Direct WhatsApp and phone access to our senior documentation specialists from initial assessment until final delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Banner */}
      <section className="ca-bottom-cta">
        <div className="ca-container">
          <div className="ca-bottom-card">
            <div className="ca-bottom-text">
              <h3>Have questions about your certificate attestation?</h3>
              <p>Send us a photo of your certificate for free instant verification and turnaround estimation.</p>
            </div>
            <div className="ca-bottom-buttons">
              <Link to="/contact" className="ca-btn-gold">
                Get Free Document Assessment &rarr;
              </Link>
              <a href="tel:+919876543210" className="ca-btn-outline">
                <MdOutlinePhone /> +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificateAttestation;
