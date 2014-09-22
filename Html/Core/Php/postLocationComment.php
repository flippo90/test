<?php
	$db = mysqli_connect("localhost", "root", "", "llbec");

     /* werte übernehmen */
        $locationId = $_POST["targetId"];
        $text = $_POST["text"];
        $writer = $_POST["writer"];
        $uploadfile = $_POST["filename"];

        $stmt = "INSERT INTO `locationkommentare`(`Location`, `Text`, `Writer`, `Filename`) VALUES ('$locationId','$text','$writer', '$uploadfile')";
        $eintragen = mysqli_query($db, $stmt);
?>