/**
 * CYBERUZ - CS2 VA CS 1.6 SERVER OBUNALARI PLATFORMASI
 * Asosiy JavaScript: 50% Chegirma tizimi, Narxlar kalkulyatori,
 * To'lov shlyuzi, Server monitori, Ovoz effektlari va Zarrachalar animatsiyasi
 */

// ==========================================================================
// MA'LUMOTLAR BAZASI (DATA)
// ==========================================================================
const TARIFFS_DATA = {
  cs2: [
    {
      id: "cs2-vip",
      name: "VIP",
      tagline: "O'yinni ustunlik bilan boshlash uchun ajoyib boshlang'ich to'plam.",
      basePrices: { "15d": 30000, "30d": 50000, "90d": 120000, "perm": 250000 },
      isFeatured: false,
      isUltimate: false,
      features: [
        { text: "Har raundda bepul Kevlar + Helmet", active: true },
        { text: "Boshlang'ich granatalar (Flash + HE)", active: true },
        { text: "+15 HP har bir dushmanni o'ldirganda", active: true },
        { text: "Chatda yorqin sariq [VIP] prefiksi", active: true },
        { text: "VIP qurol skinlari to'plami", active: true },
        { text: "Double Jump (Ikki marta sakrash)", active: false },
        { text: "Reserv Slot (To'la serverga kirish)", active: false },
        { text: "Admin / Votemap boshqaruv paneli", active: false }
      ]
    },
    {
      id: "cs2-premium",
      name: "PREMIUM (VIP+)",
      tagline: "Eng ko'p sotilgan! Kengaytirilgan jangovar qobiliyatlar va imkoniyatlar.",
      basePrices: { "15d": 50000, "30d": 80000, "90d": 190000, "perm": 390000 },
      isFeatured: true,
      badgeText: "ENG OMMABOP 🔥",
      isUltimate: false,
      features: [
        { text: "Barcha VIP imtiyozlari to'liq kiritilgan", active: true },
        { text: "Double Jump (Havo bo'ylab ikkita sakrash)", active: true },
        { text: "Vampirizm (+25 HP va to'liq o'q to'ldirish)", active: true },
        { text: "Reserv Slot (Server 100% to'lganda ham kirish)", active: true },
        { text: "Maxsus olovrang [PREMIUM] prefiksi", active: true },
        { text: "O'yinchilar ustida eksklyuziv Neon Aura", active: true },
        { text: "Admin huquqlari (Kick / Ban)", active: false },
        { text: "Server konsol boshqaruvi", active: false }
      ]
    },
    {
      id: "cs2-admin",
      name: "ADMIN",
      tagline: "Tartib posboni va jamoa yetakchisi. To'liq jazolash va nazorat huquqi.",
      basePrices: { "15d": 80000, "30d": 130000, "90d": 320000, "perm": 650000 },
      isFeatured: false,
      badgeText: "KATTA HUQUQ ⚡",
      isUltimate: false,
      features: [
        { text: "Barcha VIP va Premium imtiyozlari", active: true },
        { text: "Qoidabuzarlarni jazolash: Kick / Ban / Gag / Mute", active: true },
        { text: "Slap / Slay va jamoalarni muvozanatlash", active: true },
        { text: "Xaritalarni almashtirish (Votemap / Changelevel)", active: true },
        { text: "Qizil rangli [ADMIN] prefiksi va ovozli e'lon", active: true },
        { text: "Maxsus Admin Menyu (/adminmenu)", active: true },
        { text: "Server restart / Pauza huquqi", active: true },
        { text: "Doimiy texnik va shaxsiy qo'llab-quvvatlash", active: true }
      ]
    },
    {
      id: "cs2-ultimate",
      name: "ULTIMATE (BOSS)",
      tagline: "Cheksiz kuch! Serverdagi eng oliy maqom va barcha huquqlar.",
      basePrices: { "15d": 140000, "30d": 220000, "90d": 550000, "perm": 1100000 },
      isFeatured: false,
      badgeText: "CHЕKSIZ HUKMRONLIK 👑",
      isUltimate: true,
      features: [
        { text: "Barcha imtiyozlar (VIP + Premium + Admin)", active: true },
        { text: "Cheksiz Immunitet (Adminlar sizni jazolay olmaydi)", active: true },
        { text: "Ixtiyoriy shaxsiy prefiks va maxsus rang tanlash", active: true },
        { text: "Barcha pullik qurol skinlari va pichoqlar ochiq", active: true },
        { text: "Maxsus O'lim effekti (Olovli portlash)", active: true },
        { text: "VIP Telegram guruhida adminlik", active: true },
        { text: "Server egasi bilan bevosita shaxsiy aloqa", active: true },
        { text: "Boshqa barcha yangi funksiyalarga birinchi kirish", active: true }
      ]
    }
  ],
  cs16: [
    {
      id: "cs16-vip",
      name: "VIP CLASSIC",
      tagline: "Afsonaviy 1.6 uchun klassik VIP imkoniyatlari to'plami.",
      basePrices: { "15d": 20000, "30d": 35000, "90d": 85000, "perm": 180000 },
      isFeatured: false,
      isUltimate: false,
      features: [
        { text: "Bepul D-Eagle + Kevlar har raundda", active: true },
        { text: "3-raunddan boshlab bepul M4A1 / AK-47 / AWP", active: true },
        { text: "Har kill uchun +10 HP (Headshot uchun +15 HP)", active: true },
        { text: "Tab jadvalida [VIP] belgisi", active: true },
        { text: "Barcha granatalar to'plami (HE, 2 Flash, Smoke)", active: true },
        { text: "Double Jump (Ikki marta sakrash)", active: false },
        { text: "Reserv Slot (Server to'lganda kirish)", active: false },
        { text: "Amxmodx boshqaruv menyusi", active: false }
      ]
    },
    {
      id: "cs16-premium",
      name: "PREMIUM (SUPER VIP)",
      tagline: "Tezlik, kuch va o'zgacha ustunlik sevuvchilar uchun ideal tanlov.",
      basePrices: { "15d": 35000, "30d": 60000, "90d": 140000, "perm": 290000 },
      isFeatured: true,
      badgeText: "ENG SEVIMLI 🔥",
      isUltimate: false,
      features: [
        { text: "Barcha VIP Classic imtiyozlari", active: true },
        { text: "Double Jump (Havoda 2 marta sakrash)", active: true },
        { text: "Super Vampirizm (+20 HP har kill, 120 HP gacha)", active: true },
        { text: "Reserv Slot (To'la serverga ulanish imkoni)", active: true },
        { text: "Yashil chat va [PREMIUM] prefiksi", active: true },
        { text: "Tezroq yugurish va parashyut (Parachute)", active: true },
        { text: "Barcha Admin buyruqlari", active: false },
        { text: "Server boshqaruvi", active: false }
      ]
    },
    {
      id: "cs16-admin",
      name: "ADMINISTRATOR",
      tagline: "Serverda tartibni ta'minlang va qoidabuzarlarni jazolang.",
      basePrices: { "15d": 60000, "30d": 95000, "90d": 230000, "perm": 480000 },
      isFeatured: false,
      badgeText: "AMXMODX ⚡",
      isUltimate: false,
      features: [
        { text: "Barcha VIP va Premium imtiyozlari", active: true },
        { text: "Amxmodmenu orqali to'liq boshqaruv", active: true },
        { text: "Kick, Ban, Gag, Slay, Slap huquqlari", active: true },
        { text: "O'yinchilarni ko'chirish (Team swap)", active: true },
        { text: "Votemap va xaritani zudlik bilan almashtirish", active: true },
        { text: "Qizil rangdagi [ADMIN] statusi", active: true },
        { text: "Server hududiy konfiguratsiyasi", active: true },
        { text: "24/7 Server egasidan ko'mak", active: true }
      ]
    },
    {
      id: "cs16-ultimate",
      name: "BOSSLIK (GLAVNIY)",
      tagline: "Serverdagi mutlaq hukmronlik! Cheksiz kuch va to'liq immunitet.",
      basePrices: { "15d": 110000, "30d": 170000, "90d": 420000, "perm": 850000 },
      isFeatured: false,
      badgeText: "SERVER EGASI HUQUQI 👑",
      isUltimate: true,
      features: [
        { text: "Barcha mavjud imtiyozlar (VIP + Premium + Admin)", active: true },
        { text: "To'liq 100% Immunitet (Sizni hech kim jazolay olmaydi)", active: true },
        { text: "Maxsus oltin qurollar to'plami (Gold Deagle / Gold AK47)", active: true },
        { text: "Ixtiyoriy rang va istalgan matnda shaxsiy prefiks", active: true },
        { text: "Boshqa adminlarni kuzatish va nazorat qilish", active: true },
        { text: "Doimiy maxsus o'yinchi modeli (Custom Skin)", active: true },
        { text: "Yopiq VIP guruhiga a'zolik", active: true },
        { text: "Server egasi bilan doimiy aloqa va bonuslar", active: true }
      ]
    }
  ]
};

const SERVERS_LIST = {
  cs2: [
    { name: "[CYBERUZ] PUBLIC COMPETITIVE #1", ip: "cs2.cyberuz.uz:27015", map: "de_mirage", players: "28/32", ping: "14ms" },
    { name: "[CYBERUZ] DUST2 ONLY 24/7 128TICK", ip: "cs2.cyberuz.uz:27016", map: "de_dust2", players: "31/32", ping: "12ms" },
    { name: "[CYBERUZ] AWP BATTLE & RETAKE", ip: "cs2.cyberuz.uz:27017", map: "awp_india_cs2", players: "19/20", ping: "16ms" }
  ],
  cs16: [
    { name: "[CYBERUZ] CLASSIC PUBLIC 1.6 #1", ip: "cs16.cyberuz.uz:27015", map: "de_dust2", players: "32/32", ping: "8ms" },
    { name: "[CYBERUZ] CSDM + VAMPIRIZM FAST", ip: "cs16.cyberuz.uz:27016", map: "de_inferno", players: "27/32", ping: "11ms" },
    { name: "[CYBERUZ] GUNGAME TURBO 1.6", ip: "cs16.cyberuz.uz:27017", map: "gg_fy_pool_day", players: "21/24", ping: "9ms" }
  ]
};

const RECENT_PURCHASES = [
  { name: "Jasur_Pro", game: "CS2", tier: "PREMIUM (VIP+)", duration: "30 kun" },
  { name: "Uzbek_Sniper", game: "CS 1.6", tier: "ADMIN", duration: "90 kun" },
  { name: "Temur_Tashkent", game: "CS2", tier: "ULTIMATE (BOSS)", duration: "Doimiy" },
  { name: "Shoh_01", game: "CS 1.6", tier: "VIP CLASSIC", duration: "30 kun" },
  { name: "Samarkand_Killer", game: "CS2", tier: "PREMIUM (VIP+)", duration: "15 kun" },
  { name: "Bekzod_Eagle", game: "CS 1.6", tier: "BOSSLIK (GLAVNIY)", duration: "Doimiy" },
  { name: "Nodir_AWP", game: "CS2", tier: "ADMIN", duration: "30 kun" }
];

// Dastur holati (State)
let currentState = {
  currentGame: "cs2",
  selectedDurations: {
    "cs2-vip": "30d",
    "cs2-premium": "30d",
    "cs2-admin": "30d",
    "cs2-ultimate": "30d",
    "cs16-vip": "30d",
    "cs16-premium": "30d",
    "cs16-admin": "30d",
    "cs16-ultimate": "30d"
  },
  soundEnabled: true,
  discountPercentage: 50,
  activeCheckout: null
};

// ==========================================================================
// WEB AUDIO API - TOVUSHLAR (SYNTHESIZED SOUNDS)
// ==========================================================================
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  playClick() {
    if (!currentState.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {
      console.warn("Audio error", e);
    }
  }

  playSuccess() {
    if (!currentState.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, index) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + index * 0.08);

        gain.gain.setValueAtTime(0.15, now + index * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.01, now + index * 0.08 + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + index * 0.08);
        osc.stop(now + index * 0.08 + 0.25);
      });
    } catch (e) {
      console.warn("Audio error", e);
    }
  }

  playFire() {
    if (!currentState.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.2);

      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    } catch (e) {
      console.warn("Audio error", e);
    }
  }
}

const sfx = new SoundFX();

// ==========================================================================
// HERO CANVAS FIRE SPARK PARTICLES ANIMATION
// ==========================================================================
function initHeroFireCanvas() {
  const canvas = document.getElementById("canvas-fire-sparks");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const particles = [];
  const maxParticles = 65;

  class FlameParticle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 20;
      this.size = Math.random() * 3 + 1.2;
      this.speedY = Math.random() * 1.5 + 0.6;
      this.speedX = (Math.random() - 0.5) * 1.2;
      this.alpha = Math.random() * 0.7 + 0.3;
      this.decay = Math.random() * 0.006 + 0.003;
      // Ranglar: olovrang, sariq, qizil
      const colors = [
        "rgba(255, 106, 0, ",
        "rgba(255, 170, 0, ",
        "rgba(255, 40, 50, ",
        "rgba(255, 220, 50, "
      ];
      this.colorBase = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.alpha -= this.decay;
      if (this.alpha <= 0 || this.y < 0) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.colorBase + this.alpha + ")";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#ff6a00";
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < maxParticles; i++) {
    const p = new FlameParticle();
    p.y = Math.random() * height; // initial distribution
    particles.push(p);
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// ==========================================================================
// 50% CHEGIRMA TAYMERI (COUNTDOWN TIMER)
// ==========================================================================
function initDiscountTimer() {
  // 3 soatlik avto-taymer
  let remainingSeconds = 3 * 3600 + 42 * 60 + 19;

  function update() {
    if (remainingSeconds <= 0) {
      remainingSeconds = 4 * 3600; // Reset for continuous campaign
    }
    remainingSeconds--;

    const hours = Math.floor(remainingSeconds / 3600);
    const mins = Math.floor((remainingSeconds % 3600) / 60);
    const secs = remainingSeconds % 60;

    const pad = n => (n < 10 ? "0" + n : n);
    const formatted = `${pad(hours)}:${pad(mins)}:${pad(secs)}`;

    const bannerTimer = document.getElementById("banner-timer");
    if (bannerTimer) bannerTimer.textContent = formatted;

    const popH = document.getElementById("popup-timer-hours");
    const popM = document.getElementById("popup-timer-mins");
    const popS = document.getElementById("popup-timer-secs");

    if (popH) popH.textContent = pad(hours);
    if (popM) popM.textContent = pad(mins);
    if (popS) popS.textContent = pad(secs);
  }

  update();
  setInterval(update, 1000);
}

// ==========================================================================
// NARXLARNI FORMATLASH VA HISOBLASH
// ==========================================================================
function formatSum(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
}

function calculateDiscountPrice(basePrice) {
  const discountAmount = Math.round(basePrice * (currentState.discountPercentage / 100));
  const finalPrice = basePrice - discountAmount;
  return { basePrice, finalPrice, discountAmount };
}

// ==========================================================================
// PRICING CARDS CHIQARISH VA MUDDATLARNI BOSHQARISH
// ==========================================================================
function renderPricingCards() {
  const container = document.getElementById("pricing-cards-container");
  if (!container) return;

  const currentTariffs = TARIFFS_DATA[currentState.currentGame];
  container.innerHTML = "";

  currentTariffs.forEach(tariff => {
    const activeDuration = currentState.selectedDurations[tariff.id] || "30d";
    const originalPrice = tariff.basePrices[activeDuration];
    const { finalPrice } = calculateDiscountPrice(originalPrice);

    const card = document.createElement("div");
    card.className = `pricing-card ${tariff.isFeatured ? "featured" : ""} ${tariff.isUltimate ? "ultimate" : ""}`;

    // Top badge agar mavjud bo'lsa
    let badgeHtml = "";
    if (tariff.badgeText) {
      badgeHtml = `<div class="card-badge-top">${tariff.badgeText}</div>`;
    }

    // Durations list
    const durationLabels = [
      { key: "15d", label: "15 kun" },
      { key: "30d", label: "30 kun" },
      { key: "90d", label: "90 kun" },
      { key: "perm", label: "Doimiy" }
    ];

    let durationsHtml = `<div class="duration-selector">`;
    durationLabels.forEach(dur => {
      const isSelected = activeDuration === dur.key ? "active" : "";
      durationsHtml += `
        <button type="button" class="duration-pill ${isSelected}" data-tariff-id="${tariff.id}" data-duration="${dur.key}">
          ${dur.label}
        </button>
      `;
    });
    durationsHtml += `</div>`;

    // Features list
    let featuresHtml = `<ul class="features-list">`;
    tariff.features.forEach(f => {
      if (f.active) {
        featuresHtml += `
          <li>
            <span class="feat-icon">⚡</span>
            <span>${f.text}</span>
          </li>
        `;
      } else {
        featuresHtml += `
          <li class="dimmed">
            <span class="feat-icon">✕</span>
            <span>${f.text}</span>
          </li>
        `;
      }
    });
    featuresHtml += `</ul>`;

    card.innerHTML = `
      ${badgeHtml}
      <div class="pricing-card-header">
        <h3 class="tier-name">${tariff.name}</h3>
        <p class="tier-tagline">${tariff.tagline}</p>
      </div>

      ${durationsHtml}

      <div class="pricing-price-box">
        <div class="price-strike-wrap">
          <span class="old-price">${formatSum(originalPrice)}</span>
          <span class="discount-cut">-50% CHEGIRMA</span>
        </div>
        <div class="current-price">
          ${formatSum(finalPrice).split(" ")[0]}
          <span>${formatSum(finalPrice).split(" ").slice(1).join(" ")}</span>
        </div>
      </div>

      ${featuresHtml}

      <button type="button" class="btn-buy-card" data-tariff-id="${tariff.id}">
        <span>XARID QILISH</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    `;

    container.appendChild(card);
  });

  // Muddat tugmalariga hodisalar qo'shish
  document.querySelectorAll(".duration-pill").forEach(pill => {
    pill.addEventListener("click", e => {
      e.stopPropagation();
      sfx.playClick();
      const tariffId = pill.dataset.tariffId;
      const durationKey = pill.dataset.duration;
      currentState.selectedDurations[tariffId] = durationKey;
      renderPricingCards();
    });
  });

  // Xarid qilish tugmalariga hodisalar
  document.querySelectorAll(".btn-buy-card").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      sfx.playFire();
      const tariffId = btn.dataset.tariffId;
      openCheckoutModal(tariffId);
    });
  });
}

// ==========================================================================
// SERVERLAR MONITORI CHIQARISH
// ==========================================================================
function renderServerMonitor() {
  const container = document.getElementById("servers-list-container");
  if (!container) return;

  const currentServers = SERVERS_LIST[currentState.currentGame];
  container.innerHTML = "";

  currentServers.forEach(srv => {
    const card = document.createElement("div");
    card.className = "server-card";

    // Progress foizi
    const [cur, max] = srv.players.split("/").map(Number);
    const percent = Math.min(100, Math.round((cur / max) * 100));

    card.innerHTML = `
      <div class="sc-header">
        <span class="sc-game-badge">${currentState.currentGame === "cs2" ? "CS2 SERVER" : "CS 1.6 SERVER"}</span>
        <span class="sc-online-count">
          <span class="status-dot"></span>
          ${srv.players} O'yinchilar
        </span>
      </div>
      <h4 class="sc-title">${srv.name}</h4>
      <p class="sc-map">Xarita: <strong>${srv.map}</strong> | Ping: <strong>${srv.ping}</strong></p>
      
      <div class="sc-progress-bar">
        <div class="sc-progress-fill" style="width: ${percent}%;"></div>
      </div>

      <div class="sc-ip-box">
        <span class="sc-ip-text">${srv.ip}</span>
        <button class="btn-copy-ip-sm" data-ip="${srv.ip}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          Nusxalash
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  // IP nusxalash tugmalari
  container.querySelectorAll(".btn-copy-ip-sm").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      sfx.playClick();
      const ip = btn.dataset.ip;
      copyToClipboard(`connect ${ip}`, `IP nusxalandi! Konsolga "connect ${ip}" deb yozing`);
    });
  });
}

// ==========================================================================
// TO'LOV VA BUYURTMA MODALI (CHECKOUT MODAL)
// ==========================================================================
function openCheckoutModal(tariffId) {
  const currentTariffs = TARIFFS_DATA[currentState.currentGame];
  const tariff = currentTariffs.find(t => t.id === tariffId);
  if (!tariff) return;

  const durationKey = currentState.selectedDurations[tariffId] || "30d";
  const durationTextMap = { "15d": "15 kun", "30d": "30 kun (1 oy)", "90d": "90 kun (3 oy)", "perm": "Doimiy (Umrbod)" };
  const durationText = durationTextMap[durationKey];

  const originalPrice = tariff.basePrices[durationKey];
  const { finalPrice } = calculateDiscountPrice(originalPrice);

  currentState.activeCheckout = {
    tariff,
    durationKey,
    durationText,
    originalPrice,
    finalPrice,
    game: currentState.currentGame.toUpperCase()
  };

  // Modal ma'lumotlarini to'ldirish
  document.getElementById("modal-checkout-game").textContent = currentState.currentGame === "cs2" ? "Counter-Strike 2" : "Counter-Strike 1.6";
  document.getElementById("modal-checkout-tier").textContent = tariff.name;
  document.getElementById("modal-checkout-duration").textContent = durationText;
  document.getElementById("modal-checkout-old-price").textContent = formatSum(originalPrice);
  document.getElementById("modal-checkout-final-price").textContent = formatSum(finalPrice);
  document.getElementById("btn-pay-amount").textContent = formatSum(finalPrice);

  // CS 1.6 bo'lsa parol talab qilinadi (setinfo _pw), CS2 bo'lsa Steam ID/Nick
  const passwordGroup = document.getElementById("field-password-group");
  const nicknameLabel = document.getElementById("label-nickname");
  if (currentState.currentGame === "cs16") {
    passwordGroup.style.display = "block";
    nicknameLabel.innerHTML = `O'yinchi niki (CS 1.6 Nickname) <span>*</span>`;
  } else {
    passwordGroup.style.display = "none";
    nicknameLabel.innerHTML = `Steam ID yoki O'yinchi Niki (CS2) <span>*</span>`;
  }

  // To'lov formasi holatini tiklash (agar oldin success bo'lgan bo'lsa)
  document.getElementById("checkout-form-step").style.display = "block";
  document.getElementById("checkout-success-step").style.display = "none";

  const modal = document.getElementById("checkout-modal-overlay");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkout-modal-overlay");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// To'lovni amalga oshirish jarayoni
function processPayment() {
  const nickInput = document.getElementById("input-player-nick");
  const contactInput = document.getElementById("input-player-contact");
  const passInput = document.getElementById("input-player-password");
  const cardInput = document.getElementById("input-card-number");

  if (!nickInput.value.trim()) {
    showToast("⚠️ Iltimos, serverdagi o'yinchi niki yoki SteamID ni kiriting!", "warning");
    nickInput.focus();
    return;
  }

  if (currentState.currentGame === "cs16" && !passInput.value.trim()) {
    showToast("⚠️ Iltimos, xavfsizlik uchun parolni kiriting!", "warning");
    passInput.focus();
    return;
  }

  const payBtn = document.getElementById("btn-submit-payment");
  const originalBtnText = payBtn.innerHTML;

  payBtn.disabled = true;
  payBtn.innerHTML = `
    <span class="spinner" style="display:inline-block; animation: spin 1s infinite linear;">⚙️</span>
    To'lov amalga oshirilmoqda...
  `;

  sfx.playClick();

  // Emulyatsiya (Server so'rovi va to'lov tekshiruvi)
  setTimeout(() => {
    payBtn.disabled = false;
    payBtn.innerHTML = originalBtnText;

    // Muvaffaqiyatli to'lov ekrani
    showPaymentSuccess({
      nick: nickInput.value.trim(),
      password: passInput.value.trim() || "avto-steam",
      contact: contactInput.value.trim() || "@foydalanuvchi",
      cardNumber: cardInput.value.trim() || "8600 **** **** 4819"
    });

    sfx.playSuccess();
  }, 1600);
}

function showPaymentSuccess(details) {
  const formStep = document.getElementById("checkout-form-step");
  const successStep = document.getElementById("checkout-success-step");

  formStep.style.display = "none";
  successStep.style.display = "block";

  const checkout = currentState.activeCheckout;
  const orderId = "CYB-" + Math.floor(100000 + Math.random() * 900000);
  const now = new Date();
  const dateStr = now.toLocaleDateString("uz-UZ") + " " + now.toLocaleTimeString("uz-UZ");

  document.getElementById("res-order-id").textContent = orderId;
  document.getElementById("res-date").textContent = dateStr;
  document.getElementById("res-tier").textContent = `${checkout.game} - ${checkout.tariff.name} (${checkout.durationText})`;
  document.getElementById("res-nick").textContent = details.nick;
  document.getElementById("res-amount").textContent = formatSum(checkout.finalPrice);

  const consoleBox = document.getElementById("console-activation-command");
  if (currentState.currentGame === "cs16") {
    consoleBox.innerHTML = `setinfo _pw "${details.password}"`;
    document.getElementById("console-instruction-text").textContent = "CS 1.6 konsoliga quyidagi buyruqni kiriting:";
  } else {
    consoleBox.innerHTML = `bind f4 "say /menu"`;
    document.getElementById("console-instruction-text").textContent = "CS2 serveriga kirgach konsolga kiriting:";
  }

  // Telegram botga yuborish havolasi
  const tgBtn = document.getElementById("btn-tg-receipt");
  if (tgBtn) {
    const tgMsg = encodeURIComponent(
      `🔥 SALOM ADMIN! Men CYBERUZ saytidan 50% chegirmada obuna xarid qildim!\n\n` +
      `🆔 Buyurtma: ${orderId}\n` +
      `🎮 O'yin: ${checkout.game}\n` +
      `⚡ Tarif: ${checkout.tariff.name}\n` +
      `⏳ Muddat: ${checkout.durationText}\n` +
      `👤 Nick: ${details.nick}\n` +
      `💰 To'langan summa: ${formatSum(checkout.finalPrice)}\n\n` +
      `Iltimos, tasdiqlab bering!`
    );
    tgBtn.href = `https://t.me/cyberuz_admin?text=${tgMsg}`;
  }

  showToast("🎉 To'lov muvaffaqiyatli amalga oshirildi!", "success");
}

// ==========================================================================
// 50% CHEGIRMA POPUP (WELCOME MODAL)
// ==========================================================================
function initWelcomeDiscountPopup() {
  const modal = document.getElementById("welcome-discount-modal-overlay");
  if (!modal) return;

  // Agar foydalanuvchi saytga birinchi marta kirayotgan bo'lsa yoki 1 soniyadan so'ng ochiladi
  setTimeout(() => {
    const isDismissed = sessionStorage.getItem("discount_popup_closed");
    if (!isDismissed) {
      modal.classList.add("active");
      sfx.playFire();
    }
  }, 900);

  const closeBtn = document.getElementById("btn-close-welcome-modal");
  const claimBtn = document.getElementById("btn-claim-discount");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      sessionStorage.setItem("discount_popup_closed", "true");
      sfx.playClick();
    });
  }

  if (claimBtn) {
    claimBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      sessionStorage.setItem("discount_popup_closed", "true");
      sfx.playSuccess();
      const pricingSec = document.getElementById("tariffs-section");
      if (pricingSec) {
        pricingSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

// ==========================================================================
// REAL-TIME XARIDLAR BILDIRISHNOMASI (LIVE RECENT PURCHASES)
// ==========================================================================
function initRecentPurchasesToast() {
  const toast = document.getElementById("recent-purchase-toast");
  if (!toast) return;

  let index = 0;

  function showNextPurchase() {
    const item = RECENT_PURCHASES[index];
    index = (index + 1) % RECENT_PURCHASES.length;

    document.getElementById("toast-buyer-name").textContent = item.name;
    document.getElementById("toast-purchase-details").textContent = `${item.game} [${item.tier}] (${item.duration}) - 50% Chegirma`;

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 5500);
  }

  // Har 16 soniyada yangi xarid ko'rsatiladi
  setTimeout(showNextPurchase, 4000);
  setInterval(showNextPurchase, 18000);
}

// ==========================================================================
// FAQ ACCORDION
// ==========================================================================
function initFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      sfx.playClick();
      const isActive = item.classList.contains("active");
      // Barcha boshqalarni yopish
      items.forEach(i => i.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// ==========================================================================
// NUSXALASH VA TOAST XABARNOMALARI
// ==========================================================================
function copyToClipboard(text, successMsg = "Nusxalandi!") {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("📋 " + successMsg, "success");
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    showToast("📋 " + successMsg, "success");
  } catch (err) {
    showToast("Nusxalashda xatolik yuz berdi", "warning");
  }
  document.body.removeChild(textArea);
}

function showToast(message, type = "success") {
  const existingToast = document.querySelector(".system-feedback-toast");
  if (existingToast) existingToast.remove();

  const toast = document.createElement("div");
  toast.className = `system-feedback-toast ${type}`;
  toast.style.cssText = `
    position: fixed;
    top: 30px;
    right: 30px;
    background: #0d0f16;
    border: 1px solid ${type === "success" ? "#10b981" : "#ff6a00"};
    color: #ffffff;
    padding: 14px 20px;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 700;
    box-shadow: 0 10px 30px rgba(0,0,0,0.8), 0 0 15px ${type === "success" ? "rgba(16,185,129,0.3)" : "rgba(255,106,0,0.3)"};
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 10px;
    animation: fadeIn 0.3s ease;
  `;
  toast.innerHTML = message;

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================================================
// TO'LOV KARTA FORMATLASH VA USULLARNI TANLASH
// ==========================================================================
function initPaymentMethodSelector() {
  const methods = document.querySelectorAll(".payment-method-card");
  methods.forEach(card => {
    card.addEventListener("click", () => {
      sfx.playClick();
      methods.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
    });
  });

  const cardInput = document.getElementById("input-card-number");
  if (cardInput) {
    cardInput.addEventListener("input", e => {
      let val = e.target.value.replace(/\D/g, "");
      let formatted = "";
      for (let i = 0; i < val.length && i < 16; i++) {
        if (i > 0 && i % 4 === 0) formatted += " ";
        formatted += val[i];
      }
      e.target.value = formatted;
    });
  }

  const expInput = document.getElementById("input-card-exp");
  if (expInput) {
    expInput.addEventListener("input", e => {
      let val = e.target.value.replace(/\D/g, "");
      if (val.length >= 2) {
        val = val.substring(0, 2) + "/" + val.substring(2, 4);
      }
      e.target.value = val.substring(0, 5);
    });
  }
}

// ==========================================================================
// INIZIALIZATSIYA (DOM READY)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Canvas particle effekti
  initHeroFireCanvas();

  // 50% Chegirma taymeri
  initDiscountTimer();

  // Boshlang'ich tariflar va serverlarni chizish
  renderPricingCards();
  renderServerMonitor();

  // FAQ va Xarid notifikatsiyasi
  initFaqAccordion();
  initRecentPurchasesToast();
  initWelcomeDiscountPopup();
  initPaymentMethodSelector();

  // O'yin almashish tugmalari (CS2 vs CS 1.6)
  const tabCs2 = document.getElementById("tab-game-cs2");
  const tabCs16 = document.getElementById("tab-game-cs16");
  const serverFilterSelect = document.getElementById("select-server-filter");

  if (tabCs2 && tabCs16) {
    tabCs2.addEventListener("click", () => {
      if (currentState.currentGame === "cs2") return;
      sfx.playFire();
      currentState.currentGame = "cs2";
      tabCs2.classList.add("active");
      tabCs16.classList.remove("active");
      if (serverFilterSelect) serverFilterSelect.value = "cs2_all";
      renderPricingCards();
      renderServerMonitor();
    });

    tabCs16.addEventListener("click", () => {
      if (currentState.currentGame === "cs16") return;
      sfx.playFire();
      currentState.currentGame = "cs16";
      tabCs16.classList.add("active");
      tabCs2.classList.remove("active");
      if (serverFilterSelect) serverFilterSelect.value = "cs16_all";
      renderPricingCards();
      renderServerMonitor();
    });
  }

  // Server Filter Select
  if (serverFilterSelect) {
    serverFilterSelect.addEventListener("change", e => {
      sfx.playClick();
      const val = e.target.value;
      if (val.startsWith("cs16") && currentState.currentGame !== "cs16") {
        currentState.currentGame = "cs16";
        tabCs16.classList.add("active");
        tabCs2.classList.remove("active");
      } else if (val.startsWith("cs2") && currentState.currentGame !== "cs2") {
        currentState.currentGame = "cs2";
        tabCs2.classList.add("active");
        tabCs16.classList.remove("active");
      }
      renderPricingCards();
      renderServerMonitor();
    });
  }

  // Ovoz yoqish/o'chirish
  const soundBtn = document.getElementById("btn-toggle-sound");
  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      currentState.soundEnabled = !currentState.soundEnabled;
      soundBtn.textContent = currentState.soundEnabled ? "🔊" : "🔇";
      showToast(currentState.soundEnabled ? "Ovoz effektlari yoqildi" : "Ovoz effektlari o'chirildi");
    });
  }

  // Modal yopish tugmalari
  const modalCloseBtn = document.getElementById("btn-close-checkout-modal");
  const modalOverlay = document.getElementById("checkout-modal-overlay");
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeCheckoutModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener("click", e => {
      if (e.target === modalOverlay) closeCheckoutModal();
    });
  }

  // To'lovni yakunlash tugmasi
  const submitPayBtn = document.getElementById("btn-submit-payment");
  if (submitPayBtn) {
    submitPayBtn.addEventListener("click", processPayment);
  }

  // Konsol buyrug'ini nusxalash
  const copyConsoleBtn = document.getElementById("btn-copy-console-cmd");
  if (copyConsoleBtn) {
    copyConsoleBtn.addEventListener("click", () => {
      sfx.playClick();
      const cmd = document.getElementById("console-activation-command").textContent;
      copyToClipboard(cmd, "Konsol buyrug'i nusxalandi!");
    });
  }

  // Top banner xaridga o'tish tugmasi
  const bannerGoBtn = document.getElementById("banner-claim-btn");
  if (bannerGoBtn) {
    bannerGoBtn.addEventListener("click", () => {
      sfx.playClick();
      document.getElementById("tariffs-section").scrollIntoView({ behavior: "smooth" });
    });
  }

  // Quick IP copy buttons in hero
  document.querySelectorAll(".btn-copy-ip-hero").forEach(btn => {
    btn.addEventListener("click", () => {
      sfx.playClick();
      const ip = btn.dataset.ip;
      copyToClipboard(`connect ${ip}`, `IP nusxalandi! Konsolga "connect ${ip}" deb yozing`);
    });
  });

  // Header scroll effekti
  const header = document.querySelector(".main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
