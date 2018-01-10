# Foxglove & Ginger

A Wordpress site for my local Indian takeaway.

## Important Files

wp-content
|
|-- themes
|   |
|   |-- foxginger
|   |   |
|   |   |-- menu
|   |   |-- order
|   |   |-- page-templates
|   |   |-- style.scss
|   |   |-- index.php

### Menu

Here, you'll find all the jQuery functions for the menu and the shopping basket.

**basket-render.js**

Renders the basket in jQuery.

**menu-data.js**

Stores all the menu data

**menu-functions.js**

Where the magic happens. Order functions, add and remove to basket functions, calculate total price etc.

**menu-onload.js**

Stores the window.onload function.

**menu-render.js**

Renders the menu in jQuery

### Order

Functions for the /order page

**order-onload.js**

window.onload function for the /order page

**order-render.js**

Renders the order page.

### Page-Templates

Holds the Wordpress page templates for the theme.

**menu.php**

A very simple PHP file - mostly a lot of script tags, since most of the rendering is done in jQuery.

**order.php**

Some of the rendering is done in order-render.js, but the form is rendered in HTML5.

### Other

**index.php**

The front page, rendered in HTML5. In a future update, would add customisability to this. Ideally, the front images could be edited from the Wordpress Customise screen.

**style.scss**

Holds all of the style in SASS, compiled to style.css.