<!DOCTYPE html>
<html lang="en">

<head>
<<<<<<< HEAD
=======
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="./_styles/tailwinds.css">
    <link rel="stylesheet" href="./_styles/index.css">
    <link rel="stylesheet" href="./_styles/prism.css">
    <link rel="icon" href="./_styles/favicon.png">
    <title>PasteSite - Create New Paste</title>
>>>>>>> f028157ba2aabb8678e430ebd763bbb3093eab2f
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./_styles/tailwinds.css">
    <link rel="stylesheet" href="./_styles/index.css">
</head>

<<<<<<< HEAD
<body>
    <section class="w-full py-10 px-10">
        <section class="text-gray-400 body-font">
            <div class="">
                <h2>Download Free Templates & Components</h2>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
                    <div>
                        <div class="p-4">
                            <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                <img src="" alt="">
                                <div class="p-6">
                                    <h1 class="title-font text-lg font-medium text-white mb-3 mt-3">Components</h1>
                                    <div class="flex items-center flex-wrap grid-cols-1 grid gap-5">
                                        <a href="/render" class="w-full bg-green-500 py-3 rounded text-white text-center">Download Now</a>
                                    </div>
                                </div>
                            </div>
=======
<?php
require_once("./database.php");
if (isset($_POST["name"])) {
    if (isset($_POST["mark"])) {
        if (isset($_POST["content"])) {
            $ID = toID(6);
            $CREATED = time();
            $MARK = strval(htmlentities($_POST["mark"]));
            $CONTENT = $SQL->real_escape_string($_POST["content"]);
            $NAME = $SQL->real_escape_string(strval(htmlentities($_POST["name"])));
            if (!isset($NAME)) {
                $NAME = "Unnamed Paste";
            }
            $QUERY = $SQL->query("INSERT INTO pastes(created, id, mark, name, content) VALUES('$CREATED', '$ID', '$MARK', '$NAME', '$CONTENT')");
            if ($QUERY == true) {
                echo json_encode([
                    "Success" => true,
                    "Message" => "Successfuly created paste"
                ]);
                header("Location: ./paste.php?id=$ID");
            } else {
            }
        }
    }
}

?>

<body class="slidein bg-dark">
    <div class="flex flex-row">
        <div class="w-full flex flex-wrap justify-center">
            <div class="w-11/12 flex flex-wrap justify-center">
                <!-- Basic Form, POST Method To Upload large Data -->
                <form method="POST" action="" class="py-2 w-full mb-10 mt-10" enctype="multipart/form-data">
                    <div class="md:grid-cols-2 grid">
                        <div>
                            <h1 class="w-full md:w-auto text-gray-200 text-xl text-opacity-80">CREATE NEW PASTE</h1>
                        </div>
                        <div class="space-x-3">
                            <!-- Highlighting Languages Add More If Needed https://prismjs.com/download.html -->
                            <select required name="mark" class="ml-3 w-full md:w-auto mt-5 float-right md:mt-0 px-8 text-gray-200 py-3 border-r-4 border-dark-400 focus:outline-none rounded-md bg-dark-400">
                                <option value="none">None</option>
                                <option value="c">C</option>
                                <option value="go">Go</option>
                                <option value="csharp">C#</option>
                                <option value="cpp">C++</option>
                                <option value="css">CSS</option>
                                <option value="ejs">Ejs</option>
                                <option value="sql">SQL</option>
                                <option value="xml">XML</option>
                                <option value="lua">Lua</option>
                                <option value="txt">Txt</option>
                                <option value="git">Git</option>
                                <option value="php">Php</option>
                                <option value="pug">Pug</option>
                                <option value="dot">Dot</option>
                                <option value="sass">Sass</option>
                                <option value="html">HTML</option>
                                <option value="dart">Dart</option>
                                <option value="twig">Twig</option>
                                <option value="nginx">Nginx</option>
                                <option value="perl">Perl</option>
                                <option value="ruby">Ruby</option>
                                <option value="toml">Toml</option>
                                <option value="rust">Rust</option>
                                <option value="yaml">Yaml</option>
                                <option value="java">Java</option>
                                <option value="haxe">Haxe</option>
                                <option value="batch">Batch</option>
                                <option value="python">Python</option>
                                <option value="kotlin">Kotlin</option>
                                <option value="matlab">Matlab</option>
                                <option value="docket">Docker</option>
                                <option value="prolog">Prolog</option>
                                <option value="fortran">Fortran</option>
                                <option value="groovy">Groovy</option>
                                <option value="haskell">Haskell</option>
                                <option value="lua">URI + URL</option>
                                <option value="clojure">Clojure</option>
                                <option value="markdown">Markdown</option>
                                <option value="typescript">Typecript</option>
                                <option value="chaiscript">ChaiScript</option>
                                <option value="js">Javascript</option>
                                <option value="objectivec">Objective-C</option>
                                <option value="as">Actionscript</option>
                                <option value="vb">Visual Basics</option>
                                <option value="dns-zone-file">DNS Zone File</option>
                            </select>
                            <button name="submit" type="submit" formmethod="POST" class="float-right w-full md:w-auto mt-5 md:mt-0 border-2 bg-violet hover:bg-dark-400 duration-500 transition border-violet px-8  text-gray-200 py-2  rounded-md">SAVE</button>
>>>>>>> f028157ba2aabb8678e430ebd763bbb3093eab2f
                        </div>
                    </div>
                    <div>
                        <div class="p-4">
                            <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                <img src="" alt="">
                                <div class="p-6">
                                    <h1 class="title-font text-lg font-medium text-white mb-3 mt-3">Templates</h1>
                                    <div class="flex items-center flex-wrap grid-cols-1 grid gap-5">
                                        <a href="/temp" class="w-full bg-green-500 py-3 rounded text-white text-center">Download Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</body>

</html>