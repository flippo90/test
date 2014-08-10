<?php
	$db = mysqli_connect("localhost", "root", "", "llbec");

    /* werte übernehmen */
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $role = $_POST["role"];

    /* weiterverarbeitung der variablen/daten */

	$stmt = "INSERT INTO users(Username, Password, Role, Email) VALUES ('$name', '$password', '$role', '$email')";

	$eintragen = mysqli_query($db, $stmt);
?>