<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require "phpmailer/src/Exception";
	require "phpmailer/src/PHPMailer";

	$mail = new PHPMailer(true);
	$mail->CharSet = "UTF-8";
	$mail->serLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->serFrom('contact@unionsmarttech.ru', "Пусич");
	// Кому отправить
	$mail->addAddress('irigrigoryeva27@gmail.com');
	// Тема письма
	$mail->Subject = 'Привет, это я!';

	// Тело письма
	$body = "<h1>Встречайте супер письмо!</h1>";

	if(trim(!empty($_POST['name']))) { // Проверка на пустоту поля
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))) {
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>'; 
	}
	if(trim(!empty($_POST['company']))) {
		$body.='<p><strong>Компания:</strong> '.$_POST['company'].'</p>' ;
	}
	if(trim(!empty($_POST['message']))) {
		$body.='<p><strong>Сообщение</strong> '.$_POST['message'].'</p>' ;
	}

	
	// Прикрепить файл
	if (!empty($_FILES['image']['tmp_name'])) {
		// Путь загрузки файла
		$filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
		//Грузим файл
		if(copy($_FILES['image']['tmp_name'], $filePath)){
			$fileAttach = $filePath;
			$body.='<p><strong>Фото в приложении</strong></p>';
			$mail->addAttachment($fileAttach);
		}
	}
	
	$mail->Body = $body;

	// Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = "Данные отправлены!";
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
	?>