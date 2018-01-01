<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="<?php echo get_bloginfo('template_directory'); ?>/style.css" rel="stylesheet">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond|Economica|Great+Vibes|Khand" rel="stylesheet">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
<?php wp_head();?>
</head>

<body>



<section class="home-background">
    <div class="container nav-bar__container">
        <div class="nav-bar">
            <?php wp_nav_menu( array( 'theme_location' => 'header-menu' ) ); ?>
        </div>
        <div class="row">
            <div class="col-xs-12 title-text__container">
                <a href="/" class="title-text__link">
                    <h1 class="title-text">Foxglove & Ginger</h1>
                </a>
                <h2 class="subtitle-text">Authentic East African & Indian Cuisine</h2>
            </div>
        </div>
        <div class="row">
        <div class="col-xs-12 title-text__buttons">
            <a class="slide-button">Menu</a>
        </div>
        </div>
    </div>

</section>