<?php
$name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
$phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
$email = filter_var($_POST["email"], FILTER_SANITIZE_STRING);
$service = filter_var($_POST["service"], FILTER_SANITIZE_STRING);
$message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
$errors;

if(empty($name)){
    $errors .= "Enter your name";
} else{
    $user_name = $name;
}
if(empty($phone)){
    $errors .= "Enter your phone";
} else{
    $user_phone = $phone;
}
if(empty($email)){
    $errors .= "Enter your email";
} else{
    $user_email = $email;
}
if(empty($message)){
    $errors .= "Write your message";
} else{
    $user_message = $massege;
}

$to = "katedasha12@gmail.com";
$mailBody = "New massege!";
$mailBody .= "\n";
$mailBody .= "Name:  " . $user_name ."\n";
$mailBody .= "Number: " . $user_phone ."\n";
$mailBody .= "Email: " . $user_email ."\n";
$mailBody .= "Message: " . $user_message ."\n";

if(mail($to, 'New message!', $mailBody)){
    $output = "OK";
    die($output);
} else{
    $output = $errors;
    die($output);
}
?>