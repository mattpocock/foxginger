<?php get_header(); ?>
<section class="content-area">
    <div class="container">
        <div class="col-md-8 col-xs-12 col-md-offset-2">
        <h2 class="page-heading"><?php the_title()?></h2>
        <?php
        if (have_posts()) :
        while (have_posts()) :
            the_post();
                the_content();
        endwhile;
        endif;
        ?>
        </div>
    </div>
</section>

<?php get_footer(); ?>