
// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    mobileMenuBtn.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        this.innerHTML = navMenu.classList.contains('active') ?
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    // Close dropdown when clicking outside (mobile)
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            if (!e.target.matches('.dropdown > a') && !e.target.matches('.dropdown-menu a')) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.style.display = 'none';
                });
            }
        }
    });

    // Generate categories and products
    generateCategories();

    // Modal close events
    modalClose.addEventListener('click', closeModal);
    productModal.addEventListener('click', function (e) {
        if (e.target === productModal) {
            closeModal();
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

// Generate categories from product data
function generateCategories() {
    // Get unique categories from products
    const categories = [...new Set(products.map(product => product.category))];

    // Create category sections
    categoriesContainer.innerHTML = '';
    categories.forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';

        const categorySlug = category.toLowerCase().replace(/\s+/g, '-');

        categorySection.innerHTML = `
            <div class="collection-header">
                <h3>${category}</h3>
                <p>Explore our premium ${category} collection</p>
            </div>
            <div class="product-grid" id="${categorySlug}-grid">
                <!-- Products will be dynamically inserted here -->
            </div>
        `;

        categoriesContainer.appendChild(categorySection);
    });

    // Display products by category
    displayProductsByCategory();
}

// Display products by category
function displayProductsByCategory() {
    const categories = [...new Set(products.map(product => product.category))];

    categories.forEach(category => {
        const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
        const categoryProducts = products.filter(p => p.category === category);
        const gridElement = document.getElementById(`${categorySlug}-grid`);

        if (gridElement) {
            displayProducts(categoryProducts, gridElement);
        }
    });
}

// Display products function
function displayProducts(productsToDisplay, gridElement) {
    gridElement.innerHTML = '';

    if (productsToDisplay.length === 0) {
        gridElement.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <h3>No Products Found</h3>
                <p>Try adjusting your search criteria</p>
            </div>
        `;
        return;
    }

    productsToDisplay.forEach(product => {
        const discount = Math.round(((product.price - product.offerPrice) / product.price) * 100);

        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-container">
                <img loading="lazy" src="./assets/lng-sanitaryware-${product.category.toLowerCase().replace(/\s+/g, '-')}-${product.images[0]}" alt="${product.name}" class="product-image">
                <div class="product-badges">
                    ${product.badge === 'new' ? '<div class="product-badge badge-new">NEW</div>' : ''}
                    ${product.badge === 'sale' ? '<div class="product-badge badge-sale">SALE</div>' : ''}
                    ${product.badge === 'popular' ? '<div class="product-badge badge-popular">POPULAR</div>' : ''}
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-code">Code: ${product.code}</div>
                <div class="product-price">
                    <span class="current-price">₹${product.offerPrice.toLocaleString()}</span>
                    <span class="original-price">₹${product.price.toLocaleString()}</span>
                    <span class="discount">${discount}% OFF</span>
                </div>
                <button class="view-details-btn" onclick="openProductModal(${product.id})">
                    <i class="fas fa-eye"></i>
                    View Details
                </button>
            </div>
        `;
        gridElement.appendChild(productCard);
    });
}

// Open product modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const discount = Math.round(((product.price - product.offerPrice) / product.price) * 100);

    modalBody.innerHTML = `
        <img src="./assets/lng-sanitaryware-${product.category.toLowerCase().replace(/\s+/g, '-')}-${product.images[0]}" alt="${product.name}" class="modal-image">
        <div class="product-badges">
            ${product.badge === 'new' ? '<div class="product-badge badge-new">NEW</div>' : ''}
            ${product.badge === 'sale' ? '<div class="product-badge badge-sale">SALE</div>' : ''}
            ${product.badge === 'popular' ? '<div class="product-badge badge-popular">POPULAR</div>' : ''}
        </div>
        
        <h2>${product.name}</h2>
        <div class="product-code">Product Code: ${product.code}</div>
        <div class="product-category">Category: ${product.category}</div>
        
        <div class="product-price" style="margin: 20px 0;">
            <span class="current-price">₹${product.offerPrice.toLocaleString()}</span>
            <span class="original-price">₹${product.price.toLocaleString()}</span>
            <span class="discount">${discount}% OFF</span>
        </div>
        
        <div class="modal-details">
            ${product.material ? `<div class="detail-item">
                <span class="detail-label">Material:</span>
                <span class="detail-value">${product.material}</span>
            </div>` : ''}
            
            ${product.color ? `<div class="detail-item">
                <span class="detail-label">Color:</span>
                <span class="detail-value">${product.color}</span>
            </div>` : ''}
            
            ${product.dimensions ? `<div class="detail-item">
                <span class="detail-label">Dimensions:</span>
                <span class="detail-value">${product.dimensions}</span>
            </div>` : ''}
            
            ${product.capacity ? `<div class="detail-item">
                <span class="detail-label">Capacity:</span>
                <span class="detail-value">${product.capacity}</span>
            </div>` : ''}
            
            ${product.warranty ? `<div class="detail-item">
                <span class="detail-label">Warranty:</span>
                <span class="detail-value">${product.warranty}</span>
            </div>` : ''}
            
            ${product.features ? `<div class="detail-item">
                <span class="detail-label">Features:</span>
                <span class="detail-value">${product.features}</span>
            </div>` : ''}
            
            ${product.installation ? `<div class="detail-item">
                <span class="detail-label">Installation:</span>
                <span class="detail-value">${product.installation}</span>
            </div>` : ''}
        </div>
        
        <button class="view-details-btn" style="margin-top: 30px;" onclick="window.open('https://wa.me/919436000003?text=Hi, I am interested in ${product.name} (${product.code})', '_blank')">
            <i class="fab fa-whatsapp"></i>
            Inquire on WhatsApp
        </button>
    `;

    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal function
function closeModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Global function for modal
window.openProductModal = openProductModal;
