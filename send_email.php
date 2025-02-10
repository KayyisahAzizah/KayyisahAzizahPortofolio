<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $number = $_POST['number'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set email details
    $to = "Kayyisah0805@gmail.com";  
    $subject = "New Contact Form Submission from $name";
    $body = "You have received a new message from the contact form:\n\n".
            "Name: $name\n".
            "Number: $number\n".
            "Email: $email\n".
            "Message: $message\n";

    // Set headers
    $headers = "From: no-reply@example.com" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for contacting us, we will get back to you soon.";
    } else {
    }
}
?>
