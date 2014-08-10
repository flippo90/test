<?php
	$db = mysqli_connect("localhost", "root", "", "llbec");

    /* werte übernehmen */
    $userId = $_POST["userId"];

    /* weiterverarbeitung der variablen/daten */

	$stmt = "DELETE FROM responsibility WHERE `UserId` = '$userId'";

	$eintragen = mysqli_query($db, $stmt);
?>