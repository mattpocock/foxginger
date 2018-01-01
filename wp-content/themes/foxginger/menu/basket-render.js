
// Uses global in menu-functions.js: shoppingBasket
function renderBasket() {
    
    // Main Divs
    var menu = $('#menu'),
        basketDiv = $('<div>').addClass('basket col-xs-12 col-md-5');

    $('<a>').attr('name', 'basket')
           .appendTo(basketDiv);
    
    // Title
    $('<h2>').addClass('basket__title')
            .html('Shopping Basket')
            .appendTo(basketDiv);
    
    // List
    var list = $('<ul>').addClass('basket__ul');

    // Each <li>
    for (var i = 0; i < shoppingBasket.items.length; i++) {
        var li = $('<li>').addClass('basket__li')
                .attr('id', 'basket__li__' + i);

        if (shoppingBasket.items[i].new) {
            li.addClass('slide-down').hide();
            shoppingBasket.items[i].new = false;
        }

        $('<span>').addClass('basket__item-title')
                .html(shoppingBasket.items[i].dish)
                .appendTo(li);
        $('<a>').addClass('basket__remove-button slide-button')
                .html('Remove')
                .attr('onclick', 'removeFromBasket("'+ shoppingBasket.items[i].dish + '", ' + i + ')')
                .appendTo(li);
        $('<div>').addClass('basket__price')
                .html('<span>' + '£'+
                        (shoppingBasket.items[i].amount * shoppingBasket.items[i].price)
                        + '</span>')
                .appendTo(li);
        $('<div>').addClass('basket__amount')
                .html('<span>' + shoppingBasket.items[i].amount + '</span>')
                .appendTo(li);
                
        // Here, we need to know if the li has been newly created,
        // so we can animate it. Add a bool to it so that it knows
        // it's new, so that it can go display: none then slideDown();
        li.appendTo(list);

    }

    list.appendTo(basketDiv);

    var total = $('<div>').addClass('basket__total-price');

    $('<h3>').html('Total: £' + shoppingBasket.total)
            .appendTo(total);

    if (shoppingBasket.items.length > 0) {

        $('<a>').addClass('slide-button')
                .html('Order')
                .attr('onclick', 'order()')
                .appendTo(total);

    } else {
        $('<a>').addClass('slide-button disabled')
        .html('Order')
        .appendTo(total);
    }
        

    total.appendTo(basketDiv);

    basketDiv.appendTo(menu);

    $('.slide-down').slideDown();

    // Mobile Button
    $('<a>').addClass('mobile-basket-button hidden-md hidden-lg hidden-xl')
            .html('<i class="fa fa-shopping-cart" aria-hidden="true"></i>')
            .attr('href', '#basket')
            .appendTo($('body'));
}