
// Uses global in menu-functions.js: shoppingBasket
function renderBasket() {
    var menu = $('#menu');

    var basketDiv = $('<div>').addClass('basket col-xs-5');
    
    $('<h2>').addClass('basket__title')
            .html('Shopping Basket')
            .appendTo(basketDiv);
    
    var list = $('<ul>').addClass('basket__ul');

    for (var i = 0; i < shoppingBasket.items.length; i++) {
        var li = $('<li>').addClass('basket__li');

        $('<span>').addClass('basket__item-title')
                .html(shoppingBasket.items[i].dish)
                .appendTo(li);
        $('<a>').addClass('basket__remove-button slide-button')
                .html('Remove')
                .attr('onclick', 'removeFromBasket("'+ shoppingBasket.items[i].dish + '")')
                .appendTo(li);
        $('<div>').addClass('basket__price')
                .html('<span>' + '£'+
                        (shoppingBasket.items[i].amount * shoppingBasket.items[i].price)
                        + '</span>')
                .appendTo(li);
        $('<div>').addClass('basket__amount')
                .html('<span>' + shoppingBasket.items[i].amount + '</span>')
                .appendTo(li);
        
        li.appendTo(list);

    }

    list.appendTo(basketDiv);

    $('<h3>').addClass('basket__total-price')
            .html('Total: £' + shoppingBasket.total)
            .appendTo(basketDiv);

    basketDiv.appendTo(menu);
}