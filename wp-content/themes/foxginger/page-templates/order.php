<?php /* Template Name: Order */ ?>

<?php get_header() ?>

<section class="content-area">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-xs-12">
                <h2 class="order-display__title">Your Order</h2>
                <div id="order-display"></div>
            </div>
            <div class="col-md-4 col-xs-12 order-form">
                <h2 class="order-display__title">Your Details</h2>
                <form name="orderform" method="post"
                        action="<?php echo get_bloginfo('template_directory'); ?>/send_form_email.php">
                    <input type="hidden" name="ordertext" id="order-text"/>
                    <p>Name</p>
                    <input type="text" name="name" required></input>
                    <p>Address</p>
                    <input type="text" name="address1" required></input>
                    <input type="text" name="address2"></input>
                    <p>Postcode</p>
                    <input type="text" name="postcode" required></input>
                    <p>Email</p>
                    <input type="text" name="email" required></input>
                    <p>Phone</p>
                    <input type="text" name="phone"></input>
                    <p>Comments</p>
                    <textarea name="comments"></textarea>
                
            </div>
            <div class="col-md-4 col-xs-12">
                <h2 class="order-display__title">Terms and Conditions</h2>
                <p><strong>Pay in Cash</strong>: Make sure that you've got your cash ready for when we arrive.</p>
                <p><strong>Check for Confirmation</strong>: We'll let you know by email when your order will be delivered.</p>
                <p><strong>Double-Check Your Details</strong>: Make sure everything on the form is correct. Otherwise, your food won't reach you!</p>
                <input type="submit" class="slide-button"/>
            </div>
            </form>
        </div>
    </div>
</section>

<script src="<?php echo get_bloginfo('template_directory'); ?>/order/order-render.js"></script>
<script src="<?php echo get_bloginfo('template_directory'); ?>/order/order-onload.js"></script>

<?php get_footer() ?>