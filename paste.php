<!DOCTYPE html>
<html lang="en"><?php $PASTE_FOUND = false;
                require_once("./database.php");
                if (isset($_GET["id"])) {
                    $ID = htmlentities($_GET["id"]);
                    $get_paste_query_count = $SQL->query("SELECT COUNT(*) AS 'COUNT' FROM pastes WHERE id = '$ID'");
                    while ($count = $get_paste_query_count->fetch_assoc()) {
                        if ($count["COUNT"] > 0) {
                            $get_paste_query = $SQL->query("SELECT * FROM pastes WHERE id = '$ID'");
                            while ($row = $get_paste_query->fetch_assoc()) {
                                $CONTENT = htmlspecialchars($row["content"]);
                                $MARK = htmlspecialchars($row["mark"]);
                            }
                            global $MARK;
                            global $CONTENT;
                            $PASTE_FOUND = true;
                        } else {
                            $PASTE_FOUND = false;
                        }
                        global $PASTE_FOUND;
                    }
                } ?>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.typekit.net/rcr1opg.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="./_styles/tailwinds.css">
    <link rel="stylesheet" href="./_styles/primary.css">
    <link href="./_styles/prism.css" rel="stylesheet">
    <script src="./_scripts/prism.js"></script>
    <link rel="icon" href="./_styles/favicon.png">
    <title>PasteSite - Paste: <?php if (isset($_GET["id"])) {
                                    echo htmlentities($_GET["id"]);
                                } ?></title>
    <meta charset="UTF-8">
</head>

<body class="bg-dark bg-dark-500" style="background-color: #171a1f;">
    <pre class="focus:outline-none line-numbers linkable-line-numbers" data-line="" data-src="plugins/line-highlight/prism-line-highlight.js" data-src-status="loaded" data-start="1" id="Line" style="counter-reset:linenumber 19" tabindex="0"><code class="focus:outline-none language-<?php if ($PASTE_FOUND) {
                                                                                                                                                                                                                                                                                                echo $MARK;
                                                                                                                                                                                                                                                                                            } ?>"><?php if (isset($CONTENT)) {
                                                                                                                                                                                                                                                                                                        echo $CONTENT;
                                                                                                                                                                                                                                                                                                    } ?></code></pre>
</body>

</html>