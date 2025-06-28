
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.innerHTML = navMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.getElementById('header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Show/Hide Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
        
        // Change header style on scroll
        const header = document.getElementById('header');
        if (window.pageYOffset > 100) {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Dropdown Menu for Mobile
    const dropdowns = document.querySelectorAll('.dropdown > a');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdownMenu = this.nextElementSibling;
                dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!e.target.matches('.dropdown > a') && !e.target.matches('.dropdown-menu a')) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.style.display = 'none';
                });
            }
        }
    });

    // Toggle Filter Section
    const toggleFilterBtn = document.getElementById('toggleFilterBtn');
    const filterSection = document.getElementById('filterSection');
    
    toggleFilterBtn.addEventListener('click', function() {
        filterSection.classList.toggle('active');
        if (filterSection.classList.contains('active')) {
            this.innerHTML = '<i class="fas fa-times"></i> Hide Filters';
        } else {
            this.innerHTML = '<i class="fas fa-filter"></i> Show Filters';
        }
    });



    // DOM Elements
    const productGrid = document.getElementById('productGrid');
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const sortBy = document.getElementById('sortBy');
    const applyFilter = document.getElementById('applyFilter');
    const resetFilter = document.getElementById('resetFilter');

    // Initialize product display
    displayProducts(products);

    // Price range display
    priceRange.addEventListener('input', function() {
        priceValue.textContent = `Up to ₹${this.value}`;
    });

    // Apply filters
    applyFilter.addEventListener('click', function() {
        filterProducts();
    });

    // Reset filters
    resetFilter.addEventListener('click', function() {
        searchInput.value = '';
        categoryFilter.value = '';
        priceRange.value = 10000;
        priceValue.textContent = 'Up to ₹10,000';
        sortBy.value = 'default';
        displayProducts(products);
    });

    // Filter products function
    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        const maxPrice = parseInt(priceRange.value);
        const sortOption = sortBy.value;

        let filteredProducts = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                                 product.code.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
            const matchesPrice = product.offerPrice <= maxPrice;

            return matchesSearch && matchesCategory && matchesPrice;
        });

        // Sort products
        if (sortOption !== 'default') {
            filteredProducts = sortProducts(filteredProducts, sortOption);
        }

        displayProducts(filteredProducts);
    }

    // Sort products function
    function sortProducts(products, option) {
        return [...products].sort((a, b) => {
            switch (option) {
                case 'price-low':
                    return a.offerPrice - b.offerPrice;
                case 'price-high':
                    return b.offerPrice - a.offerPrice;
                case 'name-asc':
                    return a.name.localeCompare(b.name);
                case 'name-desc':
                    return b.name.localeCompare(a.name);
                case 'discount':
                    const discountA = ((a.price - a.offerPrice) / a.price) * 100;
                    const discountB = ((b.price - b.offerPrice) / b.price) * 100;
                    return discountB - discountA;
                default:
                    return 0;
            }
        });
    }

    // Display products function
    function displayProducts(productsToDisplay) {
        productGrid.innerHTML = '';

        if (productsToDisplay.length === 0) {
            productGrid.innerHTML = `
                <div class="no-products">
                    <i class="fas fa-search"></i>
                    <h3>No Products Found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            `;
            return;
        }

        productsToDisplay.forEach(product => {
            const discount = Math.round(((product.price - product.offerPrice) / product.price) * 100);
            
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image-slider">
                    <div class="slider-container" id="slider-${product.id}">
                        ${product.images.map(img => `<img src="./assets/${img}" alt="${product.name}" class="slider-image">`).join('')}
                    </div>
                    <div class="slider-nav" id="slider-nav-${product.id}">
                        ${product.images.map((_, index) => `<div class="slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`).join('')}
                    </div>
                    <div class="slider-arrow prev" onclick="moveSlide(${product.id}, -1)"><i class="fas fa-chevron-left"></i></div>
                    <div class="slider-arrow next" onclick="moveSlide(${product.id}, 1)"><i class="fas fa-chevron-right"></i></div>
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
                   
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        // Initialize sliders
        productsToDisplay.forEach(product => {
            initSlider(product.id, product.images.length);
        });
    }

    // Initialize slider for a product
    function initSlider(productId, imageCount) {
        const slider = document.getElementById(`slider-${productId}`);
        const dots = document.querySelectorAll(`#slider-nav-${productId} .slider-dot`);
        let currentIndex = 0;

        // Update slider position
        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Update dots
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Dot click event
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                currentIndex = parseInt(this.getAttribute('data-index'));
                updateSlider();
            });
        });
    }

    // Global function for slider navigation
    window.moveSlide = function(productId, direction) {
        const slider = document.getElementById(`slider-${productId}`);
        const dots = document.querySelectorAll(`#slider-nav-${productId} .slider-dot`);
        const imageCount = dots.length;
        let currentIndex = parseInt(slider.getAttribute('data-current') || 0);
        
        currentIndex += direction;
        
        if (currentIndex < 0) {
            currentIndex = imageCount - 1;
        } else if (currentIndex >= imageCount) {
            currentIndex = 0;
        }
        
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        slider.setAttribute('data-current', currentIndex);
        
        // Update dots
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };
});
