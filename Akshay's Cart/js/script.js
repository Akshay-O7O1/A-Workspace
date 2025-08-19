// Akshay's Cart - JavaScript Functions

$(document).ready(function() {
    // Menu items data
    const menuItems = [
        {
            id: 1,
            name: "Margherita Pizza",
            price: 299,
            category: "pizza",
            image: "images/pizza-margherita.jpg",
            description: "Fresh tomatoes, mozzarella cheese, and basil"
        },
        {
            id: 2,
            name: "Pepperoni Pizza",
            price: 399,
            category: "pizza",
            image: "images/pizza-pepperoni.jpg",
            description: "Pepperoni, mozzarella cheese, and tomato sauce"
        },
        {
            id: 3,
            name: "Classic Burger",
            price: 199,
            category: "burger",
            image: "images/burger-classic.jpg",
            description: "Potato Bean patty, lettuce, tomato, onion, and special sauce"
        },
        {
            id: 5,
            name: "Pasta Carbonara",
            price: 249,
            category: "pasta",
            image: "images/pasta-carbonara.jpg",
            description: "Creamy pasta and parmesan"
        },
        {
            id: 6,
            name: "Pasta Arrabbiata",
            price: 229,
            category: "pasta",
            image: "images/pasta-arrabbiata.jpg",
            description: "Spicy tomato sauce with garlic and herbs"
        },
        {
            id: 7,
            name: "Chocolate Cake",
            price: 149,
            category: "dessert",
            image: "images/dessert-chocolate.jpg",
            description: "Rich chocolate cake with chocolate frosting"
        },
        {
            id: 8,
            name: "Tiramisu",
            price: 179,
            category: "dessert",
            image: "images/dessert-tiramisu.jpg",
            description: "Classic Italian dessert with coffee and mascarpone"
        }
    ];

    // Cart array
    let cart = [];

    // Initialize the application
    function init() {
        displayMenuItems(menuItems);
        setupEventListeners();
        updateCartDisplay();
        createPlaceholderImages();
    }

    // Display menu items
    function displayMenuItems(items) {
        const menuHTML = items.map(item => `
            <div class="col-lg-3 col-md-4 col-sm-6 menu-item-wrapper" data-category="${item.category}">
                <div class="menu-item fade-in">
                    <img src="${item.image}" alt="${item.name}" class="img-fluid">
                    <div class="menu-item-content">
                        <h5>${item.name}</h5>
                        <p>${item.description}</p>
                        <div class="price">₹${item.price}</div>
                        <button class="btn btn-primary add-to-cart-btn" data-id="${item.id}">
                            <i class="fas fa-plus me-1"></i>Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        $('#menu-items').html(menuHTML);
    }

    // Event listeners
    function setupEventListeners() {
        // Smooth scrolling for navigation links
        $('.nav-link').click(function(e) {
            const href = $(this).attr('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = $(href);
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 70
                    }, 300);
                }
            }
        });

        // Category filters
        $('.category-filter').click(function() {
            $('.category-filter').removeClass('active');
            $(this).addClass('active');
            filterMenuItems($(this).data('category'));
        });

        // Add to cart
        $(document).on('click', '.add-to-cart-btn', function() {
            const itemId = parseInt($(this).data('id'));
            addToCart(itemId);
            const $btn = $(this);
            $btn.html('<i class="fas fa-check me-1"></i>Added');
            setTimeout(() => $btn.html('<i class="fas fa-plus me-1"></i>Add'), 800);
        });

        // Cart controls
        $(document).on('click', '.quantity-btn', function() {
            const action = $(this).data('action');
            const itemId = parseInt($(this).data('id'));
            if (action === 'increase') {
                increaseQuantity(itemId);
            } else if (action === 'decrease') {
                decreaseQuantity(itemId);
            }
        });

        $(document).on('click', '.remove-item', function() {
            removeFromCart(parseInt($(this).data('id')));
        });

        // Checkout
        $('#checkout-btn').click(function() {
            if (cart.length > 0) checkout();
        });

        // Contact form
        $('#contact-form').submit(function(e) {
            e.preventDefault();
            showMessage('Thank you for contacting Akshay\'s Cart! We\'ll get back to you soon.');
            this.reset();
        });
    }

    // Filter menu items
    function filterMenuItems(category) {
        if (category === 'all') {
            $('.menu-item-wrapper').fadeIn(200);
        } else {
            $('.menu-item-wrapper').hide();
            $(`.menu-item-wrapper[data-category="${category}"]`).fadeIn(200);
        }
    }

    // Cart functions
    function addToCart(itemId) {
        const item = menuItems.find(item => item.id === itemId);
        const existingItem = cart.find(cartItem => cartItem.id === itemId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }

        updateCartDisplay();
        showMessage(`${item.name} added to Akshay's Cart!`);
    }

    function increaseQuantity(itemId) {
        const item = cart.find(cartItem => cartItem.id === itemId);
        if (item) {
            item.quantity += 1;
            updateCartDisplay();
        }
    }

    // Updated decreaseQuantity function - allows decreasing to 0 and auto-removes item
    function decreaseQuantity(itemId) {
        const item = cart.find(cartItem => cartItem.id === itemId);
        if (item) {
            item.quantity -= 1;
            
            // If quantity reaches 0, remove the item from cart
            if (item.quantity <= 0) {
                cart = cart.filter(cartItem => cartItem.id !== itemId);
                showMessage('Item removed from cart');
            }
            
            updateCartDisplay();
        }
    }

    function removeFromCart(itemId) {
        cart = cart.filter(item => item.id !== itemId);
        updateCartDisplay();
        showMessage('Item removed from cart');
    }

    // Update cart display
    function updateCartDisplay() {
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        
        $('#cart-count').text(cartCount);
        $('#cart-total').text(cartTotal);
        
        const cartItemsContainer = $('#cart-items');
        
        if (cart.length === 0) {
            cartItemsContainer.html('<p class="text-center text-muted">Your cart is empty</p>');
            $('#checkout-btn').prop('disabled', true);
        } else {
            const cartHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">₹${item.price}</div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" data-action="decrease" data-id="${item.id}">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span class="quantity-display">${item.quantity}</span>
                            <button class="quantity-btn" data-action="increase" data-id="${item.id}">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <div class="mt-2">
                            <small class="text-muted">Subtotal: ₹${item.price * item.quantity}</small>
                        </div>
                    </div>
                    <button class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
            
            cartItemsContainer.html(cartHTML);
            $('#checkout-btn').prop('disabled', false);
        }
    }

    // Checkout
    function checkout() {
        const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        $('#checkout-btn').html('<i class="fas fa-spinner fa-spin me-2"></i>Processing...');
        
        setTimeout(() => {
            cart = [];
            updateCartDisplay();
            $('#cartModal').modal('hide');
            showMessage(`Order placed successfully with Akshay's Cart! Total: ₹${total}. Your delicious food will be delivered in 30 minutes.`);
            $('#checkout-btn').html('Proceed to Checkout');
        }, 1000);
    }

    // Show message
    function showMessage(message, type = 'success') {
        const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';
        const alert = $(`
            <div class="alert ${alertClass} alert-dismissible fade show custom-alert" role="alert">
                <i class="fas fa-check-circle me-2"></i>${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `);
        
        $('body').append(alert);
        setTimeout(() => alert.alert('close'), 2500);
    }

    // Create placeholder images
    function createPlaceholderImages() {
        const placeholders = [
            { name: 'pizza-margherita.jpg', size: '300x200', color: 'FF6B6B', text: 'Pizza' },
            { name: 'pizza-pepperoni.jpg', size: '300x200', color: 'FF8E53', text: 'Pizza' },
            { name: 'burger-classic.jpg', size: '300x200', color: '4ECDC4', text: 'Burger' },
            { name: 'pasta-carbonara.jpg', size: '300x200', color: '45B7D1', text: 'Pasta' },
            { name: 'pasta-arrabbiata.jpg', size: '300x200', color: '96CEB4', text: 'Pasta' },
            { name: 'dessert-chocolate.jpg', size: '300x200', color: '8B4513', text: 'Dessert' },
            { name: 'dessert-tiramisu.jpg', size: '300x200', color: 'DEB887', text: 'Dessert' },
            { name: 'logo.png', size: '80x80', color: '007bff', text: 'AC' },
            { name: 'about-image.jpg', size: '500x400', color: 'FFA07A', text: 'About' }
        ];

        placeholders.forEach(img => {
            $(`img[src="images/${img.name}"]`).on('error', function() {
                $(this).attr('src', `https://via.placeholder.com/${img.size}/${img.color}/ffffff?text=${img.text}`);
            });
        });
    }

    // Scroll effects and navigation highlighting
    $(window).scroll(function() {
        const scrollTop = $(window).scrollTop();
        
        // Update active navigation
        $('section').each(function() {
            const section = $(this);
            const sectionTop = section.offset().top - 100;
            const sectionBottom = sectionTop + section.outerHeight();
            const sectionId = section.attr('id');
            
            if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
                $('.nav-link').removeClass('active');
                $(`.nav-link[href="#${sectionId}"]`).addClass('active');
            }
        });
    });

    // Initialize the application
    init();
});