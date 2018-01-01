var shoppingBasket = {
    total: 0,
    items: []
};

/* Takes in a dishObject (attributes: price and dish)
 * and adds it to the shopping cart. Also adds an attribute
 * 'amount', meaning the amount in the cart.
 */
function addToBasket (dish, price) {
    
    var found = false;

    for (var i = 0; i < shoppingBasket.items.length; i++) {
        if (shoppingBasket.items[i].dish === dish) {
            found = true;
            shoppingBasket.items[i].amount++;
        };
    }

    if (!found) {
        shoppingBasket.items.push({
            dish: dish,
            price: price,
            amount: 1
        })
    }

    $('.basket').remove();
    calculateTotalPrice();
    renderBasket();
}

function removeFromBasket(dish) {

    for (var i = 0; i < shoppingBasket.items.length; i++) {
        if (shoppingBasket.items[i].dish === dish) {
            shoppingBasket.items[i].amount--;
        }

        if (shoppingBasket.items[i].amount === 0) {
            shoppingBasket.items.splice( i, 1 );
        }
    }

    $('.basket').remove();
    calculateTotalPrice();
    renderBasket();
}

function calculateTotalPrice() {
    
    var total = 0;

    for (var i = 0; i < shoppingBasket.items.length; i++) {
        total+= (shoppingBasket.items[i].price *
                shoppingBasket.items[i].amount)
    }

    shoppingBasket.total = total;
    console.log(total);
}