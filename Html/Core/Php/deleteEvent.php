<?php
	$db = mysqli_connect("localhost", "root", "", "llbec");

    /* werte übernehmen */
    $id = $_POST["id"];

    /* weiterverarbeitung der variablen/daten */

	$stmt = "DELETE FROM events WHERE Id = '$id'";

	$eintragen = mysqli_query($db, $stmt);
?>

