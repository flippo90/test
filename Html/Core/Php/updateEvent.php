<?php
	$db = mysqli_connect("localhost", "root", "", "llbec");

    /* werte übernehmen */
    $userId = $_POST["id"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $role = $_POST["role"];

    /* weiterverarbeitung der variablen/daten */

	$stmt = "UPDATE users SET Username='$name',Password='$password',Role='$role',Email='$email' WHERE Id = '$userId'";

	$eintragen = mysqli_query($db, $stmt);
?>