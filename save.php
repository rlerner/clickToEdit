<?php
$file = fopen('log.txt','a');
fwrite($file,'Field '.$_POST['field'].' changed to '.$_POST['value'].PHP_EOL);
echo "Saved Sucessfully!";
