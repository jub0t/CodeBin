<?php
require_once("./database.php");
header("Content-type: application/json");

if (isset($_GET["name"])) {
    if (isset($_GET["mark"])) {
        if (isset($_GET["content"])) {
            $ID = uniqid();
            $CREATED = time();
            $NAME = strval(htmlentities($_GET["name"]));
            $MARK = strval(htmlentities($_GET["mark"]));
            $CONTENT = strval(htmlentities($_GET["content"]));
            $QUERY = "INSERT INTO pastes(created, id, mark, name, content) VALUES('$CREATED', '$ID', '$MARK', '$NAME', '$CONTENT')";
            if (mysqli_query($SQL, $QUERY)) {
                echo json_encode([
                    "Success" => true,
                    "Message" => "Successfuly created paste"
                ]);
                header("Location: ./paste.php?id=$ID");
            } else {
                echo json_encode([
                    "Success" => false,
                    "Message" => "Error occured while creating paste",
                    "Query" => $QUERY,

                ]);
            }
        } else {
            echo json_encode([
                "Success" => false,
                "Message" => "Paste Content Not Found"
            ]);
        }
    } else {
        echo json_encode([
            "Success" => false,
            "Message" => "Paste Marking Not Found"
        ]);
    }
} else {
    echo json_encode([
        "Success" => false,
        "Message" => "Paste Name Not Found"
    ]);
}
