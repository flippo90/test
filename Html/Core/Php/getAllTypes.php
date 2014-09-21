<?php
    $db = mysqli_connect("localhost", "root", "", "llbec");

    $typeIdArray = array();
	$textArray = array();

    $ergebnis = mysqli_query($db, "SELECT * FROM art");

    while($row = mysqli_fetch_array($ergebnis))
    {
        $typeIdArray[] = $row['id'];
        $textArray[] = $row['Name'];
    }

    echo json_encode( array(
        "typeIdArray" => $typeIdArray,
        "textArray" => $textArray
        )
    );
?>