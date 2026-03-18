// ===== DATA =====
const PRODUCTS = [
  {id:1,name:"Nike Air Max 270",category:"Footwear",price:120,oldPrice:150,stock:15,rating:4.8,reviews:234,emoji:"👟",badge:"Best Seller",sizes:["7","8","9","10","11"],image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=85&fit=crop",
  description:"Experience all-day comfort with the Nike Air Max 270. Featuring Nike's largest heel Air unit for maximum cushioning, a breathable mesh upper, and a sleek silhouette inspired by two iconic Air Max styles. Perfect for everyday wear. Available in multiple colorways. Machine washable upper.",
  features:["Max Air 270 heel unit","Breathable mesh upper","Foam midsole","Rubber outsole with flex grooves","Pull tab at heel"]},

  {id:2,name:"Samsung Galaxy A54",category:"Mobile",price:380,oldPrice:420,stock:8,rating:4.6,reviews:187,emoji:"📱",badge:"Hot",sizes:[],image:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&q=85&fit=crop",
  description:"The Samsung Galaxy A54 delivers a premium smartphone experience at an accessible price. Featuring a stunning 6.4-inch Super AMOLED display, a 50MP triple camera system, and a powerful 5000mAh battery. Runs on Android 13 with Samsung's One UI. Water resistant with IP67 rating.",
  features:["6.4\" Super AMOLED 120Hz display","50MP + 12MP + 5MP triple camera","5000mAh battery with 25W fast charging","IP67 water resistance","8GB RAM / 128GB storage"]},

  {id:3,name:"Levi's 511 Jeans",category:"Clothing",price:65,oldPrice:85,stock:0,rating:4.4,reviews:312,emoji:"👖",badge:"Sale",sizes:["28","30","32","34","36"],image:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=85&fit=crop",
  description:"The Levi's 511 Slim Fit Jeans are a modern classic. Cut close to the body from the waist to ankle, these jeans are made from stretch denim that moves with you all day. A versatile wardrobe staple that pairs effortlessly with everything from casual tees to smart blazers.",
  features:["Slim fit from hip to ankle","Advanced stretch denim","5-pocket styling","Zip fly with button closure","99% Cotton, 1% Elastane"]},

  {id:4,name:"Sony WH-1000XM5",category:"Electronics",price:280,oldPrice:320,stock:7,rating:4.9,reviews:521,emoji:"🎧",badge:"Top Rated",sizes:[],image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=85&fit=crop",
  description:"Industry-leading noise cancellation meets exceptional sound quality in the Sony WH-1000XM5. With 8 microphones and two processors, these headphones block out distractions so you can focus on what matters. Enjoy up to 30 hours of battery life with quick charge — 3 minutes for 3 hours of playback.",
  features:["Industry-leading noise cancellation","30-hour battery life","Quick charge (3 min = 3 hrs)","Crystal clear hands-free calling","Multipoint connection (2 devices)"]},

  {id:5,name:"Ray-Ban Aviator",category:"Eyewear",price:175,oldPrice:200,stock:22,rating:4.7,reviews:145,emoji:"🕶️",badge:null,sizes:[],image:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=85&fit=crop",
  description:"The original aviator since 1937. Ray-Ban Aviator Classic sunglasses feature the iconic teardrop shape with a double bridge and bayonet temples. Crafted from lightweight metal with 100% UV protection lenses. A timeless style worn by icons across generations.",
  features:["Classic aviator silhouette","100% UV protection","Scratch-resistant lenses","Lightweight metal frame","Comes with Ray-Ban case & cloth"]},

  {id:6,name:"Apple Watch Series 9",category:"Electronics",price:399,oldPrice:429,stock:5,rating:4.8,reviews:689,emoji:"⌚",badge:"New",sizes:["40mm","44mm"],image:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=85&fit=crop",
  description:"The Apple Watch Series 9 is the most powerful Apple Watch yet, with the new S9 chip and a double tap gesture. Features an always-on Retina display, advanced health sensors including ECG and blood oxygen monitoring, crash detection, and up to 18 hours of battery life.",
  features:["S9 chip with Double Tap gesture","Always-On Retina display","ECG & Blood Oxygen app","Crash & Fall detection","18-hour battery life","Water resistant 50m"]},

  {id:7,name:"Adidas Ultraboost 22",category:"Footwear",price:180,oldPrice:220,stock:12,rating:4.6,reviews:298,emoji:"👟",badge:"Sale",sizes:["7","8","9","10","11","12"],image:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=85&fit=crop",
  description:"Adidas Ultraboost 22 — The most comfortable running shoe Adidas has ever made. Built with full-length Boost cushioning for maximum energy return on every step. Whether you're training for a marathon or walking to work, the Ultraboost 22 adapts to your foot and your lifestyle.",
  features:[
    "RESPONSIVE BOOST MIDSOLE — Full-length Boost technology returns energy with every stride for an incredibly comfortable ride",
    "PRIMEKNIT+ UPPER — Adaptive, sock-like fit that wraps your foot naturally; ultra-breathable for all-day comfort",
    "CONTINENTAL™ RUBBER OUTSOLE — The same rubber used on Continental car tyres; delivers superior wet and dry grip",
    "LINEAR ENERGY PUSH SYSTEM — Redesigned midsole geometry channels energy forward for a more propulsive feel",
    "TORSION SYSTEM — Provides midfoot integrity and allows forefoot and rearfoot to move independently",
    "FITCOUNTER MOULDED HEEL — Ergonomic external heel counter reduces irritation and offers a natural fit",
    "LIGHTSTRIKE CUSHIONING — Lightweight foam in the outsole provides extra cushioning without adding weight",
    "GENDER-SPECIFIC FIT — Engineered specifically for men's foot shape and biomechanics",
    "SUSTAINABLE MATERIALS — Upper made with Primeblue, a high-performance recycled material made in part with Parley Ocean Plastic",
    "FIT TIP — Fits true to size; if between sizes, go half size up",
    "WEIGHT — Approx. 310g (size UK 8.5)",
    "DROP — 10mm heel-to-toe drop for a natural running gait"
  ]},

  {id:8,name:"Canon EOS M50 II",category:"Electronics",price:699,oldPrice:749,stock:4,rating:4.7,reviews:156,emoji:"📷",badge:null,sizes:[],image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=85&fit=crop",
  description:"The Canon EOS M50 Mark II is the ultimate mirrorless camera for content creators and photography enthusiasts. Shoot stunning 4K video and 24.1MP stills with Dual Pixel CMOS AF for fast, accurate autofocus. The vari-angle touchscreen LCD and built-in Wi-Fi make sharing effortless.",
  features:["24.1MP APS-C CMOS sensor","4K video recording","Dual Pixel CMOS AF","Vari-angle touchscreen","Built-in Wi-Fi & Bluetooth","Eye Detection AF"]},

  {id:9,name:"Zara Summer Dress",category:"Clothing",price:45,oldPrice:60,stock:30,rating:4.3,reviews:203,emoji:"👗",badge:null,sizes:["XS","S","M","L","XL"],image:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=85&fit=crop",
  description:"Effortlessly chic for warm weather days. This Zara Summer Dress features a flowy silhouette in lightweight fabric that keeps you cool all day. Perfect for beach outings, brunches, or casual evenings out. Pairs beautifully with sandals or sneakers.",
  features:["Lightweight breathable fabric","Relaxed flowy silhouette","Side pockets","Adjustable straps","Machine washable","100% Viscose"]},

  {id:10,name:"iPad Pro 11-inch",category:"Electronics",price:799,oldPrice:850,stock:6,rating:4.9,reviews:432,emoji:"💻",badge:"Hot",sizes:["128GB","256GB","512GB"],image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=85&fit=crop",
  description:"The iPad Pro 11-inch with M2 chip delivers desktop-class performance in a stunning portable design. The Liquid Retina display with ProMotion technology adapts refresh rate up to 120Hz for incredibly smooth scrolling. Compatible with Apple Pencil (2nd gen) and Magic Keyboard.",
  features:["Apple M2 chip","11-inch Liquid Retina display","ProMotion 120Hz technology","USB-C with Thunderbolt","Compatible with Apple Pencil 2","Up to 10-hour battery life"]},

  {id:11,name:"Gucci Sunglasses",category:"Eyewear",price:320,oldPrice:380,stock:9,rating:4.5,reviews:89,emoji:"🕶️",badge:"Luxury",sizes:[],image:"https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=85&fit=crop",
  description:"Elevate your look with these iconic Gucci sunglasses. Crafted in Italy from premium acetate with signature GG hardware on the temples. Featuring gradient lenses with 100% UV400 protection. A statement piece that combines luxury craftsmanship with contemporary style.",
  features:["Made in Italy","Premium acetate frame","GG logo hardware","100% UV400 protection","Gradient lenses","Comes with Gucci case"]},

  {id:12,name:"Nike Dri-FIT Shirt",category:"Clothing",price:35,oldPrice:45,stock:50,rating:4.4,reviews:178,emoji:"👕",badge:null,sizes:["S","M","L","XL","XXL"],image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=85&fit=crop",
  description:"Train harder and stay cooler with the Nike Dri-FIT Training Shirt. The innovative Dri-FIT technology wicks sweat away from your skin to the fabric surface where it evaporates quickly, keeping you dry and comfortable during intense workouts. Lightweight, breathable, and built to perform.",
  features:["Nike Dri-FIT sweat-wicking technology","Lightweight breathable fabric","Relaxed athletic fit","Tagless for comfort","Machine washable","100% Recycled Polyester"]},

  {id:13,name:"Nike Air Force 1 '07",category:"Footwear",price:110,oldPrice:130,stock:18,rating:4.9,reviews:1423,emoji:"👟",badge:"Best Seller",sizes:["6","7","8","9","10","11","12"],image:"https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=85&fit=crop",
  description:"The Nike Air Force 1 '07 is a timeless icon that has been a street style staple since 1982. Its clean, classic silhouette features Nike's revolutionary Air cushioning technology for all-day comfort. Whether you're dressing up or keeping it casual, the AF1 elevates every look effortlessly.",
  features:["ICONIC DESIGN — Classic low-top silhouette inspired by the 1982 original","AIR CUSHIONING — Full-length Nike Air unit for lightweight, responsive cushioning","LEATHER UPPER — Premium full-grain leather for durability and easy cleaning","RUBBER OUTSOLE — Multi-directional grip for traction on any surface","PADDED COLLAR — Plush comfort around the ankle for a snug fit","VERSATILE STYLE — Pairs with jeans, joggers, shorts, or formal trousers"]},

  {id:14,name:"Samsung Galaxy S25 Ultra",category:"Mobile",price:1299,oldPrice:1399,stock:10,rating:4.9,reviews:876,emoji:"📱",badge:"New",sizes:["256GB","512GB","1TB"],image:"https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=600&q=85&fit=crop",
  description:"The Samsung Galaxy S25 Ultra redefines what a smartphone can do. Powered by the Snapdragon 8 Elite processor and featuring an upgraded 200MP camera system with AI-enhanced photography. The built-in S Pen now supports AI drawing assist, and the 5000mAh battery with 45W fast charging keeps you powered all day.",
  features:["SNAPDRAGON 8 ELITE — The fastest mobile processor ever made","200MP MAIN CAMERA — Capture stunning detail in any light with AI scene optimization","S PEN INCLUDED — Now with AI drawing assist and lower latency","6.9-INCH QHD+ DISPLAY — 120Hz Dynamic AMOLED 2X, 2600 nits brightness","5000mAh BATTERY — 45W wired + 15W wireless charging","12GB RAM / 256GB base storage — Multitask without limits","IP68 WATER RESISTANT — Dust and water protection up to 1.5m for 30 minutes"]},

  {id:15,name:"iPhone 17 Pro",category:"Mobile",price:1199,oldPrice:1249,stock:7,rating:4.9,reviews:654,emoji:"📱",badge:"Hot",sizes:["128GB","256GB","512GB","1TB"],image:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=85&fit=crop",
  description:"The iPhone 17 Pro is Apple's most capable iPhone ever. Featuring the all-new A19 Pro chip, a pro-grade camera system with 5x optical zoom, and a stunning 6.3-inch Super Retina XDR ProMotion display with Always-On. Built with a titanium frame and ceramic shield for durability that matches its beauty.",
  features:["A19 PRO CHIP — Faster than any mobile chip, built for AI and Pro performance","48MP MAIN + 48MP ULTRAWIDE + 12MP TELEPHOTO — Pro camera system with 5x optical zoom","TITANIUM FRAME — Aerospace-grade titanium, lighter and stronger than steel","6.3\" SUPER RETINA XDR — ProMotion 120Hz, Always-On display","USB-C WITH USB 3 — Up to 20x faster transfers for ProRes video","APPLE INTELLIGENCE — AI writing, photo editing, and Siri built-in","FACE ID — Most secure facial authentication available","ALL-DAY BATTERY — Up to 27 hours video playback"]},

  {id:16,name:"Samsung 340L Double Door Fridge",category:"Electronics",price:649,oldPrice:799,stock:5,rating:4.6,reviews:312,emoji:"🧊",badge:"Sale",sizes:[],image:"https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&q=85&fit=crop",
  description:"The Samsung 340L Double Door Refrigerator combines smart technology with elegant design. Featuring Digital Inverter Compressor for energy efficiency and a Twin Cooling Plus system that maintains optimal humidity in both the fridge and freezer independently. The All-Around Cooling ensures every corner stays at the perfect temperature.",
  features:["DIGITAL INVERTER COMPRESSOR — Saves up to 46% energy, 10-year warranty","TWIN COOLING PLUS — Separate cooling for fridge & freezer, prevents odor mixing","ALL-AROUND COOLING — Multiple vents maintain uniform temperature throughout","POWER FREEZE & COOL — Quick freeze and cool at the touch of a button","LARGE 340L CAPACITY — Spacious interior fits a week's grocery easily","AUTO DEFROST — No manual defrosting needed","TEMPERED GLASS SHELVES — Sturdy, easy-to-clean shelves","BEE 5-STAR RATED — Maximum energy efficiency rating"]},

  {id:17,name:"Premium Cotton Bedsheet Set",category:"Clothing",price:89,oldPrice:120,stock:35,rating:4.7,reviews:289,emoji:"🛏️",badge:null,sizes:["Single","Double","Queen","King"],image:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=85&fit=crop",
  description:"Sleep in absolute luxury with our Premium 400 Thread Count Egyptian Cotton Bedsheet Set. The ultra-soft sateen weave feels silky smooth against your skin, getting softer with every wash. Includes 1 fitted sheet, 1 flat sheet, and 2 pillowcases. Available in elegant solid colours to match any bedroom décor.",
  features:["400 THREAD COUNT — Ultra-soft, hotel-quality feel that gets softer with every wash","100% EGYPTIAN COTTON — Breathable, hypoallergenic, and naturally moisture-wicking","SATEEN WEAVE — Silky smooth finish with a subtle sheen","DEEP POCKET FITTED SHEET — Fits mattresses up to 14 inches deep, stays in place all night","SET INCLUDES — 1 flat sheet + 1 fitted sheet + 2 pillowcases","EASY CARE — Machine washable, wrinkle-resistant","AVAILABLE IN 8 COLOURS — White, Ivory, Grey, Navy, Sage, Blush, Charcoal, Sky Blue","OEKO-TEX CERTIFIED — Free from harmful chemicals, safe for sensitive skin"]},

  {id:18,name:"Bose QuietComfort 45",category:"Electronics",price:329,oldPrice:379,stock:9,rating:4.8,reviews:467,emoji:"🎧",badge:"Top Rated",sizes:[],image:"https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=85&fit=crop",
  description:"The Bose QuietComfort 45 headphones deliver world-class noise cancellation and exceptional audio quality. Whether you're on a packed commute or working from a noisy café, the QC45 creates a bubble of peace around you. With 22 hours of battery life and plush ear cushions, these are built for marathon listening sessions.",
  features:["WORLD-CLASS NOISE CANCELLATION — Bose proprietary Quiet Mode blocks distractions completely","AWARE MODE — Lets in surrounding sound when you need to stay alert","22-HOUR BATTERY LIFE — With 15-minute quick charge giving 3 hours of playback","TRIPORT ACOUSTIC ARCHITECTURE — High-fidelity audio with deep, powerful bass","MULTIPOINT CONNECTION — Switch seamlessly between two Bluetooth devices","PLUSH EAR CUSHIONS — Soft protein leather for all-day wearing comfort","FOLDABLE DESIGN — Compact folding for easy travel and storage","VOICE ASSISTANT READY — Works with Alexa, Siri, and Google Assistant"]},

  {id:19,name:"LG 1.5 Ton 5-Star Inverter AC",category:"Electronics",price:899,oldPrice:1099,stock:6,rating:4.7,reviews:198,emoji:"❄️",badge:"Sale",sizes:[],image:"https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=85&fit=crop",
  description:"Beat the heat with the LG 1.5 Ton 5-Star Dual Inverter Air Conditioner. The revolutionary Dual Inverter Compressor runs at variable speeds for faster cooling, quieter operation, and up to 60% energy savings versus conventional ACs. The AI Convertible 6-in-1 mode adapts to your exact cooling needs.",
  features:["DUAL INVERTER COMPRESSOR — 60% energy savings, cools 40% faster than conventional ACs","AI CONVERTIBLE 6-IN-1 — Adjusts capacity from 40% to 110% based on room conditions","5-STAR BEE RATING — Maximum energy efficiency, lowest electricity bills","AUTO CLEAN — Self-cleaning function prevents bacteria and mold buildup","HD FILTER — Captures fine dust, allergens, and micro-particles","4-WAY AUTO SWING — Uniform air distribution throughout the room","MONSOON COMFORT — Dehumidification mode for humid conditions","Wi-Fi ENABLED — Control from anywhere via LG ThinQ app","R-32 REFRIGERANT — Eco-friendly, low global warming potential"]},

  {id:20,name:"Apple MacBook Air M3",category:"Electronics",price:1099,oldPrice:1199,stock:8,rating:4.9,reviews:543,emoji:"💻",badge:"New",sizes:["8GB/256GB","16GB/512GB","24GB/1TB"],image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=85&fit=crop",
  description:"The MacBook Air with M3 chip is the world's best consumer laptop. Impossibly thin at just 11.3mm, yet powerful enough to handle video editing, coding, and creative work with ease. The stunning Liquid Retina display, up to 18-hour battery life, and silent fanless design make it the perfect all-day companion.",
  features:["APPLE M3 CHIP — Up to 60% faster than M1, handles pro-level workloads effortlessly","18-HOUR BATTERY LIFE — Work all day and into the evening on a single charge","13.6\" LIQUID RETINA DISPLAY — 500 nits brightness, P3 wide colour, True Tone","FANLESS DESIGN — Completely silent operation, no fans ever","8GB UNIFIED MEMORY (base) — Runs multiple apps smoothly, upgradeable to 24GB","1080p FACETIME HD CAMERA — Best camera ever in a MacBook Air","MAGSAFE CHARGING — Fast, convenient magnetic charging","TWO USB-C / THUNDERBOLT 3 PORTS — High-speed data, display, and charging","AVAILABLE IN 4 COLOURS — Midnight, Starlight, Space Grey, Sky Blue"]},
];
const CATS=["All","Footwear","Mobile","Clothing","Electronics","Eyewear"];
const STATUS_CFG={pending:{bg:'#FFF3CD',c:'#856404',l:'Pending'},processing:{bg:'#CCE5FF',c:'#004085',l:'Processing'},shipped:{bg:'#D4EDDA',c:'#155724',l:'Shipped'},delivered:{bg:'#D1ECF1',c:'#0C5460',l:'Delivered'},cancelled:{bg:'#F8D7DA',c:'#721C24',l:'Cancelled'}};

function loadProducts(){
  const saved=localStorage.getItem('szProducts');
  if(saved){
    const parsed=JSON.parse(saved);
    const defaultMap={};
    PRODUCTS.forEach(p=>{ defaultMap[p.id]=p; });
    // Merge saved with defaults — keep saved stock/data but apply default images & descriptions
    const merged=parsed.map(p=>{
      if(defaultMap[p.id]){
        return Object.assign({},defaultMap[p.id],{stock:p.stock},{image:p.image||defaultMap[p.id].image});
      }
      return p;
    });
    // Add any new default products not in saved
    defaultMap && Object.values(defaultMap).forEach(dp=>{
      if(!merged.find(p=>p.id===dp.id)) merged.push(dp);
    });
    PRODUCTS.length=0;
    merged.forEach(p=>PRODUCTS.push(p));
  }
}
function saveProducts(){localStorage.setItem('szProducts',JSON.stringify(PRODUCTS));}

let cart=JSON.parse(localStorage.getItem('szCart'))||[];
let wishlist=JSON.parse(localStorage.getItem('szWish'))||[];
let currentProdId=null;
let currentSize=null;
let couponUsed=false;
let activeProdCat="All";

function saveCart(){localStorage.setItem('szCart',JSON.stringify(cart))}
function saveWish(){localStorage.setItem('szWish',JSON.stringify(wishlist))}
function getOrders(){return JSON.parse(localStorage.getItem('szOrders'))||[]}
function saveOrders(o){localStorage.setItem('szOrders',JSON.stringify(o))}
function cartTotal(){return cart.reduce((s,i)=>s+(i.price*i.qty),0)}
function cartCount(){return cart.reduce((s,i)=>s+i.qty,0)}

function showPage(name, pushState=true){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  document.querySelectorAll('.navbar-nav a').forEach(a=>a.classList.remove('active'));
  const navEl=document.getElementById('nav-'+name);
  if(navEl)navEl.classList.add('active');
  window.scrollTo(0,0);
  if(name==='products')renderProdPage();
  if(name==='cart')renderCartPage();
  if(name==='checkout')renderCheckoutPage();
  if(name==='admin')renderAdminPage();
  if(name==='home')renderHomePage();
  // ✅ Browser history-তে push করো
  if(pushState){
    history.pushState({page:name}, '', '#'+name);
  }
}

// ✅ Browser back/forward button handle করো
window.addEventListener('popstate', function(e){
  const page = e.state?.page || 'home';
  showPage(page, false);
});

function toast(msg,type='success'){
  const c=document.getElementById('toast-box');
  const t=document.createElement('div');
  t.className=`toast toast-${type}`;
  const icon=type==='success'?'✓':'✕';
  t.innerHTML=`<span style="opacity:.6">${icon}</span> ${msg}`;
  c.appendChild(t);
  setTimeout(()=>t.remove(),3200);
}

function addToCart(pid,qty=1,size=null){
  const p=PRODUCTS.find(p=>p.id===pid);
  if(!p||p.stock===0)return toast('Out of stock','error');
  const ex=cart.find(i=>i.id===pid&&i.size===size);
  if(ex)ex.qty=Math.min(ex.qty+qty,p.stock);
  else cart.push({id:p.id,name:p.name,price:p.price,emoji:p.emoji,image:p.image,category:p.category,qty,size});
  saveCart();updateCartUI();
  toast(`"${p.name}" added to cart`);
}
function removeFromCart(pid,size){
  cart=cart.filter(i=>!(i.id===pid&&i.size===size));
  saveCart();updateCartUI();
  if(document.getElementById('page-cart').classList.contains('active'))renderCartPage();
}
function updateQty(pid,size,d){
  const i=cart.find(i=>i.id===pid&&i.size===size);
  if(!i)return;
  const p=PRODUCTS.find(p=>p.id===pid);
  i.qty=Math.max(1,Math.min(i.qty+d,p?p.stock:99));
  saveCart();updateCartUI();
  if(document.getElementById('page-cart').classList.contains('active'))renderCartPage();
}
function clearCart(){cart=[];saveCart();updateCartUI();renderCartPage();}

function updateCartUI(){
  const cnt=cartCount();
  const badge=document.getElementById('cart-badge');
  badge.textContent=cnt;
  badge.style.display=cnt>0?'flex':'none';
  renderCartSidebar();
}

function renderCartSidebar(){
  const el=document.getElementById('cart-items-sidebar');
  const footer=document.getElementById('cart-footer-sidebar');
  if(cart.length===0){
    el.innerHTML=`<div class="cart-empty-msg"><div style="font-family:var(--serif);font-size:48px;color:var(--border);margin-bottom:14px">∅</div><p style="font-weight:500;font-size:15px;margin-bottom:6px">Your cart is empty</p><p style="font-size:13px;color:var(--text-muted)">Add items to begin</p></div>`;
    footer.style.display='none';return;
  }
  footer.style.display='block';
  const sub=cartTotal();const ship=sub>100?0:10;
  document.getElementById('sb-sub').textContent='₹'+sub.toFixed(2);
  document.getElementById('sb-ship').textContent=ship===0?'Free':'₹'+ship.toFixed(2);
  document.getElementById('sb-total').textContent='₹'+(sub+ship).toFixed(2);
  el.innerHTML=cart.map(item=>`
    <div class="cart-item">
      <div class="cart-item-img-box">
        ${item.image?`<img src="${item.image}"/>`:`<span style="font-size:22px">${item.emoji||'◈'}</span>`}
      </div>
      <div class="cart-item-info">
        <div class="cart-item-cat">${item.category||''}</div>
        <div class="cart-item-name">${item.name}${item.size?` <span style="font-size:10px;color:var(--text-muted)">(${item.size})</span>`:''}</div>
        <div class="cart-item-price">₹${(item.price*item.qty).toFixed(2)}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateQty(${item.id},${JSON.stringify(item.size)},-1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${item.id},${JSON.stringify(item.size)},1)">+</button>
          <button class="cart-remove" onclick="removeFromCart(${item.id},${JSON.stringify(item.size)})">✕</button>
        </div>
      </div>
    </div>`).join('');
}

function openCart(){document.getElementById('cart-sidebar').classList.add('open');document.getElementById('cart-overlay').classList.add('open');document.body.style.overflow='hidden'}
function closeCart(){document.getElementById('cart-sidebar').classList.remove('open');document.getElementById('cart-overlay').classList.remove('open');document.body.style.overflow=''}

function toggleWish(pid){
  const i=wishlist.indexOf(pid);
  if(i>-1){wishlist.splice(i,1);toast('Removed from wishlist','error')}
  else{wishlist.push(pid);toast('Added to wishlist')}
  saveWish();
  document.querySelectorAll(`.wish-btn[data-id="${pid}"]`).forEach(b=>{b.textContent=wishlist.includes(pid)?'♥':'♡'});
}

const BADGE_CLS={Best_Seller:'tag-gold',Hot:'tag-rust',Sale:'tag-rust',Top_Rated:'tag-dark',New:'tag-dark',Luxury:'tag-dark'};

function pCard(p){
  const disc=p.oldPrice?Math.round((1-p.price/p.oldPrice)*100):0;
  const bk=p.badge?p.badge.replace(' ','_'):'';
  const imgContent=p.image
    ?`<img src="${p.image}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center"/>`
    :`<div style="font-size:44px;color:var(--border);font-family:var(--serif)">${p.emoji||'◈'}</div>`;
  return`<div class="product-card" onclick="openProduct(${p.id})">
    <div class="product-img">
      ${imgContent}
      ${p.badge?`<div class="product-badge-pos"><span class="tag ${BADGE_CLS[bk]||'tag-dark'}">${p.badge}</span></div>`:''}
      ${disc>0?`<div class="product-discount"><span class="tag tag-rust">−${disc}%</span></div>`:''}
      <button class="product-wishlist wish-btn" data-id="${p.id}" onclick="event.stopPropagation();toggleWish(${p.id})">${wishlist.includes(p.id)?'♥':'♡'}</button>
      ${p.stock===0?`<div class="out-overlay">Out of Stock</div>`:''}
    </div>
    <div class="product-body">
      <div class="product-category">${p.category}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-rating">
        <span class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))}</span>
        <span class="rating-count">(${p.reviews})</span>
      </div>
      <div class="product-footer">
        <div><span class="product-price">₹${p.price}</span>${p.oldPrice?`<span class="product-price-old">₹${p.oldPrice}</span>`:''}</div>
        <button class="add-cart-btn" onclick="event.stopPropagation();addToCart(${p.id})" ${p.stock===0?'disabled':''}>+</button>
      </div>
    </div>
  </div>`;
}

function goToCategory(cat){
  // activeProdCat আগেই set করো — renderProdPage এটা use করবে
  activeProdCat = cat==='All' ? 'All' : cat;
  // products page-এ যাও (এটা renderProdPage() call করবে যা activeProdCat use করে)
  showPage('products');
  // dropdown ও filter sync করো
  setTimeout(()=>{
    const catSelect=document.getElementById('prod-cat');
    if(catSelect) catSelect.value=cat;
    filterProds();
  }, 30);
}

function renderHomePage(){
  const homeCats=document.getElementById('home-cats');
  homeCats.innerHTML=CATS.map(c=>`<div class="cat-pill" onclick="goToCategory('${c}')">${c}</div>`).join('');
  document.getElementById('home-products').innerHTML=PRODUCTS.slice(0,8).map(pCard).join('');
}
function homeFilterCat(el,cat){
  document.querySelectorAll('#home-cats .cat-pill').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  const filtered=cat==='All'?PRODUCTS:PRODUCTS.filter(p=>p.category===cat);
  document.getElementById('home-products').innerHTML=filtered.slice(0,8).map(pCard).join('');
}

function renderProdPage(){
  const prodCats=document.getElementById('prod-cats');
  prodCats.innerHTML=CATS.map(c=>`<div class="cat-pill ${c===activeProdCat?'active':''}" onclick="prodCatFilter(this,'${c}')">${c}</div>`).join('');
  filterProds();
}
function prodCatFilter(el,cat){
  document.querySelectorAll('#prod-cats .cat-pill').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  activeProdCat=cat;
  const catSelect=document.getElementById('prod-cat');
  if(catSelect) catSelect.value=cat;
  filterProds();
}
function filterProds(){
  const q=(document.getElementById('prod-search')?.value||'').toLowerCase();
  const sort=document.getElementById('prod-sort')?.value||'';
  // dropdown value নিন, কিন্তু activeProdCat কে priority দিন
  const dropVal=document.getElementById('prod-cat')?.value||'All';
  const cat=activeProdCat!=='All' ? activeProdCat : dropVal;
  const inStock=document.getElementById('instock-only')?.checked||false;
  let res=PRODUCTS.filter(p=>{
    const mCat=cat==='All'||p.category===cat;
    const mQ=p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q);
    const mStock=!inStock||p.stock>0;
    return mCat&&mQ&&mStock;
  });
  if(sort==='price-asc')res.sort((a,b)=>a.price-b.price);
  else if(sort==='price-desc')res.sort((a,b)=>b.price-a.price);
  else if(sort==='rating')res.sort((a,b)=>b.rating-a.rating);
  document.getElementById('prod-count').textContent=`${res.length} items`;
  document.getElementById('prod-grid').innerHTML=res.length?res.map(pCard).join(''):`<div style="grid-column:1/-1;text-align:center;padding:80px;color:var(--text-muted)"><div style="font-family:var(--serif);font-size:48px;color:var(--border);margin-bottom:14px">∅</div><p style="font-size:15px;font-weight:500">No products found</p></div>`;
}

function openProduct(pid){
  const p=PRODUCTS.find(p=>p.id===pid);
  if(!p)return;
  currentProdId=pid;currentSize=null;
  document.getElementById('pd-page-title').textContent=p.name;
  document.getElementById('pd-breadcrumb').textContent=p.name;
  const pdImg=document.getElementById('pd-img');
  if(p.image){
    pdImg.innerHTML=`<img src="${p.image}"/>`;
  }else{
    pdImg.innerHTML=`<span style="font-family:var(--serif);font-size:100px;color:var(--border)">${p.emoji||'◈'}</span>`;
  }
  document.getElementById('pd-cat').textContent=p.category;
  document.getElementById('pd-name').textContent=p.name;
  document.getElementById('pd-stars').textContent='★'.repeat(Math.floor(p.rating))+'☆'.repeat(5-Math.floor(p.rating));
  document.getElementById('pd-reviews').textContent=`${p.reviews} reviews`;
  const disc=p.oldPrice?Math.round((1-p.price/p.oldPrice)*100):0;
  document.getElementById('pd-price').innerHTML=`₹${p.price}${p.oldPrice?` <span style="font-size:16px;color:var(--text-muted);text-decoration:line-through;font-weight:400;font-family:var(--mono)">₹${p.oldPrice}</span>`:''} ${disc>0?`<span class="tag tag-rust" style="font-size:11px;margin-left:6px">−${disc}%</span>`:''}`;
  document.getElementById('pd-desc').textContent=p.description||`Premium ${p.category.toLowerCase()} product. Superior quality and exceptional design.`;
  // Features list
  const detailDesc=document.getElementById('pd-detail-desc');
  if(p.features&&p.features.length>0){
    detailDesc.innerHTML=
      `<div style="font-family:var(--mono);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-muted);margin-bottom:12px">Key Features</div>`+
      `<ul style="list-style:none;display:flex;flex-direction:column;gap:9px">`+
      p.features.map(f=>{
        // Bold the part before — if exists
        const parts=f.split('—');
        if(parts.length>1){
          return`<li style="display:flex;align-items:flex-start;gap:10px;font-size:13px;line-height:1.5;padding-bottom:9px;border-bottom:1px solid var(--border)">
            <span style="color:var(--gold);font-weight:700;flex-shrink:0;margin-top:1px">✓</span>
            <span><strong style="color:var(--ink)">${parts[0].trim()}</strong><span style="color:var(--text-muted)"> — ${parts.slice(1).join('—').trim()}</span></span>
          </li>`;
        }
        return`<li style="display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--text-muted);line-height:1.5;padding-bottom:9px;border-bottom:1px solid var(--border)">
          <span style="color:var(--gold);font-weight:700;flex-shrink:0;margin-top:1px">✓</span>${f}
        </li>`;
      }).join('')+
      `</ul>`;
  } else {
    detailDesc.textContent='Premium quality product with exceptional materials. Worldwide express delivery. 30-day returns guaranteed.';
  }
  const sizesWrap=document.getElementById('pd-sizes-wrap');
  if(p.sizes&&p.sizes.length>0){
    sizesWrap.style.display='block';
    document.getElementById('pd-sizes').innerHTML=p.sizes.map(s=>`<button class="size-btn" onclick="selectSize(this,'${s}')">${s}</button>`).join('');
  }else sizesWrap.style.display='none';
  const addBtn=document.getElementById('pd-add-btn');
  addBtn.disabled=p.stock===0;
  addBtn.textContent=p.stock===0?'Out of Stock':'Add to Selection';
  document.getElementById('pd-wish-btn').textContent=wishlist.includes(pid)?'♥ Wishlisted':'♡ Wishlist';
  document.getElementById('pd-qty').value=1;
  showPage('product-detail');
}
function selectSize(el,s){document.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('active'));el.classList.add('active');currentSize=s;}
function pdQty(d){const inp=document.getElementById('pd-qty');inp.value=Math.max(1,parseInt(inp.value)+d);}
function pdAddCart(){
  const p=PRODUCTS.find(p=>p.id===currentProdId);
  if(!p)return;
  if(p.sizes&&p.sizes.length>0&&!currentSize)return toast('Please select a size','error');
  addToCart(currentProdId,parseInt(document.getElementById('pd-qty').value),currentSize);
}
function pdToggleWish(){toggleWish(currentProdId);document.getElementById('pd-wish-btn').textContent=wishlist.includes(currentProdId)?'♥ Wishlisted':'♡ Wishlist';}

function renderCartPage(){
  const empty=document.getElementById('cart-empty-page');
  const content=document.getElementById('cart-page-content');
  if(cart.length===0){empty.style.display='block';content.style.display='none';return}
  empty.style.display='none';content.style.display='grid';
  document.getElementById('cart-item-count').textContent=cart.length;
  document.getElementById('cart-page-tbody').innerHTML=cart.map(item=>`
    <tr>
      <td><div style="display:flex;align-items:center;gap:12px">
        <div style="width:52px;height:64px;background:var(--parchment);border-radius:var(--r);overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
          ${item.image?`<img src="${item.image}" style="width:100%;height:100%;object-fit:cover"/>`:`<span style="font-size:20px">${item.emoji||'◈'}</span>`}
        </div>
        <div><div style="font-weight:500;font-size:13px">${item.name}</div>${item.size?`<div style="font-family:var(--mono);font-size:10px;color:var(--text-muted);margin-top:2px">${item.size}</div>`:''}</div>
      </div></td>
      <td style="font-family:var(--mono);font-weight:500">₹${item.price}</td>
      <td><div style="display:flex;align-items:center;gap:8px">
        <button class="qty-btn" onclick="updateQty(${item.id},${JSON.stringify(item.size)},-1);renderCartPage()">−</button>
        <span style="font-family:var(--mono);font-weight:600;min-width:20px;text-align:center">${item.qty}</span>
        <button class="qty-btn" onclick="updateQty(${item.id},${JSON.stringify(item.size)},1);renderCartPage()">+</button>
      </div></td>
      <td style="font-family:var(--mono);font-weight:600">₹${(item.price*item.qty).toFixed(2)}</td>
      <td><button onclick="removeFromCart(${item.id},${JSON.stringify(item.size)});renderCartPage()" style="background:none;border:none;font-size:14px;cursor:pointer;color:var(--text-muted);transition:color .2s" onmouseover="this.style.color='var(--rust)'" onmouseout="this.style.color='var(--text-muted)'">✕</button></td>
    </tr>`).join('');
  const sub=cartTotal();const ship=sub>100?0:10;const disc=couponUsed?sub*.2:0;
  document.getElementById('cp-sub').textContent='₹'+sub.toFixed(2);
  document.getElementById('cp-ship').textContent=ship===0?'Free':'₹'+ship.toFixed(2);
  document.getElementById('cp-total').textContent='₹'+(sub+ship-disc).toFixed(2);
  const dr=document.getElementById('cp-disc-row');dr.style.display=couponUsed?'flex':'none';
  if(couponUsed)document.getElementById('cp-disc').textContent='−₹'+disc.toFixed(2);
}
function applyCoupon(){
  const v=document.getElementById('coupon-code').value.trim().toUpperCase();
  if(v==='WELCOME20'){couponUsed=true;toast('Coupon applied — 20% off');renderCartPage();}
  else toast('Invalid coupon code','error');
}

function renderCheckoutPage(){
  const sub=cartTotal();const ship=sub>100?0:10;
  document.getElementById('co-sub').textContent='₹'+sub.toFixed(2);
  document.getElementById('co-ship').textContent=ship===0?'Free':'₹'+ship.toFixed(2);
  document.getElementById('co-total').textContent='₹'+(sub+ship).toFixed(2);
  document.getElementById('co-items').innerHTML=cart.map(i=>`
    <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)">
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:40px;height:50px;background:var(--parchment);border-radius:var(--r);overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center">
          ${i.image?`<img src="${i.image}" style="width:100%;height:100%;object-fit:cover"/>`:`<span style="font-size:18px">${i.emoji||'◈'}</span>`}
        </div>
        <div><div style="font-size:13px;font-weight:500">${i.name}${i.size?` (${i.size})`:''}</div><div style="font-family:var(--mono);font-size:10px;color:var(--text-muted)">Qty: ${i.qty}</div></div>
      </div>
      <span style="font-family:var(--mono);font-weight:600;font-size:13px">₹${(i.price*i.qty).toFixed(2)}</span>
    </div>`).join('');
}
function selectPay(type){
  document.querySelectorAll('.payment-opt').forEach(o=>o.classList.remove('selected'));
  document.getElementById('pay-'+type).classList.add('selected');
  document.getElementById('pay-'+type).querySelector('input').checked=true;
  document.getElementById('card-fields').style.display=type==='card'?'block':'none';
}
function placeOrder(){
  const fn=document.getElementById('co-fname').value.trim();
  const ln=document.getElementById('co-lname').value.trim();
  const em=document.getElementById('co-email').value.trim();
  const ph=document.getElementById('co-phone').value.trim();
  const ad=document.getElementById('co-addr').value.trim();
  if(!fn||!ln||!em||!ph||!ad)return toast('Please fill all required fields','error');
  if(cart.length===0)return toast('Cart is empty','error');
  const btn=document.getElementById('place-btn');
  btn.textContent='Processing…';btn.disabled=true;
  setTimeout(()=>{
    const orders=getOrders();
    const order={id:'ORD-'+Date.now(),date:new Date().toLocaleDateString(),customer:{name:fn+' '+ln,email:em,phone:ph,address:ad+', '+document.getElementById('co-city').value+' '+document.getElementById('co-zip').value+', '+document.getElementById('co-country').value},items:[...cart],total:cartTotal()+(cartTotal()>100?0:10),status:'pending'};
    orders.push(order);saveOrders(orders);
    cart=[];saveCart();updateCartUI();
    document.getElementById('order-id-show').textContent=order.id;
    document.getElementById('success-modal').classList.add('open');
    btn.textContent='Place Order';btn.disabled=false;
  },1400);
}
function closeSuccessModal(){document.getElementById('success-modal').classList.remove('open');showPage('home');}

function renderAdminPage(){const panel=document.getElementById('admin-panel');if(panel.style.display==='flex')renderAdminDash();}
function doAdminLogin(){
  const u=document.getElementById('a-user').value;const p=document.getElementById('a-pass').value;
  if(u==='admin'&&p==='admin123'){document.getElementById('admin-login').style.display='none';document.getElementById('admin-panel').style.display='flex';renderAdminDash();}
  else document.getElementById('login-err').style.display='block';
}
function doAdminLogout(){document.getElementById('admin-login').style.display='flex';document.getElementById('admin-panel').style.display='none';}
function resetToDefault(){if(!confirm('Reset to default products?'))return;localStorage.removeItem('szProducts');location.reload();}

function showAdminTab(name){
  ['dashboard','orders','stock','products','addproduct'].forEach(t=>{
    const el=document.getElementById('atab-'+t);if(el)el.style.display=t===name?'block':'none';
    const nav=document.getElementById('anav-'+t);if(nav)nav.classList.toggle('active',t===name);
  });
  if(name==='dashboard')renderAdminDash();
  if(name==='orders')renderAdminOrders();
  if(name==='stock')renderAdminStock();
  if(name==='products')renderAdminProds();
  if(name==='addproduct')initAddProductPreview();
}

function sBadge(s){const c=STATUS_CFG[s]||STATUS_CFG.pending;return`<span style="background:${c.bg};color:${c.c};padding:3px 10px;border-radius:20px;font-size:10px;font-weight:600;font-family:var(--mono)">${c.l}</span>`}

function renderAdminDash(){
  const orders=getOrders();
  const rev=orders.filter(o=>o.status==='delivered').reduce((s,o)=>s+o.total,0);
  const pend=orders.filter(o=>o.status==='pending').length;
  const outS=PRODUCTS.filter(p=>p.stock===0).length;
  document.getElementById('pending-cnt').textContent=pend>0?pend:'';
  document.getElementById('a-stats').innerHTML=[
    {icon:'₹',val:'₹'+rev.toFixed(0),lbl:'Revenue',c:'var(--gold)'},
    {icon:'◎',val:orders.length,lbl:'Orders',c:'#6366F1'},
    {icon:'◷',val:pend,lbl:'Pending',c:pend>0?'var(--rust)':'var(--sage)'},
    {icon:'⊘',val:outS,lbl:'Out of Stock',c:outS>0?'var(--rust)':'var(--sage)'},
  ].map(s=>`<div class="stat-card" style="border-top-color:${s.c}"><div class="stat-icon" style="color:${s.c}">${s.icon}</div><div class="stat-val">${s.val}</div><div class="stat-lbl">${s.lbl}</div></div>`).join('');
  const rec=orders.slice(-5).reverse();
  document.getElementById('a-recent-orders').innerHTML=rec.length?rec.map(o=>`<tr><td style="font-family:var(--mono);color:var(--gold-dim);cursor:pointer;font-size:11px" onclick="openOrderDetail('${o.id}')">${o.id}</td><td style="font-weight:500">${o.customer?.name||'—'}</td><td style="font-family:var(--mono)">₹${o.total?.toFixed(2)}</td><td>${sBadge(o.status)}</td><td style="font-family:var(--mono);font-size:11px;color:var(--text-muted)">${o.date}</td></tr>`).join(''):`<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:28px;font-size:13px">No orders yet</td></tr>`;
}

function renderAdminOrders(){
  const orders=getOrders();
  const q=(document.getElementById('ord-search')?.value||'').toLowerCase();
  const f=document.getElementById('ord-filter')?.value||'all';
  const filtered=orders.filter(o=>(f==='all'||o.status===f)&&(o.id.toLowerCase().includes(q)||(o.customer?.name||'').toLowerCase().includes(q))).reverse();
  const tbody=document.getElementById('a-orders-tbody');
  const noMsg=document.getElementById('no-orders-msg');
  if(!filtered.length){tbody.innerHTML='';noMsg.style.display='block';return}
  noMsg.style.display='none';
  tbody.innerHTML=filtered.map(o=>`<tr>
    <td style="font-family:var(--mono);font-size:11px;color:var(--gold-dim);cursor:pointer" onclick="openOrderDetail('${o.id}')">${o.id}</td>
    <td style="font-weight:500">${o.customer?.name||'—'}</td>
    <td style="font-family:var(--mono);font-size:11px;color:var(--text-muted)">${o.customer?.phone||'—'}</td>
    <td style="font-size:11px;color:var(--text-muted);max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(o.items||[]).map(i=>i.name).join(', ')}</td>
    <td style="font-family:var(--mono);font-weight:600">₹${o.total?.toFixed(2)}</td>
    <td style="font-family:var(--mono);font-size:11px;color:var(--text-muted)">${o.date}</td>
    <td><select class="status-sel" style="background:${STATUS_CFG[o.status]?.bg};color:${STATUS_CFG[o.status]?.c}" onchange="changeOrderStatus('${o.id}',this.value)">
      ${Object.entries(STATUS_CFG).map(([k,v])=>`<option value="${k}" ${o.status===k?'selected':''}>${v.l}</option>`).join('')}
    </select></td>
  </tr>`).join('');
}
function changeOrderStatus(id,status){
  const orders=getOrders();const o=orders.find(o=>o.id===id);
  if(o){o.status=status;saveOrders(orders);}
  toast(`Order updated → ${STATUS_CFG[status].l}`);renderAdminOrders();renderAdminDash();
}
function openOrderDetail(id){
  const o=getOrders().find(o=>o.id===id);if(!o)return;
  document.getElementById('order-detail-body').innerHTML=`
    ${[['Order ID',o.id],['Date',o.date],['Customer',o.customer?.name||'—'],['Email',o.customer?.email||'—'],['Phone',o.customer?.phone||'—'],['Address',o.customer?.address||'—'],['Total','₹'+o.total?.toFixed(2)],['Status',STATUS_CFG[o.status]?.l||o.status]].map(([l,v])=>`<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)"><span style="font-family:var(--mono);font-size:10px;letter-spacing:1px;text-transform:uppercase;color:var(--text-muted)">${l}</span><span style="font-weight:500;font-size:13px;text-align:right;max-width:60%">${v}</span></div>`).join('')}
    <div style="font-family:var(--mono);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-muted);margin:18px 0 12px">Items</div>
    ${(o.items||[]).map(i=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px;background:var(--cream);border-radius:var(--r);margin-bottom:6px;border:1px solid var(--border)"><div style="display:flex;align-items:center;gap:10px"><div style="width:36px;height:44px;background:var(--parchment);border-radius:var(--r);overflow:hidden;display:flex;align-items:center;justify-content:center">${i.image?`<img src="${i.image}" style="width:100%;height:100%;object-fit:cover"/>`:`<span style="font-size:16px">${i.emoji||'◈'}</span>`}</div><div><div style="font-size:13px;font-weight:500">${i.name}${i.size?` (${i.size})`:''}</div><div style="font-family:var(--mono);font-size:10px;color:var(--text-muted)">Qty: ${i.qty}</div></div></div><span style="font-family:var(--mono);font-weight:600">₹${(i.price*i.qty).toFixed(2)}</span></div>`).join('')}
    <div style="margin-top:18px"><div style="font-family:var(--mono);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-muted);margin-bottom:10px">Update Status</div><div style="display:flex;gap:7px;flex-wrap:wrap">${Object.entries(STATUS_CFG).map(([k,v])=>`<button onclick="changeOrderStatus('${o.id}','${k}');closeOrderDetailModal()" style="padding:6px 12px;border-radius:var(--r);border:none;background:${v.bg};color:${v.c};font-weight:600;font-size:11px;cursor:pointer;font-family:var(--mono)">${v.l}</button>`).join('')}</div></div>`;
  document.getElementById('order-detail-modal').classList.add('open');
}
function closeOrderDetailModal(){document.getElementById('order-detail-modal').classList.remove('open');}

function renderAdminStock(){
  const outS=PRODUCTS.filter(p=>p.stock===0).length;const lowS=PRODUCTS.filter(p=>p.stock>0&&p.stock<=5).length;
  document.getElementById('a-stock-stats').innerHTML=[
    {icon:'◈',val:PRODUCTS.length,lbl:'Total Products',c:'#6366F1'},
    {icon:'✓',val:PRODUCTS.filter(p=>p.stock>0).length,lbl:'In Stock',c:'var(--sage)'},
    {icon:'⊘',val:outS,lbl:'Out of Stock',c:'var(--rust)'},
    {icon:'△',val:lowS,lbl:'Low Stock',c:'var(--gold-dim)'},
  ].map(s=>`<div class="stat-card" style="border-top-color:${s.c}"><div class="stat-icon" style="color:${s.c}">${s.icon}</div><div class="stat-val">${s.val}</div><div class="stat-lbl">${s.lbl}</div></div>`).join('');
  document.getElementById('a-stock-tbody').innerHTML=PRODUCTS.map(p=>{
    const ss=p.stock===0?{bg:'#FEE2E2',c:'#B91C1C',l:'Out of Stock'}:p.stock<=5?{bg:'#FEF3C7',c:'#B45309',l:'Low Stock'}:{bg:'#DCFCE7',c:'#15803D',l:'In Stock'};
    const thumb=p.image?`<img src="${p.image}" style="width:36px;height:44px;object-fit:cover;border-radius:var(--r);flex-shrink:0"/>`:`<div style="width:36px;height:44px;background:var(--parchment);border-radius:var(--r);display:flex;align-items:center;justify-content:center;font-size:16px">${p.emoji||'◈'}</div>`;
    return`<tr><td><div style="display:flex;align-items:center;gap:10px">${thumb}<span style="font-weight:500">${p.name}</span></div></td><td style="font-family:var(--mono);font-size:11px">${p.category}</td><td style="font-family:var(--mono);font-weight:500">₹${p.price}</td><td style="font-family:var(--mono);font-weight:600;font-size:15px">${p.stock}</td><td><span style="background:${ss.bg};color:${ss.c};padding:3px 10px;border-radius:20px;font-size:10px;font-weight:600;font-family:var(--mono)">${ss.l}</span></td><td><input class="stock-inp" type="number" id="sadd-${p.id}" placeholder="+qty" min="1"/></td><td><button class="btn btn-dark btn-sm" onclick="addStockAdmin(${p.id})">Save</button></td></tr>`;
  }).join('');
}
function addStockAdmin(pid){
  const inp=document.getElementById('sadd-'+pid);const qty=parseInt(inp.value);
  if(!qty||qty<=0)return toast('Enter valid quantity','error');
  const p=PRODUCTS.find(p=>p.id===pid);
  if(p){p.stock+=qty;inp.value='';saveProducts();renderAdminStock();toast(`${p.name}: stock updated to ${p.stock}`);}
}
function renderAdminProds(){
  document.getElementById('a-prod-tbody').innerHTML=PRODUCTS.map(p=>{
    const thumb=p.image?`<img src="${p.image}" style="width:36px;height:44px;object-fit:cover;border-radius:var(--r);flex-shrink:0"/>`:`<div style="width:36px;height:44px;background:var(--parchment);border-radius:var(--r);display:flex;align-items:center;justify-content:center;font-size:16px">${p.emoji||'◈'}</div>`;
    return`<tr>
      <td><div style="display:flex;align-items:center;gap:10px">${thumb}<div><div style="font-weight:500">${p.name}</div>${p.description?`<div style="font-family:var(--mono);font-size:10px;color:var(--text-muted);margin-top:2px">${p.description.substring(0,36)}…</div>`:''}</div></div></td>
      <td style="font-family:var(--mono);font-size:11px">${p.category}</td>
      <td style="font-family:var(--mono);font-weight:600">₹${p.price}</td>
      <td style="font-family:var(--mono);color:var(--text-muted);text-decoration:line-through">₹${p.oldPrice||'—'}</td>
      <td style="font-family:var(--mono);font-weight:700;color:${p.stock===0?'var(--rust)':p.stock<=5?'var(--gold-dim)':'var(--sage)'}">${p.stock}</td>
      <td style="font-family:var(--mono);font-size:11px">★ ${p.rating}</td>
      <td style="font-family:var(--mono);font-size:11px;color:var(--text-muted)">${p.reviews}</td>
      <td>
        <div style="display:flex;gap:6px">
          <button onclick="openEditModal(${p.id})" style="background:rgba(201,168,76,.12);color:var(--gold-dim);border:1px solid rgba(201,168,76,.3);border-radius:var(--r);padding:5px 10px;font-size:11px;font-weight:600;cursor:pointer;font-family:var(--mono)">✎ Edit</button>
          <button onclick="deleteProduct(${p.id})" style="background:var(--cream);color:var(--rust);border:1px solid var(--border);border-radius:var(--r);padding:5px 10px;font-size:11px;font-weight:500;cursor:pointer;font-family:var(--mono)">Delete</button>
        </div>
      </td>
    </tr>`;}).join('');
}
// ===== EDIT PRODUCT =====
let editImageDataURL = null;

function openEditModal(pid){
  const p = PRODUCTS.find(p=>p.id===pid);
  if(!p) return;
  editImageDataURL = null;

  // Form fill করো
  document.getElementById('ep-id').value = pid;
  document.getElementById('ep-name').value = p.name||'';
  document.getElementById('ep-category').value = p.category||'';
  document.getElementById('ep-price').value = p.price||'';
  document.getElementById('ep-oldprice').value = p.oldPrice||'';
  document.getElementById('ep-stock').value = p.stock||0;
  document.getElementById('ep-badge').value = p.badge||'';
  document.getElementById('ep-sizes').value = (p.sizes||[]).join(', ');
  document.getElementById('ep-desc').value = p.description||'';

  // Current image দেখাও
  const curWrap = document.getElementById('ep-current-img-wrap');
  const curImg = document.getElementById('ep-current-img');
  if(p.image){ curWrap.style.display='block'; curImg.src=p.image; }
  else curWrap.style.display='none';

  // Image upload area reset
  document.getElementById('ep-img-placeholder').style.display='block';
  document.getElementById('ep-img-preview-wrap').style.display='none';
  document.getElementById('ep-img-remove-btn').style.display='none';
  document.getElementById('ep-image-input').value='';
  document.getElementById('ep-img-upload-area').style.borderColor='var(--border)';

  document.getElementById('edit-product-modal').classList.add('open');
}

function closeEditModal(){
  document.getElementById('edit-product-modal').classList.remove('open');
  editImageDataURL = null;
}

function handleEditImageUpload(input){
  const file = input.files[0];
  if(!file) return;
  if(!file.type.startsWith('image/')) return toast('Invalid image file','error');
  if(file.size > 5*1024*1024) return toast('Image must be under 5MB','error');
  const reader = new FileReader();
  reader.onload = function(e){
    editImageDataURL = e.target.result;
    document.getElementById('ep-img-placeholder').style.display='none';
    document.getElementById('ep-img-preview-wrap').style.display='block';
    document.getElementById('ep-img-preview-thumb').src = editImageDataURL;
    document.getElementById('ep-img-remove-btn').style.display='inline-block';
    document.getElementById('ep-img-upload-area').style.borderColor='var(--sage)';
  };
  reader.readAsDataURL(file);
}

function removeEditImage(){
  editImageDataURL = null;
  document.getElementById('ep-image-input').value='';
  document.getElementById('ep-img-placeholder').style.display='block';
  document.getElementById('ep-img-preview-wrap').style.display='none';
  document.getElementById('ep-img-remove-btn').style.display='none';
  document.getElementById('ep-img-upload-area').style.borderColor='var(--border)';
}

function saveEditProduct(){
  const pid = parseInt(document.getElementById('ep-id').value);
  const p = PRODUCTS.find(p=>p.id===pid);
  if(!p) return;

  const name = document.getElementById('ep-name').value.trim();
  const cat  = document.getElementById('ep-category').value;
  const price = parseFloat(document.getElementById('ep-price').value);
  const oldPrice = parseFloat(document.getElementById('ep-oldprice').value)||null;
  const stock = parseInt(document.getElementById('ep-stock').value);
  const badge = document.getElementById('ep-badge').value||null;
  const sizesRaw = document.getElementById('ep-sizes').value.trim();
  const desc = document.getElementById('ep-desc').value.trim();

  if(!name) return toast('Product name is required','error');
  if(!cat) return toast('Please select a category','error');
  if(!price||price<=0) return toast('Please enter a valid price','error');
  if(isNaN(stock)||stock<0) return toast('Please enter a valid stock','error');

  // Update product
  p.name = name;
  p.category = cat;
  p.price = price;
  p.oldPrice = oldPrice||undefined;
  p.stock = stock;
  p.badge = badge;
  p.sizes = sizesRaw ? sizesRaw.split(',').map(s=>s.trim()).filter(Boolean) : [];
  p.description = desc||undefined;
  if(editImageDataURL) p.image = editImageDataURL;

  saveProducts();
  closeEditModal();
  renderAdminProds();
  renderAdminDash();
  renderAdminStock();
  toast(`✓ "${name}" updated successfully`);
}

function deleteProduct(pid){
  const p=PRODUCTS.find(p=>p.id===pid);if(!p)return;
  if(!confirm(`Delete "${p.name}"?`))return;
  const idx=PRODUCTS.findIndex(p=>p.id===pid);
  if(idx>-1)PRODUCTS.splice(idx,1);
  saveProducts();renderAdminProds();renderAdminDash();renderAdminStock();
  toast(`"${p.name}" deleted`,'error');
}

// ADD PRODUCT
let newlyAdded=[];let currentImageDataURL=null;
function initAddProductPreview(){
  renderRecentlyAdded();
  ['ap-name','ap-category','ap-price','ap-oldprice','ap-stock','ap-badge','ap-sizes'].forEach(id=>{
    const el=document.getElementById(id);
    if(el)el.addEventListener('input',updatePreview);
    if(el&&el.tagName==='SELECT')el.addEventListener('change',updatePreview);
  });
  const area=document.getElementById('img-upload-area');
  if(area){
    area.addEventListener('dragover',e=>{e.preventDefault();area.classList.add('dragover');});
    area.addEventListener('dragleave',()=>area.classList.remove('dragover'));
    area.addEventListener('drop',e=>{e.preventDefault();area.classList.remove('dragover');const file=e.dataTransfer.files[0];if(file&&file.type.startsWith('image/'))processImageFile(file);else toast('Please drop an image file','error');});
  }
}
function handleImageUpload(input){const file=input.files[0];if(!file)return;if(!file.type.startsWith('image/'))return toast('Invalid image file','error');if(file.size>5*1024*1024)return toast('Image must be under 5MB','error');processImageFile(file);}
function processImageFile(file){
  const reader=new FileReader();
  reader.onload=function(e){
    currentImageDataURL=e.target.result;
    document.getElementById('img-placeholder').style.display='none';
    document.getElementById('img-preview-wrap').style.display='block';
    document.getElementById('img-preview-thumb').src=currentImageDataURL;
    document.getElementById('img-filename').textContent=file.name+' ('+Math.round(file.size/1024)+'KB)';
    document.getElementById('img-remove-btn').style.display='inline-block';
    document.getElementById('img-upload-area').style.borderColor='var(--sage)';
    const imgTag=document.getElementById('ap-prev-img-tag');
    const placeholder=document.getElementById('ap-prev-img-placeholder');
    imgTag.src=currentImageDataURL;imgTag.style.display='block';placeholder.style.display='none';
    toast('Image uploaded');
  };reader.readAsDataURL(file);
}
function removeImage(){
  currentImageDataURL=null;document.getElementById('ap-image-input').value='';
  document.getElementById('img-placeholder').style.display='block';
  document.getElementById('img-preview-wrap').style.display='none';
  document.getElementById('img-remove-btn').style.display='none';
  document.getElementById('img-upload-area').style.borderColor='var(--border)';
  document.getElementById('ap-prev-img-tag').style.display='none';
  document.getElementById('ap-prev-img-placeholder').style.display='flex';
}
function updatePreview(){
  const name=document.getElementById('ap-name').value||'Product Name';
  const cat=document.getElementById('ap-category').value||'Category';
  const price=parseFloat(document.getElementById('ap-price').value)||0;
  const oldPrice=parseFloat(document.getElementById('ap-oldprice').value)||0;
  const stock=parseInt(document.getElementById('ap-stock').value)||0;
  const badge=document.getElementById('ap-badge').value;
  const sizes=document.getElementById('ap-sizes').value;
  document.getElementById('ap-prev-name').textContent=name;
  document.getElementById('ap-prev-cat').textContent=cat;
  document.getElementById('ap-prev-price').textContent='₹'+price.toFixed(2);
  document.getElementById('ap-prev-oldprice').textContent=oldPrice>0?'₹'+oldPrice.toFixed(2):'';
  const disc=oldPrice>0&&price>0?Math.round((1-price/oldPrice)*100):0;
  const discEl=document.getElementById('ap-prev-disc');
  if(disc>0){discEl.style.display='block';document.getElementById('ap-prev-disc-text').textContent='−'+disc+'%';document.getElementById('ap-prev-disc-pct').textContent='−'+disc+'%';}
  else{discEl.style.display='none';document.getElementById('ap-prev-disc-pct').textContent='—';}
  const badgeWrap=document.getElementById('ap-prev-badge');
  if(badge){badgeWrap.style.display='block';document.getElementById('ap-prev-badge-text').textContent=badge;}
  else badgeWrap.style.display='none';
  const stockLbl=document.getElementById('ap-prev-stock-lbl');
  stockLbl.textContent=stock===0?'Out of Stock':stock<=5?`Low (${stock})`:`In Stock (${stock})`;
  stockLbl.style.color=stock===0?'var(--rust)':stock<=5?'var(--gold-dim)':'var(--sage)';
  document.getElementById('ap-prev-sizes').textContent=sizes.trim()?sizes.trim():'—';
}
function submitAddProduct(){
  const name=document.getElementById('ap-name').value.trim();
  const cat=document.getElementById('ap-category').value;
  const price=parseFloat(document.getElementById('ap-price').value);
  const oldPrice=parseFloat(document.getElementById('ap-oldprice').value)||null;
  const stock=parseInt(document.getElementById('ap-stock').value);
  const badge=document.getElementById('ap-badge').value||null;
  const sizesRaw=document.getElementById('ap-sizes').value.trim();
  const desc=document.getElementById('ap-desc').value.trim();
  if(!name)return toast('Product name is required','error');
  if(!currentImageDataURL)return toast('Please upload a product image','error');
  if(!cat)return toast('Please select a category','error');
  if(!price||price<=0)return toast('Please enter a valid price','error');
  if(isNaN(stock)||stock<0)return toast('Please enter a valid stock quantity','error');
  const sizes=sizesRaw?sizesRaw.split(',').map(s=>s.trim()).filter(Boolean):[];
  const newId=Math.max(...PRODUCTS.map(p=>p.id))+1;
  const newProd={id:newId,name,category:cat,price,oldPrice:oldPrice||undefined,stock,rating:0,reviews:0,image:currentImageDataURL,emoji:null,badge,sizes,description:desc||undefined};
  PRODUCTS.push(newProd);newlyAdded.unshift(newProd);
  saveProducts();toast(`"${name}" added successfully`);
  resetAddProduct();renderRecentlyAdded();renderAdminDash();
}
function resetAddProduct(){
  ['ap-name','ap-price','ap-oldprice','ap-stock','ap-sizes','ap-desc'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.getElementById('ap-category').value='';document.getElementById('ap-badge').value='';
  removeImage();updatePreview();
}
function renderRecentlyAdded(){
  const el=document.getElementById('ap-recently-added');if(!el)return;
  if(newlyAdded.length===0){el.innerHTML=`<div style="text-align:center;padding:28px;color:var(--text-muted);grid-column:1/-1;background:var(--white);border-radius:var(--r2);border:1px solid var(--border);font-size:13px">No products added yet</div>`;return;}
  el.innerHTML=newlyAdded.slice(0,4).map(p=>`
    <div style="background:var(--white);border-radius:var(--r2);overflow:hidden;border:1px solid var(--border)">
      <div style="aspect-ratio:3/4;background:var(--parchment);overflow:hidden;display:flex;align-items:center;justify-content:center">
        ${p.image?`<img src="${p.image}" style="width:100%;height:100%;object-fit:cover"/>`:`<span style="font-size:40px;color:var(--border);font-family:var(--serif)">${p.emoji||'◈'}</span>`}
      </div>
      <div style="padding:10px">
        <div style="font-family:var(--mono);font-size:9px;color:var(--text-muted);letter-spacing:1px;text-transform:uppercase">${p.category}</div>
        <div style="font-size:12px;font-weight:500;margin-top:4px;line-height:1.3">${p.name}</div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px">
          <span style="font-family:var(--mono);font-size:13px;font-weight:500">₹${p.price}</span>
          <span class="tag tag-sage" style="background:#DCFCE7;color:#15803D">Added</span>
        </div>
      </div>
    </div>`).join('');
}

// SUPPORT MODAL
const SUPPORT_CONTENT={
  contact:{title:'Contact Us',body:`
    <div style="margin-bottom:20px">
      <div style="font-family:var(--mono);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-muted);margin-bottom:16px">Get in Touch</div>
      <div style="display:flex;flex-direction:column;gap:12px">
        <div style="display:flex;align-items:center;gap:14px;padding:14px;background:var(--cream);border-radius:var(--r);border:1px solid var(--border)">
          <span style="font-size:20px;width:32px;text-align:center">✉</span>
          <div><div style="font-size:13px;font-weight:600">Email Support</div><div style="font-size:12px;color:var(--text-muted);margin-top:2px">support@luxe.com</div><div style="font-size:11px;color:var(--text-muted);font-family:var(--mono)">Response within 24 hours</div></div>
        </div>
        <div style="display:flex;align-items:center;gap:14px;padding:14px;background:var(--cream);border-radius:var(--r);border:1px solid var(--border)">
          <span style="font-size:20px;width:32px;text-align:center">☎</span>
          <div><div style="font-size:13px;font-weight:600">Phone Support</div><div style="font-size:12px;color:var(--text-muted);margin-top:2px">+91 1800-123-4567</div><div style="font-size:11px;color:var(--text-muted);font-family:var(--mono)">Mon–Sat, 9AM–6PM IST</div></div>
        </div>
        <div style="display:flex;align-items:center;gap:14px;padding:14px;background:var(--cream);border-radius:var(--r);border:1px solid var(--border)">
          <span style="font-size:20px;width:32px;text-align:center">◎</span>
          <div><div style="font-size:13px;font-weight:600">Live Chat</div><div style="font-size:12px;color:var(--text-muted);margin-top:2px">Available on website</div><div style="font-size:11px;color:var(--text-muted);font-family:var(--mono)">Mon–Sun, 8AM–10PM IST</div></div>
        </div>
      </div>
    </div>
    <div style="font-family:var(--mono);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-muted);margin-bottom:12px">Send a Message</div>
    <div class="form-group"><label class="form-label">Your Name</label><input type="text" class="form-control" placeholder="John Doe"/></div>
    <div class="form-group"><label class="form-label">Email</label><input type="email" class="form-control" placeholder="john@email.com"/></div>
    <div class="form-group"><label class="form-label">Message</label><textarea class="form-control" rows="3" placeholder="How can we help you?"></textarea></div>
    <button class="btn btn-dark btn-full" onclick="toast('Message sent! We will get back to you within 24 hours.');closeSupportModal()">Send Message</button>`},

  track:{title:'Track Your Order',body:`
    <div style="margin-bottom:20px">
      <div style="font-family:var(--mono);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-muted);margin-bottom:16px">Enter Order ID</div>
      <div class="form-group"><label class="form-label">Order ID</label><input type="text" class="form-control" id="track-order-id" placeholder="e.g. ORD-1234567890"/></div>
      <button class="btn btn-dark btn-full" onclick="trackOrder()" style="margin-bottom:20px">Track Order</button>
      <div id="track-result"></div>
    </div>
    <div style="padding:16px;background:var(--cream);border-radius:var(--r);border:1px solid var(--border)">
      <div style="font-size:12px;font-weight:600;margin-bottom:10px">Order Status Guide</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <div style="display:flex;align-items:center;gap:10px"><span style="background:#FFF3CD;color:#856404;padding:2px 10px;border-radius:20px;font-size:10px;font-weight:600;font-family:var(--mono);white-space:nowrap">Pending</span><span style="font-size:12px;color:var(--text-muted)">Order received, awaiting confirmation</span></div>
        <div style="display:flex;align-items:center;gap:10px"><span style="background:#CCE5FF;color:#004085;padding:2px 10px;border-radius:20px;font-size:10px;font-weight:600;font-family:var(--mono);white-space:nowrap">Processing</span><span style="font-size:12px;color:var(--text-muted)">Order confirmed & being prepared</span></div>
        <div style="display:flex;align-items:center;gap:10px"><span style="background:#D4EDDA;color:#155724;padding:2px 10px;border-radius:20px;font-size:10px;font-weight:600;font-family:var(--mono);white-space:nowrap">Shipped</span><span style="font-size:12px;color:var(--text-muted)">Order dispatched & on the way</span></div>
        <div style="display:flex;align-items:center;gap:10px"><span style="background:#D1ECF1;color:#0C5460;padding:2px 10px;border-radius:20px;font-size:10px;font-weight:600;font-family:var(--mono);white-space:nowrap">Delivered</span><span style="font-size:12px;color:var(--text-muted)">Order successfully delivered</span></div>
        <div style="display:flex;align-items:center;gap:10px"><span style="background:#F8D7DA;color:#721C24;padding:2px 10px;border-radius:20px;font-size:10px;font-weight:600;font-family:var(--mono);white-space:nowrap">Cancelled</span><span style="font-size:12px;color:var(--text-muted)">Order has been cancelled</span></div>
      </div>
    </div>`},

  returns:{title:'Returns & Refunds',body:`
    <div style="display:flex;flex-direction:column;gap:10px">
      <div style="padding:14px;background:var(--cream);border-radius:var(--r);border:1px solid var(--border)"><div style="font-size:13px;font-weight:600;margin-bottom:4px;display:flex;align-items:center;gap:8px"><span style="color:var(--gold)">✓</span>30-Day Return Policy</div><div style="font-size:12px;color:var(--text-muted);line-height:1.6;padding-left:20px">Not satisfied? Return any item within 30 days of delivery for a full refund — no questions asked.</div></div>
      <div style="padding:14px;background:var(--cream);border-radius:var(--r);border:1px solid var(--border)"><div style="font-size:13px;font-weight:600;margin-bottom:4px;display:flex;align-items:center;gap:8px"><span style="color:var(--gold)">✓</span>Free Return Pickup</div><div style="font-size:12px;color:var(--text-muted);line-height:1.6;padding-left:20px">We offer free doorstep pickup for returns across all major cities in India.</div></div>
      <div style="padding:14px;background:var(--cream);border-radius:var(--r);border:1px solid var(--border)"><div style="font-size:13px;font-weight:600;margin-bottom:4px;display:flex;align-items:center;gap:8px"><span style="color:var(--gold)">✓</span>Refund Timeline</div><div style="font-size:12px;color:var(--text-muted);line-height:1.6;padding-left:20px">Refunds processed within 5–7 business days after we receive your return. Credited to original payment method.</div></div>
      <div style="padding:14px;background:var(--cream);border-radius:var(--r);border:1px solid var(--border)"><div style="font-size:13px;font-weight:600;margin-bottom:4px;display:flex;align-items:center;gap:8px"><span style="color:var(--gold)">✓</span>Condition of Items</div><div style="font-size:12px;color:var(--text-muted);line-height:1.6;padding-left:20px">Items must be unused, unwashed, and in original packaging with all tags attached.</div></div>
      <div style="padding:14px;background:var(--cream);border-radius:var(--r);border:1px solid var(--border)"><div style="font-size:13px;font-weight:600;margin-bottom:4px;display:flex;align-items:center;gap:8px"><span style="color:var(--gold)">✓</span>Exchange Option</div><div style="font-size:12px;color:var(--text-muted);line-height:1.6;padding-left:20px">Prefer an exchange? Select a different size or color and we will ship it free of charge.</div></div>
      <div style="padding:14px;background:#FEF3C7;border-radius:var(--r);border:1px solid #FDE68A"><div style="font-size:13px;font-weight:600;margin-bottom:4px;display:flex;align-items:center;gap:8px"><span style="color:#B45309">!</span>Non-Returnable Items</div><div style="font-size:12px;color:#92400E;line-height:1.6;padding-left:20px">Undergarments, earrings, and customized products cannot be returned for hygiene reasons.</div></div>
    </div>`},

  faq:{title:'Frequently Asked Questions',body:`
    <div style="display:flex;flex-direction:column;gap:2px">
      ${[['How do I place an order?','Browse our collection, select your size, click "Add to Selection", then proceed to checkout. Fill in your details and place your order.'],
         ['What payment methods do you accept?','We accept Credit/Debit Cards (Visa, Mastercard, Amex), PayPal, UPI, and Cash on Delivery (COD).'],
         ['How long does delivery take?','Standard delivery takes 3–5 business days. Express delivery (1–2 days) is available for select pin codes.'],
         ['Is Cash on Delivery available?','Yes, COD is available across India for orders up to ₹10,000.'],
         ['How do I track my order?','Go to Footer → Track Order, enter your Order ID to check real-time status.'],
         ['Can I cancel my order?','Orders can be cancelled within 24 hours of placing. Go to Admin → Orders → change status to Cancelled.'],
         ['Are the products authentic?','Yes, all products on LUXE are 100% authentic and sourced directly from authorized distributors.'],
         ['How do I apply a coupon code?','In the Cart page, enter your code in the "Coupon code" field and click Apply. Code WELCOME20 gives 20% off.'],
         ['What is your return policy?','We offer a 30-day hassle-free return policy. See our Returns page for full details.'],
        ].map(([q,a],i)=>`
        <div style="border:1px solid var(--border);border-radius:var(--r);overflow:hidden;margin-bottom:2px">
          <div onclick="toggleFaq(${i})" style="padding:13px 16px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;background:var(--cream)">
            <span style="font-size:13px;font-weight:500">${q}</span>
            <span id="faq-icon-${i}" style="color:var(--gold);font-size:18px;font-family:var(--mono);line-height:1">+</span>
          </div>
          <div id="faq-ans-${i}" style="display:none;padding:12px 16px 14px;font-size:13px;color:var(--text-muted);line-height:1.7;border-top:1px solid var(--border);background:var(--white)">${a}</div>
        </div>`).join('')}
    </div>`}
};

function openSupportModal(type){
  const c=SUPPORT_CONTENT[type];if(!c)return;
  document.getElementById('support-modal-title').textContent=c.title;
  document.getElementById('support-modal-body').innerHTML=c.body;
  document.getElementById('support-modal').classList.add('open');
}
function closeSupportModal(){document.getElementById('support-modal').classList.remove('open');}
function toggleFaq(i){
  const ans=document.getElementById('faq-ans-'+i);
  const icon=document.getElementById('faq-icon-'+i);
  const isOpen=ans.style.display==='block';
  ans.style.display=isOpen?'none':'block';
  icon.textContent=isOpen?'+':'−';
}
function trackOrder(){
  const id=document.getElementById('track-order-id')?.value.trim();
  const result=document.getElementById('track-result');
  if(!id)return toast('Please enter an Order ID','error');
  const orders=getOrders();
  const order=orders.find(o=>o.id===id);
  if(!order){result.innerHTML=`<div style="padding:14px;background:#FEE2E2;border-radius:var(--r);border:1px solid #FECACA;font-size:13px;color:#B91C1C">No order found with ID: <strong>${id}</strong></div>`;return;}
  const cfg=STATUS_CFG[order.status];
  const steps=['pending','processing','shipped','delivered'];
  const cur=steps.indexOf(order.status);
  result.innerHTML=`
    <div style="padding:14px;background:var(--cream);border-radius:var(--r);border:1px solid var(--border);margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--text-muted)">${order.id}</div>
        <span style="background:${cfg.bg};color:${cfg.c};padding:2px 10px;border-radius:20px;font-size:10px;font-weight:600;font-family:var(--mono)">${cfg.l}</span>
      </div>
      <div style="font-size:13px;font-weight:500;margin-bottom:3px">${order.customer?.name||'—'}</div>
      <div style="font-size:12px;color:var(--text-muted)">Ordered: ${order.date} · Total: ₹${order.total?.toFixed(2)}</div>
    </div>
    ${order.status!=='cancelled'?`<div style="display:flex;align-items:flex-start;margin-bottom:18px">${steps.map((s,i)=>{const done=i<=cur;const lbl={pending:'Ordered',processing:'Processing',shipped:'Shipped',delivered:'Delivered'};return`<div style="flex:1;text-align:center"><div style="width:26px;height:26px;border-radius:50%;background:${done?'var(--gold)':'var(--border)'};color:${done?'var(--ink)':'var(--text-muted)'};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;margin:0 auto">${done?'✓':i+1}</div><div style="font-size:9px;font-family:var(--mono);color:${done?'var(--ink)':'var(--text-muted)'};margin-top:5px;letter-spacing:.5px">${lbl[s]}</div></div>${i<3?`<div style="flex:1;height:2px;background:${i<cur?'var(--gold)':'var(--border)'};margin-top:13px"></div>`:''}`}).join('')}</div>`:''}
    <div style="font-family:var(--mono);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-muted);margin-bottom:10px">Items</div>
    ${(order.items||[]).map(i=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px;background:var(--white);border-radius:var(--r);margin-bottom:6px;border:1px solid var(--border)"><div style="display:flex;align-items:center;gap:10px"><div style="width:36px;height:44px;background:var(--parchment);border-radius:var(--r);overflow:hidden;display:flex;align-items:center;justify-content:center">${i.image?`<img src="${i.image}" style="width:100%;height:100%;object-fit:cover"/>`:`<span>${i.emoji||'◈'}</span>`}</div><div><div style="font-size:13px;font-weight:500">${i.name}${i.size?` (${i.size})`:''}</div><div style="font-family:var(--mono);font-size:10px;color:var(--text-muted)">Qty: ${i.qty}</div></div></div><span style="font-family:var(--mono);font-weight:600">₹${(i.price*i.qty).toFixed(2)}</span></div>`).join('')}`;
}

// NAVBAR SEARCH
function navSearch(q){
  const dropdown=document.getElementById('search-dropdown');
  q=q.trim();
  if(!q){dropdown.classList.remove('open');return;}
  const results=PRODUCTS.filter(p=>p.name.toLowerCase().includes(q.toLowerCase())||p.category.toLowerCase().includes(q.toLowerCase())).slice(0,6);
  dropdown.classList.add('open');
  if(!results.length){dropdown.innerHTML=`<div class="search-no-result">No results for "<strong>${q}</strong>"</div>`;return;}
  dropdown.innerHTML=results.map(p=>`
    <div class="search-result-item" onclick="navSearchSelect(${p.id})">
      <div class="search-result-img">
        ${p.image?`<img src="${p.image}"/>`:`<span>${p.emoji||'◈'}</span>`}
      </div>
      <div style="flex:1;min-width:0">
        <div class="search-result-name">${p.name}</div>
        <div class="search-result-meta">${p.category}${p.stock===0?' · <span style="color:var(--rust)">Out of Stock</span>':''}</div>
      </div>
      <div class="search-result-price">₹${p.price}</div>
    </div>`).join('')+`<div class="search-footer" onclick="navSearchAll('${q}')">View all results for "${q}"</div>`;
}
function navSearchSelect(pid){closeNavSearch();document.getElementById('navbar-search-input').value='';openProduct(pid);}
function navSearchAll(q){closeNavSearch();document.getElementById('navbar-search-input').value='';showPage('products');setTimeout(()=>{const inp=document.getElementById('prod-search');if(inp){inp.value=q;filterProds();}},100);}
function closeNavSearch(){document.getElementById('search-dropdown').classList.remove('open');}

// INIT
loadProducts();
updateCartUI();

// ✅ Page load-এ URL hash দেখে সঠিক page দেখাও
const initPage = location.hash.replace('#','') || 'home';
const validPages = ['home','products','cart','checkout','admin','product-detail'];
const startPage = validPages.includes(initPage) ? initPage : 'home';
history.replaceState({page:startPage}, '', '#'+startPage);
showPage(startPage, false);
renderHomePage();