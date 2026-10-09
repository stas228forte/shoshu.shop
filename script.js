const sneakers = [
  { id: "nike-air-max-95", name: "Nike Air Max 95", brand: "Nike", type: "Лайфстайл", price: 7200,
    material: "Нубук / сітка", weight: "380 г",
    img: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7e073569-6bd7-41c4-b494-6f01b5a5deeb/NIKE+AIR+MAX+95+BIG+BUBBLE.png",
    colors: [{ name: "Чорний", hex: "#111111" }, { name: "Сірий", hex: "#9a9a9a" }, { name: "Неон", hex: "#c6ff2e" }] },

  { id: "nike-air-max-270", name: "Nike Air Max 270", brand: "Nike", type: "Лайфстайл", price: 6900,
    material: "Текстиль / синтетика", weight: "340 г",
    img:  "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bc50ac51-d386-4c89-ba79-54fa9507ba67/NIKE+AIR+MAX+270+%28GS%29.png",
    colors: [{ name: "Білий", hex: "#f4f4f4" }, { name: "Чорний", hex: "#111111" }, { name: "Червоний", hex: "#c62828" }] },

  { id: "nike-dunk-low", name: "Nike Dunk Low", brand: "Nike", type: "Скейт / лайфстайл", price: 5600,
    material: "Шкіра", weight: "320 г",
    img:  "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e170a514-a185-4298-8948-bbec39f752e9/NIKE+DUNK+LOW+RETRO.png",
    colors: [{ name: "Панда", hex: "#efefef" }, { name: "Чорний", hex: "#111111" }, { name: "Університетський синій", hex: "#2e5bff" }] },

  { id: "air-jordan-1-low", name: "Nike Air Jordan 1 Low", brand: "Nike", type: "Баскетбольна класика", price: 6300,
    material: "Шкіра", weight: "330 г",
    img:  "https://static.ftshp.digital/img/p/1/8/4/7/5/3/9/1847539-thickbox.jpg",
    colors: [{ name: "Чорний/червоний", hex: "#1a1a1a" }, { name: "Білий/чорний", hex: "#eeeeee" }, { name: "Пісочний", hex: "#d8c9ae" }] },

  { id: "adidas-samba-og", name: "Adidas Samba OG", brand: "Adidas", type: "Футзал", price: 4800,
    material: "Шкіра / замша", weight: "300 г",
    img:  "https://yesoriginal.com.ua/media/cache/catalog/products/9b/bf/a1/1300043-3212677-1600x1684_-jpg-84.webp",
    colors: [{ name: "Чорний/білий", hex: "#161616" }, { name: "Кремовий", hex: "#efe6d8" }, { name: "Зелений", hex: "#2f5d3a" }] },

  { id: "adidas-campus-00s", name: "Adidas Campus 00s", brand: "Adidas", type: "Скейт", price: 4600,
    material: "Замша", weight: "310 г",
    img:  "https://static.ftshp.digital/img/p/8/3/4/1/1/8/834118-thickbox.jpg",
    colors: [{ name: "Коричневий", hex: "#6b4a2f" }, { name: "Сірий", hex: "#8f8f8f" }, { name: "Чорний", hex: "#111111" }] },

  { id: "adidas-forum-low", name: "Adidas Forum Low", brand: "Adidas", type: "Баскетбольна класика", price: 4900,
    material: "Шкіра", weight: "360 г",
    img:  "https://werare.com.ua/image/catalog/i/aj/al/90b7297cd19158181d085fa3cdff99eb.jpg",
    colors: [{ name: "Білий", hex: "#f4f4f4" }, { name: "Блакитний", hex: "#8fd3e8" }, { name: "Чорний", hex: "#111111" }] },

  { id: "adidas-ultraboost-5", name: "Adidas Ultraboost 5", brand: "Adidas", type: "Біг", price: 8500,
    material: "Primeknit", weight: "290 г",
    img:  "https://gfx.r-gol.com/media/res/products/825/199825/465x605/id8817_3.webp",
    colors: [{ name: "Чорний", hex: "#111111" }, { name: "Білий", hex: "#f4f4f4" }, { name: "Синій", hex: "#1f3a93" }] },

  { id: "nb-530", name: "New Balance 530", brand: "New Balance", type: "Біг / лайфстайл", price: 4700,
    material: "Сітка / шкіра", weight: "310 г",
    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjno1mVp25OI-r8ctwg7BlrQ1M_8GIfmWKsixp77Xtqg_EpUcFxMD6Cxss&s=10",
    colors: [{ name: "Білий/сірий", hex: "#dedede" }, { name: "Сталевий", hex: "#7c8894" }, { name: "Чорний", hex: "#111111" }] },

  { id: "nb-550", name: "New Balance 550", brand: "New Balance", type: "Баскетбольна класика", price: 5400,
    material: "Шкіра", weight: "350 г",
    img:  "https://shopneon.com/cdn/shop/files/bb550pwg_1_1.jpg?v=1752324469&width=1200",
    colors: [{ name: "Білий/зелений", hex: "#eef0ea" }, { name: "Кремовий", hex: "#efe6d8" }, { name: "Чорний", hex: "#111111" }] },

  { id: "nb-9060", name: "New Balance 9060", brand: "New Balance", type: "Лайфстайл", price: 6800,
    material: "Сітка / замша", weight: "300 г",
    img:  "https://static.ftshp.digital/img/p/1/4/8/5/0/6/4/1485064-thickbox.jpg",
    colors: [{ name: "Сірий туман", hex: "#b9b9b9" }, { name: "Пісочний", hex: "#d8c9ae" }, { name: "Чорний", hex: "#111111" }] },

  { id: "asics-gel-kayano-14", name: "ASICS GEL-Kayano 14", brand: "ASICS", type: "Біг", price: 6500,
    material: "Сітка / TPU", weight: "330 г",
    img:  "https://vzutistore.com.ua/15838-large_default/asics-gel-kayano-14-white-ivory.jpg",
    colors: [{ name: "Сріблястий", hex: "#c7c9cc" }, { name: "Синій", hex: "#2e5bff" }, { name: "Чорний", hex: "#111111" }] },

  { id: "asics-gel-1130", name: "ASICS GEL-1130", brand: "ASICS", type: "Біг / лайфстайл", price: 4900,
    material: "Сітка", weight: "290 г",
    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwqEpj9c9zPJJ6NmT4QTjxDiAvEtHzcHvlBdrLqFuxS6L00vftFi_aEgW8&s=10",
    colors: [{ name: "Білий", hex: "#f4f4f4" }, { name: "Кремовий", hex: "#efe6d8" }, { name: "Чорний", hex: "#111111" }] },

  { id: "raf-simons-orion", name: "Raf Simons Orion", brand: "Raf Simons", type: "Авангардний дизайн", price: 15400,
    material: "Телячий нубук", weight: "370 г",
    img:  "https://img2.ans-media.com/i/430x645/AA00-OBU00S-99X_F1.jpg?v=1684728754",
    colors: [{ name: "Чорний", hex: "#111111" }, { name: "Білий", hex: "#f4f4f4" }, { name: "Жовтий акцент", hex: "#e8c94a" }] },

  { id: "puma-suede-classic", name: "Puma Suede Classic XXI", brand: "Puma", type: "Лайфстайл класика", price: 3200,
    material: "Замша", weight: "300 г",
    img:  "https://images.puma.net/images/399781/34/sv01/fnd/UKR/",
    colors: [{ name: "Чорний", hex: "#111111" }, { name: "Бордовий", hex: "#7a1f2b" }, { name: "Білий", hex: "#f4f4f4" }] },
];

const catalogEl = document.getElementById("catalog");

function renderCatalog(list) {
  catalogEl.innerHTML = list.map(s => `
    <article class="card" data-id="${s.id}">
      <div class="card-img"><img src="${s.img || 'img/' + s.id + '.jpg'}" alt="${s.name}" loading="lazy"></div>
      <div class="card-body">
        <div class="card-top"><h3>${s.name}</h3><b>₴${s.price.toLocaleString("uk-UA")}</b></div>
        <dl class="specs">
          <div><dt>БРЕНД</dt><dd>${s.brand}</dd></div>
          <div><dt>ТИП</dt><dd>${s.type}</dd></div>
        </dl>
        <div class="card-foot"><span class="pill">В НАЯВНОСТІ</span><a class="buy" href="#" data-action="buy">КУПИТИ</a></div>
      </div>
    </article>`).join("");
}
renderCatalog(sneakers);

const overlay = document.getElementById("overlay");
const overlayPanel = document.getElementById("overlay-panel");

function openOverlay(html, panelClass) {
  overlayPanel.className = "overlay-panel " + (panelClass || "");
  overlayPanel.innerHTML = html;
  overlay.hidden = false;
  document.body.classList.add("no-scroll");
  requestAnimationFrame(() => overlay.classList.add("open"));
  const focusable = overlayPanel.querySelector("input, button, a");
  if (focusable) focusable.focus();
}

function closeOverlay() {
  overlay.classList.remove("open");
  document.body.classList.remove("no-scroll");
  setTimeout(() => {
    overlay.hidden = true;
    overlayPanel.innerHTML = "";
  }, 180);
}

const closeBtnHTML = `<button class="overlay-close" data-action="close" aria-label="Закрити">✕</button>`;

const SIZES = ["EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"];
const DEFAULT_COLORS = [{ name: "Чорний", hex: "#111111" }, { name: "Білий", hex: "#f4f4f4" }, { name: "Сірий", hex: "#9a9a9a" }];

function getProductFromCard(cardEl) {
  const id = cardEl.dataset.id;
  const known = sneakers.find(s => s.id === id);
  if (known) return known;

  const name = cardEl.querySelector("h3")?.textContent.trim() || "Товар";
  const priceText = cardEl.querySelector(".card-top b")?.textContent.replace(/[^\d]/g, "") || "0";
  const img = cardEl.querySelector(".card-img img")?.getAttribute("src") || "";
  const specs = [...cardEl.querySelectorAll(".specs > div")].map(div => [
    div.querySelector("dt")?.textContent.trim(),
    div.querySelector("dd")?.textContent.trim()
  ]);
  return {
    id: null,
    name,
    price: parseInt(priceText, 10) || 0,
    img,
    material: specs.find(([k]) => /МАТЕРІАЛ/i.test(k))?.[1] || "—",
    weight: specs.find(([k]) => /ВАГА/i.test(k))?.[1] || "—",
    colors: DEFAULT_COLORS
  };
}

let selectedSize = null;

function openProductModal(cardEl) {
  const p = getProductFromCard(cardEl);
  const imgSrc = p.img || `img/${p.id}.jpg`;
  const colors = p.colors && p.colors.length ? p.colors : DEFAULT_COLORS;
  const preselectedSize = selectedSize && SIZES.includes(selectedSize) ? selectedSize : "EU 42";

  const html = `
    ${closeBtnHTML}
    <div class="modal-grid" data-name="${p.name}" data-price="${p.price}">
      <div class="modal-img"><img src="${imgSrc}" alt="${p.name}"></div>
      <div class="modal-info">
        <p class="tag">[ ОФОРМЛЕННЯ ЗАМОВЛЕННЯ ]</p>
        <h3 class="modal-title">${p.name}</h3>
        <p class="modal-price">₴${p.price.toLocaleString("uk-UA")}</p>

        <dl class="specs modal-specs">
          <div><dt>МАТЕРІАЛ</dt><dd>${p.material}</dd></div>
          <div><dt>ВАГА</dt><dd>${p.weight}</dd></div>
        </dl>

        <p class="modal-label">Колір</p>
        <div class="swatches">
          ${colors.map((c, i) => `
            <button type="button" class="swatch ${i === 0 ? "selected" : ""}" data-action="select-color"
              data-name="${c.name}" style="background:${c.hex}" title="${c.name}" aria-label="${c.name}"></button>
          `).join("")}
        </div>
        <p class="mono small muted swatch-label" data-color-label>${colors[0].name}</p>

        <p class="modal-label">Розмір</p>
        <div class="size-btns">
          ${SIZES.map(sz => `
            <button type="button" class="size-btn ${sz === preselectedSize ? "selected" : ""}" data-action="select-size">${sz.replace("EU ", "")}</button>
          `).join("")}
        </div>

        <button type="button" class="btn btn-black modal-submit" data-action="submit-order">Оформити покупку <span>→</span></button>
      </div>
    </div>`;
  openOverlay(html, "panel-product");
}

function selectColor(btn) {
  btn.parentElement.querySelectorAll(".swatch").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  const label = overlayPanel.querySelector("[data-color-label]");
  if (label) label.textContent = btn.dataset.name;
}

function selectSizeInModal(btn) {
  btn.parentElement.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
}

function submitOrder() {
  const root = overlayPanel.querySelector(".modal-grid");
  if (!root) return;
  const name = root.dataset.name;
  const price = parseInt(root.dataset.price, 10) || 0;
  const color = overlayPanel.querySelector(".swatch.selected")?.dataset.name || "—";
  const sizeBtn = overlayPanel.querySelector(".size-btn.selected");
  const size = sizeBtn ? "EU " + sizeBtn.textContent.trim() : "—";

  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = String((parseInt(cartCount.textContent, 10) || 0) + 1);

  overlayPanel.innerHTML = `
    ${closeBtnHTML}
    <div class="modal-success">
      <div class="success-icon">✓</div>
      <p class="tag center">[ ЗАМОВЛЕННЯ ПРИЙНЯТО ]</p>
      <h3 class="modal-title center">Дякуємо за покупку</h3>
      <p class="success-line mono small">${name} · ${color} · ${size}</p>
      <p class="success-price">₴${price.toLocaleString("uk-UA")}</p>
      <button type="button" class="btn btn-outline" data-action="close">Закрити</button>
    </div>`;
}

function openHeroSpecs() {
  const hero = document.querySelector(".hero");
  const name = hero.querySelector("h1").textContent.trim();
  const lead = hero.querySelector(".lead").textContent.trim();
  const img = hero.querySelector(".hero-media img").getAttribute("src");
  const specs = [...hero.querySelectorAll(".spec-box dl > div")].map(div => [
    div.querySelector("dt").textContent.trim(),
    div.querySelector("dd").textContent.trim()
  ]);

  const html = `
    ${closeBtnHTML}
    <div class="modal-grid">
      <div class="modal-img"><img src="${img}" alt="${name}"></div>
      <div class="modal-info">
        <p class="tag">[ ДРОП_088 // ХАРАКТЕРИСТИКИ ]</p>
        <h3 class="modal-title">${name}</h3>
        <p class="modal-desc">${lead}</p>
        <dl class="specs modal-specs">
          ${specs.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}
        </dl>
        <button type="button" class="btn btn-black modal-submit" data-action="close">Зрозуміло</button>
      </div>
    </div>`;
  openOverlay(html, "panel-product");
}

const sizeNote = document.getElementById("size-note");

document.querySelectorAll("#size-table tr").forEach(tr => {
  tr.addEventListener("click", () => {
    document.querySelectorAll("#size-table tr").forEach(r => r.classList.remove("selected"));
    tr.classList.add("selected");
    const eu = tr.children[0].textContent.trim();
    const us = tr.children[1].textContent.trim();
    selectedSize = eu;
    sizeNote.textContent = `Обрано: ${eu} (${us}) — цей розмір підставиться в кошик автоматично`;
  });
});

function openScanIntro() {
  const html = `
    ${closeBtnHTML}
    <div class="modal-scan">
      <p class="tag">[ SHOSHU SCAN // РЕАЛЬНИЙ ЧАС ]</p>
      <h3 class="modal-title">Сканування стопи</h3>
      <p class="modal-desc">Наведіть камеру телефону на стопу зі шкарпеткою, стоячи на аркуші паперу А4. Сканування визначить довжину стопи та підбере точний розмір Shoshu.</p>
      <div class="scan-visual"><div class="scan-line"></div></div>
      <button type="button" class="btn btn-black modal-submit" data-action="start-scan">Почати сканування <span>→</span></button>
    </div>`;
  openOverlay(html, "panel-scan");
}

function startScan() {
  const steps = [
    "Ініціалізація камери…",
    "Пошук контуру стопи…",
    "Вимірювання довжини та ширини…",
    "Підбір найближчого розміру Shoshu…"
  ];
  overlayPanel.innerHTML = `
    ${closeBtnHTML}
    <div class="modal-scan">
      <p class="tag">[ SHOSHU SCAN ]</p>
      <h3 class="modal-title">Сканування…</h3>
      <div class="scan-visual scanning"><div class="scan-line"></div></div>
      <p class="mono small scan-status" id="scan-status">${steps[0]}</p>
      <div class="scan-progress"><div class="scan-progress-bar" id="scan-bar"></div></div>
    </div>`;

  const statusEl = document.getElementById("scan-status");
  const barEl = document.getElementById("scan-bar");
  let i = 0;
  const interval = setInterval(() => {
    i++;
    if (i < steps.length) {
      statusEl.textContent = steps[i];
      barEl.style.width = Math.round(((i + 1) / steps.length) * 100) + "%";
    } else {
      clearInterval(interval);
      finishScan();
    }
  }, 650);
  barEl.style.width = Math.round((1 / steps.length) * 100) + "%";
}

function finishScan() {
  const table = [
    ["EU 39", "US 6.5", 245], ["EU 40", "US 7.5", 250], ["EU 41", "US 8", 260],
    ["EU 42", "US 9", 270], ["EU 43", "US 10", 280], ["EU 44", "US 11", 290], ["EU 45", "US 12", 300]
  ];
  const pick = table[Math.floor(Math.random() * table.length)];

  overlayPanel.innerHTML = `
    ${closeBtnHTML}
    <div class="modal-scan">
      <p class="tag">[ РЕЗУЛЬТАТ СКАНУВАННЯ ]</p>
      <h3 class="modal-title">Рекомендований розмір</h3>
      <p class="scan-result">${pick[0]}</p>
      <p class="mono small muted">${pick[1]} · довжина стопи ≈ ${pick[2]} mm</p>
      <div class="btn-row scan-actions">
        <button type="button" class="btn btn-black" data-action="apply-scan" data-eu="${pick[0]}" data-us="${pick[1]}">Застосувати розмір <span>→</span></button>
        <button type="button" class="btn btn-outline" data-action="close">Закрити</button>
      </div>
    </div>`;
}

function applyScan(btn) {
  const eu = btn.dataset.eu;
  const us = btn.dataset.us;
  selectedSize = eu;
  document.querySelectorAll("#size-table tr").forEach(r => {
    r.classList.toggle("selected", r.children[0].textContent.trim() === eu);
  });
  sizeNote.textContent = `Обрано: ${eu} (${us}) — результат сканування`;
  closeOverlay();
  document.getElementById("size-table").scrollIntoView({ behavior: "smooth", block: "center" });
}

let searchIndex = null;

function buildSearchIndex() {
  searchIndex = [...document.querySelectorAll(".card")].map(card => ({
    el: card,
    name: card.querySelector("h3")?.textContent.trim() || "",
    price: card.querySelector(".card-top b")?.textContent.trim() || "",
    img: card.querySelector(".card-img img")?.getAttribute("src") || "",
    brand: card.querySelector(".specs dd")?.textContent.trim() || ""
  }));
}

function openSearch() {
  if (!searchIndex) buildSearchIndex();
  const html = `
    ${closeBtnHTML}
    <div class="search-box">
      <p class="tag">[ ПОШУК // SHOSHU/SHOP ]</p>
      <input type="text" id="search-input" class="search-input" placeholder="Назва або бренд: Nike, Samba, GEL-1130…" autocomplete="off">
      <div class="search-results" id="search-results">
        <p class="mono small muted search-hint">Почніть вводити, щоб знайти кросівки</p>
      </div>
    </div>`;
  openOverlay(html, "panel-search");
}

function runSearch(query) {
  const resultsEl = document.getElementById("search-results");
  const q = query.trim().toLowerCase();
  if (!q) {
    resultsEl.innerHTML = `<p class="mono small muted search-hint">Почніть вводити, щоб знайти кросівки</p>`;
    return;
  }
  const matches = searchIndex.filter(item =>
    item.name.toLowerCase().includes(q) || item.brand.toLowerCase().includes(q)
  );
  if (!matches.length) {
    resultsEl.innerHTML = `<p class="mono small muted search-hint">Нічого не знайдено за запитом «${query}»</p>`;
    return;
  }
  resultsEl.innerHTML = matches.map((item, i) => `
    <button type="button" class="search-result" data-action="goto-card" data-index="${i}">
      <span class="search-result-img" style="background-image:url('${item.img}')"></span>
      <span class="search-result-text">
        <span class="search-result-name">${item.name}</span>
        <span class="mono small muted">${item.brand}</span>
      </span>
      <span class="search-result-price mono small">${item.price}</span>
    </button>
  `).join("");
  resultsEl.dataset.matches = JSON.stringify(matches.map(m => searchIndex.indexOf(m)));
}

function gotoCard(btn) {
  const idxList = JSON.parse(document.getElementById("search-results").dataset.matches || "[]");
  const realIndex = idxList[parseInt(btn.dataset.index, 10)];
  const item = searchIndex[realIndex];
  if (!item) return;
  closeOverlay();
  setTimeout(() => {
    item.el.scrollIntoView({ behavior: "smooth", block: "center" });
    item.el.classList.add("flash");
    setTimeout(() => item.el.classList.remove("flash"), 1400);
  }, 200);
}

const navEl = document.getElementById("nav");
function toggleMenu(btn) {
  const isOpen = navEl.classList.toggle("nav-open");
  btn.setAttribute("aria-expanded", String(isOpen));
}


document.addEventListener("click", (e) => {
  const target = e.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  switch (action) {
    case "buy":
      e.preventDefault();
      openProductModal(target.closest(".card"));
      break;
    case "specs":
      e.preventDefault();
      openHeroSpecs();
      break;
    case "scan":
      e.preventDefault();
      openScanIntro();
      break;
    case "start-scan":
      startScan();
      break;
    case "apply-scan":
      applyScan(target);
      break;
    case "select-color":
      selectColor(target);
      break;
    case "select-size":
      selectSizeInModal(target);
      break;
    case "submit-order":
      submitOrder();
      break;
    case "search-toggle":
      e.preventDefault();
      openSearch();
      break;
    case "goto-card":
      gotoCard(target);
      break;
    case "menu-toggle":
      toggleMenu(target);
      break;
    case "close":
      closeOverlay();
      break;
  }
});

document.addEventListener("input", (e) => {
  if (e.target && e.target.id === "search-input") {
    runSearch(e.target.value);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !overlay.hidden) closeOverlay();
});

