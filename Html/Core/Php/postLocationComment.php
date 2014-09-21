<?php
	$db = mysqli_connect("localhost", "root", "", "llbec");

    /* werte übernehmen */
    $locationId = $_POST["targetId"];
    $text = $_POST["text"];
    $writer = $_POST["writer"];
   	
	$stmt = "INSERT INTO `locationkommentare`(`Location`, `Text`, `Writer`) VALUES ('$locationId','$text','$writer')";
	$eintragen = mysqli_query($db, $stmt);
?>