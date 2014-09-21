<?php
	$db = mysqli_connect("localhost", "root", "", "llbec");

	$ergebnis = mysqli_query($db, "SELECT * FROM responsibility");

	$locationtArray = array();
	$userArray = array();
	$idArray = array();


	while($row = mysqli_fetch_array($ergebnis)){
	     $locationtArray[] = $row['LocationId'];
	     $userArray[] = $row['UserId'];
	     $idArray[] = $row['Id'];
	}

	echo json_encode( array(
	    "locations" =>  $locationtArray,
	    "users" => $userArray,
	    "ids" => $idArray
	    )
	);
?>