<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/_styles/tailwinds.css">
    <link rel="stylesheet" href="/_styles/prism.css">
    <link rel="stylesheet" href="/_styles/index.css">
</head>
<?php if (
    !isset($_GET["path"])
) {
    $_GET["path"] = "";
} ?>

<body>
    <section class="w-full py-10 px-10">
        <section class="text-gray-400 body-font">
            <div class="">
                <a href="/render" class="text-4xl text-white ">Components</a>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
                    <?php
                    $show_iframe = 0;
                    $path = $_GET["path"];
                    $filepath = "../components/$path";
                    if (is_dir($filepath)) {
                        $files = scandir($filepath);
                        foreach ($files as $file) {
                            if ($file == ".." || $file == ".") continue;
                            if (!is_dir($file)) {
                                $show_iframe = 1;
                            }
                    ?>
                            <div>
                                <div class="p-4">
                                    <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <img src="" alt="">
                                        <div class="p-6">
                                            <h1 class="title-font text-lg font-medium text-white mb-3 mt-3"><?php echo $file ?? "Unknown"; ?></h1>
                                            <div class="flex items-center flex-wrap grid-cols-1 grid gap-5">
                                                <a href="./?path=<?php echo $path . "/" . $file ?? "Unknown"; ?>" class="w-full bg-green-500 py-3 rounded text-white text-center">Open</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php
                        }
                    } else {
                        if (isset($_GET["path"])) {
                            $file = $_GET["path"];
                            $filepath = "../components/$file";
                            if (file_exists($filepath)) {
                                // header('Content-Description: File Transfer');
                                // header('Content-Type: application/octet-stream');
                                // header('Content-Disposition: attachment; filename=' . basename($filepath));
                                // header('Content-Transfer-Encoding: binary');
                                // header('Expires: 0');
                                // header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
                                // header('Pragma: public');
                                // header('Content-Length: ' . filesize($filepath));
                                // ob_clean();
                                // flush();
                                echo "<pre class='col-span-2'><code class='language-html'>";
                                echo htmlentities(file_get_contents($filepath));
                                echo "</code></pre>";
                                echo '<script src="/_scripts/prism.js"></script>';
                                exit;
                            }
                        }
                        ?>
                    <?php } ?>
                </div>
            </div>
        </section>
    </section>
</body>


</html>