function initApp() {
  initTheme();
  initDirection();
  initMobileMenu();
  initImageFallback();
  initLinkToasts();
  initAnimations();
  initBadges();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Theme
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
  } else {
      document.documentElement.classList.remove('dark');
  }
  
  const updateIcon = () => {
      if (!themeToggle) return;
      const isDark = document.documentElement.classList.contains('dark');
      if (isDark) {
          themeToggle.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`;
      } else {
          themeToggle.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
      }
  };
  
  updateIcon();

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    const newTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    updateIcon();
    showToast(`${newTheme === 'dark' ? 'Dark' : 'Light'} mode enabled.`);
  };

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
}

// Direction (RTL / LTR)
function initDirection() {
  const dirToggle = document.getElementById('dir-toggle');
  
  const savedDir = localStorage.getItem('direction') || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);
  
  const toggleDir = () => {
    const currentDir = document.documentElement.getAttribute('dir');
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    document.documentElement.setAttribute('dir', newDir);
    localStorage.setItem('direction', newDir);
    showToast(`RTL layout ${newDir === 'rtl' ? 'enabled' : 'disabled'}.`);
  };

  if (dirToggle) dirToggle.addEventListener('click', toggleDir);
}


// Mobile Menu
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  if(!menuBtn) return;

  let mobileMenu = document.getElementById('mobile-menu');
  if(!mobileMenu) {
      mobileMenu = document.createElement('div');
      mobileMenu.id = 'mobile-menu';
      mobileMenu.className = 'fixed inset-0 bg-white dark:bg-gray-900 z-[100] hidden flex-col transition-colors';
      
      const path = window.location.pathname.toLowerCase().replace(/\\/g, '/');
      const isInPages = path.includes('/pages/');
      
      const home1Href = isInPages ? '../index.html' : 'index.html';
      const home2Href = isInPages ? 'our-story.html' : 'pages/our-story.html';
      const aboutHref = isInPages ? 'about.html' : 'pages/about.html';
      const productsHref = isInPages ? 'products.html' : 'pages/products.html';
      const registryHref = isInPages ? 'registry.html' : 'pages/registry.html';
      const blogHref = isInPages ? 'blog.html' : 'pages/blog.html';
      const contactHref = isInPages ? 'contact.html' : 'pages/contact.html';
      const wishlistHref = isInPages ? 'wishlist.html' : 'pages/wishlist.html';
      const cartHref = isInPages ? 'cart.html' : 'pages/cart.html';
      
      mobileMenu.innerHTML = `
        <div class="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
            <span class="font-serif text-xl font-medium text-gray-900 dark:text-white">Menu</span>
            <div class="flex items-center gap-2">
                <button id="mobile-dir-toggle" class="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-full" title="Toggle RTL/LTR">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                </button>
                <button id="mobile-theme-toggle" class="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-full" title="Toggle Theme">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                </button>
                <button id="mobile-menu-close" class="p-2 text-gray-600 dark:text-gray-300 ml-2" aria-label="Close menu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
        </div>
        <div class="flex-grow overflow-y-auto p-6 flex flex-col gap-4">
            <a href="${home1Href}" class="text-lg font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center justify-between hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
                <span>Home 1 — Collection</span>
                <span class="text-xs px-2 py-0.5 rounded bg-sage-50 dark:bg-sage-900/30 text-sage-600 dark:text-sage-400 font-medium">Home</span>
            </a>
            <a href="${home2Href}" class="text-lg font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center justify-between hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
                <span>Home 2 — Our Story</span>
                <span class="text-xs px-2 py-0.5 rounded bg-sage-50 dark:bg-sage-900/30 text-sage-600 dark:text-sage-400 font-medium">Story</span>
            </a>
            <a href="${aboutHref}" class="text-lg font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 hover:text-sage-600 dark:hover:text-sage-400 transition-colors">About Us</a>
            <a href="${productsHref}" class="text-lg font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 hover:text-sage-600 dark:hover:text-sage-400 transition-colors">Nursery Products</a>
            <a href="${registryHref}" class="text-lg font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 hover:text-sage-600 dark:hover:text-sage-400 transition-colors">Baby Registry</a>
            <a href="${blogHref}" class="text-lg font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 hover:text-sage-600 dark:hover:text-sage-400 transition-colors">Blog</a>
            <a href="${contactHref}" class="text-lg font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 hover:text-sage-600 dark:hover:text-sage-400 transition-colors">Contact</a>
            
            <div class="mt-4 flex flex-col gap-4">
                <a href="${wishlistHref}" class="relative flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-sage-600 transition-colors w-max">
                    <div class="relative">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        <span id="mobile-wishlist-badge" class="absolute -top-1 -right-2 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white bg-sage-600 rounded-full">0</span>
                    </div>
                    <span class="text-base font-medium">Wishlist</span>
                </a>
                <a href="${cartHref}" class="relative flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-sage-600 transition-colors w-max">
                    <div class="relative">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span id="mobile-cart-badge" class="absolute -top-1 -right-2 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white bg-sage-600 rounded-full">0</span>
                    </div>
                    <span class="text-base font-medium">Cart</span>
                </a>
            </div>
        </div>
      `;
      document.body.appendChild(mobileMenu);
      
      // Auto close on link click
      mobileMenu.querySelectorAll('a').forEach(a => {
          a.addEventListener('click', () => {
              mobileMenu.classList.add('hidden');
              mobileMenu.classList.remove('flex');
          });
      });

      // Hook up mobile theme toggle
      const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
      if (mobileThemeToggle) {
          mobileThemeToggle.addEventListener('click', () => {
              document.documentElement.classList.toggle('dark');
              const newTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
              try { localStorage.setItem('theme', newTheme); } catch(e) {}
              
              const isDark = newTheme === 'dark';
              const iconSvg = isDark 
                ? `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`
                : `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
                
              mobileThemeToggle.innerHTML = iconSvg;
              const desktopToggle = document.getElementById('theme-toggle');
              if(desktopToggle) desktopToggle.innerHTML = iconSvg;
              
              showToast(`${isDark ? 'Dark' : 'Light'} mode enabled.`);
          });
          
          const isDark = document.documentElement.classList.contains('dark');
          mobileThemeToggle.innerHTML = isDark 
                ? `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`
                : `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
      }
      
      // Hook up mobile RTL toggle
      const mobileDirToggle = document.getElementById('mobile-dir-toggle');
      if (mobileDirToggle) {
          mobileDirToggle.addEventListener('click', () => {
              const currentDir = document.documentElement.getAttribute('dir');
              const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
              document.documentElement.setAttribute('dir', newDir);
              try { localStorage.setItem('direction', newDir); } catch(e) {}
              showToast(`RTL layout ${newDir === 'rtl' ? 'enabled' : 'disabled'}.`);
          });
      }
      
      if(window.updateBadges) window.updateBadges();
  }

  const closeBtn = document.getElementById('mobile-menu-close');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
  });

  if(closeBtn) {
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
    });
  }
}

// Image Fallback
function initImageFallback() {
  const images = document.querySelectorAll('img');
  const fallbackUrl = 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80'; 
  
  images.forEach(img => {
    img.addEventListener('error', function() {
      if (this.src !== fallbackUrl) {
        this.src = fallbackUrl;
      }
    });
  });
}

// Toast System
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.right = '20px';
    container.style.zIndex = '9999';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '10px';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.style.background = 'rgba(0,0,0,0.8)';
  toast.style.color = 'white';
  toast.style.padding = '12px 20px';
  toast.style.borderRadius = '8px';
  toast.style.fontSize = '14px';
  toast.style.transition = 'opacity 0.3s ease';
  toast.style.opacity = '0';
  
  const text = document.createElement('span');
  text.textContent = message;
  toast.appendChild(text);

  container.appendChild(toast);
  void toast.offsetWidth;
  toast.style.opacity = '1';

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Link Toasts
function initLinkToasts() {
  const toastLinks = document.querySelectorAll('[data-toast]');
  toastLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      const msg = link.getAttribute('data-toast');
      
      if (href && href !== '#' && !href.startsWith('http') && link.tagName === 'A') {
        e.preventDefault();
        showToast(msg);
        setTimeout(() => {
          window.location.href = href;
        }, 800);
      } else {
        showToast(msg);
      }
    });
  });
}

// Fade Up Animations
function initAnimations() {
  const elements = document.querySelectorAll('.fade-up:not(.product-card)');
  
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => {
      el.classList.add('visible', 'opacity-100', 'translate-y-0');
      el.classList.remove('opacity-0', 'translate-y-4');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible', 'opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-4');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '40px' });

  elements.forEach(el => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-4');
      observer.observe(el);
  });
}

// =========================================================================
// Central Products Master Catalog
// =========================================================================
const productsList = [
    { id: 'prod-01', name: 'Haven Convertible Crib', category: 'Cribs & Cots', price: 35000, image: 'https://i.pinimg.com/1200x/96/18/18/961818b0e00fdf7140885a8682a7ce93.jpg', variant: 'Warm White • Solid Oak' },
    { id: 'prod-02', name: 'Willow 3-in-1 Crib', category: 'Cribs & Cots', price: 28000, image: 'https://i.pinimg.com/1200x/d7/27/64/d7276431482de4de5a81a06d5539705c.jpg', variant: 'Soft Sage • Sustainable Pine' },
    { id: 'prod-03', name: 'Meadow Cot', category: 'Cribs & Cots', price: 22000, image: 'https://i.pinimg.com/736x/7d/3c/9d/7d3c9d3fe387f6092a0e916cdd467cc3.jpg', variant: 'Natural Wood • Birch' },
    { id: 'prod-04', name: 'Luna Mini Crib', category: 'Cribs & Cots', price: 18000, image: 'https://i.pinimg.com/736x/9c/fe/59/9cfe597ae8f014d068d441a14aa84023.jpg', variant: 'Ivory • Solid Beech' },
    { id: 'prod-05', name: 'Haven 6-Drawer Dresser', category: 'Dressers', price: 45000, image: 'https://i.pinimg.com/1200x/30/e3/cc/30e3ccd8185377de379cd9442c8b71be.jpg', variant: 'Warm White • Solid Oak' },
    { id: 'prod-06', name: 'Willow Changing Dresser', category: 'Dressers', price: 32000, image: 'https://i.pinimg.com/736x/8b/d4/b2/8bd4b20ab76b007402e2fa18f29cfd1b.jpg', variant: 'Soft Sage • Pine Changing Topper' },
    { id: 'prod-07', name: 'Oakline Storage Dresser', category: 'Dressers', price: 38000, image: 'https://i.pinimg.com/1200x/3e/d4/64/3ed4649513cc3be22f158dd81bb9d5eb.jpg', variant: 'Natural Oak • Oak Veneer' },
    { id: 'prod-08', name: 'Cloud Nursery Rocker', category: 'Rocking Chairs', price: 25000, image: 'https://i.pinimg.com/236x/da/de/c5/dadec541ceb91305eb7f78d8ff29bbef.jpg', variant: 'Oatmeal • Linen & Solid Wood' },
    { id: 'prod-09', name: 'Little Haven Toy Cabinet', category: 'Storage', price: 15000, image: 'https://i.pinimg.com/736x/53/7d/38/537d38f12a7845155d5fb2453382acde.jpg', variant: 'Soft Sage • Child-Safe Pine' },
    { id: 'prod-10', name: 'Organic Cotton Crib Sheet', category: 'Accessories', price: 3500, image: 'https://i.pinimg.com/1200x/33/f3/aa/33f3aa6b4d8c5948cc5beb16a4106334.jpg', variant: 'Sand • 100% Organic Cotton' }
];

// =========================================================================
// Wishlist Logic & Storage
// =========================================================================
function getSavedWishlist() {
    let items = [];
    try {
        const a = JSON.parse(localStorage.getItem('wishlistItems') || '[]');
        const b = JSON.parse(localStorage.getItem('wishlist') || '[]');
        const set = new Set();
        if (Array.isArray(a)) a.forEach(x => set.add(String(typeof x === 'object' && x ? x.id : x)));
        if (Array.isArray(b)) b.forEach(x => set.add(String(typeof x === 'object' && x ? x.id : x)));
        items = Array.from(set).filter(Boolean);
    } catch(e) {
        items = [];
    }
    return items;
}

function saveWishlistItems(items) {
    try {
        localStorage.setItem('wishlistItems', JSON.stringify(items));
        localStorage.setItem('wishlist', JSON.stringify(items));
        localStorage.setItem('wishlistCount', String(items.length));
    } catch(e) {}
}

// =========================================================================
// Cart Logic & Storage
// =========================================================================
function getSavedCart() {
    try {
        const raw = localStorage.getItem('cartItems');
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
            return parsed.filter(item => item && item.id);
        }
        return [];
    } catch (e) {
        return [];
    }
}

function saveCartItems(items) {
    try {
        const valid = Array.isArray(items) ? items.filter(item => item && item.id) : [];
        localStorage.setItem('cartItems', JSON.stringify(valid));
        const totalQty = valid.reduce((sum, item) => sum + (parseInt(item.qty, 10) || 1), 0);
        localStorage.setItem('cartCount', String(totalQty));
    } catch(e) {}
}

function addToCart(productId, qty = 1) {
    if (!productId) return;
    const items = getSavedCart();
    const existing = items.find(i => i.id === productId);
    const addQty = parseInt(qty, 10) || 1;
    if (existing) {
        existing.qty = (parseInt(existing.qty, 10) || 1) + addQty;
    } else {
        items.push({ id: productId, qty: addQty });
    }
    saveCartItems(items);
    updateBadges();

    const product = productsList.find(p => p.id === productId);
    const title = product ? product.name : 'Item';
    if (window.showToast) window.showToast(`${title} added to Cart`);
}

function removeFromCart(productId) {
    if (!productId) return;
    let items = getSavedCart().filter(i => i.id !== productId);
    saveCartItems(items);
    updateBadges();
    if (window.showToast) window.showToast('Item removed from cart');
}

function updateCartItemQty(productId, delta) {
    if (!productId) return;
    let items = getSavedCart();
    const item = items.find(i => i.id === productId);
    if (item) {
        let current = parseInt(item.qty, 10) || 1;
        let newQty = current + delta;
        if (newQty <= 0) {
            removeFromCart(productId);
            return;
        }
        item.qty = newQty;
        saveCartItems(items);
        updateBadges();
    }
}

function clearAllCart() {
    saveCartItems([]);
    updateBadges();
    if (window.showToast) window.showToast('Cart cleared');
}

// =========================================================================
// Badges Sync (Header & Mobile)
// =========================================================================
function updateBadges() {
    const cartItems = getSavedCart();
    const cartCount = cartItems.reduce((sum, i) => sum + (parseInt(i.qty, 10) || 1), 0);
    localStorage.setItem('cartCount', String(cartCount));

    const wishlistItems = getSavedWishlist();
    const wishCount = String(wishlistItems.length);

    const cartBadges = document.querySelectorAll('#nav-cart-badge, #mobile-cart-badge');
    const wishBadges = document.querySelectorAll('#nav-wishlist-badge, #mobile-wishlist-badge');

    cartBadges.forEach(b => b.textContent = String(cartCount));
    wishBadges.forEach(b => b.textContent = wishCount);
}

// =========================================================================
// Init Badges & Button Bindings
// =========================================================================
function initBadges() {
    updateBadges();

    // Bind Add-to-Cart Buttons across any page
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    addToCartBtns.forEach(btn => {
        if (btn.dataset.cartBound === 'true') return;
        btn.dataset.cartBound = 'true';
        
        btn.addEventListener('click', (e) => {
            const pId = btn.getAttribute('data-id');
            if (pId) {
                e.preventDefault();
                e.stopPropagation();
                addToCart(pId, 1);
                
                // Visual feedback on button
                const origText = btn.textContent;
                btn.textContent = 'Added ✓';
                btn.classList.add('bg-sage-800');
                setTimeout(() => {
                    btn.textContent = origText;
                    btn.classList.remove('bg-sage-800');
                }, 1200);
            }
        });
    });

    // Bind Wishlist Buttons
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    const savedWishlistItems = getSavedWishlist();
    
    wishlistBtns.forEach(btn => {
        const productId = btn.getAttribute('data-id');
        const icon = btn.querySelector('svg');

        // Initial icon state
        if (productId && savedWishlistItems.includes(productId)) {
            btn.classList.add('active-wish');
            if (icon) {
                icon.setAttribute('fill', 'currentColor');
                icon.classList.add('text-red-500');
                icon.classList.remove('text-gray-400');
            }
        } else {
            btn.classList.remove('active-wish');
            if (icon) {
                icon.setAttribute('fill', 'none');
                icon.classList.remove('text-red-500');
                icon.classList.add('text-gray-400');
            }
        }
        
        // Prevent duplicate listener binding
        if (btn.dataset.wishlistBound === 'true') return;
        btn.dataset.wishlistBound = 'true';
        
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const btnIcon = btn.querySelector('svg');
            const pId = btn.getAttribute('data-id');
            if (!pId) return;
            
            let currentItems = getSavedWishlist();
            const isCurrentlyWishlisted = currentItems.includes(pId);
            
            if (isCurrentlyWishlisted) {
                // Remove
                currentItems = currentItems.filter(id => id !== pId);
                btn.classList.remove('active-wish');
                if (btnIcon) {
                    btnIcon.setAttribute('fill', 'none');
                    btnIcon.classList.remove('text-red-500');
                    btnIcon.classList.add('text-gray-400');
                }
                saveWishlistItems(currentItems);
                showToast('Removed from Wishlist');
            } else {
                // Add
                currentItems.push(pId);
                btn.classList.add('active-wish');
                if (btnIcon) {
                    btnIcon.setAttribute('fill', 'currentColor');
                    btnIcon.classList.add('text-red-500');
                    btnIcon.classList.remove('text-gray-400');
                }
                saveWishlistItems(currentItems);
                showToast('Added to Wishlist');
            }
            updateBadges();
        });
    });
}

// Global Window Exports
window.productsList = productsList;
window.getSavedWishlist = getSavedWishlist;
window.saveWishlistItems = saveWishlistItems;
window.getSavedCart = getSavedCart;
window.saveCartItems = saveCartItems;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartItemQty = updateCartItemQty;
window.clearAllCart = clearAllCart;
window.updateBadges = updateBadges;
window.initBadges = initBadges;
window.showToast = showToast;
window.initAnimations = initAnimations;