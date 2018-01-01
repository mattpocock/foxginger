var shoppingBasket = {};

function renderOrder() {
    shoppingBasket = JSON.parse(localStorage.getItem('basket'));

    var orderDisplay = $('#order-display'),
        orderString = "",
        orderTotal = shoppingBasket.total;

    orderString += "Total: £" + orderTotal + "\n";
    
    var ul = $('<ul>').addClass('order-display__ul');

    for (var i = 0; i < shoppingBasket.items.length; i++) {
        var text = shoppingBasket.items[i].dish + " x"
        + shoppingBasket.items[i].amount + " - <strong>£"
        + shoppingBasket.items[i].price*shoppingBasket.items[i].amount + "</strong>";
        $('<li>').html(shoppingBasket.items[i].dish + " x"
        + shoppingBasket.items[i].amount + " - <strong>£"
        + shoppingBasket.items[i].price*shoppingBasket.items[i].amount + "</strong>")
                .appendTo(ul);
        
        orderString+= shoppingBasket.items[i].dish + " x"
        + shoppingBasket.items[i].amount + " - £"
        + shoppingBasket.items[i].price*shoppingBasket.items[i].amount+ "\n";
    }

    ul.appendTo(orderDisplay);

    $('<h3>').addClass('order-display__total')
            .html('Total: £' + shoppingBasket.total)
            .appendTo(orderDisplay);

    $('#order-text').val(orderString);
    
}