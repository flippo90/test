<?php
	$db = mysqli_connect("localhost", "root", "", "llbec");

    /* werte übernehmen */
    $eventId = $_POST["targetId"];
    $text = $_POST["text"];
    $writer = $_POST["writer"];
     $uploadfile = $_POST["filename"];

	$stmt = "INSERT INTO `eventkommentare`(`Text`, `Writer`, `EventId`, `Filename`) VALUES ('$text','$writer', '$eventId', '$uploadfile')";
	$eintragen = mysqli_query($db, $stmt);
?>