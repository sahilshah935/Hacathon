// Get users from localStorage or initialize empty array
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Sample data
const sampleProducts = {
    rides: [
        { from: "Mumbai", to: "Pune", platforms: { "Uber": 1200, "Ola": 1150, "Rapido": 1100 }, deliveryCharges: { "Uber": 0, "Ola": 0, "Rapido": 0 }, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=60" },
        { from: "Mumbai", to: "Chennai", platforms: { "Uber": 2500, "Ola": 2400, "Rapido": 2300 }, deliveryCharges: { "Uber": 0, "Ola": 0, "Rapido": 0 }, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=60" },
        { from: "Delhi", to: "Agra", platforms: { "Uber": 1800, "Ola": 1750, "Rapido": 1700 }, deliveryCharges: { "Uber": 0, "Ola": 0, "Rapido": 0 }, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=60" },
        { from: "Bangalore", to: "Mysore", platforms: { "Uber": 1400, "Ola": 1350, "Rapido": 1300 }, deliveryCharges: { "Uber": 0, "Ola": 0, "Rapido": 0 }, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=60" },
        { from: "Chennai", to: "Pondicherry", platforms: { "Uber": 1100, "Ola": 1050, "Rapido": 1000 }, deliveryCharges: { "Uber": 0, "Ola": 0, "Rapido": 0 }, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=60" },
        { from: "Kolkata", to: "Digha", platforms: { "Uber": 1600, "Ola": 1550, "Rapido": 1500 }, deliveryCharges: { "Uber": 0, "Ola": 0, "Rapido": 0 }, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=60" },
        { from: "Hyderabad", to: "Warangal", platforms: { "Uber": 1300, "Ola": 1250, "Rapido": 1200 }, deliveryCharges: { "Uber": 0, "Ola": 0, "Rapido": 0 }, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=60" },
        { from: "Ahmedabad", to: "Vadodara", platforms: { "Uber": 900, "Ola": 850, "Rapido": 800 }, deliveryCharges: { "Uber": 0, "Ola": 0, "Rapido": 0 }, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=60" },
        { from: "Jaipur", to: "Udaipur", platforms: { "Uber": 2000, "Ola": 1950, "Rapido": 1900 }, deliveryCharges: { "Uber": 0, "Ola": 0, "Rapido": 0 }, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=60" },
        { from: "Lucknow", to: "Kanpur", platforms: { "Uber": 800, "Ola": 750, "Rapido": 700 }, deliveryCharges: { "Uber": 0, "Ola": 0, "Rapido": 0 }, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=60" },
        { from: "Bhopal", to: "Indore", platforms: { "Uber": 1000, "Ola": 950, "Rapido": 900 }, deliveryCharges: { "Uber": 0, "Ola": 0, "Rapido": 0 }, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=60" },
        { from: "Goa", to: "Mumbai", platforms: { "Uber": 3000, "Ola": 2900, "Rapido": 2800 }, deliveryCharges: { "Uber": 0, "Ola": 0, "Rapido": 0 }, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=60" },
        { from: "Chandigarh", to: "Delhi", platforms: { "Uber": 1500, "Ola": 1450, "Rapido": 1400 }, deliveryCharges: { "Uber": 0, "Ola": 0, "Rapido": 0 }, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=60" },
        { from: "Kochi", to: "Trivandrum", platforms: { "Uber": 1700, "Ola": 1650, "Rapido": 1600 }, deliveryCharges: { "Uber": 0, "Ola": 0, "Rapido": 0 }, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=60" },
        { from: "Amritsar", to: "Ludhiana", platforms: { "Uber": 1200, "Ola": 1150, "Rapido": 1100 }, deliveryCharges: { "Uber": 0, "Ola": 0, "Rapido": 0 }, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=60" }
    ],
    food: [
        { name: "Butter Chicken", platforms: { "Swiggy": 349, "Zomato": 339, "FoodPanda": 329 }, deliveryCharges: { "Swiggy": 45, "Zomato": 40, "FoodPanda": 50 }, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=60" },
        { name: "Masala Dosa", platforms: { "Swiggy": 129, "Zomato": 119, "FoodPanda": 109 }, deliveryCharges: { "Swiggy": 45, "Zomato": 40, "FoodPanda": 50 }, image: "https://www.mydelicious-recipes.com/home/images/120_1200_1200/mydelicious-recipes-masala-dosa-with-batter" },
        { name: "Biryani", platforms: { "Swiggy": 299, "Zomato": 289, "FoodPanda": 279 }, deliveryCharges: { "Swiggy": 45, "Zomato": 40, "FoodPanda": 50 }, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=60" },
        { name: "Chole Bhature", platforms: { "Swiggy": 159, "Zomato": 149, "FoodPanda": 139 }, deliveryCharges: { "Swiggy": 45, "Zomato": 40, "FoodPanda": 50 }, image: "https://thewhiskaddict.com/wp-content/uploads/2024/08/IMG_0727-4-scaled.jpg" },
        { name: "Paneer Tikka", platforms: { "Swiggy": 249, "Zomato": 239, "FoodPanda": 229 }, deliveryCharges: { "Swiggy": 45, "Zomato": 40, "FoodPanda": 50 }, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&auto=format&fit=crop&q=60" },
        { name: "Vada Pav", platforms: { "Swiggy": 49, "Zomato": 45, "FoodPanda": 40 }, deliveryCharges: { "Swiggy": 45, "Zomato": 40, "FoodPanda": 50 }, image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&auto=format&fit=crop&q=60" },
        { name: "Pav Bhaji", platforms: { "Swiggy": 129, "Zomato": 119, "FoodPanda": 109 }, deliveryCharges: { "Swiggy": 45, "Zomato": 40, "FoodPanda": 50 }, image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&auto=format&fit=crop&q=60" },
        { name: "Dal Makhani", platforms: { "Swiggy": 199, "Zomato": 189, "FoodPanda": 179 }, deliveryCharges: { "Swiggy": 45, "Zomato": 40, "FoodPanda": 50 }, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=60" },
        { name: "Samosa", platforms: { "Swiggy": 39, "Zomato": 35, "FoodPanda": 30 }, deliveryCharges: { "Swiggy": 45, "Zomato": 40, "FoodPanda": 50 }, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=60" },
        { name: "Idli Sambar", platforms: { "Swiggy": 89, "Zomato": 85, "FoodPanda": 80 }, deliveryCharges: { "Swiggy": 45, "Zomato": 40, "FoodPanda": 50 }, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=60" }
    ],
    shopping: [
        { name: "OnePlus 9 Pro", platforms: { "Amazon": 49999, "Flipkart": 48999, "Croma": 50999 }, deliveryCharges: { "Amazon": 0, "Flipkart": 70, "Croma": 100 }, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=60" },
        { name: "MacBook Air M1", platforms: { "Amazon": 89999, "Flipkart": 88999, "Apple": 92999 }, deliveryCharges: { "Amazon": 0, "Flipkart": 70, "Apple": 100 }, image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=60" },
        { name: "Sony WH-1000XM4", platforms: { "Amazon": 24999, "Flipkart": 23999, "Croma": 25999 }, deliveryCharges: { "Amazon": 0, "Flipkart": 70, "Croma": 100 }, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&auto=format&fit=crop&q=60" },
        { name: "Nike Air Max", platforms: { "Amazon": 8999, "Flipkart": 8499, "Myntra": 9499 }, deliveryCharges: { "Amazon": 0, "Flipkart": 70, "Myntra": 100 }, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60" },
        { name: "Samsung 4K TV", platforms: { "Amazon": 45999, "Flipkart": 44999, "Croma": 46999 }, deliveryCharges: { "Amazon": 0, "Flipkart": 70, "Croma": 100 }, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=60" },
        { name: "Kindle Paperwhite", platforms: { "Amazon": 12999, "Flipkart": 13499, "Croma": 13999 }, deliveryCharges: { "Amazon": 0, "Flipkart": 70, "Croma": 100 }, image: "https://m.media-amazon.com/images/I/81qEq4MEnJL.jpg" },
        { name: "Levi's Jeans", platforms: { "Amazon": 2499, "Flipkart": 2299, "Myntra": 2699 }, deliveryCharges: { "Amazon": 0, "Flipkart": 70, "Myntra": 100 }, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=60" },
        { name: "Fossil Watch", platforms: { "Amazon": 8999, "Flipkart": 8499, "Myntra": 9499 }, deliveryCharges: { "Amazon": 0, "Flipkart": 70, "Myntra": 100 }, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&auto=format&fit=crop&q=60" },
        { name: "Canon EOS 1500D", platforms: { "Amazon": 35999, "Flipkart": 34999, "Croma": 36999 }, deliveryCharges: { "Amazon": 0, "Flipkart": 70, "Croma": 100 }, image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop&q=60" },
        { name: "Philips Air Fryer", platforms: { "Amazon": 8999, "Flipkart": 8499, "Croma": 9499 }, deliveryCharges: { "Amazon": 0, "Flipkart": 70, "Croma": 100 }, image: "https://m.media-amazon.com/images/I/414ly0wsjYL._AC_UF894,1000_QL80_.jpg" }
    ]
};

// Auth functions
function toggleAuth(type) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (type === 'login') {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    } else {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    }
}

function signup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (!name || !email || !password) {
        alert('Please fill in all fields');
        return;
    }

    // Check if user already exists
    if (users.some(user => user.email === email)) {
        alert('Email already registered');
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful! Please login.');
    toggleAuth('login');
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        document.getElementById('authContainer').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
    } else {
        alert('Invalid credentials');
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    document.getElementById('authContainer').classList.remove('hidden');
    document.getElementById('mainContent').classList.add('hidden');
    hideAllPages();
}

// Modified Cart functions
function addToCart(type, item, platform) {
    if (!currentUser) {
        alert('Please login to add items to cart');
        return;
    }

    const cartItem = {
        type,
        name: type === 'ride' ? `${item.from} to ${item.to}` : item.name,
        platform,
        price: item.platforms[platform],
        deliveryCharge: item.deliveryCharges[platform] || 0,
        userId: currentUser.email,
        image: item.image,
        quantity: 1
    };

    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart successfully!');
}

function getCartTotal() {
    return cart
        .filter(item => item.userId === currentUser.email)
        .reduce((total, item) => total + item.price, 0);
}

// Update the checkout function to use the new page
function checkout() {
    navigateTo('checkout');
}

function placeOrder() {
    const cartItems = cart.filter(item => item.userId === currentUser.email);
    if (cartItems.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = document.getElementById('finalTotal').textContent;
    if (confirm(`Confirm order for ${total}?`)) {
        cart = cart.filter(item => item.userId !== currentUser.email);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Order placed successfully!');
        navigateTo('home');
    }
}

function renderCheckoutPage() {
    const cartItems = cart.filter(item => item.userId === currentUser.email);
    const cartContainer = document.getElementById('cartItems');
    cartContainer.innerHTML = '';

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty!</p>';
        updateTotals();
        return;
    }

    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="item-image">
                <img src="${item.image || 'https://via.placeholder.com/80'}" alt="${item.name}">
            </div>
            <div class="item-details">
                <h4>${item.name}</h4>
                <p>${item.platform}</p>
                <p class="delivery-info">Delivery: ₹${item.deliveryCharge}</p>
            </div>
            <div class="item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <div class="price-details">
                    <span class="item-price">₹${(item.price * item.quantity).toFixed(2)}</span>
                    <span class="delivery-charge">+ ₹${item.deliveryCharge}</span>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        cartContainer.appendChild(itemElement);
    });

    updateTotals();
}

function updateTotals() {
    const cartItems = cart.filter(item => item.userId === currentUser.email);
    const itemsTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const deliveryTotal = cartItems.reduce((total, item) => total + (item.deliveryCharge || 0), 0);
    const finalTotal = itemsTotal + deliveryTotal;

    document.getElementById('itemsTotal').textContent = `₹${itemsTotal.toFixed(2)}`;
    document.getElementById('deliveryTotal').textContent = `₹${deliveryTotal.toFixed(2)}`;
    document.getElementById('finalTotal').textContent = `₹${finalTotal.toFixed(2)}`;
}

function removeFromCart(index) {
    const cartItems = cart.filter(item => item.userId === currentUser.email);
    cart = cart.filter(item => item !== cartItems[index]);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCheckoutPage();
}

// Navigation
function hideAllPages() {
    document.getElementById('mainContent').classList.add('hidden');
    document.getElementById('ridesPage').classList.add('hidden');
    document.getElementById('foodPage').classList.add('hidden');
    document.getElementById('shoppingPage').classList.add('hidden');
    document.getElementById('checkoutPage').classList.add('hidden');
}

function navigateTo(page) {
    hideAllPages();
    switch(page) {
        case 'home':
            document.getElementById('mainContent').classList.remove('hidden');
            break;
        case 'rides':
            document.getElementById('ridesPage').classList.remove('hidden');
            break;
        case 'food':
            document.getElementById('foodPage').classList.remove('hidden');
            break;
        case 'shopping':
            document.getElementById('shoppingPage').classList.remove('hidden');
            break;
        case 'checkout':
            document.getElementById('checkoutPage').classList.remove('hidden');
            renderCheckoutPage();
            break;
    }
}

// Modified Comparison functions
function compareRides() {
    const pickup = document.getElementById('pickupLocation').value.toLowerCase();
    const drop = document.getElementById('dropLocation').value.toLowerCase();
    const resultsContainer = document.getElementById('ridesResults');
    resultsContainer.innerHTML = '';

    const rides = pickup || drop ? 
        sampleProducts.rides.filter(ride => 
            ride.from.toLowerCase().includes(pickup) &&
            ride.to.toLowerCase().includes(drop)
        ) : sampleProducts.rides;

    if (rides.length === 0) {
        resultsContainer.innerHTML = '<p>No rides found for this route.</p>';
        return;
    }

    rides.forEach(ride => displayRideCard(ride, resultsContainer));
}

function compareFood() {
    const searchTerm = document.getElementById('foodSearch').value.toLowerCase();
    const resultsContainer = document.getElementById('foodResults');
    resultsContainer.innerHTML = '';

    const foodItems = searchTerm ? 
        sampleProducts.food.filter(item => 
            item.name.toLowerCase().includes(searchTerm)
        ) : sampleProducts.food;

    if (foodItems.length === 0) {
        resultsContainer.innerHTML = '<p>No food items found.</p>';
        return;
    }

    foodItems.forEach(item => displayFoodCard(item, resultsContainer));
}

function compareProducts() {
    const searchTerm = document.getElementById('productSearch').value.toLowerCase();
    const resultsContainer = document.getElementById('shoppingResults');
    resultsContainer.innerHTML = '';

    const products = searchTerm ? 
        sampleProducts.shopping.filter(item => 
            item.name.toLowerCase().includes(searchTerm)
        ) : sampleProducts.shopping;

    if (products.length === 0) {
        resultsContainer.innerHTML = '<p>No products found.</p>';
        return;
    }

    products.forEach(item => displayProductCard(item, resultsContainer));
}

// Helper functions to display cards
function displayRideCard(ride, container) {
    const prices = Object.entries(ride.platforms);
    const bestPrice = Math.min(...prices.map(([_, price]) => price));
    
    const rideCard = document.createElement('div');
    rideCard.className = 'product-card';
    
    let pricesHTML = '';
    prices.forEach(([platform, price]) => {
        const rideJSON = JSON.stringify(ride).replace(/"/g, '&quot;');
        pricesHTML += `
            <div class="platform-price">
                <span>${platform}</span>
                <span class="${price === bestPrice ? 'best-price' : ''}">₹${price}</span>
                <button onclick='addToCart("ride", ${rideJSON}, "${platform}")' class="book-btn">Book Now</button>
            </div>
        `;
    });

    rideCard.innerHTML = `
        <img src="${ride.image}" alt="Ride">
        <h3>${ride.from} to ${ride.to}</h3>
        ${pricesHTML}
    `;

    container.appendChild(rideCard);
}

function displayFoodCard(item, container) {
    const prices = Object.entries(item.platforms);
    const bestPrice = Math.min(...prices.map(([_, price]) => price));
    
    const foodCard = document.createElement('div');
    foodCard.className = 'product-card';
    
    let pricesHTML = '';
    prices.forEach(([platform, price]) => {
        const itemJSON = JSON.stringify(item).replace(/"/g, '&quot;');
        pricesHTML += `
            <div class="platform-price">
                <span>${platform}</span>
                <span class="${price === bestPrice ? 'best-price' : ''}">₹${price}</span>
                <button onclick='addToCart("food", ${itemJSON}, "${platform}")' class="book-btn">Add to Cart</button>
            </div>
        `;
    });

    foodCard.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        ${pricesHTML}
    `;

    container.appendChild(foodCard);
}

function displayProductCard(item, container) {
    const prices = Object.entries(item.platforms);
    const bestPrice = Math.min(...prices.map(([_, price]) => price));
    
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    let pricesHTML = '';
    prices.forEach(([platform, price]) => {
        const itemJSON = JSON.stringify(item).replace(/"/g, '&quot;');
        pricesHTML += `
            <div class="platform-price">
                <span>${platform}</span>
                <span class="${price === bestPrice ? 'best-price' : ''}">₹${price}</span>
                <button onclick='addToCart("product", ${itemJSON}, "${platform}")' class="book-btn">Add to Cart</button>
            </div>
        `;
    });

    productCard.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        ${pricesHTML}
    `;

    container.appendChild(productCard);
}

// Initialize with all items visible
window.onload = () => {
    if (currentUser) {
        document.getElementById('mainContent').classList.remove('hidden');
        document.getElementById('authContainer').classList.add('hidden');
    } else {
        document.getElementById('mainContent').classList.add('hidden');
        document.getElementById('authContainer').classList.remove('hidden');
    }

    // Show all items initially
    compareRides();
    compareFood();
    compareProducts();
};