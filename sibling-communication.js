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
    const favoriteButtons = document.querySelectorAll('.btn.bg-gray');
    
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
    
    // Smart Component Example - Car Component with Price Calculation
    // This demonstrates a smart component that manages state and calculations
    
    // Get all car items (smart components)
    const carItems = document.querySelectorAll('.car-item');
    
    carItems.forEach(carItem => {
        const priceDisplay = carItem.querySelector('.price');
        const basePrice = parseInt(priceDisplay.getAttribute('data-base-price'));
        const optionChecks = carItem.querySelectorAll('.option-check');
        const optionsTotal = carItem.querySelector('.options-total');
        
        // Add event listeners to each option checkbox (dumb components)
        optionChecks.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                updateCarPrice(carItem, basePrice, optionChecks, priceDisplay, optionsTotal);
                
                const optionName = this.nextElementSibling.textContent;
                const optionPrice = parseInt(this.getAttribute('data-price'));
                
                console.log(`Option "${optionName}" ${this.checked ? 'added' : 'removed'}: $${optionPrice.toLocaleString()}`);
                console.log('SMART COMPONENT: Car component calculated new total price');
            });
        });
    });
    
    function updateCarPrice(carItem, basePrice, optionChecks, priceDisplay, optionsTotal) {
        let totalOptionsPrice = 0;
        
        // Calculate total options price
        optionChecks.forEach(checkbox => {
            if (checkbox.checked) {
                totalOptionsPrice += parseInt(checkbox.getAttribute('data-price'));
            }
        });
        
        // Update displays
        const totalPrice = basePrice + totalOptionsPrice;
        priceDisplay.textContent = `$${totalPrice.toLocaleString()}`;
        optionsTotal.textContent = `Options: $${totalOptionsPrice.toLocaleString()}`;
        
        // Visual feedback for total price change
        if (totalOptionsPrice > 0) {
            priceDisplay.style.color = '#e74c3c'; // Red for higher price
        } else {
            priceDisplay.style.color = ''; // Default color
        }
    }
    
    console.log('Smart Component Example Loaded!');
    console.log('- Car components are SMART (manage state and calculations)');
    console.log('- Option checkboxes are DUMB (just display and emit events)');
    console.log('- In Angular: Smart components use services, dumb components use @Input/@Output');
});