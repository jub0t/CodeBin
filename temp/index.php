<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../_styles/tailwinds.css">
    <link rel="stylesheet" href="../_styles/index.css">
</head>

<body>
    <section class="w-full py-10 px-10">
        <section class="text-gray-400 body-font">
            <div class="">
                <a href="/temp" class="text-4xl text-white ">Templates</a>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
                    <?php
                    $tempren = 0;
                    $templates = scandir("../templates");
                    foreach ($templates as $key) {
                        if ($key == ".." || $key == ".") continue;
                    ?>
                        <div>
                            <div class="p-4">
                                <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                    <img src="" alt="">
                                    <div class="p-6">
                                        <img src="<?php echo file_exists("../templates/$key/preview.jpg") ? "/templates/$key/preview.jpg" : null ?>" class="rounded w-full">
                                        <h1 class="title-font text-lg font-medium text-white mb-3 mt-3"><?php echo $key ?></h1>
                                        <div class="flex items-center flex-wrap grid-cols-2 grid gap-5">
                                            <a href="<?php echo "/templates/$key" ?>" target="_blank" class="w-full bg-dark-400 py-3 rounded text-white text-center">Live Preview</a>
                                            <a href="" class="w-full bg-green-500 py-3 rounded text-white text-center">Download</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php
                    }
                    ?>
                </div>
            </div>
        </section>
    </section>
</body>

</html>