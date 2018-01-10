// Onload function for Menu
window.onload = function() {
    
    // Looks for basket information in localStorage
    var basket = localStorage.getItem('basket');

    if (basket !== null) {
        shoppingBasket = JSON.parse(basket);
    }
    
    renderMenu();
    renderBasket();
}