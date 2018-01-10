// Renders menu
function renderMenu() {

    var menu = $('#menu');

    // Iterates over sections
    for (var i = 0; i < MENU_DATA.sections.length; i++) {
        
        var sectionDiv = $('<div>').addClass('col-xs-12 col-md-7'),
            section = MENU_DATA.sections[i];

        $('<h2>').addClass('menu__section-title').html(section.title).appendTo(sectionDiv);
        $('<p>').addClass('menu__section-desc').html(section.desc).appendTo(sectionDiv);

        // Iterates over subsections
        for (var o = 0; o < section.subsections.length; o++) {

            var subsectionDiv = $('<div>'),
                list = $('<ul>').addClass('menu__ul');

            $('<h3>').addClass('menu__subsection-title')
                    .html(section.subsections[o].title)
                    .appendTo(subsectionDiv);
            
            for (var p = 0; p < section.subsections[o].dishes.length; p++) {
                var li = $('<li>').addClass('menu__li');
                
                $('<span>').addClass('menu__li__text')
                        .html(section.subsections[o].dishes[p].dish)
                        .appendTo(li);
                $('<a>').addClass('slide-button')
                        .html('Add To Basket')
                        .attr('onclick', 'addToBasket("'+
                                section.subsections[o].dishes[p].dish + '",' + 
                                section.subsections[o].dishes[p].price +')')
                        .appendTo(li);
                $('<div>').addClass('price-box')
                        .html('<span>£' + section.subsections[o].dishes[p].price + '</span>')
                        .appendTo(li);
                
                li.appendTo(list);
            }

            list.appendTo(subsectionDiv);
            subsectionDiv.appendTo(sectionDiv);

        }

        sectionDiv.appendTo(menu);

    }

}