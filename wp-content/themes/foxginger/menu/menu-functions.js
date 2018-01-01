var shoppingBasket = {
    total: 0,
    items: []
};

/* Takes in a dishObject (attributes: price and dish)
 * and adds it to the shopping cart. Also adds an attribute
 * 'amount', meaning the amount in the cart.
 */

// Adds item to basket
function addToBasket (dish, price) {
    
    var found = false;

    // If found, +1 to amount of found dish
    for (var i = 0; i < shoppingBasket.items.length; i++) {
        if (shoppingBasket.items[i].dish === dish) {
            found = true;
            shoppingBasket.items[i].amount++;
        };
    }

    // If not found, add new item with new: true
    if (!found) {
        shoppingBasket.items.push({
            dish: dish,
            price: price,
            amount: 1,
            new: true
        })
    }

    $('.basket').remove();
    calculateTotalPrice();
    renderBasket();
}

// Removes item from basket, takes string input
function removeFromBasket(dish, id) {

    var remove = false;

    for (var i = 0; i < shoppingBasket.items.length; i++) {
        if (shoppingBasket.items[i].dish === dish) {
            shoppingBasket.items[i].amount--;
        }

        if (shoppingBasket.items[i].amount === 0) {
            shoppingBasket.items.splice( i, 1 );
            remove = true;
        }
    }

    if (remove) {
        $('#basket__li__' + id).slideUp();
        setTimeout(lastStep, 400);
    } else {
        lastStep();
    }

    function lastStep() {
        $('.basket').remove();
        calculateTotalPrice();
        renderBasket();
    }
}

// Called after each Basket change, calculates total
function calculateTotalPrice() {
    
    var total = 0;

    for (var i = 0; i < shoppingBasket.items.length; i++) {
        total+= (shoppingBasket.items[i].price *
                shoppingBasket.items[i].amount)
    }

    shoppingBasket.total = total;

}

function order() {

    localStorage.setItem('basket', JSON.stringify(shoppingBasket));
    window.location.href = "/foxginger/order";

}