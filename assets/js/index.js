document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.addtocart');
    const cartModal = document.querySelector('.cart-modal');
    const cartContent = cartModal.querySelector('.cart-content');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');
    const cart = [];

    // Function to update the cart display
    function updateCart() {
        cartContent.innerHTML = ''; // Clear the existing cart items
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `<p>${item.name} - Quantity: ${item.quantity} - Price: $${item.price * item.quantity.toFixed(2)}</p>`;
            cartContent.appendChild(itemElement);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Add click event listeners to "Add To Cart" buttons
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const product = {
                name: 'Product Name', // Set the name of the product
                price: 5.05, // Set the price of the product
                quantity: 1,
            };

            // Check if the product is already in the cart
            const existingItem = cart.find(item => item.name === product.name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push(product);
            }

            // Update the cart display
            updateCart();
        });
    });

    // Add click event listener to open the cart modal
    checkoutButton.addEventListener('click', function() {
        cartModal.style.display = 'block';
    });

    // Close the cart modal when the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Optionally, add a button to close the modal explicitly
    const closeCartButton = document.createElement('button');
    closeCartButton.textContent = 'Close';
    closeCartButton.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });
    cartModal.appendChild(closeCartButton);
});
