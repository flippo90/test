<?php
	$db = mysqli_connect("localhost", "root", "", "llbec");

    /* werte übernehmen */
    $eventId = $_POST["targetId"];
    $text = $_POST["text"];
    $writer = $_POST["writer"];
    $fileName = $_POST["fileName"];

    echo "hallo";
    echo $fileName;

    $imageData = mysqli_real_escape_string(file_get_contents($_FILES[$fileName]["name"]));

    echo $imageData;

	$stmt = "INSERT INTO `eventkommentare`(`Text`, `Writer`, `EventId`) VALUES ('$text','$writer', '$eventId')";
	$eintragen = mysqli_query($db, $stmt);
?>