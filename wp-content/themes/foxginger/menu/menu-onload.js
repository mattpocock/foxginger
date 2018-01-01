window.onload = function() {
    
    var basket = localStorage.getItem('basket');

    if (basket !== null) {
        shoppingBasket = JSON.parse(basket);
    }
    
    renderMenu();
    renderBasket();
}