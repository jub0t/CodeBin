
<?php
header("Content-type: application/json");
function dir_tree($dir_path)
{
    $rdi = new \RecursiveDirectoryIterator($dir_path);

    $rii = new \RecursiveIteratorIterator($rdi);

    $tree = [];

    foreach ($rii as $splFileInfo) {
        $file_name = $splFileInfo->getFilename();

        // Skip hidden files and directories.
        if ($file_name[0] === '.') {
            continue;
        }

        $path = $splFileInfo->isDir() ? array($file_name => array()) : array($file_name);

        for ($depth = $rii->getDepth() - 1; $depth >= 0; $depth--) {
            $path = array($rii->getSubIterator($depth)->current()->getFilename() => $path);
        }

        $tree = array_merge_recursive($tree, $path);
    }

    return $tree;
}
echo json_encode(dir_tree('../components/html'));

?>