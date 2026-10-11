document.addEventListener('DOMContentLoaded', () => {

var sneakers = [
  { id: "nike-air-max-95", name: "Nike Air Max 95", brand: "Nike", type: "Лайфстайл", price: 7200,
    material: "Нубук / сітка", weight: "380 г",
    img: "https://cro.com.ua/cdn/shop/files/1_f0eabed4-9f63-44a7-99ec-961e12e25340.png?v=1757428900",
    colors: [
      { name: "Чорний", hex: "#111111", img: "https://cro.com.ua/cdn/shop/files/1_f0eabed4-9f63-44a7-99ec-961e12e25340.png?v=1757428900" },
      { name: "Сірий", hex: "#9a9a9a", img: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9f7f9c38-a4b8-4ed0-a3d0-7785e9fcd2f2/NIKE+AIR+MAX+95+BIG+BUBBLE+SE.png" },
      { name: "Неон", hex: "#c6ff2e", img: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/113a91a1-975a-4cf8-b232-8a7283a03bd2/AIR+MAX+95+BB+S+%28GS%29.png" }
    ] },

  { id: "nike-air-max-270", name: "Nike Air Max 270", brand: "Nike", type: "Лайфстайл", price: 6900,
    material: "Текстиль / синтетика", weight: "340 г",
    img:  "https://cro.com.ua/cdn/shop/files/1_6a118546-14e4-4294-9d7e-27667fa05735.png?v=1705068961&width=533",
    colors: [
      { name: "Білий", hex: "#f4f4f4", img: "https://cro.com.ua/cdn/shop/files/1_6a118546-14e4-4294-9d7e-27667fa05735.png?v=1705068961&width=533" },
      { name: "Чорний", hex: "#111111", img: "https://www.crossup.com.ua/wp-content/uploads/2024/07/AH8050-005-2.jpg" },
      { name: "Червоний", hex: "#c62828", img: "https://cdn-images.farfetch-contents.com/15/94/73/71/15947371_32144044_600.jpg" }
    ] },

  { id: "nike-dunk-low", name: "Nike Dunk Low", brand: "Nike", type: "Скейт / лайфстайл", price: 5600,
    material: "Шкіра", weight: "320 г",
    img:  "https://yesoriginal.com.ua/media/cache/catalog/products/f7/7e/3b/90231144-3137165-1600x1684_-jpg-84.webp",
    colors: [
      { name: "Панда", hex: "#efefef", img: "https://yesoriginal.com.ua/media/cache/catalog/products/f7/7e/3b/90231144-3137165-1600x1684_-jpg-84.webp" },
      { name: "Чорний", hex: "#111111", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bezKrvQ2spF-1lDWUZQM4IsBzsAM7QugCKnocpY2mdULaNGtDllyLMI&s=10" },
      { name: "Університетський синій", hex: "#2e5bff", img: "https://cdn-images.farfetch-contents.com/16/81/53/00/16815300_33840245_600.jpg" }
    ] },

  { id: "air-jordan-1-low", name: "Nike Air Jordan 1 Low", brand: "Nike", type: "Баскетбольна класика", price: 6300,
    material: "Шкіра", weight: "330 г",
    img:  "https://deltasport.ua/storage/product/size_976/7207/HJ7743-010-757887.jpg",
    colors: [
      { name: "Чорний", hex: "#1a1a1a", img: "https://deltasport.ua/storage/product/size_976/7207/HJ7743-010-757887.jpg" },
      { name: "Білий/чорний", hex: "#eeeeee", img: "https://cdn-images.farfetch-contents.com/22/56/19/44/22561944_52752068_1000.jpg" },
      { name: "Пісочний", hex: "#d8c9ae", img: "https://pulse.net.ua/content/images/45/600x600l80mc0/77063463664316.webp" }
    ] },

  { id: "adidas-samba-og", name: "Adidas Samba OG", brand: "Adidas", type: "Футзал / лайфстайл", price: 4800,
    material: "Шкіра / замша", weight: "300 г",
    img:  "https://allstars.ua/storage/product/size_1952/5394/B75807-306715.jpg",
    colors: [
      { name: "Чорний/білий", hex: "#161616", img: "https://allstars.ua/storage/product/size_1952/5394/B75807-306715.jpg" },
      { name: "Кремовий", hex: "#efe6d8", img: "https://static.dropp.market/799e0585-13a3-487f-b325-293e70fb2cc9_400_2.jpg" },
      { name: "Зелений", hex: "#2f5d3a", img: "https://cdn-images.farfetch-contents.com/22/74/37/28/22743728_52752550_1000.jpg" }
    ] },

  { id: "adidas-campus-00s", name: "Adidas Campus 00s", brand: "Adidas", type: "Скейт / лайфстайл", price: 4600,
    material: "Замша", weight: "310 г",
    img:  "https://img2.ans-media.com/i/430x645/SS25-OBU0PH-88X_F1.webp?v=1755613502",
    colors: [
      { name: "Коричневий", hex: "#6b4a2f", img: "https://img2.ans-media.com/i/430x645/SS25-OBU0PH-88X_F1.webp?v=1755613502" },
      { name: "Сірий", hex: "#8f8f8f", img: "https://img2.ans-media.com/i/840x1260/SS23-OBU0KL-09X_F1.webp?v=1730398098" },
      { name: "Чорний", hex: "#111111", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEAg4xX5yejHC0k8XujReDc61g6UjH6EYtpBSZ9BvitVXeh6Fe7X60MJI&s=10" }
    ] },

  { id: "adidas-forum-low", name: "Adidas Forum Low", brand: "Adidas", type: "Баскетбольна класика", price: 4900,
    material: "Шкіра", weight: "360 г",
    img:  "https://lishop.store/image/cache/products/1/3/0/adidas-forum-low-triple-white-1000x1000.jpg",
    colors: [
      { name: "Білий", hex: "#f4f4f4", img: "https://lishop.store/image/cache/products/1/3/0/adidas-forum-low-triple-white-1000x1000.jpg" },
      { name: "Блакитний", hex: "#8fd3e8", img: "https://werare.com.ua/image/catalog/i/aj/al/90b7297cd19158181d085fa3cdff99eb.jpg" },
      { name: "Чорний", hex: "#111111", img: "https://lishop.store/image/cache/products/7/8/8/adidas-forum-low-triple-black-1000x1000.jpg" }
    ] },

  { id: "adidas-ultraboost-5", name: "Adidas Ultraboost 5", brand: "Adidas", type: "Біг", price: 8500,
    material: "Primeknit", weight: "290 г",
    img:  "https://assetmanagerpim-res.cloudinary.com/images/w_1560/f_auto,q_auto/9d844b95d06948f0a1552188bc694c27_9366/ID8812_01_standard.WebP",
    colors: [
      { name: "Чорний", hex: "#111111", img: "https://assetmanagerpim-res.cloudinary.com/images/w_1560/f_auto,q_auto/9d844b95d06948f0a1552188bc694c27_9366/ID8812_01_standard.WebP" },
      { name: "Білий", hex: "#f4f4f4", img: "https://img.eobuwie.cloud/product(5/4/8/6/54864c40a26e0fb8dde2acf8e22dc88d67e089f1_20_4067889473987.jpg,jpg)/vzuttia-dlia-bigu-adidas-ultraboost-5-id8813-bilii-0000303988654.jpg" },
      { name: "Синій", hex: "#1f3a93", img: "https://www.running-point.com/cdn/shop/files/0051680632400000_1.jpg?v=1774878985&width=1946" }
    ] },

  { id: "nb-530", name: "New Balance 530", brand: "New Balance", type: "Біг / лайфстайл", price: 4700,
    material: "Сітка / шкіра", weight: "310 г",
    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZa3tFoya9lKcjRwU-tkL6Dcsrt7gzv2NOpAf31VkOrA&s=10",
    colors: [
      { name: "Білий/сірий", hex: "#dedede", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZa3tFoya9lKcjRwU-tkL6Dcsrt7gzv2NOpAf31VkOrA&s=10" },
      { name: "Сталевий", hex: "#7c8894", img: "https://nb.in.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/catalog/product///0000-newbalance/530/mr530ka/3903-623x637.webp" },
      { name: "Чорний", hex: "#111111", img: "https://newbalance.ua/img/photos/photo54822.jpg" }
    ] },

  { id: "nb-550", name: "New Balance 550", brand: "New Balance", type: "Баскетбольна класика", price: 5400,
    material: "Шкіра", weight: "350 г",
    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxp1pEB5IgogF2T0fGI-j92_jRwhB21CUVeN-BoM73OM5SoDtRnNWCyWM&s=10",
    colors: [
      { name: "Білий/зелений", hex: "#eef0ea", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxp1pEB5IgogF2T0fGI-j92_jRwhB21CUVeN-BoM73OM5SoDtRnNWCyWM&s=10" },
      { name: "Кремовий", hex: "#efe6d8", img: "https://cdn-images.farfetch-contents.com/20/51/60/05/20516005_50443839_600.jpg" },
      { name: "Чорний", hex: "#111111", img: "https://cdn-images.farfetch-contents.com/20/76/54/84/20765484_51774121_1000.jpg" }
    ] },

  { id: "nb-9060", name: "New Balance 9060", brand: "New Balance", type: "Лайфстайл", price: 6800,
    material: "Сітка / замша", weight: "300 г",
    img:  "https://werare.com.ua/image/catalog/i/fe/gg/83085c4717bbf0c18425a5a09169a2c1.jpg",
    colors: [
      { name: "Сірий туман", hex: "#b9b9b9", img: "https://werare.com.ua/image/catalog/i/fe/gg/83085c4717bbf0c18425a5a09169a2c1.jpg" },
      { name: "Пісочний", hex: "#d8c9ae", img: "https://nb.in.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/catalog/0000-newbalance/9060/zb-2357485/48209-375x467.webp" },
      { name: "Чорний", hex: "#111111", img: "https://www.crossup.com.ua/wp-content/uploads/2025/07/U9060ZBO-1.webp" }
    ] },

  { id: "asics-gel-kayano-14", name: "ASICS GEL-Kayano 14", brand: "ASICS", type: "Біг / лайфстайл", price: 6500,
    material: "Сітка / TPU", weight: "330 г",
    img:  "https://footdistrict.com/cdn/shop/files/sneakers-asics-gel-kayano-14-1203a537-025-0.jpg?v=1775805759&width=2048",
    colors: [
      { name: "Сріблястий", hex: "#c7c9cc", img: "https://footdistrict.com/cdn/shop/files/sneakers-asics-gel-kayano-14-1203a537-025-0.jpg?v=1775805759&width=2048" },
      { name: "Синій", hex: "#2e5bff", img: "https://asics.net.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/catalog/image/asics/fks2351871/21880-375x467.webp" },
      { name: "Чорний", hex: "#111111", img: "https://werare.com.ua/image/catalog/i/ab/df/9c73140cab98e056beaa12cb1695cd65.jpg" }
    ] },

  { id: "asics-gel-1130", name: "ASICS GEL-1130", brand: "ASICS", type: "Біг / лайфстайл", price: 4900,
    material: "Сітка", weight: "290 г",
    img:  "https://lishop.store/image/cache/products/6/6/1/asics-gel-1130-white-black-1000x1000.jpg",
    colors: [
      { name: "Білий", hex: "#f4f4f4", img: "https://lishop.store/image/cache/products/6/6/1/asics-gel-1130-white-black-1000x1000.jpg" },
      { name: "Кремовий", hex: "#efe6d8", img: "https://media.sivasdescalzo.com/media/catalog/product/1/2/1203A609-109_sivasdescalzo-Asics-GEL-1130-1772709360-1.jpg?width=1920&quality=72&optimize=high&format=auto" },
      { name: "Чорний", hex: "#111111", img: "https://werare.com.ua/image/catalog/i/dd/dm/36767dac041f283421d0589d45afb944.jpg" }
    ] },

  { id: "raf-simons-orion", name: "Raf Simons Orion", brand: "Raf Simons", type: "Авангардний дизайн", price: 15400,
    material: "Телячий нубук", weight: "370 г",
    img:  "https://cdn.clothbase.com/uploads/7754efc1-b750-4a35-afb0-2f0595b508c9/P00703164.jpg",
    colors: [
      { name: "Чорний", hex: "#111111", img: "https://cdn.clothbase.com/uploads/7754efc1-b750-4a35-afb0-2f0595b508c9/P00703164.jpg" },
      { name: "Білий", hex: "#f4f4f4", img: "https://cdn.inspo.group/webp/raw/980ea15c08797be8cd5e8e2301e204ba310a1b9a56d4e7683a09fbb56a8b8363/500.webp" },
      { name: "Жовтий акцент", hex: "#e8c94a", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3cMJkbxPoBlFvuTOe6KgAHnFXK5UBKqUc41ISEPAtOna4bn7aQqMRS4&s=10" }
    ] },

  { id: "puma-suede-classic", name: "Puma Suede Classic XXI", brand: "Puma", type: "Лайфстайл класика", price: 3200,
    material: "Замша", weight: "300 г",
    img:  "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/399781/01/sv01/fnd/UKR/w/1000/h/1000/fmt/png",
    colors: [
      { name: "Чорний", hex: "#111111", img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/399781/01/sv01/fnd/UKR/w/1000/h/1000/fmt/png" },
      { name: "Бордовий", hex: "#7a1f2b", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE28A4QRMUQwf1L4SGKrUJWmKoYpUPDe25eKxDaHDXs7WWFrgQjaTEmtLu&s=10" },
      { name: "Білий", hex: "#f4f4f4", img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/408467/01/sv01/fnd/UKR/w/1000/h/1000/fmt/png" }
    ] }
];

var SIZES = ["EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"];

var DEFAULT_COLORS = [
  { name: "Чорний", hex: "#111111" },
  { name: "Білий", hex: "#f4f4f4" },
  { name: "Сірий", hex: "#9a9a9a" }
];

var selectedSize = null;

var catalogEl = document.getElementById("catalog");
var overlay = document.getElementById("overlay");
var overlayPanel = document.getElementById("overlay-panel");
var sizeNote = document.getElementById("size-note");
var navEl = document.getElementById("nav");
var searchIndex = null;

var closeBtnHTML = '<button class="overlay-close" data-action="close" aria-label="Закрити">✕</button>';

function renderCatalog(list) {
  var htmlParts = [];

  for (var i = 0; i < list.length; i++) {
    var s = list[i];
    var imgSrc = s.img ? s.img : "img/" + s.id + ".jpg";
    var price = s.price.toLocaleString("uk-UA");

    htmlParts.push(
      '<article class="card" data-id="' + s.id + '">' +
        '<div class="card-img"><img src="' + imgSrc + '" alt="' + s.name + '" loading="lazy"></div>' +
        '<div class="card-body">' +
          '<div class="card-top"><h3>' + s.name + '</h3><b>₴' + price + '</b></div>' +
          '<dl class="specs">' +
            '<div><dt>БРЕНД</dt><dd>' + s.brand + '</dd></div>' +
            '<div><dt>ТИП</dt><dd>' + s.type + '</dd></div>' +
          '</dl>' +
          '<div class="card-foot"><span class="pill">В НАЯВНОСТІ</span><a class="buy" href="#" data-action="buy">КУПИТИ</a></div>' +
        '</div>' +
      '</article>'
    );
  }

  catalogEl.innerHTML = htmlParts.join("");
}
renderCatalog(sneakers);

function openOverlay(html, panelClass) {
  overlayPanel.className = "overlay-panel " + (panelClass ? panelClass : "");
  overlayPanel.innerHTML = html;
  overlay.hidden = false;
  document.body.classList.add("no-scroll");

  requestAnimationFrame(function () {
    overlay.classList.add("open");
  });

  var focusable = overlayPanel.querySelector("input, button, a");
  if (focusable) focusable.focus();
}

function closeOverlay() {
  overlay.classList.remove("open");
  document.body.classList.remove("no-scroll");
  setTimeout(function () {
    overlay.hidden = true;
    overlayPanel.innerHTML = "";
  }, 180);
}

function getProductFromCard(cardEl) {
  var id = cardEl.dataset.id;

  for (var i = 0; i < sneakers.length; i++) {
    if (sneakers[i].id === id) return sneakers[i];
  }

  var nameEl = cardEl.querySelector("h3");
  var priceEl = cardEl.querySelector(".card-top b");
  var imgEl = cardEl.querySelector(".card-img img");

  var name = nameEl ? nameEl.textContent.trim() : "Товар";
  var priceText = priceEl ? priceEl.textContent.replace(/[^\d]/g, "") : "0";
  var img = imgEl ? imgEl.getAttribute("src") : "";

  var material = "—";
  var weight = "—";
  var specRows = cardEl.querySelectorAll(".specs > div");

  for (var j = 0; j < specRows.length; j++) {
    var dt = specRows[j].querySelector("dt");
    var dd = specRows[j].querySelector("dd");
    if (!dt || !dd) continue;

    var label = dt.textContent.trim().toUpperCase();
    if (label.indexOf("МАТЕРІАЛ") !== -1) material = dd.textContent.trim();
    if (label.indexOf("ВАГА") !== -1) weight = dd.textContent.trim();
  }

  return {
    id: null,
    name: name,
    price: parseInt(priceText, 10) || 0,
    img: img,
    material: material,
    weight: weight,
    colors: DEFAULT_COLORS
  };
}

function openProductModal(cardEl) {
  var p = getProductFromCard(cardEl);
  var imgSrc = p.img ? p.img : "img/" + p.id + ".jpg";
  var colors = (p.colors && p.colors.length) ? p.colors : DEFAULT_COLORS;
  var preselectedSize = (selectedSize && SIZES.indexOf(selectedSize) !== -1) ? selectedSize : "EU 42";

  var swatchesHTML = "";
  for (var i = 0; i < colors.length; i++) {
    var c = colors[i];
    var isSelected = i === 0 ? "selected" : "";
    var colorImg = c.img ? c.img : "";
    swatchesHTML +=
      '<button type="button" class="swatch ' + isSelected + '" data-action="select-color" ' +
      'data-name="' + c.name + '" data-img="' + colorImg + '" style="background:' + c.hex + '" title="' + c.name + '" aria-label="' + c.name + '"></button>';
  }

  var sizesHTML = "";
  for (var k = 0; k < SIZES.length; k++) {
    var sz = SIZES[k];
    var selClass = sz === preselectedSize ? "selected" : "";
    sizesHTML += '<button type="button" class="size-btn ' + selClass + '" data-action="select-size">' + sz.replace("EU ", "") + '</button>';
  }

  var html =
    closeBtnHTML +
    '<div class="modal-grid" data-name="' + p.name + '" data-price="' + p.price + '">' +
      '<div class="modal-img"><img src="' + imgSrc + '" alt="' + p.name + '"></div>' +
      '<div class="modal-info">' +
        '<p class="tag">[ ОФОРМЛЕННЯ ЗАМОВЛЕННЯ ]</p>' +
        '<h3 class="modal-title">' + p.name + '</h3>' +
        '<p class="modal-price">₴' + p.price.toLocaleString("uk-UA") + '</p>' +
        '<dl class="specs modal-specs">' +
          '<div><dt>МАТЕРІАЛ</dt><dd>' + p.material + '</dd></div>' +
          '<div><dt>ВАГА</dt><dd>' + p.weight + '</dd></div>' +
        '</dl>' +
        '<p class="modal-label">Колір</p>' +
        '<div class="swatches">' + swatchesHTML + '</div>' +
        '<p class="mono small muted swatch-label" data-color-label>' + colors[0].name + '</p>' +
        '<p class="modal-label">Розмір</p>' +
        '<div class="size-btns">' + sizesHTML + '</div>' +
        '<button type="button" class="btn btn-black modal-submit" data-action="submit-order">Оформити покупку <span>→</span></button>' +
      '</div>' +
    '</div>';

  openOverlay(html, "panel-product");
}

function selectColor(btn) {
  var swatches = btn.parentElement.querySelectorAll(".swatch");
  for (var i = 0; i < swatches.length; i++) swatches[i].classList.remove("selected");
  btn.classList.add("selected");

  var label = overlayPanel.querySelector("[data-color-label]");
  if (label) label.textContent = btn.dataset.name;

  var bigImg = overlayPanel.querySelector(".modal-img img");
  if (bigImg && btn.dataset.img) {
    bigImg.src = btn.dataset.img;
  }
}

function selectSizeInModal(btn) {
  var buttons = btn.parentElement.querySelectorAll(".size-btn");
  for (var i = 0; i < buttons.length; i++) buttons[i].classList.remove("selected");
  btn.classList.add("selected");
}

function submitOrder() {
  var root = overlayPanel.querySelector(".modal-grid");
  if (!root) return;

  var name = root.dataset.name;
  var price = parseInt(root.dataset.price, 10) || 0;

  var colorEl = overlayPanel.querySelector(".swatch.selected");
  var color = colorEl ? colorEl.dataset.name : "—";

  var sizeBtn = overlayPanel.querySelector(".size-btn.selected");
  var size = sizeBtn ? "EU " + sizeBtn.textContent.trim() : "—";

  var cartCount = document.getElementById("cart-count");
  cartCount.textContent = (parseInt(cartCount.textContent, 10) || 0) + 1;

  overlayPanel.innerHTML =
    closeBtnHTML +
    '<div class="modal-success">' +
      '<div class="success-icon">✓</div>' +
      '<p class="tag center">[ ЗАМОВЛЕННЯ ПРИЙНЯТО ]</p>' +
      '<h3 class="modal-title center">Дякуємо за покупку</h3>' +
      '<p class="success-line mono small">' + name + ' · ' + color + ' · ' + size + '</p>' +
      '<p class="success-price">₴' + price.toLocaleString("uk-UA") + '</p>' +
      '<button type="button" class="btn btn-outline" data-action="close">Закрити</button>' +
    '</div>';
}

function openHeroSpecs() {
  var hero = document.querySelector(".hero");
  var name = hero.querySelector("h1").textContent.trim();
  var lead = hero.querySelector(".lead").textContent.trim();
  var img = hero.querySelector(".hero-media img").getAttribute("src");

  var specRows = hero.querySelectorAll(".spec-box dl > div");
  var specsHTML = "";
  for (var i = 0; i < specRows.length; i++) {
    var k = specRows[i].querySelector("dt").textContent.trim();
    var v = specRows[i].querySelector("dd").textContent.trim();
    specsHTML += '<div><dt>' + k + '</dt><dd>' + v + '</dd></div>';
  }

  var html =
    closeBtnHTML +
    '<div class="modal-grid">' +
      '<div class="modal-img"><img src="' + img + '" alt="' + name + '"></div>' +
      '<div class="modal-info">' +
        '<p class="tag">[ ДРОП_088 // ХАРАКТЕРИСТИКИ ]</p>' +
        '<h3 class="modal-title">' + name + '</h3>' +
        '<p class="modal-desc">' + lead + '</p>' +
        '<dl class="specs modal-specs">' + specsHTML + '</dl>' +
        '<button type="button" class="btn btn-black modal-submit" data-action="close">Зрозуміло</button>' +
      '</div>' +
    '</div>';

  openOverlay(html, "panel-product");
}

var sizeRows = document.querySelectorAll("#size-table tr");
for (var r = 0; r < sizeRows.length; r++) {
  sizeRows[r].addEventListener("click", function () {
    for (var j = 0; j < sizeRows.length; j++) sizeRows[j].classList.remove("selected");
    this.classList.add("selected");

    var eu = this.children[0].textContent.trim();
    var us = this.children[1].textContent.trim();
    selectedSize = eu;
    sizeNote.textContent = "Обрано: " + eu + " (" + us + ") — цей розмір підставиться в кошик автоматично";
  });
}

function openScanIntro() {
  var html =
    closeBtnHTML +
    '<div class="modal-scan">' +
      '<p class="tag">[ SHOSHU SCAN // РЕАЛЬНИЙ ЧАС ]</p>' +
      '<h3 class="modal-title">Сканування стопи</h3>' +
      '<p class="modal-desc">Наведіть камеру телефону на стопу зі шкарпеткою, стоячи на аркуші паперу А4. Сканування визначить довжину стопи та підбере точний розмір Shoshu.</p>' +
      '<div class="scan-visual"><div class="scan-line"></div></div>' +
      '<button type="button" class="btn btn-black modal-submit" data-action="start-scan">Почати сканування <span>→</span></button>' +
    '</div>';

  openOverlay(html, "panel-scan");
}

function startScan() {
  var steps = [
    "Ініціалізація камери…",
    "Пошук контуру стопи…",
    "Вимірювання довжини та ширини…",
    "Підбір найближчого розміру Shoshu…"
  ];

  overlayPanel.innerHTML =
    closeBtnHTML +
    '<div class="modal-scan">' +
      '<p class="tag">[ SHOSHU SCAN ]</p>' +
      '<h3 class="modal-title">Сканування…</h3>' +
      '<div class="scan-visual scanning"><div class="scan-line"></div></div>' +
      '<p class="mono small scan-status" id="scan-status">' + steps[0] + '</p>' +
      '<div class="scan-progress"><div class="scan-progress-bar" id="scan-bar"></div></div>' +
    '</div>';

  var statusEl = document.getElementById("scan-status");
  var barEl = document.getElementById("scan-bar");
  var step = 0;

  barEl.style.width = Math.round((1 / steps.length) * 100) + "%";

  var timer = setInterval(function () {
    step++;
    if (step < steps.length) {
      statusEl.textContent = steps[step];
      barEl.style.width = Math.round(((step + 1) / steps.length) * 100) + "%";
    } else {
      clearInterval(timer);
      finishScan();
    }
  }, 650);
}

function finishScan() {
  var table = [
    ["EU 39", "US 6.5", 245], ["EU 40", "US 7.5", 250], ["EU 41", "US 8", 260],
    ["EU 42", "US 9", 270], ["EU 43", "US 10", 280], ["EU 44", "US 11", 290], ["EU 45", "US 12", 300]
  ];
  var pick = table[Math.floor(Math.random() * table.length)];

  overlayPanel.innerHTML =
    closeBtnHTML +
    '<div class="modal-scan">' +
      '<p class="tag">[ РЕЗУЛЬТАТ СКАНУВАННЯ ]</p>' +
      '<h3 class="modal-title">Рекомендований розмір</h3>' +
      '<p class="scan-result">' + pick[0] + '</p>' +
      '<p class="mono small muted">' + pick[1] + ' · довжина стопи ≈ ' + pick[2] + ' mm</p>' +
      '<div class="btn-row scan-actions">' +
        '<button type="button" class="btn btn-black" data-action="apply-scan" data-eu="' + pick[0] + '" data-us="' + pick[1] + '">Застосувати розмір <span>→</span></button>' +
        '<button type="button" class="btn btn-outline" data-action="close">Закрити</button>' +
      '</div>' +
    '</div>';
}

function applyScan(btn) {
  var eu = btn.dataset.eu;
  var us = btn.dataset.us;
  selectedSize = eu;

  for (var i = 0; i < sizeRows.length; i++) {
    var rowEu = sizeRows[i].children[0].textContent.trim();
    if (rowEu === eu) {
      sizeRows[i].classList.add("selected");
    } else {
      sizeRows[i].classList.remove("selected");
    }
  }

  sizeNote.textContent = "Обрано: " + eu + " (" + us + ") — результат сканування";
  closeOverlay();
  document.getElementById("size-table").scrollIntoView({ behavior: "smooth", block: "center" });
}

function buildSearchIndex() {
  var cards = document.querySelectorAll(".card");
  searchIndex = [];

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var nameEl = card.querySelector("h3");
    var priceEl = card.querySelector(".card-top b");
    var imgEl = card.querySelector(".card-img img");
    var brandEl = card.querySelector(".specs dd");

    searchIndex.push({
      el: card,
      name: nameEl ? nameEl.textContent.trim() : "",
      price: priceEl ? priceEl.textContent.trim() : "",
      img: imgEl ? imgEl.getAttribute("src") : "",
      brand: brandEl ? brandEl.textContent.trim() : ""
    });
  }
}

function openSearch() {
  if (!searchIndex) buildSearchIndex();

  var html =
    closeBtnHTML +
    '<div class="search-box">' +
      '<p class="tag">[ ПОШУК // SHOSHU/SHOP ]</p>' +
      '<input type="text" id="search-input" class="search-input" placeholder="Назва або бренд: Nike, Samba, GEL-1130…" autocomplete="off">' +
      '<div class="search-results" id="search-results">' +
        '<p class="mono small muted search-hint">Почніть вводити, щоб знайти кросівки</p>' +
      '</div>' +
    '</div>';

  openOverlay(html, "panel-search");
}

function runSearch(query) {
  var resultsEl = document.getElementById("search-results");
  var q = query.trim().toLowerCase();

  if (!q) {
    resultsEl.innerHTML = '<p class="mono small muted search-hint">Почніть вводити, щоб знайти кросівки</p>';
    return;
  }

  var matches = [];
  var matchIndexes = [];
  for (var i = 0; i < searchIndex.length; i++) {
    var item = searchIndex[i];
    if (item.name.toLowerCase().indexOf(q) !== -1 || item.brand.toLowerCase().indexOf(q) !== -1) {
      matches.push(item);
      matchIndexes.push(i);
    }
  }

  if (matches.length === 0) {
    resultsEl.innerHTML = '<p class="mono small muted search-hint">Нічого не знайдено за запитом «' + query + '»</p>';
    return;
  }

  var html = "";
  for (var m = 0; m < matches.length; m++) {
    var item2 = matches[m];
    html +=
      '<button type="button" class="search-result" data-action="goto-card" data-index="' + m + '">' +
        '<span class="search-result-img" style="background-image:url(\'' + item2.img + '\')"></span>' +
        '<span class="search-result-text">' +
          '<span class="search-result-name">' + item2.name + '</span>' +
          '<span class="mono small muted">' + item2.brand + '</span>' +
        '</span>' +
        '<span class="search-result-price mono small">' + item2.price + '</span>' +
      '</button>';
  }

  resultsEl.innerHTML = html;
  resultsEl.dataset.matches = JSON.stringify(matchIndexes);
}

function gotoCard(btn) {
  var idxList = JSON.parse(document.getElementById("search-results").dataset.matches || "[]");
  var realIndex = idxList[parseInt(btn.dataset.index, 10)];
  var item = searchIndex[realIndex];
  if (!item) return;

  closeOverlay();
  setTimeout(function () {
    item.el.scrollIntoView({ behavior: "smooth", block: "center" });
    item.el.classList.add("flash");
    setTimeout(function () {
      item.el.classList.remove("flash");
    }, 1400);
  }, 200);
}

function toggleMenu(btn) {
  var isOpen = navEl.classList.toggle("nav-open");
  btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

document.addEventListener("click", function (e) {
  var target = e.target.closest("[data-action]");
  if (!target) return;

  var action = target.dataset.action;

  if (action === "buy") {
    e.preventDefault();
    openProductModal(target.closest(".card"));
  } else if (action === "specs") {
    e.preventDefault();
    openHeroSpecs();
  } else if (action === "scan") {
    e.preventDefault();
    openScanIntro();
  } else if (action === "start-scan") {
    startScan();
  } else if (action === "apply-scan") {
    applyScan(target);
  } else if (action === "select-color") {
    selectColor(target);
  } else if (action === "select-size") {
    selectSizeInModal(target);
  } else if (action === "submit-order") {
    submitOrder();
  } else if (action === "search-toggle") {
    e.preventDefault();
    openSearch();
  } else if (action === "goto-card") {
    gotoCard(target);
  } else if (action === "menu-toggle") {
    toggleMenu(target);
  } else if (action === "close") {
    closeOverlay();
  }
});

document.addEventListener("input", function (e) {
  if (e.target && e.target.id === "search-input") {
    runSearch(e.target.value);
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !overlay.hidden) {
    closeOverlay();
  }
});

});
