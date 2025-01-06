<?php include "config/login.php" ?>
<?php include "config/status.php" ?>
<?php include "config/database.php" ?>
<?php  
//Online Players
        $query = ("SELECT * FROM characters WHERE online=1 and accesslevel>=0");
        $result = mysql_query($query) or die(mysql_error());
        $num2=mysql_numrows($result);
        $sum=$num2;
//Total Characters
$query = ("SELECT * FROM characters WHERE accesslevel>=0");
$result = mysql_query($query) or die(mysql_error());
$char2=mysql_numrows($result);

//Total Accounts
$query = ("SELECT * FROM accounts WHERE access_level>=0");

$result = mysql_query($query) or die(mysql_error());

$acc2=mysql_numrows($result);

mysql_close();

mysql_connect($db_serv,$db_user,$db_pass) or die (mysql_error());

mysql_select_db($db_name) or die(mysql_error());
?>
<center>Online Players
  <p>
   <h3><?php print ("$num2"); ?></h3>
  </p>
</center>
<?php
     
    //if ($server && $port && $timeout) {
        $game =  @fsockopen("$server", $portg, $errno, $errstr, $timeout);
        $login =  @fsockopen("$server", $portl, $errno, $errstr, $timeout);
    //}
    
        
    if($login) {
        echo "Login: <font color=#00DF00><b>Online</b></font><br>";
    }
    else {
        echo "Login: <font color=#FF0000><b>Offline</b></font><br>";
    }
    if($game) {
        echo "Game: <font color=#00DF00><b>Online</b></font><br>";
    }
    else {
        echo "Game: <font color=#FF0000><b>Offline</b></font><br>";
    }
    echo "";
?>
<p>
 Accounts: <?php print ("$acc2"); ?>
<br>
 Characters: <?php print ("$char2"); ?>
</p>