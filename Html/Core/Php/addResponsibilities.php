<?php
	$db = mysqli_connect("localhost", "root", "", "llbec");

    /* werte übernehmen */
    $userId = $_POST["userId"];
    $locationId = $_POST["locationId"];

    /* weiterverarbeitung der variablen/daten */

	$stmt = "INSERT INTO responsibility(LocationId, UserId) VALUES ('$locationId', '$userId')";

	$eintragen = mysqli_query($db, $stmt);
?>