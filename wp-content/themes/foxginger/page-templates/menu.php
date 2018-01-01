<?php /* Template Name: Menu */ ?>

<?php get_header();?>
<section class="content-area">
    <div class="container" id="menu"/>
</section>

<script src="<?php echo get_bloginfo('template_directory'); ?>/menu/menu-data.js"></script>
<script src="<?php echo get_bloginfo('template_directory'); ?>/menu/menu-render.js"></script>
<script src="<?php echo get_bloginfo('template_directory'); ?>/menu/basket-render.js"></script>
<script src="<?php echo get_bloginfo('template_directory'); ?>/menu/menu-functions.js"></script>
<script src="<?php echo get_bloginfo('template_directory'); ?>/menu/menu-onload.js"></script>
<?php get_footer();?>