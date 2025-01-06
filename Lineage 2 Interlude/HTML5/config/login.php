<?php

    $db_user = "ic_l2icevortex"; 
    $db_pass = "dnstuff65"; 
    $db_name = "ic_l2icevortex";
    $db_serv = "mysql.ic.cz";

    $res = mysql_connect ( $db_serv, $db_user, $db_pass ) or die ("Coudn't connect to [$db_serv]"); 
    $resls = mysql_select_db ( "$db_name",$res ); 

    return $res; 

?>                                                     