// ===========================
    // SLIDES
    // ✅ Added COVER slide BEFORE Who we are
    // ===========================
    const SLIDES = [
      {
        id: "cover",
        tab: "Morocco & Africa",
        isCover: true,
        title: "Tomorrow Systems <span class='accent'>|</span> Guazi",
        subtitle: "Deployment of a structured used-car ecosystem in Morocco & Africa.",
        callout: "We are not building a platform from scratch — we are deploying a proven one, locally adapted."
      },
      {
        id: "summary",
        tab: "Morocco & Africa",
        title: "Summary",
        subtitle: "Deck flow at a glance.",
        callout: "Summary: seven sections build the case for a Morocco pilot. Context = market situation + actors + gaps.",
        hideRightPanel: true,
        leftTag: "Agenda",
        bullets: [
          "<b>01</b> Who we are",
          "<b>02</b> Context",
          "<b>03</b> Benchmark",
          "<b>04</b> The Gap to Fix",
          "<b>05</b> Why Guazi",
          "<b>06</b> Further with Guazi",
          "<b>07</b> Why Morocco as a pilot gateway"
        ]
      },

      {
        id: "who-we-are",
        tab: "Morocco & Africa",
        title: "Who we are — <span class='accent'>Tomorrow Systems</span>",
        subtitle: "Smart mobility & digital infrastructure company delivering mission-critical urban systems across Morocco and Africa.",
        callout: "We deliver complex infrastructure + software programs: from design and commissioning to operations and asset performance.",
        hideRightPanel: true,
        leftTag: "Company snapshot",
        rightTag: "Proof points",
        bullets: [
          "<b>Smart City & Mobility specialist</b> (traffic, urban mobility, field devices, operations).",
          "<b>End-to-end delivery</b>: planning → deployment → testing/commissioning → O&M support.",
          "<b>Public infrastructure DNA</b>: built for reliability, governance, and scale.",
          "<span class='muted'>Positioning:</span> bridging engineering execution with digital platforms and data."
        ],
        leftImages: [
          { src: "assets/4.png", alt: "Key points snapshot" },
          { src: "assets/7.png", alt: "Key points snapshot 2" }
        ],
        growth: {
          title: "Confirmed portfolio growth",
          subtitle: "Portfolio value (MAD)",
          rows: [
            { year: "2021", value: "300M MAD" },
            { year: "2022", value: "350M MAD" },
            { year: "2023", value: "420M MAD" },
            { year: "2024", value: "505M MAD" },
            { year: "2025", value: "2.7B MAD" },
            { year: "2026*", value: "3.4B MAD" }
          ],
          note: "Source: internal portfolio figures (Tomorrow Systems materials)."
        },
        stats: [
          { k: "Smart intersections (example scope)", v: "300+", note: "Traffic signalization & mobility deployments (portfolio scale)." },
          { k: "Operations mindset", v: "O&M", note: "Asset management, assistance, maintenance planning." },
        ],
        images: [
          { label: "what we do in smart city", src: "assets/Company Mobility.png" },
          { label: "WE DO", src: "assets/Portfolio scale.png" },
        ],
        sources: [
          "Internal portfolio figures and project references (Tomorrow Systems materials)."
        ]
      },
      {
        id: "market-context",
        tab: "Strategic Deployment",
        title: "Context",
        subtitle: "A structurally growing automotive market with accelerating Chinese brand adoption and EV/hybrid momentum.",
        callout: "The market is growing in volume and technology — but trust, standards, and transaction structure lag behind.",
        leftTag: "Growth & adoption",
        rightTag: "Evidence",
        bullets: [
          "<b>2024 total market size</b>: 176,401 units <span class='muted'>(+9.2% YoY)</span>.",
          "<b>Oct total sales (VP+VUL)</b>: 2023 14,111 · 2024 15,003 · 2025 19,561.",
          "<b>NEV adoption (2024)</b>: 11,134 units, 6.3% share <span class='muted'>(hybrid-led)</span>."
        ],
        stats: [
          { k: "Total market 2024", v: "176,401", note: "+9.2% YoY" },
          { k: "NEV 2024", v: "11,134", note: "6.3% share (hybrid-led)" },
          { k: "Oct 2025 total", v: "19,561", note: "VP+VUL (Oct 2025)" }
        ],
        trend: {
          months: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
          series: [
            { name: "2024", data: [12425,10702,12618,14022,12971,14316,15498,18287,14626,15003,14039,22622], color: "#0ea15b" },
            { name: "2023", data: [11821,12265,13047,11391,10849,13317,14233,14191,13411,14111,12743,17518], color: "#4f6bff" },
            { name: "2022", data: [12527,13947,12773,12117,10527,11286,12504,12913,13269,13358,12266,16121], color: "#94a3b8" }
          ],
          cumul: [
            { label: "2024", value: 137953, color: "#0ea15b" },
            { label: "2025", value: 186415, color: "#ff8a5b" }
          ],
          oct: [
            { label: "Oct 2023", value: 14111 },
            { label: "Oct 2024", value: 15003 },
            { label: "Oct 2025", value: 19561 }
          ]
        },
        images: [
          {
            frames: [
              { label: "Monthly VP+VUL (2022–2024)", chart: "trend_line" },
              { label: "Cumul Jan–Oct (2024–2025)", chart: "trend_cumul" }
            ]
          }
        ],
        sources: [
          "AIVAM 2024 report (total market + NEV).",
          "AIVAM Oct 2025 release (Oct 2025 + cumul Jan–Oct 2025)."
        ]
      },
      {
        id: "market-snapshot-aivam",
        tab: "Strategic Deployment",
        title: "Chinese brands in Morocco – Market snapshot (AIVAM)",
        subtitle: "Passenger vehicle registrations, Jan–Oct 2025.",
        callout: "",
        leftTag: "Market snapshot",
        rightTag: "Source",
        bullets: [
          "<b>Total passenger vehicle market (Jan–Oct 2025)</b>: ~165,000 units.",
          "<b>Chinese passenger vehicles registered</b>: ~9,300 units.",
          "<b>Market share of Chinese brands</b>: ~5.7%.",
          "<b>Leading Chinese brands</b>: BYD, Changan, MG, Geely, Great Wall.",
          "<b>Insight</b>: fast growth but fragmented market with strong trust gap."
        ],
        stats: [
          { k: "Total market (Jan–Oct 2025)", v: "~165,000", note: "Passenger vehicles" },
          { k: "Chinese passenger vehicles", v: "~9,300", note: "Jan–Oct 2025" },
          { k: "Market share", v: "~5.7%", note: "Chinese brands" }
        ],
        images: [],
        sources: [
          "Source: AIVAM — Passenger Vehicle Registrations (Jan–Oct 2025)"
        ]
      },


      {
        id: "benchmark",
        tab: "Used-Car Ecosystem",
        title: "Benchmark",
        subtitle: "Validated benchmark of the Moroccan used-car ecosystem.",
        callout: "The Moroccan used-car market is liquid and digital, but fragmented, informal, and trust-deficient — no player owns the full transaction lifecycle. Many actors are middlemen/brokers, and used-car supply is mostly European.",
        leftTag: "Channel map",
        rightTag: "Limits & gaps",
        benchmarkItems: [
          {
            title: "1) Open marketplaces (C2C / low structure)",
            short: "1) Open marketplaces",
            examples: "Avito, Moteur.ma, Facebook Marketplace / groups",
            strengths: ["High visibility & traffic", "Strong filters, fast reach"],
            limits: ["No seller responsibility", "High fraud exposure", "No mandatory inspection/verification (some listings may show optional expertise reports)", "Actors are mostly intermediaries (middlemen / brokers)."],
           
          },
          {
            title: "2) Digital used-car marketplaces ",
            short: "2) Digital marketplaces",
            examples: "Autocaz (Auto Hall), Kifal Auto, AUTO24.ma, Renew Maroc, GlobalOccaz",
            strengths: ["Better UX than C2C", "Some inspection or certification logic", "Price guidance / estimation", "Higher trust than Avito/Facebook"],
            limits: ["Limited diagnosis history (no full lifecycle records)", "Limited approval based on inspection (not strict pass/fail)", "Inspection standards not unified", "Logistics + import not totally covered", "Responsibility unclear post-delivery"],
           
          },
          {
            title: "3) Manufacturer-backed certified networks",
            short: "3) Certified networks",
            examples: "SPOTICAR Maroc, Auto Hall (via Autocaz)",
            strengths: ["Brand trust", "Certified vehicles", "Warranty & after-sales", "Physical showrooms"],
            limits: ["Higher prices", "Limited brand scope", "Closed ecosystems", "Domestic focus only", "Manufacturer → dealership changes can be complex"],
          
          },
          {
            title: "4) Brokers & middlemen (informal but dominant)",
            short: "4) Brokers & middlemen",
            strengths: ["Speed & negotiation", "Market knowledge"],
            limits: ["Informal & opaque", "Conflicts of interest", "No inspection standard", "No liability"],
           
          },
          {
            title: "5) Garages & inspection services",
            short: "5) Garages & inspection",
            strengths: ["Widely available", "Low cost"],
            limits: ["No national standard", "Variable report quality", "No accountability if mismatch", "Limited diagnostic history."],
           
          },
          {
            title: "6) Financing & insurance (disconnected layer)",
            short: "6) Financing & insurance",
            examples: "Banks, leasing companies, insurers",
            strengths: ["Financing and insurance products do exist in the market", "Banks and leasing actors are experienced and regulated", "Insurance coverage is mandatory and well-structured", "Strong institutional players with risk management frameworks"],
            limits: ["Not integrated into the transaction flow (financing comes late)", "Loan approval not linked to vehicle inspection or condition", "Complex and slow approval process for buyers", "Limited access to financing outside certified dealer networks", "No end-to-end coordination with marketplaces or inspection actors"],
           
          }
        ],
        images: [
          {
            frames: [
              { label: "Buyer journey map", src: "assets/Buyer%20journey%20map.png" },
              { label: "Channel map (add)", src: "assets/Channel map.png" }
            ]
          },
          { label: "Fragmentation visual (add)", src: "assets/Fragmentation visual.png" },
        ],
        sources: [
          "Validated benchmark: Avito, Facebook Marketplace/groups, Autocaz, Kifal Auto, AUTO24.ma, OtoClic, SuperOccaz, Global Occaz, Renew Maroc, Siaracash, SPOTICAR Maroc, Auto Hall."
        ]
      },

      {
        id: "missing",
        tab: "Used-Car Ecosystem",
        title: "The Gap to Fix",
        subtitle: "The missing layer is trust infrastructure: verification, standards, pricing intelligence, and end-to-end accountability.",
        callout: "The market has components — but lacks integration, standardization, and preventive protection.",
        leftTag: "Trust stack gaps",
        rightTag: "Evidence",
        bullets: [
          "<b>Verified seller + vehicle identity</b> before a “trusted” listing.",
          "<b>Unified inspection standard</b> + grading.",
          "<b>Reference pricing intelligence</b> (model/year/mileage/condition/city).",
          "<b>Preventive fraud protection</b> (not only warnings).",
          "<b>End-to-end accountability</b>: discovery → inspection → financing → paperwork → handover + post-sale.",
          "<b>Diagnosis history is limited today</b> — need lifecycle records.",
          "<b>Approval based on inspection is weak</b> — need strict pass/fail rules."
        ],
        trustGaps: [
          { title: "Verification", value: "Missing", note: "Upfront identity + vehicle checks." },
          { title: "Standardization", value: "Missing", note: "Comparable inspections & grading." },
          { title: "Transparency", value: "Missing", note: "Price intelligence & fair value." },
          { title: "Process flow", value: "Missing", note: "Steps are not connected." }
        ],
        images: [
          {
            frames: [
              { label: "Trust stack diagram", src: "assets/Trust stack diagram.png" },
              { label: "Standard inspection report mock", src: "assets/Standard inspection report mock.png" }
            ]
          }
        ],
        sources: [
          "Benchmark conclusion from market structure: components exist, trust layer missing."
        ]
      },

      {
        id: "why-guazi",
        tab: "Strategic Deployment",
        title: "Why <span class='accent'>Guazi</span>",
        subtitle: "China moved from distrust to global confidence — Guazi comes from a mature ecosystem that solved used-car trust at scale.",
        callout: "10–15 years ago: skepticism. Today: proven quality + modern tech + massive market maturity.",
        leftTag: "Trust shift",
        rightTag: "Guazi value",
        bullets: [
          "<b>Trust evolution & acceptability</b>: Chinese automotive quality improved dramatically; consumers now trust Chinese brands for value + tech.",
          "<b>China is a mature automotive ecosystem</b>: intense competition forces high standards.",
          "<b>Guazi is built for used-car trust</b>: inspection logic, pricing intelligence, transaction control.",
          "<b>Proven at scale</b>: experience from a market with huge transaction volumes and operational complexity.",
          "<b>Know-how transfer</b>: processes, playbooks, and tech patterns adaptable to local reality.",
          "<b>Export readiness know-how</b>: structured workflow from inspection to export shipment.",
          "<b>Operational maturity at scale</b>: repeatable SOPs built for high transaction volumes.",
          "<b>Inspection & liability control</b>: standardized inspections with evidence chain (photos/time stamps).",
          "<b>Logistics clarity</b>: Incoterms support (recommend CIF), insurance options, and clear risk transfer.",
          "<b>Further with Guazi</b>: go further with a proven operating partner.",
          "<b>Reliable</b>: disciplined execution and consistency at scale.",
          "<b>Available</b>: execution-ready teams and playbooks."
        ],
        stats: [
          { k: "Chinese passenger cars (Jan–Oct 2025)", v: "~9,300", note: "AIVAM – Passenger Vehicles" },
          { k: "Market share", v: "~5.7%", note: "AIVAM – Passenger Vehicles" }
        ],
        images: [
          { label: "Add another visual here", src: "assets/Add another visual here.png" },
        ],
        sources: [
          "AIVAM – Passenger Vehicles (Jan–Oct 2025).",
          "Internal notes — positioning and narrative."
        ]
      },

      {
        id: "objectives",
        tab: "Strategic Deployment",
        title: "Further with <span class='accent'>Guazi</span>",
        subtitle: "Transfer proven know-how to accelerate trust, standards, and efficiency — building a locally adapted, scalable ecosystem.",
        callout: "",
        leftTag: "Objectives",
        rightTag: "KPIs (examples)",
        bullets: [
          "<b>Objective</b>: launch Otomall with Guazi know-how (trust + inspection + pricing + ops).",
          "<b>Transfer proven operating model</b>: adopt tested processes, not experiments.",
          "<b>Build trust architecture</b>: verification, inspection standard, and transparent pricing.",
          "<b>Reduce friction</b>: shorten buyer journey and increase conversion.",
          "<b>Raise market standards</b>: consistent quality expectations and reporting.",
          "<b>Create a scalable model</b>: pilot → replicate across regions."
        ],
        stats: [
          { k: "Time-to-market", v: "Faster", note: "Avoid years of trial-and-error." },
          { k: "Trust goal", v: "Higher", note: "Structured checks + standards." },
          { k: "Reliability", v: "Reliable", note: "Disciplined execution and consistency at scale." },
          { k: "Availability", v: "Available", note: "Execution-ready teams and playbooks." }
        ],
        images: [
          { label: "Roadmap visual (add)", src: "assets/Roadmap visual.png" },
          { label: "KPIs dashboard mock (add)", src: "assets/KPIs dashboard mock.png" },
        ],
        sources: [
          "Objectives derived from market gaps: trust, standardization, integration."
        ]
      },

      {
        id: "morocco-gateway",
        tab: "Morocco & Africa",
        title: "Why Morocco as a <span class='accent'>pilot gateway</span>",
        subtitle: "Morocco combines strategic geography, world-class logistics, and a mature automotive ecosystem — ideal to test and scale.",
        callout: "Pilot where infrastructure exists and outcomes are measurable — then expand through Morocco’s Africa gateway position.",
        leftTag: "Strategic reasons",
        rightTag: "Logistics hubs",
        bullets: [
          "<b>Geographic bridge</b>: direct link Europe ↔ Africa (Atlantic + Mediterranean routes).",
          "<b>World-class ports</b>: Tanger Med + Casablanca; plus emerging hubs (Nador West Med) and future Atlantic gateway (Dakhla).",
          "<b>Morocco automotive sector exports (overall)</b>: ~$14B (2023) and ~157B MAD (~$17B) in 2024.",
          "<b>Market is big but controllable</b>: meaningful volume, manageable complexity for pilot tuning.",
          "<b>Gateway to West & Francophone Africa</b>: success becomes a replicable reference."
        ],
        stats: [
          { k: "Morocco automotive sector exports (overall)", v: "~$14B", note: "2023" },
          { k: "Morocco automotive sector exports (overall)", v: "~157B MAD (~$17B)", note: "2024" },
          { k: "Gateway value", v: "EU ↔ Africa", note: "Strategic bridge positioning." }
        ],
        images: [
          { label: "Ports / logistics map (add)", src: "assets/Ports logistics map.png" },
          { label: "Whiteboard notes visual (optional)", src: "assets/Whiteboard notes visual.png" },
        ],
        sources: [
          "Ports: Tanger Med / Casablanca / Nador West Med / Dakhla.",
          "Automotive sector exports (overall), 2023–2024."
        ]
      },
      {
        id: "institutional-import-overview",
        tab: "Strategic Deployment",
        title: "Institutional framework & import overview",
        subtitle: "Executive summary of governance, import flow, costs, and next steps.",
        callout: "Alignment required across industrial, technical, and fiscal rules to enable compliant market access.",
        hideRightPanel: true,
        leftTag: "Executive overview",
        bullets: [
          "<b>Institutional framework:</b> Ministry of Industry & Trade (homologation, market access); Ministry of Transport & Logistics – NARSA (technical compliance, inspection); Ministry of Economy & Finance – ADII (customs, duties, taxes).",
          "<b>Vehicle importation process:</b> Eligibility → Shipping → Customs → Taxes → Inspection → Registration.",
          "<b>Duties & taxes (CIF-based):</b> Import duty 2.5%; VAT 20%; Parafiscal tax 0.25%; proportional stamp duty by value.",
          "<b>Origin & powertrain impact (China):</b> No FTA with Morocco; higher landed cost vs EU; CE compliance required; BEV / PHEV most competitive.",
          "<b>Suggested next steps:</b> Brand & model mapping; cost simulations; pilot import; technical presentation of Otomall platform; local autonomy (pricing, listings, validation, compliance)."
        ]
      },
      {
        id: "closing-image",
        tab: "Morocco & Africa",
        title: "",
        subtitle: "",
        callout: "",
        imageOnly: true,
        leftImage: {
          src: "assets/5.png",
          alt: "Slide image"
        }
      }
    ];

    // Tabs derived from slides
    const TAB_ORDER = [...new Set(SLIDES.map(s => s.tab))];

    // ===========================
    // Rendering logic
    // ===========================
    const $ = sel => document.querySelector(sel);

    const appShellEl = $("#appShell");
    const slideListEl = $("#slideList");
    const deckTitleEl = $("#deckTitle");
    const deckSubtitleEl = $("#deckSubtitle");
    const btnPrev = $("#btnPrev");
    const btnNext = $("#btnNext");
    const btnFullscreen = $("#btnFullscreen");
    const btnMenu = $("#btnMenu");
    const mainEl = document.querySelector(".main");
    const topbarEl = document.querySelector(".topbar");
    const scrimEl = $("#scrim");
    const slideCanvasEl = document.querySelector(".slide-canvas");
    const slideCardEl = document.querySelector(".slide-card");
    const deckEl = document.querySelector(".deck");
    const gridEl = document.querySelector(".grid");
    const langButtons = document.querySelectorAll(".lang-btn");

    const tabsEl = $("#tabs");
    const titleEl = $("#title");
    const subtitleEl = $("#subtitle");
    const calloutEl = $("#callout");
    const extraEl = $("#slideExtra");

    const bulletsEl = $("#bullets");
    const statsEl = $("#stats");
    const growthEl = $("#growthCard");
    const gapsEl = $("#gaps");
    const leftTitleWrapEl = $("#panelTitleLeftWrap");
    const leftMediaEl = $("#leftMedia");
    const benchmarkEl = $("#benchmarkWrap");
    const imagesEl = $("#images");
    const sourcesEl = $("#sources");
    const lightboxEl = $("#lightbox");
    const lightboxImgEl = $("#lightboxImg");
    const lightboxCloseEl = $("#lightboxClose");

    const leftTagEl = $("#panelTagLeft");
    const rightTagEl = $("#panelTagRight");

    const progressEl = $("#progress");
    const slideIndexEl = $("#slideIndex");

    const coverAreaEl = $("#coverArea");
    const mainGridEl = $("#mainGrid");
    const rightPanelEl = $("#rightPanel");

    let idx = 0;
    let uiLang = "en";
    const leftMediaIndex = {};
    const rightMediaIndex = {};
    const benchIndex = {};

    const UI_TEXT = {
      en: {
        prev: "Prev",
        next: "Next",
        fullscreen: "Fullscreen",
        exit: "Exit Fullscreen",
        deckTitle: "Tomorrow Systems | Guazi",
        deckSubtitle: "Partnership Deck"
      },
      fr: {
        prev: "Prev",
        next: "Next",
        fullscreen: "Fullscreen",
        exit: "Exit Fullscreen",
        deckTitle: "Tomorrow Systems | Guazi",
        deckSubtitle: "Partnership Deck"
      }
    };

    function buildTabs(){
      tabsEl.innerHTML = "";
      TAB_ORDER.forEach(tabName => {
        const btn = document.createElement("button");
        btn.className = "tab";
        btn.textContent = tabName;
        btn.onclick = () => {
          const first = SLIDES.findIndex(s => s.tab === tabName);
          if (first >= 0) setSlide(first);
        };
        tabsEl.appendChild(btn);
      });
    }

    function stripTags(html){
      return String(html || "").replace(/<[^>]*>/g, "").trim();
    }

    function buildSidebar(){
      if (!slideListEl) return;
      slideListEl.innerHTML = "";
      SLIDES.forEach((s, i) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "slide-item";
        item.setAttribute("data-index", String(i));

        const num = document.createElement("span");
        num.className = "slide-num";
        num.textContent = String(i + 1).padStart(2, "0");

        const textWrap = document.createElement("div");
        textWrap.className = "slide-text";

        const section = document.createElement("span");
        section.className = "slide-section";
        section.textContent = s.tab || "Slide";

        const title = document.createElement("span");
        title.className = "slide-title";
        title.textContent = stripTags(s.title);

        textWrap.appendChild(section);
        textWrap.appendChild(title);

        item.appendChild(num);
        item.appendChild(textWrap);
        item.addEventListener("click", () => {
          setSlide(i);
          closeSidebar();
        });

        slideListEl.appendChild(item);
      });
    }

    function setActiveSidebar(){
      if (!slideListEl) return;
      const items = slideListEl.querySelectorAll(".slide-item");
      items.forEach((item, i) => {
        item.classList.toggle("active", i === idx);
      });
    }

    function buildProgress(){
      progressEl.innerHTML = "";
      SLIDES.forEach((_, i) => {
        const d = document.createElement("button");
        d.className = "dot";
        d.type = "button";
        d.title = `Go to slide ${i+1}`;
        d.setAttribute("aria-label", `Go to slide ${i+1}`);
        d.onclick = () => setSlide(i);
        progressEl.appendChild(d);
      });
    }

    function setUiLanguage(nextLang){
      uiLang = nextLang;
      document.documentElement.lang = nextLang;
      if (deckTitleEl) deckTitleEl.textContent = UI_TEXT[nextLang].deckTitle;
      if (deckSubtitleEl) deckSubtitleEl.textContent = UI_TEXT[nextLang].deckSubtitle;
      if (btnPrev) btnPrev.textContent = UI_TEXT[nextLang].prev;
      if (btnNext) btnNext.textContent = UI_TEXT[nextLang].next;
      if (btnFullscreen) {
        const isFs = Boolean(document.fullscreenElement);
        btnFullscreen.textContent = isFs ? UI_TEXT[nextLang].exit : UI_TEXT[nextLang].fullscreen;
      }
    }

    function openSidebar(){
      document.body.classList.toggle("sidebar-open");
    }

    function closeSidebar(){
      document.body.classList.remove("sidebar-open");
    }

    function toggleFullscreen(){
      if (document.fullscreenElement){
        document.exitFullscreen();
        return;
      }
      if (mainEl && mainEl.requestFullscreen){
        mainEl.requestFullscreen();
      }
    }

    function updateFullscreenScale(){
      if (!slideCanvasEl || !slideCardEl || !deckEl){
        return;
      }
      const isFs = Boolean(document.fullscreenElement);
      if (!isFs){
        slideCanvasEl.classList.remove("needs-scroll");
        slideCardEl.style.transform = "";
        slideCardEl.style.transformOrigin = "";
        slideCardEl.style.width = "";
        slideCardEl.style.height = "";
        slideCardEl.style.left = "";
        slideCardEl.style.top = "";
        slideCardEl.style.position = "";
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        return;
      }
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      slideCanvasEl.classList.remove("needs-scroll");

      const rootStyle = getComputedStyle(document.documentElement);
      const baseW = parseFloat(rootStyle.getPropertyValue("--slide-base-w")) || 1280;
      const baseH = parseFloat(rootStyle.getPropertyValue("--slide-base-h")) || 720;
      const rect = slideCanvasEl.getBoundingClientRect();
      const margin = 8;
      const controlsH = topbarEl ? topbarEl.getBoundingClientRect().height : 0;
      const availableW = Math.max(0, rect.width - margin * 2);
      const availableH = Math.max(0, rect.height - controlsH - margin * 2);
      if (!availableW || !availableH){
        return;
      }

      // Reset to base size for accurate content measurement
      slideCardEl.style.position = "absolute";
      slideCardEl.style.left = "50%";
      slideCardEl.style.top = "50%";
      slideCardEl.style.width = `${baseW}px`;
      slideCardEl.style.height = `${baseH}px`;
      slideCardEl.style.transform = "translate(-50%, -50%) scale(1)";
      slideCardEl.style.transformOrigin = "center center";

      const contentW = Math.max(baseW, deckEl.scrollWidth, gridEl ? gridEl.scrollWidth : 0);
      const contentH = Math.max(baseH, deckEl.scrollHeight, gridEl ? gridEl.scrollHeight : 0);
      const scale = Math.min(availableW / contentW, availableH / contentH);

      slideCardEl.style.position = "absolute";
      slideCardEl.style.left = "50%";
      slideCardEl.style.top = "50%";
      slideCardEl.style.width = `${contentW}px`;
      slideCardEl.style.height = `${contentH}px`;
      slideCardEl.style.transform = `translate(-50%, -50%) scale(${scale})`;
      slideCardEl.style.transformOrigin = "center center";
    }

    function indexFromHash(){
      const raw = (location.hash || "").replace("#", "");
      if (!raw) return null;
      const cleaned = raw.toLowerCase().startsWith("slide-")
        ? raw.slice(6)
        : raw;
      const num = parseInt(cleaned, 10);
      if (Number.isNaN(num)) return null;
      if (num < 1 || num > SLIDES.length) return null;
      return num - 1;
    }

    function setActiveTabs(tabName){
      [...tabsEl.children].forEach(t => {
        t.classList.toggle("active", t.textContent === tabName);
      });
    }

    function escapeHtml(str){
      return String(str)
        .replaceAll("&","&amp;")
        .replaceAll("<","&lt;")
        .replaceAll(">","&gt;")
        .replaceAll('"',"&quot;")
        .replaceAll("'","&#039;");
    }

    function formatNum(n){
      return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function setupCanvas(canvas, width, height){
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = "100%";
      canvas.style.height = "auto";
      const ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      return { ctx, width, height };
    }

    function drawLineChart(ctx, width, height, series, labels){
      if (!series.length || !labels.length) return;
      const pad = { l: 54, r: 16, t: 20, b: 34 };
      const plotW = width - pad.l - pad.r;
      const plotH = height - pad.t - pad.b;
      const maxVal = Math.max(...series.flatMap(s => s.data));
      const yMax = Math.ceil(maxVal / 1000) * 1000;
      const yMin = 0;
      const gridCount = 4;

      ctx.font = "11px 'Space Grotesk', system-ui, sans-serif";
      ctx.fillStyle = "#6b7280";
      ctx.strokeStyle = "rgba(148,163,184,.35)";
      ctx.lineWidth = 1;
      for (let i = 0; i <= gridCount; i++){
        const t = i / gridCount;
        const y = pad.t + plotH * (1 - t);
        ctx.beginPath();
        ctx.moveTo(pad.l, y);
        ctx.lineTo(pad.l + plotW, y);
        ctx.stroke();
        const val = Math.round(yMin + (yMax - yMin) * t);
        ctx.fillText(formatNum(val), 6, y + 4);
      }

      labels.forEach((label, i) => {
        const x = pad.l + (plotW * i / (labels.length - 1));
        ctx.fillText(label, x - 8, pad.t + plotH + 22);
      });

      series.forEach(s => {
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        s.data.forEach((val, i) => {
          const x = pad.l + (plotW * i / (labels.length - 1));
          const y = pad.t + plotH * (1 - (val - yMin) / (yMax - yMin));
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.stroke();

        ctx.fillStyle = s.color;
        s.data.forEach((val, i) => {
          const x = pad.l + (plotW * i / (labels.length - 1));
          const y = pad.t + plotH * (1 - (val - yMin) / (yMax - yMin));
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      let lx = pad.l;
      const ly = 12;
      ctx.font = "12px 'Space Grotesk', system-ui, sans-serif";
      series.forEach((s, i) => {
        const x = lx + i * 70;
        ctx.fillStyle = s.color;
        ctx.fillRect(x, ly - 8, 10, 10);
        ctx.fillStyle = "#111827";
        ctx.fillText(s.name, x + 14, ly + 1);
      });
    }

    function drawBars(ctx, width, height, items){
      if (!items.length) return;
      const pad = { l: 54, r: 16, t: 20, b: 32 };
      const plotW = width - pad.l - pad.r;
      const plotH = height - pad.t - pad.b;
      const maxVal = Math.max(...items.map(i => i.value));
      const yMax = Math.ceil(maxVal / 10000) * 10000;
      const gridCount = 4;

      ctx.font = "11px 'Space Grotesk', system-ui, sans-serif";
      ctx.fillStyle = "#6b7280";
      ctx.strokeStyle = "rgba(148,163,184,.35)";
      ctx.lineWidth = 1;
      for (let i = 0; i <= gridCount; i++){
        const t = i / gridCount;
        const y = pad.t + plotH * (1 - t);
        ctx.beginPath();
        ctx.moveTo(pad.l, y);
        ctx.lineTo(pad.l + plotW, y);
        ctx.stroke();
        const val = Math.round(yMax * t);
        ctx.fillText(formatNum(val), 6, y + 4);
      }

      const gap = 16;
      const barW = (plotW - gap * (items.length - 1)) / items.length;
      ctx.font = "12px 'Space Grotesk', system-ui, sans-serif";
      items.forEach((item, i) => {
        const x = pad.l + i * (barW + gap);
        const barH = plotH * (item.value / yMax);
        const y = pad.t + plotH - barH;
        ctx.fillStyle = item.color;
        ctx.fillRect(x, y, barW, barH);
        ctx.fillStyle = "#111827";
        ctx.fillText(item.label, x, pad.t + plotH + 22);
        ctx.fillText(formatNum(item.value), x, y - 6);
      });
    }

    function attachCanvasLightbox(canvas, label){
      if (!canvas) return;
      canvas.addEventListener("click", () => {
        const dataUrl = canvas.toDataURL("image/png");
        openLightbox(dataUrl, label || "chart");
      });
    }

    function openLightbox(src, alt){
      if (!lightboxEl || !lightboxImgEl) return;
      lightboxImgEl.src = src;
      lightboxImgEl.alt = alt || "image";
      lightboxEl.classList.add("open");
      lightboxEl.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeLightbox(){
      if (!lightboxEl || !lightboxImgEl) return;
      lightboxEl.classList.remove("open");
      lightboxEl.setAttribute("aria-hidden", "true");
      lightboxImgEl.src = "";
      lightboxImgEl.alt = "";
      document.body.style.overflow = "";
    }

    function renderSlide(s){
      titleEl.innerHTML = s.title;
      subtitleEl.textContent = s.subtitle || "";

      if (s.callout && s.callout.trim()){
        calloutEl.style.display = "";
        calloutEl.textContent = s.callout;
      } else {
        calloutEl.style.display = "none";
        calloutEl.textContent = "";
      }

      if (s.extra){
        const extraBullets = (s.extra.bullets || []).map(x => `<li>${escapeHtml(x)}</li>`).join("");
        extraEl.innerHTML = `
          <div class="extra-title">${escapeHtml(s.extra.title)}</div>
          <div class="extra-sub">${escapeHtml(s.extra.subtitle)}</div>
          <ul class="extra-list">${extraBullets}</ul>
        `;
        extraEl.style.display = "";
      } else {
        extraEl.style.display = "none";
        extraEl.innerHTML = "";
      }

      // ✅ COVER MODE
      if (s.isCover){
        coverAreaEl.style.display = "";
        mainGridEl.style.display = "none";

        // Button goes to "Who we are" (index 1)
        const startBtn = $("#btnStart");
        if (startBtn) {
          startBtn.onclick = () => setSlide(1);
          $("#btnStart").onclick = () => setSlide(1);
        }

        // Still show dots and tabs highlighting
        slideIndexEl.textContent = `Slide ${idx+1} / ${SLIDES.length}`;
        [...progressEl.children].forEach((d,i)=> d.classList.toggle("active", i===idx));
        setActiveTabs(s.tab);

        // Disable Prev on cover
        $("#btnPrev").disabled = true;
        $("#btnPrev").style.opacity = 0.5;

        return;
      }

      // ✅ NORMAL MODE
      coverAreaEl.style.display = "none";
      mainGridEl.style.display = "";

      $("#btnPrev").disabled = false;
      $("#btnPrev").style.opacity = 1;

      const hideRightPanel = !!s.imageOnly || !!s.hideRightPanel;
      if (hideRightPanel){
        mainGridEl.classList.add("single");
        if (rightPanelEl) rightPanelEl.style.display = "none";
      } else {
        mainGridEl.classList.remove("single");
        if (rightPanelEl) rightPanelEl.style.display = "";
      }

      leftTagEl.textContent = s.leftTag || "Overview";
      rightTagEl.textContent = s.rightTag || "Evidence";

      const leftImages = Array.isArray(s.leftImages)
        ? s.leftImages
        : (s.leftImage ? [s.leftImage] : []);
      const cleanLeftImages = leftImages.filter(img => img && img.src && String(img.src).trim());
      const hasLeftImage = cleanLeftImages.length > 0;
      bulletsEl.innerHTML = "";
      statsEl.innerHTML = "";
      growthEl.innerHTML = "";
      growthEl.style.display = "none";
      gapsEl.innerHTML = "";
      gapsEl.style.display = "none";
      leftMediaEl.innerHTML = "";

      if (hasLeftImage){
        const slideKey = s.id || String(idx);
        if (leftMediaIndex[slideKey] == null || leftMediaIndex[slideKey] >= cleanLeftImages.length){
          leftMediaIndex[slideKey] = 0;
        }
        const current = cleanLeftImages[leftMediaIndex[slideKey]];
        if (leftTitleWrapEl) leftTitleWrapEl.style.display = "none";
        bulletsEl.style.display = "none";
        statsEl.style.display = "none";
        growthEl.style.display = "none";
        gapsEl.style.display = "none";
        leftMediaEl.style.display = "";
        leftMediaEl.innerHTML = `<img src="${escapeHtml(current.src)}" alt="${escapeHtml(current.alt || "left image")}">`;
        const leftImgEl = leftMediaEl.querySelector("img");
        if (leftImgEl){
          leftImgEl.loading = "lazy";
          leftImgEl.addEventListener("click", () => openLightbox(current.src, current.alt || "left image"));
        }
        if (cleanLeftImages.length > 1){
          leftMediaEl.innerHTML += `<button class="left-media-next" type="button" aria-label="Next image">&gt;</button>`;
          const nextBtn = leftMediaEl.querySelector(".left-media-next");
          if (nextBtn){
            nextBtn.addEventListener("click", () => {
              leftMediaIndex[slideKey] = (leftMediaIndex[slideKey] + 1) % cleanLeftImages.length;
              renderSlide(s);
            });
          }
        }
      } else {
        if (leftTitleWrapEl) leftTitleWrapEl.style.display = "";
        leftMediaEl.style.display = "none";

        const hasBenchmark = Array.isArray(s.benchmarkItems) && s.benchmarkItems.length > 0;
        if (hasBenchmark){
          const slideKey = s.id || String(idx);
          if (benchIndex[slideKey] == null || benchIndex[slideKey] >= s.benchmarkItems.length){
            benchIndex[slideKey] = 0;
          }
          const items = s.benchmarkItems;
          const current = items[benchIndex[slideKey]];
          const buttons = items.map((it, i) => `
            <button class="bench-item${i === benchIndex[slideKey] ? " active" : ""}" data-idx="${i}" aria-label="${escapeHtml(it.title)}">${i + 1}</button>
          `).join("");
          const strengths = (current.strengths || []).map(x => `<li>${escapeHtml(x)}</li>`).join("");
          const limits = (current.limits || []).map(x => `<li>${escapeHtml(x)}</li>`).join("");
          benchmarkEl.innerHTML = `
            <div class="bench-list">${buttons}</div>
            <div class="bench-detail">
              <div class="bench-title">${escapeHtml(current.title)}</div>
              ${current.examples ? `<div class="bench-meta"><span class="muted">Examples:</span> ${escapeHtml(current.examples)}</div>` : ""}
              <div class="bench-cols">
                <div>
                  <div class="bench-sub">Strengths</div>
                  <ul class="bench-ul">${strengths}</ul>
                </div>
                <div>
                  <div class="bench-sub">Limits</div>
                  <ul class="bench-ul">${limits}</ul>
                </div>
              </div>
              ${current.note ? `<div class="bench-note">↳ ${escapeHtml(current.note)}</div>` : ""}
            </div>
          `;
          benchmarkEl.style.display = "";
          bulletsEl.style.display = "none";
          statsEl.style.display = "none";
          growthEl.style.display = "none";
          gapsEl.style.display = "none";
          const benchBtns = benchmarkEl.querySelectorAll(".bench-item");
          benchBtns.forEach(btn => {
            btn.addEventListener("click", () => {
              const nextIdx = parseInt(btn.getAttribute("data-idx"), 10);
              if (!Number.isNaN(nextIdx)){
                benchIndex[slideKey] = nextIdx;
                renderSlide(s);
              }
            });
          });
        } else {
          benchmarkEl.style.display = "none";
          bulletsEl.style.display = "";
          statsEl.style.display = "";

          (s.bullets || []).forEach(b => {
            const li = document.createElement("li");
            li.innerHTML = b;
            bulletsEl.appendChild(li);
          });

          if (s.growth){
            const rows = (s.growth.rows || []).map(r => `
              <tr>
                <td>${escapeHtml(r.year)}</td>
                <td class="growth-value">${escapeHtml(r.value)}</td>
              </tr>
            `).join("");
            growthEl.innerHTML = `
              <div class="growth-title">${escapeHtml(s.growth.title)}</div>
              <div class="growth-sub">${escapeHtml(s.growth.subtitle)}</div>
              <table class="growth-table">
                <thead>
                  <tr><th>Year</th><th>Value</th></tr>
                </thead>
                <tbody>${rows}</tbody>
              </table>
              <div class="growth-note">${escapeHtml(s.growth.note)}</div>
            `;
            growthEl.style.display = "";
          }

          const hasTrustGaps = Array.isArray(s.trustGaps) && s.trustGaps.length > 0;
          if (hasTrustGaps){
            gapsEl.innerHTML = s.trustGaps.map(gap => `
              <div class="gap-card">
                <div class="gap-title">${escapeHtml(gap.title)}</div>
                <div class="gap-value">${escapeHtml(gap.value)}</div>
                <div class="gap-note">${escapeHtml(gap.note)}</div>
              </div>
            `).join("");
            gapsEl.style.display = "";
            statsEl.style.display = "none";
          } else {
            gapsEl.style.display = "none";
            statsEl.style.display = "";
            (s.stats || []).forEach(st => {
              const card = document.createElement("div");
              card.className = "stat";
              card.innerHTML = `
                <div class="k">${escapeHtml(st.k)}</div>
                <div class="v">${escapeHtml(st.v)}</div>
                <div class="note">${escapeHtml(st.note || "")}</div>
              `;
              statsEl.appendChild(card);
            });
          }
        }
      }

      imagesEl.innerHTML = "";
      if (s.chart === "trend_3y"){
        imagesEl.innerHTML = `
          <div class="chart-block">
            <div class="chart-title">Monthly VP+VUL (2022–2024)</div>
            <canvas class="chart-canvas" id="trendLine"></canvas>
          </div>
          <div class="chart-block">
            <div class="chart-title">Cumul Jan→Oct (2023–2025)</div>
            <canvas class="chart-canvas bar" id="trendCumul"></canvas>
          </div>
        `;
        const trend = s.trend || {};
        const lineCanvas = $("#trendLine");
        if (lineCanvas){
          const lineCtx = setupCanvas(lineCanvas, 860, 320);
          drawLineChart(lineCtx.ctx, lineCtx.width, lineCtx.height, trend.series || [], trend.months || []);
          attachCanvasLightbox(lineCanvas, "Monthly VP+VUL (2022–2024)");
        }
        const barCanvas = $("#trendCumul");
        if (barCanvas){
          const barCtx = setupCanvas(barCanvas, 860, 240);
          drawBars(barCtx.ctx, barCtx.width, barCtx.height, trend.cumul || []);
          attachCanvasLightbox(barCanvas, "Cumul Jan–Oct (2023–2025)");
        }
      } else {
        (s.images || []).forEach((img, i) => {
          const box = document.createElement("div");
          box.className = "img";
          const frames = Array.isArray(img.frames) ? img.frames : null;
          if (frames && frames.length){
            const frameKey = `${s.id || idx}:${i}`;
            if (rightMediaIndex[frameKey] == null || rightMediaIndex[frameKey] >= frames.length){
              rightMediaIndex[frameKey] = 0;
            }
            const frame = frames[rightMediaIndex[frameKey]];
            if (frame.chart){
              box.classList.add("chart");
              const canvas = document.createElement("canvas");
              box.appendChild(canvas);
              const trend = s.trend || {};
              const size = setupCanvas(canvas, 860, 320);
              canvas.style.height = "100%";
              if (frame.chart === "trend_line"){
                drawLineChart(size.ctx, size.width, size.height, trend.series || [], trend.months || []);
              } else if (frame.chart === "trend_cumul"){
                drawBars(size.ctx, size.width, size.height, trend.cumul || []);
              }
              attachCanvasLightbox(canvas, frame.label || "chart");
            } else if (frame.src && frame.src.trim()){
              box.classList.add("clickable");
              if ((frame.label || "").toLowerCase().includes("guazi logo") || frame.src.toLowerCase().includes("guazi logo")){
                box.classList.add("is-logo");
              }
              const im = document.createElement("img");
              im.src = frame.src;
              im.alt = frame.label || "image";
              im.loading = "lazy";
              im.addEventListener("click", () => openLightbox(frame.src, frame.label || "image"));
              box.appendChild(im);
            } else {
              box.textContent = (frame.label || "Add image") + " (drop file in assets/ and set src)";
            }
            if (frames.length > 1){
              const btn = document.createElement("button");
              btn.className = "img-next";
              btn.type = "button";
              btn.setAttribute("aria-label", "Next image");
              btn.textContent = ">";
              btn.addEventListener("click", () => {
                rightMediaIndex[frameKey] = (rightMediaIndex[frameKey] + 1) % frames.length;
                renderSlide(s);
              });
              box.appendChild(btn);
            }
          } else if (img.src && img.src.trim()){
            box.classList.add("clickable");
            if ((img.label || "").toLowerCase().includes("guazi logo") || img.src.toLowerCase().includes("guazi logo")){
              box.classList.add("is-logo");
            }
            const im = document.createElement("img");
            im.src = img.src;
            im.alt = img.label || "image";
            im.loading = "lazy";
            im.addEventListener("click", () => openLightbox(img.src, img.label || "image"));
            box.appendChild(im);
          } else {
            box.textContent = (img.label || "Add image") + " (drop file in assets/ and set src)";
          }
          imagesEl.appendChild(box);
        });
      }

      sourcesEl.innerHTML = "";
      if (s.sources && s.sources.length){
        sourcesEl.innerHTML =
          `<b style="color:#111827">Sources / notes</b><br>` +
          s.sources.map(x => `• ${escapeHtml(x)}`).join("<br>");
      }

      // progress + index + tabs
      [...progressEl.children].forEach((d,i)=> d.classList.toggle("active", i===idx));
      slideIndexEl.textContent = `Slide ${idx+1} / ${SLIDES.length}`;
      setActiveTabs(s.tab);
    }

    function setSlide(i, options = {}){
      idx = Math.max(0, Math.min(SLIDES.length-1, i));
      renderSlide(SLIDES[idx]);
      setActiveSidebar();
      if (!options.skipHash){
        location.hash = `#${idx+1}`;
      }
      if (document.fullscreenElement){
        updateFullscreenScale();
      }
    }

    function next(){ setSlide(idx+1); }
    function prev(){ setSlide(idx-1); }

    // Buttons
    if (btnNext) btnNext.addEventListener("click", next);
    if (btnPrev) btnPrev.addEventListener("click", prev);
    if (btnFullscreen) btnFullscreen.addEventListener("click", toggleFullscreen);
    if (btnMenu) btnMenu.addEventListener("click", openSidebar);
    if (scrimEl) scrimEl.addEventListener("click", closeSidebar);
    langButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const nextLang = btn.getAttribute("data-lang") || "en";
        langButtons.forEach(b => b.classList.toggle("is-active", b === btn));
        setUiLanguage(nextLang);
      });
    });
    if (lightboxEl){
      lightboxEl.addEventListener("click", (e) => {
        if (e.target === lightboxEl) closeLightbox();
      });
    }
    if (lightboxCloseEl){
      lightboxCloseEl.addEventListener("click", closeLightbox);
    }

    // Keyboard
    window.addEventListener("keydown", (e)=>{
      if (lightboxEl && lightboxEl.classList.contains("open")){
        if (e.key === "Escape") closeLightbox();
        return;
      }
      if (e.key === "ArrowRight" || e.key === "PageDown") next();
      if (e.key === "ArrowLeft" || e.key === "PageUp") prev();
      if (e.key === "Home") setSlide(0);
      if (e.key === "End") setSlide(SLIDES.length-1);
    });

    // Hash routing
    window.addEventListener("hashchange", () => {
      const fromHash = indexFromHash();
      if (fromHash != null && fromHash !== idx) {
        setSlide(fromHash, { skipHash: true });
      }
    });

    // Fullscreen state
    document.addEventListener("fullscreenchange", () => {
      const isFs = Boolean(document.fullscreenElement);
      document.body.classList.toggle("is-fullscreen", isFs);
      if (btnFullscreen) {
        btnFullscreen.textContent = isFs ? UI_TEXT[uiLang].exit : UI_TEXT[uiLang].fullscreen;
      }
      updateFullscreenScale();
    });

    window.addEventListener("resize", () => {
      updateFullscreenScale();
    });

    // Init
    setUiLanguage(uiLang);
    buildSidebar();
    buildTabs();
    buildProgress();

    // Load from hash
    const startIndex = indexFromHash();
    if (startIndex != null) {
      setSlide(startIndex, { skipHash: true });
    } else {
      setSlide(0, { skipHash: true }); // ✅ Start with cover
    }
