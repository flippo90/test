<?php
	$db = mysqli_connect("localhost", "root", "", "llbec");

	$ergebnis = mysqli_query($db, "SELECT * FROM `eventkommentare` ORDER BY Id DESC");

	$commentIdArray = array();
	$eventIdArray = array();
	$textArray = array();
	$writerArray = array();
	$timestampArray = array();
    $filePathArray = array();


	while($row = mysqli_fetch_array($ergebnis)){
	     $commentIdArray[] = $row['Id'];
	     $eventIdArray[] = $row['EventId'];
	     $textArray[] = $row['Text'];
	     $writerArray[] = $row['Writer'];
	     $timestampArray[] = $row['Timestamp'];
         $filePathArray[] = $row['Filename'];
	}

	echo json_encode( array(
	    "commentIds" =>  $commentIdArray,
	    "myEvents" => $eventIdArray,
	    "texts" => $textArray,
	    "writers" => $writerArray,
	    "timestamps" => $timestampArray,
	    "filename" => $filePathArray
	    )
	);
?>