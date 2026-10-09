const productsData = [
  { id: 'prod-01', name: 'Haven Convertible Crib', category: 'Cribs & Cots', collection: 'Classic', price: 35000, originalPrice: 40000, rating: 4.9, reviews: 124, image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80', description: 'A timeless convertible crib designed to grow with your baby.', material: 'Solid Oak Wood', color: 'Warm White', dimensions: '135cm x 75cm x 90cm', stock: true, badge: 'Bestseller' },
  { id: 'prod-02', name: 'Willow 3-in-1 Crib', category: 'Cribs & Cots', collection: 'Soft Sage', price: 28000, originalPrice: null, rating: 4.8, reviews: 89, image: 'https://plus.unsplash.com/premium_photo-1664300456108-7243cb8dff41?auto=format&fit=crop&w=800&q=80', description: 'Beautifully crafted crib with a soft sage finish.', material: 'Sustainable Pine', color: 'Soft Sage', dimensions: '130cm x 70cm x 85cm', stock: true, badge: 'New' },
  { id: 'prod-03', name: 'Meadow Cot', category: 'Cribs & Cots', collection: 'Natural Oak', price: 22000, originalPrice: null, rating: 4.7, reviews: 56, image: 'https://images.unsplash.com/photo-1617441113009-4a0b81ea6228?auto=format&fit=crop&w=800&q=80', description: 'A minimalist and elegant cot for modern nurseries.', material: 'Birch Wood', color: 'Natural Wood', dimensions: '120cm x 60cm x 80cm', stock: true, badge: null },
  { id: 'prod-04', name: 'Luna Mini Crib', category: 'Cribs & Cots', collection: 'Scandinavian', price: 18000, originalPrice: 20000, rating: 4.6, reviews: 42, image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80', description: 'Perfect space-saving crib for smaller nursery rooms.', material: 'Solid Beech', color: 'Ivory', dimensions: '100cm x 55cm x 80cm', stock: false, badge: 'Sold Out' },
  { id: 'prod-05', name: 'Haven 6-Drawer Dresser', category: 'Dressers', collection: 'Classic', price: 45000, originalPrice: 50000, rating: 4.9, reviews: 210, image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80', description: 'Spacious 6-drawer dresser with soft-close mechanisms.', material: 'Solid Oak Wood', color: 'Warm White', dimensions: '140cm x 50cm x 85cm', stock: true, badge: null },
  { id: 'prod-06', name: 'Willow Changing Dresser', category: 'Changing Tables', collection: 'Soft Sage', price: 32000, originalPrice: null, rating: 4.8, reviews: 115, image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80', description: 'A dresser that doubles as a changing table with a removable topper.', material: 'Sustainable Pine', color: 'Soft Sage', dimensions: '100cm x 50cm x 90cm', stock: true, badge: 'Popular' },
  { id: 'prod-07', name: 'Oakline Storage Dresser', category: 'Dressers', collection: 'Natural Oak', price: 38000, originalPrice: null, rating: 4.7, reviews: 75, image: 'https://plus.unsplash.com/premium_photo-1664300456108-7243cb8dff41?auto=format&fit=crop&w=800&q=80', description: 'Contemporary dresser with generous storage.', material: 'Oak Veneer', color: 'Natural Oak', dimensions: '120cm x 45cm x 85cm', stock: true, badge: null },
  { id: 'prod-08', name: 'Cloud Nursery Rocker', category: 'Rocking Chairs', collection: 'Scandinavian', price: 25000, originalPrice: null, rating: 5.0, reviews: 310, image: 'https://images.unsplash.com/photo-1617441113009-4a0b81ea6228?auto=format&fit=crop&w=800&q=80', description: 'Ultra-comfortable upholstered rocking chair for late-night feeds.', material: 'Linen Blend & Wood', color: 'Oatmeal', dimensions: '80cm x 90cm x 100cm', stock: true, badge: 'Bestseller' },
  { id: 'prod-09', name: 'Haven Glider Chair', category: 'Rocking Chairs', collection: 'Classic', price: 29000, originalPrice: 32000, rating: 4.8, reviews: 95, image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80', description: 'Smooth gliding chair with matching ottoman included.', material: 'Performance Fabric', color: 'Warm White', dimensions: '85cm x 85cm x 95cm', stock: true, badge: null },
  { id: 'prod-10', name: 'Softwood Rocking Chair', category: 'Rocking Chairs', collection: 'Natural Oak', price: 21000, originalPrice: null, rating: 4.6, reviews: 62, image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80', description: 'Classic wooden rocker with an ergonomic backrest.', material: 'Solid Ash Wood', color: 'Natural Ash', dimensions: '65cm x 80cm x 105cm', stock: true, badge: null },
  { id: 'prod-11', name: 'Little Haven Toy Cabinet', category: 'Storage', collection: 'Soft Sage', price: 15000, originalPrice: null, rating: 4.9, reviews: 150, image: 'https://images.unsplash.com/photo-1617441113009-4a0b81ea6228?auto=format&fit=crop&w=800&q=80', description: 'Low-height storage cabinet perfect for toddler accessibility.', material: 'MDF & Pine', color: 'Soft Sage', dimensions: '120cm x 40cm x 60cm', stock: true, badge: 'New' },
  { id: 'prod-12', name: 'Willow Nursery Shelf', category: 'Storage', collection: 'Classic', price: 8000, originalPrice: 9500, rating: 4.7, reviews: 88, image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80', description: 'Elegant wall-mounted shelving for books and decor.', material: 'Solid Oak', color: 'Warm White', dimensions: '80cm x 20cm x 15cm', stock: true, badge: null },
  { id: 'prod-13', name: 'Oak Storage Chest', category: 'Storage', collection: 'Natural Oak', price: 19000, originalPrice: null, rating: 4.8, reviews: 105, image: 'https://plus.unsplash.com/premium_photo-1664300456108-7243cb8dff41?auto=format&fit=crop&w=800&q=80', description: 'A timeless chest for blankets, toys, and keepsakes.', material: 'Oak Wood', color: 'Natural Oak', dimensions: '90cm x 45cm x 50cm', stock: true, badge: null },
  { id: 'prod-14', name: 'Mini Haven Nightstand', category: 'Nightstands', collection: 'Classic', price: 11000, originalPrice: null, rating: 4.6, reviews: 45, image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80', description: 'Compact bedside table with a single drawer.', material: 'Solid Oak', color: 'Warm White', dimensions: '40cm x 40cm x 55cm', stock: true, badge: null },
  { id: 'prod-15', name: 'Soft Oak Bedside Table', category: 'Nightstands', collection: 'Natural Oak', price: 12500, originalPrice: 15000, rating: 4.7, reviews: 54, image: 'https://images.unsplash.com/photo-1617441113009-4a0b81ea6228?auto=format&fit=crop&w=800&q=80', description: 'Minimalist nightstand featuring an open shelf and drawer.', material: 'Oak Veneer', color: 'Natural Oak', dimensions: '45cm x 40cm x 55cm', stock: true, badge: null },
  { id: 'prod-16', name: 'Haven Changing Tray', category: 'Accessories', collection: 'Classic', price: 6000, originalPrice: null, rating: 4.8, reviews: 200, image: 'https://plus.unsplash.com/premium_photo-1664300456108-7243cb8dff41?auto=format&fit=crop&w=800&q=80', description: 'Secure changing tray designed to fit atop Haven dressers.', material: 'Solid Oak', color: 'Warm White', dimensions: '85cm x 45cm x 10cm', stock: true, badge: 'Popular' },
  { id: 'prod-17', name: 'Organic Cotton Crib Sheet', category: 'Accessories', collection: 'Scandinavian', price: 3500, originalPrice: null, rating: 5.0, reviews: 450, image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80', description: 'Breathable, soft, and completely organic fitted sheet.', material: '100% Organic Cotton', color: 'Sand', dimensions: 'Standard Crib', stock: true, badge: 'Bestseller' },
  { id: 'prod-18', name: 'Knitted Nursery Blanket', category: 'Accessories', collection: 'Soft Sage', price: 4200, originalPrice: 5000, rating: 4.9, reviews: 180, image: 'https://images.unsplash.com/photo-1617441113009-4a0b81ea6228?auto=format&fit=crop&w=800&q=80', description: 'Warm and gentle chunky knit blanket for cozy moments.', material: 'Cotton Blend', color: 'Soft Sage', dimensions: '100cm x 120cm', stock: true, badge: null }
];

window.productsData = productsData;

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('products-grid')) {
    initProductsPage();
  }
});

function initProductsPage() {
  const grid = document.getElementById('products-grid');
  const emptyState = document.getElementById('empty-state');
  const searchInput = document.getElementById('product-search');
  const sortSelect = document.getElementById('product-sort');
  const categoryFilters = document.querySelectorAll('.category-filter');
  
  let currentCategory = 'All';
  let currentSearch = '';
  let currentSort = 'Featured';

  // Apply default category if in URL
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  if (catParam) {
    currentCategory = catParam;
    categoryFilters.forEach(btn => {
      if(btn.dataset.category === catParam) {
        btn.classList.add('bg-gray-800', 'text-white');
        btn.classList.remove('bg-gray-100', 'text-gray-800');
      } else {
        btn.classList.remove('bg-gray-800', 'text-white');
        btn.classList.add('bg-gray-100', 'text-gray-800');
      }
    });
  }

  const formatPrice = (price) => {
    return '₹' + price.toLocaleString('en-IN');
  };

  const renderProducts = (products) => {
    grid.innerHTML = '';
    if (products.length === 0) {
      grid.classList.add('hidden');
      emptyState.classList.remove('hidden');
      return;
    }
    
    grid.classList.remove('hidden');
    emptyState.classList.add('hidden');

    products.forEach(product => {
      const isWishlisted = window.isInWishlist ? window.isInWishlist(product.id) : false;
      const wishlistIconColor = isWishlisted ? 'text-red-500 fill-current' : 'text-gray-400';
      
      const card = document.createElement('div');
      card.className = 'surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col fade-up visible';
      
      card.innerHTML = `
        <div class="relative aspect-[4/3] bg-gray-100 overflow-hidden group hover-zoom">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
          ${product.badge ? `<span class="absolute top-3 left-3 bg-white text-xs font-semibold px-2 py-1 rounded shadow-sm text-gray-800">${product.badge}</span>` : ''}
          <button class="wishlist-btn absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm hover:bg-gray-50 transition-colors" data-id="${product.id}" aria-label="Add to Wishlist">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ${wishlistIconColor} wishlist-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
        <div class="p-5 flex flex-col flex-grow">
          <div class="text-xs text-gray-500 mb-1 tracking-wide uppercase">${product.category}</div>
          <h3 class="text-lg font-medium text-gray-900 mb-2 font-serif">${product.name}</h3>
          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400 text-sm">
              ★★★★★
            </div>
            <span class="text-xs text-gray-500 ml-2">(${product.reviews})</span>
          </div>
          <div class="mt-auto flex items-center justify-between">
            <div>
              <span class="text-lg font-semibold text-gray-900">${formatPrice(product.price)}</span>
              ${product.originalPrice ? `<span class="text-sm text-gray-500 line-through ml-2">${formatPrice(product.originalPrice)}</span>` : ''}
            </div>
            <a href="/pages/product-details.html?id=${product.id}" data-toast="Opening product details..." class="text-sm font-medium underline text-gray-800 hover:text-gray-600">View Details</a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    // Rebind wishlist buttons
    if (window.initWishlistButtons) {
      window.initWishlistButtons();
    }
    // Rebind toasts
    if (window.initLinkToasts) {
      window.initLinkToasts();
    }
  };

  const updateFilters = () => {
    let filtered = productsData.filter(p => {
      const matchCat = currentCategory === 'All' || p.category === currentCategory;
      const matchSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase()) || 
                          p.category.toLowerCase().includes(currentSearch.toLowerCase()) ||
                          p.collection.toLowerCase().includes(currentSearch.toLowerCase());
      return matchCat && matchSearch;
    });

    if (currentSort === 'Price: Low to High') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'Price: High to Low') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'Rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'Newest') {
      // Simulate Newest by placing products with 'New' badge first
      filtered.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0));
    }

    renderProducts(filtered);
  };

  // Event Listeners
  categoryFilters.forEach(btn => {
    btn.addEventListener('click', (e) => {
      categoryFilters.forEach(b => {
        b.classList.remove('bg-gray-800', 'text-white');
        b.classList.add('bg-gray-100', 'text-gray-800');
      });
      e.target.classList.remove('bg-gray-100', 'text-gray-800');
      e.target.classList.add('bg-gray-800', 'text-white');
      
      currentCategory = e.target.dataset.category;
      window.showToast(`Showing ${currentCategory}.`);
      updateFilters();
    });
  });

  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    updateFilters();
  });

  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    updateFilters();
  });

  document.getElementById('clear-filters').addEventListener('click', () => {
    currentSearch = '';
    searchInput.value = '';
    currentCategory = 'All';
    currentSort = 'Featured';
    sortSelect.value = 'Featured';
    
    categoryFilters.forEach(b => {
      b.classList.remove('bg-gray-800', 'text-white');
      b.classList.add('bg-gray-100', 'text-gray-800');
    });
    categoryFilters[0].classList.add('bg-gray-800', 'text-white');
    categoryFilters[0].classList.remove('bg-gray-100', 'text-gray-800');
    
    updateFilters();
  });

  // Initial render
  updateFilters();
}
