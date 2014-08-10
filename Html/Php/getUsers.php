<?php
	$db = mysqli_connect("localhost", "root", "", "llbec");

	$stmt = "SELECT * FROM `users`";

	$ergebnis = mysqli_query($db, $stmt);

    $ids = array();
	$usernames = array();
	$passwords = array();
	$roles = array();
	$emails = array();

	while($row = mysqli_fetch_array($ergebnis)){
	     $ids[] = $row['Id'];
	     $usernames[] = $row['Username'];
	     $passwords[] = $row['Password'];
	     $roles[] = $row['Role'];
	     $emails[] = $row['Email'];
	}

	echo json_encode( array(
	    "ids" => $ids,
	    "usernames" =>  $usernames,
	    "passwords" => $passwords,
	    "roles" => $roles,
	    "emails" => $emails
	    )
	);
?>