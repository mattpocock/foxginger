<?php
if(isset($_POST['email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "mpocock@me.com";
    $email_subject = "Contact from Foxglove & Ginger";
 
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
     
    $ordertext = $_POST['ordertext']; // required
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $phone = $_POST['phone']; // required
    $address1 = $_POST['address1']; // required
    $address2 = $_POST['address2'];
    $postcote = $_POST['postcode']; // required
    $comments = $_POST['comments']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "Order: ".clean_string($ordertext)."\n";
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Phone: ".clean_string($phone)."\n";
    $email_message .= "Address 1: ".clean_string($address1)."\n";
    $email_message .= "Address 2: ".clean_string($address2)."\n";
    $email_message .= "Postcode: ".clean_string($postcode)."\n";
    $email_message .= "Message: ".clean_string($comments)."\n";
 
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

header('Location: /foxginger/order-sent');exit;}?>