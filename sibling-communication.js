// Sibling Component Communication Example
// This demonstrates how sibling components (add to cart buttons) communicate with another sibling (counter)

document.addEventListener('DOMContentLoaded', function() {
    
    // Get all add to cart buttons (sibling components)
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    // Get the counter display (another sibling component)
    const cartCounter = document.getElementById('cart-counter');
    
    // Shared state (in Angular, this would be a service)
    let totalCartItems = 0;
    
    // Add event listeners to each add to cart button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const carName = this.getAttribute('data-car');
            
            // Add to cart
            totalCartItems++;
            
            // Update the counter (sibling communication)
            if (cartCounter) {
                cartCounter.textContent = totalCartItems;
            }
            
            console.log(`${carName} added to cart. Total items: ${totalCartItems}`);
            console.log('SIBLING COMMUNICATION: Add to cart button component updated counter component');
        });
    });
    
    console.log('Sibling Communication Example Loaded!');
    console.log('- Add to Cart buttons are sibling components');
    console.log('- Counter in navbar is another sibling component');
    console.log('- They communicate through shared state');
    console.log('- In Angular: this would use a Service with Observables');
    
    // Parent-Child Component Communication Example
    // This demonstrates how a parent component manages child component state
    
    // Get all favorite buttons (child components)
    const favoriteButtons = document.querySelectorAll('.btn.bg-orange');
    
    // Add event listeners to each favorite button
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const heartIcon = this.querySelector('i');
            
            if (this.classList.contains('favorited')) {
                // Remove from favorites
                this.classList.remove('favorited');
                heartIcon.style.color = '';
                console.log('Car removed from favorites');
                console.log('PARENT-CHILD COMMUNICATION: Parent component updated child button state');
            } else {
                // Add to favorites  
                this.classList.add('favorited');
                heartIcon.style.color = '#e74c3c'; // Red heart only
                console.log('Car added to favorites');
                console.log('PARENT-CHILD COMMUNICATION: Parent component updated child button state');
            }
        });
    });
    
    console.log('Parent-Child Communication Example Loaded!');
    console.log('- Favorite buttons are child components');
    console.log('- Parent component manages their state (red heart)');
    console.log('- In Angular: Parent uses @Input() to send state to child');
});