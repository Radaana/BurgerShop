<?php

    $fullname = $_POST['fullname'];
    $phone = $_POST['phone'];
    $street = $_POST['street'];
    $housenum = $_POST['housenum'];
    $building = $_POST['building'];
    $flatnum = $_POST['flatnum'];
    $floor = $_POST['floor'];

    $message = $_POST['message'];
    $pay = $_POST['payment'];

    $disturb = $_POST['dont-disturb']; // 1 или null 
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА'; 

    $mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя: ' . $fullname . '</li>
                <li>Телефон: ' . $phone . '</li>
                <li>Улица: ' . $street . '</li>
                <li>Дом: ' . $housenum . '</li>
                <li>Корпус: ' . $building  . '</li>
                <li>Номер квартиры: ' . $flatnum  . '</li>
                <li>Этаж: ' . $floor  . '</li>
                <li>Комментарии к заказу: ' . $message . '</li>
                <li>Способ оплаты: ' . $pay . '</li>
                <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
            </ul>
        </body>
    </html>    
    ';

    $headers = "From: Сайт бургерной <admin@burgershop.com>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('tarrenfuere@gmail.com', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    } else {
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);


?>