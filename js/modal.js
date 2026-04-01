/**
 * APEX ARBOR — Modal System
 * Handles all popup dialogs across the site
 */

// ─── Modal Content Database ──────────────────────────────────────
const MODAL_CONTENT = {

  /* ── Business: AI Technology ── */
  'business-ai': {
    tag: 'Technology',
    tagClass: 'tag-cyan',
    title: 'AI Technology & Innovation',
    body: `
      <p>Apex Arbor's AI Technology division develops and applies artificial intelligence solutions to enhance investment decision-making, portfolio monitoring, and operational efficiency across the group's activities.</p>

      <div class="modal-stat-row">
        <div class="modal-stat">
          <div class="modal-stat-num">AI</div>
          <div class="modal-stat-label">Investment Theme</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-num">TMT</div>
          <div class="modal-stat-label">26% of Portfolio</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-num">6</div>
          <div class="modal-stat-label">Regional Offices</div>
        </div>
      </div>

      <div class="modal-divider"></div>
      <h3>Core Capabilities</h3>
      <ul>
        <li>AI-powered market intelligence and due diligence support</li>
        <li>Predictive analytics for portfolio performance monitoring</li>
        <li>Natural language processing for cross-border compliance</li>
        <li>Data-driven operational efficiency across portfolio companies</li>
        <li>Technology-enabled value creation for investee companies</li>
      </ul>

      <h3>Affirma's Technology Advantage</h3>
      <p>Leveraging Affirma Capital's 20+ years of emerging market data and 50+ investment professionals operating across 6 offices to identify transformational investment opportunities in founder-led, entrepreneurial businesses.</p>
    `
  },

  /* ── Business: Investment Management ── */
  'business-investment': {
    tag: 'Finance',
    tagClass: 'tag-blue',
    title: 'Investment Management',
    body: `
      <p>Apex Arbor's Investment Management arm blends traditional institutional-grade asset management with AI-powered quantitative strategies. Backed by Affirma Capital's extensive network and track record, we serve institutional clients, family offices, and sovereign wealth funds.</p>

      <div class="modal-stat-row">
        <div class="modal-stat">
          <div class="modal-stat-num">$2B+</div>
          <div class="modal-stat-label">AUM Target (2026)</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-num">15+</div>
          <div class="modal-stat-label">Markets Covered</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-num">A+</div>
          <div class="modal-stat-label">Risk Rating</div>
        </div>
      </div>

      <div class="modal-divider"></div>
      <h3>Investment Strategies</h3>
      <ul>
        <li>Mid-market private equity with disciplined deal structuring</li>
        <li>Cross-border investment across Asia, Middle East, and Africa</li>
        <li>Growth capital and buyout strategies with strong minority protections</li>
        <li>ESG-integrated investment decisions guided by IFC Performance Standards</li>
      </ul>

      <h3>Client Access</h3>
      <p>Institutional investors may access segregated managed accounts, co-investment vehicles, and fund structures tailored to jurisdiction-specific regulatory requirements.</p>
    `
  },

  /* ── Business: Healthcare ── */
  'business-health': {
    tag: 'Healthcare',
    tagClass: 'tag-cyan',
    title: 'Healthcare Innovation',
    body: `
      <p>Apex Arbor's Healthcare Innovation division focuses on investments in healthcare services, pharmaceuticals, and medical technology across emerging markets — a sector with strong structural growth driven by rising demand and demographic tailwinds.</p>

      <div class="modal-stat-row">
        <div class="modal-stat">
          <div class="modal-stat-num">TMT</div>
          <div class="modal-stat-label">Largest Sector (26%)</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-num">5</div>
          <div class="modal-stat-label">Regional Markets</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-num">5.8B</div>
          <div class="modal-stat-label">Total Equity Invested</div>
        </div>
      </div>

      <div class="modal-divider"></div>
      <h3>Focus Areas</h3>
      <ul>
        <li>Healthcare services and pharmaceutical distribution</li>
        <li>Medical technology and diagnostics</li>
        <li>Consumer & retail healthcare platforms</li>
        <li>Hospital and clinic network investments</li>
      </ul>

      <h3>Affirma's Track Record</h3>
      <p>Affirma Capital's portfolio spans consumer & retail (22%), TMT (26%), engineering & manufacturing (9%), and other high-growth sectors across emerging markets since 2002.</p>
    `
  },

  /* ── Business: Energy ── */
  'business-energy': {
    tag: 'Energy',
    tagClass: 'tag-blue',
    title: 'Energy Transition',
    body: `
      <p>Apex Arbor's Energy Transition division focuses on the most consequential investment theme of our generation — accelerating the global shift to clean, intelligent energy systems.</p>

      <div class="modal-stat-row">
        <div class="modal-stat">
          <div class="modal-stat-num">3GW</div>
          <div class="modal-stat-label">Pipeline Capacity</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-num">12</div>
          <div class="modal-stat-label">Countries Active</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-num">AAA</div>
          <div class="modal-stat-label">ESG Score</div>
        </div>
      </div>

      <div class="modal-divider"></div>
      <h3>Investment Verticals</h3>
      <ul>
        <li>Utility-scale solar and wind project development across Southeast Asia and Africa</li>
        <li>Smart grid technology and energy storage solutions</li>
        <li>Green hydrogen infrastructure and fueling networks</li>
        <li>Carbon credit markets and voluntary offset platforms</li>
      </ul>

      <h3>ESG Commitment</h3>
      <p>Every Energy Transition investment undergoes our proprietary Climate Risk Assessment, ensuring alignment with Paris Agreement targets and TCFD disclosure standards.</p>
    `
  },

  /* ── Business: Real Estate ── */
  'business-realestate': {
    tag: 'Real Estate',
    tagClass: 'tag-cyan',
    title: 'Real Estate & Infrastructure',
    body: `
      <p>Apex Arbor's Real Estate & Infrastructure arm leverages AI-driven asset valuation, demand forecasting, and operational intelligence to deliver superior risk-adjusted returns in APAC and beyond.</p>

      <div class="modal-stat-row">
        <div class="modal-stat">
          <div class="modal-stat-num">$800M</div>
          <div class="modal-stat-label">Portfolio Value</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-num">6</div>
          <div class="modal-stat-label">Smart City Projects</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-num">18%</div>
          <div class="modal-stat-label">Avg. IRR Target</div>
        </div>
      </div>

      <div class="modal-divider"></div>
      <h3>Asset Classes</h3>
      <ul>
        <li>Grade-A commercial and mixed-use developments in Tier-1 Asian cities</li>
        <li>Smart logistics and data center infrastructure</li>
        <li>Affordable housing and sustainable urban communities</li>
        <li>Infrastructure debt and mezzanine financing</li>
      </ul>
    `
  },

  /* ── Business: Luxury ── */
  'business-luxury': {
    tag: 'Luxury',
    tagClass: 'tag-blue',
    title: 'Luxury & Lifestyle',
    body: `
      <p>The Luxury & Lifestyle division targets the rapidly expanding ultra-high-net-worth segment across Asia, the Middle East, and Europe, with investments in premium brands, exclusive hospitality, and curated lifestyle services.</p>

      <div class="modal-stat-row">
        <div class="modal-stat">
          <div class="modal-stat-num">UHNW</div>
          <div class="modal-stat-label">Target Segment</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-num">4</div>
          <div class="modal-stat-label">Brand Investments</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-num">3</div>
          <div class="modal-stat-label">Continents</div>
        </div>
      </div>

      <div class="modal-divider"></div>
      <h3>Portfolio Focus</h3>
      <ul>
        <li>Minority stakes in emerging luxury fashion and accessories brands</li>
        <li>Boutique hospitality assets in Singapore, Maldives, and Swiss Alps</li>
        <li>Private aviation and yacht charter management services</li>
        <li>Curated art investment advisory and collection management</li>
      </ul>
    `
  },

  /* ── Investment Edge ── */
  'edge-ai': {
    tag: 'AI Advantage',
    tagClass: 'tag-cyan',
    title: 'Technology-Enhanced Investment Process',
    body: `
      <p>Apex Arbor applies technology and data analytics to enhance the proven investment processes established by Affirma Capital over two decades in emerging markets.</p>

      <div class="modal-stat-row">
        <div class="modal-stat">
          <div class="modal-stat-num">20+</div>
          <div class="modal-stat-label">Years Track Record</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-num">50+</div>
          <div class="modal-stat-label">Professionals</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-num">Top Q</div>
          <div class="modal-stat-label">Realised Returns</div>
        </div>
      </div>

      <div class="modal-divider"></div>
      <h3>Process Components</h3>
      <ul>
        <li><strong>Proprietary Deal Sourcing:</strong> Long-established local presence and reputation in Asia, Middle East, and Africa provide superior access to proprietary deals</li>
        <li><strong>Data-Driven Due Diligence:</strong> Trusted relationships with entrepreneurs and advisors provide a superior intelligence advantage</li>
        <li><strong>Risk Sentinel:</strong> World-class governance and regulated operations across multiple jurisdictions ensure disciplined investment decisions</li>
        <li><strong>Exit Focus:</strong> Quarterly focus on exit thesis with track record of using multiple strategies to achieve return-maximising exits</li>
      </ul>
    `
  },

  'edge-synergy': {
    tag: 'Structural Edge',
    tagClass: 'tag-blue',
    title: 'Cross-Sector Synergies',
    body: `
      <p>Unlike single-sector funds, Apex Arbor's conglomerate structure creates unique compounding advantages as portfolio companies collaborate, share customers, and co-invest in opportunities inaccessible to standalone entities.</p>

      <div class="modal-divider"></div>
      <h3>Synergy Examples</h3>
      <ul>
        <li>AI Technology → Healthcare: diagnostic algorithms deployed across Health portfolio companies</li>
        <li>Investment → Real Estate: proprietary valuations used in underwriting decisions</li>
        <li>Energy → Infrastructure: combined balance sheet enables larger project bids</li>
        <li>Luxury → Private Client: wealth management co-distribution to UHNW clients</li>
      </ul>

      <h3>Value Creation Mechanisms</h3>
      <p>Our Group Synergy Committee meets quarterly to identify co-investment, revenue sharing, and technology transfer opportunities, targeting $50M+ in synergy value annually by 2027.</p>
    `
  },

  'edge-network': {
    tag: 'Network',
    tagClass: 'tag-cyan',
    title: 'Global Network Access',
    body: `
      <p>Affirma Capital's network represents decades of relationship capital assembled across the world's major financial centers — from Singapore and Seoul to Dubai and Johannesburg.</p>

      <div class="modal-stat-row">
        <div class="modal-stat">
          <div class="modal-stat-num">6</div>
          <div class="modal-stat-label">Regional Offices</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-num">50+</div>
          <div class="modal-stat-label">Professionals</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-num">4</div>
          <div class="modal-stat-label">Regulators</div>
        </div>
      </div>

      <div class="modal-divider"></div>
      <h3>Network Benefits</h3>
      <ul>
        <li>Leading and long-standing local relationships in Asia, Africa, and the Middle East</li>
        <li>Trusted relationships with entrepreneurs and their advisors providing superior intelligence for due diligence</li>
        <li>Access to blue-chip global investors including sovereign wealth funds, DFIs, fund-of-funds, and institutional investors</li>
        <li>Government and regulatory relationships enabling first-mover positioning in emerging markets</li>
      </ul>
    `
  },

  'edge-esg': {
    tag: 'Governance',
    tagClass: 'tag-blue',
    title: 'ESG & Governance Framework',
    body: `
      <p>Apex Arbor integrates Environmental, Social, and Governance principles at the foundation of every investment decision and corporate action — not as a checkbox, but as a genuine value-creation framework.</p>

      <div class="modal-divider"></div>
      <h3>Framework Components</h3>
      <ul>
        <li><strong>Environmental:</strong> Carbon footprint measurement for all portfolio companies; Paris-aligned temperature targets for energy investments</li>
        <li><strong>Social:</strong> Human capital metrics, supply chain labor standards, and community impact assessments</li>
        <li><strong>Governance:</strong> Board independence requirements, anti-corruption policies, and whistleblower protection</li>
      </ul>

      <h3>Reporting & Transparency</h3>
      <p>Annual ESG report aligned with TCFD, GRI Standards, and UN SDG frameworks. Portfolio-level ESG scores updated quarterly and available to LPs via our investor portal.</p>
    `
  },

  /* ── Leadership: Nainesh Jaisingh ── */
  'leader-1': {
    tag: 'Founding Partner & CEO',
    tagClass: 'tag-cyan',
    title: 'Nainesh Jaisingh',
    body: `
      <p>Nainesh Jaisingh is the Founding Partner and Chief Executive Officer of Affirma Capital, responsible for overall strategy and investor relations. He brings 21 years of tenure with the firm and 32 years of business experience.</p>

      <div class="modal-divider"></div>
      <h3>Experience</h3>
      <ul>
        <li>Previously Global Head of Principal Finance, Standard Chartered Bank</li>
        <li>Founding member of Standard Chartered Private Equity (SCPE)</li>
        <li>Co-founded the Merlion India Fund</li>
        <li>Previously at ANZ Grindlays Bank</li>
      </ul>

      <h3>Location</h3>
      <p>Singapore</p>
    `
  },

  /* ── Leadership: Udai Dhawan ── */
  'leader-2': {
    tag: 'Founding Partner, Head of India',
    tagClass: 'tag-blue',
    title: 'Udai Dhawan',
    body: `
      <p>Udai Dhawan leads Affirma Capital's India operations, bringing 15 years of tenure with the firm and 28 years of business experience across investment banking and private equity.</p>

      <div class="modal-divider"></div>
      <h3>Experience</h3>
      <ul>
        <li>Previously Managing Director and Head of India at SCPE</li>
        <li>Senior Vice President at Kotak Mahindra Capital</li>
        <li>Director of Corporate Development at Sabre Holdings</li>
        <li>Investment Banking Associate at JP Morgan</li>
        <li>Senior Consultant at Arthur Andersen</li>
      </ul>

      <h3>Location</h3>
      <p>India</p>
    `
  },



  /* ── Leadership: Taimoor Labib ── */
  'leader-3': {
    tag: 'Founding Partner, Head of MENA & Chairman of Africa',
    tagClass: 'tag-blue',
    title: 'Taimoor Labib',
    body: `
      <p>Taimoor Labib leads Affirma Capital's Middle East & North Africa operations and serves as Chairman of the Africa business, with 13 years of tenure at the firm and 25 years of business experience.</p>

      <div class="modal-divider"></div>
      <h3>Experience</h3>
      <ul>
        <li>Previously Managing Director and Head of MENA & Africa at SCPE</li>
        <li>Head of Global Portfolio Management at SCPE</li>
        <li>Prior roles at Saudi PE firm, EFG Hermes, The Carlyle Group, and Bear Stearns</li>
      </ul>

      <h3>Location</h3>
      <p>UAE (Dubai)</p>
    `
  },

  /* ── Leadership: Ronald Tamale ── */
  'leader-4': {
    tag: 'Founding Partner, Head of Sub-Saharan Africa',
    tagClass: 'tag-cyan',
    title: 'Ronald Tamale',
    body: `
      <p>Ronald Tamale leads Affirma Capital's Sub-Saharan Africa operations, with 15 years of tenure at the firm and 22 years of business experience across investment banking and private equity.</p>

      <div class="modal-divider"></div>
      <h3>Experience</h3>
      <ul>
        <li>Founding member of the SCPE Africa team</li>
        <li>Previously Managing Director and Head of Africa at SCPE</li>
        <li>Senior Associate in Investment Banking at Goldman Sachs (US)</li>
      </ul>

      <h3>Location</h3>
      <p>South Africa (Johannesburg)</p>
    `
  },

  /* ── Leadership: Taeyub Kim ── */
  'leader-5': {
    tag: 'Founding Partner, Head of Korea',
    tagClass: 'tag-blue',
    title: 'Taeyub Kim',
    body: `
      <p>Taeyub Kim leads Affirma Capital's Korea operations, with 15 years of tenure at the firm and 21 years of business experience in corporate finance and private equity.</p>

      <div class="modal-divider"></div>
      <h3>Experience</h3>
      <ul>
        <li>Previously Managing Director and Head of Korea at SCPE</li>
        <li>Founding member of Shinhan Private Equity</li>
        <li>Corporate Finance Expert at The Boston Consulting Group</li>
      </ul>

      <h3>Location</h3>
      <p>Korea (Seoul)</p>
    `
  },

  /* ── Leadership: Ivo Philipps ── */
  'leader-6': {
    tag: 'Founding Partner & COO',
    tagClass: 'tag-cyan',
    title: 'Ivo Philipps',
    body: `
      <p>Ivo Philipps is the Founding Partner and Chief Operating Officer of Affirma Capital, responsible for operational excellence and institutional governance. He brings 14 years of tenure with the firm and 34 years of business experience.</p>

      <div class="modal-divider"></div>
      <h3>Experience</h3>
      <ul>
        <li>Previously COO of Principal Finance at Standard Chartered Bank</li>
        <li>Senior roles at Barclays in the UK — Private Bank, Mortgage businesses, and Risk Management</li>
        <li>Founding member and Board Director at a subsidiary of Misys Plc</li>
      </ul>

      <h3>Location</h3>
      <p>Singapore</p>
    `
  },

  /* ── News & Insights (placeholder for future content) ── */

};

// ─── Modal Controller ─────────────────────────────────────────────
const ModalController = (() => {
  const overlay   = document.getElementById('modal-overlay');
  const closeBtn  = document.getElementById('modal-close');
  const titleEl   = document.getElementById('modal-title');
  const tagEl     = document.getElementById('modal-tag');
  const bodyEl    = document.getElementById('modal-body');

  let previousFocus = null;
  let scrollPos = 0;

  function open(id) {
    const data = MODAL_CONTENT[id];
    if (!data) return;

    // Save scroll position
    scrollPos = window.scrollY;

    // Populate
    tagEl.textContent    = data.tag;
    tagEl.className      = `modal__tag tag ${data.tagClass}`;
    titleEl.textContent  = data.title;
    bodyEl.innerHTML     = data.body;

    // Show
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus trap
    previousFocus = document.activeElement;
    setTimeout(() => closeBtn.focus(), 50);
  }

  function close() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Restore focus
    if (previousFocus) previousFocus.focus();

    // Scroll back to exact position
    window.scrollTo({ top: scrollPos, behavior: 'instant' });
  }

  function bindTriggers() {
    document.querySelectorAll('[data-modal]').forEach(trigger => {
      trigger.addEventListener('click', () => open(trigger.dataset.modal));
    });
  }

  function bindClose() {
    // Close button
    closeBtn.addEventListener('click', close);

    // Overlay click
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });

    // ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) close();
    });
  }

  return { init: () => { bindTriggers(); bindClose(); } };
})();

document.addEventListener('DOMContentLoaded', () => ModalController.init());
