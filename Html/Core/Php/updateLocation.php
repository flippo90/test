<?php
	$db = mysqli_connect("localhost", "root", "", "llbec");

    /* werte übernehmen */
    $userId = $_POST["id"];
    $name = $_POST["name"];
    $email = $_POST["openingTime"];

    /* weiterverarbeitung der variablen/daten */

	$stmt = "UPDATE locations SET Name='$name',Oeffnungszeiten='$openingTime' WHERE Id = '$id'";

	$eintragen = mysqli_query($db, $stmt);
?>