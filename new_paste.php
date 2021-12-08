<?php
require_once("./database.php");
header("Content-type: application/json");

if (isset($_GET["name"])) {
    if (isset($_GET["mark"])) {
        if (isset($_GET["content"])) {
            $ID = toID(6);
            $CREATED = time();
            $MARK = strval(htmlentities($_GET["mark"]));
            $CONTENT = $SQL->real_escape_string($_GET["content"]);
            $NAME = $SQL->real_escape_string(strval(htmlentities($_GET["name"])));
            $QUERY = $SQL->query("INSERT INTO pastes(created, id, mark, name, content) VALUES('$CREATED', '$ID', '$MARK', '$NAME', '$CONTENT')");
            if ($QUERY == true) {
                echo json_encode([
                    "Success" => true,
                    "Message" => "Successfuly created paste"
                ]);
                header("Location: ./paste.php?id=$ID");
            } else {
                echo json_encode([
                    "Success" => false,
                    "Message" => "Error occured while creating paste",

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
