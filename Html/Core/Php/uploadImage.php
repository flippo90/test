<?php

	$db = mysqli_connect("localhost", "root", "", "llbec");

    if ( !empty( $_FILES ) ) {

        if ($_FILES['userfile']['name'] != ''){
            $uploaddir = '../../../Uploads/';
            $uploadfile = $uploaddir . basename($_FILES['userfile']['name']);


            echo '<pre>';
            if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
                echo "Datei ist valide und wurde erfolgreich hochgeladen.\n";
            } else {
                echo "Möglicherweise eine Dateiupload-Attacke!\n";
            }

            echo 'Weitere Debugging Informationen:';
            print_r($_FILES);

            print "</pre>";
        }



    } else {
        echo 'No files';
    }
?>