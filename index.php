<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.typekit.net/rcr1opg.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="./_styles/tailwinds.css">
    <link rel="stylesheet" href="./_styles/primary.css">
    <title>PasteSite - Create New Paste</title>
    <link rel="icon" href="./_styles/favicon.png">
    <script src="./_scripts/primary.js"></script>
    <meta charset="UTF-8">
</head>
<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">

<body class="bg-dark">
    <div class="min-h-screen flex flex-row bg-gray-100 bg-dark-500">
        <div class="w-full flex flex-wrap justify-center">
            <div class="w-11/12 flex flex-wrap justify-center">
                <form class="py-2 w-full mt-10" action="./new_paste.php">
                    <h1 class="w-full md:w-auto text-gray-200 text-xl text-opacity-80 float-right">CREATE NEW PASTE</h1>
                    <button type="submit" class="w-full md:w-auto mt-5 md:mt-0 border-2 bg-violet hover:bg-dark-400 duration-500 transition border-violet px-8 text-gray-200 py-2 rounded-md">SAVE</button>
                    <select name="mark" class="w-full md:w-auto mt-5 md:mt-0 px-8 text-gray-200 py-3 border-r-4 border-dark-400 focus:outline-none rounded-md bg-dark-400">
                        <option value="none">None</option>
                        <option value="c">C</option>
                        <option value="go">Go</option>
                        <option value="csharp">C#</option>
                        <option value="cpp">C++</option>
                        <option value="css">CSS</option>
                        <option value="sql">SQL</option>
                        <option value="lua">Lua</option>
                        <option value="txt">Txt</option>
                        <option value="git">Git</option>
                        <option value="php">Php</option>
                        <option value="pug">Pug</option>
                        <option value="html">HTML</option>
                        <option value="dart">Dart</option>
                        <option value="perl">Perl</option>
                        <option value="ruby">Ruby</option>
                        <option value="ruby">Ruby</option>
                        <option value="rust">Rust</option>
                        <option value="java">Java</option>
                        <option value="haxe">Haxe</option>
                        <option value="batch">Batch</option>
                        <option value="python">Python</option>
                        <option value="kotlin">Kotlin</option>
                        <option value="prolog">Prolog</option>
                        <option value="fortran">Fortran</option>
                        <option value="groovy">Groovy</option>
                        <option value="haskell">Haskell</option>
                        <option value="clojure">Clojure</option>
                        <option value="markdown">Markdown</option>
                        <option value="typescript">Typecript</option>
                        <option value="javacript">Javascript</option>
                        <option value="vb">Visual Basics</option>
                    </select>
                    <input name="name" type="text" class="normal-font bg-dark-400 w-full rounded-md px-4 py-3 mt-5 focus:outline-none text-gray-200" placeholder="ENTER PASTE TITLE">
                    <textarea id="content" name="content" placeholder="ENTER PASTE CONTENT" class="content mt-5 normal-font rounded-md resize-none w-full h-auto focus:outline-none bg-dark-400 py-4 px-4 text-gray-300 h-screen"></textarea>
                </form>
                <div class="w-full bg-dark-400 py-2 rounded-md mb-5">
                    <a href="" target="_blank" class="text-xs text-gray-200 px-5">Click here to create your own paste bin website</a>
                </div>
            </div>
        </div>
    </div>
</body>

</html>