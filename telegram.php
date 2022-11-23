<?php 
$name = $_POST['user-name'];
$phone = $_POST['user-tel'];
$email = $_POST['user-email'];
$token = "5844014807:AAEaN06rGJnplcucnOT3fh9fmuSNDUHKTnE";
$chat_id = "-819029989";
$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Email' => $email
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}
&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
    header('Location: thank-you.html');
} else {
    echo "Error";
}
?>

