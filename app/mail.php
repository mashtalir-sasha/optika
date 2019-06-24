<?
	if(isset ($_POST['title'])) {$title=$_POST['title'];}
	if(isset ($_POST['name'])) {$name=$_POST['name'];}
	if(isset ($_POST['phone'])) {$phonenum=$_POST['phone'];}

	if(isset ($_POST['type'])) {$type=$_POST['type'];}
	if(isset ($_POST['pack'])) {$pack=$_POST['pack'];}
	if(isset ($_POST['radius'])) {$radius=$_POST['radius'];}

	if(isset ($_POST['right'])) {$right=$_POST['right'];}
	if(isset ($_POST['left'])) {$left=$_POST['left'];}

	if(isset ($_POST['right-force'])) {$rightforce=$_POST['right-force'];}
	if(isset ($_POST['right-quantity'])) {$rightquantity=$_POST['right-quantity'];}

	if(isset ($_POST['left-force'])) {$leftforce=$_POST['left-force'];}
	if(isset ($_POST['left-quantity'])) {$leftquantity=$_POST['left-quantity'];}

	if(isset ($_POST['solution'])) {$solution=$_POST['solution'];}

	if(isset ($_POST['postal'])) {$postal=$_POST['postal'];}

	if(isset ($_POST['lens'])) {$lens=$_POST['lens'];}
	if(isset ($_POST['volume'])) {$volume=$_POST['volume'];}

	if(isset ($_POST['summa'])) {$summa=$_POST['summa'];}


	$to = "crm@elit-optika.com.ua"; // Замениь на емаил клиента

	$message = "Форма: $title <br><br>";
	if ( $name || $phonenum || $pack || $type || $radius || $rightforce || $rightquantity || $leftforce || $leftquantity || $solution || $postal || $lens || $volume || $summa ) {
		$message .= ""
			. ( $name ?" Имя:  $name <br>" : "")
			. ( $phonenum ?" Телефон:  $phonenum <br>" : "")
			. ( $pack ?" $pack <br>" : "")
			. ( $type ?" Одинаковые/разные:  $type <br>" : "")
			. ( $radius ?" Радиус:  $radius <br>" : "")
			. ( $rightforce ?" Оптическая сила:  $rightforce <br>" : "")
			. ( $rightquantity ?" Количество:  $rightquantity <br>" : "")
			. ( $leftforce ?" Оптическая сила:  $leftforce <br>" : "")
			. ( $leftquantity ?" Количество:  $leftquantity <br>" : "")
			. ( $solution ?" Раствор:  $solution <br>" : "")
			. ( $postal ?" Новая Почта:  $postal <br>" : "")
			. ( $lens ?" Линзы:  $lens <br>" : "")
			. ( $volume ?" Обьем:  $volume <br>" : "")
			. ( $summa ?" Сумма заказа:  $summa <br>" : "");
	}

	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=UTF-8\r\n";
	$headers .= "From: no-reply@elit-optika.com.ua"; // Заменить домен на домен клиента

	if (!$title && !$phonenum) {
	} else {
		mail($to,"New lead(elit-optika.com.ua)",$message,$headers); // Заменить домен на домен клиента
	}
?>