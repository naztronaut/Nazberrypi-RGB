<?php
/*
	Author: Nazmus Nasir
	Website: https://www.EasyProgramming.net
*/

if(isset($_GET['red'])){
    $red = $_GET['red'];
    $green = $_GET['green'];
    $blue = $_GET['blue'];
    
    //trigger rgb.py python code with the red, green, and blue params
    $output = exec('python rgb.py ' . $red . ' ' . $green . ' ' . $blue . ' 2>&1');
    
    //ouput for troubleshooting
    echo $output . '<br />'; 
}

?>
