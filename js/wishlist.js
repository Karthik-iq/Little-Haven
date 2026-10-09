document.addEventListener('DOMContentLoaded', () => {
  initWishlistButtons();
});

function getWishlist() {
  const data = localStorage.getItem('wishlist');
  return data ? JSON.parse(data) : [];
}

function saveWishlist(wishlist) {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function isInWishlist(id) {
  return getWishlist().includes(id);
}

window.isInWishlist = isInWishlist;

function initWishlistButtons() {
  const buttons = document.querySelectorAll('.wishlist-btn');
  buttons.forEach(btn => {
    // Remove old listeners to prevent duplicates if re-rendered
    const clone = btn.cloneNode(true);
    btn.parentNode.replaceChild(clone, btn);
    
    clone.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = clone.dataset.id;
      const wishlist = getWishlist();
      const icon = clone.querySelector('.wishlist-icon');
      
      if (wishlist.includes(id)) {
        const index = wishlist.indexOf(id);
        wishlist.splice(index, 1);
        icon.classList.remove('text-red-500', 'fill-current');
        icon.classList.add('text-gray-400');
        icon.setAttribute('fill', 'none');
        window.showToast('Removed from your wishlist.');
      } else {
        wishlist.push(id);
        icon.classList.add('text-red-500', 'fill-current');
        icon.classList.remove('text-gray-400');
        window.showToast('Added to your wishlist.');
      }
      
      saveWishlist(wishlist);
    });
  });
}

window.initWishlistButtons = initWishlistButtons;
