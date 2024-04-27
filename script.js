function addToCart(Name, price, imageSrc) {
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

    cartItems.push({
        name: Name,
        price: price,
        imageSrc: imageSrc
    });

    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

    window.location.href = 'cart.html';
}

function removeFromCart(index) {
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

    cartItems.splice(index, 1);

    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

    location.reload();
}

function calculateTotalPrice() {
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const totalPriceElement = document.getElementById('totalPrice');
    if (totalPriceElement) {
        totalPriceElement.textContent = totalPrice;
    }
}

function setupCartItems() {
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    const cartContainer = document.querySelector('.cart-container');
    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.imageSrc}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>Price: ₹${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;

        cartContainer.appendChild(cartItem);
    });

    calculateTotalPrice();
}
