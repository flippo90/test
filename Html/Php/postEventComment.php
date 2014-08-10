<?php
	$db = mysqli_connect("localhost", "root", "", "llbec");

    /* werte übernehmen */
    $eventId = $_POST["targetId"];
    $text = $_POST["text"];
    $writer = $_POST["writer"];
   	
	$stmt = "INSERT INTO `eventkommentare`(`Text`, `Writer`, `EventId`) VALUES ('$text','$writer', '$eventId')";
	$eintragen = mysqli_query($db, $stmt);
?>